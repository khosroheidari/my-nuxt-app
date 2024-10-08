import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { u as useNuxtApp, _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    logUserOut() {
      this.user = null;
    },
    // Example of using auth in an action
    async login(email, password) {
      useNuxtApp();
    }
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const newTask = ref("");
    const tasks = ref([]);
    const error = ref("");
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4" }, _attrs))} data-v-c0a76dee><h1 class="text-4xl font-bold mb-8" data-v-c0a76dee>Welcome to Your To-Do App!</h1>`);
      if (user.value) {
        _push(`<div data-v-c0a76dee><form class="flex flex-col items-center mb-6" data-v-c0a76dee><input type="text"${ssrRenderAttr("value", newTask.value)} placeholder="Add a new task" class="p-2 rounded-l-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white mb-2" data-v-c0a76dee>`);
        if (error.value) {
          _push(`<span class="text-red-500 mb-2" data-v-c0a76dee>${ssrInterpolate(error.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit" class="bg-white text-blue-500 px-4 rounded-md hover:bg-gray-200 transition duration-300" data-v-c0a76dee> Add Task </button></form><ul class="w-full max-w-md" data-v-c0a76dee><!--[-->`);
        ssrRenderList(tasks.value, (task) => {
          _push(`<li class="bg-white text-blue-500 p-4 mb-2 rounded-lg shadow-md flex justify-between items-center transition-transform transform hover:scale-105" data-v-c0a76dee>${ssrInterpolate(task.title)} <button class="bg-red-500 text-white px-2 rounded hover:bg-red-600 transition duration-300" data-v-c0a76dee> Delete </button></li>`);
        });
        _push(`<!--]--></ul><button class="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300" data-v-c0a76dee> Sign Out </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-blue-500 clip-bottom" data-v-c0a76dee></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0a76dee"]]);

export { index as default };
//# sourceMappingURL=index-C9TnZkQ0.mjs.map
