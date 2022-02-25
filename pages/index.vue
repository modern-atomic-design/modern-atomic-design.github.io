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
    <h3>Blog</h3>
    <!-- TODO: fetch articles and render cards as links to the pages (card defined as molecule) -->
  </article>
</template>
<script>
import anatomy from "assets/icons/anatomy.png";

export default {
  data() {
    return {
      anatomy,
    };
  },
  async asyncData({ $content }) {
    const page = await $content("home").fetch();

    return {
      page,
    };
  },
};
</script>
