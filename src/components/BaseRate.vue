<template>
  <!-- คะแนนของฉัน -->
  <div class="flex-col space-y-5">
    <!-- <div class="flex justify-center">
                <div class="avatar w-1/3 mt-5">
                  <div
                    class="
                      w-full
                      rounded-full
                      ring ring-orange-1 ring-offset-base-100 ring-offset-2
                    "
                  >
                    <img :src="image" />
                  </div>
                </div>
              </div> -->

    <!-- <div class="collapse"> -->
    <!-- <input class="w-1/3" type="checkbox" /> -->
    <div class="flex justify-start">
      <div class="stats bg-orange-1 shadow w-11/12">
        <div class="stat text-white">
          <div class="stat-title">คะแนน</div>
          <div class="stat-value">{{workerScore}} จาก 5</div>
          <div class="stat-desc">1 รีวิว</div>
        </div>
      </div>
    </div>

    <div v-for="s in scoreList" :key='s.idRating' class="flex flex-wrap justify-start space-y-5">
      <div class="card w-11/12 bg-base-100 border border-black shadow-lg">
        <div class="card-body">
          <h2 class="card-title">ชื่อสถานประกอบการ</h2>
          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              v-model="s.rate"
              :value="1"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              v-model="s.rate"
              :value="2"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              v-model="s.rate"
              :value="3"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              v-model="s.rate"
              :value="4"
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              v-model="s.rate"
              :value="5"
              disabled
            />
            <span class="">•</span><span class="">{{s.timestamp}}</span>
          </div>
          <p>{{s.comment}}</p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
    data() {
    return {
      workerScore: 0,
      scoreList:[], 
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
  async created(){
    this.workerScore = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/getWorkerTotalScore?idWorker=` + this.$store.state.auth.user.worker.idWorker);
    this.scoreList = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/getWorkerScoreList?idWorker=` + this.$store.state.auth.user.worker.idWorker);
    console.log(this.scoreList)
  }
};
</script>

<style>
</style>