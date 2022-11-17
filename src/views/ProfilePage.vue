<template>
  <div v-if="$store.state.auth.user" class="Profile font-sans-thai py-16">
    
  <!-- toast delete acc -->
      <transition name="toast">
        <div v-if="showToast" class="flex justify-center font-sans-thai">
          <div
            class="absolute z-10 2xl:w-2/5 w-full bg-cyan-200 alert shadow-lg"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p v-if="delToast" class="">
                คุณต้องการ<span class="font-medium">ลบบัญชี</span>ใช่หรือไม่
              </p>
              <p v-if="passToast" class="">
                รหัสผ่านของคุณได้รับการแก้ไขเรียบร้อยแล้ว กรุณาเข้าสู่ระบบใหม่อีกครั้ง
              </p>              
            </div>
            <div class="flex-none">
              <button v-if="delToast" class="btn btn-sm btn-ghost px-5">ไม่</button>
              <button v-if="delToast" class="btn btn-sm btn-primary px-5">ใช่</button>
              <button v-if="passToast" @click="signOut()" class="btn btn-sm btn-primary px-5">ตกลง</button>
            </div>
          </div>
        </div>
      </transition>

    <div v-if="$store.state.auth.user.role.idRole == '3'" class="bg-gray-100">
      <!-- back btn -->
      <div>
        <button
          @click="$router.push('/')"
          class="btn btn-ghost font-sans-thai flex justify-start 2xl:ml-16 2xl:mt-5 md:ml-8 md:mt-5 ml-4 mt-4"
        >
          <i class="material-icons"> arrow_back_ios </i>หางาน
        </button>
      </div>
    <!-- worker -->
      <section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 mt-10 mx-auto">
            <div
              class="
                p-10
                bg-white
                flex
                items-center
                mx-auto
                border-b
                mb-5
                border-gray-200
                rounded-lg
                sm:flex-row
                flex-col
               w-11/12
              "
            >
              <div
                class="
                avatar w-1/3 
                  sm:w-32 sm:h-32
                  h-20
                  
                  sm:mr-10
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <img
                  class="
                    w-full
                    rounded-full
                    object-cover
                    ring ring-orange-1 ring-offset-base-100 ring-offset-2
                  "
                  :src="image"
                />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 class="text-orange-1 text-2xl title-font font-bold mb-2">
                  {{ firstname}} <span>{{middlename == null || middlename == '' || middlename == '-' ? '' : middlename + " "}}</span> {{ lastname }}
                </h1>
                <p class="leading-relaxed text-base">
                  {{
                    sex[$store.state.auth.user.worker.sex] +
                    workerType[
                      $store.state.auth.user.worker.workerType.typeName
                    ] +
                    " สัญชาติ" +
                    nationFreeze[nationality]
                  }}
                </p>
                <div class="py-4"></div>
                <div class="md:flex font-bold text-gray-800">
                  <div class="w-full flex flex-col md:flex-row sm:flex-row">
                    <div class="w-1/2 pr-5 mx-auto">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> badge </i>
                      </h2>
                      <p class="mx-auto">
                        {{ $store.state.auth.user.worker.identificationNumber }}
                      </p>
                    </div>
                    <div class="w-1/2 pr-5 mx-auto">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> email </i>
                      </h2>
                      <p class="">{{ $store.state.auth.user.email }}</p>
                    </div>
                    <div class="w-1/2 pr-5 mx-auto">
                      <h2 class="text-gray-500">
                        <i class="material-icons pr-2"> call </i>
                      </h2>
                      <p>{{ tel }}</p>
                    </div>
                  </div>
                  <!-- <div class="w-full flex space-x-3">
                    
                  </div> -->
                </div>
                <div class="mt-8 text-blue-600 font-medium inline-flex items-center">
                  <div class="dropdown">
                    <label tabindex="0" class="cursor-pointer"
                      >เพิ่มเติม</label
                    >
                    <ul
                      tabindex="0"
                      class="
                        dropdown-content
                        menu
                        p-2
                        shadow
                        bg-base-100
                        rounded-box
                        w-52
                      "
                    >
                      <li @click="$router.push('/editProfile/worker')" class="font-normal text-black hover:text-orange-1"><a>แก้ไขบัญชี</a></li>
                      <li @click="toggleModal = !toggleModal" class="font-normal text-black hover:text-orange-1"><a>แก้ไขรหัสผ่าน</a></li>
                      <li @click.prevent="sendDelete()" class="font-normal text-black hover:text-orange-1"><a>ขอลบบัญชี</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>

    <!-- employer -->
    <div v-if="$store.state.auth.user.role.idRole == '2'" class="bg-gray-100">
      <!-- back btn -->
      <div>
        <button
          @click="$router.push('/posting')"
          class="btn btn-ghost font-sans-thai flex justify-start 2xl:ml-16 2xl:mt-5 md:ml-8 md:mt-5 ml-4 mt-4"
        >
          <i class="material-icons"> arrow_back_ios </i>ประกาศรับสมัครงาน
        </button>
      </div>
      <section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div
              class="
                p-10
                bg-white
                flex
                items-center
                mx-auto
                border-b
                mb-5
                border-gray-200
                rounded-lg
                sm:flex-row
                flex-col
                2xl:w-11/12
              "
            >
              <div
                class="
                avatar w-1/3 
                  sm:w-32 sm:h-32
                  h-20
                 
                  sm:mr-10
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <img
                  class="
                    w-full
                    rounded-full
                    object-cover
                    ring ring-orange-1 ring-offset-base-100 ring-offset-2
                  "
                  :src="image"
                />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 class="text-orange-1 text-2xl title-font font-bold mb-2">
                  {{ $store.state.auth.user.employer.establishmentName }}
                </h1>

                <p class="leading-relaxed text-base">
                  <i class="material-icons pr-2"> place </i
                  >{{
                    $store.state.auth.user.employer.address +
                    " " +
                    $store.state.auth.user.employer.subDistrict.subDistrict +
                    " " +
                    ($store.state.auth.user.employer
                      ? $store.state.auth.user.employer.district.districtName
                      : "") +
                    " " +
                    $store.state.auth.user.employer.province.provinceName +
                    " " +
                    $store.state.auth.user.employer.subDistrict.postcode
                  }}
                </p>
                <p class="leading-relaxed text-base"></p>
                <div class="py-4">
                  <div class="inline-block mr-2">
                    <div class="flex pr-2 h-full items-center">
                      <i class="material-icons pr-2"> work </i>
                      <p class="title-font font-medium">
                        {{
                          $store.state.auth.user.employer.businesstype.nameType
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="md:flex font-bold text-gray-800">
                  <div class="w-full flex flex-col md:flex-row sm:flex-row">
                    <div class="w-1/2 pr-5 mx-auto">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> account_circle </i>
                      </h2>
                      <p class="mx-auto">{{ firstname + " " + lastname }}</p>
                    </div>
                    <div class="w-1/2 pr-5 mx-auto">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> flag </i>
                      </h2>
                      <p>{{ nationFreeze[nationality] }}</p>
                    </div>
                  </div>
                  <div class="w-full flex flex-col md:flex-row sm:flex-row">
                    <div class="w-1/2 pr-5 mx-auto">
                      <h2 class="text-gray-500">
                        <i class="material-icons pr-2"> email </i>
                      </h2>
                      <p>{{ $store.state.auth.user.email }}</p>
                    </div>
                    <div class="w-1/2 pr-5 mx-auto md:ml-8">
                      <h2 class="text-gray-500">
                        <i class="material-icons pr-2"> call </i>
                      </h2>
                      <p>{{ tel }}</p>
                    </div>
                  </div>
                </div>

                <div class="mt-8 text-blue-600 font-medium inline-flex items-center">
                  <div class="dropdown">
                    <label tabindex="0" class="cursor-pointer"
                      >เพิ่มเติม</label
                    >
                    <ul
                      tabindex="0"
                      class="
                        dropdown-content
                        menu
                        p-2
                        shadow
                        bg-base-100
                        rounded-box
                        w-52
                      "
                    >
                      <li @click="$router.push('/editProfile/emp')" class="font-normal text-black hover:text-orange-1"><a>แก้ไขบัญชี</a></li>
                      <li @click="toggleModal = !toggleModal" class="font-normal text-black hover:text-orange-1"><a>แก้ไขรหัสผ่าน</a></li>
                      <li @click.prevent="sendDelete()" class="font-normal text-black hover:text-orange-1"><a>ขอลบบัญชี</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>

    <div class="h-full mx-auto w-11/12">
      <div class="w-full p-6 mx-auto">
        <base-tab>
          <template v-if="this.$store.state.auth.user.role.idRole == '3'"
            ><a
              class="tab tab-bordered 2xl:px-16 xl:px-16 lg:px-16 md:px-16 px-4 2xl:text-base md:text-base text-xs"
              @click="numTab = 1"
              :class="{
                'tab-active font-medium': numTab == 1 || numTab == '',
              }"
            >
              งานโปรดของฉัน
            </a>
            <a
              class="tab tab-bordered 2xl:px-16 xl:px-16 lg:px-16 md:px-14 px-4 2xl:text-base md:text-base text-xs"
              @click="numTab = 2"
              :class="{
                'tab-active font-medium ': numTab == 2,
              }"
              >ให้คะแนน</a
            >
            <a
              class="tab tab-bordered 2xl:px-16 xl:px-16 lg:px-16 md:px-16 px-4 2xl:text-base md:text-base text-xs"
              @click="numTab = 3"
              :class="{
                'tab-active font-medium': numTab == 3,
              }"
              >คะแนนของฉัน</a
            ></template
          >
        </base-tab>
        <div
          v-if="
            (numTab == 1 || numTab == '') &&
            this.$store.state.auth.user.role.idRole == '3'
          "
        >
          <base-fav class="mt-7"></base-fav>
        </div>
        <div v-if="numTab == 2">
          <base-history class="mt-7"></base-history>
        </div>
        <div v-if="numTab == 3">
          <base-rate class="mt-7"></base-rate>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      v-if="toggleModal"
      class="
        fixed
        overflow-x-hidden overflow-y-auto
        inset-0
        flex
        justify-center
        items-center
        z-50
      "
    >
      <div class="relative mx-auto 2xl:w-1/2 md:w-11/12 w-11/12">
        <div
          class="
            bg-white
            w-full
            overflow-y-auto
            h-full
            rounded-lg
            shadow-2xl
            flex flex-col
          "
        >
          <!-- <div v-show="iAm == 'Employer' || iAm == 'Worker'" class=" p-8"> -->
          <div class="p-8">
            <h3 class="font-bold text-lg">แก้ไขรหัสผ่าน</h3>

            <div class="flex flex-col 2xl:w-full mt-4">
              <div class="flex flex-col w-full flex-1 justify-between mb-8">
                <div class="w-full">
                  <form autocomplete="off" class="form-horizontal 2xl:w-full md:w-full">
                    <div>
                  <div class="2xl:flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for="password"
                        class="text-sm 2xl:text-base font-medium px-1"
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
                        ></div>
                        <input
                          :type="type"
                          name="password"
                          id="password"
                          v-model="editPass.currPass"
                          maxlength="15"
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
                          placeholder="รหัสผ่านปัจจุบัน"
                        />
                      </div>
                      <p v-if="currPassInput" class="text-red-600">
                        กรุณากรอกรหัสผ่านปัจจุบัน
                      </p>
                    </div>
                  </div>

                  <div class="2xl:flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for="password"
                        class="text-sm 2xl:text-base font-medium px-1"
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
                        ></div>
                        <input
                          :type="type"
                          name="password"
                          id="password"
                          v-model="editPass.newPass"
                          maxlength="15"
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
                          placeholder="รหัสผ่านใหม่"
                        />
                      </div>
                      <p v-if="newPassInput" class="text-red-600">
                        กรุณากรอกรหัสผ่านใหม่
                      </p>
                    </div>
                  </div>

                  <div class="2xl:flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for="password"
                        class="text-sm 2xl:text-base font-medium px-1"
                        >ยืนยันรหัสผ่านใหม่</label
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
                          :type="type"
                          name="password"
                          id="password"
                          v-model="editPass.confirmPass"
                          maxlength="15"
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
                          placeholder="ยืนยันรหัสผ่านใหม่"
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
                      <p v-if="confirmPassInput" class="text-red-600">
                        กรุณากรอกช่องยืนยันรหัสผ่านให้ตรงกับช่องรหัสผ่าน
                      </p>
                    </div>
                  </div>
                </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <button
                @click="editPassword()"
                class="
                  btn
                  w-2/5
                  bg-orange-1
                  hover:bg-orange-2
                  border-orange-1
                  hover:border-orange-1
                "
              >
                บันทึก
              </button>
              <button @click="toggleModal = false" class="btn w-2/5">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import axios from "axios";
import BaseTab from "@/components/BaseTab.vue";
import BaseFav from "@/components/BaseFav.vue";
import BaseHistory from "@/components/BaseHistory.vue";
import BaseRate from "@/components/BaseRate.vue";
const sex = Object.freeze({
  F: "หญิง",
  M: "ชาย",
});
const workerType = Object.freeze({
  Migrant: "แรงงานต่างด้าว",
  Thai: "แรงงานไทย",
});
const nationFreeze = Object.freeze({
  Laos: "ลาว",
  Thai: "ไทย",
  Myanmar: "เมียนมาร์",
  Cambodia: "กัมพูชา",
});

export default {
  components: { BaseTab, BaseFav, BaseRate, BaseHistory },
  data() {
    return {
      sex,
      workerType,
      nationFreeze,
      firstname: "",
      middlename: "",
      lastname: "",
      nationality: "",
      tel: "",
      image: "",
      numTab: "",
      rateTo:{
        rate: 5,
        comment: '',
        timestamp:'',
        forwho: '',
        employer:{},
        worker:{}
      },
      toggleModal: false,
      editPass: {
        currPass: '',
        newPass: '',
        confirmPass: '',
        email: '',
      },
        currPassInput: false,
        newPassInput: false,
        confirmPassInput: false,
      delToast: false,
      passToast: false,
      showToast: false,
      eye: require("../assets/hide.png"),
      type: "password",
    };
  },
  // this.$store.commit("setWorkingHistory", this.getInactivePost);
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "JobPage",
        });
        location.reload();
      });
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
    async editPassword(){
    this.currPassInput = this.editPass.currPass === '' || this.editPass.currPass.length < 8 ? true : false
    this.newPassInput = this.editPass.newPass === '' || this.editPass.newPass.length < 8
    this.confirmPassInput = this.editPass.confirmPass === '' || this.editPass.confirmPass.length < 8 || this.editPass.newPass != this.editPass.confirmPass
    if(!this.confirmPassInput && !this.newPassInput && !this.currPassInput){
      const vm = this
      if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '3'){
           await axios.post(
          `${process.env.VUE_APP_ROOT_API}worker/editPasswordWorker?currentPassword=` + this.editPass.currPass + '&newPassword=' + this.editPass.newPass + '&idWorker=' + this.$store.state.auth.user.worker.idWorker)
          .then(function (response) {
          console.log(response);
          vm.toggleModal = false;
          vm.showToast = true;
          vm.passToast = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });          
        })
        .catch(function (error) {
          console.log(error);
        }); 
      }else{
        if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '2'){
           await axios.post(
          `${process.env.VUE_APP_ROOT_API}emp/editPasswordEmployer?currentPassword=` + this.editPass.currPass + '&newPassword=' + this.editPass.newPass + '&idEmployer=' + this.$store.state.auth.user.employer.idEmployer)
          .then(function (response) {
          console.log(response);
          vm.toggleModal = false;
          vm.showToast = true;
          vm.passToast = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });   
        })
        .catch(function (error) {
          console.log(error);
        }); 
        }        
      }
    }
  },    
    async giveRating(){
      const vm = this;
      // if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const ratings = JSON.stringify(this.rateTo);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/employerGiveScoreToWorker?idApplication=${this.idApplication}`,
          ratings,
          customConfig
        );
        vm.whoApplication = axios.get(
          `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` +
            vm.idPost +
            "&idStatus=" +
            vm.idStatus
        );
        console.log(result.data)      
    },    
    async sendDelete() {
      const vm = this
      if (this.$store.state.auth.user) {
        if (this.$store.state.auth.user.role.idRole == "3") {
          if (confirm("คุณต้องการจะลบบัญชี worker ใช่หรือไม่")) {
            await axios.put(
              `${process.env.VUE_APP_ROOT_API}worker/deleteMyWorker?idWorker=` +
                this.$store.state.auth.user.worker.idWorker
            ).data.then(function (response) {
          console.log(response);
          vm.showToast = true;
          vm.delToast = true;
          setTimeout(() => (vm.showToast = false), 3000)
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(function (error) {
          console.log(error);
        });
          }
        } else {
          if (this.$store.state.auth.user.role.idRole == "2") {
            if (confirm("คุณต้องการจะลบบัญชี employer ใช่หรือไม่")) {
              await axios.put(
                `${process.env.VUE_APP_ROOT_API}emp/deleteMyEmployer?idEmployer=` +
                  this.$store.state.auth.user.employer.idEmployer
              ).data.then(function (response) {
          console.log(response);
          vm.showToast = true;
          vm.delToast = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(function (error) {
          console.log(error);
        });
            }
          }
        }
      }
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
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole != "1"
    ) {
      if (this.$store.state.auth.user.role.idRole == "2") {
        console.log(this.$store.state.auth.user.employer)
        this.firstname = this.$store.state.auth.user.employer.entrepreneurfName;
        this.lastname = this.$store.state.auth.user.employer.entrepreneurlName;
        this.nationality =
          this.$store.state.auth.user.employer.nationality.nationality_name;
        this.tel = this.$store.state.auth.user.employer.tel;
        this.image =
          (await `${process.env.VUE_APP_ROOT_API}main/image/`) +
          this.$store.state.auth.user.employer.profile;
      } else {
        if (this.$store.state.auth.user.role.idRole == "3") {
          this.firstname = this.$store.state.auth.user.worker.firstName;
          this.middlename = this.$store.state.auth.user.worker.middleName;
          this.lastname = this.$store.state.auth.user.worker.lastName;
          this.nationality =
            this.$store.state.auth.user.worker.nationality.nationality_name;
          this.tel = this.$store.state.auth.user.worker.phone;
          this.image =
            (await `${process.env.VUE_APP_ROOT_API}main/image/`) +
            this.$store.state.auth.user.worker.verifyPic;
        }
      }
    } else {
      if (this.$store.state.auth.user.role.idRole == "1") {
        this.$router.push("/approve");
      } else {
        this.$router.push("/");
      }
    }
  },
};
</script>
