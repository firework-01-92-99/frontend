<template>
  <div class="fixed flex justify-center items-center font-sans-thai">
    <div class="flex xl:flex-row flex-col">
      <div class="xl:pl-28 mx-auto xl:mx-0">
        <div class="font-bold text-4xl text-center">รหัส OTP</div>
        <div class="text-base font-normal px-1">
          กรุณากรอกรหัส OTP 6 หลัก ที่ถูกส่งไปยังอีเมล
          <span class="text-blue-600">{{ email }}</span>
          <!-- <br />and click buttom confirm to complete the process. -->
        </div>
        <OtpInput v-model="otp" classtext="xl:w-16 w-8 xl:text-xl text-xl" />
        <div
          v-if="!validateotp"
          class="
            text-red-600 text-base
            font-thin
            -mb-6
            text-center
            xl:text-left
          "
        >
          *{{ validatetext }}
        </div>
        <div
          class="
            text-lg
            xl:mt-16
            mt-10
            flex
            xl:flex-row
            flex-col
            justify-between
            items-center
            xl:items-start
          "
        >
          <button
            class="
              bg-orange-1
              hover:bg-orange-2
              text-white text-base
              font-medium
              py-2
              px-4
              rounded
            "
          >
            ยืนยันรหัส OTP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OtpInput from "./OtpInput.vue";
export default {
  components: {
    OtpInput,
  },
  props: {
    email: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      otp: "",
      validateotp: true,
      validatetext: "",
    };
  },
  watch: {
    // otp: function otpCheck() {
    //     if (!this.validateotp) {
    //         this.validateotp = this.otp.length === 6
    //         this.validatetext = 'กรุณาใส่ค่าให้ครบ'
    //     }
    // }
  },
  methods: {},
};
</script>