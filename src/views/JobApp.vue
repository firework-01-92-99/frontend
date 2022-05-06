<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <p class="text-2xl font-semibold p-6">ติดตามสถานะการสมัครงาน</p>
    <!-- table: Desktop -->
    <div class="overflow-x-auto">
      <table class="table w-3/4 mx-auto">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th class="text-base">บริษัท</th>
            <th class="text-base">ตำแหน่ง</th>
            <th class="text-base">ที่อยู่</th>
            <th class="text-base">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="a in workerApp" :key="a.idApplication">
            <th>{{ a.idApplication }}</th>
            <td>ชื่อบริษัท</td>
            <td>ชื่อตำแหน่ง</td>
            <td>ที่อยู่</td>
            <td>สถานะ</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- card: Mobile -->
    <div class="flex flex-wrap justify-center p-6 mt-1">
      <div
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
                  job.position.positionName
                </h2>
              </div>
              <h2 class="card-title text-base">e.establishmentName</h2>
              <p>
                <span class="inline-block align-middle"
                  ><i class="material-icons pr-2"> place </i></span
                >
                <span class="hidden font-semibold text-base">ที่อยู่ : </span>
                <span class="text-base font-medium inline-block align-middle"
                  >e.address</span
                >
              </p>
              <div
                class="
                  badge badge-lg
                  w-full
                  bg-orange-200
                  text-orange-500
                  border-0
                "
              >
                Pending
              </div>
              <div
                class="
                  badge badge-lg
                  w-full
                  bg-green-200
                  text-green-600
                  border-0
                "
              >
                Accepted
              </div>
              <div
                class="
                  badge badge-lg
                  w-full
                  bg-red-200
                  text-red-600
                  border-0
                "
              >
                Rejected
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
      urlWorkerApp: "http://localhost:3000/admin/allApplication",
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
  },
  async created() {
    this.workerApp = await this.fetch(this.urlWorkerApp);
  },
};
</script>
