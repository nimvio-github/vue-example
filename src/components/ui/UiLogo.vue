<script setup>
import * as styles from "./ui.css"

const props = defineProps({
  size: {
    default: "small"
  }
})
</script>

<template>
  <img :class="styles.logos[props.size]" width="100%" />
</template>