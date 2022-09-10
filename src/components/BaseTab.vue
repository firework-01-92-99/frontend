<template>
  <div class="tabs">
    <a
      :class="{ 'tab-active': routes == 'ApproveAccPage' }"
      class="tab tab-bordered text-black"
      @click="$router.push('/approve')"
    >
      ตรวจสอบบัญชี
    </a>
    <a
      class="tab tab-bordered text-black"
      :class="{ 'tab-active': routes == 'EditAccPage' }"
      @click="$router.push('/approve/edit')"
      style="pointer-events: none"
      >คำขอแก้ไขบัญชี</a
    >
    <a
      class="tab tab-bordered text-black"
      :class="{ 'tab-active': routes == 'DelAccPage' }"
      @click="$router.push('/approve/delete')"
      style="pointer-events: none"
      >คำขอลบบัญชี</a
    >
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