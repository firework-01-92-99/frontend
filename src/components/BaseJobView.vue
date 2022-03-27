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
          <option v-for="p in provinces" :key="p.idProvince" :value="p">
          {{ p.provinceName }}
          </option>
        </select>
      </div>
      <div class="input-group w-full">
        <select class="select select-bordered w-full">
          <option disabled selected>รูปแบบงาน</option>
          <option v-for="h in typeHiring" :key="h.idHiringtype" :value="p">
          {{ h.nameType }}
          </option>
        </select>
      </div>
      <div class="input-group w-full">
        <select  @click="sorting()" class="select select-bordered w-full">
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
  data(){
    return{
      provinces: [],
      typeHiring: [],
      subDistricts: [],
    }
  },
  methods:{
      async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    sorting(){
      console.log("sorting")
    }
  },
  async created() {
    this.provinces = await this.fetch("http://localhost:3000/main/allProvince");
    this.typeHiring = await this.fetch("http://localhost:3000/main/allHiringType");
  },
};
</script>

<style>
</style>