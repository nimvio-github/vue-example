<script setup>
import Layout from "../components/Layout.vue";
import ComponentRenderer from "../components/ComponentRenderer.vue";
import { getContentById, client } from "../utils/dataFetching";
import { onServerPrefetch, ref } from "vue";

const data = ref(null)

const fetch = async () => {
  const { data: { Data: { content: contentData } } } = await getContentById(client, "Content_81b8facc-0e81-45fe-a9a9-2c2be581dbd9", { deep: true })
  const { data: { Data: headerData } } = await getContentById(client, "Content_a3231b18-5a13-47ce-b363-888fa8323cfa", { deep: true })
  const { data: { Data: footerData } } = await getContentById(client, "Content_30c29898-24c0-4f21-ae75-590d3040d629", { deep: true })
  data.value = {
    contentData,
    headerData,
    footerData
  }
}

if (!data.value) fetch()

onServerPrefetch(async () => {
  await fetch();
})
</script>
<template>
  <Layout v-if="data" :header-data="data.headerData" :footer-data="data.footerData">
    <Suspense>
      <component-renderer :contents="data.contentData" />
    </Suspense>
  </Layout>
</template>