<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <div class="tabs">
      <p
        :class="{ 'text-red-600': routes == 'ApproveAccPage' }"
        class="tab tab-bordered text-black"
        @click="$router.push('/approve')"
      >
        ตรวจสอบบัญชี
      </p>
      <a
        class="tab tab-bordered text-black"
        :class="{ 'text-red-600': routes == 'approve' }"
        @click="$router.push('/approve/edit')"
        >คำขอแก้ไขบัญชี</a
      >
      <a
        class="tab tab-bordered text-black"
        :class="{ 'text-red-600': routes == 'approve' }"
        @click="$router.push('/approve/delete')"
        >คำขอลบบัญชี</a
      >
    </div>
    <base-table>
      <template #header> การลบบัญชี </template>
      <template #action>
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
              <span class="label-text 2xl:pr-0 pr-28">ไม่อนุมัติ</span>
            </label>
          </div>
        </div>
        <textarea
          class="textarea textarea-bordered w-full h-36"
          placeholder="หมายเหตุที่ไม่อนุมัติ"
        ></textarea>
      </template>
    </base-table>
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
export default {
  components: { BaseTable },
};
</script>

<style>
</style>