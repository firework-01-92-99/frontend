<template>
  <div class="bg-gray-2 h-full font-sans-thai">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-4 text-center">
          <div class="row">
            <div class="col-sm-12 mt-5 bgWhite">
              <div class="title">Verify OTP</div>

              <form action="" class="mt-5">
                <input
                  class="otp border border-black"
                  type="text"
                  @input="digitValidate(this)"
                  @keyup="tabChange(1)"
                  maxlength="1"
                />
                <input
                  class="otp border border-black"
                  type="text"
                  @input="digitValidate(this)"
                  @keyup="tabChange(2)"
                  maxlength="1"
                />
                <input
                  class="otp border border-black"
                  type="text"
                  @input="digitValidate(this)"
                  @keyup="tabChange(3)"
                  maxlength="1"
                />
                <input
                  class="otp border border-black"
                  type="text"
                  @input="digitValidate(this)"
                  @keyup="tabChange(4)"
                  maxlength="1"
                />
              </form>
              <hr class="mt-4" />
              <button class="btn btn-primary btn-block mt-4 mb-4 customBtn">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
export default {
  data() {
    return {
       
        
    };
  },
  methods: {
    digitValidate(ele) {
      console.log(ele.value);
      ele.value = ele.value.replace(/[^0-9]/g, "");
    },

    tabChange(val) {
      let ele = document.querySelectorAll("input");
      if (ele[val - 1].value != "") {
        ele[val].focus();
      } else if (ele[val - 1].value == "") {
        ele[val - 2].focus();
      }
    },
  },
};
</script>

<style>
body {
  background: #eee;
}

.bgWhite {
  background: white;
  box-shadow: 0px 3px 6px 0px #cacaca;
}

.title {
  font-weight: 600;
  margin-top: 20px;
  font-size: 24px;
}

.customBtn {
  border-radius: 0px;
  padding: 10px;
}

form input {
  display: inline-block;
  width: 50px;
  height: 50px;
  
}
</style>