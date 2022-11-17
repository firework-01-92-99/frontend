<template>
  <div class="bg-gray-2 font-sans-thai h-full">
      <!-- <div v-if="!acceptPage" class="overflow-x-auto w-10/12 mx-auto font-sans-thai"> -->
<div class="2xl:flex 2xl:flex-row md:flex md:flex-row flex flex-col w-full">
      <div class="flex w-full justify-start">
        <div v-if="$route.query.history !== 'yes'" class="w-full">
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
          w-full
          tooltip
        "
        data-tip="หมายเหตุ: ต้องปิดประกาศรับสมัครครั้งนี้ก่อน จากนั้นแอดมินจะดำเนินการส่งแรงงานให้"
      >
        {{ topic }} 
        <span class="text-orange-1">{{ " ตำแหน่ง: " + namePost }}</span>
        <i class="material-icons pl-2">info_outline</i>
      </p>
      </div>
        <div v-if="$route.query.history == 'yes'" class="w-full 2xl:pt-4 xl:pt-3 lg:pt-3 md:pt-5 pt-8 2xl:ml-32 xl:ml-5 lg:ml-6 md:ml-14 ml-12 2xl:-mt-0 md:-mt-0 -mt-3">
          <select
          @click="callData()"
            v-model.trim="roundHistory"
            class="
              select select-bordered
              2xl:w-1/12
              xl:w-1/12
              lg:w-2/12
              md:w-3/12
              w-5/6
              2xl:text-base
              md:text-xs
              font-normal
            "
          >
            <!-- <option class="text-black" :value="''" disabled selected>
              ครั้งที่เปิดรับสมัคร
            </option> -->
            <option v-for="index in maxRound" :key="index" class="text-black" :value="index" selected = "selected">{{'ครั้งที่' + ' ' + index}}</option>

            <!-- <option class="text-black" value="1" selected = "selected">ครั้งที่ 1</option>
            <option class="text-black" value="2">ครั้งที่ 2</option> --> -->
          </select>
        </div>
      </div>
      <div v-if="$route.query.history != 'yes'" class="2xl:mx-40 xl:mx-16 lg:mx-0 md:mx-0 mx-3.5 2xl:flex md:flex flex 2xl:p-0 md:p-10 p-5 2xl:mt-0 md:mt-0 mt-11 w-full 2xl:justify-end md:justify-end justify-start">
        <button
          @click="historyPage()"
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
          "
        >
         ดูประวัติ
        </button>
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
            <th>คะแนน</th>
            <th>ชื่อ</th>
            <th>สัญชาติ</th>
            <th v-if="$route.query.history == 'yes'" class="text-center">สถานะ</th>
            <th class="text-center">เวลาสมัคร</th>
            <th></th>
          </tr>
        </thead>
        <tbody
          v-for="(a,index) in this.$route.query.history != 'yes' ? whoApplication.data.whoApplicationList.filter((s) => (s.idStatus == idStatus) || (s.statusName == 'Waiting_Rating' || s.statusName == 'workerRated' )) : whoApplication.data.whoApplicationList"
          :key='a.applicationId'>
          <!-- {{a}} -->
          <!-- row 1 -->
          <!-- <div v-if="listApprove.lenght == null">
            ไม่มีรายการที่ต้องทำ
          </div> -->
          <!-- {{
            a
          }}
          ahhhhhhhhh
          {{
            whatWorker
          }} -->
          <tr>
            <th>{{ index + 1 }}</th>
            <td class="">
              <div class="rating rating-md">
                <input type="radio" name="rating-2" class="cursor-default mask mask-star-2 bg-orange-400" checked disabled />
              </div>
              <span class="pl-2">
                {{a.rate == null ? 'ผู้ใช้นี้ยังไม่มีคะแนน' : a.rate.toFixed(2)}}
              </span>
            </td>
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
                <!-- <div class="text-sm opacity-50">United States</div> -->
              </div>
            </td>
            <td>
              {{
                ntTypeFreeze[
                  a.nationality ? a.nationality.nationality_name : ""
                ]
              }}
            </td>
            <td v-if="$route.query.history == 'yes'">
              <div
                v-if="a.statusName == 'Wating_EmployerSummary' || a.statusName == 'Wating_WorkerFinishJob' || a.statusName == 'Waiting_Rating' ||  a.statusName == 'empRated' ||  a.statusName == 'Done' "
                class="
                  badge badge-lg
                  w-full
                  bg-green-200
                  text-green-600
                  border-0
                  text-xs
                "
              >
                {{idStatus2==24 ? "จบงานเรียบร้อย กรุณาให้คะแนนแรงงาน" : idStatus2==26||idStatus2==20 ? "ให้คะแนนแรงงานเรียบร้อยแล้ว" : "รับเข้าทำงาน"}}
              </div>
              <div
                v-if="a.statusName == 'Reject_EmployerOnWeb' || a.statusName == 'Reject_WorkerOnSite' || a.statusName == 'BreakShort' || a.statusName == 'Done'"
                class="
                  badge badge-lg
                  w-full
                  bg-red-200
                  text-red-600
                  border-0
                  text-xs
                "
              >
                {{idStatus==23 ? 'ยกเลิกการจ้างงาน' : 'ไม่รับเข้าทำงาน'}}
              </div>
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
              <span v-if="idStatus == 14">
              <button @click="imm = true, acceptWorkerOnSite(a)" class="btn btn-ghost btn-xs tooltip" data-tip="รับเข้าทำงาน">
                <i class="material-icons text-green-600"> done </i>
              </button>
              <button @click="imm = true, rejectWorkerOnSite(a)" class="btn btn-ghost btn-xs tooltip" data-tip="ไม่รับเข้าทำงาน">
                <i class="material-icons text-red-600"> close </i>
              </button>
              </span>
              <button
                @click="statusId='',openPopUp(a), getPic(a), (toggleModal = !toggleModal)"
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
              <div class="rating rating-md">
                <input type="radio" name="rating-2" class=" mask mask-star-2 bg-orange-400 cursor-default" checked disabled/> 
                <span class="pl-2">{{whatWorker.rate == null ? 'ผู้ใช้นี้ยังไม่มีคะแนน' : whatWorker.rate.toFixed(2)}}</span>
              </div>
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
              <!-- {{statusId}} -->
              <div v-if="idStatus != 24">
              <div v-if="this.$route.query.history != 'yes'" class="flex-col w-full">
                <div class="flex space-x-10">
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input

                      type="radio"
                      v-model.trim="statusId"
                      name="radio-1"
                      class="radio checked:bg-orange-1"
                      :value="chooseAccept"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">{{accept}}</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer 2xl:space-x-2">
                    <input

                      type="radio"
                      v-model.trim="statusId"
                      name="radio-2"
                      class="radio checked:bg-orange-1"
                      :value="chooseReject"
                    />
                    <span class="label-text 2xl:pr-0 md:pl-5 pl-5">{{reject}}</span>
                  </label>
                </div>
                </div>
                <div class="flex">
                <p v-if="confirmInput" class="text-red-600">
                  กรุณาเลือกรูปแบบการอนุมัติ
                </p>
                </div>
              </div>
              <textarea v-if="this.$route.query.history != 'yes'"
                @change="allRejectCase()"
                v-model="description"
                class="textarea textarea-bordered w-full h-36"
                placeholder="หมายเหตุที่ไม่อนุมัติ"
              ></textarea>
              <textarea v-if="this.$route.query.history == 'yes'"
                @change="allRejectCase()"
                v-model="showCommentWhenReject"
                class="textarea textarea-bordered w-full h-36"
                placeholder="หมายเหตุที่ไม่อนุมัติ"
                disabled
              ></textarea>              
              </div>

          <!-- rating -->

              <div v-if="idStatus == 24" class="flex flex-col w-full">
                <p>กรุณาให้คะแนนแรงงาน</p>

          <div class="rating mt-1">         
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="1"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="2"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="3"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="4"
              v-model="rateTo.rate"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              :value="5"
              v-model="rateTo.rate"
            />
          </div>
          <div class="w-full mt-3">
            <textarea
              v-model="rateTo.comment"
              class="textarea textarea-bordered w-full"
              placeholder="ระบุความคิดเห็น"
            ></textarea>
          </div>
          <!-- {{timestamp}} -->
        </div>

            </div>

            <div class="flex justify-between">
              <button
              v-if="$route.query.history != 'yes'"
                @click="acceptOrReject()"
                class="btn w-2/5 bg-orange-1 hover:bg-orange-2 border-orange-1 hover:border-orange-1"
              >
                ยืนยัน
              </button>
              <button
                @click="
                  (toggleModal = false), (confirmInput = false)
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
  props: ["idPost", "idStatus", "idStatus2"],
  // props: ["idPost", "idStatus", "idStatus2", "refreshData"],
  data() {
    return {
      nRound: 2,
      showCommentWhenReject: '',
      // timestamp: "",
      sexFreeze,
      workerType,
      ntTypeFreeze,
      routes: "",
      whoApplication: [{ nationality: {}, workerType: {}, data: {} }],
      //   idPosting: '',
      acceptPage: false,
      statusId: "",
      image: "",
      topic: "รายการผู้สมัคร",
      description: "",
      applicationHasComment: {
        descriptionRejectOnWeb: '',
        descriptionRejectOnSite: '',
        descriptionBreakShort: '',
      },
      toggleModal: false,
      noValue: false,
      idApplication: "",
      whatWorker: {},
      confirmInput: false,
      chooseAccept: 12,
      chooseReject: 13,
      rateTo:{
        rate: 5,
        comment: '',
        timestamp:'',
        forwho: '',
        employer:{},
        worker:{}
      },
      finishWork: {},
      closeColumnName: false,
      namePost1: {},
      namePost: '',
      accept: "รับเข้าทำงาน",
      reject: "ไม่รับเข้าทำงาน",
      statusToPage: 0,
      roundHistory: 1,
      maxRound: 1,
      imm: false,
      sIdTabThree: '',
    };
  },
  methods: {
    async historyPage(){
      const maxRound = await axios.get(`${process.env.VUE_APP_ROOT_API}main/getMaxRoundOfPosting?idPosting=` + this.idPost);
      this.maxRound = maxRound.data
      this.$emit('statusToPage', 13)
      this.$router.push('/viewworkapp?history=yes&idPost=' + this.idPost)
      this.callData()
    },    
    allRejectCase(){
      if(this.chooseReject == 13){
        this.applicationHasComment.descriptionRejectOnWeb = this.description
        console.log(this.applicationHasComment.descriptionRejectOnWeb)
      }else if(this.chooseReject == 16){
        this.applicationHasComment.descriptionRejectOnSite = this.description
      }else if(this.chooseReject == 23){
        this.applicationHasComment.descriptionBreakShort = this.description
      }else if(this.chooseReject == 26){
        this.applicationHasComment.descriptionBreakShort = this.description
      }
    },  
    async giveRating(){
      // const vm = this;
      // if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const ratings = JSON.stringify(this.rateTo);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/employerGiveScoreToWorker?idApplication=${this.idApplication}`,
          ratings,
          customConfig
        );
        this.whoApplication = axios.get(
          `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` +
            this.idPost +
            "&idStatus=" +
            this.idStatus
        );
        this.callData()
        console.log(result.data)      
    },       
    async acceptOrReject() {
      console.log(this.statusId);
      if (this.statusId != "") {
        if (this.statusId == 12) { //it's meaning equal to 12 (accept worker on web)
          this.acceptWorker();
          this.toggleModal = false;
          this.closeColumnName = false;
        } else if (this.statusId == 13) {
            this.rejectWorker();
            this.toggleModal = false;
            this.closeColumnName = false;
          }else if(this.statusId == 21){
            this.acceptWorkerOnSite()
            this.toggleModal = false;
            this.closeColumnName = false;
          }else if(this.statusId == 20){
            this.rejectWorkerOnSite()
            this.toggleModal = false;
            this.closeColumnName = false;
          }else if(this.statusId == 22){
            this.finishJob()
            this.toggleModal = false;
            this.closeColumnName = false;
          }else if(this.statusId == 23){
            this.breakShot()
            this.toggleModal = false;
            this.closeColumnName = false;
          }else if(this.idStatus == 24){
            this.giveRating()
            this.toggleModal = false;
            this.closeColumnName = false;
          }
        this.description = ''
        // window.location.reload()
      } else {
        if(this.idStatus == 24){
          console.log("เข้าไหม")
            this.giveRating()
            this.toggleModal = false;
            this.closeColumnName = false;          
        }else{
        if(this.idStatus != 24){
          console.log(this.statusId)
        this.confirmInput = true;
        console.log("เลือกก่อนว่าอนุมัติหรือไม่อนุมัติ");
        }
        }
      }
    },
    // getNow: function() {
    //                 const today = new Date();
    //                 const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //                 const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //                 const dateTime = date +' '+ time;
    //                 this.timestamp = dateTime;
    //             },    
    async openPopUp(object) {
      // setInterval(this.getNow, 1000)
      console.log(object);
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
    async acceptWorker() {
      const vm = this
      console.log("idApplication = " + this.idApplication);
      if (confirm("ต้องการรับบุคคลนี้เข้าทำงานหรือไม่")) {
        try {
          await axios.put(
            `${process.env.VUE_APP_ROOT_API}emp/employerAcceptOnWeb?idApplication=${this.idApplication}`
          ).then(function (response) {
            console.log(response);
            vm.toggleModal = false
            vm.callData()
        })
          this.callData()
        } catch (error) {
          console.log(error);
        }
      }
    },
    async rejectWorker() {
      console.log("idApplication = " + this.idApplication);
      // const vm = this;
      if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const comment = JSON.stringify(this.applicationHasComment);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        // const res =
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/employerRejectOnWeb?idApplication=${this.idApplication}`,
          comment,
          customConfig
        );
        this.callData()
        // res.headers['content-type'];
        console.log(result.data);
      }
    },
    async acceptWorkerOnSite(app){
      const vm = this
      console.log(app.applicationId)
      if(this.sIdTabThree == 14 && this.imm == true){
        console.log("immมาไหม")
        this.idApplication = app.applicationId
        console.log(this.idApplication)
      }
      if(this.toggleModal == false){
      await axios.put(`${process.env.VUE_APP_ROOT_API}emp/employerAcceptOnSite?idApplication=${this.idApplication}`).then(function (response) {
            console.log(response);
            vm.statusId = ''
            // vm.toggleModal = false
            vm.callData()
        })
      }else{
        if(this.toggleModal == true){
      await axios.put(`${process.env.VUE_APP_ROOT_API}emp/employerAcceptOnSite?idApplication=${this.idApplication}`).then(function (response) {
            console.log(response);
            vm.statusId = ''
            vm.toggleModal = false
            vm.callData()
        })          
        }
      }
      this.callData()      
    },
    async rejectWorkerOnSite(app) {
      if(this.idStatus == 14 && this.imm == true){
        this.idApplication = app.applicationId
        console.log(this.idApplication)
      }      
      // if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const comment = JSON.stringify(this.applicationHasComment);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/employerRejectOnSite?idApplication=${this.idApplication}`,
          comment,
          customConfig
        );
        this.callData()
        console.log(result.data);
      // }
    },
    async finishJob(){
      // const vm = this
      const finishWork = await axios.put(`${process.env.VUE_APP_ROOT_API}emp/employerFinishJob?idApplication=${this.idApplication}`)
      this.finishWork = finishWork.data
      console.log(this.finishWork)
      const workerWork = {
        idApp: this.finishWork.idApplication,
        idWorker: this.finishWork.idWorker
      }
      console.log(workerWork)
            this.statusId = ''
            this.toggleModal = false
      // vm.whoApplication = axios.get(
      //     `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` +
      //       vm.idPost +
      //       "&idStatus=" +
      //       vm.idStatus
      //   );
      this.$store.commit("setWorkingHistory", workerWork);
      this.callData()

    },
    async breakShot(){
      // const vm = this;
      // if (confirm("ต้องการปฏิเสธบุคคลนี้เข้าทำงานหรือไม่")) {
      const comment = JSON.stringify(this.applicationHasComment);
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        const result =
        await axios.put(
          `${process.env.VUE_APP_ROOT_API}emp/employerBreakShort?idApplication=${this.idApplication}`,
          comment,
          customConfig
        );
        this.callData()
        console.log(result.data.data);      
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
    async callData(){
      console.log("เรียกเนอะ")
      // if(this.$route.query.history != 'yes'){
      //   this.whoApplication = await axios.get(
      //   `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` + this.idPost + "&idStatus=" + this.idStatus );
      // }
      this.$route.query.history != 'yes' ? this.whoApplication = await axios.get(
        `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` + this.idPost + "&idStatus=" + this.idStatus ) :
      this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoStatusAndRound?idPosting=${this.idPost}&idStatus1=${this.idStatus}&idStatus2=${this.idStatus2}&round=${this.roundHistory}`)
      console.log(this.whoApplication)
    if(this.whoApplication.data.length != 0){
      console.log("เข้าไหม")
      this.noValue = false
      this.closeColumnName = false;
      if(this.$route.query.history != 'yes'){
      if(this.idStatus != 24){
        this.whoApplication = await axios.get(
            `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` +
              this.idPost +
              "&idStatus=" +
              this.idStatus
          );
          console.log(this.whoApplication)
          this.noValue = this.whoApplication.data.whoApplicationList.length == 0
          this.closeColumnName = this.whoApplication.data.whoApplicationList.length == 0
      }else if(this.idStatus == 24){
       console.log("idStatus = " + this.idStatus + this.statusId)
          this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/showAllWorkerByIdPostingAllStatus?idPosting=` + this.idPost)
          console.log(this.whoApplication)
          this.noValue = this.whoApplication.data.whoApplicationList.length == 0
          this.closeColumnName = this.whoApplication.data.whoApplicationList.length == 0
          // this.noValue = this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(24) ? false : true
          // this.closeColumnName = this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(24) ? false : true
          // this.noValue = this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(25) ? false : true
          // this.closeColumnName = this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(25) ? false : true
          // this.noValue = this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(23) ? false : true
          // this.closeColumnName = this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(23) ? false : true
          if(this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(24)){
            this.noValue = false
            this.closeColumnName = false
          }else if(this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(25)){
            this.noValue = false
            this.closeColumnName = false
          }
          // else if(this.whoApplication.data.whoApplicationList.map((p) => p.idStatus).includes(23)){
          //   this.noValue = false
          //   this.closeColumnName = false
          // }
          else{
            this.noValue = false
            this.closeColumnName = false
          }
      }
      }else{
        if(this.$route.query.history == 'yes'){
          console.log("idStatus 2 = " + this.idStatus2)
          // if(this.idStatus == 13){
          //   this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/showAllWorkerByIdPostingAllStatus?idPosting=` + this.idPost)
          // }else if(this.idStatus == 16){
          //   this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/showAllWorkerByIdPostingAllStatus?idPosting=` + this.idPost)
          // }else if(this.idStatus == 23){
          //   this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/showAllWorkerByIdPostingAllStatus?idPosting=` + this.idPost)
          // }else if(this.idStatus == 26){
          //   this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}emp/showAllWorkerByIdPostingAllStatus?idPosting=` + this.idPost)
          // }
          this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoStatusAndRound?idPosting=${this.idPost}&idStatus1=${this.idStatus}&idStatus2=${this.idStatus2}&round=${this.roundHistory}`)
          console.log("idStatus ของ callData = " + this.idStatus)
          console.log("idStatus2 ของ callData = " + this.idStatus2)
          console.log(this.whoApplication)
          this.noValue = this.whoApplication.data.whoApplicationList.length == 0
          this.closeColumnName = this.whoApplication.data.whoApplicationList.length == 0
        }
      }
    }else{
      this.noValue = true
      this.closeColumnName = true;
    }
    },
  },
  async created() {
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.role.idRole == "2"
    ) {
      // this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoStatusAndRound?idPosting=${this.idPost}&idStatus1=13&idStatus2=14&round=${this.roundHistory}`)
      // console.log(this.whoApplication)
      // console.log("สร้างใหม่ไหม")
      if(this.$route.query.history != 'yes'){
      this.whoApplication = await axios.get(
        `${process.env.VUE_APP_ROOT_API}emp/showAllWorker?idPosting=` +
          this.idPost +
          "&idStatus=" +
          this.idStatus
      );
      }else{
      if(this.$route.query.history == 'yes'){
        const maxRound = await axios.get(`${process.env.VUE_APP_ROOT_API}main/getMaxRoundOfPosting?idPosting=` + this.idPost);
        this.maxRound = maxRound.data
        this.whoApplication = await axios.get(`${process.env.VUE_APP_ROOT_API}admin_emp/showAllWorkerByTwoStatusAndRound?idPosting=${this.idPost}&idStatus1=${this.idStatus}&idStatus2=${this.idStatus2}&round=${this.roundHistory}`)
      }        
      }
      if (this.whoApplication.data.whoApplicationList.length == 0) {
        this.noValue = true;
        this.closeColumnName = true;
      }
      this.namePost1 = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/selectPosting?idPosting=` + this.idPost);
      this.namePost =  this.namePost1.position?.positionName
      console.log(this.whoApplication);
      console.log("idPost = " + this.idPost, "idStatus = " + this.idStatus);
    } else {
      this.$router.push("/");
    }
  },
  watch: {
    idStatus: async function check() {
      if(this.$route.query.history != 'yes'){
      if (this.idStatus == 11) {
        console.log("idStatus =" + this.idStatus);
        this.topic = "รายการผู้สมัคร";
        this.accept = "รับเข้าทำงาน";
        this.reject = "ไม่รับเข้าทำงาน";
        this.callData()      
        this.chooseAccept = 12
        this.chooseReject = 13
      } else if(this.idStatus == 14) {
          console.log("idStatus =" + this.idStatus);
          this.sIdTabThree = this.idStatus
          this.topic = "รายการที่รับสมัครแล้ว";
          this.accept = "รับเข้าทำงาน";
        this.reject = "ไม่รับเข้าทำงาน";
          this.callData()          
        this.chooseAccept = 15
        this.chooseReject = 16          
      } else if(this.idStatus == 21) {
          console.log("idStatus =" + this.idStatus);
          this.topic = "รายการที่กำลังทำงาน";
          this.accept = "จบการทำงาน";
        this.reject = "ยกเลิกการจ้างงาน";
          this.callData()        
        this.chooseAccept = 22
        this.chooseReject = 23           
      } else if(this.idStatus == 24) {
        //status_idStatus = 24,25
          console.log("idStatus =" + this.idStatus);
          this.topic = "รายการที่รอให้คะแนน";
          this.callData()         
          this.statusId = this.idStatus;
          console.log(this.statusId)
      }
      }else{
        if(this.$route.query.history == 'yes'){
        if(this.idStatus == 13 && this.idStatus2 == 14){
        console.log("idStatus =" + this.idStatus)
        this.callData()
      }else if(this.idStatus == 16 && this.idStatus2 == 21){
        console.log("idStatus =" + this.idStatus)
        this.callData()
      }else if(this.idStatus == 23 && this.idStatus2 == 24){
        console.log("idStatus =" + this.idStatus)
        this.callData()
      }else if(this.idStatus == 26 && this.idStatus2 == 20){
        console.log("idStatus =" + this.idStatus)
        this.callData()
      } 
        }
      }
    },
    // refreshData: async function checkRefresh(){
    //       this.callData()
    // }
  },
};
</script>

<style>
</style>