<template>
  <div>
    <router-link to="/"
      ><button class="btn btn-ghost font-sans-thai flex justify-start ml-10">
        ย้อนกลับ
      </button>
    </router-link>
  </div>
  <!-- component -->
  <section class="text-gray-700 body-font overflow-hidden mx-auto bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <!-- ภาพบริษัท -->
        <img
          alt="ecommerce"
          class="
            lg:w-1/5 lg:h-1/5
            w-full
            object-cover object-center
            rounded
            border border-gray-200
          "
          src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
        />
        <div
          class="font-sans-thai lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
        >
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            ชื่อบริษัท
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ jobDetail.position?.positionName }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed">ที่อยู่บริษัท</p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"
          ></div>
          <div class="flex">
            <button
              class="
                flex
                ml-auto
                text-white
                bg-red-500
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-red-600
                rounded
              "
            >
              สมัครงาน
            </button>
            <button
              class="
                rounded-full
                w-10
                h-10
                bg-gray-200
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                text-gray-500
                ml-4
              "
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex flex-col w-full font-sans">
    <div class="grid h-full card bg-base-300 rounded-box place-items-center">
      <p>{{ jobDetail.sex }}</p>
      <p>{{ jobDetail.minAge }} - {{ jobDetail.maxAge }}</p>
      <p>{{ jobDetail.startTime }} - {{ jobDetail.endTime }}</p>
      <p>
        วันทำงาน : 
        <span v-for="day in jobDetail.postingHasDayList" :key="day.idPostingHasDay">
        {{day.day.abbreviation + ''}}.  
        </span>
      </p>
      <p>{{ jobDetail.workDescription }}</p>
      <p>{{ jobDetail.hiringType?.nameType }}</p>
      <p>{{ jobDetail.minSalary }} - {{ jobDetail.maxSalary }}</p>
      <div v-if="jobDetail.overtimePayment !== null">
        <p>{{ jobDetail.overtimePayment }}</p>
      </div>
      <div v-else>ไม่มี</div>
      <p>{{ jobDetail.welfare }}</p>
    </div>
    <div class="divider"></div>
    <div class="grid h-full card rounded-box place-items-center">
      content
      <base-job></base-job>
    </div>
  </div>
</template>

<script>
import BaseJob from "@/components/BaseJob.vue";

export default {
  components: { BaseJob },
  data() {
    return {
      jobDetail: [],
      urlJobDetail: "http://localhost:3000/main/selectPosting",
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
  },
  async created() {
    const id = this.$route.query.idPosting
    this.jobDetail = await this.fetch(this.urlJobDetail+'?idPosting=' + `${id}`);
  },
};
</script>

<style>
</style>