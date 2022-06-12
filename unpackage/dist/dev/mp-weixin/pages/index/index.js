"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "",
  setup() {
    return { title: "Hello" };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/project/mp-demo-clean/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
