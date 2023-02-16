<script setup>
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./BrandLogo.vue";

const props = defineProps(['data'])
const { links, meta, socialLinks, copyright } = props.data

const socialMedia = {
  twitter: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: "twitter",
  },
  instagram: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: "instagram",
  },
  facebook: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: "facebook",
  },
  youtube: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: "youtube",
  },
  github: {
    url: "https://github.com",
    name: "GitHub",
    icon: "github",
  },
  twitch: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: "twitch",
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}
</script>

<template>
  <Box as="footer" padding-y="4">
    <Container>
      <Flex variant="start" :responsive="true">
        <NavLink to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <BrandLogo />
        </NavLink>
        <Space />
        <FlexList>
          <li v-for="link in socialLinks" :key="link.ContentID">
            <IconLink :to="getSocialURL(link.Data)">
              <VisuallyHidden>{{ getSocialName(link.Data) }}</VisuallyHidden>
              <vue-feather :type="getSocialIcon(link.Data)"></vue-feather>
            </IconLink>
          </li>
        </FlexList>
      </Flex>
      <Space size="5" />
      <Flex variant="start" :responsive="true">
        <FlexList variant="start" :responsive="true">
          <li v-for="link in links" :key="link.ContentID">
            <NavLink :href="link.Data.href">{{ link.Data.text }}</NavLink>
          </li>
        </FlexList>
        <Space />
        <FlexList>
          <li v-for="link in meta" :key="link.ContentID">
            <NavLink :href="link.Data.href">
              <Text variant="small">{{ link.Data.text }}</Text>
            </NavLink>
          </li>
        </FlexList>
        <Text variant="small">{{ copyright }}</Text>
      </Flex>
    </Container>
  </Box>
</template>