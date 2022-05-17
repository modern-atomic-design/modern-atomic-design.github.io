<template>
  <div class="min-h-screen bg-background">
    <TheHeader />
    <div
      class="container mx-auto px-4 sm:px-0 min-h-screen prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-invert"
    >
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: `/preview.png`,
        },
      ],  
    };
  },
};
</script>
