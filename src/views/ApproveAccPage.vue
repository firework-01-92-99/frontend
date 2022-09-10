<template>
  <div v-if="$store.state.auth.user" class="bg-gray-2 h-screen font-sans-thai">
    <div class="2xl:p-6 2xl:pl-32 xl:p-6 lg:p-6 md:p-6 p-3 pt-5">
      <base-tab></base-tab>
    </div>
    <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <p
        class="
          text-2xl
          font-semibold
          2xl:p-6 2xl:pl-12
          xl:p-6
          lg:p-6
          md:p-6
          p-3
          pt-5
          ml-3.5
        "
      >
        การตรวจสอบบัญชี
      </p>
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="a in listApprove" :key="a.idApprove">
          <!-- row 1 -->
          <!-- {{a}} -->
          <tr>
            <th>{{ a.count }}</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="">{{ a.name }}</div>
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <td>
              {{ a.workOrEmp }}
              <!-- <br>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span> -->
            </td>
            <td>{{ a.nationlity }}</td>
            <th>
              <!-- detail -->
              <label
                @click="data(a)"
                for="my-modal-5"
                class="btn btn-ghost btn-xs"
                >รายละเอียด</label
              >
              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <div class="modal modal-bottom">
                <div class="modal-box w-11/12 2xl:max-w-xl md:max-w-sm">
                  <h3 class="font-bold text-lg">รายละเอียด</h3>
                  <!-- <h4 class="py-4">รอดึง</h4> -->
                  <div class="flex flex-col 2xl:w-full mt-4">
                    <div
                      class="flex flex-col w-full flex-1 justify-between mb-8"
                    >
                      <div class="w-full">
                        <form class="form-horizontal 2xl:w-full md:w-full">
                          <div>
                            <div
                              v-if="a.workOrEmp == 'Employer'"
                              class="flex -mx-3"
                            >
                              <div class="w-full px-3 mb-5">
                                <label
                                  for=""
                                  class="text-base font-medium 2xl:px-1"
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
                                      $store.state.auth.user.employer
                                        .establishmentName
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

                              <div class="w-full px-3 mb-5">
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
                                      workerType[info.workerType.typeName]
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                              <div class="w-full px-3 mb-5">
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
                                        info.nationality.nationality_name
                                      ]
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              v-if="a.workOrEmp == 'Employer'"
                              class="flex -mx-3"
                            >
                              <div class="w-full px-3 mb-5">
                                <label
                                  for=""
                                  class="text-base font-medium 2xl:px-1"
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
                                    :placeholder="$store.state.auth.employer"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div v-else class="flex -mx-3">
                              <div class="w-full px-3 mb-5">
                                <label
                                  for=""
                                  class="text-base font-medium 2xl:px-1"
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
                                    :placeholder="info.identificationNumber"
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
                                    :placeholder="info.firstName"
                                    disabled
                                  />
                                </div>
                              </div>

                              <div
                                v-if="a.workOrEmp == 'Worker'"
                                class="2xl:w-1/2 w-full 2xl:px-3 mb-5"
                              >
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
                                    :placeholder="info.middleName"
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
                                    :placeholder="info.lastName"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div v-if="a.workOrEmp == 'Employer'">
                              <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                  <label
                                    for=""
                                    class="text-base font-medium px-1"
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
                                    <textarea
                                      type="tel"
                                      class="
                                        textarea
                                        w-full
                                        -ml-10
                                        pl-5
                                        pr-3
                                        py-2
                                        rounded-lg
                                        border-2 border-gray-200
                                        outline-none
                                        placeholder-black
                                        placeholder-opacity-100
                                      "
                                      :placeholder="
                                        $store.state.auth.user.employer
                                      "
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="2xl:flex 2xl:-mx-3">
                                <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                                  <label
                                    for=""
                                    class="text-base font-medium px-1"
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
                                        placeholder-black
                                        placeholder-opacity-100
                                      "
                                      :placeholder="
                                        $store.state.auth.user.employer
                                      "
                                      disabled
                                    />
                                  </div>
                                </div>

                                <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                                  <label
                                    for=""
                                    class="text-base font-medium px-1"
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
                                        placeholder-black
                                        placeholder-opacity-100
                                      "
                                      :placeholder="
                                        $store.state.auth.user.employer
                                      "
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="2xl:flex 2xl:-mx-3">
                                <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                                  <label
                                    for=""
                                    class="text-base font-medium px-1"
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
                                        placeholder-black
                                        placeholder-opacity-100
                                      "
                                      :placeholder="
                                        $store.state.auth.user.employer
                                      "
                                      disabled
                                    />
                                  </div>
                                </div>

                                <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                                  <label
                                    for=""
                                    class="text-base font-medium px-1"
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
                                        placeholder-black
                                        placeholder-opacity-100
                                      "
                                      :placeholder="
                                        $store.state.auth.user.employer
                                      "
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              v-if="a.workOrEmp == 'Worker'"
                              class="flex -mx-3"
                            >
                              <div class="w-full px-3 mb-5">
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
                                    :placeholder="sexFreeze[info.sex]"
                                    disabled
                                  />
                                </div>
                              </div>
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
                                      placeholder-black placeholder-opacity-100
                                    "
                                    :placeholder="info.phone"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <!-- <div class="flex -mx-3">
                      
                    </div> -->
                            <div class="flex -mx-3">
                              <div class="w-full px-3 mb-5">
                                <label
                                  v-if="a.workOrEmp == 'Employer'"
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพสถานประกอบการ</label
                                >
                                <label
                                  v-if="a.workOrEmp == 'Worker'"
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพยืนยันตัวตน</label
                                >
                                <img :src="image" />
                              </div>
                            </div>
                          </div>

                          <!-- <div class="flex flex-col mt-8">
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
                  </div> -->
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-3 mb-5">
                    <div class="2xl:flex 2xl:space-x-5">
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            name="radio-6"
                            class="radio checked:bg-blue-500"
                          />
                          <span class="label-text 2xl:pr-0 md:pr-56">อนุมัติ</span>
                        </label>
                      </div>
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            name="radio-6"
                            class="radio checked:bg-red-500"
                          />
                          <span class="label-text 2xl:pr-0 md:pr-52"
                            >ไม่อนุมัติ</span
                          >
                        </label>
                      </div>
                    </div>
                    <textarea
                      class="textarea textarea-bordered w-full h-36"
                      placeholder="หมายเหตุที่ไม่อนุมัติ"
                    ></textarea>
                  </div>
                  <div class="modal-action">
                    <label for="my-modal-5" class="btn">ปิด</label>
                  </div>
                </div>
              </div>
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
  </div>
</template>

<script>
const sexFreeze = Object.freeze({
  F: "หญิง",
  M: "ชาย",
});
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

import BaseTab from "@/components/BaseTab.vue";
import axios from "axios";
export default {
  components: { BaseTab },
  data() {
    return {
      listApprove: [],
      sexFreeze,
      workerType,
      ntTypeFreeze,
      firstname: "",
      lastname: "",
      nationality: "",
      image: "",
      info: { nationality: {}, workerType: {} },
    };
  },
  methods: {
    async data(data) {
      console.log(data.idEmpOrWork, data.workOrEmp);
      if (data.workOrEmp == "Worker") {
        await axios
          .get(
            `${process.env.VUE_APP_ROOT_API}admin/selectWorker?idWorker=${data.idEmpOrWork}`
          )
          .then((response) => {
            this.info = response.data;
            this.image =
              `${process.env.VUE_APP_ROOT_API}main/image/` +
              this.info.verifyPic;
          });
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
    this.listApprove = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/getAllApproveByIdStatusAndIdRole?idStatus=6&idRole=0`
    );
  },
};
</script>

<style>
</style>