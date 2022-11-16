<template>
  <div v-if="$store.state.auth.user" class="bg-gray-2 h-screen font-sans-thai py-16">
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
            class="
              tab tab-bordered tab-active
              font-medium
              2xl:text-base
              md:text-base
              text-xs
            "
            @click.prevent="$router.push('/reqPosition')"
          >
            รายการคำขอ
          </a>
          <a
            class="tab tab-bordered 2xl:text-base md:text-base text-xs"
            :class="{ 'tab-active': routes == 'AllPosition' }"
            @click.prevent="$router.push('/allPosition')"
            >ตำแหน่งทั้งหมด</a
          >
        </template>
      </base-tab>
    </div>
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
      รายการคำขอเพิ่มตำแหน่ง
    </p>
    <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <table class="table w-full mb-10">
        <!-- head -->
        <thead>
          <tr v-if="!noValue">
            <th></th>
            <th>ตำแหน่ง</th>
            <!-- <th>บริษัท</th> -->
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(w, index) in waitingPosition" :key="w.idposition">
          <!-- <tbody v-for="a in listApprove.data" :key="a.idApprove"> -->
          <!-- row 1 -->
          <!-- <div v-if="listApprove.lenght == null">
            ไม่มีรายการที่ต้องทำ
          </div> -->
          <tr>
            <th>{{ index + 1 }}</th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="">{{ w.positionName }}</div>
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <!-- <td>
              ชื่อบริษัท
            </td> -->
            <th>
              <!-- detail -->
              <button @click="applyPosition(w)" class="btn btn-ghost btn-xs">
                <i class="material-icons text-green-600"> done </i>
              </button>
              <button @click="rejectPosition(w)" class="btn btn-ghost btn-xs">
                <i class="material-icons text-red-600"> close </i>
              </button>
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
    <!-- <div
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
      <div class="relative mx-auto 2xl:w-1/2 md:w-11/12 w-11/12 h-5/6">
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
          <div v-show="iAm == 'Employer' || iAm == 'Worker'" class=" p-8">
            <h3 class="font-bold text-lg">รายละเอียด</h3>

            <div class="flex flex-col 2xl:w-full mt-4">
              <div class="flex flex-col w-full flex-1 justify-between mb-8">
                <div class="w-full">
                  <form class="form-horizontal 2xl:w-full md:w-full">
                    <div>
                      <div v-if="aa" class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                          <label for="" class="text-base font-medium 2xl:px-1"
                            >ชื่อสถานประกอบการ</label
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
                                placeholder-black placeholder-opacity-100
                              "
                              :placeholder="infoEmp.establishmentName"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="w-full mb-5">
              <div class="flex-col w-full">
                <div class="flex space-x-10">
                  <div class="form-control">
                    <label class="label cursor-pointer 2xl:space-x-2">
                      <input
                        type="radio"
                        v-model.trim="statusId"
                        name="radio-1"
                        class="radio checked:bg-orange-1"
                        value="4"
                      />
                      <span class="label-text 2xl:pr-0 md:pl-5 pl-5"
                        >อนุมัติ</span
                      >
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label cursor-pointer 2xl:space-x-2">
                      <input
                        type="radio"
                        v-model.trim="statusId"
                        name="radio-2"
                        class="radio checked:bg-orange-1"
                        value="5"
                      />
                      <span class="label-text 2xl:pr-0 md:pl-5 pl-5"
                        >ไม่อนุมัติ</span
                      >
                    </label>
                  </div>
                </div>
                <div class="flex">
                  <p v-if="confirmInput" class="text-red-600">
                    กรุณาเลือกรูปแบบการอนุมัติ
                  </p>
                </div>
              </div>
              <textarea
                class="textarea textarea-bordered w-full h-36"
                placeholder="หมายเหตุที่ไม่อนุมัติ"
              ></textarea>
            </div>

            <div class="flex justify-between">
              <button
                @click="sendApprove(idApprove)"
                class="
                  btn
                  w-2/5
                  bg-orange-1
                  hover:bg-orange-2
                  border-orange-1
                  hover:border-orange-1
                "
              >
                ยืนยัน
              </button>
              <button @click="toggleModal = false" class="btn w-2/5">
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div
      v-if="toggleModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div> -->
  </div>
</template>

<script>
import BaseTab from "@/components/BaseTab.vue";
import axios from "axios";
export default {
  components: { BaseTab },
  data() {
    return {
      myAcc: [],
      waitingPosition: [],
      noValue: false,
      routes: '',
    };
  },
  methods: {
    async applyPosition(position) {
      let vm = this;
      let waitingPosition
      if (confirm("ต้องการจะอนุมัติคำขอนี้หรือไม่")) {
        await axios
          .put(
            `${process.env.VUE_APP_ROOT_API}admin/adminActivePosition?idPosition=` +
              position.idposition
          )
          .then(async function (response) {
            console.log(response);
            if (response.status == 200) {
              waitingPosition = await axios.get(
                `${process.env.VUE_APP_ROOT_API}admin_emp/allWaitingPosition`
              );
              vm.waitingPosition = waitingPosition.data;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    async rejectPosition(position) {
      let vm = this;
      let waitingPosition      
      if (confirm("ต้องการจะปฏิเสธคำขอนี้หรือไม่")) {
        axios.delete(
          `${process.env.VUE_APP_ROOT_API}admin/rejectEmpRequest?idPosition=` +
            position.idposition
        ).then(async function (response) {
            console.log(response);
            if (response.status == 200) {
              waitingPosition = await axios.get(
                `${process.env.VUE_APP_ROOT_API}admin_emp/allWaitingPosition`
              );
              vm.waitingPosition = waitingPosition.data;
            }
          })
      }
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
      this.myAcc = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin/meAdmin`
      );
      const waitingPosition = await axios.get(
        `${process.env.VUE_APP_ROOT_API}admin_emp/allWaitingPosition`
      );
      this.waitingPosition = waitingPosition.data;
      console.log(this.waitingPosition);
      this.noValue = this.waitingPosition.length == 0;
    }
  },
};
</script>

<style>
</style>