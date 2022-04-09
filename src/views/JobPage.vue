<template>
  <div class="bg-gray-2">
    <!-- header -->
    <div
      class="hero h-64"
      style="
        background-image: url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md font-sans-thai">
          <h1 class="mb-5 text-5xl font-bold">สมัครงาน...</h1>
          <p class="mb-5">ค้นหางานที่คุณอยากทำ...</p>
        </div>
      </div>
    </div>
    <!-- search criteria & job card -->
    <base-job-view></base-job-view>
  </div>
</template>

<script>
import BaseJobView from "@/components/BaseJobView.vue";
export default {
  components: { BaseJobView },
};
</script>

<style>
</style>