<template>
  <div v-if="$store.state.auth.user" class="Profile font-sans-thai">
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
    <div v-if="$store.state.auth.user.role.idRole == '3'" class="bg-gray-100">
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
                <h1 class="text-black text-2xl title-font font-bold mb-2">
                  {{ firstname + " " + middlename + " " + lastname }}
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
                <div class="mt-3 text-indigo-500 inline-flex items-center">
                  <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost m-1"
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
                      <li @click.prevent="sendDelete()"><a>ขอลบบัญชี</a></li>
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
                <h1 class="text-black text-2xl title-font font-bold mb-2">
                  {{ $store.state.auth.user.employer.establishmentName }}
                </h1>

                <p class="leading-relaxed text-base">
                  <i class="material-icons pr-2"> place </i
                  >{{
                    $store.state.auth.user.employer.address +
                    " ตำบล/แขวง" +
                    $store.state.auth.user.employer.subDistrict.subDistrict +
                    " อำเภอ/เขต" +
                    ($store.state.auth.user.employer
                      ? $store.state.auth.user.employer.district.districtName
                      : "") +
                    " จังหวัด" +
                    $store.state.auth.user.employer.province.provinceName +
                    " " +
                    $store.state.auth.user.employer.subDistrict.postcode
                  }}
                </p>
                <p class="leading-relaxed text-base"></p>
                <div class="py-4">
                  <div class="inline-block mr-2">
                    <div class="flex pr-2 h-full items-center">
                      <i class="material-icons"> work </i>
                      <p class="title-font font-medium">
                        {{
                          $store.state.auth.user.employer.businesstype.nameType
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="md:flex font-bold text-gray-800">
                  <div class="w-full md:w-1/2 flex space-x-3">
                    <div class="w-1/2">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> account_circle </i>
                      </h2>
                      <p>{{ firstname + " " + lastname }}</p>
                    </div>
                    <div class="w-1/3">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> flag </i>
                      </h2>
                      <p>{{ nationFreeze[nationality] }}</p>
                    </div>
                  </div>
                  <div class="w-full md:w-full flex space-x-3">
                    <div class="w-1/2">
                      <h2 class="text-gray-500">
                        <i class="material-icons"> email </i>
                      </h2>
                      <p>{{ $store.state.auth.user.email }}</p>
                    </div>
                    <div class="w-1/2">
                      <h2 class="text-gray-500">
                        <i class="material-icons pr-2"> call </i>
                      </h2>
                      <p>{{ tel }}</p>
                    </div>
                  </div>
                </div>

                <div class="mt-3 text-indigo-500 inline-flex items-center">
                  <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost m-1"
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
                      <li @click.prevent="sendDelete()"><a>ขอลบบัญชี</a></li>
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
              class="tab tab-bordered 2xl:px-16 xl:px-16 lg:px-16 md:px-16 px-0.5"
              @click="numTab = 1"
              :class="{
                'tab-active font-medium': numTab == 1 || numTab == '',
              }"
            >
              งานโปรดของฉัน
            </a>
            <a
              class="tab tab-bordered 2xl:px-16 xl:px-16 lg:px-16 md:px-14 px-0.5"
              @click="numTab = 2"
              :class="{
                'tab-active font-medium ': numTab == 2,
              }"
              >ประวัติงานที่เคยทำ</a
            >
            <a
              class="tab tab-bordered 2xl:px-16 xl:px-16 lg:px-16 md:px-16 px-0.5"
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
  </div>
</template>


<script>
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
  components: { BaseTab, BaseFav, BaseHistory, BaseRate },
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
    };
  },
  methods: {
    async sendDelete() {
      if (this.$store.state.auth.user) {
        if (this.$store.state.auth.user.role.idRole == "3") {
          if (confirm("คุณต้องการจะลบบัญชี worker ใช่หรือไม่")) {
            await axios.put(
              `${process.env.VUE_APP_ROOT_API}worker/deleteMyWorker?idWorker=` +
                this.$store.state.auth.user.worker.idWorker
            ).data;
          }
        } else {
          if (this.$store.state.auth.user.role.idRole == "2") {
            if (confirm("คุณต้องการจะลบบัญชี employer ใช่หรือไม่")) {
              await axios.put(
                `${process.env.VUE_APP_ROOT_API}emp/deleteMyEmployer?idEmployer=` +
                  this.$store.state.auth.user.employer.idEmployer
              ).data;
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
