import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'pinia';

const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4" }, _attrs))} data-v-592c725a><h1 class="text-4xl font-bold mb-4" data-v-592c725a>Our Services</h1><p class="text-lg max-w-2xl text-center" data-v-592c725a> We offer a range of services designed to enhance your productivity and streamline your task management. Our goal is to provide you with the tools you need to succeed in your daily endeavors. </p><ul class="list-disc list-inside mt-6 text-lg max-w-2xl text-left" data-v-592c725a><li data-v-592c725a>Task Management: Easily add, edit, and delete tasks.</li><li data-v-592c725a> Priority Setting: Organize tasks by priority to focus on what matters most. </li><li data-v-592c725a> Deadline Tracking: Set due dates to keep your projects on schedule. </li><li data-v-592c725a> Category Tagging: Classify tasks into categories for better organization. </li><li data-v-592c725a> Dark Mode: A visually comfortable experience for night-time users. </li></ul><div class="mt-6" data-v-592c725a><a href="/" class="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300" data-v-592c725a> Back to Home </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-592c725a"]]);

export { services as default };
//# sourceMappingURL=services-XjuxelBp.mjs.map
