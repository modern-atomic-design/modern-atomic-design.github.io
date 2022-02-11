export default {
  head: {
    title: "modern-atomic-design",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  ssr: true,
  target: "static",
  components: true,
  css: [],
  plugins: [],
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: [],
  build: {},
};
