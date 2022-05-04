<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <p class="text-2xl font-semibold p-6">ติดตามสถานะการสมัครงาน</p>
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
