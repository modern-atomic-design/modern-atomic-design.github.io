<template>
  <article>
    <h1 class="-ml-12 flex flex-row items-center uppercase max-h-64 font-mono">
      Modern<br />
      Atomic<br />
      Design
      <img
        :src="anatomy"
        alt="anatomy"
        class="ml-8"
        width="256"
        height="auto"
      />
    </h1>
    <nuxt-content :document="page" />
    <a :href="editLink" target="_blank" class="text-gray-300 text-sm h-4"
      >Edit this page on Gitlab<img
        :src="ExternalLinkIcon"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
    <h3>Blog</h3>
    <!-- TODO: fetch articles and render cards as links to the pages (card defined as molecule) -->
  </article>
</template>
<script>
import ExternalLinkIcon from "assets/icons/external-link.svg";
import anatomy from "assets/icons/anatomy.png";

export default {
  data() {
    return {
      anatomy,
      ExternalLinkIcon
    };
  },
  async asyncData({ $content, params }) {
    const path = `/${params.pathMatch || "index"}`;
    const page = await $content("index").fetch();

    return {
      page,
      path,
    };
  },

  computed: {
    editLink() {
      return `https://gitlab.maibornwolff.de/department-dtd/modern-atomic-design/-/edit/main/content${this.path}.md`;
    },
  },
};
</script>
