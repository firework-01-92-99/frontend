<template>
  <div class="bg-gray-2 h-full font-sans-thai">
    <!-- header -->
    <div
      class="hero 2xl:h-64 xl:h-64 lg:h-64 md:h-64 h-32"
      style="
        background-image: url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1
            class="
              mb-5
              2xl:text-5xl
              xl:text-5xl
              lg:text-5xl
              md:text-4xl
              text-2xl
              font-bold
            "
          >
            สมัครงาน
          </h1>
          <p class="2xl:text-xl
              xl:text-xl
              lg:text-lg
              md:text-base
              text-sm mb-5">ค้นหางานที่ใช่ ให้คุณได้ทำงานที่ชอบ</p>
        </div>
      </div>
    </div>
    <!-- search criteria & job card -->
    <div class="hero 2xl:h-52 xl:h-48 lg:h-48 md:h-48 bg-gray-1">
      <form
        @submit.prevent="getData()"
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
          <p class="font-semibold 2xl:text-base md:text-xs">
            ค้นหาตำแหน่งงานหรือชื่อบริษัท
          </p>
          <input
            v-model.trim="filter.enterEstOrPost"
            type="text"
            placeholder="ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท"
            class="
              input input-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
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
        <!-- <div class="w-full flex-col">
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
            <option class="text-black" value="DESC">มากไปน้อย</option>
            <option class="text-black" value="ASC">น้อยไปมาก</option>
          </select>
        </div> -->
        <div class="w-full flex-col">
          <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-10
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            ช่วงค่าตอบแทน (ต่ำสุด)
          </p>
          <select
            v-model.trim="filter.enterMinSalary"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option class="text-black" :value="''" disabled selected>
              ค่าตอบแทนที่ต้องการต่ำสุด
            </option>
            <option class="text-black" value="300">300</option>
            <option class="text-black" value="400">400</option>
            <option class="text-black" value="500">500</option>
            <option class="text-black" value="1000">1000</option>
            <option class="text-black" value="2000">2000</option>
            <option class="text-black" value="3000">3000</option>
            <option class="text-black" value="4000">4000</option>
            <option class="text-black" value="5000">5000</option>
            <option class="text-black" value="6000">6000</option>
            <option class="text-black" value="7000">7000</option>
            <option class="text-black" value="8000">8000</option>
            <option class="text-black" value="9000">9000</option>
          </select>
        </div>
        <div class="w-full flex-col">
          <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-16
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            ช่วงค่าตอบแทน (สูงสุด)
          </p>
          <select
            v-model.trim="filter.enterMaxSalary"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option class="text-black" :value="''" disabled selected>
              ค่าตอบแทนที่ต้องการสูงสุด
            </option>
            <option class="text-black" value="300">300</option>
            <option class="text-black" value="400">400</option>
            <option class="text-black" value="500">500</option>
            <option class="text-black" value="1000">1000</option>
            <option class="text-black" value="2000">2000</option>
            <option class="text-black" value="3000">3000</option>
            <option class="text-black" value="4000">4000</option>
            <option class="text-black" value="5000">5000</option>
            <option class="text-black" value="6000">6000</option>
            <option class="text-black" value="7000">7000</option>
            <option class="text-black" value="8000">8000</option>
            <option class="text-black" value="9000">9000</option>
          </select>
        </div>
        <div
          class="
            w-full
            grid grid-rows-2
            gap-4
            2xl:flex 2xl:flex-row 2xl:space-x-4 2xl:gap-0
            xl:flex xl:flex-row xl:space-x-4 xl:gap-0
            lg:flex lg:flex-row lg:space-x-4 lg:gap-0
            md:flex md:flex-row md:space-x-4 md:gap-0
          "
        >
          <button
            type="submit"
            class="
              btn
              border-orange-1
              bg-orange-1
              hover:bg-orange-2 hover:border-orange-2
              w-full
              mt-2
              2xl:mt-6
              xl:mt-4
              lg:mt-4
              md:mt-4
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
              -mb-5
              2xl:mt-6
              xl:mt-4
              lg:mt-4
              md:mt-4
              2xl:text-base
              md:text-xs
            "
          >
            รีเซ็ตเงื่อนไข
          </button>
        </div>
      </form>
    </div>
    <!-- <div class="flex flex-row justify-between p-6 font-sans-thai"> -->
    <!-- count posting  -->
    <div class="flex flex-row">
 <div class="flex w-full justify-start">
    <p class="my-auto font-medium text-sm p-10 px-9 2xl:w-1/3 w-full 2xl:-ml-0 md:-ml-0 ml-0.5">
      ทั้งหมด
      <span class="text-orange-1 text-sm"> {{ lastPage.totalElements }} </span>
      ผลลัพธ์
    </p>
</div>
<div class="2xl:flex md:flex flex 2xl:p-10 md:p-10 p-5 2xl:mt-0 md:mt-0 mt-11 w-full 2xl:justify-end md:justify-end justify-center">
        <button
          @click="$router.push('/allEmployer')"
          class="
            cursor-pointer
            underline
          text-blue-600
          hover:text-blue-700
            font-medium
            -mt-12
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            text-sm
            ml-8
          "
        >
         ดูบริษัททั้งหมด
        </button>
      </div>
      </div>
    <div v-if="noValue">
      <div class="text-center mt-10 mb-10">
        <div>
          <img src="../assets/icon/not-found.svg" class="w-20 mx-auto" />
        </div>
        <div class="pt-5">ไม่มีผลลัพธ์</div>
      </div>
    </div>
    <base-job></base-job>
    <!-- pagination  -->
    <div v-if="!noValue" class="btn-group justify-center pb-5 -mt-5">
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
        หน้า <span class="text-orange-1 px-1">{{ page }}</span> จาก
        {{ lastPage.totalPages }}
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
import { mapGetters } from "vuex";
import axios from "axios";
import BaseJob from "@/components/BaseJob.vue";
export default {
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
        enterMinSalary: '',
        enterMaxSalary: '',
      },
      noValue: false,
      page: 1,
      action: "",
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
    async resetShowJob() {
      this.clearSearching();
      // const allPost = await this.fetch("http://localhost:3000/main/allPosting");
      const allPost = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allPosting?size=10`
      );
      if(allPost.content.length == 0){
        this.noValue = true
      }else{
        this.noValue = false
      }
      this.$store.commit("setPosting", allPost);
      console.log("Store 2 = " + this.$store.getters.getPosting);
    },
    async getData() {
      console.log(this.filter.enterMinSalary)
      console.log(this.filter.enterMaxSalary)
      await axios
        .get(
          `${process.env.VUE_APP_ROOT_API}main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=&minSalary=${parseInt(this.filter.enterMinSalary)}&maxSalary=${parseInt(this.filter.enterMaxSalary)}` 
        )
        .then((response) => {
          console.log(response.data);
          this.$store.commit("setPosting", response.data);
          if (this.lastPage.totalPages == 0) {
            this.noValue = true;
          } else {
            this.noValue = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async paging(action) {
      if (this.page > 0) {
        if (action == "decrease" && this.page !== 1) {
          this.page--;
        } else if (
          action == "increase" &&
          this.page < this.lastPage.totalPages
        ) {
          this.page++;
        } else {
          console.log("ต่ำกว่าหน้า 1 ไม่ได้");
        }
        const pageBE = this.page - 1;
        // const sendBE = await this.fetch("http://localhost:3000/main/allPosting?pageNo=" + pageBE);
        const sendBE = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allPosting?pageNo=` + pageBE
        );
        this.$store.commit("setPosting", sendBE);
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
    ...mapGetters({
      lastPage: "getPosting",
    }),
  },
  async created() {
    if (
      !this.$store.state.auth.user ||
      this.$store.state.auth.user.role.idRole == "3"
    ) {
      // this.provinces = await this.fetch("http://localhost:3000/main/allProvince");
      this.provinces = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allProvince`
      );
      // this.typeHiring = await this.fetch("http://localhost:3000/main/allHiringType");
      this.typeHiring = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allHiringType`
      );
      console.log("test");
    } else {
      if (this.$store.state.auth.user.role.idRole == "1") {
        this.$router.push("/approve");
      } else {
        if (this.$store.state.auth.user.role.idRole == "2") {
          this.$router.push("/posting");
        }
      }
    }
  },
};
</script>
