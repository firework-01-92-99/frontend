<template>
  <div class="bg-gray-2 w-full min-h-screen">
    <div class="navbar bg-dark-blue font-sans-thai">
      <div class="navbar-center">
        <div class="dropdown dropdown-hover">
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
              shadow
              bg-base-100
              rounded-box
              w-56
            "
          >
            <li class="hover:text-orange-1">
              <router-link to="/">หางาน</router-link>
            </li>
            <li class="hover:text-orange-1">
              <router-link to="/application">สถานะการสมัครงาน</router-link>
            </li>
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

      <div class="navbar-end">
        <router-link to="/signin">
          <button
            class="
              btn btn-outline
              text-white
              hover:text-orange-400 hover:border-orange-1
            "
          >
            เข้าสู่ระบบ
          </button>
        </router-link>
        <!-- <button class="btn btn-ghost btn-circle text-white">
        <div class="indicator">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <button class="btn btn-ghost btn-circle text-white">
        <i class="material-icons"> account_circle </i>
      </button>
      <button class="btn btn-ghost btn-circle text-white">
        <i class="material-icons"> logout </i>
      </button> -->
      </div>
    </div>
    <router-view />
  </div>
</template>
