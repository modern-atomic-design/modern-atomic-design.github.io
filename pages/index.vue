<template>
  <article>
    <h1 class="-ml-12 flex flex-row items-center uppercase max-h-64 font-mono">
      Modern<br />
      Atomic<br />
      Design
      <img
        src="icons/anatomy.png"
        alt="anatomy"
        class="ml-8"
        width="256"
        height="auto"
      />
    </h1>
    <nuxt-content :document="page" />
    <a :href="editLink" target="_blank" class="text-gray-300 text-sm h-4"
      >Edit this page on Gitlab<img
        src="icons/external-link.svg"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
    <h3>Articles</h3>
    <div class="grid gap-4 grid-cols-4">
      <Card
        v-for="article in articles"
        :key="article.title"
        :link="article.path"
        :title="article.title"
      />
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params, $config }) {
    const path = `/${params.pathMatch || "index"}`;
    const page = await $content("index").fetch();
    const articles = await $content().fetch();

    return {
      page,
      path,
      gitlabContentDirectory: $config.gitlabContentDirectory,
      articles: articles.filter(
        ({ title }) => title !== "Modern Atomic Design"
      ),
    };
  },

  computed: {
    editLink() {
      return `${this.gitlabContentDirectory}${this.path}.md`;
    },
  },
};
</script>
