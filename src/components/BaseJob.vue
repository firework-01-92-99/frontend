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
  <!-- job card -->
  <div class="flex flex-wrap justify-center p-6">
    <div
      class="font-sans-thai card w-96 bg-base-100 shadow-xl m-6"
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
            <div class="card-body">
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
import {mapGetters} from 'vuex';
export default {
  props: ['searched'],
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
  computed:{
    ...mapGetters({
      allJobs: "getPosting"
    })
  },
  async created() {
    const allPost = await this.fetch("http://localhost:3000/main/allPosting");
    console.log(allPost)
    this.$store.commit("setPosting", allPost)
    this.allEmployer = await this.fetch(
      "http://localhost:3000/admin/allEmployer"
    );
  },
};
</script>

<style>
</style>