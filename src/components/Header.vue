<script setup>
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  Nudge,
  VisuallyHidden,
  InteractiveIcon
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import BrandLogo from "./BrandLogo.vue";
import { ref, watch } from "vue";

const props = defineProps(['data'])
const { navItems, cta } = props.data
const ctaData = cta.length ? cta[0] : undefined

const isOpen = ref(false)
const setOpen = (val) => {
  isOpen.value = val
}

watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "visible"
  }
})
</script>

<template>
  <header>
    <Container :class="desktopHeaderNavWrapper">
      <Space :size="2" />
      <Flex variant="spaceBetween">
        <NavLink to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <BrandLogo />
        </NavLink>
        <nav>
          <FlexList :gap="4">
            <li v-for="navItem in navItems" :key="navItem.ContentID">
              <NavLink :to="navItem.Data.href">{{ navItem.Data.text }}</NavLink>
            </li>
          </FlexList>
        </nav>
        <div>
          <Button v-if="ctaData" :to="ctaData.Data.href">{{ ctaData.Data.text }}</Button>
        </div>
      </Flex>
    </Container>
    <Container :class="mobileHeaderNavWrapper[isOpen ? 'open' : 'closed']">
      <Space :size="2" />
      <Flex variant="spaceBetween">
        <span :class="mobileNavSVGColorWrapper[isOpen ? 'reversed' : 'primary']">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
        </span>
        <Flex>
          <Space />
          <div>
            <Button v-if="ctaData" :to="ctaData.Data.href" :variant="isOpen ? 'reversed' : 'primary'">
              {{ ctaData.Data.text }}
            </Button>
          </div>
          <Nudge right="3">
              <InteractiveIcon
                title="Toggle menu"
                @click="setOpen(!isOpen)"
                :class='mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]'
              >
                <vue-feather type="menu" v-if="!isOpen"></vue-feather>
                <vue-feather type="x" v-else></vue-feather>
              </InteractiveIcon>
            </Nudge>
        </Flex>
      </Flex>
    </Container>
    <div v-if="isOpen" :class="mobileNavOverlay">
      <nav>
        <FlexList :responsive="true" variant="stretch">
          <li v-for="navItem in navItems" :key="navItem.ContentID">
              <NavLink :to="navItem.Data.href" :class="mobileNavLink">{{ navItem.Data.text }}</NavLink>
            </li>
        </FlexList>
      </nav>
    </div>
  </header>
</template>