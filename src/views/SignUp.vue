<template>
  <div class="SignUp">
    <div class="font-sans-thai bg-gray-2 h-full w-screen">
      <div
        class="
          2xl:pt-0
          lg:pt-4
          md:pt-4
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
            bg-white
            sm:mx-0
          "
        >
          <div
            class="hidden lg:block lg:w-1/2"
            style="
              background: url('https://images.unsplash.com/photo-1523841589119-b55aee0f66e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
              background-size: cover;
              background-position: center center;
            "
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1
                v-if="signType == 'employer'"
                class="font-bold 2xl:text-4xl md:text-4xl text-xl text-center"
              >
                ลงทะเบียนสำหรับผู้ประกอบการ
              </h1>
              <h1
                v-else
                class="font-bold 2xl:text-4xl md:text-4xl text-2xl text-center"
              >
                ลงทะเบียนสำหรับผู้สมัครงาน
              </h1>
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                          >
                            <i
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            @keydown="checkMail"
                            type="email"
                            v-model.trim="registWorker.username"
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
                            :class="[
                              { 'bg-red-50': emailInput },
                              { 'bg-red-50': showError },
                            ]"
                            placeholder="อีเมล"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                          />
                        </div>
                        <p v-if="emailInput" class="text-red-600">
                          กรุณากรอกอีเมลของคุณ
                        </p>
                        <p v-if="showError" class="text-red-600">
                          {{ errorMessage }}
                        </p>
                      </div>

                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                          >
                            <i
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            :type="type"
                            v-model.trim="registWorker.password"
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
                            :class="{ 'bg-red-50': passwordInput }"
                            placeholder="รหัสผ่าน"
                          />
                          <div class="relative">
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
                          </div>
                        </div>
                        <p v-if="passwordInput" class="text-red-600">
                          กรุณากรอกรหัสผ่าน
                        </p>
                      </div>
                    </div>
                    <div v-if="signType == 'employer'" class="flex -mx-3">
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
                            v-model.trim="employer.estname"
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
                            :class="{ 'bg-red-50': estnameInput }"
                            placeholder="ชื่อสถานประกอบการ"
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

                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
                          >ประเภทแรงงาน</label
                        >
                        <div class="flex 2xl:space-x-5">
                          <div class="form-control">
                            <label class="label cursor-pointer 2xl:space-x-2">
                              <input
                                type="radio"
                                v-model.trim="
                                  registWorker.worker.workerType.idWorkerType
                                "
                                name="radio-5"
                                class="radio checked:bg-blue-500"
                                value="1"
                              />
                              <span class="label-text 2xl:pr-0 md:pl-2 md:pr-4"
                                >แรงงานต่างด้าว</span
                              >
                            </label>
                          </div>
                          <div class="form-control">
                            <label class="label cursor-pointer 2xl:space-x-2">
                              <input
                                type="radio"
                                v-model.trim="
                                  registWorker.worker.workerType.idWorkerType
                                "
                                name="radio-5"
                                class="radio checked:bg-red-500"
                                value="2"
                              />
                              <span class="label-text 2xl:pr-0 md:pl-2 md:pr-4"
                                >แรงงานไทย</span
                              >
                            </label>
                          </div>
                        </div>
                        <p v-if="workerTypeInput" class="text-red-600">
                          กรุณาเลือกประเภทแรงงาน
                        </p>
                      </div>
                    </div>

                    <div v-if="signType == 'employer'" class="flex -mx-3">
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
                          <select
                            type="text"
                            v-model.trim="employer.busstype"
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
                            :class="{ 'bg-red-50': businessTypeInput }"
                          >
                            <!-- แก้ด้วย -->
                            <option :value="''" disabled selected>
                              กรุณาเลือกประเภทธุรกิจ
                            </option>
                            <option
                              class="text-black"
                              v-for="b in businesstype"
                              :key="b.idBusinessType"
                              :value="b.idBusinessType"
                            >
                              {{ b.nameType }}
                            </option>
                            <!-- แก้ด้วย -->
                          </select>
                        </div>
                        <p v-if="businessTypeInput" class="text-red-600">
                          กรุณาเลือกประเภทธุรกิจ
                        </p>
                      </div>
                    </div>

                    <div v-else class="flex">
                      <div class="w-full mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            2xl:px-1
                          "
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
                          ></div>
                          <select
                            @click="whenselectNation"
                            type="text"
                            v-model.trim="
                              registWorker.worker.nationality.idnationality
                            "
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
                            :class="{ 'bg-red-50': idenNoInput }"
                            placeholder="สัญชาติ"
                          >
                            <option :value="''" disabled selected>
                              สัญชาติ
                            </option>
                            <option
                              class="text-black"
                              v-for="nt in ntType"
                              :key="nt.idnationality"
                              :value="nt.idnationality"
                            >
                              {{ ntTypeFreeze[nt.nationality_name] }}
                            </option>
                          </select>
                        </div>
                        <p v-if="idenNoInput" class="text-red-600">
                          กรุณาเลือกสัญชาติ
                        </p>
                      </div>
                    </div>

                    <div class="w-full mb-5">
                      <label
                        for=""
                        class="
                          2xl:text-base
                          md:text-base
                          text-sm
                          font-medium
                          2xl:px-1
                        "
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
                          v-model.trim="
                            registWorker.worker.identificationNumber
                          "
                          :maxlength="chaLength"
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
                          :class="{ 'bg-red-50': idenNoInput }"
                          placeholder="เลขบัตรประชาชน/เลขหนังสือเดินทาง"
                        />
                      </div>
                      <p v-if="idenNoInput" class="text-red-600">
                        กรุณากรอกเลขบัตรประชาชน/เลขหนังสือเดินทาง
                      </p>
                      <p v-if="errIden" class="text-red-600">
                        {{ errorMessage }}
                      </p>
                    </div>

                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                            v-model.trim="registWorker.worker.firstName"
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
                            :class="{ 'bg-red-50': firstnameInput }"
                            placeholder="ชื่อ"
                          />
                        </div>
                        <p v-if="firstnameInput" class="text-red-600">
                          กรุณากรอกชื่อ
                        </p>
                      </div>

                      <div
                        v-if="signType == 'worker'"
                        class="2xl:w-1/2 w-full 2xl:px-3 mb-5"
                      >
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                            v-model.trim="registWorker.worker.middleName"
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
                            placeholder="ชื่อกลาง"
                          />
                        </div>
                        <p v-if="middlenameInput" class="text-red-600">
                          กรุณากรอกชื่อ
                        </p>
                      </div>

                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                            v-model.trim="registWorker.worker.lastName"
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
                            placeholder="นามสกุล"
                          />
                        </div>
                        <!-- <p v-if="lastnameInput" class="text-red-600">
                          กรุณากรอกนามสกุล
                        </p> -->
                      </div>
                    </div>

                    <div v-if="signType == 'employer'">
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
                            <textarea
                              type="tel"
                              v-model.trim="employer.address"
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
                                focus:border-indigo-500
                              "
                              :class="{ 'bg-red-50': addressInput }"
                              placeholder="ที่อยู่"
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
                            <select
                              type="text"
                              v-model.trim="employer.subdis"
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
                                v-for="sd in subdisForm"
                                :key="sd.idSubdistrict"
                                :value="sd.idSubdistrict"
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
                            <select
                              type="text"
                              v-model.trim="employer.district"
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
                                v-for="d in disForm"
                                :key="d.idDistrict"
                                :value="d.idDistrict"
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
                            <select
                              type="text"
                              v-model.trim="employer.province"
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
                              <option class="" :value="''" disabled selected>
                                กรุณาเลือกจังหวัด
                              </option>
                              <option
                                class="text-black"
                                v-for="p in provinceForm"
                                :key="p.idProvince"
                                :value="p.idProvince"
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
                              v-model.trim="employer.postcode"
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
                              :class="{ 'bg-red-50': postCodeInput }"
                              placeholder="กรุณากรอกเลขไปรษณีย์"
                            />
                          </div>
                          <p v-if="postCodeInput" class="text-red-600">
                            กรุณากรอกเลขไปรษณีย์
                          </p>
                        </div>
                      </div>
                    </div>

                    <div v-if="signType == 'worker'" class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
                          >เพศ</label
                        >
                        <div class="flex space-x-5">
                          <div class="form-control">
                            <label
                              for="radio-6"
                              class="label cursor-pointer space-x-2"
                            >
                              <input
                                type="radio"
                                v-model.trim="registWorker.worker.sex"
                                name="radio-6"
                                class="radio checked:bg-blue-500"
                                value="M"
                              />
                              <span class="label-text">ชาย</span>
                            </label>
                          </div>
                          <div class="form-control">
                            <label
                              for="radio-7"
                              class="label cursor-pointer space-x-2"
                            >
                              <input
                                type="radio"
                                v-model.trim="registWorker.worker.sex"
                                name="radio-7"
                                class="radio checked:bg-red-500"
                                value="F"
                              />
                              <span class="label-text">หญิง</span>
                            </label>
                          </div>
                        </div>
                        <p v-if="sexInput" class="text-red-600">
                          กรุณาเลือกเพศ
                        </p>
                      </div>
                    </div>

                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                            v-model.trim="registWorker.worker.phone"
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
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': phoneInput }"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            placeholder="0123456789"
                          />
                        </div>
                        <p v-if="phoneInput" class="text-red-600">
                          กรุณากรอกเบอร์โทรศัพท์
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          v-if="signType == 'employer'"
                          for=""
                          class="text-base font-medium px-1"
                          >ภาพสถานประกอบการ</label
                        >
                        <label
                          v-if="signType == 'worker'"
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
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
                              @change="uploadImg"
                              :class="{ 'bg-red-50': UpPic }"
                            />
                          </div>
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
                    </div>
                  </div>

                  <div class="flex flex-col mt-8">
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
                  </div>
                </form>
                <div class="text-center mt-4">
                  <div
                    @click="this.$router.push('/signin')"
                    class="cursor-pointer no-underline hover:underline text-sm"
                  >
                    มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const ntTypeFreeze = Object.freeze({
  Laos: "ลาว",
  Thai: "ไทย",
  Myanmar: "เมียนมาร์",
  Cambodia: "กัมพูชา",
});
export default {
  props: ["signType"],
  data() {
    return {
      ntTypeFreeze,
      type: "password",
      eye: require("../assets/hide.png"),
      haveBoth: {
        email: "",
        pass: "",
        fname: "",
        lname: "",
        tel: "",
        picFile: null,
      },
      employer: {
        estname: "",
        busstype: "",
        address: "",
        subdis: "",
        district: "",
        province: "",
        postcode: "",
      },
      worker: {
        type: "",
        id: "",
        mname: "",
        sex: "",
        bindNation: "",
        role: { idRole: 3, role: "ROLE_WORKER" },
      },
      workerone: {
        email: "supitchayakanaraksanti@gmail.com",
        pass: "123",
        fname: "jojo",
        lname: "hoho",
        tel: "0131111111",
        picFile: null,
        type: "2",
        id: "3124214214",
        mname: "ee",
        sex: "M",
        bindNation: "1",
        role: { idRole: 3, role: "ROLE_WORKER" },
      },
      image: require("../assets/icon/face-2.png"),
      emailInput: false,
      passwordInput: false,
      estnameInput: false,
      workerTypeInput: false,
      businessTypeInput: false,
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
      error: "",
      showError: false,
      errorMessage: "",
      businesstype: [],
      subdisForm: [],
      disForm: [],
      provinceForm: [],
      ntType: [],
      errIden: false,
      chaLength: "",
      UpPic: false,

      registWorker: {
        username: "",
        password: "",
        role: { idRole: 3, role: "ROLE_WORKER" },
        worker: {
          identificationNumber: "",
          verifyPic: null,
          sex: "",
          firstName: "",
          middleName: "",
          lastName: "",
          phone: "",
          nationality: {
            idnationality: "",
            nationality_name: "",
          },
          workerType: {
            idWorkerType: "",
            typeName: "",
          },
        },
      },
    };
  },
  methods: {
    check() {
      this.UpPic =
        this.image == require("../assets/icon/face-2.png") ? true : false;
      this.emailInput = this.registWorker.username === "" ? true : false;
      this.passwordInput =
        this.registWorker.password === "" ||
        this.registWorker.password.length < 7
          ? true
          : false;
      // this.estnameInput = this.employer.estname === "" ? true : false;
      this.workerTypeInput =
        this.registWorker.worker.workerType.idWorkerType === "" ? true : false;
      // this.businessTypeInput = this.employer.busstype === "" ? true : false;
      this.idenNoInput =
        this.registWorker.worker.identificationNumber === "" ? true : false;
      this.nationInput =
        this.registWorker.worker.nationality.idnationality === ""
          ? true
          : false;
      this.firstnameInput =
        this.registWorker.worker.firstName === "" ? true : false;
      // this.middlenameInput = this.registWorker.worker.middleName === "" ? true : false;
      this.lastnameInput =
        this.registWorker.worker.lastName === "" ? true : false;
      // this.addressInput = this.employer.address === "" ? true : false;
      // this.subdisInput = this.employer.subdis === "" ? true : false;
      // this.districtInput = this.employer.district === "" ? true : false;
      // this.provinceInput = this.employer.province === "" ? true : false;
      // this.postCodeInput = this.employer.postcode === "" ? true : false;
      this.sexInput = this.registWorker.worker.sex === "" ? true : false;
      this.phoneInput =
        (this.registWorker.worker.phone === "" ||
          this.registWorker.worker.phone !== "") &&
        this.registWorker.worker.phone.length !== 10
          ? true
          : false;
    },
    checknation() {
      if (this.registWorker.worker.nationality.idnationality == 1) {
        console.log("Thai");
        this.middlenameInput = false;
      } else if (this.registWorker.worker.nationality.idnationality == 2) {
        console.log("Laos");
        this.middlenameInput = false;
      } else if (this.registWorker.worker.nationality.idnationality == 3) {
        console.log("Myanmar");
        this.middlenameInput = this.registWorker.worker.middleName === "";
      } else {
        if (this.registWorker.worker.nationality.idnationality == 4) {
          console.log("Cambodia");
          this.middlenameInput = false;
        }
      }
    },
    checkIdenAndPass() {
      if (
        this.registWorker.worker.identificationNumber.length < 13 &&
        this.registWorker.worker.nationality.idnationality == 1
      ) {
        this.errIden = true;
        this.errorMessage = "กรุณากรอกรหัสบัตรประจำตัวประชาชนให้ครบ 13 หลัก";
      } else if (
        !/^[a-zA-Z0-9]+$/.test(this.registWorker.worker.identificationNumber) &&
        this.registWorker.worker.nationality.idnationality !== 1
      ) {
        this.errIden = true;
        this.errorMessage =
          'กรุณากรอกเลขหนังสือเดินทางให้ถูกต้องตามหลักเช่น "A111111" ';
      }
    },
    whenselectNation() {
      if (this.registWorker.worker.nationality.idnationality == 1) {
        this.chaLength = 13;
      } else {
        // if(!/^[a-z]/i.test(this.registWorker.worker.identificationNumber) && this.registWorker.worker.nationality.idnationality !== 1 ){
        //   this.errIden = true
        //   this.errorMessage = 'กรุณากรอกเลข Passport ให้ถูกต้องตามหลักเช่น "A111111 ahhhhhh" '
        // }
        this.chaLength = 6;
      }
    },
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye = require("../assets/show.png");
      } else {
        this.type = "password";
        this.eye = require("../assets/hide.png");
      }
    },
    async signUp() {
      console.log("signupkrub");
      this.showError = false;
      this.checknation();
      this.checkIdenAndPass();
      this.check();
      if (
        !this.UpPic &&
        !this.emailInput &&
        !this.passwordInput &&
        !this.estnameInput &&
        !this.workerTypeInput &&
        !this.businessTypeInput &&
        !this.idenNoInput &&
        !this.nationInput &&
        !this.lastnameInput &&
        !this.addressInput &&
        !this.subdisInput &&
        !this.districtInput &&
        !this.provinceInput &&
        !this.postCodeInput &&
        !this.phoneInput
      ) {
        console.log("signup");
        try {
          const jsonPro = await JSON.stringify(this.registWorker);
          console.log(jsonPro);
          // const response = await fetch("http://localhost:3000/main/register", {
          const response = await fetch(
            `${process.env.VUE_APP_ROOT_API}main/register`,
            {
              method: "POST",
              body: jsonPro,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response);
          alert("Finish Sign up");
          this.errIden = false;
          this.clear();
          this.$router.push("/signin");
          // this.error = await response.json();
          // console.log(this.error);
          // if (this.error.errorCode == "USERNAME_HAVE_ALREADY") {
          //   console.log("username")
          //   this.showError = true;
          //   this.errorMessage = "อีเมลนี้ถูกใช้แล้ว";
          // } else {
          //   alert("Finish Sign up");
          //   this.errIden = false
          //   this.clear();
          //   this.$router.push("/signin");
          // }
        } catch (error) {
          console.log("cannot signup");
          console.log(`Could not save! ${error}`);
        }
      }
    },
    async uploadImg(event) {
      const file = event.target.files[0];
      if (this.isImage(file.name)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.image = event.target.result;
          this.UpPic =
            this.image == require("../assets/icon/face-2.png") ? true : false;
        };
        reader.readAsDataURL(file);
        this.imgFile = file;
        this.registWorker.worker.verifyPic = this.imgFile.name;
        // filename.split('.').slice(0, -1).join('.')
        console.log(this.registWorker.worker.verifyPic);
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
    clear() {
      this.registWorker = {
        username: "",
        password: "",
        role: { idRole: 3, role: "ROLE_WORKER" },
        worker: {
          identificationNumber: "",
          verifyPic: null,
          sex: "",
          firstName: "",
          middleName: "",
          lastName: "",
          phone: "",
          nationality: {
            idnationality: "",
            nationality_name: "",
          },
          workerType: {
            idWorkerType: "",
            typeName: "",
          },
        },
      };
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
    checkMail() {
      this.emailInput = false;
      this.showError = !this.validateEmail(this.registWorker.username);
      this.errorMessage = "กรุณากรอกอีเมลให้ถูกต้อง";
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(re.test(String(email).toLowerCase()));
      return re.test(String(email).toLowerCase());
    },
  },
  async created() {
    // this.businesstype = await this.fetch("http://localhost:3000/main/allBusinesstype");
    this.businesstype = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allBusinesstype`
    );
    // this.subdisForm = await this.fetch("http://localhost:3000/main/allSubDistrict");
    this.subdisForm = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allSubDistrict`
    );
    // this.disForm = await this.fetch("http://localhost:3000/main/allDistrict");
    this.disForm = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allDistrict`
    );
    // this.provinceForm = await this.fetch("http://localhost:3000/main/allProvince");
    this.provinceForm = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allProvince`
    );
    this.ntType = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allNationality`
    );
  },
};
</script>