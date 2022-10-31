<template>
  <div v-if="$store.state.auth.user" class="Profile">
    <div class="font-sans-thai h-full w-full">
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
            flex flex-col
            md:flex-col
            2xl:flex-row
            rounded-lg
            shadow-lg
            w-full
            sm:w-3/4
            lg:w-full lg:h-full
            sm:mx-0
            justify-center
          "
        >
          <div class="lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-bold text-4xl text-center">แก้ไขบัญชี</h1>
              <div class="w-full mt-10">
                <div class="w-3/4 mx-auto">
                  <!-- <div class="flex justify-center">
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
                    </div> -->

                  <div class="flex flex-col w-full">
                    <img
                      :src="image"
                      class="
                        mt-2
                        mb-3
                        2xl:w-1/5
                        lg:w-2/5
                        md:w-2/5
                        w-5/6
                        mx-auto
                      "
                    />
                    <div class="mx-auto">
                      <input
                        type="file"
                        class="
                          w-full
                          pr-3
                          py-2
                          rounded-lg
                          outline-none
                          focus:border-indigo-500
                        "
                        @change="uploadImg"
                        :class="{ 'bg-red-50': UpPic }"
                      />
                    </div>
                    <p
                      v-if="UpPic && signType == 'employer'"
                      class="text-red-600"
                    >
                      กรุณาอัปโหลดภาพสถานประกอบการ
                    </p>
                    <p
                      v-if="UpPic && signType == 'worker'"
                      class="text-red-600"
                    >
                      กรุณาอัปโหลดภาพยืนยันตัวตน
                    </p>
                  </div>

                  <div class="2xl:flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for=""
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
                          placeholder="รหัสผ่านปัจจุบัน"
                        />
                      </div>
                      <p v-if="passwordInput" class="text-red-600">
                        กรุณากรอกรหัสผ่านปัจจุบัน
                      </p>
                    </div>
                  </div>

                  <div class="2xl:flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for=""
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
                          placeholder="รหัสผ่านใหม่"
                        />
                      </div>
                      <p v-if="passwordInput" class="text-red-600">
                        กรุณากรอกรหัสผ่านใหม่
                      </p>
                    </div>
                  </div>

                  <div class="2xl:flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for=""
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
                          placeholder="ยืนยันรหัสผ่านใหม่"
                        />
                      </div>
                      <p v-if="secPassInput" class="text-red-600">
                          กรุณากรอกช่องยืนยันรหัสผ่านให้ตรงกับช่องรหัสผ่าน
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- worker -->
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <!-- <h1 class="font-bold text-4xl text-center">แก้ไขบัญชี</h1> -->
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <!-- <div class="flex justify-center">
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
                    </div> -->
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
                              focus:border-indigo-500
                            "
                            :placeholder="$store.state.auth.user.email"
                          />
                        </div>
                        <p v-if="emailInput" class="text-red-600">
                          กรุณากรอกอีเมลของคุณ
                        </p>
                      </div>

                      <!-- <div
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
                      </div> -->
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
                              focus:border-indigo-500
                            "
                            :placeholder="
                              $store.state.auth.user.employer.establishmentName
                            "
                          />
                        </div>
                        <p v-if="estnameInput" class="text-red-600">
                          กรุณากรอกชื่อสถานประกอบการ
                        </p>
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
                      <!-- <div class="w-full px-3 mb-5">
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
                      </div> -->
                    </div>

                    <div v-else class="2xl:flex -mx-3">
                      <!-- <div class="w-full px-3 mb-5">
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
                              focus:border-indigo-500
                            "
                            :placeholder="
                              $store.state.auth.user.worker.identificationNumber
                            "
                            disabled
                          />
                        </div>
                      </div> -->
                    </div>

                    <!-- <div class="2xl:flex -mx-3">
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
                    </div> -->

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
                              focus:border-indigo-500
                            "
                            :placeholder="firstname"
                          />
                        </div>
                        <p v-if="firstnameInput" class="text-red-600">
                          กรุณากรอกชื่อ
                        </p>
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
                              focus:border-indigo-500
                            "
                            :placeholder="middlename"
                          />
                        </div>
                        <p v-if="middlenameInput" class="text-red-600">
                          กรุณากรอกชื่อกลาง
                        </p>
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
                              focus:border-indigo-500
                            "
                            :placeholder="lastname"
                          />
                        </div>
                        <p v-if="lastnameInput" class="text-red-600">
                          กรุณากรอกนามสกุล
                        </p>
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
                                focus:border-indigo-500
                              "
                              :placeholder="
                                $store.state.auth.user.employer.address
                              "
                            />
                          </div>
                          <p v-if="addressInput" class="text-red-600">
                            กรุณากรอกที่อยู่
                          </p>
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
                                focus:border-indigo-500
                              "
                              :placeholder="
                                $store.state.auth.user.employer.subDistrict
                                  .subDistrict
                              "
                            />
                            <!-- <select
                              type="text"
                              v-model.trim="registEmp.employer.subDistrict"
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
                              :class="{ 'bg-red-50': subdisInput }"
                            >
                              <option class="" :value="''" disabled selected>
                                กรุณาเลือกตำบล/แขวง
                              </option>
                              <option
                                class="text-black"
                                v-for="sd in registEmp.employer.district
                                  .subDistrictList"
                                :key="sd.idSubdistrict"
                                :value="sd"
                              >
                                {{ sd.subDistrict }}
                              </option>
                            </select> -->
                          </div>
                          <p v-if="subdisInput" class="text-red-600">
                            กรุณาเลือกตำบล/แขวง
                          </p>
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
                                focus:border-indigo-500
                              "
                              :placeholder="
                                $store.state.auth.user.employer.district
                                  .districtName
                              "
                            />
                            <!-- <select
                              type="text"
                              v-model.trim="registEmp.employer.district"
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
                              :class="{ 'bg-red-50': districtInput }"
                            >
                              <option class="" :value="''" disabled selected>
                                กรุณาเลือกอำเภอ/เขต
                              </option>
                              <option
                                class="text-black"
                                v-for="d in this.registEmp.employer.province
                                  .districtList"
                                :key="d.idDistrict"
                                :value="d"
                              >
                                {{ d.districtName }}
                              </option>
                            </select> -->
                          </div>
                          <p v-if="districtInput" class="text-red-600">
                            กรุณาเลือกอำเภอ/เขต
                          </p>
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
                                focus:border-indigo-500
                              "
                              :placeholder="
                                $store.state.auth.user.employer.province
                                  .provinceName
                              "
                            />
                            <!-- <select
                              type="text"
                              v-model.trim="registEmp.employer.province"
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
                              :class="{ 'bg-red-50': provinceInput }"
                            >
                              <option class="" value="''" disabled selected>
                                กรุณาเลือกจังหวัด
                              </option>
                              <option
                                class="text-black"
                                v-for="p in provinceForm"
                                :key="p.idProvince"
                                :value="p"
                              >
                                {{ p.provinceName }}
                              </option>
                            </select> -->
                          </div>
                          <p v-if="provinceInput" class="text-red-600">
                            กรุณาเลือกจังหวัด
                          </p>
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
                                focus:border-indigo-500
                              "
                              :placeholder="
                                $store.state.auth.user.employer.subDistrict
                                  .postcode
                              "
                            />
                          </div>
                          <p v-if="postCodeInput" class="text-red-600">
                            กรุณากรอกเลขไปรษณีย์หรือกรอกให้ครบ 5 หลัก
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="2xl:flex -mx-3">
                      <!-- <div
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
                      </div> -->
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="text-sm 2xl:text-base font-medium px-1"
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
                              focus:border-indigo-500
                            "
                            :placeholder="tel"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                          />
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณากรอกเบอร์โทรศัพท์ (มือถือ)
                        </p>
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
                            placeholder="เบอร์โทรศัพท์"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                          />
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณากรอกเบอร์โทรศัพท์
                        </p>
                      </div>
                    </div>

                    <div class="2xl:flex -mx-3">
                      <!-- <div
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
                      </div> -->
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
                            placeholder="ID Line"
                          />
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณากรอก ID Line
                        </p>
                      </div>
                    </div>

                    <!-- <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          v-if="$store.state.auth.user.role.idRole == '2'"
                          for=""
                          class="text-base font-medium px-1"
                          >ภาพสถานประกอบการ</label
                        >
                      </div>
                    </div> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex space-x-5 justify-center font-sans-thai">
          <button
            type="submit"
            class="
              btn
              border-orange-1
              bg-orange-1
              hover:bg-orange-2 hover:border-orange-2
              2xl:w-1/5
              md:w-2/5
              w-2/5
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
              2xl:text-base
              md:text-xs
            "
          >
            บันทึก
          </button>

          <button
            @click="$router.push('/profile')"
            class="
              btn btn-ghost
              2xl:w-1/5
              md:w-2/5
              w-2/5
              -mb-5
              2xl:mt-0
              xl:mt-0
              lg:mt-0
              md:mt-0
              2xl:text-base
              md:text-xs
            "
          >
            ยกเลิก
          </button>
          <!-- {{ this.$store.state.auth.user.employer }} -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
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
  components: {},
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
      if (confirm("คุณต้องการจะลบบัญชีใช่หรือไม่")) {
        console.log("idAccount = " + this.$store.state.auth.user.idAccount);
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}worker/deleteMyWorker?idWorker=` +
            this.$store.state.auth.user.worker.idWorker
        ).data;
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
        this.image = "1";
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