<template>
  <article v-if="article">
    <div class="mb-4">
      <nuxt-link to="/" class="underline">back to start</nuxt-link>
    </div>

    <h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      {{ article.title }}
    </h1>
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
      :document="article"
    />
    <a :href="editLink" target="_blank" class="text-gray-500 underline text-sm h-4"
      >Edit this page on Github<img
        src="icons/external-link.svg"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, app, params, error, $config }) {
    const path = `/${params.pathMatch || "index"}`;
    const [article] = await $content({ deep: true })
      .where({ path })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      article,
      path,
      contentDirectory: $config.githubContentDirectory,
    };
  },

  computed: {
    editLink() {
      return `${this.contentDirectory}${this.path}.md`;
    },
  },
};
</script>
