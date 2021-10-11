((typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] || []).push([[7],{

/***/ "01f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "07d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"35d0dc38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Views/Editor.vue?vue&type=template&id=5adc553c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('capsule-editor',{ref:"editor",attrs:{"content":_vm.content,"disable-filename":"","filename":_vm.filename},scopedSlots:_vm._u([{key:"success",fn:function(ref){
var close = ref.close;
var isShowing = ref.isShowing;
return [_c('slide-deck',{attrs:{"active":_vm.active}},[_c('div',{key:0},[_c('div',{staticClass:"text-center position-relative"},[(!_vm.error && !_vm.activity)?_c('div',[_c('animate-css',{attrs:{"name":"zoom","left":""}},[(isShowing)?_c('img',{staticClass:"capsule-editor-modal-logo",attrs:{"src":__webpack_require__("8f33")}}):_vm._e()]),_c('h1',{staticClass:"font-weight-light mb-4"},[_vm._v(" Document Fixed! ")]),_c('h5',{staticClass:"font-weight-light mb-4 mx-5"},[_vm._v(" Do you want to automatically send it back to us or download it and manually email it as an attachment? ")]),_c('div',{staticClass:"mb-5"},[_c('btn',{staticClass:"mr-2",attrs:{"size":"lg","variant":"success"},on:{"click":_vm.onClickSend}},[_c('font-awesome-icon',{attrs:{"icon":"envelope"}}),_vm._v(" Send Now ")],1),_c('btn',{attrs:{"size":"lg","variant":"success","outline":""},on:{"click":_vm.onClickDownload}},[_c('font-awesome-icon',{attrs:{"icon":"download"}}),_vm._v(" Download ")],1)],1)],1):_vm._e(),_c('animate-css',{attrs:{"name":"fade","up":"","leave-active-class":"position-absolute w-100 h-100"}},[(_vm.activity)?_c('div',{staticClass:"my-5 py-5"},[_c('div',{staticClass:"my-5"},[_c('hourglass',{attrs:{"label":_vm.hourGlassLabel,"animate":""}})],1)]):(_vm.error)?_c('http-exception',{attrs:{"error":_vm.error}},[_c('div',{staticClass:"text-center"},[_c('btn',{staticClass:"mr-2",attrs:{"size":"lg"},on:{"click":_vm.onClickSend}},[_c('font-awesome-icon',{attrs:{"icon":"redo"}}),_vm._v(" Try Again ")],1),_c('btn',{attrs:{"size":"lg","variant":"secondary"},on:{"click":function($event){return _vm.onClickCancel(close)}}},[_c('font-awesome-icon',{attrs:{"icon":"times-circle"}}),_vm._v(" Cancel ")],1)],1)]):_vm._e()],1)],1)]),_c('div',{key:1},[_c('animate-css',{attrs:{"name":"fade","leave-active-class":"position-absolute w-100 h-100"}},[_c('div',{staticClass:"text-center position-relative my-5"},[_c('font-awesome-icon',{staticClass:"text-success",attrs:{"icon":"check-circle","size":"6x"}}),_c('h1',{staticClass:"font-weight-light mt-3 mb-0"},[_vm._v(" Thank You! ")]),_c('h5',{staticClass:"font-weight-light my-4 mx-5 px-1"},[_vm._v(" Thank you for your assistance in fixing these errors. We have received your document and will process it shortly. ")]),_c('btn',{attrs:{"size":"lg"},on:{"click":_vm.onClickClose}},[_c('font-awesome-icon',{attrs:{"icon":"window-close"}}),_vm._v(" Close Window ")],1)],1)])],1),(_vm.download)?_c('div',{key:2},[_c('div',{staticClass:"text-center position-relative my-5"},[_c('font-awesome-icon',{staticClass:"text-secondary",attrs:{"icon":['far', 'file-archive'],"size":"6x"}}),_c('h1',{staticClass:"font-weight-light mt-3 mb-0"},[_vm._v(" File Downloaded! ")]),_c('h4',{staticClass:"font-weight-light mt-3 mb-1"},[_vm._v(" "+_vm._s(_vm.download.zipname)+" ")]),_c('h5',{staticClass:"font-weight-light mb-4"},[_vm._v(" ("+_vm._s(_vm.download.size)+") ")]),_c('div',[_c('btn',{staticClass:"mr-2",attrs:{"size":"lg","variant":"success"},on:{"click":_vm.onClickDownloadAgain}},[_c('font-awesome-icon',{attrs:{"icon":"download"}}),_vm._v(" Download Again ")],1)],1)],1)]):_vm._e()])]}}]),model:{value:(_vm.editor),callback:function ($$v) {_vm.editor=$$v},expression:"editor"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/Editor.vue?vue&type=template&id=5adc553c&

// EXTERNAL MODULE: ./node_modules/@vue-interface/animate-css/index.js + 5 modules
var animate_css = __webpack_require__("d6e7");

// EXTERNAL MODULE: ./node_modules/@vue-interface/btn/index.js + 5 modules
var btn = __webpack_require__("53e3");

// EXTERNAL MODULE: ./node_modules/@vue-interface/slide-deck/index.js + 18 modules
var slide_deck = __webpack_require__("92a7");

// EXTERNAL MODULE: ./node_modules/vue-hourglass/src/index.js + 5 modules
var src = __webpack_require__("6610");

// EXTERNAL MODULE: ./src/Components/HttpException.vue + 4 modules
var HttpException = __webpack_require__("5eb8");

// CONCATENATED MODULE: ./src/Helpers/Functions/download.js
function download(blob, filename) {
  return new Promise((resolve, reject) => {
    if (!(blob instanceof Blob)) {
      blob = new Blob([blob], {
        type: 'text/html'
      });
    }

    const element = document.createElement('a');
    element.setAttribute('href', URL.createObjectURL(blob));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    resolve();
  });
}
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/crypto-js/md5.js
var md5 = __webpack_require__("72fe");
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./src/Helpers/Functions/revision.js


function revision(signedUrl, data = {}, options) {
  data.key = data.key || md5_default()(data.filename).toString();
  return new Promise((resolve, reject) => {
    axios_default.a.post(signedUrl, data, options).then(response => {
      resolve(response.data);
    }, e => {
      reject(e);
    });
  });
}
// CONCATENATED MODULE: ./src/Helpers/Functions/zip.js
function zip(contents, filename) {
  return new Promise((resolve, reject) => {
    __webpack_require__.e(/* import() */ 13).then(__webpack_require__.t.bind(null, "c4e3", 7)).then(module => {
      var zip = new module.default();
      zip.folder(filename.replace(/\.html$/, '')).file(filename, contents);
      zip.generateAsync({
        type: 'blob'
      }).then(resolve, reject);
    });
  });
}
// CONCATENATED MODULE: ./src/Helpers/Functions/index.js




// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__("b702");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("c074");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Views/Editor.vue?vue&type=script&lang=js&
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










index_es["c" /* library */].add(free_solid_svg_icons_index_es["b" /* faCheckCircle */], free_solid_svg_icons_index_es["d" /* faDownload */], free_solid_svg_icons_index_es["e" /* faEnvelope */], free_regular_svg_icons_index_es["b" /* faFileArchive */], free_solid_svg_icons_index_es["l" /* faRedo */], free_solid_svg_icons_index_es["m" /* faTimesCircle */], free_solid_svg_icons_index_es["o" /* faWindowClose */]);
/* harmony default export */ var Editorvue_type_script_lang_js_ = ({
  components: {
    AnimateCss: animate_css["a" /* default */],
    CapsuleEditor: () => Promise.all(/* import() | capsule-editor */[__webpack_require__.e(10), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "026f")),
    Btn: btn["a" /* default */],
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    Hourglass: src["a" /* default */],
    HttpException: HttpException["a" /* default */],
    SlideDeck: slide_deck["a" /* SlideDeck */]
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
      active: 0,
      activity: false,
      currentContent: this.content,
      download: null,
      editor: null,
      error: null
    };
  },

  watch: {
    editor({
      content
    }) {
      this.currentContent = content;
    }

  },
  methods: {
    formatBytes(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },

    onClickSend() {
      this.error = null;
      this.activity = true;
      this.hourGlassLabel = 'Sending...';
      setTimeout(() => {
        revision(this.signedUrl, {
          filename: this.currentFilename,
          revised_html: this.currentContent,
          original_html: this.originalContents
        }, this.httpRequestOptions).then(() => {
          this.active = 1;
          this.error = null;
          this.activity = false;
        }, e => {
          this.error = e;
          this.activity = false;
        });
      }, 750);
    },

    onClickCancel(close) {
      close();
      this.active = 0;
      this.error = null;
    },

    onClickDownloadAgain() {
      download(this.download.blob, this.download.zipname);
    },

    async onClickDownload() {
      this.hourGlassLabel = 'Generating...';
      this.activity = true;
      const blob = await zip(this.currentContent, this.filename);
      this.download = {
        blob,
        filename: this.filename,
        size: this.formatBytes(blob.size),
        zipname: this.filename.replace(/\.html/, '.zip')
      };
      setTimeout(() => {
        download(blob, this.download.zipname);
        this.active = 2;
        this.activity = false;
      }, 1000);
    },

    onClickClose() {
      window.close();
    }

  }
});
// CONCATENATED MODULE: ./src/Views/Editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var Views_Editorvue_type_script_lang_js_ = (Editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Views/Editor.vue?vue&type=style&index=0&lang=scss&
var Editorvue_type_style_index_0_lang_scss_ = __webpack_require__("0a44");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Views/Editor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Views_Editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Editor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0a44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26bd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "26bd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5eb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"35d0dc38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HttpException.vue?vue&type=template&id=cd66729c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"http-exception",class:{ fixed: _vm.fixed }},[_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center w-100 h-100"},[_c('div',{staticClass:"http-exception-content my-5"},[_c('div',{staticClass:"text-center mx-5 mb-3 p-4"},[_c('icon',{attrs:{"icon":"bomb","size":"6x"}})],1),_c('h1',{staticClass:"font-weight-light mb-4"},[_vm._v(" Something went wrong.... ")]),_c('alert',[_c('h4',{staticClass:"font-weight-light m-3"},[_vm._v(" "+_vm._s(_vm.error)+" ")]),_c('ul',{staticClass:"mt-3"},[_vm._l((_vm.error.response.data.errors),function(errors){return _vm._l((errors),function(row,i){return _c('li',{key:i},[_c('h5',[_vm._v(_vm._s(row))])])})})],2)]),_vm._t("default")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/HttpException.vue?vue&type=template&id=cd66729c&

// EXTERNAL MODULE: ./node_modules/@vue-interface/alert/index.js + 16 modules
var _vue_interface_alert = __webpack_require__("c3d5");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("c074");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var fontawesome_svg_core_index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/HttpException.vue?vue&type=script&lang=js&
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




fontawesome_svg_core_index_es["c" /* library */].add(index_es["a" /* faBomb */]);
/* harmony default export */ var HttpExceptionvue_type_script_lang_js_ = ({
  name: 'HttpException',
  components: {
    Icon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    Alert: _vue_interface_alert["a" /* Alert */]
  },
  props: {
    error: Error,
    fixed: Boolean
  }
});
// CONCATENATED MODULE: ./src/Components/HttpException.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_HttpExceptionvue_type_script_lang_js_ = (HttpExceptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/HttpException.vue?vue&type=style&index=0&lang=scss&
var HttpExceptionvue_type_style_index_0_lang_scss_ = __webpack_require__("9d49");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/HttpException.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Components_HttpExceptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HttpException = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "8f33":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/logo-no-text-1028x1028.8aa291ba.png";

/***/ }),

/***/ "9d49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HttpException_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("01f6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HttpException_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HttpException_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=CapsuleErrorReport.umd.editor.js.map