((typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] || []).push([[6],{

/***/ "01f6":
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

/***/ "6c53":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "751c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"35d0dc38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ContactForm.vue?vue&type=template&id=7b46f004&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center mt-5"},[_c('div',{staticClass:"col-md-8"},[_c('form',{staticClass:"contact-form",on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit.apply(null, arguments)}}},[_c('slide-deck',{attrs:{"active":_vm.active}},[_c('div',{key:0},[_c('div',{staticClass:"text-center text-primary mt-4 mb-4"},[_c('font-awesome-icon',{attrs:{"icon":['far', 'life-ring'],"size":"5x"}})],1),_c('div',{staticClass:"px-1"},[_c('p',[_vm._v("Enter your contact information and a brief message and we will back with you as soon as possible. Your name and an email or phone number is required.")]),_c('input-field',{attrs:{"size":"md","label":"Name","placeholder":"Name","errors":_vm.errors,"custom":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}}),_c('input-field',{attrs:{"size":"md","label":"Email","placeholder":"Email","errors":_vm.errors,"custom":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),_c('input-field',{attrs:{"size":"md","label":"Phone","placeholder":"Phone","errors":_vm.errors,"custom":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1),_c('animate-css',{attrs:{"name":"fade"}},[(_vm.showNotepad)?_c('notepad',{staticClass:"mb-3",attrs:{"editable":"","header":false,"footer":false},scopedSlots:_vm._u([{key:"default",fn:function(){return [_vm._v(" Hi, I am interested in using Capsule. [INSERT YOUR MESSAGE HERE] ")]},proxy:true}],null,false,306563642),model:{value:(_vm.notepad),callback:function ($$v) {_vm.notepad=$$v},expression:"notepad"}}):_vm._e()],1),_c('btn-activity',{attrs:{"size":"lg","activity":_vm.activity,"disabled":!_vm.form.name || !_vm.form.message || !(_vm.form.email || _vm.form.phone),"block":""}},[_vm._v(" Send Message ")]),_c('div',{staticClass:"text-center mt-2"},[_c('small',[_c('router-link',{attrs:{"to":{name: 'home'}}},[_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-left"}}),_vm._v(" Back to Report")],1)],1)])],1),_c('div',{key:1},[_c('card',[_c('card-body',[_c('div',{staticClass:"text-center text-primary mt-4 mb-4"},[_c('font-awesome-icon',{attrs:{"icon":['far', 'check-circle'],"size":"5x"}})],1),_c('h1',{staticClass:"text-center font-weight-light mb-4"},[_vm._v(" Thank You! ")]),_c('p',{staticClass:"mx-4"},[_vm._v(" Thank you for contacting us. We have received your message. We will get back to you as soon as possible. ")])])],1),_c('div',{staticClass:"text-center mt-2"},[_c('small',[_c('router-link',{attrs:{"to":{name: 'home'}}},[_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-left"}}),_vm._v(" Back to Report")],1)],1)])],1),_c('div',{key:2},[_c('http-exception',{attrs:{"error":_vm.error}})],1)])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ContactForm.vue?vue&type=template&id=7b46f004&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/vue-notepad/src/index.js + 7 modules
var src = __webpack_require__("dcd0");

// EXTERNAL MODULE: ./src/Components/HttpException.vue + 4 modules
var HttpException = __webpack_require__("5eb8");

// EXTERNAL MODULE: ./node_modules/@vue-interface/card/index.js + 53 modules
var card = __webpack_require__("c77b");

// EXTERNAL MODULE: ./node_modules/@vue-interface/slide-deck/index.js + 18 modules
var slide_deck = __webpack_require__("92a7");

// EXTERNAL MODULE: ./node_modules/@vue-interface/animate-css/index.js + 5 modules
var animate_css = __webpack_require__("d6e7");

// EXTERNAL MODULE: ./node_modules/@vue-interface/input-field/index.js + 8 modules
var input_field = __webpack_require__("55a0");

// EXTERNAL MODULE: ./node_modules/@vue-interface/btn-activity/index.js + 8 modules
var btn_activity = __webpack_require__("070f");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__("b702");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("c074");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/ContactForm.vue?vue&type=script&lang=js&
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












index_es["c" /* library */].add(free_regular_svg_icons_index_es["a" /* faCheckCircle */], free_solid_svg_icons_index_es["c" /* faComment */], free_solid_svg_icons_index_es["f" /* faExclamationTriangle */], free_regular_svg_icons_index_es["d" /* faLifeRing */], free_solid_svg_icons_index_es["k" /* faLongArrowAltLeft */]);
/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  components: {
    AnimateCss: animate_css["a" /* default */],
    BtnActivity: btn_activity["a" /* default */],
    Card: card["a" /* Card */],
    CardBody: card["b" /* CardBody */],
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    HttpException: HttpException["a" /* default */],
    InputField: input_field["a" /* default */],
    Notepad: src["a" /* default */],
    SlideDeck: slide_deck["a" /* SlideDeck */]
  },

  data() {
    return {
      active: 0,
      error: null,
      errors: null,
      activity: false,
      showNotepad: false,
      notepad: {},
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      }
    };
  },

  watch: {
    active() {
      this.activity = false;
    },

    notepad: {
      deep: true,

      handler(avlue) {
        this.form.message = this.notepad.body;
      }

    },
    form: {
      deep: true,

      handler(avlue) {
        if (this.form.name && (this.form.email || this.form.phone)) {
          this.showNotepad = true;
        }
      }

    }
  },
  methods: {
    onSubmit(event) {
      const baseURL =  false ? undefined : 'https://api.thecapsule.email/v1';
      this.activity = true;
      axios_default.a.post('support/contact', this.form, {
        baseURL,
        headers: {
          Accept: 'application/json'
        }
      }).then(response => {
        this.active = 1;
      }, e => {
        this.error = e;
        this.active = 2;
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Components/ContactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_ContactFormvue_type_script_lang_js_ = (ContactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/ContactForm.vue?vue&type=style&index=0&lang=scss&
var ContactFormvue_type_style_index_0_lang_scss_ = __webpack_require__("a60f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/ContactForm.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Components_ContactFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9d49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HttpException_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("01f6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HttpException_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HttpException_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a60f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c53");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=CapsuleErrorReport.umd.contact-form.js.map