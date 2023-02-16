<script setup>
import isAbsoluteUrl from "is-absolute-url"
import * as styles from "./ui.css"

const props = defineProps({
  to: {},
  href: {}
})

const url = props.href || props.to || ""
</script>

<template>
  <a v-if="isAbsoluteUrl(url)" :href="url" :class="styles.link" v-bind="$attrs">
    <slot></slot>
  </a>
  <router-link v-else :to="url" :class="styles.link" v-bind="$attrs" >
    <slot></slot>
  </router-link>
</template>