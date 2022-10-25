<template>
  <div v-if="$store.state.auth.user" class="Profile">
    <div class="font-sans-thai bg-gray-2 h-full w-full">
      <div
        class="
          2xl:pt-0
          lg:pt-4
          md:pt-3
          pt-3
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
            sm:mx-0
            justify-center
          "
        >
          <!-- <div class="lg:w-1/2">
            <div class="flex-col space-y-5">
              <div class="flex justify-center">
                <div class="avatar w-1/3 mt-5">
                  <div
                    class="
                      w-full
                      rounded-full
                      ring ring-orange-1 ring-offset-base-100 ring-offset-2
                    "
                  >
                    <img :src="image" />
                  </div>
                </div>
              </div>

              <div class="collapse">
                <input class="w-1/3" type="checkbox" />
                <div class="collapse-title flex justify-center">
                  <div class="stats bg-orange-1 shadow w-1/3">
                    <div class="stat text-white">
                      <div class="stat-title">คะแนน</div>
                      <div class="stat-value">4.5 จาก 5</div>
                      <div class="stat-desc">กดเพื่อดูรีวิว</div>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    collapse-content
                    flex flex-wrap
                    justify-center
                    space-y-5
                  "
                >
                  <div
                    class="card w-3/4 bg-base-100 border border-black shadow-lg"
                  >
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end"></div>
                    </div>
                  </div>
                  <div
                    class="card w-3/4 bg-base-100 border border-black shadow-lg"
                  >
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end"></div>
                    </div>
                  </div>
                  <div
                    class="card w-3/4 bg-base-100 border border-black shadow-lg"
                  >
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="divider lg:divider-horizontal"></div> -->

          <!-- worker -->
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-bold text-4xl text-center">ประวัติ</h1>
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <div class="flex justify-center">
                      <div class="avatar w-1/3 mb-10">
                        <div
                          class="
                            w-full
                            rounded-full
                            ring
                            ring-orange-1
                            ring-offset-base-100
                            ring-offset-2
                          "
                        >
                          <img :src="image" />
                        </div>
                      </div>
                    </div>
                    <div class="2xl:flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="$store.state.auth.user.email"
                            disabled
                          />
                        </div>
                      </div>
                      <div
                        v-if="$store.state.auth.user.role.idRole == '3'"
                        class="w-full px-3 mb-5 -mx-0"
                      >
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
                          >ประเภทแรงงาน</label
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="
                              workerType[
                                $store.state.auth.user.worker.workerType
                                  .typeName
                              ]
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="$store.state.auth.user.role.idRole == '2'"
                      class="flex -mx-3"
                    >
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium 2xl:px-1"
                          >ชื่อสถานประกอบการ</label
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.employer.establishmentName
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div v-else class="flex -mx-3">
                      <!-- <select
                            type="text"
                            v-model.trim="person.accLname"
                            class="
                              select select-bordered
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
                          >
                            <option :value="''" disabled selected>
                              กรุณาเลือกประเภทธุรกิจ
                            </option>
                            <option
                              class="text-black"
                              v-for="p in provinces"
                              :key="p.idProvince"
                              :value="p.idProvince"
                            >
                              {{ p.provinceName }}
                            </option>
                          </select> -->
                    </div>

                    <div
                      v-if="$store.state.auth.user.role.idRole == '2'"
                      class="flex -mx-3"
                    >
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium 2xl:px-1"
                          >ประเภทธุรกิจ</label
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.employer.businesstype
                                .nameType
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div v-else class="2xl:flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium 2xl:px-1"
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.worker.identificationNumber
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div class="2xl:flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
                          >สัญชาติ</label
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="nationFreeze[nationality]"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="firstname"
                            disabled
                          />
                        </div>
                      </div>

                      <div
                        v-if="$store.state.auth.user.role.idRole == '3'"
                        class="2xl:w-1/2 w-full 2xl:px-3 mb-5"
                      >
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="middlename"
                            disabled
                          />
                        </div>
                      </div>

                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="lastname"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div v-if="$store.state.auth.user.role.idRole == '2'">
                      <div class="flex -mx-3">
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="
                                $store.state.auth.user.employer.address
                              "
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ตำบล/แขวง</label
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="
                                $store.state.auth.user.employer.subDistrict.subDistrict
                              "
                              disabled
                            />
                          </div>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >อำเภอ/เขต</label
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="
                                $store.state.auth.user.employer ? $store.state.auth.user.employer.district.districtName: ''
                              "
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >จังหวัด</label
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="
                                $store.state.auth.user.employer.province
                                  .provinceName
                              "
                              disabled
                            />
                          </div>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >เลขไปรษณีย์</label
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
                              class="
                                w-full
                                -ml-10
                                pl-5
                                pr-3
                                py-2
                                rounded-lg
                                border-2 border-gray-200
                                outline-none
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="
                                $store.state.auth.user.employer.subDistrict
                                  .postcode
                              "
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="2xl:flex -mx-3">
                      <div
                        v-if="$store.state.auth.user.role.idRole == '3'"
                        class="w-full px-3 mb-5"
                      >
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
                          >เพศ</label
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="
                              sex[$store.state.auth.user.worker.sex]
                            "
                            disabled
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
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
                              placeholder-black placeholder-opacity-100
                            "
                            :placeholder="tel"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          v-if="$store.state.auth.user.role.idRole == '2'"
                          for=""
                          class="text-base font-medium px-1"
                          >ภาพสถานประกอบการ</label
                        >
                      </div>
                    </div>
                  </div>
                  <button class="button" @click.prevent="sendDelete()">
                    ขอลบบัญชี
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 p-4">
            <base-tab>
              <template v-if="this.$store.state.auth.user.role.idRole == '3'"
                ><a
                  class="tab tab-bordered px-16"
                  @click="numTab = 1"
                  :class="{
                    'tab-active font-medium': numTab == 1 || numTab == '',
                  }"
                >
                  งานโปรดของฉัน
                </a>
                <a
                  class="tab tab-bordered px-16"
                  @click="numTab = 2"
                  :class="{
                    'tab-active font-medium ': numTab == 2,
                  }"
                  >ประวัติงานที่เคยทำ</a
                >
                <a
                  class="tab tab-bordered px-16"
                  @click="numTab = 3"
                  :class="{
                    'tab-active font-medium': numTab == 3,
                  }"
                  >คะแนนของฉัน</a
                ></template
              >
            </base-tab>
            <div v-if="(numTab == 1 || numTab == '') && this.$store.state.auth.user.role.idRole == '3'">
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
      if(this.$store.state.auth.user){
      if(this.$store.state.auth.user.role.idRole == '3'){
      if (confirm("คุณต้องการจะลบบัญชี worker ใช่หรือไม่")) {
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}worker/deleteMyWorker?idWorker=` +
            this.$store.state.auth.user.worker.idWorker
        ).data;
      }
      }else{
        if(this.$store.state.auth.user.role.idRole == '2'){
          if (confirm("คุณต้องการจะลบบัญชี employer ใช่หรือไม่")){
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
        this.image = await `${process.env.VUE_APP_ROOT_API}main/image/` + this.$store.state.auth.user.employer.profile;
      } else {
        if (this.$store.state.auth.user.role.idRole == "3") {
          this.firstname = this.$store.state.auth.user.worker.firstName;
          this.middlename = this.$store.state.auth.user.worker.middleName;
          this.lastname = this.$store.state.auth.user.worker.lastName;
          this.nationality =
            this.$store.state.auth.user.worker.nationality.nationality_name;
          this.tel = this.$store.state.auth.user.worker.phone;
          this.image =
            await `${process.env.VUE_APP_ROOT_API}main/image/` +
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
