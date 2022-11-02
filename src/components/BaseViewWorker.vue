<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <!-- <div v-if="!acceptPage" class="overflow-x-auto w-10/12 mx-auto font-sans-thai"> -->
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
        {{ topic }}
      </p>
      <!-- <div v-for="who in whoApplication.data" :key="who.applicationId">
        {{who}}
      </div> -->
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </thead>
        <tbody
          v-for="a in whoApplication.data.whoApplicationList"
          :key="a.applicationId"
        >
          <!-- row 1 -->
          <!-- <div v-if="listApprove.lenght == null">
            ไม่มีรายการที่ต้องทำ
          </div> -->
          {{
            a
          }}
          ahhhhhhhhh
          {{
            whatWorker
          }}
          <tr>
            <th>{{ a.count }}</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="">
                  {{ a.firstName }}
                  <span>{{
                    a.middleName == null ||
                    a.middleName == "" ||
                    a.middleName == "-"
                      ? ""
                      : a.middleName + " "
                  }}</span>
                  {{ a.lastName }}
                </div>
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <td>
              {{
                ntTypeFreeze[
                  a.nationality ? a.nationality.nationality_name : ""
                ]
              }}
            </td>
            <th>
              <!-- detail -->
              <button
                @click="openPopUp(a), getPic(a), (toggleModal = !toggleModal)"
                class="btn btn-ghost btn-xs"
              >
                รายละเอียด
              </button>
              <!-- <input type="checkbox" id="my-modal-5" class="modal-toggle" /> -->
              <!-- <div class="modal modal-bottom">
                <div class="modal-box w-11/12 2xl:max-w-xl md:max-w-sm">
                  <h3 class="font-bold text-lg">รายละเอียด</h3>
                  <div class="flex flex-col 2xl:w-full mt-4">
                    <div
                      class="flex flex-col w-full flex-1 justify-between mb-8"
                    >
                      <div class="w-full">
                        <form class="form-horizontal 2xl:w-full md:w-full">
                          <div>
                            

                            <div class="flex -mx-3">
                             

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
                                      workerType[a.workerType ? a.workerType.typeName : '']
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
                                      ntTypeFreeze[a.nationality ? a.nationality.nationality_name : '']
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>


                            <div class="flex -mx-3">
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
                                    :placeholder="a.identificationNumber"
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
                                    :placeholder="a.firstName"
                                    disabled
                                  />
                                </div>
                              </div>

                              <div
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
                                    :placeholder="a.middleName"
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
                                    :placeholder="a.lastName"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>


                            <div
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
                                    :placeholder="sexFreeze[a.sex]"
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
                                    :placeholder="a.phone"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="flex -mx-3">
                              <div class="w-full px-3 mb-5">
                                <label
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพยืนยันตัวตน</label
                                >
                                <img :src="image" />
                              </div>
                            </div>
                          </div>

                      
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-3 mb-5">
                    <div class="2xl:flex 2xl:space-x-5">
                      <div @click="acceptWorker()" class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input   
                            type="radio"
                            v-model.trim="statusId"
                            name="radio-1"
                            class="radio checked:bg-blue-500"
                            value=12
                          />
                          <span class="label-text 2xl:pr-0 md:pr-56">อนุมัติ</span>
                        </label>
                      </div>
                      <div @click="rejectWorker()" class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input      
                            type="radio"
                            v-model.trim="statusId"
                            name="radio-2"
                            class="radio checked:bg-red-500"
                            value=13
                          />
                          <span class="label-text 2xl:pr-0 md:pr-52"
                            >ไม่อนุมัติ</span
                          >
                        </label>
                      </div>
                    </div>
                    <textarea
                    v-model="applicationHasComment.description"
                      class="textarea textarea-bordered w-full h-36"
                      placeholder="หมายเหตุที่ไม่อนุมัติ"
                    ></textarea>
                  </div>
                  
                  <div class="modal-action">
                    <button class="btn w-1/2 bg-orange-1 hover:bg-orange-2">ยืนยัน</button>
                    <label for="my-modal-5" class="btn w-1/2">ปิด</label>
                  </div>
                </div>
              </div> -->
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
            rounded
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
                      <div class="flex -mx-3">
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

                      <div class="flex -mx-3">
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
                              :placeholder="sexFreeze[whatWorker.sex]"
                              disabled
                            />
                          </div>
                        </div>
                        <div class="w-full px-3 mb-5">
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
            <div class="w-full px-3 mb-5">
              
              <div>
              <div class="2xl:flex 2xl:space-x-5">
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-1"
                      class="radio checked:bg-blue-500"
                      value="12"
                    />
                    <span class="label-text 2xl:pr-0 md:pr-56">อนุมัติ</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input
                      type="radio"
                      v-model.trim="statusId"
                      name="radio-2"
                      class="radio checked:bg-red-500"
                      value="13"
                    />
                    <span class="label-text 2xl:pr-0 md:pr-52">ไม่อนุมัติ</span>
                  </label>
                </div>
                <p v-if="confirmInput" class="text-red-600">
                  กรุณาเลือกรูปแบบการอนุมัติ
                </p>
              </div>
              <textarea
                v-model="applicationHasComment.description"
                class="textarea textarea-bordered w-full h-36"
                placeholder="หมายเหตุที่ไม่อนุมัติ"
              ></textarea>
              </div>

          <!-- rating -->
              <div v-if="idStatus == 24" class="flex flex-col w-full">
          <div class="rating mt-1">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="1"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="2"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="3"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="4"
              v-model="giveRate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="5"
              v-model="giveRate"
            />
          </div>
          <div class="w-full mt-3">
            <textarea
              class="textarea textarea-bordered w-full"
              placeholder="ระบุความคิดเห็น"
            ></textarea>
          </div>
        </div>

            </div>

            <div class="">
              <button
                @click="acceptOrReject()"
                class="btn w-1/2 bg-orange-1 hover:bg-orange-2"
              >
                ยืนยัน
              </button>
              <button
                @click="
                  (toggleModal = false), (statusId = ''), (confirmInput = false)
                "
                class="btn w-1/2"
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
    <!-- <div v-else>
      <เรียก acceptWorker component มา></>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
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
  props: ["idPost", "idStatus"],
  data() {
    return {
      sexFreeze,
      workerType,
      ntTypeFreeze,
      routes: "",
      whoApplication: [{ nationality: {}, workerType: {}, data: {} }],
      //   idPosting: '',
      acceptPage: false,
      statusId: "",
      image: "",
      topic: "รายการผู้สมัคร",
      applicationHasComment: {
        description: "",
      },
      toggleModal: false,
      noValue: false,
      idApplication: "",
      whatWorker: {},
      confirmInput: false,
    };
  },
  methods: {
    async acceptOrReject() {
      console.log(this.statusId);
      if (this.statusId != "") {
        if (this.statusId == "12") {
          this.acceptWorker();
        } else {
          if (this.statusId == "13") {
            this.rejectWorker();
          }
        }
      } else {
        this.confirmInput = true;
        console.log("เลือกก่อนว่าอนุมัติหรือไม่อนุมัติ");
      }
    },
    async openPopUp(object) {
      console.log(object);
      this.idApplication = object.applicationId;
      await axios
        .get(
          `${process.env.VUE_APP_ROOT_API}admin_emp/selectWorker?idWorker=${object.workerId}`
        )
        .then((response) => {
          this.whatWorker = response.data;
          console.log(this.whatWorker);
          this.image =
            `${process.env.VUE_APP_ROOT_API}main/image/` +
            this.whatWorker.verifyPic;
        });
    },
    async acceptWorker() {
      console.log("idApplication = " + this.idApplication);
      const vm = this;
      if (confirm("ต้องการรับบุคคลนี้เข้าทำงานหรือไม่")) {
        try {
          await axios.put(
            `${process.env.VUE_APP_ROOT_API}emp/employerAcceptOnWeb?idApplication=${this.idApplication}`
          ).data;
          vm.whoApplication = await axios.get(
            `${process.env.VUE_APP_ROOT_API}main/showAllWorker?idPosting=` +
              vm.idPost +
              "&idStatus=" +
              vm.idStatus
          );
        } catch (error) {
          console.log(error);
        }
      }
    },
    async rejectWorker() {
      console.log("idApplication = " + this.idApplication);
      const vm = this;
      if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const comment = JSON.stringify(this.applicationHasComment);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        // const res =
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/employerRejectOnWeb?idApplication=${this.idApplication}`,
          comment,
          customConfig
        );
        vm.whoApplication = axios.get(
          `${process.env.VUE_APP_ROOT_API}main/showAllWorker?idPosting=` +
            vm.idPost +
            "&idStatus=" +
            vm.idStatus
        );
        // res.headers['content-type'];
        console.log(result.data.data);
      }
    },
    async getPic(a) {
      console.log(a.verifyPic);
      this.image = `${process.env.VUE_APP_ROOT_API}main/image/` + a.verifyPic;
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
    async callData(){
      this.whoApplication = await axios.get(
            `${process.env.VUE_APP_ROOT_API}main/showAllWorker?idPosting=` +
              this.idPost +
              "&idStatus=" +
              this.idStatus
          );
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      this.whoApplication = await axios.get(
        `${process.env.VUE_APP_ROOT_API}main/showAllWorker?idPosting=` +
          this.idPost +
          "&idStatus=" +
          this.idStatus
      );
      if (this.whoApplication.data.whoApplicationList.length == 0) {
        this.noValue = true;
      }
      console.log(this.whoApplication);
      console.log("idPost = " + this.idPost, "idStatus = " + this.idStatus);
    } else {
      this.$router.push("/");
    }
  },
  watch: {
    idStatus: async function check() {
      if (this.idStatus == 11) {
        console.log("idStatus =" + this.idStatus);
        this.topic = "รายการผู้สมัคร";
        this.callData()
        console.log(
          "ถุยให้แล้ว" +
            "idPost = " +
            this.idPost +
            "idStatus = " +
            this.idStatus
        );
        console.log(this.whoApplication);
      } else if(this.idStatus == 12) {
          console.log("idStatus =" + this.idStatus);
          this.topic = "รายการที่รับสมัครแล้ว";
          this.callData()
      } else if(this.idStatus == 21) {
          console.log("idStatus =" + this.idStatus);
          this.topic = "รายการที่กำลังทำงาน";
          this.callData()
      } else if(this.idStatus == 24) {
          console.log("idStatus =" + this.idStatus);
          this.topic = "รายการที่รอให้คะแนน";
          this.callData()
      } 
    },
  },
};
</script>

<style>
</style>