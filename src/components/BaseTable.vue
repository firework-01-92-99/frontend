<template>
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
      <slot name="header"></slot>
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
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
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
                  <slot name="action"></slot>
                </div>
                <div class="modal-action">
                  <label for="my-modal-5" class="btn">ปิด</label>
                </div>
              </div>
            </div>
            <!-- <slot name="action"></slot> -->
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
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$route.name;
    },
  },
};
</script>

<style>
</style>