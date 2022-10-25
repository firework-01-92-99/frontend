<template>
  <div class="cursor-pointer" @click="$router.push('/posting')">
  <!-- "/detail?idPosting=" + idPost + "&idEmployer=" + idEmp -->
    <!-- <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure> -->
    <div v-for="f in myFav" :key="f.idFavorite" class="card card-side 2xl:w-11/12 w-full bg-base-100 shadow-xl my-10">
    <div class="card-body">
      <div class="flex justify-between">
        <!-- {{f.employer}} -->
        <!-- {{this.$store.state.auth.user.worker}} -->
        <h2 class="card-title text-orange-1 text-base">
          <!-- {{f.posting.positionName ? f.posting.positionName : ''}} -->
          {{f.posting.position.positionName}}
        </h2>
      </div>
      <h2 class="card-title text-base">{{f.employer.establishmentName}}</h2>
      <p>
        <span class="inline-block align-middle"
          ><i class="material-icons pr-2"> paid </i></span
        >
        <span class="hidden font-semibold text-base">ค่าตอบแทน : </span>
        <span class="text-base font-medium inline-block align-middle">
        {{f.posting.minSalary + " - " + f.posting.maxSalary}}
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
            {{f.employer.address + " " + f.employer.district.districtName + " " + f.employer.subDistrict.subDistrict + " " + f.employer.province.provinceName + " " + f.employer.subDistrict.postcode}}
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
      <!-- <div class="card-actions justify-end">
                  <button class="btn btn-primary">Watch</button>
                </div> -->
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      myFav: [],
    };
  },
  methods: {

},
async created(){
    if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '3'){
      const myFav1 = await axios.get(`${process.env.VUE_APP_ROOT_API}worker/getMyFavorite?idWorker=` + this.$store.state.auth.user.worker.idWorker)
      this.myFav = myFav1.data
      console.log(this.myFav)
    }else{
      this.$router.push('/')
    }
}
}
</script>

<style>
</style>