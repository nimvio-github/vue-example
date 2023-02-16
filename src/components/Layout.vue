<script setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue"

const props = defineProps({
  headerData: {},
  footerData: {}
})
</script>
<template>
  <Header :data="props.headerData"></Header>
  <slot></slot>
  <Footer :data="props.footerData"></Footer>
</template>