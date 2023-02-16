<script setup>
import UiBase from "./UiBase.vue"
import * as styles from "./ui.css"

const props = defineProps({
  width: {
    default: "full"
  },
  background: {},
  padding: {},
  paddingY: {},
  radius: {},
  center: {
    default: false
  },
  order: {},
  cx: {
    default: () => []
  }
})
</script>

<template>
  <ui-base :cx="[
      styles.widths[width],
      props.background && styles.backgrounds[props.background],
      props.padding && styles.padding[props.padding],
      props.paddingY && styles.paddingY[props.paddingY],
      props.radius && styles.radii[props.radius],
      props.center && styles.box.center,
      props.order && styles.order[props.order],
      ...props.cx,
  ]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>