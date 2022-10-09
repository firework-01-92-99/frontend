<template>
  <div class="bg-gray-2 h-full font-sans-thai">
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
      สร้างประกาศรับสมัครงาน
    </p>
    <div class="flex flex-col w-full lg:w-1/2 p-4">
      <div class="flex flex-col flex-1 justify-center mb-8">
        <div class="w-full mt-10">
          <form class="form-horizontal w-3/4 mx-auto">
            <div class="2xl:flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-sm 2xl:text-base font-medium px-1"
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
                    placeholder="ตำแหน่ง"
                  />
                  <p v-if="emailInput" class="text-red-600">กรุณากรอกตำแหน่ง</p>
                  <p v-if="showError || errorMail" class="text-red-600">
                    {{ errorMessage }}
                  </p>
                </div>
              </div>
            </div>

            <div class="2xl:flex 2xl:-mx-3">
              <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                <label for="" class="text-sm 2xl:text-base font-medium px-1"
                  >เงินเดือน</label
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
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
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
                      focus:border-indigo-500
                    "
                    :class="{ 'bg-red-50': addressInput }"
                    placeholder="รายละเอียดงาน"
                  />
                </div>
                <p v-if="addressInput" class="text-red-600">กรุณากรอกที่อยู่</p>
              </div>
            </div>

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

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-base font-medium px-1"
                  >สวัสดิการ</label
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
                      class="mdi mdi-account-outline text-gray-400 text-lg"
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
                      focus:border-indigo-500
                    "
                    :class="{ 'bg-red-50': addressInput }"
                    placeholder="รายละเอียดสวัสดิการ"
                  />
                </div>
                <p v-if="addressInput" class="text-red-600">
                  กรุณากรอกสวัสดิการ
                </p>
              </div>
            </div>

            <div class="flex space-x-5 justify-between">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {





async created() {
  if(this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == "2"){
    console.log("หน้าAdd Posting")

  }else {
    this.$router.push('/')  
    }
  },  
};
</script>

<style>
</style>