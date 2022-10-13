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
          @click="$router.push('/')"
          class="btn btn-ghost font-sans-thai flex justify-start ml-2.5"
        >
          <i class="material-icons"> arrow_back_ios </i>หางาน
        </button>
      </div>
      <!-- </router-link> -->
    </div>
    <!-- card header -->
    <div class="mx-auto card 2xl:card-side bg-base-100 font-sans-thai w-full">
      <figure class="2xl:w-1/4">
        <img
          class="2xl:h-full w-full"
          src="https://i.ytimg.com/vi/J_oT9erINxA/maxresdefault.jpg"
          alt="Movie"
        />
      </figure>
      <div class="card-body">
        <div class="flex justify-between">
          <h2 class="card-title text-orange-1">
            {{ jobDetail.position.positionName }}
          </h2>
          <!-- <i class="material-icons"> bookmark_border </i> -->
        </div>
        <h2 class="card-title">
          {{ employer.establishmentName }}
        </h2>
        <p class="font-medium">
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> place </i></span
          >
          <span class="inline-block align-middle">{{
            employer.address +
            " " +
            employer.subDistrict.subDistrict +
            " " +
            employer.district.districtName +
            " " +
            employer.province.provinceName +
            " " +
            employer.subDistrict.postcode
          }}</span>
        </p>
        <p class="font-medium">
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> paid </i></span
          >
          <span class="inline-block align-middle">
            {{
              jobDetail.minSalary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            -
            {{
              jobDetail.maxSalary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            บาท</span
          >
        </p>
        <p class="font-medium">
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> call </i></span
          >
          <span class="inline-block align-middle"> {{ employer.phone }}</span>
        </p>
        <p class="font-medium">
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> email </i></span
          >
          <span class="inline-block align-middle"> {{ employer.email }}</span>
        </p>
        <div class="card-actions justify-center 2xl:justify-end">
          <div v-if="this.$store.state.auth.user && this.$store.state.auth.user.role.idRole == '3'">
          <label
            for="my-modal-6"
            v-if="!alreadyApp"
            @click="
              (openForm = true),
                (closeWord = true),
                (sexNotice = true),
                (typeNotice = true)
            "
            class="
              btn
              modal-button
              border-0
              bg-orange-1
              hover:bg-orange-2
              w-full
              my-3
            "
          >
            สมัครงาน
          </label>
          </div>
          <!-- Put this part before </body> tag -->
          <div v-if="openForm">
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal w-full font-sans-thai">
            
                  <div class="modal-box w-80 mx-auto max-w-5xl">
                    <h3 v-if="conditionNotTrue" class="font-bold text-lg mb-5">
                      ยืนยัน<span v-if="closeWord">ข้อมูล</span>การสมัครงาน
                      <!-- แจ้งเตือน -->
                    </h3>
                    <h3 v-else class="font-bold text-lg mb-5">แจ้งเตือน</h3>
                    <div v-if="closeWord">
                      <div class="w-full flex-col mb-5">
                        <p class="font-semibold mb-2">เลขประจำตัว</p>
                        <p
                          class="
                            font-normal
                            text-sm
                            border-2 border-gray-1
                            bg-slate-100
                            p-2
                            rounded-xl
                          "
                        >
                          <!-- {{ this.thisworker.identificationNumber }} -->
                          {{this.$store.state.auth.user.worker.identificationNumber}}
                        </p>
                      </div>
                      <div class="w-full flex-col mb-5">
                        <p class="font-semibold mb-2">เพศ</p>
                        <p
                          class="
                            font-normal
                            text-sm
                            border-2 border-gray-1
                            bg-slate-100
                            p-2
                            rounded-xl
                          "
                        >
                          <!-- {{ sex[this.thisworker.sex] }} -->
                          {{ sex[this.$store.state.auth.user.worker.sex] }}
                        </p>
                      </div>
                      <div class="w-full flex-col mb-5">
                        <p class="font-semibold mb-2">ชื่อ</p>
                        <p
                          class="
                            font-normal
                            text-sm
                            border-2 border-gray-1
                            bg-slate-100
                            p-2
                            rounded-xl
                          "
                        >
                          <!-- {{
                            this.thisworker.firstName + " " + this.thisworker.middleName + " " + this.thisworker.lastName
                          }} -->
                          {{this.$store.state.auth.user.worker.firstName + " " + (this.$store.state.auth.user.worker.middleName ? this.$store.state.auth.user.worker.middleName : '')  + " " + this.$store.state.auth.user.worker.lastName}}
                        </p>
                      </div>
                      <div class="w-full flex-col mb-5">
                        <p class="font-semibold mb-2">เบอร์โทรศัพท์</p>
                        <p
                          class="
                            font-normal
                            text-sm
                            border-2 border-gray-1
                            bg-slate-100
                            p-2
                            rounded-xl
                          "
                        >
                          <!-- {{ this.thisworker.phone }} -->
                          {{ this.$store.state.auth.user.worker.phone }}
                        </p>
                      </div>
                      <div class="w-full flex-col">
                        <p class="font-semibold mb-2">ประเภทแรงงาน</p>
                        <p
                          class="
                            font-normal
                            text-sm
                            border-2 border-gray-1
                            bg-slate-100
                            p-2
                            rounded-xl
                          "
                        >
                          <!-- {{ workerType[this.thisworker.workerType.typeName] }} -->
                          {{ workerType[this.$store.state.auth.user.worker.workerType.typeName] }}
                        </p>
                      </div>
                    </div>
                    <div v-if="conditionNotTrue">
                      <p v-if="!closeWord">
                        ยืนยันที่จะสมัครงานตำแหน่ง
                        <b>{{ jobDetail.position.positionName }}</b> ของบริษัท
                        <b>{{ employer.establishmentName }}</b>
                      </p>
                    </div>
                    <!-- pop up valid sex -->
                    <p v-if="!sexNotice">
                      ไม่สามารถสมัครงานได้
                      เนื่องจากเพศของคุณไม่ตรงกับคุณสมบัติของตำแหน่งงานที่ได้กำหนดไว้
                    </p>
                    <!-- pop up valid worker type -->
                    <p v-if="!typeNotice">
                      ไม่สามารถสมัครงานได้
                      เนื่องจากประเภทแรงงานของคุณไม่ตรงกับคุณสมบัติของตำแหน่งงานที่ได้กำหนดไว้
                    </p>
                    <div
                      :class="
                        sexNotice == true || typeNotice == true
                          ? 'modal-action justify-between'
                          : 'modal-action justify-center'
                      "
                    >
                      <!-- ถ้า sex/type ตรง ปุ่มยกเลิกจะเปิด ซึ่งมันมีเคสที่ มันจะมีอย่างใดอย่างนึงตรง ไอ ปุ่มยกเลิกเลยเปิด -->
                     <!-- <label
                        v-if="
                          (sexNotice && typeNotice) || sexNotice
                            ? typeNotice
                            : '' || typeNotice
                            ? sexNotice
                            : ''
                        "
                        @click="
                          (openForm = false),
                            (canApp = 0),
                            (sexNotice = true),
                            (typeNotice = true),
                            (conditionNotTrue = true)
                        "
                        class="btn btn-ghost px-12 h-11"
                        >ยกเลิก</label> -->
                        <label
                        @click="
                          (openForm = false),
                            (canApp = 0),
                            (sexNotice = true),
                            (typeNotice = true),
                            (conditionNotTrue = true)
                        "
                        class="btn btn-ghost px-12 h-11"
                        >ยกเลิก</label>
               <!--       <base-button
                        @click="
                          // default closeWord, sexNotice, typeNotice = true, openForm = false
                          //ถ้าข้อมูลอีซิ่นปิดอยู่และ sex/type ไม่ตรง ตัวpop up จะปิด //ถ้ากดปุ่มละปิดอีซิ่น //เรียก app()
                          controlBtn
                        "
                        :class="
                          //sex/type ตรง ให้ปุ่มตกลงแคบ แต่ถ้า sex/type ไม่ตรง ให้ปุ่มตกลงกว้างงงงงง
                          (sexNotice && typeNotice)? 'btn border-0 bg-orange-1 hover:bg-orange-2 px-12 h-11': 'btn border-0 bg-orange-1 hover:bg-orange-2 px-12 h-11 w-full'
                        "
                        :txtbutt="
                          //ถ้าข้อมูลอีซิ่นปิดอยู่ให้เช็คว่า sex/type ตรงมั้ย ? ถ้าไม่ตรงให้เป็น 'ตกลง' แต่ถ้าตรง ให้เป็น 'ยืนยัน' แต่!!ถ้าข้อมูลอีซิ่นไม่ได้ปิดให้ปุ่มเป็น 'ถัดไป'
                          closeWord == false? sexNotice == false ||typeNotice == false? 'ตกลง': 'ยืนยัน': 'ถัดไป'
                        "
                      ></base-button> -->

                      <div v-if="YNextBtn">
                      <div v-if="defNext">
                      <button @click="checkProfile()" class="btn border-0 bg-orange-1 hover:bg-orange-2 px-12 h-11">
                        ถัดไป
                      </button>
                      </div>
                      <div v-if="!defNext">
                      <button @click="application()" class="btn border-0 bg-orange-1 hover:bg-orange-2 px-12 h-11">
                        ยืนยัน
                      </button>
                      </div>
                      </div>
                      <div v-if="sexNotice == false ||typeNotice == false">
                      <button @click="openForm = false" class="btn border-0 bg-orange-1 hover:bg-orange-2 px-12 h-11">
                        ตกลง
                      </button>                      
                      </div>

                    </div>
                  </div>
              
            
            </div>
          </div>
          <button
            v-if="alreadyApp"
            class="
              btn
              border-0
              bg-orange-2
              hover:bg-orange-2
              w-full
              2xl:w-1/6 2xl:my-0
              my-3
            "
          >
            <i class="material-icons pr-2"> done </i>
            สมัครงานแล้ว
          </button>
        </div>
      </div>
    </div>
    <!-- card description -->
    <div class="mx-auto flex flex-col w-full font-sans-thai mt-5">
      <!-- <div v-if="openForm"><base-application></base-application></div> -->
      <div class="card card-side bg-base-100 p-6 grid h-full place-items-start">
        <p>
          <span class="font-semibold">แรงงานที่รับ: </span
          >{{ workerType[jobDetail.workerType.typeName] }}
        </p>
        <p><span class="font-semibold">เพศ: </span> {{ sex[jobDetail.sex] }}</p>
        <p>
          <span class="font-semibold">อายุ: </span> {{ jobDetail.minAge }} -
          {{ jobDetail.maxAge }} ปี
        </p>
        <p>
          <span class="font-semibold">เวลาทำงาน: </span>
          {{ jobDetail.startTime }} - {{ jobDetail.endTime }} น.
        </p>
        <p>
          <span class="font-semibold">วันทำงาน: </span>
          <span
            v-for="day in jobDetail.postingHasDayList"
            :key="day.idPostingHasDay"
          >
            {{ day.day.abbreviation + "" }}.
          </span>
        </p>
        <div>
          <span class="font-semibold">รายละเอียดงาน: </span>
          <p class="ml-10" v-html="jobDetail.workDescription"></p>
        </div>
        <p>
          <span class="font-semibold">รูปแบบงาน: </span>
          {{ jobDetail.hiringType.nameType }}
        </p>
        <p>
          <span class="font-semibold">ค่าล่วงเวลา: </span>
          {{ ot[jobDetail.overtimePayment] }}
        </p>
        <div>
          <span class="font-semibold">สวัสดิการ: </span>
          <p class="ml-10" v-html="jobDetail.welfare"></p>
        </div>
      </div>
      <div class="h-full place-items-center m-6">
        <span class="text-lg font-semibold">งานอื่น ๆ ที่บริษัทนี้เปิดรับ</span>
        <div @click="$router.go()">

          <!-- <div v-if="jobDetail.idPosting"> -->
            <base-job
              :idPost="idPosting"
              class="pt-12 2xl:w-full md:w-full w-96 -ml-6"
            >
            
            </base-job>
          </div>
          
          <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const sex = Object.freeze({
  F: "หญิง",
  M: "ชาย",
  A: "ทุกเพศ",
});
const workerType = Object.freeze({
  Migrant: "แรงงานต่างด้าว",
  Thai: "แรงงานไทย",
});
const ot = Object.freeze({
  y: "มี",
  n: "ไม่มี",
});
import BaseJob from "@/components/BaseJob.vue";
// import { ref } from "@vue/reactivity";
// import BaseApplication from "@/components/BaseApplication.vue";

export default {
  mounted() {
    // update data when mounting the component
    if ("idEmployer" in this.$route.query) {
      this.empId = this.$route.query.idEmployer;
    }
  },
  components: { BaseJob },
  props: ["id"],
  data() {
    return {
      sex,
      workerType,
      ot,
      empId: null,
      jobDetail: {position:{}, minSalary:0, maxSalary:0, workerType:{}, hiringType:{}},
      // urlJobDetail: "http://localhost:3000/main/selectPosting",
      urlJobDetail: `${process.env.VUE_APP_ROOT_API}main/selectPosting`,
      idPosting: 0,
      // success: false,
      // allApplication: [],
      employer: {subDistrict:{}, district:{}, province:{}},
      // urlEmp: "http://localhost:3000/main/selectEmployer",
      urlEmp: `${process.env.VUE_APP_ROOT_API}main/selectEmployer`,
      alreadyApp: false,
      openForm: false,
      // worker: [],
      // urlWorker: "http://localhost:3000/admin/allWorker",
      // urlWorker: `${process.env.VUE_APP_ROOT_API}main/allWorker`,
      closeWord: true,
      canApp: 0,
      // thisWorker: {workerType:{}},
      sexNotice: true,
      typeNotice: true,
      conditionNotTrue: true,
      showToast: false,
      hideYourSelf: true,
      defNext: true,
      YNextBtn: true,
    };
  },
  methods: {
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    sendTrue() {
      this.$emit("setTrue", true);
    },
    checkProfile(){
      this.defNext = false
      this.closeWord = false
    },
    controlBtn(){
      console.log("เข้าโว้ย")
    !this.closeWord && (!this.sexNotice || !this.typeNotice)? (this.openForm = false): '';
    (this.closeWord = false);
    this.canApp++
    this.application()
    },
    async application() {
      this.defNext = true;
      if (this.canApp % 2 == 0) {
        if (
          !this.jobDetail.applicationList
            .map((a) => a.idWorker)
            .includes(this.$store.state.auth.user.worker.idWorker)
        ) {
          if (
            this.jobDetail.workerType.typeName ==
            this.$store.state.auth.user.worker.workerType.typeName
          ) {
            if (
              this.jobDetail.sex == this.$store.state.auth.user.worker.sex ||
              this.jobDetail.sex == "A"
            ) {
              try {
                const response = await axios.post(
                  // `http://localhost:3000/worker/workApp?idWorker=${this.$store.state.auth.user.worker.idWorker}&idPosting=${this.idPosting}`,
                  `${process.env.VUE_APP_ROOT_API}worker/workApp?idWorker=${this.$store.state.auth.user.worker.idWorker}&idPosting=${this.idPosting}`
                  // ,
                  // {
                  //   method: "POST",
                  // }
                ).data;
                console.log(response);
                this.alreadyApp = true;
                this.openForm = false;
                this.showToast = true;
                setTimeout(() => (this.showToast = false), 3000);
                console.log("สมัครสำเร็จ");
              } catch (error) {
                console.log(error);
              }
            } else {
              this.closePopup();
              this.sexNotice = false;
              this.openForm = true;
              // this.closeWord = false;
              this.conditionNotTrue = false;
              this.YNextBtn = false;
              console.log("sexNotice =" + this.sexNotice);
              console.log("เพศไม่ตรง");
            }
          } else {
            console.log("worker type ไม่ตรงงงง");
            this.closePopup();
            this.typeNotice = false;
            this.conditionNotTrue = false;
            this.openForm = true;
            this.YNextBtn = false;
          }
        } else {
          console.log("สมัครไม่สำเร็จเพราะสมัครไปแล้ว");
        }
      } else {
        console.log("สมัครไม่สำเร็จ");
      }
    },
    closePopup() {
      this.openForm = false;
      this.closeWord = false;
    },
  },
  async created() {
    // this.jobDetail = await this.fetch(this.urlJobDetail + "?idPosting=" + this.id);
    // this.$router.push('/detail?idPosting=' + this.id)
    const id = this.$route.query.idPosting;
    this.jobDetail = await this.fetch(this.urlJobDetail + "?idPosting=" + `${id}`);
    this.idPosting = id;
    this.employer = await this.fetch(this.urlEmp + "?idEmployer=" + this.empId);
    // // this.allApplication = await this.fetch("http://localhost:3000/admin/allApplication");
    // this.allApplication = await this.fetch(`${process.env.VUE_APP_ROOT_API}admin/allApplication`);
    // this.worker1 = await axios(this.urlWorker);
    // this.worker = this.worker1.data
    // this.thisWorker = await this.fetch("http://localhost:3000/admin/selectWorker?idWorker=1");
    // this.thisWorker1 = await axios.get(
    //   `${process.env.VUE_APP_ROOT_API}main/selectWorker?idWorker=` + this.$store.state.auth.user.worker.idWorker
    // );
    // this.thisWorker = this.thisWorker1.data
    // console.log("this.thisWorker = " + this.thisWorker)
    this.alreadyApp = this.jobDetail.applicationList
      .map((a) => a.idWorker)
      .includes(this.$store.state.auth.user.worker.idWorker);
    console.log(this.alreadyApp);
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.toast-app {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-active {
  transform: all 0.3s ease;
}

.toast-leave-app {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transform: all 0.3s ease;
}
</style>