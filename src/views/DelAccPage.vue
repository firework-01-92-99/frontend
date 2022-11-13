<template>
  <div v-if="$store.state.auth.user" class="bg-gray-2 h-screen font-sans-thai">

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

    <div
      class="hero 2xl:h-64 xl:h-64 lg:h-64 md:h-64 h-32"
      style="
        background-image: url(https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="w-full">
          <h1
          v-if="this.myAcc.data"
            class="
              mb-5
              2xl:text-5xl
              xl:text-5xl
              lg:text-5xl
              md:text-5xl
              text-2xl
              font-bold
            "
          >
            สวัสดีคุณ
            {{ this.myAcc.data.firstName + " " + this.myAcc.data.lastName }}
          </h1>
        </div>
      </div>
    </div>
    <div class="2xl:p-6 2xl:pl-32 xl:p-6 lg:p-6 md:p-6 md:pl-14 p-3 pt-5 pl-8">
      <base-tab>
        <template
          ><a
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            @click="$router.push('/approve')"
          >
            ตรวจสอบบัญชี
          </a>
          <a
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            :class="{ 'tab-active': routes == 'EditAccPage' }"
            @click="$router.push('/approve/edit')"
      >คำขอแก้ไขบัญชี</a
    >
          <a
            class="tab tab-bordered tab-active font-medium 2xl:text-base md:text-base text-xs"
            @click="$router.push('/approve/delete')"
            >คำขอลบบัญชี</a
          ></template
        >
      </base-tab>
    </div>
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
        การขอลบบัญชี
      </p>
    <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <table class="table w-full mb-10">
        <!-- head -->
        <thead>
          <tr v-if="!noValue">
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="a in listApprove.data" :key="a.idApprove">
          <!-- row 1 -->
          <!-- <div v-if="listApprove.lenght == null">
            ไม่มีรายการที่ต้องทำ
          </div> -->
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
              <button
                @click="data(a), toggleModal = !toggleModal"
                class="btn btn-ghost btn-xs"
                >รายละเอียด</button
              >
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
    <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
      <div class="relative mx-auto 2xl:w-1/2 md:w-11/12 w-11/12 h-5/6">
        <div class="bg-white w-full overflow-y-auto h-full rounded-lg shadow-2xl flex flex-col">
          <div class="p-8">
                  <h3 class="font-bold text-lg">รายละเอียด</h3>
                  <div class="flex flex-col 2xl:w-full mt-4">
                    <div
                      class="flex flex-col w-full flex-1 justify-between mb-8"
                    >
                      <div class="w-full">
                        <form class="form-horizontal 2xl:w-full md:w-full">
                          <div>
                            <div
                              v-if="iAm == 'Employer'"
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
                                     infoEmp.establishmentName
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div v-else>
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
                                      workerType[info.workerType.typeName]
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                              </div>

                              <div class="flex -mx-3">
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

                            </div>

                            <div
                              v-if="iAm == 'Employer'"
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
                                    :placeholder="infoEmp.businesstype.nameType"
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
                                    :placeholder="iAm == 'Worker' ? info.identificationNumber : infoEmp.identificationNumber"
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
                                    :placeholder="iAm == 'Worker' ? info.firstName : infoEmp.entrepreneurfName"
                                    disabled
                                  />
                                </div>
                              </div>

                              <div
                                v-if="iAm == 'Worker'"
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
                                    :placeholder="iAm == 'Worker' ? info.lastName : infoEmp.entrepreneurlName"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div v-if="iAm == 'Employer'">
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
                                        infoEmp.address
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
                                        infoEmp.subDistrict ? infoEmp.subDistrict.subDistrict : ''
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
                                        infoEmp.district ? infoEmp.district.districtName : ''
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
                                        infoEmp.province ? infoEmp.province.provinceName : ''
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
                                        infoEmp.subDistrict ? infoEmp.subDistrict.postcode : ''
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
                          class="text-sm 2xl:text-base font-medium px-1"
                          >ID Line</label
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
                            v-model="infoEmp.lineId"
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
                              focus:border-indigo-500
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
                            v-model="infoEmp.tel"
                            maxlength="9"
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
                              focus:border-indigo-500
                            "
                            disabled
                          />
                        </div>
                      </div>
                              </div>

                            </div>

                            <div
                              class="flex -mx-3"
                            >
                              <div v-if="iAm == 'Worker'" class="w-full px-3 mb-5">
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
                            </div>

                            <div class="flex -mx-3">
                            <div v-if="iAm == 'Employer' || iAm == 'Worker' " class="w-full px-3 mb-5">
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
                                    :placeholder="iAm == 'Worker' ? info.phone : infoEmp.phone"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="flex -mx-3">
                              <div class="w-full px-3 mb-5">
                                <label
                                  v-if="iAm == 'Employer'"
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพ Logo ของสถานประกอบการ</label
                                >
                                <label
                                  v-if="iAm == 'Worker'"
                                  for=""
                                  class="text-base font-medium px-1"
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
                    <div class="flex-col w-full">
                       <div class="flex space-x-10">
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            v-model.trim="statusId"
                            name="radio-1"
                            class="radio checked:bg-orange-1"
                            value="9"
                          />
                          <span class="label-text 2xl:pr-0 md:pl-5 pl-5"
                            >อนุมัติ</span
                          >
                        </label>
                      </div>
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            v-model.trim="statusId"
                            name="radio-2"
                            class="radio checked:bg-orange-1"
                            value="1"
                          />
                          <span class="label-text 2xl:pr-0 md:pl-5 pl-5"
                            >ไม่อนุมัติ</span
                          >
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
                      class="textarea textarea-bordered w-full h-36"
                      placeholder="หมายเหตุที่ไม่อนุมัติ"
                    ></textarea>
                  </div>

                  <div class="flex justify-between">
                    <button
                      @click="sendApprove()"
                      class="btn w-2/5 bg-orange-1 hover:bg-orange-2 border-orange-1 hover:border-orange-1"
                    >
                      ยืนยัน
                    </button>
                    <button @click="toggleModal = false" class="btn w-2/5">ปิด</button>
                  </div>
              </div>
        </div>
      </div>
    </div>
    <div v-if="toggleModal" class="absolute inset-0 z-40 opacity-25 bg-black">

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
      status: [],
      statusId: "",
      myAcc: [],
      noValue: false,
      routes: "",
      idAdmin: 0,
      confirmInput: false,
      infoEmp : {businesstype:{}},
      toggleModal: false,
      idApprove: 0,
      idEmp: 0,
      // showToast: false,
    };
  },
  methods: {
    async data(data) {
      this.idApprove = data.idApprove
      console.log("data: ");
      console.log(data);
      console.log(data.idEmpOrWork, data.workOrEmp);
      this.confirmInput = false;
      this.statusId = "";
      if (data.workOrEmp == "Worker") {
        this.iAm = data.workOrEmp
        await axios
          .get(
            `${process.env.VUE_APP_ROOT_API}admin_emp/selectWorker?idWorker=${data.idWorker}`
          )
          .then((response) => {
            this.info = response.data;
            console.log(this.info);
            this.image =
              `${process.env.VUE_APP_ROOT_API}main/image/` +
              this.info.verifyPic;
          });
      }else{
        this.iAm = data.workOrEmp
        console.log(data)
        this.idEmp = data.idEmployer
        await axios
          .get(
            `${process.env.VUE_APP_ROOT_API}main/selectEmployer?idEmployer=${data.idEmployer}`
          )
          .then((response) => {
            this.infoEmp = response.data;
            console.log(this.infoEmp);
            this.image =
              `${process.env.VUE_APP_ROOT_API}main/image/` +
              this.infoEmp.profile;
              console.log("ยืนยันemp")
          });        
      }
    },
    async approveAccount(){
          try {
            await axios.put(
              `${process.env.VUE_APP_ROOT_API}admin/approveAccount?idApprove=${this.idApprove}&idAdmin=${this.idAdmin}&idStatus=${this.statusId}`
              // ,
              // {
              //   method: "PUT",
              // }
            ).data;
            // window.location.reload();
            this.listApprove = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/getAllApproveByIdStatusAndIdRole?idStatus=8&idRole=0`)
          } catch (error) {
            console.log(error);
          }
    },
    async sendApprove() {
      if (this.statusId != "") {
        // this.showToast = true;
        if(this.iAm == 'Worker'){
        if (confirm("ต้องการจะส่งฟอร์มอนุมัติบัญชีหรือไม่")) {
          this.approveAccount()
        }else{
          console.log("ไม่อนุมัติให้ลบ")
        }
        }else{
          //อนุมัติให้ลบ
          if(this.statusId == 9){
            if (confirm("ต้องการจะส่งฟอร์มอนุมัติบัญชีหรือไม่")) {
          try {
            await axios.put(
              `${process.env.VUE_APP_ROOT_API}admin/deleteEmployer?idEmployer=${this.idEmp}`
              // ,
              // {
              //   method: "PUT",
              // }
            ).data;
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        }   
            }else{
              //ไม่อนุมัติให้ลบ
              if(this.statusId == 1){
                this.approveAccount()
              }
            }       
        }
      } else {
        this.confirmInput = true;
        console.log("เลือกก่อนว่าอนุมัติไม่อนุมัติ");
      }
      this.listApprove = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/getAllApproveByIdStatusAndIdRole?idStatus=8&idRole=0`
      );      
      if (this.listApprove.data.length == 0) {
        this.noValue = true;
      } else {
        this.noValue = false;
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
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      this.listApprove = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/getAllApproveByIdStatusAndIdRole?idStatus=8&idRole=0`
      );
      console.log(this.listApprove.data);
      this.status = await this.fetch(
        `${process.env.VUE_APP_ROOT_API}main/allStatus`
      );
      this.myAcc = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/meAdmin`
      );
      this.idAdmin = this.myAcc.data.idAdmin;
      if (this.listApprove.data.length == 0) {
        this.noValue = true;
      } else {
        this.noValue = false;
      }
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>