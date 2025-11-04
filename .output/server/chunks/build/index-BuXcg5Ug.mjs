import { _ as __nuxt_component_0 } from './nuxt-link-Dtw3WE_4.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, mergeProps, createVNode, createBlock, createCommentVNode, renderSlot, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import _sfc_main$3 from './ContentRenderer-BN1iiN5h.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _imports_0$1 } from './virtual_public-D_Owf_zY.mjs';
import { u as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-CBdwNUCZ.mjs';
import './ContentRendererMarkdown-CrN8smvk.mjs';
import 'property-information';
import './node-yHY0X6Y7.mjs';
import './preview-C97LYoK2.mjs';
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
import 'vue-router';
import 'perfect-debounce';
import '../_/index.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    link: {},
    buttonLabel: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: __props.link }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group hover:bg-gray-100 hover:border-gray-100 transition-all bg-white border-4 border-white rounded-xl shadow h-full w-full flex sm:justify-between justify-center flex-wrap items-center px-6"${_scopeId}><p style="${ssrRenderStyle({ "margin": "0 !important" })}" class="${ssrRenderClass([{ "group-hover:underline": !__props.buttonLabel }, "text-lg font-semibold"])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p>`);
            if (__props.buttonLabel) {
              _push2(`<button class="rounded-lg border-2 border-primary py-3 px-4 uppercase font-semibold bg-transparent text-lg text-primary group-hover:text-white group-hover:bg-primary-hover group-hover:border-primary-hover"${_scopeId}>${ssrInterpolate(__props.buttonLabel)}</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "group hover:bg-gray-100 hover:border-gray-100 transition-all bg-white border-4 border-white rounded-xl shadow h-full w-full flex sm:justify-between justify-center flex-wrap items-center px-6" }, [
                createVNode("p", {
                  style: { "margin": "0 !important" },
                  class: ["text-lg font-semibold", { "group-hover:underline": !__props.buttonLabel }]
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2),
                __props.buttonLabel ? (openBlock(), createBlock("button", {
                  key: 0,
                  class: "rounded-lg border-2 border-primary py-3 px-4 uppercase font-semibold bg-transparent text-lg text-primary group-hover:text-white group-hover:bg-primary-hover group-hover:border-primary-hover"
                }, toDisplayString(__props.buttonLabel), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/molecules/Card/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/icons/github.png");
const _sfc_main$1 = {
  name: "Logo",
  mounted() {
    !(function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}, t.__SVGATOR_PLAYER__["5c7f360c"] = n());
    })(this, function() {
      function t(t2, n2) {
        var r2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var e2 = Object.getOwnPropertySymbols(t2);
          n2 && (e2 = e2.filter(function(n3) {
            return Object.getOwnPropertyDescriptor(t2, n3).enumerable;
          })), r2.push.apply(r2, e2);
        }
        return r2;
      }
      function n(n2) {
        for (var r2 = 1; r2 < arguments.length; r2++) {
          var e2 = null != arguments[r2] ? arguments[r2] : {};
          r2 % 2 ? t(Object(e2), true).forEach(function(t2) {
            u(n2, t2, e2[t2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n2, Object.getOwnPropertyDescriptors(e2)) : t(Object(e2)).forEach(function(t2) {
            Object.defineProperty(
              n2,
              t2,
              Object.getOwnPropertyDescriptor(e2, t2)
            );
          });
        }
        return n2;
      }
      function r(t2) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      function e(t2, n2) {
        if (!(t2 instanceof n2))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t2, n2) {
        for (var r2 = 0; r2 < n2.length; r2++) {
          var e2 = n2[r2];
          e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t2, e2.key, e2);
        }
      }
      function o(t2, n2, r2) {
        return n2 && i(t2.prototype, n2), r2 && i(t2, r2), t2;
      }
      function u(t2, n2, r2) {
        return n2 in t2 ? Object.defineProperty(t2, n2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t2[n2] = r2, t2;
      }
      function a(t2) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      function l(t2, n2) {
        return (l = Object.setPrototypeOf || function(t3, n3) {
          return t3.__proto__ = n3, t3;
        })(t2, n2);
      }
      function f() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function() {
            })
          ), true;
        } catch (t2) {
          return false;
        }
      }
      function s(t2, n2, r2) {
        return (s = f() ? Reflect.construct : function(t3, n3, r3) {
          var e2 = [null];
          e2.push.apply(e2, n3);
          var i2 = new (Function.bind.apply(t3, e2))();
          return r3 && l(i2, r3.prototype), i2;
        }).apply(null, arguments);
      }
      function c(t2, n2) {
        if (n2 && ("object" == typeof n2 || "function" == typeof n2)) return n2;
        if (void 0 !== n2)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function(t3) {
          if (void 0 === t3)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t3;
        })(t2);
      }
      function h(t2, n2, r2) {
        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t3, n3, r3) {
          var e2 = (function(t4, n4) {
            for (; !Object.prototype.hasOwnProperty.call(t4, n4) && null !== (t4 = a(t4)); ) ;
            return t4;
          })(t3, n3);
          if (e2) {
            var i2 = Object.getOwnPropertyDescriptor(e2, n3);
            return i2.get ? i2.get.call(r3) : i2.value;
          }
        })(t2, n2, r2 || t2);
      }
      function v(t2) {
        return (function(t3) {
          if (Array.isArray(t3)) return y(t3);
        })(t2) || (function(t3) {
          if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"])
            return Array.from(t3);
        })(t2) || (function(t3, n2) {
          if (!t3) return;
          if ("string" == typeof t3) return y(t3, n2);
          var r2 = Object.prototype.toString.call(t3).slice(8, -1);
          "Object" === r2 && t3.constructor && (r2 = t3.constructor.name);
          if ("Map" === r2 || "Set" === r2) return Array.from(t3);
          if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
            return y(t3, n2);
        })(t2) || (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })();
      }
      function y(t2, n2) {
        (null == n2 || n2 > t2.length) && (n2 = t2.length);
        for (var r2 = 0, e2 = new Array(n2); r2 < n2; r2++) e2[r2] = t2[r2];
        return e2;
      }
      Number.isInteger || (Number.isInteger = function(t2) {
        return "number" == typeof t2 && isFinite(t2) && Math.floor(t2) === t2;
      }), Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      var g = p(Math.pow(10, -6));
      function p(t2) {
        var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t2)) return t2;
        var r2 = Math.pow(10, n2);
        return Math.round((+t2 + Number.EPSILON) * r2) / r2;
      }
      function d(t2, n2) {
        var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        return Math.abs(t2 - n2) < r2;
      }
      var m = Math.PI / 180;
      function b(t2) {
        return t2;
      }
      function w(t2, n2, r2) {
        var e2 = 1 - r2;
        return 3 * r2 * e2 * (t2 * e2 + n2 * r2) + r2 * r2 * r2;
      }
      function x() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t2 < 0 || t2 > 1 || r2 < 0 || r2 > 1 ? null : d(t2, n2) && d(r2, e2) ? b : function(i2) {
          if (i2 <= 0)
            return t2 > 0 ? i2 * n2 / t2 : 0 === n2 && r2 > 0 ? i2 * e2 / r2 : 0;
          if (i2 >= 1)
            return r2 < 1 ? 1 + (i2 - 1) * (e2 - 1) / (r2 - 1) : 1 === r2 && t2 < 1 ? 1 + (i2 - 1) * (n2 - 1) / (t2 - 1) : 1;
          for (var o2, u2 = 0, a2 = 1; u2 < a2; ) {
            var l2 = w(t2, r2, o2 = (u2 + a2) / 2);
            if (d(i2, l2)) break;
            l2 < i2 ? u2 = o2 : a2 = o2;
          }
          return w(n2, e2, o2);
        };
      }
      function A() {
        return 1;
      }
      function k(t2) {
        return 1 === t2 ? 1 : 0;
      }
      function _() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t2) {
          if (0 === n2) return k;
          if (1 === n2) return A;
        }
        var r2 = 1 / t2;
        return function(t3) {
          return t3 >= 1 ? 1 : (t3 += n2 * r2) - t3 % r2;
        };
      }
      var S = Math.sin, O = Math.cos, j = Math.acos, M = Math.asin, P = Math.tan, E = Math.atan2, I = Math.PI / 180, R = 180 / Math.PI, F = Math.sqrt, N = (function() {
        function t2() {
          var n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, u2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          e(this, t2), this.m = [n2, r2, i2, o2, u2, a2], this.i = null, this.w = null, this.s = null;
        }
        return o(
          t2,
          [
            {
              key: "determinant",
              get: function() {
                var t3 = this.m;
                return t3[0] * t3[3] - t3[1] * t3[2];
              }
            },
            {
              key: "isIdentity",
              get: function() {
                if (null === this.i) {
                  var t3 = this.m;
                  this.i = 1 === t3[0] && 0 === t3[1] && 0 === t3[2] && 1 === t3[3] && 0 === t3[4] && 0 === t3[5];
                }
                return this.i;
              }
            },
            {
              key: "point",
              value: function(t3, n2) {
                var r2 = this.m;
                return {
                  x: r2[0] * t3 + r2[2] * n2 + r2[4],
                  y: r2[1] * t3 + r2[3] * n2 + r2[5]
                };
              }
            },
            {
              key: "translateSelf",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!t3 && !n2) return this;
                var r2 = this.m;
                return r2[4] += r2[0] * t3 + r2[2] * n2, r2[5] += r2[1] * t3 + r2[3] * n2, this.w = this.s = this.i = null, this;
              }
            },
            {
              key: "rotateSelf",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (t3 %= 360) {
                  var n2 = S(t3 *= I), r2 = O(t3), e2 = this.m, i2 = e2[0], o2 = e2[1];
                  e2[0] = i2 * r2 + e2[2] * n2, e2[1] = o2 * r2 + e2[3] * n2, e2[2] = e2[2] * r2 - i2 * n2, e2[3] = e2[3] * r2 - o2 * n2, this.w = this.s = this.i = null;
                }
                return this;
              }
            },
            {
              key: "scaleSelf",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (1 !== t3 || 1 !== n2) {
                  var r2 = this.m;
                  r2[0] *= t3, r2[1] *= t3, r2[2] *= n2, r2[3] *= n2, this.w = this.s = this.i = null;
                }
                return this;
              }
            },
            {
              key: "skewSelf",
              value: function(t3, n2) {
                if (n2 %= 360, (t3 %= 360) || n2) {
                  var r2 = this.m, e2 = r2[0], i2 = r2[1], o2 = r2[2], u2 = r2[3];
                  t3 && (t3 = P(t3 * I), r2[2] += e2 * t3, r2[3] += i2 * t3), n2 && (n2 = P(n2 * I), r2[0] += o2 * n2, r2[1] += u2 * n2), this.w = this.s = this.i = null;
                }
                return this;
              }
            },
            {
              key: "resetSelf",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, u2 = this.m;
                return u2[0] = t3, u2[1] = n2, u2[2] = r2, u2[3] = e2, u2[4] = i2, u2[5] = o2, this.w = this.s = this.i = null, this;
              }
            },
            {
              key: "recomposeSelf",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                return this.isIdentity || this.resetSelf(), t3 && (t3.x || t3.y) && this.translateSelf(t3.x, t3.y), n2 && this.rotateSelf(n2), r2 && (r2.x && this.skewSelf(r2.x, 0), r2.y && this.skewSelf(0, r2.y)), !e2 || 1 === e2.x && 1 === e2.y || this.scaleSelf(e2.x, e2.y), i2 && (i2.x || i2.y) && this.translateSelf(i2.x, i2.y), this;
              }
            },
            {
              key: "decompose",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r2 = this.m, e2 = r2[0] * r2[0] + r2[1] * r2[1], i2 = [
                  [r2[0], r2[1]],
                  [r2[2], r2[3]]
                ], o2 = F(e2);
                if (0 === o2)
                  return {
                    origin: { x: p(r2[4]), y: p(r2[5]) },
                    translate: { x: p(t3), y: p(n2) },
                    scale: { x: 0, y: 0 },
                    skew: { x: 0, y: 0 },
                    rotate: 0
                  };
                i2[0][0] /= o2, i2[0][1] /= o2;
                var u2 = r2[0] * r2[3] - r2[1] * r2[2] < 0;
                u2 && (o2 = -o2);
                var a2 = i2[0][0] * i2[1][0] + i2[0][1] * i2[1][1];
                i2[1][0] -= i2[0][0] * a2, i2[1][1] -= i2[0][1] * a2;
                var l2 = F(i2[1][0] * i2[1][0] + i2[1][1] * i2[1][1]);
                if (0 === l2)
                  return {
                    origin: { x: p(r2[4]), y: p(r2[5]) },
                    translate: { x: p(t3), y: p(n2) },
                    scale: { x: p(o2), y: 0 },
                    skew: { x: 0, y: 0 },
                    rotate: 0
                  };
                i2[1][0] /= l2, i2[1][1] /= l2, a2 /= l2;
                var f2 = 0;
                return i2[1][1] < 0 ? (f2 = j(i2[1][1]) * R, i2[0][1] < 0 && (f2 = 360 - f2)) : f2 = M(i2[0][1]) * R, u2 && (f2 = -f2), a2 = E(a2, F(i2[0][0] * i2[0][0] + i2[0][1] * i2[0][1])) * R, u2 && (a2 = -a2), {
                  origin: { x: p(r2[4]), y: p(r2[5]) },
                  translate: { x: p(t3), y: p(n2) },
                  scale: { x: p(o2), y: p(l2) },
                  skew: { x: p(a2), y: 0 },
                  rotate: p(f2)
                };
              }
            },
            {
              key: "clone",
              value: function() {
                var t3 = this.m;
                return new this.constructor(
                  t3[0],
                  t3[1],
                  t3[2],
                  t3[3],
                  t3[4],
                  t3[5]
                );
              }
            },
            {
              key: "toString",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ";
                if (null === this.s) {
                  var n2 = this.m.map(function(t4) {
                    return p(t4);
                  });
                  1 === n2[0] && 0 === n2[1] && 0 === n2[2] && 1 === n2[3] ? this.s = "translate(" + n2[4] + t3 + n2[5] + ")" : this.s = "matrix(" + n2.join(t3) + ")";
                }
                return this.s;
              }
            }
          ],
          [
            {
              key: "create",
              value: function(t3) {
                return t3 ? Array.isArray(t3) ? s(this, v(t3)) : t3 instanceof this ? t3.clone() : new this().recomposeSelf(
                  t3.origin,
                  t3.rotate,
                  t3.skew,
                  t3.scale,
                  t3.translate
                ) : new this();
              }
            }
          ]
        ), t2;
      })();
      function T(t2, n2, r2) {
        return t2 >= 0.5 ? r2 : n2;
      }
      function q(t2, n2, r2) {
        return 0 === t2 || n2 === r2 ? n2 : t2 * (r2 - n2) + n2;
      }
      function B(t2, n2, r2) {
        var e2 = q(t2, n2, r2);
        return e2 <= 0 ? 0 : e2;
      }
      function L(t2, n2, r2) {
        var e2 = q(t2, n2, r2);
        return e2 <= 0 ? 0 : e2 >= 1 ? 1 : e2;
      }
      function C(t2, n2, r2) {
        return 0 === t2 ? n2 : 1 === t2 ? r2 : { x: q(t2, n2.x, r2.x), y: q(t2, n2.y, r2.y) };
      }
      function D(t2, n2, r2) {
        var e2 = (function(t3, n3, r3) {
          return Math.round(q(t3, n3, r3));
        })(t2, n2, r2);
        return e2 <= 0 ? 0 : e2 >= 255 ? 255 : e2;
      }
      function z(t2, n2, r2) {
        return 0 === t2 ? n2 : 1 === t2 ? r2 : {
          r: D(t2, n2.r, r2.r),
          g: D(t2, n2.g, r2.g),
          b: D(t2, n2.b, r2.b),
          a: q(t2, null == n2.a ? 1 : n2.a, null == r2.a ? 1 : r2.a)
        };
      }
      function V(t2, n2) {
        for (var r2 = [], e2 = 0; e2 < t2; e2++) r2.push(n2);
        return r2;
      }
      function G(t2, n2) {
        if (--n2 <= 0) return t2;
        var r2 = (t2 = Object.assign([], t2)).length;
        do {
          for (var e2 = 0; e2 < r2; e2++) t2.push(t2[e2]);
        } while (--n2 > 0);
        return t2;
      }
      var Y, $ = (function() {
        function t2(n2) {
          e(this, t2), this.list = n2, this.length = n2.length;
        }
        return o(t2, [
          {
            key: "setAttribute",
            value: function(t3, n2) {
              for (var r2 = this.list, e2 = 0; e2 < this.length; e2++)
                r2[e2].setAttribute(t3, n2);
            }
          },
          {
            key: "removeAttribute",
            value: function(t3) {
              for (var n2 = this.list, r2 = 0; r2 < this.length; r2++)
                n2[r2].removeAttribute(t3);
            }
          },
          {
            key: "style",
            value: function(t3, n2) {
              for (var r2 = this.list, e2 = 0; e2 < this.length; e2++)
                r2[e2].style[t3] = n2;
            }
          }
        ]), t2;
      })(), U = /-./g, Q = function(t2, n2) {
        return n2.toUpperCase();
      };
      function H(t2) {
        return "function" == typeof t2 ? t2 : T;
      }
      function J(t2) {
        return t2 ? "function" == typeof t2 ? t2 : Array.isArray(t2) ? (function(t3) {
          var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
          if (!Array.isArray(t3)) return n2;
          switch (t3.length) {
            case 1:
              return _(t3[0]) || n2;
            case 2:
              return _(t3[0], t3[1]) || n2;
            case 4:
              return x(t3[0], t3[1], t3[2], t3[3]) || n2;
          }
          return n2;
        })(t2, null) : (function(t3, n2) {
          var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
          switch (t3) {
            case "linear":
              return b;
            case "steps":
              return _(n2.steps || 1, n2.jump || 0) || r2;
            case "bezier":
            case "cubic-bezier":
              return x(n2.x1 || 0, n2.y1 || 0, n2.x2 || 0, n2.y2 || 0) || r2;
          }
          return r2;
        })(t2.type, t2.value, null) : null;
      }
      function Z(t2, n2, r2) {
        var e2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i2 = n2.length - 1;
        if (t2 <= n2[0].t) return e2 ? [0, 0, n2[0].v] : n2[0].v;
        if (t2 >= n2[i2].t) return e2 ? [i2, 1, n2[i2].v] : n2[i2].v;
        var o2, u2 = n2[0], a2 = null;
        for (o2 = 1; o2 <= i2; o2++) {
          if (!(t2 > n2[o2].t)) {
            a2 = n2[o2];
            break;
          }
          u2 = n2[o2];
        }
        return null == a2 ? e2 ? [i2, 1, n2[i2].v] : n2[i2].v : u2.t === a2.t ? e2 ? [o2, 1, a2.v] : a2.v : (t2 = (t2 - u2.t) / (a2.t - u2.t), u2.e && (t2 = u2.e(t2)), e2 ? [o2, t2, r2(t2, u2.v, a2.v)] : r2(t2, u2.v, a2.v));
      }
      function K(t2, n2) {
        var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t2 && t2.length ? "function" != typeof n2 ? null : ("function" != typeof r2 && (r2 = null), function(e2) {
          var i2 = Z(e2, t2, n2);
          return null != i2 && r2 && (i2 = r2(i2)), i2;
        }) : null;
      }
      function W(t2, n2) {
        return t2.t - n2.t;
      }
      function X(t2, n2, e2, i2, o2) {
        var u2, a2 = "@" === e2[0], l2 = "#" === e2[0], f2 = Y[e2], s2 = T;
        switch (a2 ? (u2 = e2.substr(1), e2 = u2.replace(U, Q)) : l2 && (e2 = e2.substr(1)), r(f2)) {
          case "function":
            if (s2 = f2(i2, o2, Z, J, e2, a2, n2, t2), l2) return s2;
            break;
          case "string":
            s2 = K(i2, H(f2));
            break;
          case "object":
            if ((s2 = K(i2, H(f2.i), f2.f)) && "function" == typeof f2.u)
              return f2.u(n2, s2, e2, a2, t2);
        }
        return s2 ? (function(t3, n3, r2) {
          if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
            return t3 instanceof $ ? function(e4) {
              return t3.style(n3, r2(e4));
            } : function(e4) {
              return t3.style[n3] = r2(e4);
            };
          if (Array.isArray(n3)) {
            var e3 = n3.length;
            return function(i3) {
              var o3 = r2(i3);
              if (null == o3)
                for (var u3 = 0; u3 < e3; u3++) t3[u3].removeAttribute(n3);
              else for (var a3 = 0; a3 < e3; a3++) t3[a3].setAttribute(n3, o3);
            };
          }
          return function(e4) {
            var i3 = r2(e4);
            null == i3 ? t3.removeAttribute(n3) : t3.setAttribute(n3, i3);
          };
        })(n2, e2, s2, a2) : null;
      }
      function tt(t2, n2, e2, i2) {
        if (!i2 || "object" !== r(i2)) return null;
        var o2 = null, u2 = null;
        return Array.isArray(i2) ? u2 = (function(t3) {
          if (!t3 || !t3.length) return null;
          for (var n3 = 0; n3 < t3.length; n3++)
            t3[n3].e && (t3[n3].e = J(t3[n3].e));
          return t3.sort(W);
        })(i2) : (u2 = i2.keys, o2 = i2.data || null), u2 ? X(t2, n2, e2, u2, o2) : null;
      }
      function nt(t2, n2, r2) {
        if (!r2) return null;
        var e2 = [];
        for (var i2 in r2)
          if (r2.hasOwnProperty(i2)) {
            var o2 = tt(t2, n2, i2, r2[i2]);
            o2 && e2.push(o2);
          }
        return e2.length ? e2 : null;
      }
      function rt(t2, n2) {
        if (!n2.duration || n2.duration < 0) return null;
        var r2 = (function(t3, n3) {
          if (!n3) return null;
          var r3 = [];
          if (Array.isArray(n3))
            for (var e2 = n3.length, i2 = 0; i2 < e2; i2++) {
              var o2 = n3[i2];
              if (2 === o2.length) {
                var u2 = null;
                if ("string" == typeof o2[0]) u2 = t3.getElementById(o2[0]);
                else if (Array.isArray(o2[0])) {
                  u2 = [];
                  for (var a2 = 0; a2 < o2[0].length; a2++)
                    if ("string" == typeof o2[0][a2]) {
                      var l2 = t3.getElementById(o2[0][a2]);
                      l2 && u2.push(l2);
                    }
                  u2 = u2.length ? 1 === u2.length ? u2[0] : new $(u2) : null;
                }
                if (u2) {
                  var f2 = nt(t3, u2, o2[1]);
                  f2 && (r3 = r3.concat(f2));
                }
              }
            }
          else
            for (var s2 in n3)
              if (n3.hasOwnProperty(s2)) {
                var c2 = t3.getElementById(s2);
                if (c2) {
                  var h2 = nt(t3, c2, n3[s2]);
                  h2 && (r3 = r3.concat(h2));
                }
              }
          return r3.length ? r3 : null;
        })(t2, n2.elements);
        return r2 ? (function(t3, n3) {
          var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0, e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, u2 = t3.length, a2 = e2 > 0 ? n3 : 0;
          i2 && r3 % 2 == 0 && (a2 = n3 - a2);
          var l2 = null;
          return function(f2, s2) {
            var c2 = f2 % n3, h2 = 1 + (f2 - c2) / n3;
            s2 *= e2, i2 && h2 % 2 == 0 && (s2 = -s2);
            var v2 = false;
            if (h2 > r3) c2 = a2, v2 = true, -1 === o2 && (c2 = e2 > 0 ? 0 : n3);
            else if (s2 < 0 && (c2 = n3 - c2), c2 === l2) return false;
            l2 = c2;
            for (var y2 = 0; y2 < u2; y2++) t3[y2](c2);
            return v2;
          };
        })(
          r2,
          n2.duration,
          n2.iterations || 1 / 0,
          n2.direction || 1,
          !!n2.alternate,
          n2.fill || 1
        ) : null;
      }
      function et(t2) {
        return +("0x" + (t2.replace(/[^0-9a-fA-F]+/g, "") || 27));
      }
      function it(t2, n2, r2) {
        return !t2 || !r2 || n2 > t2.length ? t2 : t2.substring(0, n2) + it(t2.substring(n2 + 1), r2, r2);
      }
      function ot(t2) {
        var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t2 || t2 % n2 ? t2 % n2 : ot(t2 / n2, n2);
      }
      function ut(t2, n2, r2) {
        if (t2 && t2.length) {
          var e2 = et(r2), i2 = et(n2), o2 = ot(e2) + 5, u2 = it(t2, ot(e2, 5), o2);
          return u2 = u2.replace(/\x7c$/g, "==").replace(/\x2f$/g, "="), u2 = (function(t3, n3, r3) {
            var e3 = +("0x" + t3.substring(0, 4));
            t3 = t3.substring(4);
            for (var i3 = n3 % e3 + r3 % 27, o3 = [], u3 = 0; u3 < t3.length; u3 += 2)
              if ("|" !== t3[u3]) {
                var a2 = +("0x" + t3[u3] + t3[u3 + 1]) - i3;
                o3.push(a2);
              } else {
                var l2 = +("0x" + t3.substring(u3 + 1, u3 + 1 + 4)) - i3;
                u3 += 3, o3.push(l2);
              }
            return String.fromCharCode.apply(String, o3);
          })(u2 = (u2 = atob(u2)).replace(/[\x41-\x5A]/g, ""), i2, e2), u2 = JSON.parse(u2);
        }
      }
      var at = (function() {
        function t2(n2, r2) {
          var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          e(this, t2), this._id = 0, this._running = false, this._rollingBack = false, this._animations = n2, this.duration = r2.duration, this.alternate = r2.alternate, this.fill = r2.fill, this.iterations = r2.iterations, this.direction = i2.direction || 1, this.speed = i2.speed || 1, this.fps = i2.fps || 100, this.offset = i2.offset || 0, this.rollbackStartOffset = 0;
        }
        return o(
          t2,
          [
            {
              key: "maxFiniteDuration",
              get: function() {
                return this.iterations > 0 ? this.iterations * this.duration : this.duration;
              }
            },
            {
              key: "_apply",
              value: function(t3) {
                for (var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = this._animations, e2 = r2.length, i2 = 0, o2 = 0; o2 < e2; o2++)
                  n2[o2] ? i2++ : (n2[o2] = r2[o2](t3, this.direction), n2[o2] && i2++);
                return i2;
              }
            },
            {
              key: "_rollback",
              value: function() {
                var t3 = this, n2 = 1 / 0, r2 = null;
                this.rollbackStartOffset = this.offset, this._rollingBack = true, this._running = true;
                this._id = (void 0).requestAnimationFrame(function e2(i2) {
                  if (t3._rollingBack) {
                    null == r2 && (r2 = i2);
                    var o2 = i2 - r2, u2 = t3.rollbackStartOffset - o2, a2 = Math.round(u2 * t3.speed);
                    if (a2 > t3.duration && n2 !== 1 / 0) {
                      var l2 = !!t3.alternate && a2 / t3.duration % 2 > 1, f2 = a2 % t3.duration;
                      a2 = (f2 += l2 ? t3.duration : 0) || t3.duration;
                    }
                    var s2 = t3.fps ? 1e3 / t3.fps : 0, c2 = Math.max(0, a2);
                    c2 < n2 - s2 && (t3.offset = c2, n2 = c2, t3._apply(c2));
                    var h2 = t3.iterations > 0 && -1 === t3.fill && a2 >= t3.maxFiniteDuration;
                    (a2 <= 0 || t3.offset < a2 || h2) && t3.stop(), t3._id = (void 0).requestAnimationFrame(e2);
                  }
                });
              }
            },
            {
              key: "_start",
              value: function() {
                var t3 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r2 = -1 / 0, e2 = null, i2 = {};
                this._running = true;
                var o2 = function o3(u2) {
                  null == e2 && (e2 = u2);
                  var a2 = Math.round((u2 - e2 + n2) * t3.speed), l2 = t3.fps ? 1e3 / t3.fps : 0;
                  if (a2 > r2 + l2 && !t3._rollingBack && (t3.offset = a2, r2 = a2, t3._apply(a2, i2) === t3._animations.length))
                    return void t3.pause(true);
                  t3._id = (void 0).requestAnimationFrame(o3);
                };
                this._id = (void 0).requestAnimationFrame(o2);
              }
            },
            {
              key: "_pause",
              value: function() {
                this._id && (void 0).cancelAnimationFrame(this._id), this._running = false;
              }
            },
            {
              key: "play",
              value: function() {
                if (!this._running)
                  return this._rollingBack ? this._rollback() : this._start(this.offset);
              }
            },
            {
              key: "stop",
              value: function() {
                this._pause(), this.offset = 0, this.rollbackStartOffset = 0, this._rollingBack = false, this._apply(0);
              }
            },
            {
              key: "reachedToEnd",
              value: function() {
                return this.iterations > 0 && this.offset >= this.iterations * this.duration;
              }
            },
            {
              key: "restart",
              value: function() {
                var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.stop(t3), this.play(t3);
              }
            },
            {
              key: "pause",
              value: function() {
                this._pause();
              }
            },
            {
              key: "reverse",
              value: function() {
                this.direction = -this.direction;
              }
            }
          ],
          [
            {
              key: "build",
              value: function(t3, r2) {
                return delete t3.animationSettings, t3.options = ut(t3.options, t3.root, "5c7f360c"), t3.animations.map(function(r3) {
                  var e2 = ut(r3.s, t3.root, "5c7f360c");
                  for (var i2 in delete r3.s, t3.animationSettings || (t3.animationSettings = n({}, e2)), e2)
                    e2.hasOwnProperty(i2) && (r3[i2] = e2[i2]);
                }), (t3 = (function(t4, n2) {
                  if (Y = n2, !t4 || !t4.root || !Array.isArray(t4.animations))
                    return null;
                  for (var r3 = (void 0).getElementsByTagName("svg"), e2 = false, i2 = 0; i2 < r3.length; i2++)
                    if (r3[i2].id === t4.root && !r3[i2].svgatorAnimation) {
                      (e2 = r3[i2]).svgatorAnimation = true;
                      break;
                    }
                  if (!e2) return null;
                  var o2 = t4.animations.map(function(t5) {
                    return rt(e2, t5);
                  }).filter(function(t5) {
                    return !!t5;
                  });
                  return o2.length ? {
                    element: e2,
                    animations: o2,
                    animationSettings: t4.animationSettings,
                    options: t4.options || void 0
                  } : null;
                })(t3, r2)) ? {
                  el: t3.element,
                  options: t3.options || {},
                  player: new this(
                    t3.animations,
                    t3.animationSettings,
                    t3.options
                  )
                } : null;
              }
            },
            {
              key: "push",
              value: function(t3) {
                return this.build(t3);
              }
            },
            {
              key: "init",
              value: function() {
                var t3 = this, n2 = (void 0).__SVGATOR_PLAYER__ && (void 0).__SVGATOR_PLAYER__["5c7f360c"];
                Array.isArray(n2) && n2.splice(0).forEach(function(n3) {
                  return t3.build(n3);
                });
              }
            }
          ]
        ), t2;
      })();
      function lt(t2) {
        return p(t2) + "";
      }
      function ft(t2) {
        var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return t2 && t2.length ? t2.map(lt).join(n2) : "";
      }
      function st(t2) {
        if (!t2) return "transparent";
        if (null == t2.a || t2.a >= 1) {
          var n2 = function(t3) {
            return 1 === (t3 = parseInt(t3).toString(16)).length ? "0" + t3 : t3;
          }, r2 = function(t3) {
            return t3.charAt(0) === t3.charAt(1);
          }, e2 = n2(t2.r), i2 = n2(t2.g), o2 = n2(t2.b);
          return r2(e2) && r2(i2) && r2(o2) && (e2 = e2.charAt(0), i2 = i2.charAt(0), o2 = o2.charAt(0)), "#" + e2 + i2 + o2;
        }
        return "rgba(" + t2.r + "," + t2.g + "," + t2.b + "," + t2.a + ")";
      }
      function ct(t2) {
        return t2 ? "url(#" + t2 + ")" : "none";
      }
      !(function() {
        for (var t2 = 0, n2 = ["ms", "moz", "webkit", "o"], r2 = 0; r2 < n2.length && !(void 0).requestAnimationFrame; ++r2)
          (void 0).requestAnimationFrame = (void 0)[n2[r2] + "RequestAnimationFrame"], (void 0).cancelAnimationFrame = (void 0)[n2[r2] + "CancelAnimationFrame"] || (void 0)[n2[r2] + "CancelRequestAnimationFrame"];
        (void 0).requestAnimationFrame || ((void 0).requestAnimationFrame = function(n3) {
          var r3 = Date.now(), e2 = Math.max(0, 16 - (r3 - t2)), i2 = (void 0).setTimeout(function() {
            n3(r3 + e2);
          }, e2);
          return t2 = r3 + e2, i2;
        }, (void 0).cancelAnimationFrame = (void 0).clearTimeout);
      })();
      var ht = {
        f: null,
        i: function(t2, n2, r2) {
          return 0 === t2 ? n2 : 1 === t2 ? r2 : { x: B(t2, n2.x, r2.x), y: B(t2, n2.y, r2.y) };
        },
        u: function(t2, n2) {
          return function(r2) {
            var e2 = n2(r2);
            t2.setAttribute("rx", lt(e2.x)), t2.setAttribute("ry", lt(e2.y));
          };
        }
      }, vt = {
        f: null,
        i: function(t2, n2, r2) {
          return 0 === t2 ? n2 : 1 === t2 ? r2 : {
            width: B(t2, n2.width, r2.width),
            height: B(t2, n2.height, r2.height)
          };
        },
        u: function(t2, n2) {
          return function(r2) {
            var e2 = n2(r2);
            t2.setAttribute("width", lt(e2.width)), t2.setAttribute("height", lt(e2.height));
          };
        }
      };
      var yt = {};
      function pt(t2) {
        var n2 = (/* @__PURE__ */ (function() {
          return {};
        })()).svg;
        if (!n2)
          return function(t3) {
            return null;
          };
        var e2 = (void 0).createElementNS(n2.namespaceURI, "path");
        e2.setAttributeNS(null, "d", t2), e2.setAttributeNS(null, "fill", "none"), e2.setAttributeNS(null, "stroke", "none"), n2.appendChild(e2);
        var i2 = e2.getTotalLength();
        return function(t3) {
          var n3 = e2.getPointAtLength(i2 * t3);
          return { x: n3.x, y: n3.y };
        };
      }
      function dt(t2) {
        return yt[t2] ? yt[t2] : yt[t2] = pt(t2);
      }
      function mt(t2, n2, r2, e2) {
        if (!t2 || !e2) return false;
        var i2 = ["M", t2.x, t2.y];
        if (n2 && r2 && (i2.push("C"), i2.push(n2.x), i2.push(n2.y), i2.push(r2.x), i2.push(r2.y)), n2 ? !r2 : r2) {
          var o2 = n2 || r2;
          i2.push("Q"), i2.push(o2.x), i2.push(o2.y);
        }
        return n2 || r2 || i2.push("L"), i2.push(e2.x), i2.push(e2.y), i2.join(" ");
      }
      function bt(t2, n2, r2, e2) {
        var i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o2 = mt(t2, n2, r2, e2), u2 = dt(o2);
        try {
          return u2(i2);
        } catch (t3) {
          return null;
        }
      }
      function wt(t2, n2, r2) {
        return t2 + (n2 - t2) * r2;
      }
      function xt(t2, n2, r2) {
        var e2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i2 = { x: wt(t2.x, n2.x, r2), y: wt(t2.y, n2.y, r2) };
        return e2 && (i2.a = At(t2, n2)), i2;
      }
      function At(t2, n2) {
        return Math.atan2(n2.y - t2.y, n2.x - t2.x);
      }
      function kt(t2, n2, r2, e2) {
        var i2 = 1 - e2;
        return i2 * i2 * t2 + 2 * i2 * e2 * n2 + e2 * e2 * r2;
      }
      function _t(t2, n2, r2, e2) {
        return 2 * (1 - e2) * (n2 - t2) + 2 * e2 * (r2 - n2);
      }
      function St(t2, n2, r2, e2) {
        var i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o2 = bt(t2, n2, null, r2, e2);
        return o2 || (o2 = { x: kt(t2.x, n2.x, r2.x, e2), y: kt(t2.y, n2.y, r2.y, e2) }), i2 && (o2.a = Ot(t2, n2, r2, e2)), o2;
      }
      function Ot(t2, n2, r2, e2) {
        return Math.atan2(_t(t2.y, n2.y, r2.y, e2), _t(t2.x, n2.x, r2.x, e2));
      }
      function jt(t2, n2, r2, e2, i2) {
        var o2 = i2 * i2;
        return i2 * o2 * (e2 - t2 + 3 * (n2 - r2)) + 3 * o2 * (t2 + r2 - 2 * n2) + 3 * i2 * (n2 - t2) + t2;
      }
      function Mt(t2, n2, r2, e2, i2) {
        var o2 = 1 - i2;
        return 3 * (o2 * o2 * (n2 - t2) + 2 * o2 * i2 * (r2 - n2) + i2 * i2 * (e2 - r2));
      }
      function Pt(t2, n2, r2, e2, i2) {
        var o2 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], u2 = bt(t2, n2, r2, e2, i2);
        return u2 || (u2 = {
          x: jt(t2.x, n2.x, r2.x, e2.x, i2),
          y: jt(t2.y, n2.y, r2.y, e2.y, i2)
        }), o2 && (u2.a = Et(t2, n2, r2, e2, i2)), u2;
      }
      function Et(t2, n2, r2, e2, i2) {
        return Math.atan2(Mt(t2.y, n2.y, r2.y, e2.y, i2), Mt(t2.x, n2.x, r2.x, e2.x, i2));
      }
      function It(t2, n2, r2) {
        var e2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Ft(n2)) {
          if (Nt(r2)) return St(n2, r2.start, r2, t2, e2);
        } else if (Ft(r2)) {
          if (n2.end) return St(n2, n2.end, r2, t2, e2);
        } else {
          if (n2.end)
            return r2.start ? Pt(n2, n2.end, r2.start, r2, t2, e2) : St(n2, n2.end, r2, t2, e2);
          if (r2.start) return St(n2, r2.start, r2, t2, e2);
        }
        return xt(n2, r2, t2, e2);
      }
      function Rt(t2, n2, r2) {
        var e2 = It(t2, n2, r2, true);
        return e2.a = (function(t3) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? t3 + Math.PI : t3;
        })(e2.a) / m, e2;
      }
      function Ft(t2) {
        return !t2.type || "corner" === t2.type;
      }
      function Nt(t2) {
        return null != t2.start && !Ft(t2);
      }
      var Tt = new N();
      var qt = { f: lt, i: q }, Bt = { f: lt, i: L };
      function Lt(t2, n2, r2) {
        return t2.map(function(t3) {
          return (function(t4, n3, r3) {
            var e2 = t4.v;
            if (!e2 || "g" !== e2.t || e2.s || !e2.v || !e2.r) return t4;
            var i2 = r3.getElementById(e2.r), o2 = i2 && i2.querySelectorAll("stop") || [];
            return e2.s = e2.v.map(function(t5, n4) {
              var r4 = o2[n4] && o2[n4].getAttribute("offset");
              return { c: t5, o: r4 = p(parseInt(r4) / 100) };
            }), delete e2.v, t4;
          })(t3, 0, r2);
        });
      }
      var Ct = {
        gt: "gradientTransform",
        c: { x: "cx", y: "cy" },
        rd: "r",
        f: { x: "x1", y: "y1" },
        to: { x: "x2", y: "y2" }
      };
      function Dt(t2, n2, e2, i2, o2, u2, a2, l2) {
        return Lt(t2, 0, l2), n2 = (function(t3, n3, r2) {
          for (var e3, i3, o3, u3 = t3.length - 1, a3 = {}, l3 = 0; l3 <= u3; l3++)
            (e3 = t3[l3]).e && (e3.e = n3(e3.e)), e3.v && "g" === (i3 = e3.v).t && i3.r && (o3 = r2.getElementById(i3.r)) && (a3[i3.r] = { e: o3, s: o3.querySelectorAll("stop") });
          return a3;
        })(t2, i2, l2), function(i3) {
          var o3 = e2(i3, t2, zt);
          if (!o3) return "none";
          if ("c" === o3.t) return st(o3.v);
          if ("g" === o3.t) {
            if (!n2[o3.r]) return ct(o3.r);
            var u3 = n2[o3.r];
            return (function(t3, n3) {
              for (var r2 = t3.s, e3 = r2.length; e3 < n3.length; e3++) {
                var i4 = r2[r2.length - 1].cloneNode();
                i4.id = Yt(i4.id), t3.e.appendChild(i4), r2 = t3.s = t3.e.querySelectorAll("stop");
              }
              for (var o4 = 0, u4 = r2.length, a3 = n3.length - 1; o4 < u4; o4++)
                r2[o4].setAttribute("stop-color", st(n3[Math.min(o4, a3)].c)), r2[o4].setAttribute("offset", n3[Math.min(o4, a3)].o);
            })(u3, o3.s), Object.keys(Ct).forEach(function(t3) {
              if (void 0 !== o3[t3])
                if ("object" !== r(Ct[t3])) {
                  var n3, e3 = "gt" === t3 ? (n3 = o3[t3], Array.isArray(n3) ? "matrix(" + n3.join(" ") + ")" : "") : o3[t3], i4 = Ct[t3];
                  u3.e.setAttribute(i4, e3);
                } else
                  Object.keys(Ct[t3]).forEach(function(n4) {
                    if (void 0 !== o3[t3][n4]) {
                      var r2 = o3[t3][n4], e4 = Ct[t3][n4];
                      u3.e.setAttribute(e4, r2);
                    }
                  });
            }), ct(o3.r);
          }
          return "none";
        };
      }
      function zt(t2, r2, e2) {
        if (0 === t2) return r2;
        if (1 === t2) return e2;
        if (r2 && e2) {
          var i2 = r2.t;
          if (i2 === e2.t)
            switch (r2.t) {
              case "c":
                return { t: i2, v: z(t2, r2.v, e2.v) };
              case "g":
                if (r2.r === e2.r) {
                  var o2 = { t: i2, s: Vt(t2, r2.s, e2.s), r: r2.r };
                  return r2.gt && e2.gt && (o2.gt = (function(t3, n2, r3) {
                    var e3 = n2.length;
                    if (e3 !== r3.length) return T(t3, n2, r3);
                    for (var i3 = new Array(e3), o3 = 0; o3 < e3; o3++)
                      i3[o3] = q(t3, n2[o3], r3[o3]);
                    return i3;
                  })(t2, r2.gt, e2.gt)), r2.c ? (o2.c = C(t2, r2.c, e2.c), o2.rd = B(t2, r2.rd, e2.rd)) : r2.f && (o2.f = C(t2, r2.f, e2.f), o2.to = C(t2, r2.to, e2.to)), o2;
                }
            }
          if ("c" === r2.t && "g" === e2.t || "c" === e2.t && "g" === r2.t) {
            var u2 = "c" === r2.t ? r2 : e2, a2 = "g" === r2.t ? n({}, r2) : n({}, e2), l2 = a2.s.map(function(t3) {
              return { c: u2.v, o: t3.o };
            });
            return a2.s = "c" === r2.t ? Vt(t2, l2, a2.s) : Vt(t2, a2.s, l2), a2;
          }
        }
        return T(t2, r2, e2);
      }
      function Vt(t2, n2, r2) {
        if (n2.length === r2.length)
          return n2.map(function(n3, e3) {
            return Gt(t2, n3, r2[e3]);
          });
        for (var e2 = Math.max(n2.length, r2.length), i2 = [], o2 = 0; o2 < e2; o2++) {
          var u2 = Gt(
            t2,
            n2[Math.min(o2, n2.length - 1)],
            r2[Math.min(o2, r2.length - 1)]
          );
          i2.push(u2);
        }
        return i2;
      }
      function Gt(t2, n2, r2) {
        return { o: L(t2, n2.o, r2.o || 0), c: z(t2, n2.c, r2.c || {}) };
      }
      function Yt(t2) {
        return t2.replace(/-fill-([0-9]+)$/, function(t3, n2) {
          return "-fill-" + (+n2 + 1);
        });
      }
      var $t = {
        fill: Dt,
        "fill-opacity": Bt,
        stroke: Dt,
        "stroke-opacity": Bt,
        "stroke-width": qt,
        "stroke-dashoffset": { f: lt, i: q },
        "stroke-dasharray": {
          f: function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            return t2 && t2.length > 0 && (t2 = t2.map(function(t3) {
              return p(t3, 4);
            })), ft(t2, n2);
          },
          i: function(t2, n2, r2) {
            var e2, i2, o2, u2 = n2.length, a2 = r2.length;
            if (u2 !== a2)
              if (0 === u2) n2 = V(u2 = a2, 0);
              else if (0 === a2) a2 = u2, r2 = V(u2, 0);
              else {
                var l2 = (o2 = (e2 = u2) * (i2 = a2) / (function(t3, n3) {
                  for (var r3; n3; ) r3 = n3, n3 = t3 % n3, t3 = r3;
                  return t3 || 1;
                })(e2, i2)) < 0 ? -o2 : o2;
                n2 = G(n2, Math.floor(l2 / u2)), r2 = G(r2, Math.floor(l2 / a2)), u2 = a2 = l2;
              }
            for (var f2 = [], s2 = 0; s2 < u2; s2++) f2.push(p(B(t2, n2[s2], r2[s2])));
            return f2;
          }
        },
        opacity: Bt,
        transform: function(t2, n2, e2, i2) {
          if (!(t2 = (function(t3, n3) {
            if (!t3 || "object" !== r(t3)) return null;
            var e3 = false;
            for (var i3 in t3)
              t3.hasOwnProperty(i3) && (t3[i3] && t3[i3].length ? (t3[i3].forEach(function(t4) {
                t4.e && (t4.e = n3(t4.e));
              }), e3 = true) : delete t3[i3]);
            return e3 ? t3 : null;
          })(t2, i2)))
            return null;
          var o2 = function(r2, i3, o3) {
            var u2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return t2[r2] ? e2(i3, t2[r2], o3) : n2 && n2[r2] ? n2[r2] : u2;
          };
          return n2 && n2.a && t2.o ? function(n3) {
            var r2 = e2(n3, t2.o, Rt);
            return Tt.recomposeSelf(
              r2,
              o2("r", n3, q, 0) + r2.a,
              o2("k", n3, C),
              o2("s", n3, C),
              o2("t", n3, C)
            ).toString();
          } : function(t3) {
            return Tt.recomposeSelf(
              o2("o", t3, It, null),
              o2("r", t3, q, 0),
              o2("k", t3, C),
              o2("s", t3, C),
              o2("t", t3, C)
            ).toString();
          };
        },
        r: qt,
        "#size": vt,
        "#radius": ht,
        _: function(t2, n2) {
          if (Array.isArray(t2))
            for (var r2 = 0; r2 < t2.length; r2++) this[t2[r2]] = n2;
          else this[t2] = n2;
        }
      }, Ut = (function(t2) {
        !(function(t3, n3) {
          if ("function" != typeof n3 && null !== n3)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          t3.prototype = Object.create(n3 && n3.prototype, {
            constructor: { value: t3, writable: true, configurable: true }
          }), n3 && l(t3, n3);
        })(u2, t2);
        var n2, r2, i2 = (n2 = u2, r2 = f(), function() {
          var t3, e2 = a(n2);
          if (r2) {
            var i3 = a(this).constructor;
            t3 = Reflect.construct(e2, arguments, i3);
          } else t3 = e2.apply(this, arguments);
          return c(this, t3);
        });
        function u2() {
          return e(this, u2), i2.apply(this, arguments);
        }
        return o(u2, null, [
          {
            key: "build",
            value: function(t3) {
              var n3 = h(a(u2), "build", this).call(this, t3, $t);
              if (!n3) return null;
              n3.el, n3.options, (function(t4, n4, r3) {
                t4.play();
              })(n3.player);
            }
          }
        ]), u2;
      })(at);
      return Ut.init(), Ut;
    });
    (function(s, i, o, w, a, b) {
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      "5c7f360c",
      {
        root: "eC1jMSqtOkE1",
        animations: [
          {
            elements: {
              eC1jMSqtOkE7: {
                transform: {
                  data: { r: -9.874517, s: { x: 0.875586, y: 0.866033 } },
                  keys: {
                    o: [
                      {
                        t: 100,
                        v: { x: 182.570139, y: 255.335734, type: "corner" },
                        e: [0.42, 0, 0.58, 1]
                      },
                      {
                        t: 2300,
                        v: { x: 182.570139, y: 229.709968, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 0, v: 0 },
                  { t: 800, v: 1, e: [0.42, 0, 0.58, 1] },
                  { t: 1200, v: 1, e: [0.42, 0, 0.58, 1] },
                  { t: 1400, v: 1 },
                  { t: 1800, v: 0 }
                ]
              },
              eC1jMSqtOkE8: {
                transform: {
                  data: { r: -9.874517, s: { x: 0.451201, y: 0.446282 } },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 219.259859, y: 282.931165, type: "corner" },
                        e: [0.42, 0, 0.58, 1]
                      },
                      {
                        t: 2300,
                        v: { x: 219.259858, y: 240, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 0, v: 0 },
                  { t: 1e3, v: 1, e: [0.42, 0, 0.58, 1] },
                  { t: 1800, v: 0 },
                  { t: 2300, v: 0 }
                ]
              },
              eC1jMSqtOkE9: {
                transform: {
                  data: { r: -9.874517, s: { x: 0.610868, y: 0.604203 } },
                  keys: {
                    o: [
                      {
                        t: 200,
                        v: { x: 263.047831, y: 278.385463, type: "corner" },
                        e: [0.42, 0, 0.58, 1]
                      },
                      {
                        t: 2300,
                        v: { x: 262.260299, y: 230, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 0, v: 0 },
                  { t: 1500, v: 1, e: [0.42, 0, 0.58, 1] },
                  { t: 1800, v: 1, e: [0.42, 0, 0.58, 1] },
                  { t: 2300, v: 0 }
                ]
              },
              eC1jMSqtOkE16: {
                transform: {
                  keys: {
                    o: [
                      {
                        t: 1400,
                        v: { x: 209.03496, y: 284.82981, type: "corner" }
                      },
                      {
                        t: 3e3,
                        v: { x: 209.034964, y: 220, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 1500, v: 0 },
                  { t: 2100, v: 1 },
                  { t: 2700, v: 0 }
                ]
              },
              eC1jMSqtOkE35: {
                transform: {
                  data: { t: { x: -4.951389, y: -4.951389 } },
                  keys: {
                    o: [
                      {
                        t: 1e3,
                        v: { x: 414.411398, y: 261.710793, type: "corner" }
                      },
                      {
                        t: 2200,
                        v: { x: 414.411398, y: 160, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 1100, v: 0 },
                  { t: 1500, v: 1 },
                  { t: 1900, v: 0 }
                ]
              },
              eC1jMSqtOkE36: {
                transform: {
                  data: { t: { x: -4.951389, y: -4.951389 } },
                  keys: {
                    o: [
                      {
                        t: 800,
                        v: { x: 424.314178, y: 215.322926, type: "corner" }
                      },
                      {
                        t: 2900,
                        v: { x: 424.314178, y: 160, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 900, v: 0 },
                  { t: 1200, v: 1 },
                  { t: 2100, v: 0.78 },
                  { t: 2800, v: 0 }
                ]
              },
              eC1jMSqtOkE37: {
                transform: {
                  data: { t: { x: -4.951389, y: -4.951389 } },
                  keys: {
                    o: [
                      {
                        t: 100,
                        v: { x: 414.411398, y: 235.048611, type: "corner" }
                      },
                      {
                        t: 2500,
                        v: { x: 414.411398, y: 207.302486, type: "corner" }
                      },
                      {
                        t: 2600,
                        v: { x: 414.411398, y: 177.336671, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 200, v: 0 },
                  { t: 600, v: 1 },
                  { t: 1900, v: 0 }
                ]
              },
              eC1jMSqtOkE38: {
                transform: {
                  data: { t: { x: -4.951389, y: -4.951389 } },
                  keys: {
                    o: [
                      {
                        t: 400,
                        v: { x: 424.324394, y: 256.213682, type: "corner" }
                      },
                      {
                        t: 2400,
                        v: { x: 424.324394, y: 180.744222, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 500, v: 0 },
                  { t: 800, v: 1 },
                  { t: 2100, v: 0 }
                ]
              },
              eC1jMSqtOkE39: {
                transform: {
                  data: { t: { x: -4.951389, y: -4.951389 } },
                  keys: {
                    o: [
                      {
                        t: 500,
                        v: { x: 414.411398, y: 279.553766, type: "corner" }
                      },
                      {
                        t: 1800,
                        v: { x: 414.411398, y: 200.754765, type: "corner" }
                      }
                    ]
                  }
                },
                opacity: [
                  { t: 600, v: 0 },
                  { t: 800, v: 1 },
                  { t: 1800, v: 0 }
                ]
              },
              eC1jMSqtOkE40: {
                transform: {
                  data: { t: { x: 14e-6, y: -1e-6 } },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: {
                          x: 152.633458,
                          y: 195.766731,
                          type: "cusp",
                          end: { x: 147.623456, y: 178.19889 }
                        }
                      },
                      {
                        t: 1400,
                        v: {
                          x: 152.633464,
                          y: 195.766731,
                          type: "cusp",
                          start: { x: 136.640324, y: 205.68339 },
                          end: { x: 164.989784, y: 170.750137 }
                        },
                        e: [0.42, 0, 0.58, 1]
                      },
                      {
                        t: 3e3,
                        v: {
                          x: 152.26410148148148,
                          y: 157.5301096666667,
                          a: -102.65572113109383
                        }
                      }
                    ],
                    s: [
                      {
                        t: 900,
                        v: { x: 0.335341, y: 0.335341 },
                        e: [0.42, 0, 0.58, 1]
                      },
                      { t: 1700, v: { x: 0.600391, y: 0.600391 } },
                      { t: 3e3, v: { x: 1.384784, y: 1.384784 } }
                    ]
                  }
                },
                opacity: [
                  { t: 1e3, v: 0 },
                  { t: 1500, v: 0.8 },
                  { t: 3e3, v: 0 }
                ]
              },
              eC1jMSqtOkE41: {
                transform: {
                  keys: {
                    o: [
                      {
                        t: 1e3,
                        v: {
                          x: 205.448562,
                          y: 168.077279,
                          type: "cusp",
                          end: { x: 230.58545, y: 147.993189 }
                        }
                      },
                      {
                        t: 2900,
                        v: {
                          x: 220.14473,
                          y: 88.204448,
                          type: "cusp",
                          start: { x: 202.39208, y: 111.154595 }
                        }
                      }
                    ],
                    s: [
                      { t: 800, v: { x: 0.5, y: 0.51 }, e: [0, 0, 0.58, 1] },
                      {
                        t: 1400,
                        v: { x: 0.404159, y: 0.412991 },
                        e: [0, 0, 0.58, 1]
                      },
                      { t: 2700, v: { x: 0.499513, y: 0.510426 } }
                    ]
                  }
                },
                opacity: [
                  { t: 400, v: 0, e: [0, 0, 0.58, 1] },
                  { t: 900, v: 0.87, e: [0, 0, 0.58, 1] },
                  { t: 2800, v: 0 }
                ]
              },
              eC1jMSqtOkE42: {
                transform: {
                  keys: {
                    o: [
                      {
                        t: 100,
                        v: {
                          x: 159.642691,
                          y: 148.999163,
                          type: "cusp",
                          end: { x: 164.316782, y: 143.703862 }
                        },
                        e: [0.42, 0, 0.3, 0.5]
                      },
                      {
                        t: 3e3,
                        v: {
                          x: 159.642691,
                          y: 88.204448,
                          type: "cusp",
                          start: { x: 153.102827, y: 90.075227 }
                        }
                      }
                    ],
                    s: [
                      { t: 0, v: { x: 0.6576, y: 0.63466 } },
                      { t: 3e3, v: { x: 1.691968, y: 1.632938 } }
                    ]
                  }
                },
                opacity: [
                  { t: 400, v: 0 },
                  { t: 1200, v: 1 },
                  { t: 3e3, v: 0 }
                ]
              }
            },
            s: "MPDA1MzljNDNUODU5NjCkzQzgyOTVWOGE5MDhGmQTQzNWI1NDUxNTE1RMTRkNDM4NUo4YTkzOGDY4NDk1OGE5MDhmNDWM1YjUyNGQ0MzhhOTUE4NjkzODI5NThhOTA4PZk85NDQzNWI1MTRkNQDM4N0Y4YUU4ZDhkNDBM1YjUyNGQ0MzgyOGQY5NTg2OTM4ZjgyOTU4JNjQzNWI4NzgyOGQ5NXDg2NGQ0Mzk0RzkxODDY4Njg1NDM1YjUyOWUW/"
          }
        ],
        options: "MYDAxMDg4MmY4MDgxNmYVKN2Y4MTJmTTQ3MmYN3OTdjNmU3MTJmVThhO"
      },
      "__SVGATOR_PLAYER__",
      void 0
    );
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "eC1jMSqtOkE1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 640 480",
    "shape-rendering": "geometricPrecision",
    "text-rendering": "geometricPrecision"
  }, _attrs))}><g transform="translate(30.226507 103.884326)"><path d="M152.179443,299.748365c-16.52447,0-26.014428-14.486914-19.796934-29.751416c19.512407-47.904698,64.536205-131.869071,67.558767-131.392857v-38.209464h49.284674v38.763227L318,269.996949c4.891388,14.167556,0,29.751416-19.796934,29.751416-99.554615,0-75.310393,0-146.023623,0" transform="translate(.238892 0.000003)" fill="#f1f1f1" stroke="rgba(63,87,135,0)" stroke-width="1.28"></path><path d="M235.63015,100.394631v38.763227L318,289.13256l-10.317363-38.175917-58.217795-112.352551v-38.209464l-13.834692.000003Z" transform="translate(0 0.000003)" fill="#dadada" stroke="rgba(63,87,135,0)" stroke-width="1.28"></path><g><path d="M152.179443,299.748365c-16.52447,0-26.87152-14.864758-19.796934-29.751416c19.965898-42.013126,25.150731-54.805632,25.604868-55.259769c0,0,14.548955,14.267564,33.215658,0s41.716184,20.824582,59.899232,4.470472s37.206945-4.470472,37.206945-4.470472L318,269.996949c4.891388,14.167556,0,29.751416-19.796934,29.751416-99.554615,0-75.310393,0-146.023623,0" transform="translate(.155032 0.000003)" fill="#599071" stroke="rgba(63,87,135,0)" stroke-width="1.28"></path><ellipse id="eC1jMSqtOkE7" rx="10.290022" ry="10.290022" transform="matrix(.862615-.150155 0.148517 0.853203 182.570139 255.335734)" opacity="0" fill="#a9dabf" stroke-width="0"></ellipse><ellipse id="eC1jMSqtOkE8" rx="10.290022" ry="10.290022" transform="matrix(.444517-.077377 0.076533 0.439671 219.259859 282.931165)" opacity="0" fill="#a9dabf" stroke-width="0"></ellipse><ellipse id="eC1jMSqtOkE9" rx="10.290022" ry="10.290022" transform="matrix(.601818-.104758 0.103615 0.595252 263.047831 278.385463)" opacity="0" fill="#a9dabf" stroke-width="0"></ellipse></g><g transform="translate(0 0.000001)"><rect width="90.89836" height="10.87301" rx="0" ry="0" transform="matrix(.93568 0 0 1 182.570139 109.636636)" fill="#d6af98" stroke-width="0"></rect><rect width="90.89836" height="10.87301" rx="0" ry="0" transform="matrix(.351951 0 0 1 235.630148 109.636636)" fill="#c19a83" stroke-width="0"></rect></g><g transform="matrix(.433676 0 0 2.38129 127.477285-186.573779)"><rect width="90.89836" height="10.87301" rx="0" ry="0" transform="matrix(.93568 0 0 1 182.570139 109.636636)" fill="#d6af98" stroke-width="0"></rect><rect width="90.89836" height="10.87301" rx="0" ry="0" transform="matrix(.351951 0 0 1 235.630148 109.636636)" fill="#c19a83" stroke-width="0"></rect></g><ellipse id="eC1jMSqtOkE16" rx="7.532378" ry="7.532378" transform="translate(209.03496 284.82981)" opacity="0" fill="#91bfa6" stroke-width="0"></ellipse></g><g transform="matrix(1.285335 0 0 1.285335-63.424263 17.602344)"><path d="M462.60086,157.00194h27.59943v39.53012c22.33836,5.9666,39.439835,26.343057,39.496221,50.56213.091557,39.32556-24.134351,52.33057-53.035721,52.33057s-52.33057-23.4292-52.33057-52.33057c0-24.03067,16.19765-44.27817,38.27065-50.42022l-.00001-39.67203Z" transform="matrix(.804744 0 0 0.816287-53.067718 55.331844)" fill="#f1f1f1" stroke-width="0"></path><g transform="matrix(.267836 0 0 1 270.28828 79.690458)"><rect width="88.994457" height="10.87301" rx="0" ry="0" transform="matrix(.938251 0 0 1 182.453099 109.636636)" fill="#d6af98" stroke-width="0"></rect><rect width="90.496713" height="10.87301" rx="0" ry="0" transform="matrix(.25702 0 0 1 242.692772 109.636636)" fill="#c19a83" stroke-width="0"></rect></g><g transform="matrix(.462932 0 0 1 226.547237 63.801753)"><rect width="88.994457" height="5.466461" rx="0" ry="0" transform="matrix(.938251 0 0 1 182.453099 115.043185)" fill="#d6af98" stroke-width="0"></rect><rect width="68.456752" height="5.466461" rx="0" ry="0" transform="matrix(.25702 0 0 1 248.357483 115.043185)" fill="#c19a83" stroke-width="0"></rect></g><path d="M437.025864,239.200268c9.804466,6.432611,13.361027,16.771023,26.788819,2.917605s31.801978,13.093285,39.601997.225859s26.279831,4.750458,26.279831,4.750458c2.277172,17.227508-8.821133,51.636269-53.035721,52.33057s-52.330571-36.447268-52.33057-52.33057c0,0,.756655-8.662211.756655-8.662211s2.134523-5.664322,11.938989.768289Z" transform="matrix(.804744 0 0 0.816287-53.252084 55.700577)" fill="#9BCDE8" stroke-width="0"></path><path d="M335.286258,184.311397v32.155093c0,0,28.477589,6.009094,28.477589,40.866748s-33.186745,42.415129-33.186745,42.415129c10.974076.000001,42.473701-3.421491,42.444416-40.415128s-31.47034-42.981771-31.47034-42.981771v-32.040072l-6.26492.000001Z" transform="translate(.070167 0.000001)" opacity="0.11" fill="#171616" stroke="rgba(63,87,135,0)" stroke-width="1.28"></path></g><g transform="matrix(.901034 0 0 0.901027 65.670472 133.393405)"><path d="M0,0h53.102888c0,0,.000051,149.116756.000006,223.898335c0,34.059659-52.297532,34.069181-52.297532,0C0.805362,160.712868,0,0,0,0Z" transform="matrix(1 0 0 1.003006 399.851769 49.727128)" fill="#f1f1f1" stroke-width="0"></path><path d="M0,104.511416l53.102895.000003c0,0,.000044,44.605337-.000001,119.386916c0,34.059659-52.297532,34.069181-52.297532,0C0.805362,160.712868,0,104.511416,0,104.511416Z" transform="matrix(1 0 0 1.002717 399.851769 49.763202)" fill="#ef8181" stroke-width="0"></path><g transform="translate(201.307185-70.746414)"><rect width="45.480696" height="17.720584" rx="0" ry="0" transform="matrix(.93568 0 0 1 192.310717 102.789062)" fill="#d6af98" stroke-width="0"></rect><rect width="65.432174" height="17.720584" rx="0" ry="0" transform="matrix(.351951 0 0 1 234.866095 102.789062)" fill="#c19a83" stroke-width="0"></rect></g><path d="M36.347782,0h16.755106c0,0,.000024,151.357262.00001,223.833794c0,30.613443-34.71228,25.344437-33.307714,24.52069c0,0,16.552598.149334,16.552598-35.969199c0-19.248363,0-20.65886,0-20.65886s0-191.726425,0-191.726425Z" transform="matrix(1 0 0 1.003006 399.851769 49.76323)" opacity="0.13" fill="#131313" stroke-width="0"></path><g transform="translate(7.040425-11.394143)"><rect id="eC1jMSqtOkE35" width="9.902778" height="9.902778" rx="0" ry="0" transform="translate(409.460009 256.759404)" opacity="0" fill="#D67474" stroke-width="0"></rect><rect id="eC1jMSqtOkE36" width="9.902778" height="9.902778" rx="0" ry="0" transform="translate(419.362789 210.371537)" opacity="0" fill="#D67474" stroke-width="0"></rect><rect id="eC1jMSqtOkE37" width="9.902778" height="9.902778" rx="0" ry="0" transform="translate(409.460009 230.097222)" opacity="0" fill="#D67474" stroke-width="0"></rect><rect id="eC1jMSqtOkE38" width="9.902778" height="9.902778" rx="0" ry="0" transform="translate(419.373005 251.262293)" opacity="0" fill="#D67474" stroke-width="0"></rect><rect id="eC1jMSqtOkE39" width="9.902778" height="9.902778" rx="0" ry="0" transform="translate(409.460009 274.602377)" opacity="0" fill="#D67474" stroke-width="0"></rect></g></g><ellipse id="eC1jMSqtOkE40" rx="18" ry="18" transform="matrix(.335341 0 0 0.335341 152.633463 195.766731)" opacity="0" fill="#d6af98" stroke-width="0"></ellipse><ellipse id="eC1jMSqtOkE41" rx="20.901792" ry="20.901792" transform="matrix(.5 0 0 0.51 205.448562 168.077279)" opacity="0" fill="#9BCDE8" stroke-width="0"></ellipse><ellipse id="eC1jMSqtOkE42" rx="15" ry="15" transform="matrix(.6576 0 0 0.63466 159.642691 148.999163)" opacity="0" fill="#599071" stroke-width="0"></ellipse><path d="M236.880079,162.264696v-66.017959c33.035224,0,207.155015-.565504,207.155015-.565504s-.000002,20.330877-.000002,50.89538" transform="matrix(.96562 0 0 1 45.028853 0)" fill="none" stroke="#EE7675" stroke-width="8" stroke-linecap="square" stroke-linejoin="round"></path><path d="M236.880079,162.264696v-33.800699c33.035224,0,102.343205,0,138.532195,0c0,0-.000001,71.317177-.000001,101.881681" transform="matrix(.96562 0 0 1 10.525308 0)" fill="none" stroke="#599071" stroke-width="8" stroke-linecap="square" stroke-linejoin="round"></path><path d="M236.948987,162.83796l-.068908-119.191081c33.035224,0,46.53333,0,82.72232,0c0,0-.000001,4.857511-.000001,35.422015" transform="matrix(.96562 0 0 1 118.061702 67.507718)" fill="none" stroke="#9BCDE8" stroke-width="8" stroke-linecap="square" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const path = "/index";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data: page } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("index-page", async () => {
      try {
        return await queryContent("index").findOne();
      } catch {
        return null;
      }
    })), __temp = await __temp, __restore(), __temp);
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "articles",
      () => queryContent().find()
    )), __temp = await __temp, __restore(), __temp);
    const filteredArticles = computed(() => {
      var _a;
      return ((_a = articles.value) == null ? void 0 : _a.filter(
        (article) => article.title && article.title !== "Modern Atomic Design"
      )) || [];
    });
    const contentDirectory = config.public.githubContentDirectory;
    const editLink = computed(() => `${contentDirectory}${path}.md`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$2;
      const _component_ContentRenderer = _sfc_main$3;
      _push(`<article${ssrRenderAttrs(_attrs)}><div class="flex justify-between flex-wrap-reverse"><h1 class="flex flex-row items-center uppercase max-h-64 font-mono"> Modern<br> Atomic<br> Design `);
      _push(ssrRenderComponent(Logo, { class: "w-56 lg:w-96 h-auto" }, null, _parent));
      _push(`</h1><div class="flex gap-4 mt-8 mr-4"><a href="https://github.com/modern-atomic-design/modern-atomic-design" target="_blank" class="h-12 w-12 p-3 hover:bg-gray-100 rounded-full bg-gray-50"><img class="h-6 w-6" style="${ssrRenderStyle({ "margin": "0 !important" })}"${ssrRenderAttr("src", _imports_0)} width="32" height="32" alt="github"></a></div></div><h3>Articles</h3><div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(filteredArticles), (article) => {
        _push(ssrRenderComponent(_component_Card, {
          class: "h-16 sm:h-24",
          key: article.title,
          link: article._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(article.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(article.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(page)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", unref(editLink))} target="_blank" class="text-gray-500 underline text-sm h-4">Edit this page on Github<img${ssrRenderAttr("src", _imports_0$1)} alt="link" class="w-4 h-4 inline-block ml-2"></a></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BuXcg5Ug.mjs.map
