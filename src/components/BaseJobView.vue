<template>
  <!-- search criteria -->
  <div class="hero h-40 bg-gray-300">
    <form
      @submit.prevent="getData()"
      class="form-control grid grid-cols-4 gap-4 w-11/12 font-sans-thai"
    >
      <div class="input-group w-full">
        <input
          v-model.trim="filter.enterEstOrPost"
          type="text"
          placeholder="ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท"
          class="input input-bordered w-full"
        />
      </div>
      <div class="input-group w-full">
        <select
          v-model.trim="filter.enterProvince"
          class="select select-bordered w-full"
        >
          <option :value="''" disabled selected>จังหวัด</option>
          <option
            v-for="p in provinces"
            :key="p.idProvince"
            :value="p.idProvince"
          >
            {{ p.provinceName }}
          </option>
        </select>
      </div>
      <div class="input-group w-full">
        <select
          v-model.trim="filter.enterHiringType"
          class="select select-bordered w-full"
        >
          <option :value="''" disabled selected>รูปแบบงาน</option>
          <option
            v-for="h in typeHiring"
            :key="h.idHiringtype"
            :value="h.idHiringtype"
          >
            {{ h.nameType }}
          </option>
        </select>
      </div>
      <div class="input-group w-full">
        <select
          v-model.trim="filter.enterSortSalary"
          class="select select-bordered w-full"
        >
          <option :value="''" disabled selected>เงินเดือน</option>
          <option>มากไปน้อย</option>
          <option>น้อยไปมาก</option>
        </select>
      </div>
      <button type="submit" class="btn">ค้นหางาน</button>
      <button @click="reset()" class="btn btn-ghost">รีเซ็ตเงื่อนไข</button>
    </form>
  </div>
  <!-- job card -->
  <base-job></base-job>
</template>

<script>
import axios from "axios";
import BaseJob from "./BaseJob.vue";
export default {
  components: { BaseJob },
  data() {
    return {
      //ทำ V-model ใน input, select บลาๆ ด้วย
      provinces: [],
      typeHiring: [],
      subDistricts: [],
      searched: [],
      filter: {
        enterEstOrPost: "",
        enterProvince: "",
        enterHiringType: "",
        enterSortSalary: "",
      },

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
    async getData() {
        if (this.filter.enterSortSalary == "มากไปน้อย") {
          this.filter.enterSortSalary = "DESC";
        } else {
          this.filter.enterSortSalary = "ASC";
        }
        await axios
          .get(
            `http://localhost:3000/main/searchPosting?establishmentName=${this.filter.enterEstOrPost}&positionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
          )
          .then((response) => {
            console.log(response.data);
            this.$store.commit("setPosting", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    },
      async reset(){
        const allPost = await this.fetch("http://localhost:3000/main/allPosting");
        this.$store.commit("setPosting", allPost)
        console.log("Store 2 = " + this.$store.getters.getPosting)
        this.filter = {
          enterEstOrPost: "",
          enterProvince: "",
          enterHiringType: "",
          enterSortSalary: "",
      }
      },
  },

  async created() {
    this.provinces = await this.fetch("http://localhost:3000/main/allProvince");
    this.typeHiring = await this.fetch(
      "http://localhost:3000/main/allHiringType"
    );
    
  },
};
</script>

<style>
</style>