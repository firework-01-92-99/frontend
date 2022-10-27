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
            <div class="flex flex-col flex-1 justify-center mt-8 mb-8">
              <h1 class="font-bold text-4xl text-center text-orange-1">ยืนยันรหัส OTP</h1>
              <p class="text-center mt-5 mb-5">
                รหัส OTP จะถูกส่งไปยังอีเมลของคุณ
              </p>
              <div class="w-full mt-4">
                <div autocomplete="off" class="form-horizontal w-3/4 mx-auto">
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="email" class="text-base font-medium 2xl:px-1 xl:px-1 lg:px-1 md:px-1 px-0"
                        >กรอกรหัส OTP ที่ได้รับ</label
                      >
                      <div class="flex justify-between mt-2">
                        <!-- <div
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
                        </div> -->
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
                          class="mt-2 flex flex-1 items-center justify-center"
                          length="6"
                          join-character="-"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          @onComplete="fillOTP"
                        />
                      </div>
                      <p v-if="wrongOTP" class="text-red-600">
                        รหัส OTP ไม่ถูกต้อง
                      </p>
                    </div>
                  </div>
                  <button
                    @click="resendOTP()"
                    :disabled="btnDisable"
                    class="text-base 2xl:px-1 xl:px-1 lg:px-1 md:px-1 px-0 mt-8 underline text-blue-600 hover:text-blue-700"
                  >
                    ส่งรหัส OTP อีกครั้ง
                  </button>
                  <div v-if="nowCount == true">
                    {{ timeCount }} วินาที
                  </div>
                  <div class="flex flex-col space-y-4">
                    <!-- <button
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
                    </button> -->
                    <!-- <button
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
                    </button> -->
                  </div>
                </div>
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
      otpInput: "",
      wrongOTP: false,
      btnDisable: false,
      timeCount: 60,
      nowCount: false,
    };
  },
  methods: {
    fillOTP(value) {
      const initialValue = "";
      const otp = value.reduce(
        (previousValue, currentValue) =>
          String(previousValue) + String(currentValue),
        initialValue
      );
      console.log(otp);
      this.otpInput = otp;
      // console.log(this.otpInput)
      this.sendOTP();
    },
    // setTimeout(){

    // },
    async resendOTP() {
      await axios.post(
        `${process.env.VUE_APP_ROOT_API}main/sendOTPAgain?email=` +
          this.$route.query.email
      );
      console.log("ส่ง OTP อีกครั้งแล้ว");

      this.btnDisable = true;
      setTimeout(() => (this.btnDisable = false), 60 * 1000); // 60 seconds
      // clearTimeout(this.setTime);
      this.countDownTimer();
    },
    countDownTimer() {
      this.nowCount = true;
      setTimeout(() => {
        if (this.timeCount > 0) {
          this.timeCount -= 1;
          this.countDownTimer();
        } else {
          if (this.timeCount == 0) {
            this.nowCount = false;
          }
        }
        // this.countDownTimer()
      }, 1000);
    },
    async sendOTP() {
      let errorResponse;
      let res;
      // const toLoginPage = this.$router.push("/signin");
      await axios
        .post(
          `${process.env.VUE_APP_ROOT_API}main/receiveOTP?receiveOTP=` +
            this.otpInput +
            "&email=" +
            this.$route.query.email
        )
        .then(function (response) {
          console.log("1.");
          console.log(response);
          console.log("2.");
          console.log(response.data);
          alert(
            "ยืนยัน OTP เรียบร้อย กรุณารอ Admin ยืนยันและตรวจสอบบัญชีของท่าน"
          );
          res = response.status;
        })
        .catch(function (error) {
          console.log(error);
          errorResponse = error.response.data.errorCode;
        });
      if (res == 200 && this.$route.query.forgetPass != 'yes') {  //it's mean for signup
        this.$router.push("/signin")
      }else{
        if(res == 200 && this.$route.query.forgetPass == 'yes'){  //it's mean for forgetPassword
        this.$router.push("/forgetPass?changePass=yes")
        }
      }
      if (errorResponse == "OTP_INCORRECT") {
        this.wrongOTP = true;
      }
    },
  },
  created() {
    console.log(this.$route.query.email);
    // console.log("this.$route.query.forgetPassword" + this.$route.query.forgetPassword)
    console.log("this.$route.query.forgetPass" + this.$route.query.forgetPass)
  },
};
</script>
<style>
</style>