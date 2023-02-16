<script setup>
import { defineAsyncComponent } from 'vue'

const Hero = defineAsyncComponent(() => import('./Hero.vue'))
const FeatureList = defineAsyncComponent(() => import('./FeatureList.vue'))
const LogoList = defineAsyncComponent(() => import('./LogoList.vue'))
const ProductList = defineAsyncComponent(() => import('./ProductList.vue'))
const BenefitList = defineAsyncComponent(() => import('./BenefitList.vue'))
const TestimonialList = defineAsyncComponent(() => import('./TestimonialList.vue'))
const StatList = defineAsyncComponent(() => import('./StatList.vue'))
const Cta = defineAsyncComponent(() => import('./Cta.vue'))

const props = defineProps({
  contents: {
    default: () => []
  }
})

const getComponentType = (templateName) => {
  switch (templateName) {
    case 'Homepage Hero':
      return Hero;
    case 'Homepage Feature List':
      return FeatureList;
    case 'Homepage Logo List':
      return LogoList;
    case 'Homepage Product List':
      return ProductList;
    case 'Homepage Benefit List':
      return BenefitList;
    case 'Homepage Testimonial List':
      return TestimonialList;
    case 'Homepage Stat List':
      return StatList;
    case 'Homepage CTA':
      return Cta;
    default:
      return null;
  }
}
</script>

<template>
  <component 
    v-for="content in contents" 
    :key="content.ContentID" 
    v-bind="content.Data" 
    :is="getComponentType(content.TemplateName)" 
  />
</template>