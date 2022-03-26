<template>
  <!-- search criteria -->
  <div class="hero h-40 bg-gray-300">
    <div class="form-control grid grid-cols-4 gap-4 w-11/12 font-sans-thai">
      <div class="input-group w-full">
        <input
          type="text"
          placeholder="ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท"
          class="input input-bordered w-full"
        />
      </div>
      <div class="input-group w-full">
        <select class="select select-bordered w-full">
          <option disabled selected>จังหวัด</option>
          <option>กรุงเทพ</option>
          <option>กระบี่</option>
        </select>
      </div>
      <div class="input-group w-full">
        <select class="select select-bordered w-full">
          <option disabled selected>รูปแบบงาน</option>
          <option>รายเดือน</option>
          <option>พาร์ทไทม์</option>
        </select>
      </div>
      <div class="input-group w-full">
        <select class="select select-bordered w-full">
          <option disabled selected>เงินเดือน</option>
          <option>มากไปน้อย</option>
          <option>น้อยไปมาก</option>
        </select>
      </div>
      <button class="btn">ค้นหางาน</button>
      <button class="btn btn-ghost">รีเซ็ตเงื่อนไข</button>
    </div>
  </div>
  <!-- job card -->
  <base-job></base-job>
</template>

<script>
import BaseJob from "./BaseJob.vue";
export default {
  components: { BaseJob },
};
</script>

<style>
</style>