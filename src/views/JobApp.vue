<template>
  <div class="bg-gray-2 h-full font-sans-thai py-16">
    <div class="">
      <button
        @click="$router.push('/')"
        class="btn btn-ghost font-sans-thai flex justify-start ml-7 mt-5"
      >
        <i class="material-icons"> arrow_back_ios </i>หางาน
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
      "
    >
      สถานะการสมัครงาน
    </p>
    <div v-if="noValue" class="text-center mb-10">
      <div><img src="../assets/icon/inbox.png" class="w-20 mx-auto" /></div>
      <div class="pt-3">
        ไม่มีข้อมูลการสมัครงาน <br />สามารถดูงานที่เปิดรับได้<span
          class="text-blue-700 cursor-pointer underline hover:text-blue-800" @click="$router.push('/')"
          >ที่นี่</span
        >
      </div>
    </div>
    <!-- table: Desktop -->
    <div
      v-if="!noValue"
      class="2xl:block xl:block lg:block hidden overflow-x-auto"
    >
      <table class="table 2xl:w-11/12 mx-auto">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th class="text-base">บริษัท</th>
            <th class="text-base">ตำแหน่ง</th>
            <th class="text-base">ที่อยู่</th>
            <th class="text-base text-center">สถานะ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row -->
          <tr v-for="(s, index) in status" :key="s.idApplication">
            <!-- <div v-for="">
            </div> -->
            <th>{{ index + 1 }}</th>
            <td>{{ s.establishmentName }}</td>
            <td>{{ s.positionName }}</td>
            <td>
              {{
                s.districtName +
                " " +
                s.subDistrict +
                " " +
                s.provinceName +
                " " +
                s.postcode
              }}
            </td>
            <td>
              <div class="flex justify-center">
                <div
                  v-if="s.statusName == 'Wating_EmployerOnWeb'"
                  class="
                    badge badge-md
                    bg-yellow-100
                    text-yellow-500
                    border-0
                  "
                >
                  รอการพิจารณา
                </div>
                <div
                  v-if="s.statusName == 'Accept_EmployerOnWeb'"
                  class="
                    badge badge-md
                    bg-green-200
                    text-green-600
                    border-0
                    tooltip
                    tooltip-success
                  "
                  data-tip="ทางนายจ้างจะติดต่อคุณกลับไป"
                >
                  ผ่านการคัดเลือก
                </div>
                <div
                  v-if="s.statusName == 'Reject_EmployerOnWeb'"
                  class="
                    badge badge-md
                    bg-red-200
                    text-red-600
                    border-0
                  "
                >
                  ไม่ผ่านการคัดเลือก
                </div>
              </div>
            </td>
            <td>
              <div class="flex justify-center">
                <label
                v-if="s.statusName == 'Wating_EmployerOnWeb'"
                  for="my-modal-5"
                  @click="embendedId(s.idApplication), isCancel = true"
                  class="btn border-red-700 bg-red-700 hover:bg-red-800 hover:border-red-800"
                >
                  ยกเลิกการสมัคร
                </label>
              </div>
              <div v-if="isCancel">
                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-2/5 max-w-5xl">
                    <h3 class="font-bold text-lg">แจ้งเตือน</h3>
                    <p class="py-4 w-full">
                      ยืนยันที่จะยกเลิกการสมัครงานตำแหน่ง
                      <b>{{ positionName }}</b> ของบริษัท
                      <b>{{ establishmentName }}</b>
                    </p>
                    <div class="modal-action justify-between">
                      <label for="my-modal-5" class="btn btn-ghost px-12 h-11"
                        >ยกเลิก</label
                      >
                      <label
                        @click="cancel(idApplication)"
                        for="my-modal-5"
                        class="
                          btn
                          border-0
                          bg-orange-1
                          hover:bg-orange-2
                          px-12
                          h-11
                        "
                        >ยืนยัน</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- card: Mobile/Tablet -->
    <div
      class="2xl:hidden xl:hidden lg:hidden flex flex-wrap justify-center -mt-5"
    >
      <div
        v-for="s in status"
        :key="s.idApplication"
        class="
          cursor-pointer
          font-sans-thai
          card
          w-96
          bg-base-100
          m-6
          transition
          duration-300
          ease-in-out
        "
      >
        <div>
          <div>
            <div class="card-body space-y-3">
              <div class="flex justify-between">
                <h2 class="card-title text-orange-1 text-base">
                  {{ s.positionName }}
                </h2>
              </div>
              <h2 class="card-title text-base">{{ s.establishmentName }}</h2>
              <p>
                <span class="inline-block align-middle"
                  ><i class="material-icons pr-2"> place </i></span
                >
                <span class="hidden font-semibold text-base">ที่อยู่ : </span>
                <span class="text-base font-medium inline-block align-middle">{{
                  s.districtName +
                  " " +
                  s.subDistrict +
                  " " +
                  s.provinceName +
                  " " +
                  s.postcode
                }}</span>
              </p>
              <div
                v-if="s.statusName == 'Wating_EmployerOnWeb'"
                class="
                  badge badge-lg
                  w-full
                  bg-yellow-100
                  text-yellow-500
                  border-0
                "
              >
                รอการพิจารณา
              </div>
              <div
                v-if="s.statusName == 'Accept_EmployerOnWeb'"
                class="
                  badge badge-lg
                  w-full
                  bg-green-200
                  text-green-600
                  border-0
                  tooltip
                  tooltip-success
                "
                data-tip="ทางนายจ้างจะติดต่อคุณกลับไป"
              >
                ผ่านการคัดเลือก
              </div>
              <div
                v-if="s.statusName == 'Reject_EmployerOnWeb'"
                class="
                  badge badge-lg
                  w-full
                  bg-red-200
                  text-red-600
                  border-0
                "
              >
                ไม่ผ่านการคัดเลือก
              </div>
              <div v-if="s.statusName == 'Wating_EmployerOnWeb'" class="">
              <label
                @click="embendedId(s.idApplication), isCancel = true"
                for="my-modal-6"
                class="btn border-red-700 bg-red-700 w-full"
              >
                ยกเลิกการสมัคร
              </label>
              </div>
              <!-- The button to open modal -->
              <!-- Put this part before </body> tag -->
              <div v-if="isCancel">
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-middle">
                  <div class="modal-box w-80 mx-auto max-w-5xl">
                    <h3 class="font-bold text-lg">แจ้งเตือน</h3>
                    <p class="py-4">
                      ยืนยันที่จะยกเลิกการสมัครงานตำแหน่ง
                      <b>{{ positionName }}</b> ของบริษัท
                      <b>{{ establishmentName }}</b>
                    </p>
                    <div class="modal-action justify-between">
                      <label for="my-modal-6" class="btn btn-ghost px-12 h-11"
                        >ยกเลิก</label
                      >
                      <label
                        @click="cancel(idApplication)"
                        for="my-modal-6"
                        class="
                          btn
                          border-0
                          bg-orange-1
                          hover:bg-orange-2
                          px-12
                          h-11
                        "
                        >ยืนยัน</label
                      >
                    </div>
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
export default {
  data() {
    return {
      workerApp: [],
      // urlWorkerApp:"http://localhost:3000/admin_worker/selectApplicationByWorker?idWorker=",
      urlWorkerApp: `${process.env.VUE_APP_ROOT_API}admin_worker/selectApplicationByWorker?idWorker=`,
      status: [],
      isCancel: false,
      noValue: false,
      idApplication: 0,
      PostEst:{},
      positionName: '',
      establishmentName: '',
    };
  },
  methods: {
    async embendedId(id){
      this.idApplication = id
      const PositionNameAndEst = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_worker/getPositionNameAndEstablishmentNameByIdApplication?idApplication=${id}`)
      this.PostEst = PositionNameAndEst.data
      this.positionName = this.PostEst.positionName
      this.establishmentName = this.PostEst.establishmentName
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
    async cancel(idApp) {
      console.log("idApp = " + idApp)
      try {
        await axios.delete(
          // `http://localhost:3000/worker/workCancelApp?idApplication=${idApp}`,
          `${process.env.VUE_APP_ROOT_API}worker/workCancelApp?idApplication=${idApp}`
        );
        window.location.reload();
      } catch (error) {
        console.log("cancel fail");
      }
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "3"
    ) {
      const res = await axios.get(
        this.urlWorkerApp + this.$store.state.auth.user.worker.idWorker
      );
      this.workerApp = res.data;
      // console.log("jopApp" + this.workerApp)
      console.log(res);
      this.status1 = await axios.get(
        // "http://localhost:3000/admin_worker/selectApplicationByWorker?idWorker=" + "1"
        `${process.env.VUE_APP_ROOT_API}admin_worker/selectApplicationByWorker?idWorker=` +
          this.$store.state.auth.user.worker.idWorker
      );
      this.status = this.status1.data;
      console.log(this.workerApp.length == 0);
      if (this.workerApp.length == 0) {
        this.noValue = true;
      } else {
        this.noValue = false;
      }
    } else if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      this.$router.push("/posting");
    } else if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      this.$router.push("/approve");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
