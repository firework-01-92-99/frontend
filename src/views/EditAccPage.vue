<template>
  <div v-if="$store.state.auth.user" class="bg-gray-2 h-screen font-sans-thai">
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
            {{ myAcc.data.firstName + " " + myAcc.data.lastName }}
          </h1>
          <!-- <p class="mb-5">ขยันทำงานด้วยนะไอสัส อย่าอู้ ขอบใจ จากเจ้านายพวกมึง ด้วยรักและห่วงใย</p> -->
        </div>
      </div>
    </div>
    <div class="2xl:p-6 2xl:pl-32 xl:p-6 lg:p-6 md:p-6 p-3 pt-5">
      <base-tab
        ><template
          ><a
            :class="{ 'tab-active': routes == 'ApproveAccPage' }"
            class="tab tab-bordered"
            @click="$router.push('/approve')"
          >
            ตรวจสอบบัญชี
          </a>
          <a
            class="tab tab-bordered tab-active font-medium"
            :class="{ 'tab-active': routes == 'EditAccPage' }"
            @click="$router.push('/approve/edit')"
            >คำขอแก้ไขบัญชี</a
          >
          <a
            class="tab tab-bordered"
            :class="{ 'tab-active': routes == 'DelAccPage' }"
            @click="$router.push('/approve/delete')"
            >คำขอลบบัญชี</a
          ></template
        ></base-tab
      >
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
        การแก้ไขบัญชี
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
        <tbody v-for="a in listApprove.data" :key="a.idApprove">
          <!-- row 1 -->
          <tr>
            <th>{{ a.count }}</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="font-bold">{{ a.name }}</div>
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
              <button class="btn btn-ghost btn-xs" @click="data(a),toggleModal = !toggleModal"
                >รายละเอียด</button>
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
    <!-- modal -->
    <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-white w-full overflow-y-auto h-96 rounded shadow-2xl flex flex-col">
          <div v-show="iAm == 'Employer' || iAm == 'Worker'" class=" p-8">
                
                  <h3 class="font-bold text-lg">รายละเอียด</h3>
                 
                  <div class="flex flex-col 2xl:w-full mt-4">
                    <div
                      class="flex flex-col w-full flex-1 justify-between mb-8"
                    >
                      <div class="w-full">
                        <form class="form-horizontal 2xl:w-full md:w-full">
                          <div>
                            <div
                              v-if="aa"
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

                            <div v-else class="flex -mx-3">

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
                                      workerType[infoWorker.workerType.typeName]
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
                                        infoWorker.nationality.nationality_name
                                      ]
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              v-if="aa"
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

                            <div v-if="work" class="flex -mx-3">
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
                                    :placeholder="iAm == 'Worker' ? infoWorker.identificationNumber : ''"
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
                                    :placeholder="iAm == 'Worker' ? infoWorker.firstName : infoEmp.entrepreneurfName"
                                    disabled
                                  />
                                </div>
                              </div>

                              <div
                                v-if="work"
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
                                    :placeholder="infoWorker.middleName"
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
                                    :placeholder="iAm == 'Worker' ? infoWorker.lastName : infoEmp.entrepreneurlName"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div v-if="aa">
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

                              <div class="2xl:flex 2xl:-mx-3">
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
                            v-model="empInfo.employer.lineId"
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
                            :placeholder="
                              $store.state.auth.user.employer.lineId
                            "
                          />
                        </div>
                      </div>
                              </div>

                      <div class="2xl:flex 2xl:-mx-3">
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
                            v-model="empInfo.employer.tel"
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
                            :placeholder="$store.state.auth.user.employer.tel"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                          />
                        </div>
                        <p v-if="telInput" class="text-red-600">
                          กรุณากรอกเบอร์โทรศัพท์
                        </p>
                      </div>
                              </div>

                            </div>

                            <div
                              class="flex -mx-3"
                            >
                              <div v-if="work" class="w-full px-3 mb-5">
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
                                    :placeholder="sexFreeze[infoWorker.sex]"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div v-if="aa || work " class="w-full px-3 mb-5">
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
                                    :placeholder="iAm == 'Worker' ? infoWorker.phone : infoEmp.phone"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="flex -mx-3">
                              <div class="w-full px-3 mb-5">
                                <label
                                  v-if="aa"
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพสถานประกอบการ</label
                                >
                                <label
                                  v-if="work"
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
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            v-model.trim="statusId"
                            name="radio-1"
                            class="radio checked:bg-orange-1"
                            value="4"
                          />
                          <span class="label-text 2xl:pr-0 md:pr-56"
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
                            value="5"
                          />
                          <span class="label-text 2xl:pr-0 md:pr-52"
                            >ไม่อนุมัติ</span
                          >
                        </label>
                      </div>
                      <p v-if="confirmInput" class="text-red-600">
                        กรุณาเลือกรูปแบบการอนุมัติ
                      </p>
                    </div>
                    <textarea
                      class="textarea textarea-bordered w-full h-36"
                      placeholder="หมายเหตุที่ไม่อนุมัติ"
                    ></textarea>
                  </div>

                  <div class="">
                    <button
                      @click="sendApprove(idApprove)"
                      class="btn w-1/2 bg-orange-1 hover:bg-orange-2"
                    >
                      ยืนยัน
                    </button>
                    <button @click="toggleModal = false" class="btn w-1/2">ปิด</button>
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
import axios from "axios";
import BaseTab from "@/components/BaseTab.vue";
export default {
  components: { BaseTab },
  data() {
    return {
      myAcc: [],
      toggleModal: false,
      listApprove: [],
      idApprove: 0,
      confirmInput: false,
      statusId: '',
      info: [],
      infoEmp: [],
      editInfoEmp: [],
      editInfoWorker: [],
    };
  },
  methods: {
    async data(data) {
      this.idApprove = data.idApprove
      console.log("data: ");
      console.log(data);
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
        // await axios.get(`${process.env.VUE_APP_ROOT_API}main/selectEditEmployer?idEmployer=${data.idEmployer}`)
        //   .then((response) => {
        //     this.editInfoWorker = response.data;
        //     console.log(this.infoEmp);
        //     this.image =
        //       `${process.env.VUE_APP_ROOT_API}main/image/` +
        //       this.info.verifyPic;
        //   });           
      }else{
        this.iAm = data.workOrEmp
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
          });
        // await axios.get(`${process.env.VUE_APP_ROOT_API}main/selectEditEmployer?idEmployer=${data.idEmployer}`)
        //   .then((response) => {
        //     this.editInfoEmp = response.data;
        //     console.log(this.infoEmp);
        //     this.image =
        //       `${process.env.VUE_APP_ROOT_API}main/image/` +
        //       this.infoEmp.profile;
        //   });                  
      }
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      console.log("Admin's Edit Page");
      this.myAcc = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/meAdmin`
      );
      this.idAdmin = this.myAcc.data.idAdmin;
      this.listApprove = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/getAllApproveByIdStatusAndIdRole?idStatus=7&idRole=0`
      );    
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>