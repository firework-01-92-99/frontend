<template>
  <div class="bg-gray-2 py-16">
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
    if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '1'){
    this.$router.push('/approve')
    }
}
}
</script>

<style>

</style>