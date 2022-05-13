<template>
  <div>
    <div v-if="success" class="mt-3 alert alert-success shadow-lg">
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
            >เมนู "ติดตามสถานะการสมัครงาน"</span
          >
        </p>
      </div>
    </div>
    <!-- <router-link to="/findJob"> -->
    <div>
      <button
        @click="this.$router.push('/')"
        class="btn btn-ghost font-sans-thai flex justify-start ml-2.5"
      >
        <i class="material-icons"> arrow_back_ios </i>หางาน
      </button>
    </div>
    <!-- </router-link> -->
  </div>
  <div class="mx-auto card bg-base-100 font-sans-thai w-full">
    <figure>
      <img
        src="https://i.ytimg.com/vi/J_oT9erINxA/maxresdefault.jpg"
        alt="Movie"
      />
    </figure>
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title text-orange-1">
          {{ jobDetail.position?.positionName }}
        </h2>
        <i class="material-icons"> bookmark_border </i>
      </div>
      <h2 class="card-title">
        {{ employer.establishmentName }}
      </h2>
      <p class="font-medium">
        <span class="inline-block align-middle"
          ><i class="material-icons pr-2"> place </i></span
        >
        <span class="inline-block align-middle">{{ employer.address }}</span>
      </p>
      <p class="font-medium">
        <span class="inline-block align-middle"
          ><i class="material-icons pr-2"> paid </i></span
        >
        <span class="inline-block align-middle">
          {{
            jobDetail.minSalary
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }}
          -
          {{
            jobDetail.maxSalary
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }}</span
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
      <div class="card-actions justify-center">
        <label
          for="my-modal-6"
          v-if="!alreadyApp"
          @click="(this.openForm = true), (this.closeWord = true)"
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
        <!-- Put this part before </body> tag -->
        <div v-if="openForm">
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal font-sans-thai">
            <div v-for="w in worker" :key="w.idWorker" class="">
              <div v-if="w.idWorker == 1">
                <div class="modal-box w-80 mx-auto max-w-5xl">
                  <h3 class="font-bold text-lg mb-5">
                    ยืนยัน<span v-if="closeWord">ข้อมูล</span>การสมัครงาน
                    <!-- แจ้งเตือน -->
                  </h3>
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
                        {{ w.identificationNumber }}
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
                        {{ w.sex }}
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
                        {{
                          w.firstName + " " + w.middleName + " " + w.lastName
                        }}
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
                        {{ w.phone }}
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
                        {{ w.workerType.typeName }}
                      </p>
                    </div>
                  </div>
                  <p v-if="!closeWord">
                    ยืนยันที่จะสมัครงานตำแหน่ง <b>{{jobDetail.position?.positionName}}</b> ของบริษัท <b>{{ employer.establishmentName }}</b>
                  </p>
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
                  <div class="modal-action justify-between">
                    <label
                      @click="(this.openForm = false), (this.canApp = 0)"
                      class="btn btn-ghost px-12 h-11"
                      >ยกเลิก</label
                    >
                    <base-button
                      @click="
                        (this.closeWord = false), this.canApp++, application()
                      "
                      class="
                        btn
                        border-0
                        bg-orange-1
                        hover:bg-orange-2
                        px-12
                        h-11
                      "
                      :txtbutt="this.closeWord == false ? 'ยืนยัน' : 'ถัดไป'"
                    ></base-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="alreadyApp"
          class="btn border-0 bg-orange-2 hover:bg-orange-2 w-full"
        >
          <i class="material-icons pr-2"> done </i>
          สมัครงานแล้ว
        </button>
      </div>
    </div>
  </div>
  <div class="mx-auto flex flex-col w-full font-sans-thai mt-5">
    <!-- <div v-if="openForm"><base-application></base-application></div> -->
    <div class="card card-side bg-base-100 p-6 grid h-full place-items-start">
      <p><span class="font-semibold">เพศ: </span> {{ jobDetail.sex }}</p>
      <p>
        <span class="font-semibold">อายุ: </span> {{ jobDetail.minAge }} -
        {{ jobDetail.maxAge }}
      </p>
      <p>
        <span class="font-semibold">เวลาทำงาน: </span>
        {{ jobDetail.startTime }} - {{ jobDetail.endTime }}
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
      <p>
        <span class="font-semibold">รายละเอียดงาน: </span>
        {{ jobDetail.workDescription }}
      </p>
      <p>
        <span class="font-semibold">รูปแบบงาน: </span>
        {{ jobDetail.hiringType?.nameType }}
      </p>
      <div v-if="jobDetail.overtimePayment !== null">
        <p>
          <span class="font-semibold">ค่าล่วงเวลา: </span>
          {{ jobDetail.overtimePayment }}
        </p>
      </div>
      <div v-else><span class="font-semibold">ค่าล่วงเวลา: </span>ไม่มี</div>
      <p>
        <span class="font-semibold">สวัสดิการ: </span>{{ jobDetail.welfare }}
      </p>
    </div>
    <div class="h-full place-items-center m-6">
      <span class="text-lg font-semibold">งานอื่น ๆ ที่บริษัทนี้เปิดรับ</span>
      <router-link
        @click="this.$router.go()"
        :to="
          '/detail?idPosting=' + this.idPosting + '&idEmployer=' + this.empId
        "
      >
        <base-job class="pt-12 w-96 -ml-6"></base-job>
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseJob from "@/components/BaseJob.vue";
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
      empId: null,
      jobDetail: [],
      urlJobDetail: "http://localhost:3000/main/selectPosting",
      idPosting: 0,
      success: false,
      allApplication: [],
      employer: [],
      urlEmp: "http://localhost:3000/allrole/selectEmployer",
      alreadyApp: false,
      openForm: false,
      worker: [],
      urlWorker: "http://localhost:3000/admin/allWorker",
      closeWord: true,
      canApp: 0,
      thisWorker: [],
      sexNotice: true,
      typeNotice: true,
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
    //sex ของ worker แม่งต้องไม่เท่ากับ เพศที่ต้องการของโพสติ้งที่ worker จะสมัคร
    // async application() {
    //   if (this.canApp % 2 == 0) {
    //     for (let i = 0; i <= this.allApplication.length; i++) {
    //       console.log("id Worker = " + this.allApplication[i]?.idWorker);
    //       if (this.allApplication[i]?.idWorker !== 1 && this.) {

    //         if(this.jobDetail.sex == this.thisWorker.sex){
    //           try {
    //           await fetch(
    //             `http://localhost:3000/worker/workApp?idWorker=1&idPosting=${this.idPosting}`,
    //             {
    //               method: "POST",
    //             }
    //           );
    //           this.success = true;
    //           this.alreadyApp = true;
    //           this.openForm = false;
    //           console.log("สมัครสำเร็จ");
    //         } catch (error) {
    //           console.log("สมัครไม่สำเร็จ 1");
    //         }
    //         }else{
    //           console.log("เพศไม่ตรง")
    //         }

    //       } else {
    //         console.log("สมัครไม่สำเร็จ");
    //       }
    //     }
    //   } else {
    //     console.log("ไม่ได้อ่า");
    //   }
    // },
    async application() {
      console.log("เลข = " + this.canApp);
      if (this.canApp % 2 == 0) {
        console.log("canApp เข้านะ");

        if (
          !this.jobDetail.applicationList
            .map((a) => a.idWorker)
            .includes(this.thisWorker.idWorker)
        ) {
          if (this.jobDetail.sex == this.thisWorker.sex) {
            try {
              await fetch(
                `http://localhost:3000/worker/workApp?idWorker=1&idPosting=${this.idPosting}`,
                {
                  method: "POST",
                }
              );
              this.success = true;
              this.alreadyApp = true;
              this.openForm = false;
              console.log("สมัครสำเร็จ");
            } catch (error) {
              console.log("สมัครไม่สำเร็จ เพราะ be");
            }
          } else {
            this.openForm = true;
            this.closeWord = false;
            this.sexNotice = false;
            console.log("sexNotice =" + this.sexNotice);
            console.log("เพศไม่ตรง");
          }
        } else {
          console.log("สมัครไม่สำเร็จเพราะสมัครไปแล้ว");
        }
      } else {
        console.log("สมัครไม่สำเร็จ");
      }
    },
  },
  async created() {
    // this.jobDetail = await this.fetch(this.urlJobDetail + "?idPosting=" + this.id);
    // this.$router.push('/detail?idPosting=' + this.id)
    const id = this.$route.query.idPosting;
    this.jobDetail = await this.fetch(
      this.urlJobDetail + "?idPosting=" + `${id}`
    );
    this.idPosting = id;
    this.employer = await this.fetch(this.urlEmp + "?idEmployer=" + this.empId);
    this.allApplication = await this.fetch(
      "http://localhost:3000/admin/allApplication"
    );
    this.worker = await this.fetch(this.urlWorker);
    this.thisWorker = await this.fetch(
      "http://localhost:3000/admin/selectWorker?idWorker=1"
    );
    this.alreadyApp = this.jobDetail.applicationList
      .map((a) => a.idWorker)
      .includes(this.thisWorker.idWorker);
    console.log(this.alreadyApp);
    window.scrollTo(0,0);
  },
};
</script>