<template>
  <!-- search criteria -->
  <div class="hero 2xl:h-48 xl:h-48 lg:h-48 md:h-48 bg-gray-1">
    <form
      @submit.prevent="getData()"
      class="
        form-control
        grid
        2xl:grid-cols-4
        xl:grid-cols-4
        lg:grid-cols-4
        md:grid-cols-4
        grid-rows-4
        gap-4
        w-11/12
        font-sans-thai
        mt-0
        2xl:mt-6
        xl:mt-6
        lg:mt-6
        md:mt-6
      "
    >
      <div class="w-full flex-col mt-6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
        <p class="font-semibold 2xl:text-base md:text-xs">ค้นหาตำแหน่งงานหรือชื่อบริษัท</p>
        <input
          v-model.trim="filter.enterEstOrPost"
          type="text"
          placeholder="ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท"
          class="input input-bordered w-full 2xl:text-base md:text-xs"
        />
      </div>
      <div class="w-full flex-col">
        <p class="font-semibold 2xl:text-base md:text-xs">จังหวัด</p>
        <select
          v-model.trim="filter.enterProvince"
          class="select select-bordered w-full 2xl:text-base md:text-xs"
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
      <div class="w-full flex-col">
        <p class="font-semibold 2xl:text-base md:text-xs -mt-6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
          รูปแบบงาน
        </p>
        <select
          v-model.trim="filter.enterHiringType"
          class="select select-bordered w-full 2xl:text-base md:text-xs"
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
      <div class="w-full flex-col">
        <p class="font-semibold 2xl:text-base md:text-xs -mt-12 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
          ค่าตอบแทน
        </p>
        <select
          v-model.trim="filter.enterSortSalary"
          class="select select-bordered w-full 2xl:text-base md:text-xs"
        >
          <option :value="''" disabled selected>ค่าตอบแทน</option>
          <option value="DESC">มากไปน้อย</option>
          <option value="ASC">น้อยไปมาก</option>
        </select>
      </div>
      <div
        class="
          w-full
          grid grid-rows-4
          gap-4
          2xl:flex 2xl:flex-row 2xl:space-x-4
          xl:flex xl:flex-row xl:space-x-4
          lg:flex lg:flex-row lg:space-x-4
          md:flex md:flex-row md:space-x-4
        "
      >
        <button
          type="submit"
          class="
            btn
            border-orange-1
            bg-orange-1
            hover:bg-orange-2 hover:border-orange-2
            w-full
            -mt-16
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            2xl:text-base
            md:text-xs
          "
        >
          ค้นหางาน
        </button>
        <button
          @click="resetShowJob()"
          class="
            btn btn-ghost
            w-full
            -mt-7
            -mb-5
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            2xl:text-base
            md:text-xs
          "
        >
          รีเซ็ตเงื่อนไข
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // components: {  },
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
      console.log("enterEstOrPost = " + this.filter.enterEstOrPost);
      await axios
        .get(
          `http://localhost:3000/main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
        )
        .then((response) => {
          console.log(response.data);
          this.$store.commit("setPosting", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async resetShowJob() {
      this.clearSearching();
      const allPost = await this.fetch("http://localhost:3000/main/allPosting");
      this.$store.commit("setPosting", allPost);
      console.log("Store 2 = " + this.$store.getters.getPosting);
    },
    clearSearching() {
      this.filter = {
        enterEstOrPost: "",
        enterProvince: "",
        enterHiringType: "",
        enterSortSalary: "",
      };
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