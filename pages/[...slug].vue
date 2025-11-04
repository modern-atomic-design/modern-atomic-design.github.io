<template>
  <article v-if="article">
    <div class="mb-4">
      <NuxtLink to="/" class="underline">back to start</NuxtLink>
    </div>

    <h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      {{ article.title }}
    </h1>
    <ContentRenderer
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
      :value="article"
    />
    <a :href="editLink" target="_blank" class="text-gray-500 underline text-sm h-4"
      >Edit this page on Github<img
        src="/icons/external-link.svg"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const path = computed(() => `/${(route.params.slug as string[])?.join('/') || 'index'}`);

const { data: article } = await useAsyncData(`article-${path.value}`, async () => {
  const doc = await queryContent(path.value).findOne().catch(() => null);
  
  if (!doc) {
    throw createError({
      statusCode: 404,
      message: 'Page not found'
    });
  }
  
  return doc;
});

const contentDirectory = config.public.githubContentDirectory;
const editLink = computed(() => `${contentDirectory}${path.value}.md`);
</script>
