<script setup>
import PageLayout from '@/components/PageLayout.vue'
import ContentText from '@/components/ContentText.vue'
import contents from '@/data/home.json'
import { useGuideStore } from '../stores/guideStore'
import { onBeforeUnmount } from 'vue'

const store = useGuideStore()

onBeforeUnmount(() => store.setLoading())
</script>
<template>
  <PageLayout :bg-image="contents.titleImage">
    <template #title>{{ contents.title }}</template>
    <template #subtitle>
      {{ contents.subtitle }}
    </template>

    <ContentText :content="contents.body" />
  </PageLayout>
</template>
