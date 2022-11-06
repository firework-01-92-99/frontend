<template>
<div>
  <div v-if="noValue" class="text-center mb-10">
      <div><img src="../assets/icon/inbox.png" class="w-20 mx-auto" /></div>
      <div class="pt-3">
        คุณยังไม่มีรายการงานโปรด <br />สามารถหางานโปรดของคุณได้<span
          class="text-blue-700 cursor-pointer underline hover:text-blue-800" @click="$router.push('/')"
          >ที่นี่</span
        >
      </div>
    </div>
  <div class="cursor-pointer">
  <!-- "/detail?idPosting=" + idPost + "&idEmployer=" + idEmp -->
    <!-- <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure> -->
    <div v-for="f in myFav" :key="f.idFavorite" class="card card-side w-full bg-base-100 shadow-xl my-10">
    <div @click="linkTo(f.idWhatFavorite)" class="card-body">
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
        <span class="text-base inline-block align-middle">
        {{f.posting.minSalary.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " - " + f.posting.maxSalary.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
          บาท</span
        >
      </p>
      <div class="flex items-start">
        <p>
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> place </i></span
          >
          <span class="hidden font-semibold text-base">ที่อยู่ : </span>
          <span class="text-base inline-block align-middle">
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
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      myFav: [],
      response: {},
      noValue: false
    };
  },
  methods: {
    // linkTo(idFav){
    //   let res
    //   let idPost
    //   const idEmp
    //   axios.get(`${process.env.VUE_APP_ROOT_API}worker/getPostingAndEmployerByIdFavorite?idFavorite=` + idFav).then(function (response) {
    //    res = response.data
    //    idPost = res.posting?.idPosting
    //    console.log(res)
    //   // console.log(response.data.employer.idEmployer);
    // })
    // console.log(res)
    // console.log(res?.posting?.idPosting)
    //   // this.$router.push("/detail?idPosting=" + res?.posting?.idPosting + "&idEmployer=" + res?.employer?.idEmployer)
    // },
    async linkTo(idFav){
     const res = await axios.get(`${process.env.VUE_APP_ROOT_API}worker/getPostingAndEmployerByIdFavorite?idFavorite=` + idFav)
      this.response = res.data
      this.$router.push("/detail?idPosting=" + this.response.posting?.idPosting + "&idEmployer=" + this.response.employer?.idEmployer)
    },    

},
async created(){
    if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '3'){
      const myFav1 = await axios.get(`${process.env.VUE_APP_ROOT_API}worker/getMyFavorite?idWorker=` + this.$store.state.auth.user.worker.idWorker)
      this.myFav = myFav1.data
      console.log(this.myFav)
      this.noValue = this.myFav.length == 0
    }else{
      this.$router.push('/')
    }
}
}
</script>

<style>
</style>