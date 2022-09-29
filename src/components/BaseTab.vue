<template>
  <div class="tabs">
  <slot></slot>
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