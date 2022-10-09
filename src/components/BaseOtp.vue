<template>
  <div>
    <otp-input
      :isValid="isCodeValid"
      @on-complete="onCompleteHandler"
      @on-changed="onChangedHandler"
      @on-paste="onPasteHandler"
    >
      <template #errorMessage> There is an error </template>
    </otp-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCodeValid: true,
    };
  },
  methods: {
    onCompleteHandler(code) {
      console.log("code completed", code);
      this.isCodeValid = false;
    },

    onChangedHandler(lastEnteredCode) {
      console.log("code changed", lastEnteredCode);
      this.isCodeValid = true;
    },

    onPasteHandler(code) {
      console.log("code pasted", code);
    },
  },
};
</script>