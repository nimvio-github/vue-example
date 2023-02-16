<script setup>
import UiNavLink from "./UiNavLink.vue"
import * as styles from "./ui.css"
</script>

<template>
  <ui-nav-link :class="styles.iconLink" v-bind="$attrs">
    <slot></slot>
  </ui-nav-link>
</template>