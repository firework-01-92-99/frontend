<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
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
        รายการผู้สมัคร
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
              <label for="my-modal-5" class="btn btn-ghost btn-xs"
                >รายละเอียด</label
              >
              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">รายละเอียด</h3>
                  <p class="py-4">รอดึง</p>
                  <div class="flex flex-col w-full lg:w-1/2 p-4">
                    <div class="flex flex-col flex-1 justify-center mb-8">
                      <h1 class="font-bold text-4xl text-center">ประวัติ</h1>
                      <div class="w-full mt-10">
                        <form class="form-horizontal w-3/4 mx-auto">
                          <div>
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
                                      $store.state.auth.user.username
                                    "
                                    disabled
                                  />
                                </div>
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
                                  ></div>
                                  <input
                                    type="password"
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
                                      $store.state.auth.user.password
                                    "
                                    disabled
                                  />
                                  <!-- <input
                            type="password"
                            :placeholder="$store.state.auth.user.password"
                            disabled
                          /> -->
                                  <!-- <div class="relative">
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
                          </div> -->
                                </div>
                              </div>
                            </div>
                            <div
                              v-if="$store.state.auth.user.role.idRole == '2'"
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
                                    :placeholder="
                                      $store.state.auth.user.worker
                                        .identificationNumber
                                    "
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="2xl:flex 2xl:-mx-3">
                              <div
                                v-if="$store.state.auth.user.role.idRole == '2'"
                                class="2xl:w-1/2 w-full 2xl:px-3 mb-5"
                              >
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
                                    :placeholder="firstname"
                                    disabled
                                  />
                                </div>
                              </div>

                              <div
                                v-if="$store.state.auth.user.role.idRole == '3'"
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
                                    :placeholder="
                                      $store.state.auth.user.worker.middleName
                                    "
                                    disabled
                                  />
                                </div>
                              </div>

                              <div
                                v-if="$store.state.auth.user.role.idRole == '2'"
                                class="2xl:w-1/2 w-full 2xl:px-3 mb-5"
                              >
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
                                    :placeholder="lastName"
                                    disabled
                                  />
                                </div>
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
                                  :placeholder="nationality"
                                  disabled
                                />
                              </div>
                            </div>

                            <div
                              v-if="$store.state.auth.user.role.idRole == '2'"
                            >
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
                              v-if="$store.state.auth.user.role.idRole == '3'"
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
                                    :placeholder="
                                      sex[$store.state.auth.user.worker.sex]
                                    "
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
                                    :placeholder="
                                      $store.state.auth.user.worker.phone
                                    "
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
                                  v-if="
                                    $store.state.auth.user.role.idRole == '2'
                                  "
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพสถานประกอบการ</label
                                >
                                <label
                                  v-if="
                                    $store.state.auth.user.role.idRole == '3'
                                  "
                                  for=""
                                  class="text-base font-medium px-1"
                                  >ภาพยืนยันตัวตน</label
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
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button" @click.prevent="test()">
                            ขอลบบัญชี
                          </button>

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
                          <span class="label-text 2xl:pr-0 pr-24">อนุมัติ</span>
                        </label>
                      </div>
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            name="radio-6"
                            class="radio checked:bg-red-500"
                          />
                          <span class="label-text 2xl:pr-0 pr-28"
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
        <tfoot>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>