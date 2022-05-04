<template>
  <div class="bg-gray-2 font-sans-thai">
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
              md:text-5xl
              text-2xl
              font-bold
            "
          >
            สมัครงาน
          </h1>
          <p class="mb-5">ค้นหางานที่ใช่ ให้คุณได้ทำงานที่ชอบ</p>
        </div>
      </div>
    </div>
    <!-- search criteria & job card -->
    <base-job-view></base-job-view>
    <!-- <div class="flex flex-row justify-between p-6 font-sans-thai"> -->
    <!-- count posting  -->
    <p class="my-auto font-medium text-sm p-10">
      1-30 จากทั้งหมด<span class="text-orange-1 text-sm"> 999 </span>ตำแหน่งงาน
    </p>

    <base-job></base-job>
    <!-- pagination  -->
    <div class="btn-group justify-center">
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
          text-sm
        "
      >
        หน้า <span class="text-orange-1 px-1">1</span> จาก 10
      </button>
      <button class="btn btn-ghost">
        <i class="material-icons"> chevron_right </i>
      </button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import BaseJobView from "@/components/BaseJobView.vue";
import BaseJob from "@/components/BaseJob.vue";
export default {
  components: { BaseJobView, BaseJob },
};
</script>