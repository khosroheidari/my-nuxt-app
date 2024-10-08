import { _ as __nuxt_component_0 } from "./nuxt-link-DsjSfTWS.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "pinia";
import "destr";
import "klona";
const firebaseConfig = {
  apiKey: "AIzaSyDgtv7bEyCFjWij7yDSJDKNHMVzJAg9vrI",
  authDomain: "taskdoing-3cec7.firebaseapp.com",
  projectId: "taskdoing-3cec7",
  storageBucket: "taskdoing-3cec7.appspot.com",
  messagingSenderId: "242812125632",
  appId: "1:242812125632:web:9b287b2781c9897800c825"
};
const app = initializeApp(firebaseConfig);
getAuth(app);
const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    new GoogleAuthProvider();
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const success = ref("");
    const loading = ref(false);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4" }, _attrs))}><h1 class="text-4xl font-bold mb-4">Register</h1><form class="flex flex-col w-full max-w-md"><input type="email"${ssrRenderAttr("value", email.value)} placeholder="Email" class="p-2 mb-4 rounded-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white" aria-label="Email"><input type="password"${ssrRenderAttr("value", password.value)} placeholder="Password" class="p-2 mb-4 rounded-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white" aria-label="Password">`);
      if (error.value) {
        _push(`<span class="text-red-500 mb-2">${ssrInterpolate(error.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} <!-- Disable button while loading --> &gt; `);
      if (loading.value) {
        _push(`<span>Registering...</span>`);
      } else {
        _push(`<span>Register</span>`);
      }
      _push(`</button><button class="mt-2 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"> Sign in with Google </button>`);
      if (success.value) {
        _push(`<span class="text-green-500 mt-4">${ssrInterpolate(success.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><div class="mt-6">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to Home `);
          } else {
            return [
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=register-JSf7DPy_.js.map
