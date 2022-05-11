<template>
  <div
    class="
      bg-gray-2
      2xl:h-screen
      xl:h-screen
      lg:h-screen
      md:h-screen
      h-full
      font-sans-thai
    "
  >
    <p class="text-2xl font-semibold 2xl:p-6 xl:p-6 lg:p-6 md:p-6 p-3 ml-3.5">
      ติดตามสถานะการสมัครงาน
    </p>
    <!-- table: Desktop -->
    <div class="2xl:block xl:block lg:block md:block hidden overflow-x-auto">
      <table class="table w-3/4 mx-auto">
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
          <!-- row 1 -->
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
            </td>
            <td>
              <button
                @click="cancel()"
                class="btn border-red-700 bg-red-700 w-full"
              >
                ยกเลิกการสมัคร
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- card: Mobile -->
    <div
      class="
        2xl:hidden
        xl:hidden
        lg:hidden
        md:hidden
        flex flex-wrap
        justify-center
      "
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
          hover:-translate-y-1
          hover:scale-110
          hover:border-4
          hover:border-orange-1
        "
      >
        <div>
          <!-- <figure>
            <img src="https://i.ytimg.com/vi/J_oT9erINxA/maxresdefault.jpg" />
          </figure> -->

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
              <button
                @click="cancel()"
                class="btn border-red-700 bg-red-700 w-full -mt-16"
              >
                ยกเลิกการสมัคร
              </button>
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
      urlWorkerApp:
        "http://localhost:3000/admin/selectApplicationByWorker?idWorker=",
      status: [],
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
    cancel() {
      console.log("cancel");
    },
  },
  async created() {
    this.workerApp = await this.fetch(this.urlWorkerApp + "1");
    this.status = await this.fetch(
      "http://localhost:3000/admin_worker/selectApplicationByWorker?idWorker=" +
        "1"
    );
  },
};
</script>
