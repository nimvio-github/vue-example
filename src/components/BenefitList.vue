<script setup>
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
} from "./ui"

const props = defineProps(['heading', 'text', 'content'])
</script>

<template>
  <Section>
    <Container>
      <Box :center="true">
        <Heading v-if="props.heading">{{ props.heading }}</Heading>
        <Text v-if="props.text" variant="lead">{{ props.text }}</Text>
      </Box>
      <Space size="3" />
      <FlexList gutter="3" variant="start" :responsive="true" :wrap="true">
        <Box v-for="benefit in props.content" :key="benefit.ContentID" as="li" width="third" padding="4" padding-y="3">
          <Icon v-if="benefit.Data.image" :src="benefit.Data.image.MediaUrl" :alt="benefit.Data.image.AltText" size="small" />
          <Space size="2" />
          <Heading variant="subheadSmall">{{ benefit.Data.heading }}</Heading>
          <Text>{{ benefit.Data.text }}</Text>
        </Box>
      </FlexList>
    </Container>
  </Section>
</template>