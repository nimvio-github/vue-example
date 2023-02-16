<script setup>
import { Space, Container, Section, FlexList, Text, Logo } from "./ui"

const props = defineProps(['text', 'logos'])
</script>

<template>
  <Section paddingY="4">
    <Container width="narrow">
      <Text v-if="props.text" :center="true" variant="lead">{{ props.text }}</Text>
      <Space size="4" />
      <FlexList gap="4" variant="center">
        <li v-for="logo in props.logos" :key="logo.ContentID">
          <Logo :alt="logo.Data.AltText" :src="logo.Data.image.MediaUrl" size="medium" /> 
        </li>
      </FlexList>
    </Container>
  </Section>
</template>