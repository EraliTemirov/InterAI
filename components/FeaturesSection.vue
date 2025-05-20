<!-- <template>
  <section class="bg-white py-14 md:py-20">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-sm border rounded-xl px-4 py-2 text-sm text-[#1E1E1E] border-[#FFFFFF]">
          <div>
            <img src="/assets/images/Job.png" alt="">
          </div>
          Ishga olishdagi qiyinchiliklar
        </div>

        <h2 class="text-2xl md:text-4xl text-[#1E1E1E] font-medium mt-6">
          Ishga olish jarayoni ko’p vaqt va resurs oladi
        </h2>
        <p class="text-[#0A2A66] mt-2 text-sm md:text-base">
          <span class="text-[#2A6FF5]">70% ishga olish jarayoni</span> faqat <a href="#" class="text-[#1E1E1E]">quruq</a> & <a href="#" class="text-[#2A6FF5]">keraksiz</a> ishlar bilan o’tadi:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-[#3660E6] text-white p-6 rounded-2xl text-left flex flex-col gap-6">
          <img src="/assets/images/JobSearch.png" alt="Icon" class="h-12 w-12" />
          <h3 class="text-3xl font-medium">5 hafta</h3>
          <p class="text-sm font-medium">
            Bir xodimni ishga olish vaqti. Kechikishlar biznes jarayoniga salbiy ta’sir qiladi
          </p>
        </div>

        <div class="bg-[#3660E6] text-white p-6 rounded-2xl text-left flex flex-col gap-6">
          <img src="/assets/images/Resume.png" alt="Icon" class="h-12 w-12" />
          <h3 class="text-3xl font-medium">60%</h3>
          <p class="text-sm font-medium">
            Resyumelar ish talabiga to’g’ri kelmaydi. Bu HR’ning qimmatli vaqtini o’g’rilaydi
          </p>
        </div>

        <div class="bg-[#3660E6] text-white p-6 rounded-2xl text-left flex flex-col gap-6">
          <img src="/assets/images/employee.png" alt="Icon" class="h-12 w-12" />
          <h3 class="text-3xl font-medium">10 dan 3</h3>
          <p class="text-sm font-light">
            Xodimlar noto’g’ri tanlanishi, yana qayta xodim olinishi, resurs ketishiga olib keladi
          </p>
        </div>

        <div class="bg-[#3660E6] text-white p-6 rounded-2xl text-left flex flex-col gap-6">
          <img src="/assets/images/TaskList.png" alt="Icon" class="h-12 w-12" />
          <h3 class="text-3xl font-medium">40%</h3>
          <p class="text-sm font-light">
            Vaqt bekorga rezume ko’rish va intervyu o’tkazishga isrof bo’ladi
          </p>
        </div>
      </div>
    </div>
  </section>
</template> -->

<template>
  <section class="py-10 sm:py-14 md:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
      <!-- Top badge + heading -->
      <div class="mb-10 sm:mb-14">
        <div class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-sm border rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-[#1E1E1E] border-[#FFFFFF]">
          <img src="/assets/images/Job.png" alt="" class="h-4 sm:h-5 md:h-6 w-auto" />
          <span>Ishga olishdagi qiyinchiliklar</span>
        </div>

        <h2 class="text-xl sm:text-2xl md:text-4xl text-[#1E1E1E] font-semibold sm:font-medium mt-4 sm:mt-6 leading-snug md:leading-snug">
          Ishga olish jarayoni ko’p vaqt va resurs oladi
        </h2>

        <p class="text-[#0A2A66] mt-2 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <span class="text-[#2A6FF5] font-medium">70% ishga olish jarayoni</span> faqat 
          <a href="#" class="text-[#1E1E1E] font-medium underline-offset-2 hover:underline">quruq</a> & 
          <a href="#" class="text-[#2A6FF5] font-medium underline-offset-2 hover:underline">keraksiz</a> ishlar bilan o’tadi:
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
        <!-- Card 1 -->
        <div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6">
          <img src="/assets/images/JobSearch.png" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
          <h3 class="text-2xl sm:text-3xl font-semibold">5 hafta</h3>
          <p class="text-sm sm:text-[15px] font-normal leading-relaxed">
            Bir xodimni ishga olish vaqti. Kechikishlar biznes jarayoniga salbiy ta’sir qiladi
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6">
          <img src="/assets/images/Resume.png" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
          <h3 class="text-2xl sm:text-3xl font-semibold">60%</h3>
          <p class="text-sm sm:text-[15px] font-normal leading-relaxed">
            Resyumelar ish talabiga to’g’ri kelmaydi. Bu HR’ning qimmatli vaqtini o’g’rilaydi
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6">
          <img src="/assets/images/employee.png" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
          <h3 class="text-2xl sm:text-3xl font-semibold">10 dan 3</h3>
          <p class="text-sm sm:text-[15px] font-normal leading-relaxed">
            Xodimlar noto’g’ri tanlanishi, yana qayta xodim olinishi, resurs ketishiga olib keladi
          </p>
        </div>

        <!-- Card 4 -->
        <div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6">
          <img src="/assets/images/TaskList.png" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
          <h3 class="text-2xl sm:text-3xl font-semibold">40%</h3>
          <p class="text-sm sm:text-[15px] font-normal leading-relaxed">
            Vaqt bekorga rezume ko’rish va intervyu o’tkazishga isrof bo’ladi
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
