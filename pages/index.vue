<template>
  <article>
    <div class="flex justify-between flex-wrap-reverse">
      <h1 class="flex flex-row items-center uppercase max-h-64 font-mono">
        Modern<br />
        Atomic<br />
        Design
        <Logo class="w-56 lg:w-96 h-auto" />
      </h1>
      <div class="flex gap-4 mt-8 mr-4">
        <a
          href="https://github.com/modern-atomic-design/modern-atomic-design"
          target="_blank"
          class="h-12 w-12 p-3 hover:bg-gray-100 rounded-full bg-gray-50"
          ><img
            class="h-6 w-6"
            style="margin: 0 !important"
            src="icons/github.png"
            width="32"
            height="32"
            alt="github"
        /></a>
      </div>
    </div>
    <h3>Articles</h3>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        class="h-16 sm:h-24"
        v-for="article in articles"
        :key="article.title"
        :link="article.path"
        >{{ article.title }}</Card
      >
    </div>
    <nuxt-content :document="page" />
    <a
      :href="editLink"
      target="_blank"
      class="text-gray-500 underline text-sm h-4"
      >Edit this page on Github<img
        src="icons/external-link.svg"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
  </article>
</template>
<script>
import Logo from "@/components/Logo";
export default {
  components: { Logo },
  async asyncData({ $content, params, $config }) {
    const path = `/${params.pathMatch || "index"}`;
    const page = await $content("index").fetch();
    const articles = await $content().fetch();

    return {
      page,
      path,
      contentDirectory: $config.githubContentDirectory,
      articles: articles.filter(
        ({ title }) => title && title !== "Modern Atomic Design"
      ),
    };
  },

  computed: {
    editLink() {
      return `${this.contentDirectory}${this.path}.md`;
    },
  },
};
</script>
