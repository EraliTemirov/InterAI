<template>
  <div>
    <div class="bg-cover bg-no-repeat bg-center">
    <HeaderComponent />
    <HeroSection />
    <HeroImg/>
  </div>
  <PartnersSection />
  <FeaturesSection />
  <Ai/>
  <StepShowcase />
      
  <TestimonialSection />
    <!-- <DashboardPreview />
    <FooterCTA /> -->
    <Footer/>
  </div>
</template>

<script setup>
import HeaderComponent from '~/components/HeaderComponent.vue'
import HeroSection from '~/components/HeroSection.vue'
import HeroImg from '~/components/HeroImg.vue'
import Footer from '~/components/Footer.vue'
import StepShowcase from '~/components/StepShowcase.vue'
import DashboardPreview from '~/components/DashboardPreview.vue'
import PartnersSection from '~/components/PartnersSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import Ai from '/components/AI.vue'
import FooterCTA from '~/components/FooterCTA.vue'
</script>
