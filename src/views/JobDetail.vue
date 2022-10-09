<template>
  <div class="bg-gray-2">
  <base-job-detail></base-job-detail></div>
</template>
<script>
import BaseJobDetail from "@/components/BaseJobDetail.vue";

export default {
  components: { BaseJobDetail },

  data() {
    return {

    };
  },
  methods: {

},
created(){
  if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '2'){
    this.$router.push('/posting')
  }else{
    if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '1'){
    this.$router.push('/approve')
    }
  }
}
}
</script>

<style>

</style>