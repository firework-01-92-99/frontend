<template>
  <!-- job card -->
  <!-- <div class="font-sans-thai" v-for="job in allJobs" :key="job.idPosting"> -->
  <!--<router-link :to="'/main/selectPosting?idPosting=' + job.idPosting">-->
  <!-- <router-link :to="'/detail?idPosting=' + job.idPosting"> -->
  <!--<div @click="jobDetail(job.idPosting)">-->
  <!-- <div class="card card-side bg-base-100 shadow-xl">
        <figure class="w-52 h-72">
          <img
            src="https://marquettechamber.com/wp-content/uploads/2020/07/services-In-the-city-1024x683.jpg"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">ชื่อบริษัท</h2>
          <h2 class="card-title">{{ job.position.positionName }}</h2>
          <p>{{ job.workDescription }}</p>
          <p>{{ job.minSalary }} - {{ job.maxSalary }}</p>
          <div class="card-actions justify-end space-x-5">
            <button class="btn btn-ghost btn-circle text-red-600">
              <i class="material-icons"> favorite_border </i>
            </button>
            <button class="btn btn-primary">สมัครงาน</button>
          </div>
        </div>
      </div> -->
  <!--</div>-->
  <!-- </router-link> -->
  <!-- </div> -->
  <div class="flex flex-wrap justify-center p-6">
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
        <div class="card-body">
          <h2 class="card-title">ชื่อบริษัท</h2>
          <h2 class="card-title">{{ job.position.positionName }}</h2>
          <p>
            <span class="font-semibold">รายละเอียดงาน : </span
            ><span>{{ job.workDescription }}</span>
          </p>
          <p>
            <span class="font-semibold">เงินเดือน : </span>
            <span>{{ job.minSalary }} - {{ job.maxSalary }} บาท</span>
          </p>

          <!-- <div class="card-actions justify-end">
          <button class="btn btn-ghost btn-circle text-red-600">
            <i class="material-icons"> favorite_border </i>
          </button>
          <button class="btn btn-primary">Buy Now</button>
        </div> -->
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allJobs: [],
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
  },
};
</script>

<style>
</style>