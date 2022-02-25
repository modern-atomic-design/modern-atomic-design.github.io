<template>
  <article>
    <h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      {{ article.title }}
    </h1>
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
      :document="article"
    />
    <a>Edit this page on Gitlab</a>
  </article>
</template>
<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [article] = await $content({ deep: true }).where({ path }).fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return {
      article
    }
  }
}
</script>