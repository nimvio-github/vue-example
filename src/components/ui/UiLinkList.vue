<script setup>
import UiFlexList from "./UiFlexList.vue"
import UiCtaLink from "./UiCtaLink.vue"

const props = defineProps({
  links: {
    default: () => []
  }
})
</script>

<template>
  <ui-flex-list :marginY="4" v-bind="$attrs">
    <li v-for="link in props.links" :key="link.ContentID">
      <ui-cta-link :href="link.Data.href">
        {{ link.Data.text }}
      </ui-cta-link>
    </li>
  </ui-flex-list>
</template>