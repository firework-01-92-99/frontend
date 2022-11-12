<template>
  <div class="bg-gray-2 h-full font-sans-thai">
    <div class="">
      <button
        @click="$router.push('/')"
        class="btn btn-ghost font-sans-thai flex justify-start ml-7 mt-5"
      >
        <i class="material-icons"> arrow_back_ios </i>หางาน
      </button>
    </div>
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
      รายการบริษัททั้งหมด
    </p>
    <div class="container mx-auto flex flex-wrap justify-center">
      <div
        v-for="i in showEmployer"
        :key="i.idEmployer"
        class="card w-40 h-36 shadow-xl cursor-pointer m-6"
      >
        <div class="w-full">
          <div>
            <img
              @click="selectImage(i)"
              :src="envImage + i.profile"
              class="object-cover w-40 h-36"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showEmployer: [],
      envImage: `${process.env.VUE_APP_ROOT_API}main/image/`,
      // img:
    };
  },
  methods: {
    selectImage(emp) {
      this.$router.push("/jobOfThisEmp?idEmp=" + emp.idEmployer);
    },
  },
  async created() {
    const showEmployer1 = await axios.get(
      `${process.env.VUE_APP_ROOT_API}main/allEmployer`
    );
    this.showEmployer = showEmployer1.data;
    console.log(this.showEmployer);
  },
};
</script>

<style>
</style>