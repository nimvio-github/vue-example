<script setup>
import UiBase from "./UiBase.vue"
import * as styles from "./ui.css"

const props = defineProps({
  variant: {},
  gap: {
    default: 3
  },
  gutter: {},
  wrap: {},
  responsive: {},
  marginY: {},
  alignItems: {},
  cx: {
    default: () => []
  }
})
</script>

<template>
  <ui-base :cx="[
      styles.flex,
      props.variant && styles.flexVariants[props.variant],
      props.responsive && styles.flexVariants.responsive,
      props.wrap && styles.flexVariants.wrap,
      props.gutter && styles.gutter[props.gutter],
      props.gutter ? styles.flexGap[0] : styles.flexGap[props.gap],
      props.marginY && styles.marginY[props.marginY],
      props.alignItems && styles.flexVariants[props.alignItems],
      ...props.cx,
  ]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>