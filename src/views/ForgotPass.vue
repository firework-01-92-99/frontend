<template>
   <div class="SignIn">
    <!-- component -->
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
              <h1 class="font-bold text-4xl text-center">ลืมรหัสผ่าน</h1>
              <p class="text-center mt-5">รหัส OTP จะถูกส่งไปยังอีเมลที่คุณกรอก</p>
              <div class="w-full mt-4">
                <form
                  autocomplete="off"
                  class="form-horizontal w-3/4 mx-auto"
                >
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="email" class="text-base font-medium px-1"
                        >อีเมล</label
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
                        <input @focus="errorNoEmail = false, errorNull = false, emailInput = ''"
                          type="text"
                          name="email"
                          id="email"
                          v-model="emailInput"
                          :class="{ 'bg-red-50': errorNull }"
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
                          placeholder="อีเมล"
                        />
                      </div>
                    </div>
                  </div>
                  <p v-if="errorNoEmail" class="text-red-600">
                    ไม่มีอีเมล {{emailInput}} นี้ในระบบ
                  </p>
                  <p v-if="errorNull" class="text-red-600">
                    กรุณากรอกอีเมลเพื่อรับ OTP รีเซ็ตพาสเวิร์ด
                  </p>                  
                  <div class="flex flex-col mt-8 space-y-4">
                    <button 
                    @click.prevent="sendMailToBackEnd()"
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
                    @click="$router.push('/signin')"
                      class="
                        bg-white
                        border
                        border-orange-1
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
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
    return{
        emailInput: '',
        errorNoEmail: false,
        errorNull: false,
    }
},
methods: {
    check(){
        if(this.emailInput == ''){
            this.errorNull = true;
            this.errorNoEmail = false;
        }
    },
  async sendMailToBackEnd(){
    console.log("forgetpass");
    let errorResponse;
    let email
    const linkTo = this.$router.push("/otp"); 
    email = this.emailInput
      await axios.post(`${process.env.VUE_APP_ROOT_API}main/forgetPassword?email=` + email)
        .then(function (response) {
          console.log(response);
          console.log(response.data)
          if(response.data == 'Wait OTP in email ' + email){
            linkTo
          }
        })
        .catch(function (error) {
          errorResponse = error.response.data.errorCode;
        });
      console.log("errorResponse = " + errorResponse);
      if(this.emailInput == ''){
        this.errorNull = true;
      }else{
        this.errorNoEmail = true;
      }
  
  },
},
}
</script>

<style>

</style>