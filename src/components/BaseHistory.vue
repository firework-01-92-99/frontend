<template>
  <!-- ประวัติงานที่เคยทำ -->
  <div class="card card-side w-11/12 bg-base-100 shadow-xl">
    <!-- <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure> -->
    <div v-for="s in status.filter((s) => s.statusName == 'Waiting_Rating' || s.statusName == 'empRated')" :key="s.idApplication" class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title text-orange-1 text-base">
          {{s.positionName}}
        </h2>
      </div>
      <h2 class="card-title text-base">{{s.establishmentName}}</h2>
      <div class="flex items-start">
        <p>
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> place </i></span
          >
          <span class="hidden font-semibold text-base">ที่อยู่ : </span>
          <span class="text-base font-medium inline-block align-middle">
            {{
                  s.address +
                  " " +
                  s.districtName +
                  " " +
                  s.subDistrict +
                  " " +
                  s.provinceName +
                  " " +
                  s.postcode
                }}
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
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="2"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="3"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="4"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="5"
              v-model="rateTo.rate"
            />
          </div>
          <div class="w-full mt-3">
            <textarea
              v-model="rateTo.comment"
              class="textarea textarea-bordered w-full"
              placeholder="ระบุความคิดเห็น"
            ></textarea>
          </div>
        </div>
        <div class="w-full">
          <button
            @click="giveRating(s)"
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
            v-if="alreadyGiveScore == true"
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
import axios from "axios";
export default {
  data(){
    return{
      alreadyGiveScore: false,
      giveRate: 5,
      status: [],
      rateTo:{
        rate: 5,
        comment: '',
        timestamp:'',
        forwho: '',
        employer:{},
        worker:{},

      },
    }
  },
  methods: {
    async giveRating(s){
      console.log(s.idApplication)
      // if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const ratings = JSON.stringify(this.rateTo);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}worker/workerGiveScoreToEmployer?idApplication=${s.idApplication}`,
          ratings,
          customConfig
        );
        this.alreadyGiveScore = true
      this.status1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin_worker/selectApplicationByWorker?idWorker=` +
          this.$store.state.auth.user.worker.idWorker
      );
      this.status = this.status1.data;
        console.log(result.data)
    // }      
    }    
  },
  computed: {
  },  
  async created(){
    if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '3'){
      console.log(this.$store.getters.getWorkingHistory)
      this.status1 = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin_worker/selectApplicationByWorker?idWorker=` +
          this.$store.state.auth.user.worker.idWorker
      );
      this.status = this.status1.data;
      this.alreadyGiveScore = this.status.map((s) => s.status_idStatus == 25 || s.status_idStatus == 26)
      console.log(this.alreadyGiveScore)      
    }
  },
};
</script>

<style>
</style>