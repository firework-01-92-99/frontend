<template>
  <div class="card card-side w-11/12 bg-base-100 shadow-xl">
    <!-- <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure> -->
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title text-orange-1 text-base">
          job.position.positionName
        </h2>
      </div>
      <h2 class="card-title text-base">establishmentName</h2>
      <p>
        <span class="inline-block align-middle"
          ><i class="material-icons pr-2"> paid </i></span
        >
        <span class="hidden font-semibold text-base">ค่าตอบแทน : </span>
        <span class="text-base font-medium inline-block align-middle">
          <!-- {{
                      job.minSalary
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    -
                    {{
                      job.maxSalary
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }} -->
          บาท</span
        >
      </p>
      <div class="flex items-start">
        <p>
          <span class="inline-block align-middle"
            ><i class="material-icons pr-2"> place </i></span
          >
          <span class="hidden font-semibold text-base">ที่อยู่ : </span>
          <span class="text-base font-medium inline-block align-middle">
            <!-- {{
                  getPostbyEmp(job.idEmployer).address +
                  " " +
                  getPostbyEmp(job.idEmployer).district.districtName +
                  " " +
                  getPostbyEmp(job.idEmployer).subDistrict.subDistrict +
                  " " +
                  getPostbyEmp(job.idEmployer).province.provinceName +
                  " " +
                  getPostbyEmp(job.idEmployer).subDistrict.postcode
                }} -->
          </span>
        </p>
      </div>
      <!-- <div class="card-actions justify-end">
                  <button class="btn btn-primary">Watch</button>
                </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>