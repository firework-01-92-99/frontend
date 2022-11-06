<template>
  <div class="bg-gray-2 h-screen font-sans-thai">

<!-- toast send form -->
      <transition name="toast">
        <div v-if="showToast" class="flex justify-center font-sans-thai">
          <div
            class="absolute z-10 2xl:w-2/5 w-full alert shadow-lg"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p class="">
                คุณต้องการ<span class="font-medium">ส่งฟอร์มอนุมัติบัญชี</span>ใช่หรือไม่
              </p>
            </div>
            <div class="flex-none">
              <button class="btn btn-sm btn-ghost px-5">ไม่</button>
              <button class="btn btn-sm bg-orange-1 border-orange-1 hover:bg-orange-2 hover:border-orange-2 px-5">ใช่</button>
            </div>
          </div>
        </div>
      </transition>

      <p
        class="
          2xl:text-2xl
          md:text-xl
          sm:text-lg
          font-semibold
          2xl:p-6 2xl:pl-28
          xl:p-6
          lg:p-6
          md:p-6 md:pl-12
          p-3
          pt-5
          2xl:ml-3.5
          md:ml-3.5
          ml-5
        "
      >
        ยืนยันการรับแรงงานของนายจ้าง
      </p>
      <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>สัญชาติ</th>
            <th>ชื่อสถานประกอบการ</th>
            <th>ตำแหน่ง</th>
            <th>สถานะ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="font-bold">ชื่อแซ่</div>
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <td>ประเทศ</td>
            <td>ชื่อบอ</td>
            <td>ชื่อตำแหน่ง</td>
            <td>
              <div
                class="
                  badge badge-lg
                  w-1/3
                  bg-green-200
                  text-green-600
                  border-0
                  text-sm
                "
              >
                นายจ้างรับเข้าทำงาน
              </div>
              <div
                class="
                  badge badge-lg
                  w-1/3
                  bg-red-200
                  text-red-600
                  border-0
                  text-sm
                "
              >
                นายจ้างไม่รับเข้าทำงาน
              </div>
            </td>
            <th>
              <!-- detail -->
              <button
                @click="toggleModal = !toggleModal"
                class="btn btn-ghost btn-xs"
              >
                รายละเอียด
              </button>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <!-- <tfoot>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </tfoot> -->
      </table>
    </div>
    <div v-if="noValue" class="text-center mt-10">
      <div><img src="../assets/icon/inbox.png" class="w-20 mx-auto" /></div>
      <div class="pt-5">ไม่มีรายการที่ต้องทำ</div>
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
      <div class="relative mx-auto 2xl:w-1/2 md:w-11/12 w-11/12 h-5/6">
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
          <div class="p-8">
            <h3 class="font-bold text-lg">รายละเอียด</h3>
            <div class="flex flex-col 2xl:w-full mt-4">
              <div class="flex flex-col w-full flex-1 justify-between mb-8">
                <div class="w-full">
                  <form class="form-horizontal 2xl:w-full md:w-full">
                    <div>
                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
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
                                  whatWorker.workerType
                                    ? whatWorker.workerType.typeName
                                    : ''
                                ]
                              "
                              disabled
                            />
                          </div>
                        </div>
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
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
                              :placeholder="
                                ntTypeFreeze[
                                  whatWorker.nationality
                                    ? whatWorker.nationality.nationality_name
                                    : ''
                                ]
                              "
                              disabled
                            />
                          </div>
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="whatWorker.identificationNumber"
                              disabled
                            />
                          </div>
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="whatWorker.firstName"
                              disabled
                            />
                          </div>
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="whatWorker.middleName"
                              disabled
                            />
                          </div>
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="whatWorker.lastName"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
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
                              :placeholder="sexFreeze[whatWorker.sex]"
                              disabled
                            />
                          </div>
                        </div>
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >เบอร์โทรศัพท์ (มือถือ)</label
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
                              :placeholder="whatWorker.phone"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ภาพยืนยันตัวตน</label
                          >
                          <img class="rounded-lg object-cover 2xl:w-1/3 md:w-1/2 w-3/4" :src="image" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="w-full mb-5">
              <div v-if="idStatus != 24">
              <div class="flex-col w-full">
                <div class="flex space-x-10">
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-1"
                      class="radio checked:bg-orange-1"
                      :value="chooseAccept"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">อนุมัติ</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-2"
                      class="radio checked:bg-orange-1"
                      :value="chooseReject"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">ไม่อนุมัติ</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-2"
                      class="radio checked:bg-orange-1"
                      :value="chooseReject"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">นายจ้างไม่รับคนต่างด้าวนั้นเข้าทํางาน</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-2"
                      class="radio checked:bg-orange-1"
                      :value="chooseReject"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">คนต่างด้าวไม่ยินยอมทํางานกับนายจ้าง</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-2"
                      class="radio checked:bg-orange-1"
                      :value="chooseReject"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">คนต่างด้าวออกจากงานไม่ว่าด้วยเหตุใด</span>
                  </label>
                </div>
                </div>
                <div class="flex">
                <p v-if="confirmInput" class="text-red-600">
                  กรุณาเลือกรูปแบบการอนุมัติ
                </p>
                </div>
              </div>
              <textarea
                v-model="applicationHasComment.description"
                class="textarea textarea-bordered w-full h-36"
                placeholder="หมายเหตุที่นายจ้างปฏิเสธการรับเข้าทำงาน"
              ></textarea>
              </div>
            </div>

            <div class="flex justify-between">
              <button
                @click="acceptOrReject()"
                class="btn w-2/5 bg-orange-1 hover:bg-orange-2 border-orange-1 hover:border-orange-1"
              >
                ยืนยัน
              </button>
              <button
                @click="
                  (toggleModal = false), (statusId = ''), (confirmInput = false)
                "
                class="btn w-2/5"
              >
                ปิด
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
// import axios from "axios";
const workerType = Object.freeze({
  Migrant: "แรงงานต่างด้าว",
  Thai: "แรงงานไทย",
});
const ntTypeFreeze = Object.freeze({
  Laos: "ลาว",
  Thai: "ไทย",
  Myanmar: "เมียนมาร์",
  Cambodia: "กัมพูชา",
});
const sexFreeze = Object.freeze({
  F: "หญิง",
  M: "ชาย",
});
export default {
  components: {},
  data() {
    return {
      sexFreeze,
      workerType,
      ntTypeFreeze,
      toggleModal: false,
      noValue: false,
      showToast: false,
    }
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      console.log("หน้ารับแรงงานของผู้ประกอบการ");
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>