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
                      <div class="w-full 2xl:px-3 mb-5">
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
                            @click="onFocus('อีเมล')"
                            @keydown="checkMail"
                            type="email"
                            v-model.trim="bindEmail"
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
                              { 'bg-red-50': errorMail },
                            ]"
                            placeholder="อีเมล"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                          />
                        </div>
                        <p v-if="emailInput" class="text-red-600">
                          กรุณากรอกอีเมลของคุณ
                        </p>
                        <p v-if="showError || errorMail" class="text-red-600">
                          {{ errorMessage }}
                        </p>
                      </div>
                    </div>

                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="w-full 2xl:px-3 mb-5">
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
                            @click="onFocus('รหัสผ่าน')"
                            maxlength="15"
                            :type="type"
                            v-model.trim="bindPass"
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
                        </div>
                        <p v-if="passwordInput" class="text-red-600">
                          กรุณากรอกรหัสผ่านและรหัสผ่านจำเป็นต้องมีอย่างน้อย 8
                          ตัว
                        </p>
                      </div>
                    </div>

                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="w-full 2xl:px-3 mb-5">
                        <label
                          for=""
                          class="
                            2xl:text-base
                            md:text-base
                            text-sm
                            font-medium
                            px-1
                          "
                          >ยืนยันรหัสผ่าน</label
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
                            @click="onFocus('รหัสผ่าน')"
                            maxlength="15"
                            :type="type"
                            v-model.trim="secondPass"
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
                            :class="{ 'bg-red-50': secPassInput }"
                            placeholder="ยืนยันรหัสผ่าน"
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
                        <p v-if="secPassInput" class="text-red-600">
                          กรุณากรอกช่องยืนยันรหัสผ่านให้ตรงกับช่องรหัสผ่าน
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
                            v-model.trim="registEmp.employer.establishmentName"
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
                        <div
                          @click="clearIdenNum(), onFocus('ประเภทแรงงาน')"
                          class="flex 2xl:space-x-5"
                        >
                          <div
                            class="form-control"
                            @click="whenselectNation('migrant')"
                          >
                            <label
                              @click="
                                registWorker.worker.nationality.idnationality =
                                  ''
                              "
                              class="label cursor-pointer 2xl:space-x-2"
                            >
                              <input
                                type="radio"
                                v-model.trim="
                                  registWorker.worker.workerType.idWorkerType
                                "
                                name="radio-5"
                                class="radio checked:bg-blue-500"
                                :class="{ 'bg-red-50': workerTypeInput }"
                                value="1"
                              />
                              <span class="label-text 2xl:pr-0 md:pl-2 md:pr-4"
                                >แรงงานต่างด้าว</span
                              >
                            </label>
                          </div>
                          <div
                            class="form-control"
                            @click="whenselectNation('Thai')"
                          >
                            <label
                              @click="
                                registWorker.worker.nationality.idnationality = 1
                              "
                              class="label cursor-pointer 2xl:space-x-2"
                            >
                              <input
                                type="radio"
                                v-model.trim="
                                  registWorker.worker.workerType.idWorkerType
                                "
                                name="radio-5"
                                class="radio checked:bg-red-500"
                                :class="{ 'bg-red-50': workerTypeInput }"
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
                            v-model.trim="
                              registEmp.employer.businesstype.idBusinessType
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
                          v-if="
                            registWorker.worker.workerType.idWorkerType !== ''
                          "
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
                            v-if="
                              registWorker.worker.workerType.idWorkerType == 1
                            "
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
                            :class="{ 'bg-red-50': nationInput }"
                            placeholder="สัญชาติ"
                          >
                            <option :value="''" disabled selected>
                              สัญชาติ
                            </option>
                            <option
                              class="text-black"
                              v-for="nt in ntType.filter((nt) => {
                                return nt.nationality_name != 'Thai';
                              })"
                              :key="nt.idnationality"
                              :value="nt.idnationality"
                            >
                              {{ ntTypeFreeze[nt.nationality_name] }}
                            </option>
                          </select>
                          <select
                            v-if="
                              registWorker.worker.workerType.idWorkerType == 2
                            "
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
                            :class="{ 'bg-red-50': nationInput }"
                            placeholder="สัญชาติ"
                          >
                            <option selected class="text-black" :value="1">
                              ไทย
                            </option>
                          </select>
                        </div>
                        <p v-if="nationInput" class="text-red-600">
                          กรุณาเลือกสัญชาติ
                        </p>
                      </div>
                    </div>

                    <div v-if="signType == 'worker'" class="w-full mb-5">
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
                          @click="onFocus('เลข')"
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
                            @click="onFocus('ชื่อจริง')"
                            type="text"
                            v-model.trim="bindFname"
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
                            @click="onFocus('ชื่อกลาง')"
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
                            :class="{ 'bg-red-50': middlenameInput }"
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
                            @click="onFocus('นามสกุล')"
                            type="text"
                            v-model.trim="bindLname"
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
                              v-model.trim="registEmp.employer.address"
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
                            </select>
                          </div>
                          <p v-if="provinceInput" class="text-red-600">
                            กรุณาเลือกจังหวัด
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
                            </select>
                          </div>
                          <p v-if="subdisInput" class="text-red-600">
                            กรุณาเลือกตำบล/แขวง
                          </p>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >รหัสไปรษณีย์</label
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
                              v-model.trim="
                                registEmp.employer.subDistrict.postcode
                              "
                              onkeypress="return event.charCode >= 48 && event.charCode <= 57"
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
                            กรุณากรอกเลขไปรษณีย์หรือกรอกให้ครบ 5 หลัก
                          </p>
                        </div>
                      </div>
                    </div>

                    <div v-if="signType == 'worker'" class="flex -mx-3">
                      <div @click="onFocus('เพศ')" class="w-1/2 px-3 mb-5">
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
                                :class="{ 'bg-red-50': sexInput }"
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
                                :class="{ 'bg-red-50': sexInput }"
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
                            @click="onFocus('เบอร์')"
                            type="tel"
                            v-model.trim="bindPhone"
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

                  <label class="label cursor-pointer space-x-2">
                    <input
                      type="checkbox"
                      v-model.trim="selectPolicy"
                      class="checkbox checkbox-sm"
                      value="T"
                    />
                    <span class="label-text"
                      >ฉันยอมรับ
                      <label
                        for="my-modal-5"
                        class="
                          text-blue-700
                          cursor-pointer
                          underline
                          hover:text-blue-800
                        "
                        >ข้อกำหนดและเงื่อนไข</label
                      >
                      <input
                        type="checkbox"
                        id="my-modal-5"
                        class="modal-toggle"
                      />
                      <div class="modal">
                        <div class="modal-box w-11/12 max-w-5xl">
                          <h3 class="font-bold text-lg">
                            ข้อกำหนดและเงื่อนไขของ Firework
                          </h3>
                          <h6 class="font-semibold py-4">
                            1. ข้อตกลงกับเงื่อนไข
                          </h6>
                          <p class="indent-8 text-justify">
                            ข้อกำหนดการใช้งานเหล่านี้เป็นข้อตกลงที่มีผลผูกพันทางกฎหมายระหว่างคุณ
                            ไม่ว่าจะเป็นส่วนบุคคลหรือในนามของนิติบุคคล
                            <span class="font-bold">("คุณ")</span> และ Firework
                            <span class="font-bold"
                              >("บริษัท", "เรา", "เรา" หรือ "ของเรา")</span
                            >
                            เกี่ยวกับการเข้าถึงและการใช้งาน
                            <span class="text-blue-700"
                              >https://fireworku.ddns.net</span
                            >
                            เว็บไซต์และรูปแบบสื่ออื่น ๆ ช่องทางสื่อ
                            เว็บไซต์มือถือหรือแอพพลิเคชั่นมือถือที่เกี่ยวข้อง
                            เชื่อมโยงหรืออื่น ๆ เชื่อมต่อกับมัน (รวมกันคือ
                            "ไซต์") เราลงทะเบียนในประเทศไทย
                            และมีสำนักงานที่ลงทะเบียนที่ประเทศไทย
                            คุณเห็นด้วยว่าด้วยการเข้าถึงเว็บไซต์ คุณได้อ่าน
                            เข้าใจ
                            และตกลงที่จะผูกพันกับทั้งหมดนี้เงื่อนไขการใช้งาน
                            ถ้าคุณไม่เห็นด้วยกับเงื่อนไขเหล่านี้ทั้งหมด
                            คุณจะได้รับอย่างชัดเจน
                            ห้ามใช้เว็บไซต์และคุณต้องหยุดใช้ทันที
                            ข้อกำหนดและเงื่อนไขเพิ่มเติมหรือเอกสารที่อาจถูกโพสต์บนเว็บไซต์เป็นครั้งคราวได้รับการระบุไว้อย่างชัดเจน
                            รวมไว้ในนี้โดยอ้างอิง
                            เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงหรือแก้ไขสิ่งเหล่านี้โดยดุลยพินิจของเราแต่เพียงผู้เดียว
                            เงื่อนไขการใช้งานตลอดเวลาและด้วยเหตุผลใดก็ตาม
                            เราจะเตือนคุณเกี่ยวกับการเปลี่ยนแปลงใด ๆ
                            โดยการอัปเดตวันที่ "อัปเดตล่าสุด"
                            ของข้อกำหนดการใช้งานเหล่านี้
                            และคุณสละสิทธิ์ที่จะได้รับแจ้งการเปลี่ยนแปลงดังกล่าวอย่างเฉพาะเจาะจง
                            โปรดตรวจสอบให้แน่ใจว่าคุณตรวจสอบ
                            เงื่อนไขที่เกี่ยวข้องทุกครั้งที่คุณใช้เว็บไซต์ของเราเพื่อให้คุณเข้าใจว่าเงื่อนไขใดที่ใช้ได้
                            คุณจะต้องอยู่ภายใต้บังคับบัญชาและจะถือว่าได้รับการแจ้งให้ทราบและยอมรับ
                            การเปลี่ยนแปลงเงื่อนไขการใช้งานที่แก้ไขโดยที่คุณดำเนินการต่อการใช้เว็บไซต์หลังจากวันที่ประกาศข้อกำหนดการใช้งานที่แก้ไขแล้วข้อมูลที่ให้ไว้ในเว็บไซต์ไม่ได้มีวัตถุประสงค์เพื่อการแจกจ่ายหรือใช้โดยบุคคลหรือหน่วยงานใด
                            ๆ ในเขตอำนาจศาลใด ๆ
                            หรือประเทศที่การแจกจ่ายหรือการใช้ดังกล่าวขัดกับกฎหมายหรือกฎระเบียบหรือที่จะทำให้เราได้รับการจดทะเบียนใด
                            ๆ ข้อกำหนดภายในเขตอำนาจหรือประเทศดังกล่าว ดังนั้น
                            บุคคลเหล่านั้นที่เลือกเข้าถึงเว็บไซต์จากผู้อื่น
                            สถานที่ดำเนินการตามความคิดริเริ่มของตนเองและมีความรับผิดชอบเพียงอย่างเดียวในการปฏิบัติตามกฎหมายท้องถิ่น
                            หากและในระดับท้องถิ่นกฎหมายมีผลบังคับใช้เว็บไซต์นี้มีไว้สำหรับผู้ใช้ที่มีอายุไม่ต่ำกว่า
                            18 ปี บุคคลที่มีอายุต่ำกว่า 18
                            ปีไม่ได้รับอนุญาตให้ใช้หรือลงทะเบียนสำหรับเว็บไซต์
                          </p>

                          <h6 class="font-semibold py-4">
                            2. สิทธิในทรัพย์สินทางปัญญา
                          </h6>
                          <p class="indent-8 text-justify">
                            เว้นแต่จะมีการระบุอย่างอื่น
                            เว็บไซต์เป็นทรัพย์สินที่เป็นกรรมสิทธิ์ของเรา
                            และซอร์สโค้ดทั้งหมด ฐานข้อมูล ฟังก์ชั่น
                            ซอฟต์แวร์การออกแบบเว็บไซต์, เสียง, วิดีโอ, ข้อความ,
                            ภาพถ่าย, และกราฟิกบนเว็บไซต์ (รวม, "เนื้อหา")
                            และเครื่องหมายการค้า,
                            เครื่องหมายบริการและโลโก้ที่มีอยู่ในนั้น
                            (เครื่องหมาย")
                            เป็นเจ้าของหรือควบคุมโดยเราหรือได้รับอนุญาตจากเรา
                            และได้รับการคุ้มครองโดยกฎหมายลิขสิทธิ์และตราสัญลักษณ์และสิทธิทรัพย์สินทางปัญญาอื่น
                            ๆ และกฎหมายการแข่งขันที่ไม่เป็นธรรมของสหประชาชาติรัฐ
                            กฎหมายลิขสิทธิ์ระหว่างประเทศ และการประชุมนานาชาติ.
                            เนื้อหาและเครื่องหมายถูกจัดเตรียมไว้บนไซต์ "ASIS"
                            สำหรับข้อมูลและการใช้งานส่วนตัวของคุณเท่านั้น
                            เว้นแต่ที่ระบุไว้อย่างชัดเจนในเงื่อนไขการใช้งานเหล่านี้
                            ไม่มีส่วนใดของเว็บไซต์และไม่สามารถคัดลอก ทำซ้ำ รวม
                            เผยแพร่ อัพโหลด โพสต์ แสดงต่อสาธารณะ รหัสแปล, ส่ง,
                            แจกจ่าย, ขาย, ใบอนุญาต,
                            หรือใช้ประโยชน์อย่างอื่นเพื่อวัตถุประสงค์ทางการค้าใด
                            ๆ ก็ตาม,
                            โดยไม่มีเราได้รับอนุญาตเป็นลายลักษณ์อักษรอย่างชัดเจน
                          </p>
                          <p class="indent-8 text-justify">
                            หากคุณมีสิทธิ์ที่จะใช้เว็บไซต์
                            คุณจะได้รับใบอนุญาตที่จำกัดในการเข้าถึงและใช้เว็บไซต์และดาวน์โหลดหรือพิมพ์สำเนาของส่วนใด
                            ๆ
                            ของเนื้อหาที่คุณได้รับสิทธิ์อย่างเหมาะสมสำหรับส่วนตัวของคุณเท่านั้น
                            ไม่ใช่ของคุณการใช้ในเชิงพาณิชย์
                            เราขอสงวนสิทธิ์ทั้งหมดที่ไม่ได้มอบให้คุณอย่างชัดเจนในเว็บไซต์
                            เนื้อหา และเครื่องหมาย
                          </p>

                          <h6 class="font-semibold py-4">
                            3. การแสดงตัวของผู้ใช้
                          </h6>
                          <p class="indent-8 text-justify">
                            ด้วยการใช้เว็บไซต์ คุณเป็นตัวแทนและรับรองว่า: (1)
                            ข้อมูลการลงทะเบียนทั้งหมดที่คุณส่งจะเป็นความจริง,
                            ถูกต้อง, และเสร็จสมบูรณ์ (2)
                            คุณจะรักษาความถูกต้องของข้อมูลดังกล่าวและอัปเดตข้อมูลการลงทะเบียนดังกล่าวอย่างรวดเร็วเช่นจำเป็น;
                            (3)
                            คุณมีความสามารถทางกฎหมายและคุณตกลงที่จะปฏิบัติตามเงื่อนไขการใช้งานเหล่านี้;
                            (4) คุณไม่ได้เป็นเยาวชนในเขตอำนาจศาลที่คุณอาศัยอยู่
                            (5)
                            คุณจะไม่เข้าถึงเว็บไซต์โดยอัตโนมัติหรือไม่ใช่มนุษย์
                            ไม่ว่าผ่านทางบอท สคริปต์ หรืออย่างอื่น; (6)
                            คุณจะไม่ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมายหรือไม่ได้รับอนุญาต;
                            และ (7)
                            การใช้เว็บไซต์ของคุณจะไม่ละเมิดกฎหมายหรือกฎระเบียบที่เกี่ยวข้อง
                          </p>
                          <p class="indent-8 text-justify">
                            หากคุณให้ข้อมูลที่ไม่จริง ไม่ถูกต้อง ไม่ใช่ปัจจุบัน
                            หรือไม่สมบูรณ์
                            เรามีสิทธิที่จะระงับหรือยุติบัญชีของคุณและปฏิเสธการใช้เว็บไซต์ในปัจจุบันหรือในอนาคตทั้งหมด
                            (หรือส่วนใดส่วนหนึ่งของเว็บไซต์)
                          </p>

                          <h6 class="font-semibold py-4">
                            4. การลงทะเบียนผู้ใช้
                          </h6>
                          <p class="indent-8 text-justify">
                            คุณอาจต้องลงทะเบียนกับเว็บไซต์
                            คุณตกลงที่จะเก็บรหัสผ่านของคุณเป็นความลับและจะรับผิดชอบการใช้บัญชีและรหัสผ่านของคุณ
                            เราขอสงวนสิทธิ์ในการลบ เรียกคืน
                            หรือเปลี่ยนชื่อผู้ใช้ที่คุณเลือกถ้าเรากำหนดโดยดุลยพินิจของเราเพียงอย่างเดียวว่าชื่อผู้ใช้ดังกล่าวไม่เหมาะสม,
                            ดูหมิ่น, หรือคัดค้านอย่างอื่น
                          </p>
                          <div class="modal-action">
                            <label for="my-modal-5" class="btn">ปิด</label>
                          </div>
                        </div>
                      </div>
                      การเป็นสมาชิก<span v-if="signType == 'worker'"
                        >ผู้สมัครงาน</span
                      ><span v-else>ผู้ประกอบการ</span>ทุกประการ
                    </span>
                    <p v-if="tickPolicy" class="text-red-600">
                      กรุณายอมรับข้อกำหนดและเงื่อนไขของ Firework
                    </p>
                  </label>

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
                    @click="$router.push('/signin')"
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
import axios from "axios";
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
      errorMail: false,
      errorSignUp: "",
      errorMessage: "",
      businesstype: [],
      subdisForm: [],
      disForm: [],
      provinceForm: [],
      ntType: [],
      errIden: false,
      chaLength: "",
      UpPic: false,
      secondPass: "",
      secPassInput: false,
      whoRegist: {},
      selectPolicy: "",
      tickPolicy: false,

      registWorker: {
        email: "",
        password: "",
        role: { idRole: 3, roleName: "ROLE_WORKER" },
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
      registEmp: {
        email: "",
        password: "",
        role: { idRole: 2, roleName: "ROLE_EMP" },
        employer: {
          establishmentName: "",
          entrepreneurfName: "",
          entrepreneurlName: "",
          address: "",
          tel: "",
          phone: "",
          email: "",
          lineId: "",
          verifyCert: null,
          businesstype: {
            idBusinessType: "",
            nameType: "",
          },
          province: {
            idProvince: "",
            provinceName: "",
          },
          district: {
            idDistrict: "",
            districtName: "",
          },
          subDistrict: {
            idSubdistrict: "",
            subDistrict: "",
            postcode: "",
          },
          nationality: {
            idnationality: 1,
            nationality_name: "",
          },
        },
      },
      bindEmail: "",
      bindPass: "",
      bindFname: "",
      bindLname: "",
      bindPhone: "",
      picture: null,
    };
  },
  methods: {
    check() {
      this.UpPic =
        this.image == require("../assets/icon/face-2.png") ? true : false;
      this.emailInput = this.bindEmail === "" ? true : false;
      this.passwordInput =
        this.bindPass === "" || this.bindPass.length < 8 ? true : false;
      this.secPassInput =
        this.secondPass === "" || this.secondPass !== this.bindPass;
      this.estnameInput =
        this.registEmp.employer.establishmentName === "" ? true : false;
      this.workerTypeInput =
        this.registWorker.worker.workerType.idWorkerType === "" ? true : false;
      this.businessTypeInput =
        this.registEmp.employer.businesstype.idBusinessType === ""
          ? true
          : false;
      this.idenNoInput =
        this.registWorker.worker.identificationNumber === "" ? true : false;
      this.nationInput =
        this.registWorker.worker.nationality.idnationality === ""
          ? true
          : false;
      this.firstnameInput = this.bindFname === "" ? true : false;
      // this.middlenameInput = this.registWorker.worker.middleName === "" ? true : false;
      this.lastnameInput = this.bindLname === "" ? true : false;
      this.addressInput = this.registEmp.employer.address === "" ? true : false;
      this.subdisInput =
        this.registEmp.employer.subDistrict.idSubdistrict === "" ? true : false;
      this.districtInput =
        this.registEmp.employer.district.idDistrict === "" ? true : false;
      this.provinceInput =
        this.registEmp.employer.province.idProvince === "" ? true : false;
      this.postCodeInput =
        this.registEmp.employer.subDistrict.postcode === "" ||
        this.registEmp.employer.subDistrict.postcode.length != 5
          ? true
          : false;
      this.sexInput = this.registWorker.worker.sex === "" ? true : false;
      this.phoneInput =
        (this.bindPhone === "" || this.bindPhone !== "") &&
        this.bindPhone.length !== 10
          ? true
          : false;
      this.tickPolicy = this.selectPolicy === "" ? true : false;
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
      } else if (this.registWorker.worker.nationality.idnationality == 4) {
        console.log("Cambodia");
        this.middlenameInput = false;
      } else {
        console.log("this.nationInput = false;");
        this.nationInput = false;
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
          'กรุณากรอกเลขหนังสือเดินทางให้ถูกต้องตามหลักเช่น "A11111" ';
      }
    },
    whenselectNation(type) {
      if (type == "migrant") {
        this.chaLength = 6;
      } else {
        this.chaLength = 13;
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
      console.log(this.selectPolicy);
      // console.log(this.registWorker.worker.sex)
      this.showError = false;
      this.errIden = false;
      this.checkIdenAndPass();
      this.check();
      this.checknation();
      if (
        this.signType == "worker" &&
        !this.UpPic &&
        !this.emailInput &&
        !this.passwordInput &&
        !this.secPassInput &&
        !this.workerTypeInput &&
        !this.idenNoInput &&
        !this.nationInput &&
        !this.firstnameInput &&
        !this.sexInput &&
        !this.phoneInput &&
        !this.tickPolicy
      ) {
        this.registWorker.email = this.bindEmail;
        this.registWorker.password = this.bindPass;
        this.registWorker.worker.firstName = this.bindFname;
        this.registWorker.worker.lastName = this.bindLname;
        this.registWorker.worker.phone = this.bindPhone;

        if (
          this.registWorker.worker.middleName == "" ||
          this.registWorker.worker.lastName == ""
        ) {
          this.registWorker.worker.middleName = "-";
          this.registWorker.worker.lastName = "-";
        }

        this.whoRegist = this.registWorker;
        console.log(this.whoRegist);
        this.signUpAxios();
      }
      if (
        this.signType == "employer" &&
        !this.UpPic &&
        !this.emailInput &&
        !this.passwordInput &&
        !this.secPassInput &&
        !this.estnameInput &&
        !this.businessTypeInput &&
        !this.firstnameInput &&
        !this.lastnameInput &&
        !this.addressInput &&
        !this.subdisInput &&
        !this.districtInput &&
        !this.provinceInput &&
        !this.postCodeInput &&
        !this.phoneInput &&
        !this.tickPolicy
      ) {
        this.registEmp.email = this.bindEmail;
        this.registEmp.password = this.bindPass;
        this.registEmp.employer.entrepreneurfName = this.bindFname;
        this.registEmp.employer.entrepreneurlName = this.bindLname;
        this.registEmp.employer.phone = this.bindPhone;

        this.whoRegist = this.registEmp;
        console.log(this.whoRegist);
        this.signUpAxios();
      }
    },
    async signUpAxios() {
      console.log("signup");
      let errorResponse;
      await axios
        .post(`${process.env.VUE_APP_ROOT_API}main/register`, this.whoRegist)
        .then(function (response) {
          console.log(response);
          this.errIden = false;
          alert("Finish Sign up");
          this.clear();
          this.$router.push("/signin");
        })
        .catch(function (error) {
          errorResponse = error.response.data.errorCode;
        });
      console.log("errorResponse = " + errorResponse);
      if (errorResponse == "ACCOUNT_EMAIL_HAVE_ALREADY") {
        this.errIden = false;
        this.errorMail = true;
        this.errorMessage = "อีเมลนี้ถูกใช้แล้ว";
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
        this.picture = this.imgFile.name;

        if (this.signType == "worker") {
          this.registWorker.worker.verifyPic = this.picture;
          console.log(this.registWorker.worker.verifyPic);
        }
        if (this.signType == "employer") {
          this.registEmp.employer.verifyCert = this.picture;
          console.log(this.registEmp.employer.verifyCert);
        }
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
    clearIdenNum() {
      this.registWorker.worker.identificationNumber = "";
    },
    clear() {
      (this.registWorker = {
        email: "",
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
      }),
        (this.registEmp = {
          email: "",
          password: "",
          role: { idRole: 2, roleName: "ROLE_EMP" },
          employer: {
            establishmentName: "",
            entrepreneurfName: "",
            entrepreneurlName: "",
            address: "",
            tel: "",
            phone: "",
            email: "",
            lineId: "",
            verifyCert: null,
            businesstype: {
              idBusinessType: "",
              nameType: "",
            },
            province: {
              idProvince: "",
              provinceName: "",
            },
            district: {
              idDistrict: "",
              districtName: "",
            },
            subDistrict: {
              idSubdistrict: "",
              subDistrict: "",
              postcode: "",
            },
            nationality: {
              idnationality: "",
              nationality_name: "",
            },
          },
        });
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
    onFocus(t) {
      console.log(t);
      if (t == "อีเมล") {
        this.emailInput = false;
      } else if (t == "ประเภทแรงงาน") {
        this.workerTypeInput = false;
      } else if (t == "รหัสผ่าน") {
        this.passwordInput = false;
      } else if (t == "เลข") {
        this.idenNoInput = false;
        this.errIden = false;
      } else if (t == "ชื่อจริง") {
        this.firstnameInput = false;
      } else if (t == "ชื่อกลาง") {
        this.middlenameInput = false;
      } else if (t == "นามสกุล") {
        this.lastnameInput = false;
      } else if (t == "เพศ") {
        this.sexInput = false;
      } else if (t == "เบอร์") {
        this.phoneInput = false;
      } else {
        console.log("nothing");
      }
    },
    checkMail() {
      this.emailInput = false;
      this.showError = !this.validateEmail(this.bindEmail);
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
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      this.$router.push("/approve");
    } else if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      this.$router.push("/posting");
    } else {
      if (
        this.$store.state.auth.user &&
        this.$store.state.auth.user.role.idRole == "3"
      ) {
        this.$router.push("/");
      } else {
        this.businesstype = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allBusinesstype`
        );
        this.provinceForm = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allProvince`
        );
        this.ntType = await this.fetch(
          `${process.env.VUE_APP_ROOT_API}main/allNationality`
        );
      }
    }
  },
};
</script>