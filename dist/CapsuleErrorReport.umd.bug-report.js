((typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] || []).push([[4],{

/***/ "16fe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/capsule-bug-report.1f2d466d.png";

/***/ }),

/***/ "9728":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"35d0dc38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BugReport.vue?vue&type=template&id=31feb469&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"bug-report mt-5"},[_c('animate-css',{attrs:{"name":"fade","delay":".6666s"}},[(_vm.mounted)?_c('notepad',{staticClass:"mt-5",scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('div',{staticClass:"d-flex justify-content-center"},[_c('div',{staticClass:"text-center"},[_c('img',{staticClass:"img-fluid img-header",attrs:{"src":__webpack_require__("16fe")}})])])]},proxy:true}],null,false,3818373381)},[_c('p',[_vm._v("We found some errors in "),_c('strong',[_vm._v(_vm._s(_vm.filename))]),_vm._v(". The following errors need to be fixed before we can send your email:")]),_c('br'),_c('ol',_vm._l((_vm.errors),function(error,i){return _c('li',{key:i},[_c('router-link',{attrs:{"to":{name: 'fix'}},domProps:{"innerHTML":_vm._s(_vm.format(error))}})],1)}),0),_c('br'),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(" Additional Resources ")]),_c('ol',[_c('li',[_c('a',{attrs:{"href":"http://thecapsule.email/docs/codes"}},[_vm._v("Error Code Glossary")])]),_c('li',[_c('router-link',{attrs:{"to":{name: 'contact'}}},[_vm._v(" Contact Support ")])],1)])]):_vm._e()],1),_c('animate-css',{attrs:{"name":"fade","delay":".85s"}},[(_vm.mounted)?_c('div',{staticClass:"m-4 text-center"},[_c('btn',{attrs:{"to":{name: 'fix'},"size":"xl"}},[_c('font-awesome-icon',{attrs:{"icon":"tools"}}),_vm._v(" Fix Errors ")],1)],1):_vm._e()])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/BugReport.vue?vue&type=template&id=31feb469&

// EXTERNAL MODULE: ./node_modules/@vue-interface/btn/index.js + 5 modules
var btn = __webpack_require__("53e3");

// EXTERNAL MODULE: ./node_modules/@vue-interface/animate-css/index.js + 5 modules
var animate_css = __webpack_require__("d6e7");

// EXTERNAL MODULE: ./node_modules/@vue-interface/date-filter/index.js
var date_filter = __webpack_require__("b36f");

// EXTERNAL MODULE: ./node_modules/capsule-lint/index.js + 1 modules
var capsule_lint = __webpack_require__("3699");

// EXTERNAL MODULE: ./node_modules/vue-notepad/src/index.js + 7 modules
var src = __webpack_require__("dcd0");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("c074");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/BugReport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








index_es["c" /* library */].add(free_solid_svg_icons_index_es["n" /* faTools */]);
/* harmony default export */ var BugReportvue_type_script_lang_js_ = ({
  components: {
    AnimateCss: animate_css["a" /* default */],
    Btn: btn["a" /* default */],
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    Notepad: src["a" /* default */]
  },
  filters: {
    date: date_filter["a" /* default */]
  },
  props: {
    content: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      required: true
    },
    signedUrl: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      errors: null,
      mounted: false
    };
  },

  mounted() {
    this.errors = Object(capsule_lint["a" /* lint */])(this.content);
    this.mounted = true;
  },

  methods: {
    escapeHtml(unsafe) {
      return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    },

    format(error) {
      return `${error.line},${error.col} :: (${error.rule.id}) ${this.escapeHtml(error.message)}`;
    }

  }
});
// CONCATENATED MODULE: ./src/Components/BugReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_BugReportvue_type_script_lang_js_ = (BugReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/BugReport.vue?vue&type=style&index=0&lang=scss&
var BugReportvue_type_style_index_0_lang_scss_ = __webpack_require__("ee68");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/BugReport.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Components_BugReportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BugReport = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e631":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BugReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e631");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BugReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BugReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=CapsuleErrorReport.umd.bug-report.js.map