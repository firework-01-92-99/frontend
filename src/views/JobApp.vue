<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
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
    <div v-if="noValue" class="text-center mb-10">ไม่มีข้อมูลการสมัครงาน</div>
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
          <tr v-for="s in status" :key="s.idApplication">
            <th>{{ s.idApplication }}</th>
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
                  v-if="s.statusName == 'Waiting'"
                  class="
                    font-normal
                    badge badge-md
                    bg-yellow-100
                    text-yellow-500
                    border-0
                  "
                >
                  รอการพิจารณา
                </div>
                <div
                  v-if="s.statusName == 'Accept'"
                  class="
                    font-medium
                    badge badge-md
                    bg-green-200
                    text-green-600
                    border-0
                  "
                >
                  ผ่านการคัดเลือก
                </div>
                <div
                  v-if="s.statusName == 'Reject'"
                  class="
                    font-medium
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
                  for="my-modal-5"
                  @click="this.isCancel = true"
                  class="btn border-red-700 bg-red-700"
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
                      <b>{{ s.positionName }}</b> ของบริษัท
                      <b>{{ s.establishmentName }}</b>
                    </p>
                    <div class="modal-action justify-between">
                      <label for="my-modal-5" class="btn btn-ghost px-12 h-11"
                        >ยกเลิก</label
                      >
                      <label
                        @click="cancel(s.idApplication)"
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
                v-if="s.statusName == 'Waiting'"
                class="
                  font-medium
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
                v-if="s.statusName == 'Accept'"
                class="
                  font-medium
                  badge badge-lg
                  w-full
                  bg-green-200
                  text-green-600
                  border-0
                "
              >
                ผ่านการคัดเลือก
              </div>
              <div
                v-if="s.statusName == 'Reject'"
                class="
                  font-medium
                  badge badge-lg
                  w-full
                  bg-red-200
                  text-red-600
                  border-0
                "
              >
                ไม่ผ่านการคัดเลือก
              </div>
              <label
                @click="this.isCancel = true"
                for="my-modal-6"
                class="btn border-red-700 bg-red-700 w-full -mt-16"
              >
                ยกเลิกการสมัคร
              </label>
              <!-- The button to open modal -->
              <!-- Put this part before </body> tag -->
              <div v-if="isCancel">
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-middle sm:modal-middle">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg">แจ้งเตือน</h3>
                    <p class="py-4">
                      ยืนยันที่จะยกเลิกการสมัครงานตำแหน่ง
                      <b>{{ s.positionName }}</b> ของบริษัท
                      <b>{{ s.establishmentName }}</b>
                    </p>
                    <div class="modal-action justify-between">
                      <label for="my-modal-6" class="btn btn-ghost px-12 h-11"
                        >ยกเลิก</label
                      >
                      <label
                        @click="cancel(s.idApplication)"
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
export default {
  data() {
    return {
      workerApp: [],
      // urlWorkerApp:"http://localhost:3000/admin_worker/selectApplicationByWorker?idWorker=",
      urlWorkerApp:`${process.env.VUE_APP_ROOT_API}admin_worker/selectApplicationByWorker?idWorker=`,
      status: [],
      isCancel: false,
      noValue: false,
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
    async cancel(idApp) {
      try {
        await fetch(
          // `http://localhost:3000/worker/workCancelApp?idApplication=${idApp}`,
          `${process.env.VUE_APP_ROOT_API}worker/workCancelApp?idApplication=${idApp}`,
          {
            method: "DELETE",
          }
        );
        window.location.reload();
      } catch (error) {
        console.log("cancel fail");
      }
    },
  },
  async created() {
    this.workerApp = await this.fetch(this.urlWorkerApp + "1");
    this.status = await this.fetch(
      // "http://localhost:3000/admin_worker/selectApplicationByWorker?idWorker=" + "1"
      `${process.env.VUE_APP_ROOT_API}admin_worker/selectApplicationByWorker?idWorker=` + "1"
    );
    console.log(this.noValue);
    console.log(this.workerApp.length == 0);
    if (this.workerApp.length == 0) {
      this.noValue = true;
    } else {
      this.noValue = false;
    }
    console.log("After IF Condition " + this.noValue);
  },
};
</script>
