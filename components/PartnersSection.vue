<template>
  <section class="bg-white py-10 md:py-20 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-xl md:text-2xl font-medium text-[#1E1E1E] mb-10">
        Bu kompaniyalar bilan hamkorlikda ishlaymiz
      </h2>

      <div class="relative w-full overflow-hidden">
        <div class="flex animate-marquee">
          <div class="flex min-w-max gap-20">
            <img src="/assets/images/artel.png" alt="Artel" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/revision.png" alt="Revision" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/utrucking.png" alt="Partner 3" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/logistar.png" alt="Logistar Academy" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/routeeld.png" alt="Route Eld" class="h-14 w-auto flex-shrink-0" />
          </div>

          <div class="flex min-w-max gap-20 ml-20">
            <img src="/assets/images/artel.png" alt="Artel" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/revision.png" alt="Revision" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/utrucking.png" alt="Partner 3" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/logistar.png" alt="Logistar Academy" class="h-14 w-auto flex-shrink-0" />
            <img src="/assets/images/routeeld.png" alt="Route Eld" class="h-14 w-auto flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
