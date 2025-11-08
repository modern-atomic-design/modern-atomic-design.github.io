// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],

  app: {
    head: {
      title: "Modern Atomic Design",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Modern Atomic Design - Articles about design systems, atomic design, and component architecture" },
        { name: "format-detection", content: "telephone=no" },
        { property: 'og:image', content: '/preview.png' },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
    },
    baseURL: "/"
  },

  nitro: {
    output: {
      dir: ".output"
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false
    }
  },

  components: {
    dirs: [
      { path: "~/components/global/atoms", extensions: ["vue"] },
      { path: "~/components/global/molecules", extensions: ["vue"] },
      { path: "~/components/global/organisms", extensions: ["vue"] },
      { path: "~/lib/components", extensions: ["vue"], prefix: "MW" },
    ],
  },

  css: ["~/assets/css/global.css"],

  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      tags: {
        'my-button': 'MyButton',
        'text-field': 'TextField',
        'toggle': 'Toggle',
        'search-field': 'SearchField',
        'card': 'Card',
        'signup-form': 'SignupForm'
      }
    }
  },

  runtimeConfig: {
    public: {
      githubContentDirectory: "https://github.com/modern-atomic-design/modern-atomic-design/edit/main/content/"
    }
  },

  tailwindcss: {
    config: {
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
      ],
    },
  },

  pwa: {
    manifest: {
      name: "Modern Atomic Design",
      lang: "en",
      background_color: "#000000",
      theme_color: "#000000",
    },
  },
});
