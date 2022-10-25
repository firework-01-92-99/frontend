<template>
  <!-- job card -->
  <div class="flex flex-wrap justify-center p-6 -mt-12">
    <div
      v-for="job in allJobs.content.filter((j) => j.idPosting != this.idPost)"
      :key="job.idPosting"
    >
    <div>
      <div
        class="
          cursor-pointer
          font-sans-thai
          card
          w-96
          bg-base-100
          m-6
          transition
          duration-300
          ease-in-out
          hover:-translate-y-1 hover:scale-110 hover:border-orange-1
        "
      >
        <div @click="linkTo(job.idPosting, job.idEmployer)">
          <!-- <router-link
          v-if="(!$store.state.auth.user || $store.state.auth.user.role.idRole == '3') && ($store.state.auth.user.role.idRole !== '2' || $store.state.auth.user.role.idRole !== '1')"
          :to="
            '/detail?idPosting=' +
            parseInt(job.idPosting) +
            '&idEmployer=' +
            job.idEmployer
          "
        > -->
          <!-- <router-link
            v-if="$store.state.auth.user.role.idRole == '2'"
            to="/viewworkapp"
          > -->
          <figure>
            <img class="object-cover" src="https://i.ytimg.com/vi/J_oT9erINxA/maxresdefault.jpg" />
          </figure>

          <!-- <div v-for="e in allEmployer" :key="e.idEmployer"> -->
          <div class="card-body space-y-3">
            <div class="flex justify-between">
              <h2 class="card-title text-orange-1 text-base">
                {{ job.position.positionName }}
              </h2>
              <div v-if="!showFlag(job.idPosting) && $store.state.auth.user && $store.state.auth.user.role.idRole == '3'">
              <i @click="fav(job.idPosting)" class="material-icons z-10"> bookmark_border </i>
              </div>
              <div v-else-if="$store.state.auth.user && $store.state.auth.user.role.idRole == '3'">
              <i @click="unFav(job.idPosting)" class="material-icons"> bookmark </i>
              </div>
            </div>
            <h2 class="card-title text-base">
              {{ getPostbyEmp(job.idEmployer) ? getPostbyEmp(job.idEmployer).establishmentName : ''}}
            </h2>
            <p>
              <span class="inline-block align-middle"
                ><i class="material-icons pr-2"> paid </i></span
              >
              <span class="hidden font-semibold text-base">ค่าตอบแทน : </span>
              <span class="text-base font-medium inline-block align-middle"
                >{{
                  job.minSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
                -
                {{
                  job.maxSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
                บาท</span
              >
            </p>
            <div class="flex items-start">
              <p>
                <span class="inline-block align-middle"
                  ><i class="material-icons pr-2"> place </i></span
                >
                <span class="hidden font-semibold text-base">ที่อยู่ : </span>
                <span v-if="getPostbyEmp(job.idEmployer)" class="text-base font-medium inline-block align-middle">{{
                  getPostbyEmp(job.idEmployer).address +
                  " " +
                  getPostbyEmp(job.idEmployer).district.districtName +
                  " " +
                  getPostbyEmp(job.idEmployer).subDistrict.subDistrict +
                  " " +
                  getPostbyEmp(job.idEmployer).province.provinceName +
                  " " +
                  getPostbyEmp(job.idEmployer).subDistrict.postcode
                }}</span>
              </p>
            </div>
            <!-- <slot></slot> -->
            <div
              v-if="
                $store.state.auth.user &&
                $store.state.auth.user.role.idRole == '2'
              "
              class="card-actions"
            >
              <button
                @click="emitIdPostToPostingPage(job.idPosting)"
                class="
                  btn
                  border-orange-1
                  bg-orange-1
                  hover:bg-orange-2 hover:border-orange-2
                  w-full
                "
              >
                ดูผู้สมัคร
              </button>
              <button
                @click="seeDetailEmp(job.idPosting, job.idEmployer)"
                class="
                  btn btn-ghost
                  border-orange-1
                  text-orange-1
                  hover:bg-orange-1 hover:border-orange-1 hover:text-white
                  w-full
                "
              >
                ดูรายละเอียด
              </button>
            </div>
          </div>
          <!-- </div> -->
          <!-- </router-link> -->
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import BaseJobDetail from "@/components/BaseJobDetail.vue";
import { mapGetters } from "vuex";
export default {
  emits: ["idPost"],
  props: ["searched", "idPost", "idEmp"],
  // components: { BaseJobDetail },
  data() {
    return {
      allEmployer: [],
      empId: 0,
      storeIdPost: "",
      favoriteList: []
    };
  },
  methods: {
    linkTo(idPost, idEmp) {
      if (
        !this.$store.state.auth.user ||
        this.$store.state.auth.user.role.idRole == "3"
      ) {
        this.$router.push(
          "/detail?idPosting=" + idPost + "&idEmployer=" + idEmp
        );
      }
      // else {
      // if (this.$store.state.auth.user.role.idRole == "2") {
      //   this.$emit("idPost", idPost)
      //   // this.$router.push("/viewworkapp" + "?idPost=" + idPost);
      //   // localStorage.storeIdPost
      // }
      // }
    },
    seeDetailEmp(jobId, idEmp){
      if (this.$store.state.auth.user.role.idRole == "2") {
        this.$router.push("/detail?idPosting=" + jobId + "&idEmployer=" + idEmp);
      }
    },  
    showFlag(id){
      return this.favoriteList.find(f => f.posting.idPosting == id)      
    },
    async fav(idPost){
      await axios
        .post(`${process.env.VUE_APP_ROOT_API}worker/addMyFavorite?idWorker=${this.$store.state.auth.user.worker.idWorker}&idPosting=${idPost}`)
        .then(function (response) {
          console.log(response);
          // this.$store.commit("setPosting", allJobs);
        })
        .catch(function (error) {
          console.log(error)
        }); 
    },
     async unFav(id){
      const idOfFav = this.favoriteList.find(f => f.posting.idPosting == id).idWhatFavorite
      console.log("idOfFav = " + idOfFav)
      console.log("unfav")
        await axios.delete(`${process.env.VUE_APP_ROOT_API}worker/deleteMyFavorite?idFavorite=${idOfFav}`);   
    },
    emitIdPostToPostingPage(idPost) {
      if (this.$store.state.auth.user.role.idRole == "2") {
        this.$emit("idPost", idPost);
        this.$router.push("/viewworkapp" + "?idPost=" + idPost);
      }
    },
    getPostbyEmp(idofEmp) {
      console.log(idofEmp);
      return this.allEmployer.find((j) => j.idEmployer == idofEmp);
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },    
  },

  computed: {
    ...mapGetters({
      allJobs: "getPosting",
    }),
  },
  async created() {
    const allPost = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allPosting`
    );
    console.log(allPost);
    this.$store.commit("setPosting", allPost);
    console.log(this.allJobs);
    this.allEmployer = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allEmployer`
    );
    // if(localStorage.isBookmark){ 
    //   this.isBookmark = localStorage.isBookmark;
    //   console.log("this.isBookmark = " + this.isBookmark)
    //   localStorage.removeItem('isBookmark');
    //   }    
    if(this.$store.state.auth.user.role.idRole == "3"){
    this.fav1= await axios.get(
        `${process.env.VUE_APP_ROOT_API}worker/getMyFavorite?idWorker=` + this.$store.state.auth.user.worker.idWorker);
    this.favoriteList = this.fav1.data
    }
    console.log(this.favoriteList)
  },
};
</script>

<style>
</style>