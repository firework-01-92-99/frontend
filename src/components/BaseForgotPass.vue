<template>
  <div class="flex flex-col flex-1 justify-center mb-8">
    <h1 class="font-bold text-4xl text-center">ลืมรหัสผ่าน ?</h1>
    <p>รหัส OTP จะถูกส่งไปยังอีเมลที่คุณกรอก</p>
    <div class="w-full mt-4">
      <form
        autocomplete="off"
        @submit.prevent="submit"
        class="form-horizontal w-3/4 mx-auto"
      >
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-5">
            <label for="email" class="text-base font-medium px-1">อีเมล</label>
            <div class="flex">
              <div
                class="
                  w-10
                  z-10
                  pl-1
                  text-center
                  pointer-events-none
                  flex
                  items-center
                  justify-center
                "
              >
                <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                v-model="form.username"
                class="
                  w-full
                  -ml-10
                  pl-10
                  pr-3
                  py-2
                  rounded-lg
                  border-2 border-gray-200
                  outline-none
                  focus:border-indigo-500
                "
                placeholder="อีเมล"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <button
            type="submit"
            class="
              bg-orange-1
              hover:bg-orange-2
              text-white text-base
              font-medium
              py-2
              px-4
              rounded
            "
          >
            ยืนยัน
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>