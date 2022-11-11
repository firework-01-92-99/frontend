<template>
  <div id="app" class="bg-gray-2 w-full min-h-screen">
    <div class="navbar bg-dark-blue font-sans-thai">
      <div class="navbar-start">
        <div class="dropdown dropdown-hover" :class="{'block 2xl:hidden xl:hidden lg:hidden md:hidden': !$store.state.auth.user || ($store.state.auth.user.role.idRole == '2')}">
          <label
            tabindex="0"
            class="btn btn-ghost btn-circle m-1 text-white 2xl:ml-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="
              font-medium
              menu menu-compact
              dropdown-content
              p-2
              2xl:ml-8
              md:ml-5
              ml-5
              shadow
              bg-base-100
              rounded-box
              w-56
            "
          >
            <div>
              <li
                v-if="!this.$store.state.auth.user"
                class="
                  hover:text-orange-1
                  block
                  2xl:hidden
                  xl:hidden
                  lg:hidden
                  md:hidden
                "
              >
                <router-link to="/signin">เข้าสู่ระบบ</router-link>
              </li>
              <li
                v-if="!this.$store.state.auth.user"
                class="
                  hover:text-orange-1
                  block
                  2xl:hidden
                  xl:hidden
                  lg:hidden
                  md:hidden
                "
              >
                <router-link to="/signup/worker"
                  >ลงทะเบียนสำหรับผู้สมัครงาน</router-link
                >
              </li>
              <li
                v-if="!this.$store.state.auth.user"
                class="
                  hover:text-orange-1
                  block
                  2xl:hidden
                  xl:hidden
                  lg:hidden
                  md:hidden
                "
              >
                <router-link to="/signup/employer"
                  >ลงทะเบียนสำหรับผู้ประกอบการ</router-link
                >
              </li>
              <!-- <li class="hover:text-orange-1">
                <router-link to="/otp">OTP</router-link>
              </li> -->
              <li v-if="!$store.state.auth.user || $store.state.auth.user.role.idRole == '3'" class="hover:text-orange-1">
                <router-link to="/">หางาน</router-link>
              </li>
              <li v-if="$store.state.auth.user && $store.state.auth.user.role.idRole == '2'" class="hover:text-orange-1">
                <router-link to="/posting">ประกาศรับสมัครงาน</router-link>
              </li>
            </div>
            <div v-if="$store.state.auth.user">
              <li
                v-if="$store.state.auth.user.role.idRole == '3'"
                class="hover:text-orange-1"
              >
                <router-link to="/application">สถานะการสมัครงาน</router-link>
              </li>
              <li v-if="$store.state.auth.user && $store.state.auth.user.role.idRole != '1'"
                class="
                  hover:text-orange-1
                  block
                  2xl:hidden
                  xl:hidden
                  lg:hidden
                  md:hidden
                "
              >
                <router-link to="/profile">โปรไฟล์</router-link>
              </li>
              <!-- admin -->
              <div v-if="$store.state.auth.user.role.idRole == '1'">
                <li class="hover:text-orange-1">
                  <router-link to="/approve">อนุมัติ</router-link>
                </li>
                <li class="hover:text-orange-1">
                  <router-link to="/confirm"
                    >ยืนยันการรับแรงงานของนายจ้าง</router-link
                  >
                </li>
                <li class="hover:text-orange-1">
                  <router-link to="/reqPosition"
                    >การจัดการตำแหน่ง</router-link
                  >
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="navbar-center mx-auto">
        <router-link to="/"
          ><img
            class="2xl:h-12 xl:h-12 lg:h-12 md:h-12 h-9"
            src="./assets/Firework_LOGO-02.png"
        /></router-link>
      </div>

      <div class="navbar-end space-x-6">
        <div class="">
          <!-- The button to open modal -->
          <label
            for="my-modal"
            class="btn modal-button"
          >
            <span class="material-icons"> translate </span>
          </label>
          <!-- Put this part before </body> tag -->
          <input type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal w-full">
            <div class="modal-box">
              <Translator
                :countries="countries"
                @on-country-click="hideModal"
              />
              <div class="modal-action">
                <label for="my-modal" class="btn">ตกลง</label>
              </div>
            </div>
          </div>
        </div>

        <button
          v-if="$store.state.auth.user && $store.state.auth.user.role.idRole != '1'"
          class="btn btn-ghost btn-circle text-white hidden 2xl:block xl:block lg:block md:block"
        >
          <router-link to="/profile"
            ><i class="material-icons"> account_circle </i></router-link
          >
        </button>
        <router-link
          class="hidden 2xl:block xl:block lg:block md:block"
          to="/signin"
          v-if="!this.$store.state.auth.user"
        >
          <button
            class="
              btn btn-outline
              text-orange-1
              hover:text-white hover:border-orange-1 hover:bg-orange-1
            "
          >
            เข้าสู่ระบบ
          </button>
        </router-link>

        <div v-else>
          <button
            @click="signOut()"
            class="
              2xl:inline
              xl:inline
              lg:inline
              inline
              btn btn-ghost btn-circle
              text-white
            "
          >
            <i class="material-icons"> logout </i>
          </button>
        </div>
        <div
          v-if="!$store.state.auth.user"
          class="dropdown dropdown-hover dropdown-end"
        >
          <button
            tabindex="0"
            class="
              btn
             border-orange-1
                  bg-orange-1
                  hover:bg-orange-2 hover:border-orange-2
              hidden
              2xl:block
              xl:block
              lg:block
              md:block
            "
          >
            ลงทะเบียน
          </button>
          <ul
            tabindex="0"
            class="
              font-medium
              menu menu-compact
              dropdown-content
              p-2
              shadow
              bg-base-100
              rounded-box
              w-56
            "
          >
            <li class="hover:text-orange-1">
              <router-link to="/signup/worker">ผู้สมัครงาน</router-link>
            </li>
            <li class="hover:text-orange-1">
              <router-link to="/signup/employer">ผู้ประกอบการ</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Translator } from "vue-google-translate";
export default {
  components: {
    Translator,
  },
  data() {
    return {
      countries: [
        {
          code: "th|th",
          title: "Thai",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/th.svg",
        },
        {
          code: "th|en",
          title: "English",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/us.svg",
        },
        {
          code: "th|lo",
          title: "Laotian",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/la.svg",
        },
        {
          code: "th|my",
          title: "Burmese",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/mm.svg",
        },
        {
          code: "th|km",
          title: "Khmer",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/kh.svg",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "JobPage",
        });
        location.reload();
      });
    },
    hideModal() {
      this.$bvModal.hide("translate-modal");
    },
  },
};
</script>
