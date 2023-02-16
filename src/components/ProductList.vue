<script setup>
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"

const props = defineProps(['kicker', 'heading', 'text', 'content'])
</script>

<template>
  <Section>
    <Container>
      <Box :center="true" padding-y="4">
        <Heading>
          <Kicker v-if="props.kicker">{{ props.kicker }}</Kicker>
          {{ props.heading }}
        </Heading>
        <Text v-if="props.text">{{ props.text }}</Text>
      </Box>
      <FlexList gap="4" variant="responsive">
        <li v-for="product in props.content" :key="product.ContentID">
          <Box :center="true">
            <Icon v-if="product.Data.image" :src="product.Data.image.MediaUrl" :alt="product.Data.image.AltText" size="large" />
            <Subhead>{{ product.Data.heading }}</Subhead>
            <Text>{{ product.Data.text }}</Text>
            <LinkList :links="product.Data.links" />
          </Box>
        </li>
      </FlexList>
    </Container>
  </Section>
</template>