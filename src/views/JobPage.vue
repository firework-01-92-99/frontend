<template>
  <div class="bg-gray-2 h-full font-sans-thai">
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
          <p class="font-semibold 2xl:text-base md:text-xs">
            ค้นหาตำแหน่งงานหรือชื่อบริษัท
          </p>
          <input
            v-model.trim="filter.enterEstOrPost"
            type="text"
            placeholder="ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท"
            class="
              input input-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
              text-gray-400
            "
          />
        </div>
        <div class="w-full flex-col">
          <p class="font-semibold 2xl:text-base md:text-xs">จังหวัด</p>
          <select
            v-model.trim="filter.enterProvince"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
              text-gray-400
            "
          >
            <option :value="''" disabled selected>จังหวัด</option>
            <option
              class="text-black"
              v-for="p in provinces"
              :key="p.idProvince"
              :value="p.idProvince"
            >
              {{ p.provinceName }}
            </option>
          </select>
        </div>
        <div class="w-full flex-col">
          <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-6
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            รูปแบบงาน
          </p>
          <select
            v-model.trim="filter.enterHiringType"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
              text-gray-400
            "
          >
            <option :value="''" disabled selected>รูปแบบงาน</option>
            <option
              class="text-black"
              v-for="h in typeHiring"
              :key="h.idHiringtype"
              :value="h.idHiringtype"
            >
              {{ h.nameType }}
            </option>
          </select>
        </div>
        <div class="w-full flex-col">
          <p
            class="
              font-semibold
              2xl:text-base
              md:text-xs
              -mt-12
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
            "
          >
            ค่าตอบแทน
          </p>
          <select
            v-model.trim="filter.enterSortSalary"
            class="
              select select-bordered
              w-full
              2xl:text-base
              md:text-xs
              font-normal
              text-gray-400
            "
          >
            <option class="text-black" :value="''" disabled selected>
              ค่าตอบแทน
            </option>
            <option class="text-black" value="DESC">มากไปน้อย</option>
            <option class="text-black" value="ASC">น้อยไปมาก</option>
          </select>
        </div>
        <div
          class="
            w-full
            grid grid-rows-4
            gap-4
            2xl:flex 2xl:flex-row 2xl:space-x-4 2xl:gap-0
            xl:flex xl:flex-row xl:space-x-4 xl:gap-0
            lg:flex lg:flex-row lg:space-x-4 lg:gap-0
            md:flex md:flex-row md:space-x-4 md:gap-0
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
    <!-- <div class="flex flex-row justify-between p-6 font-sans-thai"> -->
    <!-- count posting  -->
      <p class="my-auto font-medium text-sm p-10">
        ทั้งหมด <span class="text-orange-1 text-sm"> {{lastPage.totalElements}} </span
        > ผลลัพธ์
      </p>
        <div v-if="noValue">
      <div class="text-center mt-10 mb-10">ไม่มีผลลัพธ์</div>
    </div>
    <base-job></base-job>
    <!-- pagination  -->
    <div v-if="!noValue" class="btn-group justify-center pb-5 -mt-5">
      <button @click="paging((action = 'decrease'))" class="btn btn-ghost">
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
        หน้า <span class="text-orange-1 px-1">{{ page }}</span> จาก {{lastPage.totalPages}}
      </button>
      <button @click="paging((action = 'increase'))" class="btn btn-ghost">
        <i class="material-icons"> chevron_right </i>
      </button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import BaseJobView from "@/components/BaseJobView.vue";
import { mapGetters } from "vuex";
import axios from "axios";
import BaseJob from "@/components/BaseJob.vue";
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
      noValue: false,
      page: 1,
      action: "",
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
    async resetShowJob() {
      this.clearSearching();
      // const allPost = await this.fetch("http://localhost:3000/main/allPosting");
      const allPost = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allPosting`);
      this.$store.commit("setPosting", allPost);
      console.log("Store 2 = " + this.$store.getters.getPosting);
    },
    async getData() {
      await axios
        .get(
          // `http://localhost:3000/main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
          `${process.env.VUE_APP_ROOT_API}main/searchPosting?establishmentAndpositionName=${this.filter.enterEstOrPost}&idHiringtype=${this.filter.enterHiringType}&sortSalary=${this.filter.enterSortSalary}&idProvince=${this.filter.enterProvince}&idDistrict=&idSubdistrict=`
        )
        .then((response) => {
          console.log(response.data);
          this.$store.commit("setPosting", response.data);
          if (this.lastPage.totalPages == 0) {
            this.noValue = true;
          } else {
            this.noValue = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async paging(action) {
      if (this.page > 0) {
        if (action == "decrease" && this.page !== 1) {
          this.page--;
        } else if (action == "increase" && this.page < this.lastPage.totalPages) {
          this.page++;
        } else {
          console.log("ต่ำกว่าหน้า 1 ไม่ได้");
        }
        const pageBE = this.page - 1;
        // const sendBE = await this.fetch("http://localhost:3000/main/allPosting?pageNo=" + pageBE);
        const sendBE = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allPosting?pageNo=` + pageBE);
        this.$store.commit("setPosting", sendBE);
      }
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
    computed: {
    ...mapGetters({
      lastPage: "getPosting",
    }),
  },
  async created() {
    // this.provinces = await this.fetch("http://localhost:3000/main/allProvince");
    this.provinces = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allProvince`);
    // this.typeHiring = await this.fetch("http://localhost:3000/main/allHiringType");
    this.typeHiring = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allHiringType`);
    console.log("test")
  },
};
</script>
