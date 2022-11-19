<template>
  <div class="bg-gray-2 font-sans-thai py-20 px-5">
    <div class="">
      <button
        @click="goTo()"
        class="btn btn-ghost font-sans-thai flex justify-start ml-2.5"
      >
        <i class="material-icons"> arrow_back_ios </i>{{$route.query.history == 'yes' ? 'ดูผู้สมัคร' : 'ประกาศรับสมัครงาน'}}
      </button>
    </div>
    <div class="w-11/12 ml-3.5">
    <p v-if="$route.query.history == 'yes'" class="2xl:text-2xl
          md:text-xl
          sm:text-lg
          font-semibold
          2xl:p-6 2xl:pl-28
          xl:p-6
          lg:p-6
          md:p-6 md:pl-12
          p-3
          pt-5
          2xl:ml-0
          md:ml-3.5
          ml-5
          w-full">ประวัติ</p>
          </div>
    <div class="2xl:p-6 2xl:pl-32 xl:p-6 lg:p-6 md:p-6 md:pl-14 p-3 pt-5 pl-8">
      <base-tab
        ><template
          ><a
            :class="{ 'tab-active font-medium': idStatus == 11 || idStatus == 13}"
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            @click="tab = 1, tabTo()"
          >
            ผู้ที่รอรับสมัคร
          </a>
          <a
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            :class="{ 'tab-active font-medium': idStatus == 14 || idStatus == 16}"
            @click="tab = 2, tabTo()"
            >ยืนยันการรับเข้าทำงาน</a
          >
          <a
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            :class="{ 'tab-active font-medium': idStatus == 21 ||  idStatus == 23}"
            @click="tab = 3, tabTo()"
            >คนงานที่กำลังทำงาน</a
          >
          <a
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            :class="{ 'tab-active font-medium': idStatus == 24 ||  idStatus == 26}"
            @click="tab = 4, tabTo()"
            >{{$route.query.history != 'yes' ? 'ให้คะแนนคนงาน' : 'ให้คะแนนแล้ว'}}</a
          >
          </template
        ></base-tab
      >
    </div>

    <base-view-worker
      :idPost="$route.query.idPost"
      :idStatus="idStatus"
      :idStatus2="idStatus2"
      :idStatus3="idStatus3"
      :idStatus4="idStatus4"
      @statusToPage="receiveStatus"
    ></base-view-worker>
  </div>
</template>

<script>
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
      idStatus: "11",
      idStatus2: "14",
      idStatus3: "29",
      idStatus4: "31",
      tab: 1,
    };
  },
  methods: {
    receiveStatus(events){
      console.log("เธอใช่ไหม" + events)
      this.idStatus = events
    },
    tabTo(){
      console.log(this.idStatus)
      if(this.$route.query.history != 'yes'){
        console.log("history != yes")
      if(this.tab == 1){
        this.idStatus = 11
      }else if(this.tab == 2){
        this.idStatus = 14
      }else if(this.tab == 3){
        this.idStatus = 21
      }else if(this.tab == 4){
        this.idStatus = 24
      }
      }else{
        if(this.$route.query.history == 'yes'){
          console.log("history == yes")
          console.log(this.idStatus)
      if(this.tab == 1){
        this.idStatus = 13
        this.idStatus2 = 14
        console.log(this.idStatus)
        console.log(this.idStatus2)
      }else if(this.tab == 2){
        this.idStatus = 16
        this.idStatus2 = 21
      }else if(this.tab == 3){
        this.idStatus = 23
        this.idStatus2 = 24
      }else if(this.tab == 4){
        this.idStatus = 26
        this.idStatus2 = 20
        this.idStatus3 = 29
        this.idStatus4 = 31
      }
        }
      }
    },
    goTo(){
      if(this.$route.query.history == 'yes'){
        // this.refreshData = 'yes'
        this.$router.push('/viewworkapp?idPost=' + this.$route.query.idPost)
        this.idStatus = 11
        // location.reload();
        // this.$router.go(this.$router.currentRoute)
      }else{
        this.$router.push('/posting')
      }
    },
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
      if(this.$route.query.history == 'yes'){
        this.idStatus = 13
      }
      //  console.log(this.idPost + "ถ้าส่ง query(param) url มาได้ก็เรียก whoApp บ้างได้แล้ว")
      // this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` + this.$route.query.idPost + "&idStatus=" + this.idStatus);
      // console.log(this.whoApplication)
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>