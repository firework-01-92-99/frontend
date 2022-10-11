<template>
  <div>
    <div>
      <!-- toast -->
      <transition name="toast">
        <div v-if="showToast" class="flex justify-center">
          <div
            class="absolute z-10 2xl:w-2/5 w-full alert alert-success shadow-lg"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="font-sans-thai">
                ทำการสมัครเรียบร้อยแล้ว ติดตามความคืบหน้าได้ที่<span
                  class="font-medium"
                  >เมนู "สถานะการสมัครงาน"</span
                >
              </p>
            </div>
          </div>
        </div>
      </transition>
      <!-- <router-link to="/findJob"> -->
      <!-- back btn -->
      <div>
        <button
          @click="$router.push('/posting')"
          class="btn btn-ghost font-sans-thai flex justify-start ml-2.5"
        >
          <i class="material-icons"> arrow_back_ios </i>ประกาศหางาน
        </button>
      </div>
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
          font-sans-thai
        "
      >
        สร้างประกาศรับสมัครงาน
      </p>
      <!-- </router-link> -->
    </div>
    <!-- card header -->
    <form>
      <div class="mx-auto card 2xl:card-side bg-base-100 font-sans-thai w-full">
        <figure class="2xl:w-1/4">
          <img
            class="2xl:h-full w-full"
            src="https://i.ytimg.com/vi/J_oT9erINxA/maxresdefault.jpg"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <!-- <h2 class="card-title text-orange-1">position</h2> -->
          <div class="2xl:flex 2xl:-mx-3">
            <div class="w-full 2xl:px-3 mb-5">
              <label
                for=""
                class="2xl:text-base md:text-base text-sm font-medium px-1"
                >ตำแหน่ง</label
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
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
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
                  placeholder="ตำแหน่ง"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
              <p v-if="emailInput" class="text-red-600">กรุณากรอกอีเมลของคุณ</p>
              <p v-if="showError || errorMail" class="text-red-600">
                {{ errorMessage }}
              </p>
            </div>
          </div>
          <h2 class="card-title">
            <!-- {{ employer.establishmentName }} -->
            establishmentName
          </h2>
          <p class="font-medium">
            <span class="inline-block align-middle"
              ><i class="material-icons pr-2"> place </i></span
            >
            <span class="inline-block align-middle">
              <!-- {{
            employer.address +
            " " +
            employer.subDistrict.subDistrict +
            " " +
            employer.district.districtName +
            " " +
            employer.province.provinceName +
            " " +
            employer.subDistrict.postcode
          }} -->
              address
            </span>
          </p>
          <p class="font-medium">
            <span class="inline-block align-middle"
              ><i class="material-icons pr-2"> paid </i></span
            >
            <span class="inline-block align-middle">
              <!-- {{
              jobDetail.minSalary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            -
            {{
              jobDetail.maxSalary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }} -->
              <div class="2xl:flex 2xl:-mx-3">
                <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                  <label
                    for=""
                    class="text-sm 2xl:text-base font-medium px-1"
                  ></label>
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
                        placeholder:font-normal
                      "
                      placeholder="เงินเดือนน้อยที่สุด"
                    />
                    <p v-if="emailInput" class="text-red-600">
                      กรุณากรอกเงินเดือนน้อยที่สุด
                    </p>
                    <p v-if="showError || errorMail" class="text-red-600">
                      {{ errorMessage }}
                    </p>
                  </div>
                </div>
                <span class="pt-9 pr-1">-</span>
                <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                  <label
                    for=""
                    class="text-sm 2xl:text-base font-medium px-1"
                  ></label>
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
                        placeholder:font-normal
                      "
                      placeholder="เงินเดือนมากที่สุด"
                    /><span class="pl-2 py-2">บาท</span>
                    <p v-if="emailInput" class="text-red-600">
                      กรุณากรอกเงินเดือนมากที่สุด
                    </p>
                    <p v-if="showError || errorMail" class="text-red-600">
                      {{ errorMessage }}
                    </p>
                  </div>
                </div>
              </div>
            </span>
          </p>
          <p class="font-medium">
            <span class="inline-block align-middle"
              ><i class="material-icons pr-2"> call </i></span
            >
            <span class="inline-block align-middle">
              <!-- {{ employer.phone }} -->
              phone
            </span>
          </p>
          <p class="font-medium">
            <span class="inline-block align-middle"
              ><i class="material-icons pr-2"> email </i></span
            >
            <span class="inline-block align-middle">
              <!-- {{ employer.email }} -->
              email
            </span>
          </p>
        </div>
      </div>
      <!-- card description -->
      <div class="mx-auto flex flex-col w-full font-sans-thai mt-5">
        <!-- <div v-if="openForm"><base-application></base-application></div> -->
        <div
          class="card card-side bg-base-100 p-6 grid h-full place-items-start"
        >
          <!-- <p> -->
          <!-- <span class="font-semibold">แรงงานที่รับ: </span> -->
          <!-- {{ workerType[jobDetail.workerType.typeName] }} -->
          <!-- workerType -->
          <div class="w-full px-3 mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >แรงงานที่รับ</label
            >
            <div class="flex 2xl:space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer 2xl:space-x-2">
                  <input
                    type="radio"
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
              <div class="form-control">
                <label class="label cursor-pointer 2xl:space-x-2">
                  <input
                    type="radio"
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
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">เพศ: </span> -->
          <!-- {{ sex[jobDetail.sex] }} -->
          <!-- sex -->
          <div class="w-1/2 px-3 mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >เพศ</label
            >
            <div class="flex space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-blue-500"
                    :class="{ 'bg-red-50': sexInput }"
                    value="M"
                  />
                  <span class="label-text">ชาย</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-red-500"
                    :class="{ 'bg-red-50': sexInput }"
                    value="F"
                  />
                  <span class="label-text">หญิง</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-red-500"
                    :class="{ 'bg-red-50': sexInput }"
                    value="A"
                  />
                  <span class="label-text">ทั้งหมด</span>
                </label>
              </div>
            </div>
            <p v-if="sexInput" class="text-red-600">กรุณาเลือกเพศ</p>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">อายุ: </span> -->
          <!-- {{ jobDetail.minAge }} -
          {{ jobDetail.maxAge }}  -->
          <!-- ปี -->
          <div class="2xl:flex 2xl:-mx-3">
            <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
              <label for="" class="text-sm 2xl:text-base font-medium px-1"
                >อายุ</label
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
                  "
                  placeholder="อายุน้อยที่สุด"
                />
                <p v-if="emailInput" class="text-red-600">
                  กรุณากรอกอายุน้อยที่สุด
                </p>
                <p v-if="showError || errorMail" class="text-red-600">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
            <span class="pt-9">-</span>
            <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
              <label
                for=""
                class="text-sm 2xl:text-base font-medium px-1"
              ></label>
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
                  "
                  placeholder="อายุมากที่สุด"
                /><span class="pl-2 py-2">ปี</span>
                <p v-if="emailInput" class="text-red-600">
                  กรุณากรอกอายุมากที่สุด
                </p>
                <p v-if="showError || errorMail" class="text-red-600">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">เวลาทำงาน: </span> -->
          <!-- {{ jobDetail.startTime }} - {{ jobDetail.endTime }}  -->
          <!-- น. -->
          <div class="2xl:flex 2xl:-mx-3">
            <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
              <label for="" class="text-sm 2xl:text-base font-medium px-1"
                >เวลาทำงาน</label
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
                  "
                  placeholder="เวลาเริ่มงาน เช่น 9:00"
                />
                <p v-if="emailInput" class="text-red-600">
                  กรุณากรอกเวลาเริ่มงาน
                </p>
                <p v-if="showError || errorMail" class="text-red-600">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
            <span class="pt-9">-</span>
            <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
              <label
                for=""
                class="text-sm 2xl:text-base font-medium px-1"
              ></label>
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
                  "
                  placeholder="เวลาเลิกงาน เช่น 18:00"
                /><span class="pl-2 py-2">น.</span>
                <p v-if="emailInput" class="text-red-600">
                  กรุณากรอกเวลาเลิกงาน
                </p>
                <p v-if="showError || errorMail" class="text-red-600">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">วันทำงาน: </span> -->
          <!-- <span> -->
          <!-- {{ day.day.abbreviation + "" }} -->
          <!-- . -->
          <div class="w-1/2 px-3 mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >วันทำงาน</label
            >
            <div class="flex space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-sm"
                  />
                  <span class="label-text">วันลูปปปป</span>
                </label>
              </div>
              <!-- <div class="form-control">
                  <label class="label cursor-pointer space-x-2">
                    <input
                      type="radio"
                      name="radio-6"
                      class="radio checked:bg-red-500"
                      :class="{ 'bg-red-50': sexInput }"
                      value="F"
                    />
                    <span class="label-text">หญิง</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer space-x-2">
                    <input
                      type="radio"
                      name="radio-6"
                      class="radio checked:bg-red-500"
                      :class="{ 'bg-red-50': sexInput }"
                      value="A"
                    />
                    <span class="label-text">ทั้งหมด</span>
                  </label>
                </div> -->
            </div>
            <p v-if="sexInput" class="text-red-600">กรุณาเลือกวันทำงาน</p>
          </div>
          <!-- </span> -->
          <!-- </p> -->

          <!-- <div> -->
          <!-- <span class="font-semibold">รายละเอียดงาน: </span> -->
          <!-- <p class="ml-10" v-html="jobDetail.workDescription"></p> -->
          <!-- </div> -->

          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-base font-medium px-1"
                >รายละเอียดงาน</label
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
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
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
                    focus:border-indigo-500
                  "
                  :class="{ 'bg-red-50': addressInput }"
                  placeholder="รายละเอียดงาน"
                />
              </div>
              <p v-if="addressInput" class="text-red-600">กรุณากรอกที่อยู่</p>
            </div>
          </div>

          <!-- <p> -->
          <!-- <span class="font-semibold">รูปแบบงาน: </span> -->
          <!-- {{ jobDetail.hiringType.nameType }} -->
          <!-- hiringType -->
          <div class="w-1/2 px-3 mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >รูปแบบงาน</label
            >
            <div class="flex space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-blue-500"
                    :class="{ 'bg-red-50': sexInput }"
                    value="M"
                  />
                  <span class="label-text">พาร์ทไทม์ลูปปป</span>
                </label>
              </div>
              <!-- <div class="form-control">
                  <label class="label cursor-pointer space-x-2">
                    <input
                      type="radio"
                      name="radio-6"
                      class="radio checked:bg-red-500"
                      :class="{ 'bg-red-50': sexInput }"
                      value="F"
                    />
                    <span class="label-text">หญิง</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer space-x-2">
                    <input
                      type="radio"
                      name="radio-6"
                      class="radio checked:bg-red-500"
                      :class="{ 'bg-red-50': sexInput }"
                      value="A"
                    />
                    <span class="label-text">ทั้งหมด</span>
                  </label>
                </div> -->
            </div>
            <p v-if="sexInput" class="text-red-600">กรุณาเลือกรูปแบบงาน</p>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">ค่าล่วงเวลา: </span> -->
          <!-- {{ ot[jobDetail.overtimePayment] }} -->
          <!-- overtimePayment -->
          <div class="w-1/2 px-3 mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >ค่าล่วงเวลา</label
            >
            <div class="flex space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-blue-500"
                    :class="{ 'bg-red-50': sexInput }"
                    value="M"
                  />
                  <span class="label-text">มี</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-red-500"
                    :class="{ 'bg-red-50': sexInput }"
                    value="F"
                  />
                  <span class="label-text">ไม่มี</span>
                </label>
              </div>
            </div>
            <p v-if="sexInput" class="text-red-600">กรุณาเลือกค่าล่วงเวลา</p>
          </div>
          <!-- </p> -->

          <!-- <div> -->
          <!-- <span class="font-semibold">สวัสดิการ: </span> -->
          <!-- <p class="ml-10" v-html="jobDetail.welfare"></p> -->
          <!-- </div> -->

          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-base font-medium px-1">สวัสดิการ</label>
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
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
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
                    focus:border-indigo-500
                  "
                  :class="{ 'bg-red-50': addressInput }"
                  placeholder="รายละเอียดสวัสดิการ"
                />
              </div>
              <p v-if="addressInput" class="text-red-600">กรุณากรอกสวัสดิการ</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-5 justify-between font-sans-thai">
        <button
          type="submit"
          class="
            btn
            border-orange-1
            bg-orange-1
            hover:bg-orange-2 hover:border-orange-2
            w-2/5
            -mt-16
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            2xl:text-base
            md:text-xs
          "
        >
          สร้าง
        </button>

        <button
        @click="$router.push('/posting')"
          class="
            btn btn-ghost
            w-2/5
            -mt-7
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
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>