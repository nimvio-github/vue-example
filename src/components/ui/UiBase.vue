<script setup>
const props = defineProps({
  as: {
    default: "div"
  },
  cx: {
    default: () => []
  }
})

const cx = (...args) => args.filter(Boolean).join(" ")
</script>

<template>
  <component :is="props.as" :class="cx(...props.cx)">
    <slot></slot>
  </component>
</template>