<template>
  <div class="bg-gray-2 font-sans-thai">
    <div>
      <!-- toast -->
      <transition name="toast">
        <div v-if="showToast" class="flex justify-center">
          <div
            class="absolute z-10 2xl:w-2/5 w-full alert bg-cyan-200 shadow-lg"
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
                กรุณาตรวจสอบความถูกต้องของข้อมูลก่อนสร้างประกาศรับสมัคร
                เมื่อสร้างประกาศรับสมัครแล้วจะไม่สามารถแก้ไขข้อมูลได้
                ยืนยันที่จะสร้างประกาศรับสมัครหรือไม่
                <!-- <span
                  class="font-medium"
                  >เมนู "ประกาศรับสมัครงาน"</span
                > -->
              </p>
            </div>
            <div class="flex-none">
              <button @click="showToast = false" class="btn btn-sm btn-ghost">
                ยกเลิก
              </button>
              <button
                @click.prevent="createPost(), (showToast = false)"
                class="btn btn-sm btn-primary"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- toast -->
      <transition name="toast">
        <div v-if="createComplete" class="flex justify-center">
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
                สร้างประกาศรับสมัครงานเรียบร้อยแล้ว
                <!-- สามารถดูได้ที่<span
                  class="font-medium"
                  >เมนู "ประกาศรับสมัครงาน"</span
                > -->
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
          <i class="material-icons"> arrow_back_ios </i>ประกาศรับสมัครงาน
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
          2xl:ml-0
          md:ml-1
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
      <div class="mx-auto card 2xl:card-side xl:card-side lg:card-side md:card-side bg-base-100 font-sans-thai w-full rounded-lg">
        <figure class="2xl:w-1/4">
          <img
            class="object-cover 2xl:w-96 xl:w-96 lg:w-80 md:w-60 w-96 2xl:h-72 xl:h-72 lg:h-72 md:h-96 h-48"
            :src="image"
          />
        </figure>
        <div class="card-body">
          <!-- <h2 class="card-title text-orange-1">position</h2> -->

          <div class="2xl:flex 2xl:-mx-3">
            <div class="w-full 2xl:px-3 mb-5">
              <label
                for=""
                class="2xl:text-base md:text-base text-sm font-medium px-1"
                >กรุณาเลือกตำแหน่ง</label
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
                <!-- <input
                  type="text"
                  v-model.trim="postInfo.position.positionName"
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
                  :class="[{ 'bg-red-50': positionInput }]"
                  placeholder="ชื่อตำแหน่ง"
                  required
                /> -->
                <select
                  type="text"
                  v-model.trim="postInfo.position.idposition"
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
                  :class="{ 'bg-red-50': positionInput }"
                >
                  <option :value="''" disabled selected>
                    กรุณาเลือกตำแหน่งงาน
                  </option>
                  <option
                    class="text-black"
                    v-for="pa in positionArray"
                    :key="pa.idposition"
                    :value="pa.idposition"
                  >
                    {{ pa.positionName }}
                  </option>
                </select>
              </div>
              <p v-if="positionInput" class="text-sm text-red-600">
                กรุณากรอกชื่อตำแหน่ง
              </p>
            </div>
          </div>
          <h2 class="card-title">
            {{ this.$store.state.auth.user.employer.establishmentName }}
          </h2>
          <p class="">
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
              {{
                this.$store.state.auth.user.employer.address +
                " " +
                this.$store.state.auth.user.employer.subDistrict.subDistrict +
                " " +
                this.$store.state.auth.user.employer.district.districtName +
                " " +
                this.$store.state.auth.user.employer.province.provinceName +
                " " +
                this.$store.state.auth.user.employer.subDistrict.postcode
              }}
            </span>
          </p>
          <p class="">
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
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-5">
                  <label
                    for=""
                    class="text-sm 2xl:text-base font-medium px-1"
                  ></label>
                  <div class="">
                    <!-- <div
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
                    ></div> -->
                    <div class="flex flex-col">
                      <div class="ml-10 flex flex-row w-full">
                        <input
                          type="tel"
                          @change="salaryType()"
                          v-model.trim="postInfo.minSalary"
                          maxlength="5"
                          class="
                            2xl:w-full
                            md:w-full
                            w-5/6
                            -ml-10
                            pl-5
                            pr-3
                            py-2
                            rounded-lg
                            border-2 border-gray-200
                            outline-none
                            placeholder:font-normal
                            focus:border-indigo-500
                          "
                          :class="{ 'bg-red-50': minSalaryInput }"
                          placeholder="กรอกเงินเดือนที่ต่ำที่สุด"
                          onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        />
                      </div>
                      <div class="justify-start">
                        <p
                          v-if="minSalaryAlert"
                          class="text-sm font-normal text-red-600"
                        >
                          เงินขั้นต่ำต้องไม่ต่ำกว่า 300 บาท
                        </p>
                        <p
                          v-if="minMoreThanMax"
                          class="text-sm font-normal text-red-600"
                        >
                          เงินขั้นต่ำต้องน้อยกว่าเงินที่มากสุด
                        </p>
                        <p
                          v-if="minSalaryInput"
                          class="text-sm font-normal text-red-600"
                        >
                          กรุณากรอกเงินเดือนที่ต่ำที่สุด
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="pt-9 2xl:pr-1 md:pr-1 2xl:-ml-0 md:-ml-0 -ml-7"
                  >-</span
                >
                <div class="w-1/2 px-3 mb-5">
                  <label
                    for=""
                    class="text-sm 2xl:text-base font-medium px-1"
                  ></label>
                  <div class="flex">
                    <!-- <div
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
                    ></div> -->
                    <div class="flex flex-col">
                      <div class="ml-10 w-full flex flex-row">
                        <input
                          type="tel"
                          @change="salaryType()"
                          v-model.trim="postInfo.maxSalary"
                          maxlength="5"
                          class="
                            2xl:w-full
                            md:w-full
                            w-5/6
                            -ml-10
                            pl-5
                            pr-3
                            py-2
                            rounded-lg
                            border-2 border-gray-200
                            outline-none
                            placeholder:font-normal
                            focus:border-indigo-500
                          "
                          :class="{ 'bg-red-50': maxSalaryInput }"
                          placeholder="กรอกเงินเดือนที่มากที่สุด"
                          onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        /><span class="pl-2 py-2">บาท</span>
                      </div>
                      <div>
                        <p
                          v-if="maxWrong"
                          class="font-normal text-sm text-red-600"
                        >
                          กรุณากรอกเงินเดือนที่มากสุดให้มากกว่าเงินเดือนที่ต่ำสุด
                        </p>
                        <p
                          v-if="maxSalaryInput"
                          class="text-sm font-normal text-red-600"
                        >
                          กรุณากรอกเงินเดือนที่มากสุด
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </p>
          <p class="">
            <span class="inline-block align-middle"
              ><i class="material-icons pr-2"> call </i></span
            >
            <span class="inline-block align-middle">
              {{ this.$store.state.auth.user.employer.phone }}
            </span>
          </p>
          <p class="">
            <span class="inline-block align-middle"
              ><i class="material-icons pr-2"> email </i></span
            >
            <span class="inline-block align-middle">
              {{ this.$store.state.auth.user.employer.email }}
            </span>
          </p>
        </div>
      </div>
      <!-- card description -->
      <div class="mx-auto flex flex-col w-full font-sans-thai mt-5">
        <!-- <div v-if="openForm"><base-application></base-application></div> -->
        <div
          class="
            rounded-lg
            card card-side
            bg-base-100
            p-6
            grid
            h-full
            place-items-start
          "
        >
          <!-- <p> -->
          <!-- <span class="font-semibold">แรงงานที่รับ: </span> -->
          <!-- {{ workerType[jobDetail.workerType.typeName] }} -->
          <!-- workerType -->
          <div class="w-full mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >แรงงานที่รับ</label
            >
            <div class="flex flex-col sm:flex-row 2xl:space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer 2xl:space-x-2">
                  <input
                    type="radio"
                    v-model="postInfo.workerType.idWorkerType"
                    name="radio-5"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': workerTypeInput }"
                    value="1"
                  />
                  <span
                    class="
                      label-text
                      2xl:pr-0
                      md:pl-2 md:pr-4
                      pr-48
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >แรงงานต่างด้าว</span
                  >
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer 2xl:space-x-2">
                  <input
                    type="radio"
                    v-model="postInfo.workerType.idWorkerType"
                    name="radio-5"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': workerTypeInput }"
                    value="2"
                  />
                  <span
                    class="
                      label-text
                      2xl:pr-0
                      md:pl-2 md:pr-4
                      pr-52
                      mr-2.5
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >แรงงานไทย</span
                  >
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer 2xl:space-x-2">
                  <input
                    type="radio"
                    v-model="postInfo.workerType.idWorkerType"
                    name="radio-5"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': workerTypeInput }"
                    value="3"
                  />
                  <span
                    class="
                      label-text
                      2xl:pr-0
                      md:pl-2 md:pr-4
                      pr-36
                      mr-1
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >แรงงานไทยและต่างด้าว</span
                  >
                </label>
              </div>
            </div>
            <p v-if="workerTypeInput" class="text-sm text-red-600">
              กรุณาเลือกประเภทแรงงาน
            </p>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">เพศ: </span> -->
          <!-- {{ sex[jobDetail.sex] }} -->
          <!-- sex -->
          <div class="w-1/2 mb-5">
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
                    v-model.trim="postInfo.sex"
                    name="radio-6"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': sexInput }"
                    value="M"
                  />
                  <span
                    class="
                      label-text
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >ชาย</span
                  >
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    v-model.trim="postInfo.sex"
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': sexInput }"
                    value="F"
                  />
                  <span
                    class="
                      label-text
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >หญิง</span
                  >
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    v-model.trim="postInfo.sex"
                    type="radio"
                    name="radio-6"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': sexInput }"
                    value="A"
                  />
                  <span
                    class="
                      label-text
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >ทั้งหมด</span
                  >
                </label>
              </div>
            </div>
            <p v-if="sexInput" class="text-sm text-red-600">กรุณาเลือกเพศ</p>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">อายุ: </span> -->
          <!-- {{ jobDetail.minAge }} -
          {{ jobDetail.maxAge }}  -->
          <!-- ปี -->
          <div class="flex -mx-3">
            <div class="w-1/2 px-3 mb-5">
              <label for="" class="text-sm 2xl:text-base font-medium px-1"
                >อายุ</label
              >
              <div class="">
                <!-- <div
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
                ></div> -->
                <div class="flex flex-col">
                  <div class="ml-10 w-full flex flex-row">
                    <input
                      type="number"
                      min="18"
                      @change="ifChangeAge(postInfo.minAge)"
                      v-model.trim="postInfo.minAge"
                      class="
                        2xl:w-full
                        md:w-full
                        w-4/6
                        -ml-10
                        pl-5
                        pr-3
                        py-2
                        rounded-lg
                        border-2 border-gray-200
                        outline-none
                        focus:border-indigo-500
                      "
                      :class="{ 'bg-red-50': minAgeInput }"
                      placeholder="อายุขั้นต่ำ"
                    />
                  </div>
                  <div>
                    <p v-if="minAgeInput" class="text-sm text-red-600">
                      กรุณากรอกอายุขั้นต่ำและอายุต้องไม่ต่ำกว่า 18 ปี
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span class="pt-9 2xl:pr-1 md:pr-1 2xl:-ml-0 md:-ml-0 -ml-14"
              >-</span
            >
            <div class="w-1/2 px-3 mb-5">
              <label
                for=""
                class="text-sm 2xl:text-base font-medium px-1"
              ></label>
              <div class="flex">
                <!-- <div
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
                ></div> -->
                <div class="flex flex-col">
                  <div class="ml-10 w-full flex flex-row">
                    <input
                      type="number"
                      max="60"
                      @change="ifChangeAge(postInfo.maxAge)"
                      v-model.trim="postInfo.maxAge"
                      class="
                        2xl:w-full
                        md:w-full
                        w-4/6
                        -ml-10
                        pl-5
                        pr-3
                        py-2
                        rounded-lg
                        border-2 border-gray-200
                        outline-none
                        focus:border-indigo-500
                      "
                      :class="{ 'bg-red-50': maxAgeInput }"
                      placeholder="อายุมากที่สุด"
                    /><span class="pl-2 py-2">ปี</span>
                  </div>
                  <div>
                    <p v-if="maxAgeInput" class="text-sm text-red-600">
                      กรุณากรอกอายุขั้นต่ำและอายุต้องไม่มากกว่า 60 ปี
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">เวลาทำงาน: </span> -->
          <!-- {{ jobDetail.startTime }} - {{ jobDetail.endTime }}  -->
          <!-- น. -->
          <div class="flex -mx-3">
            <div class="w-1/2 px-3 mb-5">
              <label for="" class="text-sm 2xl:text-base font-medium px-1"
                >เวลาทำงาน</label
              >
              <div class="flex">
                <!-- <div
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
                ></div> -->
                <div class="flex flex-col">
                  <div class="ml-10 flex flex-row w-full">
                    <!-- <input
                  type="time"
                  v-model.trim="postInfo.startTime"
                  class="
                    2xl:w-full
                    md:w-full
                    w-4/6
                    -ml-10
                    pl-5
                    pr-3
                    py-2
                    rounded-lg
                    border-2 border-gray-200
                    outline-none
                    focus:border-indigo-500
                  "
                  :class="{ 'bg-red-50': startTimeInput }"
                  placeholder="เวลาเริ่มงาน เช่น 9:00"
                  min="09:00" required
                  /> -->
                    <input
                      type="text"
                      v-model.trim="postInfo.startTime"
                      class="
                        2xl:w-full
                        md:w-full
                        w-4/6
                        -ml-10
                        pl-5
                        pr-3
                        py-2
                        rounded-lg
                        border-2 border-gray-200
                        outline-none
                        focus:border-indigo-500
                      "
                      :class="{ 'bg-red-50': startTimeInput }"
                      placeholder="เวลาเริ่มงาน เช่น 9:00"
                    />
                  </div>
                  <div class="justify-start w-10/12">
                    <p v-if="startTimeInput" class="text-sm text-red-600">
                      กรุณากรอกเวลาเริ่มงาน
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span class="pt-9 2xl:pr-1 md:pr-1 2xl:-ml-0 md:-ml-0 -ml-14"
              >-</span
            >
            <div class="w-1/2 px-3 mb-5">
              <label class="text-sm 2xl:text-base font-medium px-1"></label>
              <div class="flex">
                <!-- <div
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
                ></div> -->
                <div class="flex flex-col">
                  <div class="ml-10 w-full flex flex-row">
                    <!-- <input
                  type="time"
                  v-model.trim="postInfo.endTime"
                  class="
                    2xl:w-full
                    md:w-full
                    w-4/6
                    -ml-10
                    pl-5
                    pr-3
                    py-2
                    rounded-lg
                    border-2 border-gray-200
                    outline-none
                    focus:border-indigo-500
                  "
                  :class="{ 'bg-red-50': endTimeInput }"
                  placeholder="เวลาเลิกงาน เช่น 18:00"
                  max="24:00" required
                  /> -->
                    <input
                      type="text"
                      v-model.trim="postInfo.endTime"
                      class="
                        2xl:w-full
                        md:w-full
                        w-4/6
                        -ml-10
                        pl-5
                        pr-3
                        py-2
                        rounded-lg
                        border-2 border-gray-200
                        outline-none
                        focus:border-indigo-500
                      "
                      :class="{ 'bg-red-50': endTimeInput }"
                      placeholder="เวลาเลิกงาน เช่น 18:00"
                    />
                    <span class="pl-2 py-2">น.</span>
                  </div>
                  <div>
                    <p v-if="endTimeInput" class="text-sm text-red-600">
                      กรุณากรอกเวลาเลิกงาน
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="w-1/2 px-3 mb-5">
            <label
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >วันทำงาน</label
>
            <div class="flex space-x-5">
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    v-for="pd in sevenDay" :key="pd.idDay"
                    :value="pd"
                    type="checkbox"
                    v-model="postInfo.postingHasDayList.day"
                    checked="checked"
                    class="checkbox checkbox-sm"
                    :class="{ 'bg-red-50': postingHasDayListInput }"
                  />
                  <span class="label-text">{{pd.dayName}}</span>
                </label>
              </div>
            </div>
            <p v-if="postingHasDayListInput" class="text-red-600">กรุณาเลือกวันทำงาน</p>
          </div> -->
          <div class="w-full mb-5">
            <label class="2xl:text-base md:text-base text-sm font-medium px-1"
              >วันทำงาน</label
            >
            <div class="flex space-x-5">
              <div class="form-control">
                <label
                  v-for="pd in sevenDay"
                  :key="pd.idDay"
                  class="
                    flex flex-col
                    items-start
                    label
                    cursor-pointer
                    space-y-2
                  "
                >
                  <span>
                    <input
                      :id="pd.idDay"
                      :value="{ day: pd }"
                      type="checkbox"
                      v-model="postInfo.postingHasDayList"
                      class="checkbox checkbox-sm inline-block align-middle"
                      :class="{ 'bg-red-50': postingHasDayListInput }"
                    />
                    <span
                      class="
                        label-text
                        pl-2
                        2xl:text-base
                        xl:text-base
                        lg:text-base
                        md:text-base
                        text-sm
                      "
                      >{{ pd.dayName }}</span
                    >
                  </span>
                </label>
                <!-- <span>Selected day: {{ postInfo.postingHasDayList }}</span> -->
              </div>
            </div>
            <p v-if="postingHasDayListInput" class="text-sm text-red-600">
              กรุณาเลือกวันหยุด
            </p>
          </div>

          <!-- <span v-for="item in allLocations">
          <input type="checkbox" :value="item.location" v-model="selectedLocations"> <span class="checkbox-label"> {{item.location}} </span> <br>
          </span> -->
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
              <div class="">
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
                <div class="html-editor">
                  <ckeditor
                    :editor="editor"
                    v-model="postInfo.workDescription"
                    :config="editorConfig"
                  >
                  </ckeditor>
                </div>
              </div>
              <p v-if="descriptInput" class="text-sm text-red-600">
                กรุณากรอกรายละเอียดงาน
              </p>
            </div>
          </div>

          <!-- <p> -->
          <!-- <span class="font-semibold">รูปแบบงาน: </span> -->
          <!-- {{ jobDetail.hiringType.nameType }} -->
          <!-- hiringType -->
          <div class="2xl:w-1/2 md:w-1/2 w-full mb-5">
            <label
              for=""
              class="2xl:text-base md:text-base text-sm font-medium px-1"
              >รูปแบบงาน</label
            >
            <div class="flex space-x-5 w-full">
              <div class="flex 2xl:w-1/3 md:w-2/3 w-2/3">
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
                  v-model.trim="postInfo.hiringType.idHiringtype"
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
                  :class="{ 'bg-red-50': hiringTypeInput }"
                >
                  <!-- แก้ด้วย -->
                  <option :value="''" disabled selected>
                    กรุณาเลือกรูปแบบงาน
                  </option>
                  <option
                    class="text-black"
                    v-for="ht in hiringTypeArray"
                    :key="ht.idHiringtype"
                    :value="ht.idHiringtype"
                  >
                    {{ ht.nameType }}
                  </option>
                  <!-- แก้ด้วย -->
                </select>
              </div>
            </div>
            <p v-if="hiringTypeInput" class="text-sm text-red-600">
              กรุณาเลือกรูปแบบงาน
            </p>
          </div>
          <!-- </p> -->

          <!-- <p> -->
          <!-- <span class="font-semibold">ค่าล่วงเวลา: </span> -->
          <!-- {{ ot[jobDetail.overtimePayment] }} -->
          <!-- overtimePayment -->
          <div class="w-1/2 mb-5">
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
                    v-model.trim="postInfo.overtimePayment"
                    name="radio-7"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': otPayInput }"
                    value="y"
                  />
                  <span
                    class="
                      label-text
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >มี</span
                  >
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    v-model.trim="postInfo.overtimePayment"
                    name="radio-7"
                    class="radio checked:bg-orange-1"
                    :class="{ 'bg-red-50': otPayInput }"
                    value="n"
                  />
                  <span
                    class="
                      label-text
                      2xl:text-base
                      xl:text-base
                      lg:text-base
                      md:text-base
                      text-sm
                    "
                    >ไม่มี</span
                  >
                </label>
              </div>
            </div>
            <p v-if="otPayInput" class="text-sm text-red-600">
              กรุณาเลือกค่าล่วงเวลา
            </p>
          </div>
          <!-- </p> -->

          <!-- <div> -->
          <!-- <span class="font-semibold">สวัสดิการ: </span> -->
          <!-- <p class="ml-10" v-html="jobDetail.welfare"></p> -->
          <!-- </div> -->

          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-base font-medium px-1">คุณสมบัติ</label>
              <div class="">
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
                <div class="html-editor">
                  <ckeditor
                    :editor="editor"
                    v-model.trim="postInfo.properties"
                    :config="editorConfig"
                  >
                  </ckeditor>
                </div>
              </div>
            </div>
          </div>

          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-base font-medium px-1">สวัสดิการ</label>
              <div class="">
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
                <div class="html-editor">
                  <ckeditor
                    :editor="editor"
                    v-model="postInfo.welfare"
                    :config="editorConfig"
                  >
                  </ckeditor>
                </div>
              </div>
              <p v-if="welfareInput" class="text-sm text-red-600">
                กรุณากรอกสวัสดิการ
              </p>
            </div>
          </div>

          <div class="w-full flex space-x-5 justify-center font-sans-thai">
            <button
              @click.prevent="toast()"
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
              สร้าง
            </button>

            <button
              @click="$router.push('/posting')"
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
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import BaseJob from "@/components/BaseJob.vue";
// import { ref } from "@vue/reactivity";
// import BaseApplication from "@/components/BaseApplication.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  // components: { BaseJob },
  props: [],
  data() {
    return {
      createComplete: false,
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the editor.
        toolbar: ["bulletedList"],
      },
      showToast: false,
      hiringTypeArray: [],
      sevenDay: [],
      // postingHasDayListArray: [],
      positionArray: [],

      positionInput: false,
      sexInput: false,
      descriptInput: false,
      minAgeInput: false,
      maxAgeInput: false,
      minSalaryInput: false,
      maxSalaryInput: false,
      otPayInput: false,
      startTimeInput: false,
      endTimeInput: false,
      welfareInput: false,
      hiringTypeInput: false,
      statusInput: false,
      workerTypeInput: false,
      postingHasDayListInput: false,

      postInfo: {
        sex: "",
        workDescription: "",
        minAge: 18,
        maxAge: 60,
        minSalary: 300,
        maxSalary: "",
        overtimePayment: "",
        startTime: "09:00",
        endTime: "",
        properties: "",
        welfare: "",
        hiringType: {
          idHiringtype: "",
          nameType: "",
        },
        idEmployer: this.$store.state.auth.user.employer.idEmployer,
        status: {
          idStatus: "1",
          statusName: "Active",
        },
        workerType: {
          idWorkerType: "",
          typeName: "",
        },
        postingHasDayList: [
          { day: { idDay: 2, dayName: "จันทร์", abbreviation: "จ" } },
          { day: { idDay: 3, dayName: "อังคาร", abbreviation: "อ" } },
          { day: { idDay: 4, dayName: "พุธ", abbreviation: "พ" } },
          { day: { idDay: 5, dayName: "พฤหัสบดี", abbreviation: "พฤ" } },
          { day: { idDay: 6, dayName: "ศุกร์", abbreviation: "ศ" } },
        ],
        position: {
          idposition: "",
          positionName: "",
        },
      },
      post: [],
      response200: "",
      image: null,
      maxWrong: false,
      minSalaryAlert: false,
      minMoreThanMax: false,
    };
  },
  methods: {
    // async addPosition(){
    //   if(!this.positionArray.map((p) => p.positionName).includes(this.postInfo.position.positionName)){
    //   await axios
    //       .post(
    //         `${process.env.VUE_APP_ROOT_API}emp/createPosition?namePosition=${this.postInfo.position.positionName}&idEmployer=${this.$store.state.auth.user.employer.idEmployer}`
    //       )
    //   }
    //   this.postInfo.position.positionName = ''
    //   this.positionArray1 = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/getMyPosition?idEmployer=` + this.$store.state.auth.user.employer.idEmployer);
    //   this.positionArray = this.positionArray1.data
    // },
    toast() {
      this.showToast = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    async createPost() {
      this.checkValidate();
      let res;
      if (
        !this.maxWrong ||
        (!this.minMoreThanMax &&
          !this.positionInput &&
          !this.sexInput &&
          !this.descriptInput &&
          !this.minAgeInput &&
          !this.maxAgeInput &&
          !this.maxSalaryInput &&
          !this.minSalaryInput &&
          !this.otPayInput &&
          !this.startTimeInput &&
          !this.endTimeInput &&
          !this.welfareInput &&
          !this.hiringTypeInput &&
          !this.statusInput &&
          !this.workerTypeInput &&
          !this.postingHasDayListInput)
      ) {
        toString(this.postInfo.position.idposition);
        const posting = JSON.stringify(this.postInfo);
        const customConfig = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axios
          .post(
            `${process.env.VUE_APP_ROOT_API}emp/createPosting?idEmployer=${this.$store.state.auth.user.employer.idEmployer}`,
            posting,
            customConfig
          )
          .then(function (response) {
            console.log(response);
            res = response.status;
            // alert("ประกาศโพสหางานของคุณเรียบร้อยแล้ว");
          })
          .catch(function (error) {
            console.log(error);
          });
        if (res == 200) {
          this.createComplete = true;
          setTimeout(() => (this.createComplete = false), 5000);
          this.clear();
        }
        this.$store.commit("setPosting", this.post);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },

    checkValidate() {
      this.positionInput =
        this.postInfo.position.idposition === "" ? true : false;
      this.sexInput = this.postInfo.sex === "" ? true : false;
      this.descriptInput = this.postInfo.workDescription === "" ? true : false;
      this.minAgeInput =
        this.postInfo.minAge === "" || this.postInfo.minAge < 18 ? true : false;
      this.maxAgeInput =
        this.postInfo.maxAge === "" || this.postInfo.maxAge > 60 ? true : false;
      this.minSalaryInput = this.postInfo.minSalary === "" ? true : false;
      this.minMoreThanMax =
        parseInt(this.postInfo.minSalary) > parseInt(this.postInfo.maxSalary)
          ? true
          : false;
      this.maxSalaryInput = this.postInfo.maxSalary === "" ? true : false;
      this.maxWrong =
        parseInt(this.postInfo.maxSalary) < parseInt(this.postInfo.minSalary)
          ? true
          : false;
      this.otPayInput = this.postInfo.overtimePayment === "" ? true : false;
      this.startTimeInput = this.postInfo.startTime === "" ? true : false;
      this.endTimeInput = this.postInfo.endTime === "" ? true : false;
      this.welfareInput = this.postInfo.welfare === "" ? true : false;
      this.hiringTypeInput =
        this.postInfo.hiringType.idHiringtype === "" ? true : false;
      this.statusInput = this.postInfo.status.idStatus === "" ? true : false;
      this.workerTypeInput =
        this.postInfo.workerType.idWorkerType === "" ? true : false;
      this.postingHasDayListInput =
        this.postInfo.postingHasDayList.length == 0 ? true : false;
    },
    clear() {
      this.postInfo = {
        sex: "",
        workDescription: "",
        minAge: 18,
        maxAge: 60,
        minSalary: 300,
        maxSalary: "",
        overtimePayment: "",
        startTime: "",
        endTime: "",
        properties: "",
        welfare: "",
        hiringType: {
          idHiringtype: "",
          nameType: "",
        },
        idEmployer: this.$store.state.auth.user.employer.idEmployer,
        status: {
          idStatus: "1",
          statusName: "Active",
        },
        workerType: {
          idWorkerType: "",
          typeName: "",
        },
        postingHasDayList: [],
        position: {
          idposition: "",
          positionName: "",
        },
      };
    },
    salaryType() {
      if (parseInt(this.postInfo.minSalary) < 300) {
        this.postInfo.minSalary = 300;
        this.minSalaryAlert = true;
        setTimeout(() => (this.minSalaryAlert = false), 2000);
      }
      if (this.postInfo.minSalary && this.postInfo.maxSalary != "") {
        if (
          parseInt(this.postInfo.maxSalary) < parseInt(this.postInfo.minSalary)
        ) {
          // this.postInfo.maxSalary = parseInt(this.postInfo.minSalary) + 100
          this.maxWrong = true;
          setTimeout(() => (this.maxWrong = false), 3000);
        }
      }
    },
    ifChangeAge(age) {
      if (age < 18) {
        this.postInfo.minAge = 18;
      } else {
        if (age > 60) {
          this.postInfo.maxAge = 60;
        }
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
  computed: {},
  async created() {
    console.log("hiringType");
    this.hiringTypeArray = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allHiringType`
    );
    this.postingHasDayListArray = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/allPostingHasDay`
    );
    this.sevenDay = await this.fetch(
      `${process.env.VUE_APP_ROOT_API}main/getSundayToSaturday`
    );
    this.post1 = await axios.get(
      `${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` +
        this.$store.state.auth.user.employer.idEmployer
    );
    this.post = this.post1.data;
    console.log(this.post);
    const positionArray = await axios.get(
      `${process.env.VUE_APP_ROOT_API}admin_emp/allPosition`
    );
    this.positionArray = positionArray.data;
    const image1 = await axios.get(
      `${process.env.VUE_APP_ROOT_API}main/getImageByIdEmployer` +
        "?idEmployer=" +
        this.$store.state.auth.user.employer.idEmployer
    );
    const imageName = image1.data;
    this.image =
      (await `${process.env.VUE_APP_ROOT_API}main/image/`) + imageName;
    console.log(this.sevenDay);
  },
};
</script>
<style scoped>
.html-editor >>> ul {
  list-style-type: disc !important;
  margin-left: 20px !important;
}
.html-editor >>> ol {
  list-style-type: decimal !important;
  margin-left: 20px !important;
}
@media (min-width: 1536px){
  .html-editor >>> .ck-editor {
    width: 500px !important;
  }
}
@media (min-width: 1280px){
  .html-editor >>> .ck-editor {
    width: 500px !important;
  }
}
@media (min-width: 1024px){
  .html-editor >>> .ck-editor {
    width: 500px !important;
  }
}
@media (min-width: 768px){
  .html-editor >>> .ck-editor {
    width: 500px !important;
  }
}
@media (min-width: 375px){
  .html-editor >>> .ck-editor {
    width: 325px !important;
  }
}
</style>