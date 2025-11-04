import { _ as __nuxt_component_0 } from './nuxt-link-Dtw3WE_4.mjs';
import _sfc_main$1 from './ContentRenderer-BN1iiN5h.mjs';
import { defineComponent, computed, withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-D_Owf_zY.mjs';
import { a as useRoute, c as createError, u as useRuntimeConfig } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-CBdwNUCZ.mjs';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './ContentRendererMarkdown-CrN8smvk.mjs';
import 'property-information';
import './node-yHY0X6Y7.mjs';
import './preview-C97LYoK2.mjs';
import 'vue-router';
import 'perfect-debounce';
import '../_/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const path = computed(() => {
      var _a;
      return `/${((_a = route.params.slug) == null ? void 0 : _a.join("/")) || "index"}`;
    });
    const { data: article } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`article-${path.value}`, async () => {
      const doc = await queryContent(path.value).findOne().catch(() => null);
      if (!doc) {
        throw createError({
          statusCode: 404,
          message: "Page not found"
        });
      }
      return doc;
    })), __temp = await __temp, __restore(), __temp);
    const contentDirectory = config.public.githubContentDirectory;
    const editLink = computed(() => `${contentDirectory}${path.value}.md`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      if (unref(article)) {
        _push(`<article${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`back to start`);
            } else {
              return [
                createTextVNode("back to start")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">${ssrInterpolate(unref(article).title)}</h1>`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl",
          value: unref(article)
        }, null, _parent));
        _push(`<a${ssrRenderAttr("href", unref(editLink))} target="_blank" class="text-gray-500 underline text-sm h-4">Edit this page on Github<img${ssrRenderAttr("src", _imports_0)} alt="link" class="w-4 h-4 inline-block ml-2"></a></article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-LuAzshUM.mjs.map
