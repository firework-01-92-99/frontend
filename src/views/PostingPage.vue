<template>
  <div class="bg-gray-2 h-full font-sans-thai">
    <!-- header -->
    <div
      class="hero 2xl:h-64 xl:h-64 lg:h-64 md:h-64 h-32"
      style="
        background-image: url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="w-full">
          <h1
            class="
              mb-5
              2xl:text-5xl
              xl:text-5xl
              lg:text-5xl
              md:text-4xl
              text-xl
              font-bold
            "
          >
            สร้างประกาศรับสมัครงานของคุณไว้ที่นี่
          </h1>
          <!-- <p class="mb-5">ค้นหางานที่ใช่ ให้คุณได้ทำงานที่ชอบ</p> -->
        </div>
      </div>
    </div>
    <!-- search criteria & job card -->
    <div class="hero 2xl:h-48 xl:h-48 lg:h-48 md:h-48 bg-gray-1">
      <div
        class="
          form-control
          grid
          2xl:grid-cols-4
          xl:grid-cols-4
          lg:grid-cols-4
          md:grid-cols-4
          grid-rows-4
          gap-4
          w-11/12
          font-sans-thai
          mt-0
          2xl:mt-6
          xl:mt-6
          lg:mt-6
          md:mt-6
        "
      >
        <div class="w-full flex-col mt-6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
          <p class="font-semibold 2xl:text-base md:text-xs">ค้นหาตำแหน่งงาน</p>
          <input
            v-model.trim="filter.enterEstOrPost"
            type="text"
            placeholder="ใส่ชื่อตำแหน่งงาน"
            class="
              input input-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
              text-gray-400
            "
          />
        </div>
        <div class="w-full flex-col">
          <p class="font-semibold 2xl:text-base md:text-xs">จังหวัด</p>
          <select
            v-model.trim="filter.enterProvince"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option :value="''" disabled selected>จังหวัด</option>
            <option
              class="text-black"
              v-for="p in provinces"
              :key="p.idProvince"
              :value="p.idProvince"
            >
              {{ p.provinceName }}
            </option>
          </select>
        </div>
        <div class="w-full flex-col">
          <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-6
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            รูปแบบงาน
          </p>
          <select
            v-model.trim="filter.enterHiringType"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option :value="''" disabled selected>รูปแบบงาน</option>
            <option
              class="text-black"
              v-for="h in typeHiring"
              :key="h.idHiringtype"
              :value="h.idHiringtype"
            >
              {{ h.nameType }}
            </option>
          </select>
        </div>
        <div class="w-full flex-col">
          <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-12
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            ค่าตอบแทน
          </p>
          <select
            v-model.trim="filter.enterSortSalary"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option class="text-black" :value="''" disabled selected>
              ค่าตอบแทน
            </option>
            <option v-if="filter.enterHiringType == 2" class="text-black" value="300 - 400">300 - 400</option>
            <option v-if="filter.enterHiringType == 2" class="text-black" value="400 - 500">400 - 500</option>
            <option v-if="filter.enterHiringType == 2" class="text-black" value="500 - 1000">500 - 1000</option>                
            <option class="text-black" value="DESC">มากไปน้อย</option>
            <option class="text-black" value="ASC">น้อยไปมาก</option>
          </select>      
        </div>
        <div
          class="
            w-full
            grid grid-rows-4
            gap-4
            2xl:flex 2xl:flex-row 2xl:space-x-4 2xl:gap-0
            xl:flex xl:flex-row xl:space-x-4 xl:gap-0
            lg:flex lg:flex-row lg:space-x-4 lg:gap-0
            md:flex md:flex-row md:space-x-4 md:gap-0
          "
        >
          <button
            @click="getData()"
            class="
              btn
              border-orange-1
              bg-orange-1
              hover:bg-orange-2 hover:border-orange-2
              w-full
              -mt-16
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
              2xl:text-base
              md:text-xs
            "
          >
            ค้นหางาน
          </button>
          <button
            @click="resetShowJob()"
            class="
              btn btn-ghost
              w-full
              -mt-7
              -mb-5
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
              2xl:text-base
              md:text-xs
            "
          >
            รีเซ็ตเงื่อนไข
          </button>
        </div>
      </div>     
    </div>
    <!-- <div class="flex flex-row justify-between p-6 font-sans-thai"> -->
    <!-- count posting  -->
    <div class="2xl:flex 2xl:flex-row md:flex md:flex-row flex flex-col">
      <div class="flex w-full justify-start">
        <p class="my-auto font-medium text-sm p-10 2xl:w-1/3 w-full 2xl:-ml-0 md:-ml-0 -ml-1">
          ทั้งหมด
          <span v-if="actOrInPost == 'Active'" class="text-orange-1 text-sm">
            {{ getActivePost.totalElements }}
          </span>
          <span v-if="actOrInPost == 'Inactive'" class="text-orange-1 text-sm">
            {{ getInactivePost.totalElements }}
          </span>          
          ผลลัพธ์
        </p>
        <div class="w-full pt-10 2xl:-mt-0 md:-mt-0 -mt-3 2xl:-ml-0 lg:-ml-36 md:-ml-0 -ml-16">
          <!-- <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-12
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            สถานะ
          </p> -->
          <select
            @click="searchStatusPost()"
            v-model.trim="actOrInPost"
            class="
              select select-bordered
              2xl:w-2/5
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <!-- <option class="text-black" :value="''" disabled selected>
              สถานะ
            </option> -->
            <option class="text-black" value="Active" selected = "selected">เปิดประกาศรับสมัคร</option>
            <option class="text-black" value="Inactive">ปิดประกาศรับสมัคร</option>
          </select>
        </div>
      </div>
      <div class="2xl:flex md:flex flex 2xl:p-10 md:p-10 p-5 2xl:mt-0 md:mt-0 mt-11 w-full 2xl:justify-end md:justify-end justify-center">
        <button
          @click="$router.push('/addPost')"
          class="
            btn
            border-orange-1
            bg-orange-1
            hover:bg-orange-2 hover:border-orange-2
            2xl:w-1/3
            md:w-2/3
            w-11/12
            -mt-16
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            2xl:text-base
            md:text-xs
          "
        >
          สร้างประกาศรับสมัครงาน
        </button>
      </div>
    </div>
        <div v-if="noPost" class="text-center mt-10">
      <div><img src="../assets/icon/inbox.png" class="w-20 mx-auto" /></div>
      <div class="pt-5">ไม่มีโพสที่ปิดประกาศ</div>
    </div>

    <base-job :idEmp="$store.state.auth.user.employer.idEmployer" :status="actOrInPost">
    </base-job>
    
    <!-- pagination  -->
    <div v-if="!noPost || !noPost" class="btn-group justify-center pb-5 -mt-5">
      <button @click="paging((action = 'decrease'))" class="btn btn-ghost">
        <i class="material-icons"> chevron_left </i>
      </button>
      <button
        class="
          cursor-default
          rounded-md
          px-2
          bg-white
          border-0
          text-black
          font-medium
          text-sm
        "
      >
        หน้า <span class="text-orange-1 px-1">{{ page }}</span>
        จาก 
            <span v-if="!$store.state.auth.user.employer.idEmployer">
            <span v-if="actOrInPost == 'Active'">{{getActivePost.totalPages}}</span>
            <span v-if="actOrInPost == 'Inactive'">{{getInactivePost.totalPages}}</span>
            </span>
            <span v-if="$store.state.auth.user.employer.idEmployer">
            <span v-if="actOrInPost == 'Active'">{{ getActivePost.totalPages == 0 ? getActivePost.totalPages + 1 : getActivePost.totalPages}}</span>
            <span v-if="actOrInPost == 'Inactive'">{{ getInactivePost.totalPages == 0 ? getInactivePost.totalPages + 1 : getInactivePost.totalPages}}</span>
            </span>
      </button>
      <button @click="paging((action = 'increase'))" class="btn btn-ghost">
        <i class="material-icons"> chevron_right </i>
      </button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import BaseJobView from "@/components/BaseJobView.vue";
// import { mapGetters } from "vuex";
import axios from "axios";
import BaseJob from "@/components/BaseJob.vue";
export default {
  props: ["idPost"],
  components: { BaseJob },
  data() {
    return {
      //ทำ V-model ใน input, select บลาๆ ด้วย
      provinces: [],
      typeHiring: [],
      subDistricts: [],
      searched: [],
      filter: {
        enterEstOrPost: "",
        enterProvince: "",
        enterHiringType: "",
        enterSortSalary: "",
      },
      page: 1,
      action: "",
      idPostToUse: "",
      getInactivePost: [],
      getActivePost: [],
      actOrInPost: "Active",
      showInactivePost: false,
      allPost: [],
      noPost: false
    };
  },
  methods: {
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    // sendId(idPost){
    //   //ถ้าอยากใช้ idPost หน้านี้ก็เปิด method นี้ แล้วเรียก @idPost="sendId" ใน component base-job ด้านบน
    //   console.log("idPost Posting page = " + idPost)
    //   this.idPostToUse = idPost

    // },
    searchStatusPost() {
      console.log("this.actOrInPost1" + this.actOrInPost)
      if (this.actOrInPost == "Inactive") {
        this.noPost = false
        this.showInactivePost = true;
                console.log(this.getInactivePost)
        if(this.getInactivePost.content.length == 0){
          this.noPost = true
        }
        console.log("this.page Inactive = " +this.page)
        this.page = 1        
        this.$store.commit("setPosting", this.getInactivePost);
      } else {
        console.log("this.actOrInPost2" + this.actOrInPost)
        if (this.actOrInPost == "Active"){
        this.noPost = false
        this.showInactivePost = false;
        if(this.getActivePost.content.length == 0){
          this.noPost = true
        }        
        console.log("this.page Active = " +this.page)
        if(this.page!=1){
          if(this.x == 1){
            this.page = 1
        if(this.getActivePost.content.length == 0){
          this.noPost = true
        }            
            this.$store.commit("setPosting", this.getActivePost);
          }
        }else{
          if(this.x == 1){
        if(this.getActivePost.content.length == 0){
          this.noPost = true
        }                 
            this.$store.commit("setPosting", this.getActivePost);
          }else{
        if(this.getActivePost.content.length == 0){
          this.noPost = true
        }                 
            this.$store.commit("setPosting", this.getActivePost);
          }
        }
        }
      }
    },
    async resetShowJob() {
      this.clearSearching();
      this.actOrInPost = "Active"
      if(this.$store.state.auth.user.role.idRole == "2"){
        if(this.getActivePost.content.length == 0){
          this.noPost = true
        }           
        this.$store.commit("setPosting", this.getActivePost);
      }
      // const allPost = await this.fetch(
      //   `${process.env.VUE_APP_ROOT_API}main/allPosting`
      // );
      // this.$store.commit("setPosting", allPost);
      // console.log("Store 2 = " + this.$store.getters.getPosting);
    },
    async getData() {
      if(!this.$store.state.auth.user || this.$store.state.auth.user.role.idRole == '3'){
      await axios
        .get(
          // `http://localhost:3000/main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
          `${process.env.VUE_APP_ROOT_API}main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
        )
        .then((response) => {
          console.log(response.data);
          this.$store.commit("setPosting", response.data);
          if (this.getActivePost.totalPages == 0) {
            this.noPost = true;
          } else {
            this.noPost = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }else{
        console.log("ของEmp")
        // if(this.$store.state.auth.user.role.idRole == '2'){
        //     await axios
        // .get(
        //   // `http://localhost:3000/main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
        //   `${process.env.VUE_APP_ROOT_API}emp/searchPosting?idEmp=${this.$store.state.auth.user.employer.idEmployer}&establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
        // )
        // .then((response) => {
        //   console.log(response.data);
        //   this.$store.commit("setPosting", response.data);
        //   if (this.getActivePost.totalPages == 0) {
        //     this.noPost = true;
        //   } else {
        //     this.noPost = false;
        //   }
        // })
        // .catch((error) => {
        //   console.log(error);
        // });          
        // }
      }
    },
    async paging(action) {
      if (this.page > 0) {
        if (action == "decrease" && this.page !== 1) {
          this.page--;
        } else if (
          action == "increase" &&
          this.page < this.getActivePost.totalPages || this.page < this.getInactivePost.totalPages
        ) {
          this.page++;
        } else {
          console.log("ต่ำกว่าหน้า 1 ไม่ได้");
      //     if(this.$store.state.auth.user.role.idRole == '2'){
      // this.getActivePost = await this.fetch(
      //   `${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` +
      //     this.$store.state.auth.user.employer.idEmployer);
      //     this.$store.commit("setPosting", this.getActivePost);            
      //     }
        }

        if(this.actOrInPost == "Active" || this.actOrInPost == ''){
          if(!this.$store.state.auth.user.role.idRole == "2"){
        const pageBEAct = this.page - 1;
        // const sendBE = await this.fetch("http://localhost:3000/main/allPosting?pageNo=" + pageBEAct);
        const sendBE = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allPosting?pageNo=` + pageBEAct
        );          
          this.$store.commit("setPosting", sendBE);
          }else{
          const pageBEInact = this.page - 1;
          const sendBEInact = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` +
          this.$store.state.auth.user.employer.idEmployer + '&pageNo=' + pageBEInact);
          this.$store.commit("setPosting", sendBEInact);            
          }
        }else{
        if(this.actOrInPost == "Inactive"){
          if(!this.$store.state.auth.user.role.idRole == "2"){
        const pageBEAct = this.page - 1;
        // const sendBE = await this.fetch("http://localhost:3000/main/allPosting?pageNo=" + pageBEAct);
        const sendBE = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allPosting?pageNo=` + pageBEAct
        );          
          this.$store.commit("setPosting", sendBE);
          }else{
this.$store.commit("setPosting", this.getInactivePost);  
          }
        }  
        }
      }
    },

    clearSearching() {
      this.filter = {
        enterEstOrPost: "",
        enterProvince: "",
        enterHiringType: "",
        enterSortSalary: "",
      };
    },
  },
  computed: {
    // ...mapGetters({
    //   getActivePost: "getPosting",
    // }),
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      this.getActivePost = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` +
          this.$store.state.auth.user.employer.idEmployer);
          this.$store.commit("setPosting", this.getActivePost);
        if(this.getActivePost.content.length == 0){
          this.noPost = true
        }           
      // this.provinces = await this.fetch("http://localhost:3000/main/allProvince");
      this.provinces = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allProvince`
      );
      // this.typeHiring = await this.fetch("http://localhost:3000/main/allHiringType");
      this.typeHiring = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allHiringType`
      );
      this.getInactivePost = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/getPostingInActiveByIdEmployer?idEmployer=` +
          this.$store.state.auth.user.employer.idEmployer);
      this.allPost = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allPosting`
      );
    } else {
      this.$router.push("/");
    }
  },
};
</script>
