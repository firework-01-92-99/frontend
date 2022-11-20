<template>
  <div class="bg-gray-2 font-sans-thai w-screen h-full py-16">
      <!-- <div v-if="!acceptPage" class="overflow-x-auto w-10/12 mx-auto font-sans-thai"> -->
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
<div class="2xl:flex 2xl:flex-row md:flex md:flex-row flex flex-col w-full px-5">
      <div class="w-full justify-start">

        <div class="flex w-full">
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
          w-full
        "
      >
        รายการส่งคนงาน
      </p>
      <div class="2xl:mx-20 xl:mx-20 2xl:flex md:flex flex 2xl:p-0 md:p-10 p-5 2xl:mt-0 md:mt-0 mt-11 w-full 2xl:justify-end md:justify-end justify-center">
        <button
          @click="1,$router.push('/historySendWorker')"
          class="
            cursor-pointer
            underline
          text-blue-600
          hover:text-blue-700
            font-medium
            -mt-12
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-0
            text-sm
            ml-8
          "
        >
         ดูประวัติ
        </button>
      </div>
      </div>

      <div class="w-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-rows-2 mb-3">
        
        <div class="w-full 2xl:pt-4 xl:pt-3 lg:pt-3 md:pt-5 pt-8 2xl:ml-28 xl:ml-5 lg:ml-6 md:ml-12 ml-0 2xl:-mt-0 md:-mt-0 -mt-3">
          <select
            v-model.trim="idEmployer"
            class="
              select select-bordered
              2xl:w-1/2
              xl:w-1/2
              lg:w-1/2
              md:w-1/2
              w-5/6
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option class="" :value="''" disabled selected>
              กรุเลือกบริษัทที่ต้องการค้นหา
            </option>
            <option v-for="e in employerList" :key="e.idEmployer" class="text-black" :value="e.idEmployer" selected = "selected">{{'บริษัท' + ' ' + e.establishmentName}}</option>
          </select>
        </div>

        <div class="w-full 2xl:pt-4 xl:pt-3 lg:pt-3 md:pt-5 pt-8 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ml-0 2xl:-mt-0 md:-mt-0 -mt-3">
          <select
          @click="callData()"
            v-model.trim="roundHistory"
            class="
              select select-bordered
              2xl:w-1/6
              xl:w-1/6
              lg:w-2/6
              md:w-1/3
              w-5/6
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <option v-for="index in maxRound" :key="index" class="text-black" :value="index" selected = "selected">{{'ครั้งที่' + ' ' + index}}</option>
          </select>
        </div>

        </div>

      </div>
      
    </div>

      <div class="overflow-x-auto w-10/12 mx-auto font-sans-thai">
      <!-- <div v-for="who in whoApplication.data" :key="who.applicationId">
        {{who}}
      </div> -->
      <table class="table w-full mb-10">
        <!-- head -->
        <thead v-if="!closeColumnName">
          <tr>
            <th></th>
            <!-- <th>คะแนน</th> -->
            <th>ชื่อ</th>
            <th>ตำแหน่ง</th>
            <th>ชื่อบริษัท</th>
            <th>ที่อยู่</th>
            <th class="text-center">เวลาสมัคร</th>
            <th></th>
          </tr>
        </thead>
        <tbody
          v-for="(a, index) in sendWorkerList()"
          :key='a.applicationId'>

          <!-- {{a}} -->
          <!-- {{sendWorkerList().idPosting}} -->
          
          <!-- row 1 -->
          <tr>
            <th>{{ index + 1 }}</th>
            <!-- <td class="flex justify-items-center">
              <div class="rating rating-md">
                <input type="radio" name="rating-2" class="cursor-default mask mask-star-2 bg-orange-400" checked disabled />
              </div>
              <span class="pl-2">
                {{a.rate == null ? 'ผู้ใช้นี้ยังไม่มีคะแนน' : a.rate}}
              </span>
            </td> -->
            <td>
              <div class="flex items-center space-x-3">
                <div class="">
                  {{ a.firstName }}
                  <span>{{
                    a.middleName == null ||
                    a.middleName == "" ||
                    a.middleName == "-"
                      ? ""
                      : a.middleName + " "
                  }}</span>
                  {{ a.lastName == null || a.lastName == "" || a.lastName == "-" ? "" : a.lastName + " " }}
                </div>
              </div>
            </td>
            <td>
              {{a.positionName}}
            </td>

            <td>
                {{a.establishmentName}}
              <!-- {{
                ntTypeFreeze[
                  a.nationality ? a.nationality.nationality_name : ""
                ]
              }} -->
            </td>
            <td>
              {{a.address +
            " " +
            a.subDistrictName +
            " " +
            a.districtName +
            " " +
            a.provinceName +
            " " +
            a.postcode}}
            <!-- {{            a.address +
            " " + ''}} -->
            </td>
            <td class="text-center">
              {{ new Date(a.date).getDate()+
           "/"+(new Date(a.date).getMonth()+1)+
           "/"+new Date(a.date).getFullYear()+
           " "+new Date(a.date).getHours()+
           ":"+new Date(a.date).getMinutes()+
           ":"+new Date(a.date).getSeconds()}}
            </td>            
            <th>
              <!-- detail -->
              <button @click="tickDone(a)" class="btn btn-ghost btn-xs">
                <i class="material-icons text-green-600 tooltip" data-tip="ส่งคนงาน"> done </i>
              </button>
              <button @click="cancelSend(a)" class="btn btn-ghost btn-xs">
                <i class="material-icons text-red-600" data-tip="ปฏิเสธการส่งคนงาน"> close </i>
              </button>
              <button
                @click="openPopUp(a), getPic(a), (toggleModal = !toggleModal)"
                class="btn btn-ghost btn-xs"
              >
                รายละเอียด
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
      <div class="pt-5">ไม่มีรายการที่ต้องทำ</div>
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
          <div class="p-8">
            <div class="flex justify-between">
              <h3 class="font-bold text-lg">รายละเอียด</h3>
              <!-- <div class="rating rating-md">
                <input type="radio" name="rating-2" class=" mask mask-star-2 bg-orange-400 cursor-default" checked disabled/> 
                <span class="pl-2">{{whatWorker.rate == null ? 'ผู้ใช้นี้ยังไม่มีคะแนน' : whatWorker.rate}}</span>
              </div> -->
            </div>
            <div class="flex flex-col 2xl:w-full mt-4">
              <div class="flex flex-col w-full flex-1 justify-between mb-8">
                <div class="w-full">
                  <form class="form-horizontal 2xl:w-full md:w-full">
                    <div>
                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ประเภทแรงงาน</label
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
                              :placeholder="
                                workerType[
                                  whatWorker.workerType
                                    ? whatWorker.workerType.typeName
                                    : ''
                                ]
                              "
                              disabled
                            />
                          </div>
                        </div>
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >สัญชาติ</label
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
                            >
                              <i
                                class="
                                  mdi mdi-account-outline
                                  text-gray-400 text-lg
                                "
                              ></i>
                            </div>
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
                              :placeholder="
                                ntTypeFreeze[
                                  whatWorker.nationality
                                    ? whatWorker.nationality.nationality_name
                                    : ''
                                ]
                              "
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                          <label for="" class="text-base font-medium 2xl:px-1"
                            >เลขบัตรประชาชน/เลขหนังสือเดินทาง</label
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
                              :placeholder="whatWorker.identificationNumber"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ชื่อ</label
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
                              :placeholder="whatWorker.firstName"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ชื่อกลาง</label
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
                              :placeholder="whatWorker.middleName"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >นามสกุล</label
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
                            >
                              <i
                                class="
                                  mdi mdi-account-outline
                                  text-gray-400 text-lg
                                "
                              ></i>
                            </div>
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
                              :placeholder="whatWorker.lastName"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >เพศ</label
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
                              :placeholder="sexFreeze[whatWorker.sex]"
                              disabled
                            />
                          </div>
                        </div>
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >เบอร์โทรศัพท์ (มือถือ)</label
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
                            >
                              <i
                                class="
                                  mdi mdi-account-outline
                                  text-gray-400 text-lg
                                "
                              ></i>
                            </div>
                            <input
                              type="tel"
                              maxlength="10"
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
                              :placeholder="whatWorker.phone"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ภาพยืนยันตัวตน</label
                          >
                          <img class="rounded-lg object-cover 2xl:w-40 xl:w-40 lg:w-40 md:w-40 w-28 2xl:h-40 xl:h-40 lg:h-40 md:h-40 h-28" :src="image" />
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
                            @click="openComment = false"
                            type="radio"
                            v-model.trim="value"
                            name="radio-1"
                            class="radio checked:bg-orange-1"
                            value="sent"
                          />
                          <span class="label-text 2xl:pr-0 md:pl-5 pl-5"
                            >ส่งคนงาน</span
                          >
                        </label>
                      </div>
                      <div class="form-control">
                        <label class="label cursor-pointer 2xl:space-x-2">
                          <input
                            @click="openComment = true"
                            type="radio"
                            v-model.trim="value"
                            name="radio-2"
                            class="radio checked:bg-orange-1"
                            value="notSent"
                          />
                          <span class="label-text 2xl:pr-0 md:pl-5 pl-5"
                            >ปฏิเสธการส่งคนงาน</span
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
                      v-if="openComment == true"
                      v-model="note"
                      class="textarea textarea-bordered w-full h-36"
                      placeholder="หมายเหตุที่ปฏิเสธการส่งคนงาน"
                    ></textarea>
                  </div>

            <div class="flex justify-between">
              <button
                @click="confirmSendWorker()"
                class="btn w-2/5 bg-orange-1 hover:bg-orange-2 border-orange-1 hover:border-orange-1"
              >
                ยืนยัน
              </button>
              <button
                @click="
                  (toggleModal = false), (confirmInput = false), note = '', value = '', openComment = false
                "
                class="btn w-2/5"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
    <!-- <div v-else>
      <เรียก acceptWorker component มา></>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
const workerType = Object.freeze({
  Migrant: "แรงงานต่างด้าว",
  Thai: "แรงงานไทย",
});
const ntTypeFreeze = Object.freeze({
  Laos: "ลาว",
  Thai: "ไทย",
  Myanmar: "เมียนมาร์",
  Cambodia: "กัมพูชา",
});
const sexFreeze = Object.freeze({
  F: "หญิง",
  M: "ชาย",
});
export default {
  data() {
    return {
      myAcc: [],
      value:'',
      showCommentWhenReject: '',
      // timestamp: "",
      sexFreeze,
      workerType,
      ntTypeFreeze,
      routes: "",
      whoApplication: [{ nationality: {}, workerType: {}, data: {} }],
      //   idPosting: '',
      acceptPage: false,
      image: "",
      note: '',
      applicationHasComment: {
        descriptionRejectOnWeb: '',
        descriptionRejectOnSite: '',
        descriptionBreakShort: '',
        descriptionRejectSentWorker: 'ไม่มีความคิดเห็น',
      },
      toggleModal: false,
      noValue: false,
      idApplication: "",
      whatWorker: {},
      confirmInput: false,
      chooseAccept: 12,
      chooseReject: 13,
      finishWork: {},
      closeColumnName: false,
      namePost1: {},
      namePost: '',
      statusToPage: 0,
      maxRound: 1,
      roundHistory: 1,
      idPost:1,
      dataProfile:{},
      employerList: [],
      idEmployer: 0,
      openComment: false,
    };
  },
  methods: {
    sendWorkerList(){
      let workerList = []
      for (let i = 0; i < this.whoApplication.data.length; i++) {
        const post = this.whoApplication.data[i];
        workerList = workerList.concat(post.whoApplicationList.map(p=>{
          p.idPosting = post.idPosting
          return p
        }))
      }
      return workerList
    },
    async tickDone(a){
      console.log(a.applicationId);
        try {
          await axios.put(
            `${process.env.VUE_APP_ROOT_API}admin/adminSendWorkerToEmployer?idApplication=${a.applicationId}`
          ).data;
          this.toggleModal = false
          this.callData()
        } catch (error) {
          console.log(error);
        }
    },
    async cancelSend(a){
      const vm = this
      if(this.note != ''){
        this.applicationHasComment.descriptionRejectSentWorker = this.note
      }
      const applicationHasComment = JSON.stringify(this.applicationHasComment);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };      
        try {
          await axios.put(
            `${process.env.VUE_APP_ROOT_API}admin/adminRejectSentWorker?idApplication=${a.applicationId}`, applicationHasComment, customConfig
          ).data;
          vm.toggleModal = false
        } catch (error) {
          console.log(error);
        }
        this.note = ''
        this.value = ''
        this.openComment = false
        this.callData()
    },      
    async confirmSendWorker() {
        if(this.value == 'sent'){
          this.tickSendWorker();
        }else{
          this.cancelSend(this.dataProfile)
        }
    },

    async openPopUp(object) {
      // setInterval(this.getNow, 1000)
      console.log(object);
      this.dataProfile = object;
      this.showCommentWhenReject = object.comment
      this.idApplication = object.applicationId;
      await axios
        .get(
          `${process.env.VUE_APP_ROOT_API}admin_emp/selectWorker?idWorker=${object.workerId}`
        )
        .then((response) => {
          this.whatWorker = response.data;
          console.log(this.whatWorker);
          this.image = `${process.env.VUE_APP_ROOT_API}main/image/` +
            this.whatWorker.verifyPic;
        });
        console.log(this.whatWorker.verifyPic)
    },
    async tickSendWorker() {
      console.log(this.dataProfile)
      // const vm = this;
      if (confirm("ท่านได้ส่งบุคคลนี้ให้กับนายจ้างแล้วใช่หรือไม่")) {
        try {
          await axios.put(
            `${process.env.VUE_APP_ROOT_API}admin/adminSendWorkerToEmployer?idApplication=${this.dataProfile.applicationId}`
          ).data;
          this.toggleModal = false
          this.note = ''
          this.value = ''
          this.openComment = false
          this.callData()
        } catch (error) {
          console.log(error);
        }
      }
    }, 
    async getPic(a) {
      console.log(a.verifyPic);
      this.image = `${process.env.VUE_APP_ROOT_API}main/image/` + a.verifyPic;
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
    async callData(e){
      console.log(e)
      console.log(this.maxRound)
      this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoAdminStatus?idStatusAdmin1=27` + "&idStatusAdmin2=" + "&round=" + this.roundHistory + "&idEmployer=" + this.idEmployer);
      // this.noValue = this.whoApplication.filter((p) => (p.inActiveDate != null)).length == 0
      // this.closeColumnName = this.whoApplication.filter((p) => (p.inActiveDate != null)).length == 0
      console.log(this.whoApplication)
    if(this.whoApplication.data.length != 0){
      this.noValue = false
      this.closeColumnName = false;
    }else{
      this.noValue = true
      this.closeColumnName = true;
    }
    },
    async check(){
      this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoAdminStatus?idStatusAdmin1=27` + "&idStatusAdmin2=" + "&round=" + this.roundHistory + "&idEmployer=" + this.idEmployer)
      // if(this.sendWorkerList().filter(e => e.idEmployer == this.idEmployer).length == 0){
        if(this.sendWorkerList().length == 0){
        console.log(this.sendWorkerList().length)
        this.noValue = true
        this.closeColumnName = true;        
      }else{
        console.log("เข้ามั้ยอะ")
        this.noValue = false
        this.closeColumnName = false
      }      
    }
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "1"
    ) {
        const maxRound = await axios.get(`${process.env.VUE_APP_ROOT_API}main/getMaxRoundOfPosting?idPosting=` + this.idPost);
        this.maxRound = maxRound.data      
      this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoAdminStatus?idStatusAdmin1=27` + "&idStatusAdmin2=" + "&round=" + this.roundHistory + "&idEmployer=");
      console.log(this.whoApplication)
      const employerList = await axios.get(`${process.env.VUE_APP_ROOT_API}main/allEmployer`)
      this.employerList = employerList.data
      this.myAcc = await axios.get(`${process.env.VUE_APP_ROOT_API}admin/meAdmin`);
      this.idAdmin = this.myAcc.data.idAdmin;
      console.log(this.employerList)
      console.log(this?.sendWorkerList())
      this.noValue = this.whoApplication.data.length == 0
      this.closeColumnName = this.whoApplication.data.length == 0
      // this.noValue = this.sendWorkerList().filter(p => p.inActiveDate != null).length == 0
      // this.closeColumnName = this.sendWorkerList().filter(p => p.inActiveDate != null).length == 0
    } else {
      this.$router.push("/");
    }
  },
    watch: {
    idEmployer: async function check() {
      this.check()
    },
    roundHistory: async function checkRound(){
      this.check()     
    }
    }
};
</script>

<style>
</style>