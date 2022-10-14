<template>
  <div class="bg-gray-2 h-screen font-sans-thai">
    <div>
      <button
        @click="$router.push('/posting')"
        class="btn btn-ghost font-sans-thai flex justify-start ml-2.5"
      >
        <i class="material-icons"> arrow_back_ios </i>ประกาศรับสมัครงาน
      </button>
    </div>
    <div class="2xl:p-6 2xl:pl-32 xl:p-6 lg:p-6 md:p-6 p-3 pt-5">
      <base-tab
        ><template
          ><a
            :class="{ 'tab-active font-medium': idStatus == 0 }"
            class="tab tab-bordered"
            @click="idStatus = 0"
          >
            รอรับ
          </a>
          <a
            class="tab tab-bordered"
            :class="{ 'tab-active font-medium': idStatus == 4 }"
            @click="idStatus = 4"
            >รับแล้ว</a
          ></template
        ></base-tab
      >
    </div>

    <base-view-worker
      :idPost="$route.query.idPost"
      :idStatus="idStatus"
    ></base-view-worker>
  </div>
</template>

<script>
// import axios from "axios";
import BaseViewWorker from "@/components/BaseViewWorker.vue";
import BaseTab from "@/components/BaseTab.vue";
export default {
  components: { BaseViewWorker, BaseTab },
  props: ["idPost"],
  data() {
    return {
      routes: "",
      // whoApplication: [],
      idPosting: "",
      idStatus: "0", //รอ be ทำ wating 0 คือแทนทั้ง status 4,5 ไปก่อน
    };
  },
  methods: {
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      console.log(
        "this.$route.query.idPost ViewWorkApp page = " +
          this.$route.query.idPost
      );
      this.idPosting = this.$route.query.idPost;
      //  console.log(this.idPost + "ถ้าส่ง query(param) url มาได้ก็เรียก whoApp บ้างได้แล้ว")
      // this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorker?idPosting=` + this.$route.query.idPost + "&idStatus=" + this.idStatus);
      // console.log(this.whoApplication)
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>