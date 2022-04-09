<!--<template>-->
  <!-- job card -->
  <!--<div class="flex flex-wrap justify-center p-6">
    <div
      class="font-sans-thai card w-96 bg-base-100 shadow-xl m-6"
      v-for="job in allJobs"
      :key="job.idPosting"
    >
      <router-link :to="'/detail?idPosting=' + job.idPosting">
        <figure>
          <img
            src="https://marquettechamber.com/wp-content/uploads/2020/07/services-In-the-city-1024x683.jpg"
          />
        </figure>
        <div class="card-body" v-for="e in allEmployer" :key="e.idEmployer">
          <h2 class="card-title">{{ e.establishmentName }}</h2>
          <h2 class="card-title">{{ job.position.positionName }}</h2>
          <p>
            <span class="font-semibold">รายละเอียดงาน : </span
            ><span>{{ job.workDescription }}</span>
          </p>
          <p>
            <span class="font-semibold">เงินเดือน : </span>
            <span>{{ job.minSalary }} - {{ job.maxSalary }} บาท</span>
          </p>

        </div>
      </router-link>
    </div>
  </div>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      allJobs: [],
      allEmployer: [],
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
    // jobDetail(id) {
    //   this.$router.push(`/main/selectPosting?idPosting=${id}`);
    //   console.log(id);
    // },
  },
  async created() {
    this.allJobs = await this.fetch("http://localhost:3000/main/allPosting");
    this.allEmployer = await this.fetch("http://localhost:3000/admin/allEmployer");
 },
};
</script> -->





<template>
  <div class="flex flex-row justify-between p-6 font-sans-thai">
    <!-- count posting  -->
    <p class="my-auto font-medium">
      งานทั้งหมด <span class="text-orange-1"> 999 </span>อัตรา
    </p>
    <!-- pagination  -->
    <div class="btn-group">
      <button class="btn btn-ghost">
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
        "
      >
        หน้า <span class="text-orange-1 px-1">1</span> จาก 10
      </button>
      <button class="btn btn-ghost">
        <i class="material-icons"> chevron_right </i>
      </button>
    </div>
  </div>

  <!-- job card -->
  <div class="flex flex-wrap justify-center p-6">
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
        hover:-translate-y-1
        hover:scale-110
        hover:border-4
        hover:border-orange-1
      "
      v-for="job in allJobs"
      :key="job.idPosting"
    >
      <div v-for="e in allEmployer" :key="e.idEmployer">
        <div
          @click="post(false, job.idPosting, e.establishmentName, e.address)"
        >
          <div v-if="isPost">
            <figure>
              <img
                src="https://marquettechamber.com/wp-content/uploads/2020/07/services-In-the-city-1024x683.jpg"
              />
            </figure>
            <div class="card-body space-y-3">
              <div class="flex justify-between">
                <h2 class="card-title text-orange-1">
                  {{ job.position.positionName }}
                </h2>
                <i class="material-icons"> bookmark_border </i>
              </div>
              <h2 class="card-title">{{ e.establishmentName }}</h2>
              <p>
                <span><i class="material-icons pr-2"> paid </i></span>
                <span class="font-semibold">เงินเดือน : </span>
                <span>{{ job.minSalary }} - {{ job.maxSalary }} บาท</span>
              </p>
              <p>
                <span><i class="material-icons pr-2"> place </i></span>
                <span class="font-semibold">ที่อยู่ : </span>
                <span>{{ e.address }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isPost">
      <base-job-detail
        :id="this.id"
        :estName="this.estName"
        :address="this.address"
        @setTrue="showJob()"
      ></base-job-detail>
    </div>
  </div>
</template>

<script>
import BaseJobDetail from "@/components/BaseJobDetail.vue";
import { mapGetters } from "vuex";
export default {
  props: ["searched"],
  components: { BaseJobDetail },
  data() {
    return {
      allEmployer: [],
      isPost: true,
      id: "",
      estName: "",
      address: "",
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
    post(boolean, id, estName, add) {
      this.isPost = boolean;
      this.id = id;
      this.estName = estName;
      this.address = add;
    },
    showJob() {
      this.isPost = true;
    },
    // jobDetail(id) {
    //   this.$router.push(`/main/selectPosting?idPosting=${id}`);
    //   console.log(id);
    // },
  },
  computed: {
    ...mapGetters({
      allJobs: "getPosting",
    }),
  },
  async created() {
    const allPost = await this.fetch("http://localhost:3000/main/allPosting");
    console.log(allPost);
    this.$store.commit("setPosting", allPost);
    this.allEmployer = await this.fetch(
      "http://localhost:3000/admin/allEmployer"
    );
  },
};
</script>

<style>
</style>