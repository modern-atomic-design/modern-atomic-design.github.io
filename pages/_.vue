<template>
  <article>
    <div class="mb-4">
      <nuxt-link to="/">back to start</nuxt-link>
    </div>

    <h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      {{ article.title }}
    </h1>
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
      :document="article"
    />
    <a :href="editLink" target="_blank" class="text-gray-300 text-sm h-4"
      >Edit this page on Gitlab<img
        :src="ExternalLinkIcon"
        alt="link"
        class="w-4 h-4 inline-block ml-2"
    /></a>
  </article>
</template>
<script>
import ExternalLinkIcon from "assets/icons/external-link.svg";
export default {
  data() {
    return {
      ExternalLinkIcon,
    };
  },
  async asyncData({ $content, app, params, error }) {
    const path = `/${params.pathMatch || "index"}`;
    const [article] = await $content({ deep: true }).where({ path }).fetch();

    if (!article) {
      return error({ statusCode: 404, message: "Article not found" });
    }

    return {
      article,
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
