<template>
  <div>
    <div class="font-sans-thai bg-gray-2 h-screen">
      <div
        class="
          flex flex-col
          items-center
          flex-1
          h-full
          justify-center
          px-4
          sm:px-0
        "
      >
        <div
          class="
            flex
            rounded-lg
            shadow-lg
            w-full
            sm:w-3/4
            lg:w-full lg:h-full
            bg-white
            sm:mx-0
          "
        >
          <div
            class="hidden lg:block lg:w-1/2"
            style="
              background: url('https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80');
              background-size: cover;
              background-position: center center;
            "
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-bold text-4xl text-center">OTP</h1>
              <p class="text-center mt-5">
                กรุณากรอกรหัส OTP ที่ถูกส่งไปยังอีเมลของคุณ
              </p>
              <div class="w-full mt-4">
                <form
                  autocomplete="off"
                  @submit.prevent="submit"
                  class="form-horizontal w-3/4 mx-auto"
                >
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="email" class="text-base font-medium px-1"
                        >รหัส OTP</label
                      >
                      <div class="flex">
                        <div
                          class="
                            w-10
                            z-10
                            pl-1
                            text-center
                            pointer-events-none
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <i
                            class="mdi mdi-email-outline text-gray-400 text-lg"
                          ></i>
                        </div>
                        <!-- <input
                          type="text"
                          name="email"
                          id="email"
                         
                          class="
                            w-full
                            -ml-10
                            pl-10
                            pr-3
                            py-2
                            rounded-lg
                            border-2 border-gray-200
                            outline-none
                            focus:border-indigo-500
                          "
                          placeholder="กรอกรหัส OTP ที่ถูกส่งไปยังอีเมลของคุณ"
                        /> -->
                        <vue-otp-2
                          class="space-x-5 mt-2 px-6"
                          length="6"
                          join-character="-"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          @onComplete="fillOTP"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col mt-8 space-y-4">
                    <button
                      type="submit"
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
                      ยืนยัน
                    </button>
                    <button
                      @click="$router.push('/forgetPass')"
                      class="
                        bg-white
                        border border-orange-1
                        hover:bg-orange-1
                        text-orange-1
                        hover:text-white
                        text-base
                        font-medium
                        py-2
                        px-4
                        rounded
                      "
                    >
                      ย้อนกลับ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <OTP></OTP> -->
  </div>
</template>

	<script>
// import OTP from "@/components/OTP.vue";
import axios from "axios";
export default {
  components: {
    // OTP
  },
  data() {
    return {
      isCodeValid: true,
      otpInput: '',
    };
  },
  methods: {
  fillOTP(value){
    const initialValue = '';
    const otp = value.reduce(
    (previousValue, currentValue) => String(previousValue) + String(currentValue), initialValue);
    console.log(otp)
    this.otpInput = otp
    // console.log(this.otpInput)

  },
  async sendOTP(){
    // let errorResponse    
    await axios.post(`${process.env.VUE_APP_ROOT_API}main/receiveOTP?receiveOTP=` + this.otpInput)
        .then(function (response) {
          console.log(response);
          console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        //   errorResponse = error.response.data.errorCode;
        });
  },  
  },
};
</script>
<style>
</style>