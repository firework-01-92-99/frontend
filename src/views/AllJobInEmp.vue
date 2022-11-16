<template>
  <div class="bg-gray-2 h-full font-sans-thai py-16">
    <div class="">
      <button
        @click="$router.push('/allEmployer')"
        class="btn btn-ghost font-sans-thai flex justify-start ml-7 mt-5"
      >
        <i class="material-icons"> arrow_back_ios </i>บริษัททั้งหมด
      </button>
    </div>
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