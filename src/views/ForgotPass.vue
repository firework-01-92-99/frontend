<template>
   <div class="SignIn py-16">
    <!-- component -->
    <div class="font-sans-thai bg-gray-2 h-screen ">
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
          <div v-if="!this.$route.query.changePass" class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mt-8 mb-8">
              <h1 class="font-bold 2xl:text-4xl
                  xl:text-4xl
                  lg:text-3xl
                  md:text-3xl
                  text-xl text-center text-orange-1">ลืมรหัสผ่าน</h1>
              <div class="w-full mt-4">
                <form
                  autocomplete="off"
                  class="form-horizontal w-3/4 mx-auto"
                >
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="email" class="2xl:text-base
                            md:text-base
                            text-sm font-medium px-1"
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
                        <input @focus="whenFocusTrue()"
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
                    กรุณากรอกอีเมลเพื่อรับรหัส OTP รีเซ็ตพาสเวิร์ด
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
          <div v-if="this.$route.query.changePass" class="flex flex-col w-full lg:w-1/2 p-4 mt-8">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-bold 2xl:text-4xl
                  xl:text-4xl
                  lg:text-3xl
                  md:text-3xl
                  text-xl text-center text-orange-1">รีเซ็ตรหัสผ่าน 
                <!-- {{emailInput}} -->
                </h1>
              <!-- <p class="text-center mt-5">รหัส OTP จะถูกส่งไปยังอีเมลที่คุณกรอก</p> -->
              <div class="w-full mt-4">
                <form
                  autocomplete="off"
                  class="form-horizontal w-3/4 mx-auto"
                >
                  <div class="-mx-3">
                    <!-- <div class="w-full 2xl:px-3 mb-5">
                      <label for="email" class="text-base font-medium px-1"
                        >รหัสผ่านปัจจุบัน</label
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
                        <input
                          :type="type"
                          maxlength="15"
                          name="email"
                          id="email"
                          v-model="reset.currPass"
                          :class="{ 'bg-red-50': currPassInput }"
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
                          placeholder="รหัสผ่านปัจจุบัน"
                        />
                      </div>
                      <p v-if="currPassInput" class="text-red-600">
                    กรุณากรอกรหัสผ่านปัจจุบัน
                  </p> 
                    </div> -->

                        <div class="w-full px-3 mb-5">       
                      <label for="email" class="text-base font-medium px-1"
                        >รหัสผ่านใหม่</label
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
                        <input
                          :type="type"
                          maxlength="15"
                          name="email"
                          id="email"
                          v-model="reset.newPass"
                          :class="{ 'bg-red-50': newPassInput }"
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
                          placeholder="รหัสผ่านใหม่"
                        />
                      </div>
                        <p v-if="newPassInput" class="text-red-600">
                    กรุณากรอกรหัสผ่านใหม่
                  </p> 
                        </div>

                        <div class="w-full px-3 mb-5">                   
                      <label for="email" class="text-base font-medium px-1"
                        >ยืนยันรหัสผ่าน</label
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
                        <input
                          :type="type"
                          maxlength="15"
                          name="email"
                          id="email"
                          v-model="reset.confirmPass"
                          :class="{ 'bg-red-50': confirmPassInput }"
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
                          placeholder="ยืนยันรหัสผ่าน"
                        />
                        <div class="relative">
                            <button
                              class="
                                absolute
                                inset-y-0
                                right-0
                                w-8
                                border-2 border-gray-200
                                rounded-r-lg
                              "
                              @click.prevent="showPassword"
                            >
                              <img class="" :src="eye" />
                            </button>
                          </div>
                      </div>                                               
                    </div>
                  </div>
                  <p v-if="confirmPassInput" class="text-red-600">
                    กรุณากรอกรหัสยืนยืนอีกครั้ง
                  </p>                 
                  <div class="flex flex-col mt-8 space-y-4">
                    <button 
                    @click.prevent="resetPassword()"
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

    <p v-if="this.$route.query.changePass">Test</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
    return{
      type: "password",
      eye: require("../assets/hide.png"),
        emailInput: '',
        errorNoEmail: false,
        errorNull: false,
        reset:{
          newPass: '',
          confirmPass: '',
        },        
        currPassInput: false,
        newPassInput: false,
        confirmPassInput: false,
    }
},
methods: {
    whenFocusTrue(){
      if(this.errorNoEmail == true || this.errorNull == true){
        this.emailInput = ''
        this.errorNull = false
        this.errorNoEmail = false
      }else{
        this.emailInput
      }
    },
    async resetPassword(){
      const vm = this
      let res
      this.newPassInput = this.reset.newPass === '' || this.reset.newPass.length < 8 ? true : false
      this.confirmPassInput = this.reset.confirmPass === '' || this.reset.confirmPass.length < 8 || this.reset.newPass != this.reset.confirmPass
        if(!this.confirmPassInput && !this.newPassInput){
          await axios.post(`${process.env.VUE_APP_ROOT_API}main/newPassword?newPassword=` + this.reset.newPass + "&email=" + this.emailInput ).then(function (response) {
          console.log(response);
          console.log(response.data)
          res = response.status;
          if(res == 200){
            vm.$router.push("/signin"); 
          }
        })
      }
    },  
  async sendMailToBackEnd(){
    console.log("forgetpass");
    let errorResponse;
    let email
    email = this.emailInput
    const vm = this
      await axios.post(`${process.env.VUE_APP_ROOT_API}main/forgetPassword?email=` + email)
        .then(function (response) {
          console.log(response);
          console.log(response.data)
          if(response.data == 'Wait OTP in email ' + email){
            vm.$router.push("/otp" + "/?email=" + email + "&forgetPass=yes"); 
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
    this.persist()
  },
  showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye = require("../assets/show.png");
      } else {
        this.type = "password";
        this.eye = require("../assets/hide.png");
      }
    },
    check(){
        if(this.emailInput == ''){
            this.errorNull = true;
            this.errorNoEmail = false;
        }
    }, 
    persist(){
      localStorage.emailInput = this.emailInput
      console.log("name = " + localStorage.emailInput)
    } 
},
created(){
    if (localStorage.emailInput) {
      this.emailInput = localStorage.emailInput;
      console.log("local1" + this.emailInput)
    }  
  console.log(this.$route.query.changePass)
}
}
</script>

<style>

</style>