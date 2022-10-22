<template>
  <div>
    <!-- <OTP></OTP> -->
    <vue-otp-2
      length="6"
      join-character="-"
      inputmode="numeric"
      pattern="[0-9]*"
      @onComplete="console.log()" 
    />
  </div>
</template>

	<script>
// import OTP from "@/components/OTP.vue";

export default {
  components: {
    // OTP
  },
  data() {
    return {
      isCodeValid: true,
    };
  },
  methods: {
    // otp(){
    //   console.log(onComplete)
    // }
  },
};
</script>
<style>
</style>