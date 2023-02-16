<script setup>
import UiBase from "./UiBase.vue"
import UiLink from "./UiLink.vue"
import * as styles from "./ui.css"
</script>

<template>
  <ui-base :as="UiLink" :cx="[styles.navlink]" v-bind="$attrs">
    <slot></slot>
  </ui-base>
</template>