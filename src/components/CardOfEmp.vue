<template>
  <div class="container mx-auto">
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
      ประกาศหางานของ <span class="text-orange-1">{{ employer.establishmentName }}</span>
    </p>
    <div v-if="!noValue">
      <!-- job card -->
      <div class="flex flex-wrap justify-center p-6 -mt-12">
        <div v-for="p in posting.content" :key="p.idPosting">
          <!-- {{employer}} -->
          <div>
            <div
              class="
                rounded-lg
                font-sans-thai
                card
                2xl:w-80
                xl:w-96
                lg:w-96
                md:w-96
                w-11/12
                bg-base-100
                2xl:m-6
                xl:m-6
                lg:m-6
                md:m-6
                mx-auto
                my-6
                transition
                duration-300
                ease-in-out
                hover:-translate-y-1 hover:scale-110
              "
            >
              <div>
                <div class="card-body space-y-3">
                  <div class="flex justify-between">
                    <h2 class="card-title text-orange-1 text-sm">
                      {{ p.position.positionName }}
                    </h2>
                    <!-- <div
                      v-if="
                        !showFlag(job.idPosting) &&
                        $store.state.auth.user &&
                        $store.state.auth.user.role.idRole == '3'
                      "
                    >
                      <i
                        @click="fav(job.idPosting)"
                        class="material-icons z-10 cursor-pointer select-none"
                      >
                        bookmark_border
                      </i>
                    </div>
                    <div
                      v-else-if="
                        $store.state.auth.user &&
                        $store.state.auth.user.role.idRole == '3'
                      "
                    >
                      <i
                        @click="unFav(job.idPosting)"
                        class="material-icons cursor-pointer select-none"
                      >
                        bookmark
                      </i>
                    </div> -->
                  </div>
                  <h2 class="card-title text-base">
                    <!-- {{ employer.establishmentName }} -->
                    <div class="rating rating-sm">
                      <!-- <span class="font-normal pr-2">|</span> -->
                      <input
                        type="radio"
                        name="rating-2"
                        class="cursor-default mask mask-star-2 bg-orange-400"
                        checked
                        disabled
                      />
                      <span class="font-normal pl-1">{{isNaN(scoreEmp) ? 'ยังไม่มีคะแนน' : scoreEmp}}</span>
                      <span
                        class="
                          font-normal
                          pl-1
                          2xl:text-sm
                          xl:text-base
                          lg:text-base
                          md:text-base
                          text-xs
                        "
                      >
                        <!-- {{
                          !$store.state.auth.user ||
                          $store.state.auth.user.role.idRole == "3"
                            ? scoreAllEmp.find(
                                (a) => a.idEmployer == job.idEmployer
                              ).rate == null
                              ? "ยังไม่มีคะแนน"
                              : scoreAllEmp.find(
                                  (a) => a.idEmployer == job.idEmployer
                                ).rate
                            : isNaN(scoreEmp)
                            ? "ยังไม่มีคะแนน"
                            : scoreEmp
                        }} -->
                      </span>
                      <!-- {{scoreAllEmp.find((a) => a.idEmployer == job.idEmployer).rate}} -->
                    </div>
                  </h2>
                  <p>
                    <span class="inline-block align-middle"
                      ><i class="material-icons pr-2"> paid </i></span
                    >
                    <span class="hidden font-semibold text-base"
                      >ค่าตอบแทน :
                    </span>
                    <span class="text-sm inline-block align-middle">
                      {{
                        p.minSalary
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      -
                      {{
                        p.maxSalary
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      บาท
                    </span>
                  </p>
                  <div class="flex items-start">
                    <p>
                      <span class="inline-block align-middle"
                        ><i class="material-icons pr-2"> place </i></span
                      >
                      <span class="hidden font-semibold text-base"
                        >ที่อยู่ :
                      </span>
                      <span class="text-sm inline-block align-middle">{{
                        employer.district.districtName +
                        " " +
                        employer.province.provinceName
                      }}</span>
                    </p>
                  </div>
                  <!-- <slot></slot> -->
                  <div
                    v-if="
                      !$store.state.auth.user ||
                      $store.state.auth.user.role.idRole == '3'
                    "
                    class="card-actions"
                  >
                  <!-- {{employer}} -->
                    <button
                      @click="linkTo(p.idPosting, employer.idEmployer)"
                      class="
                        btn
                        border-orange-1
                        bg-orange-1
                        hover:bg-orange-2 hover:border-orange-2
                        w-full
                      "
                    >
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="noValue">
        <div class="text-center mt-10 mb-10">
          <div>
            <img src="../assets/icon/leaves.png" class="w-20 mx-auto" />
          </div>
          <div class="pt-5">ไม่มีประกาศหางาน</div>
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
      posting: [],
      noValue: false,
      employer: {},
      scoreAllEmp: [],
      scoreEmp: '',
    };
  },
  methods: {
    linkTo(idPost, idEmp) {
      if (
        !this.$store.state.auth.user ||
        this.$store.state.auth.user.role.idRole == "3"
      ) {
        this.$router.push(
          "/detail?idPosting=" + idPost + "&idEmployer=" + idEmp + '&fromAllEmp=yes'
        );
      }
      // else {
      // if (this.$store.state.auth.user.role.idRole == "2") {
      //   this.$emit("idPost", idPost)
      //   // this.$router.push("/viewworkapp" + "?idPost=" + idPost);
      //   // localStorage.storeIdPost
      // }
      // }
    },
  },
  async created() {
    const scoreAllEmp = await axios.get(`${process.env.VUE_APP_ROOT_API}main/allEmployer`);
    this.scoreAllEmp = scoreAllEmp.data
    this.idEmp = this.$route.query.idEmp;
    const scoreEmp = await axios.get(`${process.env.VUE_APP_ROOT_API}main/getEmpTotalScore?idEmployer=` + this.idEmp);
    this.scoreEmp = scoreEmp.data
    console.log(this.scoreEmp)
    const posting = await axios.get(
      `${process.env.VUE_APP_ROOT_API}main/getPostingActiveByIdEmployer?idEmployer=` +
        this.idEmp + '&size=100'
    );
    this.posting = posting.data;

    const employer = await axios.get(
      `${process.env.VUE_APP_ROOT_API}main/selectEmployer?idEmployer=` +
        this.idEmp
    );
    this.employer = employer.data;
    this.noValue = this.posting.content?.length == 0;
    console.log(this.noValue);
    console.log(this.posting.length);
  },
};
</script>

<style>
</style>