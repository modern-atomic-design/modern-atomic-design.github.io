<template>
  <article>
    <h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      {{ page.title }}
    </h1>
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
      :document="page"
    />
  </article>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("atomic-design").fetch();

    return {
      page,
    };
  },
};
</script>
