<template>
  <div class="ForgotPass">
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
            <div class="flex flex-col flex-1 justify-center mt-8 mb-8">
              <h1 class="font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-2xl text-center text-orange-1">เข้าสู่ระบบ</h1>
              <div class="w-full mt-4">
                <form
                  autocomplete="off"
                  @submit.prevent="submit"
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
                        <input
                          type="text"
                          name="email"
                          id="email"
                          v-model="form.username"
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
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="password" class="2xl:text-base
                            md:text-base
                            text-sm font-medium px-1"
                        >รหัสผ่าน</label
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
                          name="password"
                          id="password"
                          v-model="form.password"
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
                          placeholder="รหัสผ่าน"
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
                      <p
                       @click="$router.push('/forgetPass')"
                        class="
                          text-right
                          pt-2
                          text-sm
                          cursor-pointer
                          underline
                          text-blue-600
                          hover:text-blue-700
                          font-medium
                        "
                      >
                        ลืมรหัสผ่าน ?
                      </p>
                      <p v-if="showError" class="text-red-600">
                        อีเมลหรือรหัสผ่านไม่ถูกต้อง
                      </p>
                      <p v-if="errorWaitingApprove" class="text-red-600">
                        กรุณารอประมาณ 1-7 วัน แอดมินกำลังตรวจสอบข้อมูลบัญชีของคุณอยู่
                      </p>                      
                    </div>
                  </div>
                  <div class="flex flex-col mt-8">
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
                      เข้าสู่ระบบ
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <div class="text-sm">
                    คุณยังไม่มีบัญชี?
                    <span
                      @click="$router.push('/signup/worker')"
                      class="
                        cursor-pointer
                        underline
                        text-blue-600
                        hover:text-blue-700
                        font-medium
                      "
                      >ลงทะเบียนสำหรับผู้สมัครงาน</span
                    >
                    หรือ
                    <span
                      @click="$router.push('/signup/employer')"
                      class="
                        cursor-pointer
                        underline
                        text-blue-600
                        hover:text-blue-700
                        font-medium
                      "
                      >ลงทะเบียนสำหรับผู้ประกอบการ</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      type: "password",
      eye: require("../assets/hide.png"),
      showError: false,
      errorWaitingApprove: false,
      numTab: "",
    };
  },
  methods: {
    showPassword() {
      console.log("Show Pass");
      if (this.type === "password") {
        this.type = "text";
        this.eye = require("../assets/show.png");
      } else {
        this.type = "password";
        this.eye = require("../assets/hide.png");
      }
    },
    ...mapActions({
      signIn: "auth/signIn",
    }),
    submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace(
            (this.$store.state.auth.user &&
              this.$store.state.auth.user.role?.idRole == 3) ||
              this.$store.state.auth.user.role?.idRole == 2
              ? "/"
              : "/approve"
          );
        })
        .catch((error) => {
          console.log(error);
          if(error.response.data.errorCode == 'STATUS_ACCOUNT_WAIT_APPROVE'){
            this.errorWaitingApprove = true
          }else{
            this.showError = true;
          }
        });
    },
  },
  created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      this.$router.push("/approve");
    } else if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      this.$router.push("/posting");
    } else {
      if (
        this.$store.state.auth.user &&
        this.$store.state.auth.user.role.idRole == "3"
      ) {
        this.$router.push("/");
      }
    }
  },
};
</script>