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
                      v-if="UpPic"
                      class="text-red-600"
                    >
                      กรุณาอัปโหลดภาพสถานประกอบการ
                    </p>
                    <!-- <p
                      v-if="UpPic && signType == 'worker'"
                      class="text-red-600"
                    >
                      กรุณาอัปโหลดภาพยืนยันตัวตน
                    </p> -->
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
                            v-model.trim="empInfo.employer.email"
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
                            :placeholder="$store.state.auth.user.employer.email"
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
                            v-model.trim="empInfo.employer.establishmentName"
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
                            v-model.trim="empInfo.employer.entrepreneurfName"
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
                              this.$store.state.auth.user.employer
                                .entrepreneurfName
                            "
                          />
                        </div>
                        <p v-if="firstnameInput" class="text-red-600">
                          กรุณากรอกชื่อ
                        </p>
                      </div>

                      <!-- <div
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
                      </div> -->

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
                            v-model.trim="empInfo.employer.entrepreneurlName"
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
                              this.$store.state.auth.user.employer
                                .entrepreneurlName
                            "
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
                              v-model.trim="empInfo.employer.address"
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
                              v-if="!isEditSubDistrict"
                              @focus="editProvince('subDistrict')"
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
                                empInfo.employer.subDistrict.subDistrict
                              "
                            />
                            <select
                              v-if="isEditSubDistrict"
                              @blur="blur('subDistrict')"
                              type="text"
                              v-model.trim="empInfo.employer.subDistrict"
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
                                v-for="sd in empInfo.employer.district
                                  .subDistrictList"
                                :key="sd.idSubdistrict"
                                :value="sd"
                              >
                                {{ sd.subDistrict }}
                              </option>
                            </select>
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
                              v-if="!isEditDistrict"
                              @focus="editProvince('district')"
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
                                empInfo.employer.district.districtName
                              "
                            />
                            <select
                              v-if="isEditDistrict"
                              @blur="blur('district')"
                              type="text"
                              v-model.trim="empInfo.employer.district"
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
                                v-for="d in empInfo.employer.province
                                  .districtList"
                                :key="d.idDistrict"
                                :value="d"
                              >
                                {{ d.districtName }}
                              </option>
                            </select>
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
                              v-if="!isEditProvince"
                              @focus="editProvince('province')"
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
                                empInfo.employer.province.provinceName
                              "
                            />
                            <select
                              v-if="isEditProvince"
                              @blur="blur('province')"
                              type="text"
                              v-model.trim="empInfo.employer.province"
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
                            </select>
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
                              v-model="empInfo.employer.subDistrict.postcode"
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
                            v-model="empInfo.employer.phone"
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
                            :placeholder="$store.state.auth.user.employer.phone"
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
            @click="sendEdit()"
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
      image:
        `${process.env.VUE_APP_ROOT_API}main/image/` +
        this.$store.state.auth.user.employer.profile,
      UpPic: false,
      emailInput: false,
      passwordInput: false,
      estnameInput: false,
      workerTypeInput: false,
      idenNoInput: false,
      nationInput: false,
      firstnameInput: false,
      middlenameInput: false,
      lastnameInput: false,
      addressInput: false,
      subdisInput: false,
      districtInput: false,
      provinceInput: false,
      postCodeInput: false,
      sexInput: false,
      phoneInput: false,
      telInput: false,
      sex,
      workerType,
      nationFreeze,
      firstname: "",
      middlename: "",
      lastname: "",
      nationality: "",
      tel: "",
      // image: "",
      empInfo: {},
      provinceForm: [],
      isEditProvince: false,
      isEditDistrict: false,
      isEditSubDistrict: false,
      picture: null,

      secPassInput: false,
    };
  },
  methods: {
    async sendEdit() {
      console.log("เข้า 1")
      this.check();
      if(confirm('ต้องการจะส่งคำขอการแก้ไขไปให้แอดมินหรือไม่')){
        console.log("เข้า 2")
      if (
        !this.UpPic &&
        !this.emailInput &&
        !this.passwordInput &&
        !this.estnameInput &&
        !this.firstnameInput &&
        !this.lastnameInput &&
        !this.addressInput &&
        !this.subdisInput &&
        !this.districtInput &&
        !this.provinceInput &&
        !this.postCodeInput &&
        !this.phoneInput &&
        !this.telInput
      ) {
        console.log("เข้า 3")
        const employer = JSON.stringify(this.empInfo.employer);
        console.log(employer)
        const customConfig = {
        headers: {
          "Content-Type": "application/json",
          },
        }
        
        await axios.post(
          `${process.env.VUE_APP_ROOT_API}emp/editMyEmployer`, employer, customConfig);
      
      // if (confirm("คุณต้องการจะลบบัญชีใช่หรือไม่")) {
      //   console.log("idAccount = " + this.$store.state.auth.user.idAccount);
      //   await axios.put(
      //     `${process.env.VUE_APP_ROOT_API}worker/deleteMyWorker?idWorker=` +
      //       this.$store.state.auth.user.worker.idWorker
      //   ).data;
      // }
      console.log("เข้า 4")
    }
      }
    },
    check() {
      this.UpPic =
        this.image == ''
      this.emailInput = this.empInfo.employer.email === ""
      this.estnameInput = this.empInfo.employer.establishmentName === ""
      this.firstnameInput = this.empInfo.employer.entrepreneurfName === ""
      this.lastnameInput = this.empInfo.employer.entrepreneurlName === ""
      this.addressInput = this.empInfo.employer.address === ""
      this.provinceInput = this.empInfo.employer.province.idProvince === ""
      this.districtInput = this.empInfo.employer.district.idDistrict === ""
      this.subdisInput = this.empInfo.employer.subDistrict.idSubdistrict === ""
      this.postCodeInput = this.empInfo.employer.subDistrict.postcode === "" || this.empInfo.employer.subDistrict.postcode.length != 5
      this.phoneInput = this.empInfo.employer.phone === "" || this.empInfo.employer.phone.length !== 10
      this.telInput = this.empInfo.employer.tel === "" || this.empInfo.employer.tel.length != 9

    },
    async uploadImg(event) {
      const file = event.target.files[0];
      if (this.isImage(file.name)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.image = event.target.result;
          this.UpPic =
            this.image ==
            `${process.env.VUE_APP_ROOT_API}main/image/` +
              this.$store.state.auth.user.employer.profile
              ? true
              : false;
        };
        reader.readAsDataURL(file);
        this.imgFile = file;
        this.picture = this.imgFile.name;

        // if (this.signType == "worker") {
        //   this.registWorker.worker.verifyPic = this.picture;
        //   console.log(this.registWorker.worker.verifyPic);
        // }
        this.empInfo.employer.profile = this.picture;
        console.log(this.empInfo.employer.profile);

        // filename.split('.').slice(0, -1).join('.')
        // this.img = file.name;
      } else {
        return "Please upload only picture.";
      }
    },
    checkName(picFile) {
      var checkWords = picFile.split(".");
      return checkWords[checkWords.length - 1];
    },
    isImage(picFile) {
      var realCheckName = this.checkName(picFile);
      switch (realCheckName.toLowerCase()) {
        case "jpg":
        case "gif":
        case "bmp":
        case "png":
        case "jpeg":
          return true;
      }
      return false;
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
    editProvince(type) {
      if (type == "province") {
        this.isEditProvince = true;
      } else if (type == "district") {
        this.isEditDistrict = true;
      } else if (type == "subDistrict") {
        this.isEditSubDistrict = true;
      }
    },
    blur(type) {
      if (type == "province") {
        this.isEditProvince = false;
      } else if (type == "district") {
        this.isEditDistrict = false;
      } else if (type == "subDistrict") {
        this.isEditSubDistrict = false;
      }
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole != "1"
    ) {
      if (this.$store.state.auth.user.role.idRole == "2") {
        console.log(this.$store.state.auth.user);
        this.provinceForm = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allProvince`
        );
        this.empInfo = {
          employer: {
            idEmployer: this.$store.state.auth.user.employer.idEmployer,
            establishmentName: this.$store.state.auth.user.employer.establishmentName,
            entrepreneurfName: this.$store.state.auth.user.employer.entrepreneurfName,
            entrepreneurlName: this.$store.state.auth.user.employer.entrepreneurlName,
            address: this.$store.state.auth.user.employer.address,
            tel: this.$store.state.auth.user.employer.tel,
            phone: this.$store.state.auth.user.employer.phone,
            email: this.$store.state.auth.user.employer.email,
            lineId: this.$store.state.auth.user.employer.lineId,
            profile: this.$store.state.auth.user.employer.profile,
            businesstype: {
              idBusinessType:
                this.$store.state.auth.user.employer.businesstype
                  .idBusinessType,
              nameType:
                this.$store.state.auth.user.employer.businesstype.nameType,
            },
            account: {
              idAccount: this.$store.state.auth.user.idAccount,
              employer:{
                idEmployer: this.$store.state.auth.user.employer.idEmployer,
              },
              role: { idRole: 2, roleName: "ROLE_EMP" },
              email: this.$store.state.auth.user.employer.email

            },
            province: {
              idProvince:
                this.$store.state.auth.user.employer.province.idProvince,
              provinceName:
                this.$store.state.auth.user.employer.province.provinceName,
            },
            district: {
              idDistrict:
                this.$store.state.auth.user.employer.district.idDistrict,
              districtName:
                this.$store.state.auth.user.employer.district.districtName,
            },
            subDistrict: {
              idSubdistrict:
                this.$store.state.auth.user.employer.subDistrict.idSubdistrict,
              subDistrict:
                this.$store.state.auth.user.employer.subDistrict.subDistrict,
              postcode:
                this.$store.state.auth.user.employer.subDistrict.postcode,
            },
            nationality: {
              idnationality: 1,
              nationality_name:
                this.$store.state.auth.user.employer.nationality
                  .nationality_name,
            },
          },
        };
        console.log(this.empInfo.employer.profile);
        console.log(this.$store.state.auth.user.employer.profile);
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