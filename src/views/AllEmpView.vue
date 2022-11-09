<template>
<div>
<div v-for="i in showEmployer" :key="i.idEmployer" class="card w-40 h-40 shadow-xl ">
  <figure><img @click="selectImage(i)" :src="envImage + i.profile" class="object-cover w-full"/></figure>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            showEmployer: [],
            envImage: `${process.env.VUE_APP_ROOT_API}main/image/`
            // img:
        }
    },
methods:{
    selectImage(emp){
        this.$router.push("/jobOfThisEmp?idEmp=" + emp.idEmployer)
    }
},
async created(){
const showEmployer1 = await axios.get(`${process.env.VUE_APP_ROOT_API}main/allEmployer`)
this.showEmployer = showEmployer1.data
console.log(this.showEmployer)
}
}
</script>

<style>

</style>