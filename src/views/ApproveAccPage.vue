<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <base-tab></base-tab>
    <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
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
        การตรวจสอบบัญชี
      </p>
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="a in listApprove" :key="a.idApprove">
          <!-- row 1 -->
          <tr v-if="a.status.statusName == 'Waiting_Approve'">
            <th>{{a.idApprove}}</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="font-bold">ชื่อแซ่</div>
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <td>
              WORKER/EMP
              <!-- <br>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span> -->
            </td>
            <td>ประเทศ</td>
            <th>
              <!-- detail -->
              <label for="my-modal-5" class="btn btn-ghost btn-xs"
                >รายละเอียด</label
              >
              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">รายละเอียด</h3>
                  <p class="py-4">รอดึง</p>
                  <div class="w-full px-3 mb-5">
                    <div class="2xl:flex 2xl:space-x-5">
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            name="radio-6"
                            class="radio checked:bg-blue-500"
                          />
                          <span class="label-text 2xl:pr-0 pr-24">อนุมัติ</span>
                        </label>
                      </div>
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            type="radio"
                            name="radio-6"
                            class="radio checked:bg-red-500"
                          />
                          <span class="label-text 2xl:pr-0 pr-28"
                            >ไม่อนุมัติ</span
                          >
                        </label>
                      </div>
                    </div>
                    <textarea
                      class="textarea textarea-bordered w-full h-36"
                      placeholder="หมายเหตุที่ไม่อนุมัติ"
                    ></textarea>
                  </div>
                  <div class="modal-action">
                    <label for="my-modal-5" class="btn">ปิด</label>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import BaseTab from "@/components/BaseTab.vue";

export default {
  components: { BaseTab },
  data() {
    return {
      listApprove: [],
    };
  },
  methods:{
    test(){
      console.log("test")
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
  async created() {
    this.listApprove = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/allApprove`);
    console.log(this.listApprove)
  },  
};
</script>

<style>
</style>