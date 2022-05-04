<template>
  <!-- job card -->
  <div class="flex flex-wrap justify-center p-6 -mt-12">
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
    <div @click="sendIdEmp(job.idEmployer)">
      <router-link :to="'/detail?idPosting=' + parseInt(job.idPosting)">
        <figure>
          <img
            src="https://marquettechamber.com/wp-content/uploads/2020/07/services-In-the-city-1024x683.jpg"
          />
        </figure>

        <div v-for="e in allEmployer" :key="e.idEmployer">
          <div class="card-body space-y-3">
            <div class="flex justify-between">
              <h2 class="card-title text-orange-1 text-base">
                {{ job.position.positionName }}
              </h2>
              <i class="material-icons"> bookmark_border </i>
            </div>
            <h2 class="card-title text-base">{{ e.establishmentName }}</h2>
            <p>
              <span><i class="material-icons pr-2"> paid </i></span>
              <span class="hidden font-semibold text-base">ค่าตอบแทน : </span>
              <span class="text-base">{{ job.minSalary }} - {{ job.maxSalary }} บาท</span>
            </p>
            <p>
              <span><i class="material-icons pr-2"> place </i></span>
              <span class="hidden font-semibold text-base">ที่อยู่ : </span>
              <span class="text-base">{{ e.address }}</span>
            </p>
          </div>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import BaseJobDetail from "@/components/BaseJobDetail.vue";
import { mapGetters } from "vuex";
export default {
  props: ["searched"],
  // components: { BaseJobDetail },
  data() {
    return {
      allEmployer: [],
      empId: 0
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
    sendIdEmp(id){
      this.empId = id
      this.$emit("empId", this.empId)
      console.log("empId = " + this.empId)
    }
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