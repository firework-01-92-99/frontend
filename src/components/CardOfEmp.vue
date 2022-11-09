<template>
  <div>
<div v-if="!noValue">
<div v-for="p in posting.content" :key="p.idPosting">
                <h2 class="card-title text-orange-1 text-base">
                  {{p.position.positionName}}
                </h2>  
    <!-- {{p.address}} -->
</div>
</div>
<div v-if="noValue">
  ไม่มีผลลัพธ์
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
    return{
        posting: [],
        noValue: false,

    }
},
methods: {

},
async created(){
    this.idEmp = this.$route.query.idEmp
    const posting = await axios.get(`${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` + this.idEmp)
    this.posting = posting.data
    this.noValue = this.posting.content.length == 0
},
}
</script>

<style>

</style>