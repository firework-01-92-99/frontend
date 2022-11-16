<template>
  <div v-if="$store.state.auth.user" class="bg-gray-2 h-full font-sans-thai py-16">
        <div v-if="showToast" class="flex justify-center pt-2">
          <div
            class="absolute z-10 2xl:w-2/5 w-full alert bg-cyan-200 shadow-lg"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p class="font-sans-thai">
                ตำแหน่งนี้มีผู้ที่ใช้งานอยู่
              </p>
            </div>
          </div>
        </div>    
    <div
      class="hero 2xl:h-64 xl:h-64 lg:h-64 md:h-64 h-32"
      style="
        background-image: url(https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="w-full">
          <h1
            class="
              mb-5
              2xl:text-5xl
              xl:text-5xl
              lg:text-5xl
              md:text-5xl
              text-2xl
              font-bold
            "
          >
            สวัสดีคุณ
            {{ myAcc.data.firstName + " " + myAcc.data.lastName }}
          </h1>
        </div>
      </div>
    </div>
    <div class="2xl:p-6 2xl:pl-32 xl:p-6 lg:p-6 md:p-6 md:pl-14 p-3 pt-5 pl-8">
      <base-tab>
        <template
          ><a
            :class="{ 'tab-active': routes == 'ReqPosition' }"
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            @click.prevent="$router.push('/reqPosition')"
          >
            รายการคำขอ
          </a>
          <a
            class="
              tab tab-bordered tab-active
              font-medium
              2xl:text-base
              md:text-base
              text-xs
            "
            :class="{ 'tab-active': routes == 'AllPosition' }"
            @click.prevent="$router.push('/allPosition')"
            >ตำแหน่งทั้งหมด</a
          >
        </template>
      </base-tab>
    </div>

    <div class="2xl:flex 2xl:flex-row md:flex md:flex-row flex flex-col">
      <div class="flex w-full justify-start">
        <div class="w-full">
          <p
            class="
              2xl:text-2xl
              md:text-xl
              sm:text-lg
              font-semibold
              2xl:p-6 2xl:pl-28
              xl:p-6
              lg:p-6
              md:p-6 md:pl-12
              p-3
              pt-5
              2xl:ml-3.5
              md:ml-3.5
              ml-5
            "
          >
            ตำแหน่งทั้งหมด
          </p>
        </div>
        <!-- <select
        @click="searchStatusPost()"
        v-model.trim="actOrInPost"
        class="
          select select-bordered
          2xl:w-2/5 2xl:text-base
          md:text-xs
          font-normal
        "
      >
        <option class="text-black" value="Active" selected="selected">
          เปิดประกาศรับสมัคร
        </option>
        <option class="text-black" value="Inactive">ปิดประกาศรับสมัคร</option>
      </select> -->
        <div
          class="
            w-full
            2xl:-mt-0
            md:-mt-0
            -mt-3
            2xl:-ml-0
            lg:-ml-36
            md:ml-32
            -ml-16
          "
        >
          <select
            @click="filterPostition()"
            v-model="inOrAct"
            class="
              select select-bordered
              2xl:w-3/5 2xl:text-base xl:text-base lg:text-base
              md:text-xs
              font-normal
              mt-3
            "
          >
            <option disabled value>ตำแหน่งที่เปิดใช้งาน</option>
            <option class="text-black" value="Active">
              ตำแหน่งที่เปิดใช้งาน
            </option>
            <option class="text-black" value="Inactive">
              ตำแหน่งที่ปิดใช้งาน
            </option>
          </select>
        </div>
      </div>
      <div
        class="
          2xl:flex
          md:flex
          flex
          2xl:p-3
          xl:p-3
          lg:p-3
          md:p-3
          p-5
          2xl:mt-0
          md:mt-0
          mt-11
          w-full
          2xl:justify-end
          md:justify-end
          justify-center
        "
      >
        <button
          @click="toggleModal = !toggleModal, position.positionName = ''"
          class="
            btn
            border-orange-1
            bg-orange-1
            hover:bg-orange-2 hover:border-orange-2
            2xl:w-1/5
            md:w-2/3
            w-11/12
            -mt-12
            mr-0
            2xl:mr-28
            xl:mr-3
            lg:mr-3
            md:mr-3
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            2xl:text-base
            xl:text-base
            lg:text-base
            md:text-xs
          "
        >
          เพิ่มตำแหน่ง
        </button>
      </div>
    </div>

    <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <table class="table w-full mb-10">
        <!-- head -->
        <thead>
          <tr v-if="!noValue">
            <th></th>
            <th>ตำแหน่ง</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(active, index) in allActivePostion" :key="active.idposition">
          <!-- <tbody v-for="a in listApprove.data" :key="a.idApprove"> -->
          <!-- row 1 -->
          <!-- <div v-if="listApprove.lenght == null">
            ไม่มีรายการที่ต้องทำ
          </div> -->
          <tr>
            <th>{{index + 1}}</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="">{{active.positionName}}</div>
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <th>
              <!-- detail -->
              <button @click="callDataEditPosition(active), popUp = true" class="btn btn-ghost btn-xs">
                <i class="material-icons"> edit </i>
              </button>
              <button @click="deletePosition(active.idposition)" class="btn btn-ghost btn-xs">
                <i class="material-icons text-red-800"> delete </i>
              </button>
              <button @click="activeAndInactivePosition(active.idposition)" class="btn btn-ghost btn-xs"> {{inOrAct == 'Active' ? 'ปิดการใช้งาน' : 'เปิดการใช้งาน'}}</button>
            </th>
          </tr>
        </tbody>

        <!-- foot -->
        <!-- <tfoot>
          <tr>
            <th></th>
            <th>ชื่อ</th>
            <th>ประเภทบัญชี</th>
            <th>สัญชาติ</th>
            <th></th>
          </tr>
        </tfoot> -->
      </table>
    </div>
    <div v-if="noValue" class="text-center mt-10">
      <div><img src="../assets/icon/inbox.png" class="w-20 mx-auto" /></div>
      <div class="pt-5">ไม่มีรายการคำขอ</div>
    </div>

    <!-- modal -->
    <div
      v-if="toggleModal"
      class="
        fixed
        overflow-x-hidden overflow-y-auto
        inset-0
        flex
        justify-center
        items-center
        z-50
      "
    >
      <div class="relative mx-auto 2xl:w-1/2 md:w-11/12 w-11/12">
        <div
          class="
            bg-white
            w-full
            overflow-y-auto
            h-full
            rounded-lg
            shadow-2xl
            flex flex-col
          "
        >
          <!-- <div v-show="iAm == 'Employer' || iAm == 'Worker'" class=" p-8"> -->
          <div class="p-8">
            <h3 class="font-bold text-lg">เพิ่มตำแหน่ง</h3>

            <div class="flex flex-col 2xl:w-full mt-4">
              <div class="flex flex-col w-full flex-1 justify-between mb-8">
                <div class="w-full">
                  <form class="form-horizontal 2xl:w-full md:w-full">
                    <div>
                      <div class="flex -mx-3">
                        <div class="w-full px-3">
                          <label for="" class="text-base font-medium 2xl:px-1"
                            ></label
                          >
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
                            ></div>
                            <input
                              v-model="position.positionName"
                              type="text"
                              class="
                                w-full
                                -ml-10
                                pl-5
                                pr-3
                                py-2
                                rounded-lg
                                border-2 border-gray-200
                                outline-none
                                focus:border-indigo-500
                              "
                              placeholder="ชื่อตำแหน่ง"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <button
                @click="createPosition()"
                class="
                  btn
                  w-2/5
                  bg-orange-1
                  hover:bg-orange-2
                  border-orange-1
                  hover:border-orange-1
                "
              >
                เพิ่ม
              </button>
              <button @click="toggleModal = false" class="btn w-2/5">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div
      v-if="popUp"
      class="
        fixed
        overflow-x-hidden overflow-y-auto
        inset-0
        flex
        justify-center
        items-center
        z-50
      "
    >
      <div class="relative mx-auto 2xl:w-1/2 md:w-11/12 w-11/12">
        <div
          class="
            bg-white
            w-full
            overflow-y-auto
            h-full
            rounded-lg
            shadow-2xl
            flex flex-col
          "
        >
          <!-- <div v-show="iAm == 'Employer' || iAm == 'Worker'" class=" p-8"> -->
          <div class="p-8">
            <h3 class="font-bold text-lg">แก้ไขตำแหน่ง</h3>

            <div class="flex flex-col 2xl:w-full mt-4">
              <div class="flex flex-col w-full flex-1 justify-between mb-8">
                <div class="w-full">
                  <form class="form-horizontal 2xl:w-full md:w-full">
                    <div>
                      <div class="flex -mx-3">
                        <div class="w-full px-3">
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
                            ></div>
                            <input
                              v-model="position.positionName"
                              type="text"
                              class="
                                w-full
                                -ml-10
                                pl-5
                                pr-3
                                py-2
                                rounded-lg
                                border-2 border-gray-200
                                outline-none
                                focus:border-indigo-500
                              "
                              placeholder="ชื่อตำแหน่ง"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <button
                @click="editPosition()"
                class="
                  btn
                  w-2/5
                  bg-orange-1
                  hover:bg-orange-2
                  border-orange-1
                  hover:border-orange-1
                "
              >
                แก้ไข
              </button>
              <button @click="popUp = false" class="btn w-2/5">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal || popUp"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
  </div>
</template>

<script>
import BaseTab from "@/components/BaseTab.vue";
import axios from "axios";
export default {
  components: { BaseTab },
  data() {
    return {
      routes: '',
      noValue: false,
      myAcc: [],
      toggleModal: false,
      allActivePostion: false,
      inOrAct: '',
      position: {
        idposition: '',
        positionName: '',
        // status:{
        //   idStatus: 1
        // }
      },
      idPosition: 0,
      // positionName: '',
      wantToEdit: false,
      popUp: false,
      showToast: false,
    };
  },
  methods: {
    async callDataEditPosition(position){
      this.position.idposition = position.idposition
      this.position.positionName = position.positionName
    },
    async editPosition(){
      const position = JSON.stringify(this.position)
        const customConfig = {
        headers: {
          "Content-Type": "application/json",
          },
          }      
      await axios.put(`${process.env.VUE_APP_ROOT_API}admin/editPosition`, position, customConfig);
      this.popUp = false;
      this.callDataActive()
    },
    async deletePosition(id){
      const vm = this
      if(confirm("คุณต้องการจะลบตำแหน่งนี้ใช่หรือไม่")){
        await axios.delete(`${process.env.VUE_APP_ROOT_API}admin/adminDeletePosition?idPosition=` + id ).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
    if(error.response.data.errorMessage == "This position used,You can't Delete."){
      console.log("เข้าไหม")
      vm.showToast = true
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => (vm.showToast = false), 4000);
    }
  });
      }
      this.callDataActive()
    },
    async activeAndInactivePosition(id){
      if(this.inOrAct == 'Active'){
      if(confirm("ต้องการจะปิดใช้งานตำแหน่งใช่หรือไม่")){
        await axios.put(`${process.env.VUE_APP_ROOT_API}admin/adminInactivePosition?idPosition=` + id );
      }
      }else{
       if(this.inOrAct == 'Inactive'){
      // if(confirm("ต้องการจะเปิดใช้งานตำแหน่งใช่หรือไม่")){
        await axios.put(`${process.env.VUE_APP_ROOT_API}admin/adminActivePosition?idPosition=` + id );
      // }
        if(this.inOrAct == 'Inactive'){
          this.inOrAct = 'Inactive'
          this.filterPostition()
          console.log(this.allActivePostion)
      // const allInActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allInactivePosition`);
      // this.allActivePostion = allInActivePostion.data          
        }
        window.location.reload()      
       } 
      }
      this.callDataActive()
      if(this.allActivePostion.length == 0){
        this.noValue = true
      }      
    },    
    async createPosition(){
      const position = JSON.stringify(this.position)
        const customConfig = {
        headers: {
          "Content-Type": "application/json",
          },
          }        
      const result = await axios.post(`${process.env.VUE_APP_ROOT_API}admin/createPosition`, position, customConfig);
      this.toggleModal = false
      console.log(result.data);
      const allActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allActivePosition`);
      this.allActivePostion = allActivePostion.data            
    },
    async filterPostition(){
      if(this.inOrAct == 'Active'){
      const allActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allActivePosition`);
      this.allActivePostion = allActivePostion.data
      this.noValue = this.allActivePostion.length == 0
      }else{
        if(this.inOrAct == 'Inactive'){
      const allInActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allInactivePosition`);
      this.allActivePostion = allInActivePostion.data
      this.noValue = this.allActivePostion.length == 0
        }
      }

    },
    async callDataActive(){
      const allActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allActivePosition`);
      this.allActivePostion = allActivePostion.data     
    },
  },
  async created() {
    console.log("1")
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      this.myAcc = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/meAdmin`
      );
      const allActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allActivePosition`);
      this.allActivePostion = allActivePostion.data
      this.noValue = this.allActivePostion.length == 0
      if(this.inOrAct == 'Inactive'){
      const allInActivePostion = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/allInactivePosition`);
      this.allActivePostion = allInActivePostion.data
      this.noValue = this.allActivePostion.length == 0
      }      
      this.inOrAct = 'Active'
      console.log(this.allActivePostion)
    }
  },
};
</script>

<style>
</style>