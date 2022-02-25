import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";

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
  components: {
    dirs: [
      { path: "~/components/atoms", extensions: ["vue"] },
      { path: "~/components/molecules", extensions: ["vue"] },
      { path: "~/components/organisms", extensions: ["vue"] },
      { path: "~/lib/components", extensions: ["vue"], prefix: "MW" },
    ],
  },
  css: [],
  plugins: [],
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
  build: {},
  storybook: {
    parameters: {
      backgrounds: {
        default: "background",
        values: [{ name: "background", value: "#F5F7FF" }],
      },
    },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindForms, tailwindTypography],
    },
  },
};
