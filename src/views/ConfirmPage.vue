<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <base-table>
      <template #header> ยืนยันการรับแรงงานของนายจ้าง </template>
      <template #action>
        <p class="py-4">การดำเนินการหลังนายจ้างปฏิเสธ</p>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">xxx</label><br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">xxxx</label><br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">xxxx</label><br />
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