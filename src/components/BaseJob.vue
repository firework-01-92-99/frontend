<template>
  <!-- job card -->
  <div class="card card-side bg-base-100 shadow-xl">
    <router-link to="/detail">
      <figure class="w-52 h-72">
        <img
          src="https://marquettechamber.com/wp-content/uploads/2020/07/services-In-the-city-1024x683.jpg"
          alt="Movie"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">ชื่อบริษัท</h2>
        <p>คำอธิบาย</p>
        <p>เงินเดือน</p>
        <div class="card-actions justify-end space-x-5">
          <button class="btn btn-ghost btn-circle text-red-600">
            <i class="material-icons"> favorite_border </i>
          </button>
          <button class="btn btn-primary">สมัครงาน</button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>