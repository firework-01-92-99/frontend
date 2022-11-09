<template>
  <div>
    <card-of-emp></card-of-emp>
  </div>
</template>

<script>
import CardOfEmp from '@/components/CardOfEmp.vue'
export default {
  components: { CardOfEmp },
  methods: {
  },
  created(){
    // this.idEmp = this.$route.query.idEmp
  },

}
</script>

<style>

</style>