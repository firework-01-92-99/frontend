<template>
  <button class="btn border-0 px-14 h-11" :class="[bgcolor, txtcolor]">
    {{ txtbutt }}
  </button>
</template>

<script>
export default { props: ["bgcolor", "txtcolor", "txtbutt"] };
</script>

<style>
</style>