<template>
  <!-- The button to open modal -->
  <label for="my-modal-5" class="btn modal-button">open modal</label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal font-sans-thai">
    <div v-for="w in worker" :key="w.idWorker" class="">
      <div v-if="w.idWorker == 1">
        <div class="modal-box w-96 max-w-screen-5xl">

          <h3 class="font-bold text-lg mb-5">ยืนยันข้อมูลการสมัครงาน</h3>
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
              ...
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
              {{ w.firstName + " " + w.middleName + " " + w.lastName }}
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
              ...
            </p>
          </div>
          <div class="modal-action justify-between">
            <label for="my-modal-6" class="btn btn-ghost px-14 h-11"
              >ยกเลิก</label
            >
            <label
              for="my-modal-6"
              class="btn border-0 bg-orange-1 hover:bg-orange-2 px-14 h-11"
              >ถัดไป</label
            >
          </div>

          <p>ยืนยันที่จะสมัครงานตำแหน่ง... ของบริษัท...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      worker: [],
      urlWorker: "http://localhost:3000/admin/allWorker",
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
    // const allWorker = await this.fetch("http://localhost:3000/admin/allWorker");
    this.worker = await this.fetch(this.urlWorker);
  },
};
</script>