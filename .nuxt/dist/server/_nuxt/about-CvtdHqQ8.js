import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "pinia";
import "destr";
import "klona";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4" }, _attrs))} data-v-248ece2d><h1 class="text-4xl font-bold mb-4" data-v-248ece2d>About Us</h1><p class="text-lg max-w-2xl text-center" data-v-248ece2d> Welcome to our To-Do App! We are dedicated to helping you manage your tasks efficiently and effectively. Our mission is to provide a user-friendly interface that enhances productivity and organization in your daily life. </p><p class="text-lg max-w-2xl text-center mt-4" data-v-248ece2d> This app is designed with simplicity in mind, allowing you to focus on what matters most—getting things done. Thank you for choosing our service! </p><div class="mt-6" data-v-248ece2d><a href="/" class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300" data-v-248ece2d> Back to Home </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-248ece2d"]]);
export {
  about as default
};
//# sourceMappingURL=about-CvtdHqQ8.js.map
