<template>
  <article>
    <div class="flex justify-between">
      <h1 class="flex flex-row items-center uppercase max-h-64 font-mono">
        Modern<br />
        Atomic<br />
        Design
        <img
          src="icons/chemistry.png"
          alt="anatomy"
          class="ml-16"
          width="200"
          height="auto"
        />
      </h1>
      <a
        href="https://gitlab.maibornwolff.de/department-dtd/modern-atomic-design/"
        target="_blank"
        class="mt-8 mr-8 h-12 w-12 p-3 hover:bg-gray-100 rounded-full bg-gray-50"
        ><img
          class="h-6 w-6"
          style="margin: 0 !important"
          src="icons/gitlab.png"
          width="32"
          height="32"
          alt="gitlab"
      /></a>
    </div>
    <h3>Articles</h3>
    <div class="grid gap-4 grid-cols-4">
      <Card
        v-for="article in articles"
        :key="article.title"
        :link="article.path"
        :title="article.title"
      />
    </div>
    <nuxt-content :document="page" />
    <a :href="editLink" target="_blank" class="text-gray-300 text-sm h-4"
      >Edit this page on Gitlab<img
        src="icons/external-link.svg"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
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
        ({ title }) => title && title !== "Modern Atomic Design"
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
