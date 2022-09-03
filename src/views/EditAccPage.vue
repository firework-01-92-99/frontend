<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <base-tab></base-tab>
    <base-table>
      <template #header> การแก้ไขบัญชี </template>
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
import BaseTab from "@/components/BaseTab.vue";
import BaseTable from "@/components/BaseTable.vue";
export default {
  components: { BaseTab, BaseTable },
};
</script>

<style>
</style>