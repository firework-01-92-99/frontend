<template>
<div v-if="!noValue">
   <!-- toast delete posting -->
      <transition name="toast">
        <div v-if="showToast" class="flex justify-center font-sans-thai">
          <div
            class="absolute z-10 2xl:w-2/5 w-full alert shadow-lg"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p class="">
                คุณต้องการ<span class="font-medium">ลบประกาศรับสมัคร</span>ใช่หรือไม่
              </p>
            </div>
            <div class="flex-none">
              <button class="btn btn-sm btn-ghost px-5">ไม่</button>
              <button class="btn btn-sm bg-orange-1 border-orange-1 hover:bg-orange-2 hover:border-orange-2 px-5">ใช่</button>
            </div>
          </div>
        </div>
      </transition>

  <!-- job card -->
  <div class="flex flex-wrap justify-center p-6 -mt-12">
    <div
      v-for="job in allJobs.content.filter((j) => j.idPosting != this.idPost)"
      :key="job.idPosting"
    >
      <div>
        <div
          class="
            rounded-lg
            font-sans-thai
            card
            2xl:w-80
            xl:w-96
            lg:w-96
            md:w-96
            w-11/12
            bg-base-100
            2xl:m-6
            xl:m-6
            lg:m-6
            md:m-6
            mx-auto
            my-6
            transition
            duration-300
            ease-in-out
            hover:-translate-y-1 hover:scale-110
          "
        >
          <div>
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
            <figure v-if="$route.name != 'JobDetail'">
              <div class="avatar mt-6">
                <div class="w-16 rounded-full">
                  <img
                  class="object-cover"
                  :src=" !$store.state.auth.user || $store.state.auth.user.role.idRole == '3' ? env + allPicture.find((a) => a.idEmployer == job.idEmployer).imageName : image"
                  />
                </div>
              </div>
            </figure>
            <!-- <div v-for="e in allEmployer" :key="e.idEmployer"> -->
            <div class="card-body space-y-3">
              <div class="flex justify-between">
                <h2 class="card-title text-orange-1 text-sm">
                  {{ job.position.positionName }}
                </h2>
                <div
                  v-if="
                    !showFlag(job.idPosting) &&
                    $store.state.auth.user &&
                    $store.state.auth.user.role.idRole == '3'
                  "
                >
                  <i
                    @click="fav(job.idPosting)"
                    class="material-icons z-10 cursor-pointer select-none"
                  >
                    bookmark_border
                  </i>
                </div>
                <div
                  v-else-if="
                    $store.state.auth.user &&
                    $store.state.auth.user.role.idRole == '3'
                  "
                >
                  <i
                    @click="unFav(job.idPosting)"
                    class="material-icons cursor-pointer select-none"
                  >
                    bookmark
                  </i>
                </div>
                <div
                  v-if="
                    $store.state.auth.user &&
                    $store.state.auth.user.role.idRole == '2' &&
                    job.status.statusName == 'Inactive'
                  "
                >
                  <i
                    @click="babyBin(job.idPosting)"
                    class="
                      material-icons
                      cursor-pointer
                      select-none
                      text-red-800
                    "
                  >
                    delete
                  </i>
                </div>
                <!-- status -->
                <div v-if="job.status.statusName == 'Active' && $store.state.auth.user && $store.state.auth.user.role.idRole == '2'" class="badge badge-lg 2xl:w-1/6 2xl:text-base md:text-base text-xs bg-green-200 text-green-600 border-0">
                  <span class="">เปิดประกาศรับสมัคร</span>
                </div>
                <div v-if="job.status.statusName == 'Inactive' && $store.state.auth.user && $store.state.auth.user.role.idRole == '2'" class="badge badge-lg 2xl:w-1/6 2xl:text-base md:text-base text-xs bg-gray-200 text-gray-600 border-0">
                  <span class="">ปิดประกาศรับสมัคร</span>
                </div>
              </div>
              <h2 class="card-title text-sm">
                {{
                  getPostbyEmp(job.idEmployer)
                    ? getPostbyEmp(job.idEmployer).establishmentName
                    : ""
                }}
                <div class="rating rating-sm">
                  <span class="font-normal pr-2">|</span>
                  <input
                    type="radio"
                    name="rating-2"
                    class="cursor-default mask mask-star-2 bg-orange-400"
                    checked
                    disabled
                  />
                  <!-- <span class="font-normal pl-1">{{!$store.state.auth.user || $store.state.auth.user.role.idRole == '3' ? scoreAllEmp.find((a) => a.idEmployer == job.idEmployer).rate : isNaN(scoreEmp) ? 'ยังไม่มีคะแนน' : scoreEmp}}</span> -->
                  <span class="font-normal pl-1 2xl:text-sm xl:text-base lg:text-base md:text-base text-xs">{{!$store.state.auth.user || $store.state.auth.user.role.idRole == '3' ? scoreAllEmp.find((a) => a.idEmployer == job.idEmployer).rate == null ? 'ยังไม่มีคะแนน' : scoreAllEmp.find((a) => a.idEmployer == job.idEmployer).rate : isNaN(scoreEmp) ? 'ยังไม่มีคะแนน' : scoreEmp}}</span>
                  <!-- {{scoreAllEmp.find((a) => a.idEmployer == job.idEmployer).rate}} -->
                </div>
              </h2>
              <p>
                <span class="inline-block align-middle"
                  ><i class="material-icons pr-2"> paid </i></span
                >
                <span class="hidden font-semibold text-base">ค่าตอบแทน : </span>
                <span class="text-sm inline-block align-middle"
                  >{{
                    job.minSalary
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  -
                  {{
                    job.maxSalary
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  บาท /</span><span class="text-sm"> {{job.hiringType.nameType}}</span>
              </p>
              <div class="flex items-start">
                <p>
                  <span class="inline-block align-middle"
                    ><i class="material-icons pr-2"> place </i></span
                  >
                  <span class="hidden font-semibold text-base">ที่อยู่ : </span>
                  <span
                    v-if="getPostbyEmp(job.idEmployer)"
                    class="text-sm inline-block align-middle"
                    >{{
                      getPostbyEmp(job.idEmployer).district.districtName +
                      " " +
                      getPostbyEmp(job.idEmployer).province.provinceName
                    }}</span
                  >
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

              <div
                v-if="
                  !$store.state.auth.user ||
                  $store.state.auth.user.role.idRole == '3'
                "
                class="card-actions"
              >
                <button
                  @click="linkTo(job.idPosting, job.idEmployer)"
                  class="
                    btn
                    border-orange-1
                    bg-orange-1
                    hover:bg-orange-2 hover:border-orange-2
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
</div>
<div v-else>
      <div v-if="noValue">
      <div class="text-center mt-10 mb-10">
        <div>
          <img src="../assets/icon/not-found.svg" class="w-20 mx-auto" />
        </div>
        <div class="pt-5">ไม่มีผลลัพธ์</div>
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
  props: ["searched", "idPost", "idEmp", "status"],
  // components: { BaseJobDetail },
  data() {
    return {
      allEmployer: [],
      empId: 0,
      storeIdPost: "",
      favoriteList: [],
      getActivePost: [],
      getInactivePost: [],
      image: null,
      allPicture: [],
      env: `${process.env.VUE_APP_ROOT_API}main/image/`,
      scoreEmp: '',
      scoreAllEmp: [],
      noValue: false,
      // showToast: false,
    };
  },
  methods: {
    async babyBin(idPost) {
      const vm = this;
      if (confirm("ยืนยันที่จะลบประกาศรับสมัครหรือไม่")) {
        // this.showToast = true;
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/deletePosting?idPosting=${idPost}`
        );
        if (vm.status == "Inactive") {
          vm.getInactivePost = await this.fetch(
            `${process.env.VUE_APP_ROOT_API}main/getPostingInActiveByIdEmployer?idEmployer=` +
              this.$store.state.auth.user.employer.idEmployer
          );
          this.$store.commit("setPosting", this.getInactivePost);
        }
        // location.reload()
      }
    },
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
    seeDetailEmp(jobId, idEmp) {
      if (this.$store.state.auth.user.role.idRole == "2") {
        this.$router.push(
          "/detail?idPosting=" + jobId + "&idEmployer=" + idEmp
        );
      }
    },
    showFlag(id) {
      return this.favoriteList.find((f) => f.posting.idPosting == id);
    },
    async fav(idPost) {
      if (!this.favoriteList.map((f) => f.posting.idPosting).includes(idPost)) {
        await axios
          .post(
            `${process.env.VUE_APP_ROOT_API}worker/addMyFavorite?idWorker=${this.$store.state.auth.user.worker.idWorker}&idPosting=${idPost}`
          )
          .then(function (response) {
            console.log(response);
            // this.$store.commit("setPosting", allJobs);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      this.fav1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}worker/getMyFavorite?idWorker=` +
          this.$store.state.auth.user.worker.idWorker
      );
      this.favoriteList = this.fav1.data;
    },
    async unFav(id) {
      const idOfFav = this.favoriteList.find(
        (f) => f.posting.idPosting == id
      ).idWhatFavorite;
      console.log("idOfFav = " + idOfFav);
      console.log("unfav");
      await axios.delete(
        `${process.env.VUE_APP_ROOT_API}worker/deleteMyFavorite?idFavorite=${idOfFav}`
      );
      this.fav1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}worker/getMyFavorite?idWorker=` +
          this.$store.state.auth.user.worker.idWorker
      );
      this.favoriteList = this.fav1.data;
    },
    emitIdPostToPostingPage(idPost) {
      if (this.$store.state.auth.user.role.idRole == "2") {
        this.$emit("idPost", idPost);
        this.$router.push("/viewworkapp" + "?idPost=" + idPost);
      }
    },
    getPostbyEmp(idofEmp) {
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
    const size = this.$route.name == "JobDetail" ? 4 : 10;
    const allPost = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allPosting` + "?size=" + size
    );
    if (
      this.$route.name == "JobDetail" &&
      allPost.content.filter((j) => j.idPosting != this.idPost).length == 4
    ) {
      allPost.content.pop();
    }
      if (this.idEmp) {
        if(this.$store.state.auth.user){
        const image1 = await axios.get(
          `${process.env.VUE_APP_ROOT_API}main/getImageByIdEmployer` +
            "?idEmployer=" +
            this.$store.state.auth.user.employer.idEmployer
        );
        const imageName = image1.data;
        console.log(imageName)
        this.image =
          `${process.env.VUE_APP_ROOT_API}main/image/` + imageName;
        this.getActivePost = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` +
            this.$store.state.auth.user.employer.idEmployer + '&size=10'
        );
        console.log(this.image)
        this.$store.commit("setPosting", this.getActivePost);
        this.getInactivePost = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/getPostingInActiveByIdEmployer?idEmployer=` +
            this.$store.state.auth.user.employer.idEmployer + '&size=10'
        );
        this.scoreEmp = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/getEmpTotalScore?idEmployer=` + this.$store.state.auth.user.employer.idEmployer);
        }else{
      if(!this.$store.state.auth.user || (this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "3")){
      const allPicture1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}main/getImageEveryEmployer`
      );
      this.allPicture = allPicture1.data;
      console.log(this.allPicture[0].imageName);

      for (let i = 0; i < this.allJobs.content.length; i++) {
        this.allJobs.content[i].image ==
          this.allPicture.find(
            (a) => a.idEmployer == this.allJobs.content[i].idEmployer
          ).imageName;
      }
      this.scoreAllEmp = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allEmployer`);
      this.$store.commit("setPosting", allPost);
      this.noValue = allPost.content.length == 0
      }
        }
      }else{
         if(!this.$store.state.auth.user || (this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "3")){
      const allPicture1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}main/getImageEveryEmployer`
      );
      this.allPicture = allPicture1.data;
      console.log(this.allPicture[0].imageName);

      for (let i = 0; i < this.allJobs.content.length; i++) {
        this.allJobs.content[i].image ==
          this.allPicture.find(
            (a) => a.idEmployer == this.allJobs.content[i].idEmployer
          ).imageName;
      }
      this.scoreAllEmp = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allEmployer`);
      this.$store.commit("setPosting", allPost);
      this.noValue = allPost.content.length == 0
      }     
      }
    this.allEmployer = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allEmployer`
    );
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "3"
    ) {
      this.fav1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}worker/getMyFavorite?idWorker=` +
          this.$store.state.auth.user.worker.idWorker
      );
      this.favoriteList = this.fav1.data;
    }
  },
};
</script>

<style>
</style>