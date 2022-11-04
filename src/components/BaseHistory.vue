<template>
  <!-- ประวัติงานที่เคยทำ -->
  <div class="card card-side w-11/12 bg-base-100 shadow-xl">
    <!-- <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure> -->
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title text-orange-1 text-base">
          job.position.positionName
        </h2>
      </div>
      <h2 class="card-title text-base">establishmentName</h2>
      <p>
        <span class="inline-block align-middle"
          ><i class="material-icons pr-2"> paid </i></span
        >
        <span class="hidden font-semibold text-base">ค่าตอบแทน : </span>
        <span class="text-base font-medium inline-block align-middle">
          <!-- {{
                      job.minSalary
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    -
                    {{
                      job.maxSalary
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }} -->
          บาท</span
        >
      </p>
      <div class="flex items-start">
        <p>
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> place </i></span
          >
          <span class="hidden font-semibold text-base">ที่อยู่ : </span>
          <span class="text-base font-medium inline-block align-middle">
            <!-- {{
                  getPostbyEmp(job.idEmployer).address +
                  " " +
                  getPostbyEmp(job.idEmployer).district.districtName +
                  " " +
                  getPostbyEmp(job.idEmployer).subDistrict.subDistrict +
                  " " +
                  getPostbyEmp(job.idEmployer).province.provinceName +
                  " " +
                  getPostbyEmp(job.idEmployer).subDistrict.postcode
                }} -->
          </span>
        </p>
      </div>
      <hr />
      <div class="card-actions flex flex-col">
        <div class="flex flex-col w-full">
          <div class="rating mt-1">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="1"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="2"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="3"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="4"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="5"
              v-model="giveRate"
            />
          </div>
          <div class="w-full mt-3">
            <textarea
              class="textarea textarea-bordered w-full"
              placeholder="ระบุความคิดเห็น"
            ></textarea>
          </div>
        </div>
        <div class="w-full">
          <button
            class="
              btn
              bg-orange-1
              border-orange-1
              hover:bg-orange-2 hover:border-orange-2
              w-full
            "
          >
            ให้คะแนน
          </button>
          <button
            class="
              btn
              border-0
              bg-orange-2
              hover:bg-orange-2
              w-full
            "
          >
            <i class="material-icons pr-2"> done </i>
            ให้คะแนนแล้ว
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      giveRate: 0,
      // whatWorkerDo: [],

    }
  },
  methods: {
    
  },
  computed: {
    ...mapGetters({
      whatWorkerDo: "getWorkingHistory",
    }),
  },  
  created(){
    if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '3'){
      console.log(this.$store.getters.getWorkingHistory)
      
    }
  },
};
</script>

<style>
</style>