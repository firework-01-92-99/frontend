<template>
  <div class="SignUp">
    <div class="font-sans-thai bg-gray-2 h-full w-screen">
      <div
        class="
          2xl:pt-0
          lg:pt-4
          md:pt-0
          pt-36
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
              background: url('https://blog.bonfire.com/wp-content/uploads/2018/05/make-custom-merch-with-bonfire.jpg');
              background-size: cover;
              background-position: center center;
            "
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-bold text-4xl text-center">ลงทะเบียน</h1>
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >ประเภทแรงงาน</label
                        >
                        <div class="2xl:flex 2xl:space-x-5">
                          <div class="form-control">
                            <label class="label cursor-pointer 2xl:space-x-2">
                              <input
                                type="radio"
                                name="radio-6"
                                class="radio checked:bg-blue-500"
                              />
                              <span class="label-text 2xl:pr-0 pr-24">แรงงานต่างด้าว</span>
                            </label>
                          </div>
                          <div class="form-control">
                            <label class="label cursor-pointer 2xl:space-x-2">
                              <input
                                type="radio"
                                name="radio-6"
                                class="radio checked:bg-red-500"
                              />
                              <span class="label-text 2xl:pr-0 pr-28">แรงงานไทย</span>
                            </label>
                          </div>
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณาเลือกประเภทแรงงาน
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium 2xl:px-1"
                          >เลขบัตรประชาชน/เลขหนังสือเดินทาง</label
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
                          ></div>
                          <input
                            type="text"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': firstnameInput }"
                            placeholder="เลขบัตรประชาชน/เลขหนังสือเดินทาง"
                          />
                        </div>
                        <p v-if="firstnameInput" class="text-red-600">
                          กรุณากรอกเลขบัตรประชาชน/เลขหนังสือเดินทาง
                        </p>
                      </div>
                    </div>

                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >ชื่อ</label
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
                          ></div>
                          <input
                            type="text"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': firstnameInput }"
                            placeholder="ชื่อ"
                          />
                        </div>
                        <p v-if="firstnameInput" class="text-red-600">
                          กรุณากรอกชื่อ
                        </p>
                      </div>

                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >ชื่อกลาง</label
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
                          ></div>
                          <input
                            type="text"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            placeholder="ชื่อกลาง"
                          />
                        </div>
                        <!-- <p v-if="firstnameInput" class="text-red-600">
                          กรุณากรอกชื่อ
                        </p> -->
                      </div>

                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >นามสกุล</label
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
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            placeholder="นามสกุล"
                          />
                        </div>
                        <!-- <p v-if="lastnameInput" class="text-red-600">
                          กรุณากรอกนามสกุล
                        </p> -->
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >เพศ</label
                        >
                        <div class="flex space-x-5">
                          <div class="form-control">
                            <label class="label cursor-pointer space-x-2">
                              <input
                                type="radio"
                                name="radio-6"
                                class="radio checked:bg-blue-500"
                              />
                              <span class="label-text">ชาย</span>
                            </label>
                          </div>
                          <div class="form-control">
                            <label class="label cursor-pointer space-x-2">
                              <input
                                type="radio"
                                name="radio-6"
                                class="radio checked:bg-red-500"
                              />
                              <span class="label-text">หญิง</span>
                            </label>
                          </div>
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณาเลือกเพศ
                        </p>
                      </div>
                    </div>
                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
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
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="[
                              { 'bg-red-50': usernameInput },
                              { 'bg-red-50': showError },
                            ]"
                            placeholder="อีเมล"
                          />
                        </div>
                        <p v-if="usernameInput" class="text-red-600">
                          Please enter your username and username can not less
                          than 5 letters!
                        </p>
                        <p v-if="showError" class="text-red-600">
                          {{ errorMessage }}
                        </p>
                      </div>

                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
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
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            :type="type"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': passwordInput }"
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
                        <p v-if="passwordInput" class="text-red-600">
                          กรุณากรอกรหัสผ่าน
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >เบอร์โทรศัพท์</label
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
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="tel"
                            maxlength="10"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': phoneInput }"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            placeholder="0123456789"
                          />
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณากรอกเบอร์โทรศัพท์
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >รูปยืนยันตัวตน</label
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
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="file"
                            class="
                              w-full
                              -ml-10
                              pr-3
                              py-2
                              rounded-lg
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': phoneInput }"
                          />
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณากรอกเบอร์โทรศัพท์
                        </p>
                      </div>
                    </div>
                    <!-- <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >ที่อยู่</label
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
                              class="
                                mdi mdi-email-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <textarea
                            type="email"
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
                            :class="{ 'bg-red-50': addressInput }"
                            placeholder="ที่อยู่"
                          />
                        </div>
                        <p v-if="addressInput" class="text-red-600">
                          กรุณากรอกที่อยู่
                        </p>
                      </div>
                    </div> -->
                  </div>

                  <div class="flex flex-col mt-8">
                    <button
                      @click.prevent="signUp()"
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
                      ลงทะเบียน
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <div
                    @click="this.$router.push('/signin')"
                    class="cursor-pointer no-underline hover:underline text-sm"
                  >
                    มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
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
export default {
  data() {
    return {
      type: "password",
      eye: require("../assets/hide.png"),
      person: {
        accUsername: "",
        accPass: "",
        accFname: "",
        accLname: "",
        accPhone: "",
        accAddress: "",
        idRole: { idRole: 3, role: "ROLE_MEMBER" },
      },
      usernameInput: false,
      passwordInput: false,
      firstnameInput: false,
      lastnameInput: false,
      phoneInput: false,
      addressInput: false,
      error: "",
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    check() {
      this.usernameInput =
        this.person.accUsername === "" || this.person.accUsername.length < 5;
      this.passwordInput = this.person.accPass === "" ? true : false;
      this.firstnameInput = this.person.accFname === "" ? true : false;
      this.lastnameInput = this.person.accLname === "" ? true : false;
      this.phoneInput =
        (this.person.accPhone === "" || this.person.accPhone !== "") &&
        this.person.accPhone.length !== 10
          ? true
          : false;
      this.addressInput = this.person.accAddress === "" ? true : false;
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
    async signUp() {
      this.showError = false;
      this.check();
      if (
        !this.usernameInput &&
        !this.passwordInput &&
        !this.firstnameInput &&
        !this.lastnameInput &&
        !this.phoneInput &&
        !this.addressInput
      ) {
        try {
          const jsonPro = await JSON.stringify(this.person);
          // const response = await fetch("http://localhost:3000/main/registaccount", {
          const response = await fetch(
            `${process.env.VUE_APP_ROOT_API}main/registaccount`,
            {
              method: "POST",
              body: jsonPro,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          this.error = await response.json();
          if (this.error.errorCode == "USERNAME_HAVE_ALREADY") {
            this.showError = true;
            this.errorMessage = "this username is already taken.";
          } else {
            alert("Finish Sign up");
            this.clear();
            this.$router.push("/signin");
          }
        } catch (error) {
          console.log(`Could not save! ${error}`);
        }
      }
    },
    clear() {
      this.person = {
        accUsername: "",
        accPass: "",
        accFname: "",
        accLname: "",
        accPhone: "",
        accAddress: "",
        idRole: { idRole: 3, role: "ROLE_MEMBER" },
      };
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>