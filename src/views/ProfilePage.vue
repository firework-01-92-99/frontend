<template>
  <div v-if="$store.state.auth.user" class="Profile">
    <!-- {{$store.state.auth.user}} -->
    <div class="font-sans-thai bg-gray-2 h-full w-screen">
      <div
        class="
          2xl:pt-0
          lg:pt-4
          md:pt-0
          pt-36
          flex flex-col
          items-center
          flex-1
          h-full
          justify-center
          px-4
          sm:px-0
        "
      >
        <div
          class="
            flex
            rounded-lg
            shadow-lg
            w-full
            sm:w-3/4
            lg:w-full lg:h-full
            sm:mx-0
          "
        >
          <div class="lg:w-1/2">
            <div class="flex-col space-y-5">
              <div class="flex justify-center">
                <div class="avatar w-1/3 mt-5">
                  <div
                    class="
                      w-full
                      rounded-full
                      ring ring-orange-1 ring-offset-base-100 ring-offset-2
                    "
                  >
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
              <!-- rating -->
              <div class="collapse">
                <input class="w-1/3" type="checkbox" />
                <div class="collapse-title flex justify-center">
                  <div class="stats bg-orange-1 shadow w-1/3">
                    <div class="stat text-white">
                      <div class="stat-title">คะแนน</div>
                      <div class="stat-value">4.5 จาก 5</div>
                      <div class="stat-desc">กดเพื่อดูรีวิว</div>
                    </div>
                  </div>
                </div>
                <!-- review -->
                <div
                  class="
                    collapse-content
                    flex flex-wrap
                    justify-center
                    space-y-5
                  "
                >
                  <div
                    class="card w-3/4 bg-base-100 border border-black shadow-lg"
                  >
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end"></div>
                    </div>
                  </div>
                  <div
                    class="card w-3/4 bg-base-100 border border-black shadow-lg"
                  >
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end"></div>
                    </div>
                  </div>
                  <div
                    class="card w-3/4 bg-base-100 border border-black shadow-lg"
                  >
                    <div class="card-body">
                      <h2 class="card-title">Card title!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <!-- worker -->
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-bold text-4xl text-center">ประวัติ</h1>
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <div class="2xl:flex 2xl:-mx-3">
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >อีเมล</label
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="$store.state.auth.user.username"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >รหัสผ่าน</label
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
                            type="password"
                            class="
                              w-full
                              -ml-10
                              pl-5
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="$store.state.auth.user.password"
                            disabled
                          />
                          <!-- <input
                            type="password"
                            :placeholder="$store.state.auth.user.password"
                            disabled
                          /> -->
                          <!-- <div class="relative">
                            <button
                              class="
                                absolute
                                inset-y-0
                                right-0
                                w-8
                                border-2 border-gray-200
                                rounded-r-lg
                              "
                              @click.prevent="showPassword"
                            >
                              <img class="" :src="eye" />
                            </button>
                          </div> -->
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="$store.state.auth.user.worker.idWorker == '1'"
                      class="flex -mx-3"
                    >
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.employer.establishmentName
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div v-else class="flex -mx-3">
                      <!-- <select
                            type="text"
                            v-model.trim="person.accLname"
                            class="
                              select select-bordered
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
                            :class="{ 'bg-red-50': firstnameInput }"
                          >
                            <option :value="''" disabled selected>
                              กรุณาเลือกประเภทธุรกิจ
                            </option>
                            <option
                              class="text-black"
                              v-for="p in provinces"
                              :key="p.idProvince"
                              :value="p.idProvince"
                            >
                              {{ p.provinceName }}
                            </option>
                          </select> -->

                      <div class="w-full px-3 mb-5">
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.worker.workerType.typeName
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="$store.state.auth.user.worker.idWorker == '1'"
                      class="flex -mx-3"
                    >
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium 2xl:px-1"
                          >ประเภทธุรกิจ</label
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="$store.state.auth.employer"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div v-else class="flex -mx-3">
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.worker.identificationNumber
                            "
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
                            placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.worker.firstName
                            "
                            disabled
                          />
                        </div>
                      </div>

                      <div
                        v-if="$store.state.auth.user.worker.idWorker == '2'"
                        class="2xl:w-1/2 w-full 2xl:px-3 mb-5"
                      >
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
                             placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.worker.middleName
                            "
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              $store.state.auth.user.worker.lastName
                            "
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div v-if="$store.state.auth.user.worker.idWorker == '1'">
                      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ที่อยู่</label
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
                            <textarea
                              type="tel"
                              class="
                                textarea
                                w-full
                                -ml-10
                                pl-5
                                pr-3
                                py-2
                                rounded-lg
                                border-2 border-gray-200
                                outline-none
                               placeholder-black
                              placeholder-opacity-100
                              "
                              :placeholder="$store.state.auth.user.employer"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >ตำบล/แขวง</label
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
                                placeholder-black
                              placeholder-opacity-100
                              "
                              :placeholder="$store.state.auth.user.employer"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >อำเภอ/เขต</label
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
                                placeholder-black
                              placeholder-opacity-100
                              "
                              :placeholder="$store.state.auth.user.employer"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <div class="2xl:flex 2xl:-mx-3">
                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >จังหวัด</label
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
                                placeholder-black
                              placeholder-opacity-100
                              "
                              :placeholder="$store.state.auth.user.employer"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="2xl:w-1/2 w-full 2xl:px-3 mb-5">
                          <label for="" class="text-base font-medium px-1"
                            >เลขไปรษณีย์</label
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
                              class="
                                w-full
                                -ml-10
                                pl-5
                                pr-3
                                py-2
                                rounded-lg
                                border-2 border-gray-200
                                outline-none
                               placeholder-black
                              placeholder-opacity-100
                              "
                              :placeholder="$store.state.auth.user.employer"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="$store.state.auth.user.worker.idWorker == '2'"
                      class="flex -mx-3"
                    >
                      <div class="w-full px-3 mb-5">
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="
                              sex[$store.state.auth.user.worker.sex]
                            "
                            disabled
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-base font-medium px-1"
                          >เบอร์โทรศัพท์</label
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
                              placeholder-black
                              placeholder-opacity-100
                            "
                            :placeholder="$store.state.auth.user.worker.phone"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <!-- <div class="flex -mx-3">
                      
                    </div> -->
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          v-if="$store.state.auth.user.worker.idWorker == '1'"
                          for=""
                          class="text-base font-medium px-1"
                          >ภาพสถานประกอบการ</label
                        >
                        <label
                          v-if="$store.state.auth.user.worker.idWorker == '2'"
                          for=""
                          class="text-base font-medium px-1"
                          >ภาพยืนยันตัวตน</label
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
                            type="file"
                            class="
                              w-full
                              -ml-10
                              pr-3
                              py-2
                              rounded-lg
                              outline-none
                              focus:border-indigo-500
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="flex flex-col mt-8">
                    <button
                      @click.prevent="signUp()"
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
                      ลงทะเบียน
                    </button>
                  </div> -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const sex = Object.freeze({
  F: "หญิง",
  M: "ชาย",
});
const workerType = Object.freeze({
  Migrant: "แรงงานต่างด้าว",
  Thai: "แรงงานไทย",
});

export default {
  data() {
    return {
      sex,
      workerType,
    };
  },
};
</script>
