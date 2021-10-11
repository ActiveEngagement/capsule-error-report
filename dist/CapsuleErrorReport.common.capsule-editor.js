((typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] || []).push([[4],{

/***/ "026f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Editor.vue?vue&type=template&id=ebb9f466&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cm-container"},[(_vm.demoMode && !_vm.demoModalCleared)?_c('editor-demo-modal',{on:{"clear":_vm.onModalClear}}):_vm._e(),(_vm.showFinishModal)?_c('editor-modal',{attrs:{"content-animation":{name: 'tada'}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var isShowing = ref.isShowing;
return [_vm._t("success",function(){return [_c('animate-css',{attrs:{"name":"zoom","left":""}},[(isShowing)?_c('img',{staticClass:"capsule-editor-modal-logo",attrs:{"src":__webpack_require__("8f33")}}):_vm._e()]),_vm._t("success-content",function(){return [_c('div',{staticClass:"text-center"},[_c('h1',{staticClass:"font-weight-light"},[_vm._v(" Success! ")]),_c('h5',{staticClass:"font-weight-light mb-5"},[_vm._v(" Your document has been fixed. ")]),_c('btn',{attrs:{"type":"button","variant":"primary","size":"lg","block":""},on:{"click":_vm.closeFinishPopup}},[_vm._v(" Dismiss ")])],1)]},{"content":_vm.currentContent,"close":_vm.closeFinishPopup,"filename":_vm.currentFilename,"view":_vm.view})]},{"close":_vm.closeFinishPopup,"filename":_vm.currentFilename,"view":_vm.view,"isShowing":isShowing})]}}],null,true)}):_vm._e(),_c('editor-toolbar',{ref:"toolbar",attrs:{"demoMode":_vm.demoMode,"disable-filename":_vm.disableFilename,"filename":_vm.currentFilename},on:{"demo-modal":function () { return _vm.demoModalCleared = false; }},scopedSlots:_vm._u([{key:"left",fn:function(){return [_vm._t("toolbar-left",null,{"errors":_vm.errors,"filename":_vm.currentFilename,"content":_vm.currentContent})]},proxy:true},{key:"right",fn:function(){return [_vm._t("toolbar-right",null,{"errors":_vm.errors,"filename":_vm.currentFilename,"content":_vm.currentContent})]},proxy:true}],null,true),model:{value:(_vm.currentFilename),callback:function ($$v) {_vm.currentFilename=$$v},expression:"currentFilename"}}),_c('div',{ref:"wrapper",staticClass:"cm-wrapper"}),_c('editor-footer',{ref:"footer",attrs:{"view":_vm.view},on:{"goto":_vm.onGoto,"save":_vm.onSave},scopedSlots:_vm._u([{key:"before-save-button",fn:function(){return [_vm._t("before-save-button",null,{"errors":_vm.errors,"filename":_vm.currentFilename,"content":_vm.currentContent})]},proxy:true},{key:"save-button",fn:function(){return [_vm._t("save-button",null,{"errors":_vm.errors,"filename":_vm.currentFilename,"content":_vm.currentContent})]},proxy:true},{key:"after-save-button",fn:function(){return [_vm._t("after-save-button",null,{"errors":_vm.errors,"filename":_vm.currentFilename,"content":_vm.currentContent})]},proxy:true}],null,true),model:{value:(_vm.errors),callback:function ($$v) {_vm.errors=$$v},expression:"errors"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/Editor.vue?vue&type=template&id=ebb9f466&

// EXTERNAL MODULE: ../capsule-editor/node_modules/@vue-interface/animate-css/index.js + 5 modules
var animate_css = __webpack_require__("fd04");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@vue-interface/btn/index.js + 5 modules
var btn = __webpack_require__("a717");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/state/dist/index.js
var dist = __webpack_require__("81f4");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/basic-setup/dist/index.js + 7 modules
var basic_setup_dist = __webpack_require__("d63f");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/commands/dist/index.js
var commands_dist = __webpack_require__("0559");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/lang-html/dist/index.js + 5 modules
var lang_html_dist = __webpack_require__("29a3");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/view/dist/index.js + 1 modules
var view_dist = __webpack_require__("f2f5");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/theme-one-dark/dist/index.js
var theme_one_dark_dist = __webpack_require__("0a24");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorDemoModal.vue?vue&type=template&id=0f725bcd&
var EditorDemoModalvue_type_template_id_0f725bcd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('editor-modal',{staticClass:"capsule-editor-demo-modal",class:("step-" + _vm.active)},[_c('slide-deck',{ref:"slides",attrs:{"active":_vm.active,"controls":_vm.active !== 'welcome'},on:{"enter":_vm.onEnter},scopedSlots:_vm._u([(_vm.active > 0 && _vm.active < 3)?{key:"bottom",fn:function(){return [_c('div',{staticClass:"capsule-editor-modal-footer"},[_c('small',[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.clear.apply(null, arguments)}}},[_vm._v("Skip Tutorial")])])])]},proxy:true}:null],null,true)},_vm._l((_vm.steps),function(ref){
var key = ref[0];
var component = ref[1];
return _c('div',{key:key},[_c(component,{tag:"component",attrs:{"clear":_vm.clear,"next":_vm.next,"prev":_vm.prev}})],1)}),0)],1)}
var EditorDemoModalvue_type_template_id_0f725bcd_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/EditorDemoModal.vue?vue&type=template&id=0f725bcd&

// EXTERNAL MODULE: ../capsule-editor/node_modules/@vue-interface/slide-deck/index.js + 18 modules
var slide_deck = __webpack_require__("d904");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorModal.vue?vue&type=template&id=be25a5e8&
var EditorModalvue_type_template_id_be25a5e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('animate-css',_vm._b({on:{"after-enter":function($event){_vm.showContent = true}}},'animate-css',_vm.bgAnimation,false),[(_vm.mounted)?_c('div',{staticClass:"capsule-editor-modal"},[_c('animate-css',_vm._b({},'animate-css',_vm.contentAnimation,false),[(_vm.showContent)?_c('div',{staticClass:"capsule-editor-modal-content"},[_vm._t("default",null,{"isShowing":_vm.isContentShowing})],2):_vm._e()])],1):_vm._e()])}
var EditorModalvue_type_template_id_be25a5e8_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/EditorModal.vue?vue&type=template&id=be25a5e8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorModal.vue?vue&type=script&lang=js&
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

/* harmony default export */ var EditorModalvue_type_script_lang_js_ = ({
  props: {
    bgAnimation: {
      type: Object,
      default: () => ({
        name: 'fade',
        duration: '500ms'
      })
    },
    contentAnimation: {
      type: Object,
      default: () => ({
        name: 'fade',
        duration: '500ms'
      })
    }
  },
  components: {
    AnimateCss: animate_css["a" /* default */]
  },
  data: () => ({
    mounted: false,
    isContentShowing: false,
    showContent: false
  }),
  watch: {
    showContent(value) {
      if (value) {
        this.$nextTick(() => {
          this.isContentShowing = true;
        });
      }
    }

  },

  mounted() {
    this.mounted = true;
  }

});
// CONCATENATED MODULE: ../capsule-editor/src/EditorModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_EditorModalvue_type_script_lang_js_ = (EditorModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../capsule-editor/src/EditorModal.vue?vue&type=style&index=0&lang=scss&
var EditorModalvue_type_style_index_0_lang_scss_ = __webpack_require__("04c0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ../capsule-editor/src/EditorModal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_EditorModalvue_type_script_lang_js_,
  EditorModalvue_type_template_id_be25a5e8_render,
  EditorModalvue_type_template_id_be25a5e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditorModal = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/ErrorDetection.vue?vue&type=template&id=3fcf8dc5&
var ErrorDetectionvue_type_template_id_3fcf8dc5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"text-center font-weight-light"},[_vm._v(" Error Detection ")]),_c('p',[_vm._v(" Capsule Editor will automatically check for errors as you type. When an error is found, it will be underlined in red and be displayed in the panel at the bottom of the editor. ")]),_c('img',{staticClass:"screenshot img-fluid mb-3",attrs:{"src":__webpack_require__("7fcf")}}),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"mb-3"},[_c('btn',{attrs:{"type":"button"},on:{"click":_vm.next}},[_vm._v(" Next "),_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-right"}})],1)],1)])])}
var ErrorDetectionvue_type_template_id_3fcf8dc5_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/Demo/ErrorDetection.vue?vue&type=template&id=3fcf8dc5&

// EXTERNAL MODULE: ../capsule-editor/node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("871a");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("e936");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("192d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/DemoComponent.vue?vue&type=script&lang=js&





index_es["c" /* library */].add(free_solid_svg_icons_index_es["h" /* faInfoCircle */]);
index_es["c" /* library */].add(free_solid_svg_icons_index_es["i" /* faLongArrowAltRight */]);
/* harmony default export */ var DemoComponentvue_type_script_lang_js_ = ({
  components: {
    AnimateCss: animate_css["a" /* default */],
    Btn: btn["a" /* default */],
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  props: {
    clear: {
      type: Function,
      required: true
    },
    next: {
      type: Function,
      required: true
    },
    prev: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    loaded: false
  }),

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ../capsule-editor/src/Demo/DemoComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Demo_DemoComponentvue_type_script_lang_js_ = (DemoComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ../capsule-editor/src/Demo/DemoComponent.vue
var DemoComponent_render, DemoComponent_staticRenderFns




/* normalize component */

var DemoComponent_component = Object(componentNormalizer["a" /* default */])(
  Demo_DemoComponentvue_type_script_lang_js_,
  DemoComponent_render,
  DemoComponent_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DemoComponent = (DemoComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/ErrorDetection.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ErrorDetectionvue_type_script_lang_js_ = ({
  extends: DemoComponent
});
// CONCATENATED MODULE: ../capsule-editor/src/Demo/ErrorDetection.vue?vue&type=script&lang=js&
 /* harmony default export */ var Demo_ErrorDetectionvue_type_script_lang_js_ = (ErrorDetectionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ../capsule-editor/src/Demo/ErrorDetection.vue





/* normalize component */

var ErrorDetection_component = Object(componentNormalizer["a" /* default */])(
  Demo_ErrorDetectionvue_type_script_lang_js_,
  ErrorDetectionvue_type_template_id_3fcf8dc5_render,
  ErrorDetectionvue_type_template_id_3fcf8dc5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ErrorDetection = (ErrorDetection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/Finished.vue?vue&type=template&id=a4d00a58&
var Finishedvue_type_template_id_a4d00a58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"text-center font-weight-light"},[_vm._v(" Almost Ready! ")]),_c('p',[_vm._v(" If you ever need to return to this tutorial, just click the question mark in the top right corner. ")]),_c('img',{staticClass:"screenshot img-fluid mb-3",attrs:{"src":__webpack_require__("e403")}}),_c('div',{staticClass:"text-center"},[_c('btn',{attrs:{"variant":"success","type":"button"},on:{"click":_vm.clear}},[_vm._v(" Get Started! ")])],1)])}
var Finishedvue_type_template_id_a4d00a58_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/Demo/Finished.vue?vue&type=template&id=a4d00a58&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/Finished.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Finishedvue_type_script_lang_js_ = ({
  extends: DemoComponent
});
// CONCATENATED MODULE: ../capsule-editor/src/Demo/Finished.vue?vue&type=script&lang=js&
 /* harmony default export */ var Demo_Finishedvue_type_script_lang_js_ = (Finishedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ../capsule-editor/src/Demo/Finished.vue





/* normalize component */

var Finished_component = Object(componentNormalizer["a" /* default */])(
  Demo_Finishedvue_type_script_lang_js_,
  Finishedvue_type_template_id_a4d00a58_render,
  Finishedvue_type_template_id_a4d00a58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Finished = (Finished_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/FixingErrors.vue?vue&type=template&id=4e54a2d6&
var FixingErrorsvue_type_template_id_4e54a2d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"text-center font-weight-light"},[_vm._v(" Fixing Errors ")]),_c('p',[_vm._v(" Some errors can be automatically fixed. If there are multiple ways to fix an error, select the best option for that particular instance. ")]),_c('img',{staticClass:"screenshot img-fluid mb-3",attrs:{"src":__webpack_require__("3f6a")}}),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"mb-3"},[_c('btn',{attrs:{"type":"button"},on:{"click":_vm.next}},[_vm._v(" Next "),_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-right"}})],1)],1)])])}
var FixingErrorsvue_type_template_id_4e54a2d6_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/Demo/FixingErrors.vue?vue&type=template&id=4e54a2d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/FixingErrors.vue?vue&type=script&lang=js&
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

/* harmony default export */ var FixingErrorsvue_type_script_lang_js_ = ({
  extends: DemoComponent
});
// CONCATENATED MODULE: ../capsule-editor/src/Demo/FixingErrors.vue?vue&type=script&lang=js&
 /* harmony default export */ var Demo_FixingErrorsvue_type_script_lang_js_ = (FixingErrorsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ../capsule-editor/src/Demo/FixingErrors.vue





/* normalize component */

var FixingErrors_component = Object(componentNormalizer["a" /* default */])(
  Demo_FixingErrorsvue_type_script_lang_js_,
  FixingErrorsvue_type_template_id_4e54a2d6_render,
  FixingErrorsvue_type_template_id_4e54a2d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FixingErrors = (FixingErrors_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/Paginating.vue?vue&type=template&id=5474fe61&
var Paginatingvue_type_template_id_5474fe61_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"text-center font-weight-light"},[_vm._v(" Navigation ")]),_c('p',[_vm._v(" Navigating through the errors is a breeze. Your cursor will automatically highlight the error, or click the next/prev buttons to cycle through the errors. ")]),_c('img',{staticClass:"screenshot img-fluid mb-3",attrs:{"src":__webpack_require__("8d01")}}),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"mb-3"},[_c('btn',{attrs:{"type":"button"},on:{"click":_vm.next}},[_vm._v(" Next "),_c('font-awesome-icon',{attrs:{"icon":"long-arrow-alt-right"}})],1)],1)])])}
var Paginatingvue_type_template_id_5474fe61_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/Demo/Paginating.vue?vue&type=template&id=5474fe61&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/Paginating.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Paginatingvue_type_script_lang_js_ = ({
  extends: DemoComponent
});
// CONCATENATED MODULE: ../capsule-editor/src/Demo/Paginating.vue?vue&type=script&lang=js&
 /* harmony default export */ var Demo_Paginatingvue_type_script_lang_js_ = (Paginatingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ../capsule-editor/src/Demo/Paginating.vue





/* normalize component */

var Paginating_component = Object(componentNormalizer["a" /* default */])(
  Demo_Paginatingvue_type_script_lang_js_,
  Paginatingvue_type_template_id_5474fe61_render,
  Paginatingvue_type_template_id_5474fe61_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Paginating = (Paginating_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/Welcome.vue?vue&type=template&id=a34b4ae0&
var Welcomevue_type_template_id_a34b4ae0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('animate-css',{attrs:{"name":"zoom","in":"","left":""}},[(_vm.loaded)?_c('img',{staticClass:"capsule-editor-modal-logo",attrs:{"src":__webpack_require__("8f33")}}):_vm._e()]),_c('h1',{staticClass:"text-center font-weight-light"},[_vm._v(" Capsule Editor ")]),_c('p',{staticClass:"mx-5 px-3 py-2"},[_vm._v(" Capsule Editor will step you through each error to help you quickly find the correct solution. Would like to learn more about Capsule Editor? ")]),_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"mb-3"},[_c('btn',{attrs:{"type":"button"},on:{"click":_vm.next}},[_c('font-awesome-icon',{attrs:{"icon":"info-circle"}}),_vm._v(" Learn More ")],1)],1),_c('small',[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.clear.apply(null, arguments)}}},[_vm._v("No, I just want to fix the errors.")])])])],1)}
var Welcomevue_type_template_id_a34b4ae0_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/Demo/Welcome.vue?vue&type=template&id=a34b4ae0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Demo/Welcome.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Welcomevue_type_script_lang_js_ = ({
  extends: DemoComponent
});
// CONCATENATED MODULE: ../capsule-editor/src/Demo/Welcome.vue?vue&type=script&lang=js&
 /* harmony default export */ var Demo_Welcomevue_type_script_lang_js_ = (Welcomevue_type_script_lang_js_); 
// CONCATENATED MODULE: ../capsule-editor/src/Demo/Welcome.vue





/* normalize component */

var Welcome_component = Object(componentNormalizer["a" /* default */])(
  Demo_Welcomevue_type_script_lang_js_,
  Welcomevue_type_template_id_a34b4ae0_render,
  Welcomevue_type_template_id_a34b4ae0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Welcome = (Welcome_component.exports);
// CONCATENATED MODULE: ../capsule-editor/src/Demo/index.js





const steps = {
  'welcome': Welcome,
  'error-detection': ErrorDetection,
  'paginating': Paginating,
  'fixing-errors': FixingErrors,
  'finished': Finished
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorDemoModal.vue?vue&type=script&lang=js&
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



/* harmony default export */ var EditorDemoModalvue_type_script_lang_js_ = ({
  components: Object.assign({
    EditorModal: EditorModal,
    SlideDeck: slide_deck["a" /* SlideDeck */]
  }, steps),

  data() {
    return {
      active: 'welcome'
    };
  },

  computed: {
    steps() {
      return Object.entries(steps);
    }

  },
  methods: {
    indexOf(name) {
      const match = this.steps.find(([key, component], i) => {
        if (name === key) {
          return true;
        }
      });
      return this.steps.indexOf(match);
    },

    clear() {
      this.$emit('clear');
    },

    goto(index) {
      if (this.steps[index]) {
        const [key] = this.steps[index];
        this.active = key;
      }
    },

    next() {
      this.goto(Math.max(0, this.indexOf(this.active)) + 1);
    },

    prev() {
      this.goto(Math.max(0, this.indexOf(this.active)) - 1);
    },

    onEnter(current) {
      this.active = current.key;
    }

  }
});
// CONCATENATED MODULE: ../capsule-editor/src/EditorDemoModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_EditorDemoModalvue_type_script_lang_js_ = (EditorDemoModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../capsule-editor/src/EditorDemoModal.vue?vue&type=style&index=0&lang=scss&
var EditorDemoModalvue_type_style_index_0_lang_scss_ = __webpack_require__("1ccc");

// CONCATENATED MODULE: ../capsule-editor/src/EditorDemoModal.vue






/* normalize component */

var EditorDemoModal_component = Object(componentNormalizer["a" /* default */])(
  src_EditorDemoModalvue_type_script_lang_js_,
  EditorDemoModalvue_type_template_id_0f725bcd_render,
  EditorDemoModalvue_type_template_id_0f725bcd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditorDemoModal = (EditorDemoModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorFooter.vue?vue&type=template&id=0774d8fb&
var EditorFootervue_type_template_id_0774d8fb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"editor-footer d-flex align-items-center",style:({minHeight: !_vm.showFooter ? 0 : undefined})},[_c('animate-css',{attrs:{"name":"fade","duration":"200ms"}},[(_vm.showFooterContent)?_c('div',{staticClass:"d-flex justify-content-between align-items-center w-100"},[_c('div',{staticClass:"d-flex align-items-center w-100 overflow-hidden position-relative"},[_c('div',{staticClass:"d-flex align-items-center"},[_c('div',{staticClass:"editor-footer-pager flex-shrink-0"},[(_vm.totalDiagnostics)?_c('div',{staticClass:"py-2 mx-2"},[_c('btn',{attrs:{"type":"button","variant":"link"},on:{"click":function($event){return _vm.goto(_vm.index - 1)}}},[_c('font-awesome-icon',{attrs:{"icon":"caret-left"}})],1),_c('span',[_vm._v(_vm._s(_vm.index + 1)+" of "+_vm._s(_vm.diagnostics.length)+" ")]),_c('btn',{attrs:{"type":"button","variant":"link"},on:{"click":function($event){return _vm.goto(_vm.index + 1)}}},[_c('font-awesome-icon',{attrs:{"icon":"caret-right"}})],1)],1):_vm._e()]),_c('div',{staticClass:"mr-3"},[(_vm.currentDiagnostic)?_c('btn',{staticClass:"text-white",attrs:{"type":"button","variant":"link"},on:{"click":function($event){return _vm.goto(_vm.index)}}},[(_vm.currentDiagnostic.severity === 'error')?_c('font-awesome-icon',{attrs:{"icon":"bug","size":"lg"}}):_vm._e(),(_vm.currentDiagnostic.severity === 'warning')?_c('font-awesome-icon',{attrs:{"icon":"exclamation-triangle","size":"lg"}}):_vm._e()],1):_vm._e()],1)]),_c('div',{staticClass:"editor-footer-diagnostic"},[_c('animate-css',{attrs:{"name":"fade","duration":"200ms","direction":_vm.direction,"leave-active-class":"position-absolute"}},[(_vm.currentDiagnostic)?_c('editor-error',{key:_vm.index,staticClass:"py-2 pr-3",attrs:{"error":_vm.currentDiagnostic}}):_vm._e()],1)],1)]),_c('div',{staticClass:"flex-shrink-0 pr-2"},[_vm._t("before-save-button"),_vm._t("action-button",function(){return [(_vm.actions.length)?[(_vm.actions.length === 1)?[_c('btn',{attrs:{"type":"button","variant":"light"},on:{"click":function () { return _vm.onClickAction(_vm.currentDiagnostic, _vm.action); }}},[_c('font-awesome-icon',{staticClass:"mr-1",attrs:{"icon":"hammer"}}),_vm._v(" "+_vm._s(_vm.actions[0].name)+" ")],1)]:[_c('btn-dropdown',{attrs:{"label":"Fix Errors","type":"button","variant":"light","dropup":""},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('font-awesome-icon',{staticClass:"mr-2",attrs:{"icon":"hammer"}})]},proxy:true}],null,false,832869925)},_vm._l((_vm.actions),function(action,i){return _c('button',{key:((_vm.currentDiagnostic.rule.id) + "-" + i),attrs:{"type":"button","variant":"light"},on:{"click":function () { return _vm.onClickAction(_vm.currentDiagnostic, action); }}},[_vm._v(" "+_vm._s(action.name)+" ")])}),0)]]:_vm._e()]}),_vm._t("save-button",function(){return [(!_vm.diagnostics.length)?_c('btn',{attrs:{"type":"button","variant":"light"},on:{"click":function($event){return _vm.$emit('save')}}},[_c('font-awesome-icon',{staticClass:"mr-1",attrs:{"icon":"save"}}),_vm._v(" "+_vm._s(_vm.saveButtonLabel)+" ")],1):_vm._e()]}),_vm._t("after-save-button")],2)]):_vm._e()])],1)}
var EditorFootervue_type_template_id_0774d8fb_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/EditorFooter.vue?vue&type=template&id=0774d8fb&

// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/lint/dist/index.js
var lint_dist = __webpack_require__("e762");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@vue-interface/btn-dropdown/index.js + 97 modules
var btn_dropdown = __webpack_require__("0a53");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorError.vue?vue&type=template&id=871fa044&
var EditorErrorvue_type_template_id_871fa044_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex align-items-center capsule-editor-error"},[_c('code',[_vm._v(" "+_vm._s(_vm.error.line)+","+_vm._s(_vm.error.col)+" :: ("+_vm._s(_vm.error.rule.id)+") "+_vm._s(_vm.error.message)+" "),_c('a',{staticClass:"small",attrs:{"href":_vm.url,"variant":"link","text-light":"","target":"_blank"}},[_vm._v(" Reference "),_c('font-awesome-icon',{attrs:{"icon":"external-link-alt"}})],1)])])}
var EditorErrorvue_type_template_id_871fa044_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/EditorError.vue?vue&type=template&id=871fa044&

// EXTERNAL MODULE: ../capsule-editor/node_modules/@fortawesome/fontawesome/index.es.js
var fontawesome_index_es = __webpack_require__("24bf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorError.vue?vue&type=script&lang=js&
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




fontawesome_index_es["a" /* library */].add(free_solid_svg_icons_index_es["e" /* faExclamationTriangle */], free_solid_svg_icons_index_es["f" /* faExternalLinkAlt */]);
/* harmony default export */ var EditorErrorvue_type_script_lang_js_ = ({
  components: {
    Btn: btn["a" /* default */],
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    url() {
      return this.error.rule.link;
    }

  }
});
// CONCATENATED MODULE: ../capsule-editor/src/EditorError.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_EditorErrorvue_type_script_lang_js_ = (EditorErrorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../capsule-editor/src/EditorError.vue?vue&type=style&index=0&lang=scss&
var EditorErrorvue_type_style_index_0_lang_scss_ = __webpack_require__("7335");

// CONCATENATED MODULE: ../capsule-editor/src/EditorError.vue






/* normalize component */

var EditorError_component = Object(componentNormalizer["a" /* default */])(
  src_EditorErrorvue_type_script_lang_js_,
  EditorErrorvue_type_template_id_871fa044_render,
  EditorErrorvue_type_template_id_871fa044_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditorError = (EditorError_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorFooter.vue?vue&type=script&lang=js&
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








index_es["c" /* library */].add(free_solid_svg_icons_index_es["a" /* faBug */], free_solid_svg_icons_index_es["b" /* faCaretLeft */], free_solid_svg_icons_index_es["c" /* faCaretRight */], free_solid_svg_icons_index_es["e" /* faExclamationTriangle */], free_solid_svg_icons_index_es["j" /* faSave */], free_solid_svg_icons_index_es["g" /* faHammer */]);
/* harmony default export */ var EditorFootervue_type_script_lang_js_ = ({
  components: {
    AnimateCss: animate_css["a" /* default */],
    Btn: btn["a" /* default */],
    BtnDropdown: btn_dropdown["a" /* default */],
    EditorError: EditorError,
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  props: {
    saveButtonLabel: {
      type: String,
      default: 'Save File'
    },
    view: Object
  },

  data() {
    return {
      currentDiagnostic: null,
      direction: 'up',
      diagnostics: [],
      fixedAllDiagnostics: false,
      hasLinted: false,
      showFooter: false,
      showFooterContent: false
    };
  },

  updated() {
    if (!this.isEmpty() && this.hasLinted) {
      this.showFooter = true;
      setTimeout(() => this.showFooterContent = true, 200);
    } else {
      this.showFooterContent = false;
      setTimeout(() => this.showFooter = false, 200);
    }
  },

  computed: {
    actions() {
      return this.currentDiagnostic ? [].concat(this.currentDiagnostic.rule.actions).reverse().filter(({
        validate
      }) => {
        return !validate || validate(this.view, this.currentDiagnostic);
      }) : [];
    },

    index() {
      return Math.max(0, this.diagnostics.indexOf(this.currentDiagnostic));
    },

    totalDiagnostics() {
      return this.diagnostics.length;
    }

  },
  watch: {
    currentDiagnostic(value, oldValue) {
      this.direction = this.index > this.diagnostics.indexOf(oldValue) ? 'down' : 'up';
    },

    diagnostics(value, oldValue) {
      if (value.length) {
        this.hasLinted = true;
        this.fixedAllDiagnostics = false;
      } else if (!value.length && !!oldValue.length) {
        this.hasLinted = true;
        this.currentDiagnostic = null;
        this.fixedAllDiagnostics = true;
      } else if (!value.length) {
        this.fixedAllDiagnostics = true;
      }
    }

  },
  methods: {
    findActiveDiagnostic() {
      return this.diagnostics.filter(diagnostic => diagnostic.isActive).pop();
    },

    goto(index) {
      if (index < 0) {
        index = this.diagnostics.length - 1;
      } else if (index > this.diagnostics.length - 1) {
        index = 0;
      }

      const lastDiagnostic = this.currentDiagnostic;
      this.currentDiagnostic = this.diagnostics[index];
      this.$emit('goto', this.currentDiagnostic, lastDiagnostic);
    },

    isEmpty() {
      return this.view ? this.view.state.doc.toString() === '' : false;
    },

    compare(a, b) {
      return !!a && !!b && a.from === b.from && a.to === b.to && a.rule.id === b.rule.id;
    },

    update(diagnostics) {
      this.diagnostics = diagnostics || [];
      this.hasLinted = true;

      if (!this.currentDiagnostic) {
        this.currentDiagnostic = this.diagnostics[this.index];
      }

      this.$emit('input', this.diagnostics);
    },

    activate(view) {
      const {
        from,
        to
      } = view.state.selection.main;
      const active = this.diagnostics.filter(diagnostic => {
        if (from === to) {
          return diagnostic.from <= from && diagnostic.to >= to;
        }

        return diagnostic.from >= from && diagnostic.to <= to;
      });
      const match = this.diagnostics.find(diagnostic => {
        return this.compare(diagnostic, this.currentDiagnostic);
      });
      const index = Math.max(0, active.indexOf(this.currentDiagnostic));

      if (active.length) {
        this.currentDiagnostic = active[index];
      } else {
        this.currentDiagnostic = match || this.diagnostics[this.index];
      }
    },

    onClickAction(diagnostic, {
      apply
    }) {
      apply(this.view, diagnostic.from, diagnostic.to);
      Object(lint_dist["a" /* forceLinting */])(this.view);
    }

  }
});
// CONCATENATED MODULE: ../capsule-editor/src/EditorFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_EditorFootervue_type_script_lang_js_ = (EditorFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ../capsule-editor/src/EditorFooter.vue?vue&type=style&index=0&lang=scss&
var EditorFootervue_type_style_index_0_lang_scss_ = __webpack_require__("7b46");

// CONCATENATED MODULE: ../capsule-editor/src/EditorFooter.vue






/* normalize component */

var EditorFooter_component = Object(componentNormalizer["a" /* default */])(
  src_EditorFootervue_type_script_lang_js_,
  EditorFootervue_type_template_id_0774d8fb_render,
  EditorFootervue_type_template_id_0774d8fb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditorFooter = (EditorFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54068579-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorToolbar.vue?vue&type=template&id=2f31e9ed&
var EditorToolbarvue_type_template_id_2f31e9ed_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-toolbar d-flex justify-content-between pt-2 px-2 pb-1"},[_c('div',{staticClass:"editor-toolbar-left"},[_vm._t("left")],2),_c('div',{staticClass:"editor-toolbar-title"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],attrs:{"type":"text","placeholder":"Untitled Document","disabled":_vm.disableFilename},domProps:{"value":(_vm.currentValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value},function (event) { return _vm.$emit('input', event.target.value); }]}})]),_c('div',{staticClass:"editor-toolbar-right"},[_vm._t("right",function(){return [(_vm.demoMode)?_c('btn',{staticClass:"editor-help",attrs:{"size":"sm","variant":"link"},on:{"click":function($event){return _vm.$emit('demo-modal')}}},[_c('font-awesome-icon',{attrs:{"icon":['far', 'question-circle']}})],1):_vm._e()]})],2)])}
var EditorToolbarvue_type_template_id_2f31e9ed_staticRenderFns = []


// CONCATENATED MODULE: ../capsule-editor/src/EditorToolbar.vue?vue&type=template&id=2f31e9ed&

// EXTERNAL MODULE: ../capsule-editor/node_modules/@vue-interface/badge/index.js + 5 modules
var badge = __webpack_require__("13b8");

// EXTERNAL MODULE: ../capsule-editor/node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__("331a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/EditorToolbar.vue?vue&type=script&lang=js&
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






index_es["c" /* library */].add(free_solid_svg_icons_index_es["a" /* faBug */], free_solid_svg_icons_index_es["d" /* faCog */], free_regular_svg_icons_index_es["a" /* faQuestionCircle */]);
/* harmony default export */ var EditorToolbarvue_type_script_lang_js_ = ({
  components: {
    Btn: btn["a" /* default */],
    Badge: badge["a" /* default */],
    FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
  },
  props: {
    demoMode: Boolean,
    disableFilename: Boolean,
    filename: String
  },
  model: {
    prop: 'currentValue'
  },

  data() {
    return {
      currentValue: this.filename
    };
  }

});
// CONCATENATED MODULE: ../capsule-editor/src/EditorToolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_EditorToolbarvue_type_script_lang_js_ = (EditorToolbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../capsule-editor/src/EditorToolbar.vue?vue&type=style&index=0&lang=scss&
var EditorToolbarvue_type_style_index_0_lang_scss_ = __webpack_require__("0844");

// CONCATENATED MODULE: ../capsule-editor/src/EditorToolbar.vue






/* normalize component */

var EditorToolbar_component = Object(componentNormalizer["a" /* default */])(
  src_EditorToolbarvue_type_script_lang_js_,
  EditorToolbarvue_type_template_id_2f31e9ed_render,
  EditorToolbarvue_type_template_id_2f31e9ed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditorToolbar = (EditorToolbar_component.exports);
// EXTERNAL MODULE: ../capsule-editor/node_modules/@codemirror/panel/dist/index.js
var panel_dist = __webpack_require__("2500");

// EXTERNAL MODULE: ../capsule-editor/node_modules/capsule-lint/index.js
var capsule_lint = __webpack_require__("9155");

// CONCATENATED MODULE: ../capsule-editor/src/Extensions/Lint.js




 // Override the default keymaps

lint_dist["b" /* lintKeymap */][0].run = () => {// Ignore the command
};

class Lint_DiagnosticWidget extends view_dist["g" /* WidgetType */] {
  constructor(diagnostic) {
    super();
    this.diagnostic = diagnostic;
  }

  line(number) {
    this.diagnostic.line = number;
  }

  col(number) {
    this.diagnostic.col = number;
  }

  from(number) {
    this.diagnostic.from = number;
  }

  to(number) {
    this.diagnostic.to = number;
  }

  eq(other) {
    return other.diagnostic == this.diagnostic;
  }

  toDOM() {
    return document.createElement('span');
  }

  ignoreEvent() {
    return false;
  }

}

class Lint_LintState {
  constructor(decorations) {
    this.decorations = decorations;
  }

  get length() {
    return this.decorations.length;
  }

  get diagnostics() {
    const items = [];
    this.iter(iter => {
      items.push(iter.value);
    });
    return items.reduce((carry, {
      widget
    }) => {
      if (carry.indexOf(widget.diagnostic) === -1) {
        carry.push(widget.diagnostic);
      }

      return carry;
    }, []);
  }

  map(changes) {
    return this.decorations.map(changes);
  }

  iter(fn) {
    const iter = this.decorations.iter();

    while (iter.value) {
      fn(iter);
      iter.next();
    }
  }

  sync(state) {
    const items = [];
    this.iter(iter => {
      if (!iter.value.spec.side) {
        const line = state.doc.lineAt(iter.from);
        iter.value.widget.col(iter.from - line.from + 1);
        iter.value.widget.from(iter.from);
        iter.value.widget.line(line.number);
      } else {
        iter.value.widget.to(iter.to);
      }

      items.push(iter.value);
    });
    return items.reduce((carry, {
      widget
    }) => {
      if (carry.indexOf(widget.diagnostic) === -1) {
        carry.push(widget.diagnostic);
      }

      return carry;
    }, []);
  }

  static init(diagnostics, state) {
    const mapped = diagnostics.map(diagnostic => {
      const from = view_dist["b" /* Decoration */].widget({
        widget: new Lint_DiagnosticWidget(diagnostic),
        diagnostic,
        side: 0
      }).range(diagnostic.from);
      const to = view_dist["b" /* Decoration */].widget({
        widget: new Lint_DiagnosticWidget(diagnostic),
        diagnostic,
        side: 1,
        from
      }).range(diagnostic.to);
      return [from, to];
    });
    return new Lint_LintState(view_dist["b" /* Decoration */].set(mapped.flat(), true));
  }

}

const setDiagnosticsEffect = dist["j" /* StateEffect */].define();
const lintState = dist["k" /* StateField */].define({
  create() {
    return new Lint_LintState(view_dist["b" /* Decoration */].none);
  },

  update(value, tr) {
    if (tr.docChanged && value.length) {
      return new Lint_LintState(value.map(tr.changes));
    }

    for (let effect of tr.effects) {
      if (effect.is(setDiagnosticsEffect)) {
        return Lint_LintState.init(effect.value);
      }
    }

    return value;
  },

  provide(field) {
    return [Object(lint_dist["c" /* linter */])(view => {
      const {
        doc
      } = view.state.toJSON();
      const diagnostics = Object(capsule_lint["lint"])(doc).map(error => {
        const pos = view.state.doc.line(error.line);
        const from = Math.min(doc.length, pos.from - 1 + error.col);
        const to = Math.min(doc.length, from + error.raw.length);
        return {
          from,
          to,
          col: error.col,
          line: error.line,
          rule: error.rule,
          message: error.message,
          severity: error.type,
          source: error.rule.id
        };
      });
      view.dispatch({
        effects: setDiagnosticsEffect.of(diagnostics)
      });
      return diagnostics;
    }), view_dist["d" /* EditorView */].decorations.from(field, state => state.decorations), view_dist["d" /* EditorView */].updateListener.of(event => {
      if (event.docChanged) {
        event.state.field(lintState).sync(event.view.state);
      }
    })];
  }

});
/* harmony default export */ var Lint = (function (parent) {
  return [lintState, panel_dist["b" /* showPanel */].of(view => {
    return {
      bottom: true,
      dom: parent.$refs.footer.$el
    };
  }), view_dist["d" /* EditorView */].updateListener.of(view => {
    if (view.docChanged) {
      parent.$refs.footer.update(view.state.field(lintState).diagnostics);
    }

    for (let tr of view.transactions) {
      for (let effect of tr.effects) {
        if (effect.is(setDiagnosticsEffect)) {
          parent.$refs.footer.update(view.state.field(lintState).diagnostics);
        }
      }
    }

    parent.$refs.footer.activate(view);
  })];
});
// CONCATENATED MODULE: ../capsule-editor/src/Extensions/Toolbar.js


/* harmony default export */ var Toolbar = (function (parent, left, right) {
  return [view_dist["f" /* ViewPlugin */].fromClass(class {
    constructor(view) {
      parent.currentContent = view.state.doc.toString();
    }

  }), view_dist["d" /* EditorView */].updateListener.of(view => {
    if (view.docChanged) {
      parent.currentContent = view.state.doc.toString();
    }
  }), panel_dist["b" /* showPanel */].of(view => ({
    top: true,
    dom: parent.$refs.toolbar.$el
  }))];
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../capsule-editor/src/Editor.vue?vue&type=script&lang=js&
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













/* harmony default export */ var Editorvue_type_script_lang_js_ = ({
  components: {
    AnimateCss: animate_css["a" /* default */],
    Btn: btn["a" /* default */],
    EditorDemoModal: EditorDemoModal,
    EditorFooter: EditorFooter,
    EditorModal: EditorModal,
    EditorToolbar: EditorToolbar
  },
  props: {
    disableFilename: Boolean,
    demoMode: {
      type: Boolean,
      default: false
    },
    filename: String,
    save: {
      type: Function,

      default() {
        return this.showFinishModal = true;
      }

    },
    skipIntro: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String
  },
  model: {
    prop: 'currentContent'
  },

  data() {
    return {
      currentContent: this.content,
      currentFilename: this.filename || this.title,
      demoModalCleared: this.skipIntro,
      errors: [],
      hasDismissedFinishPopup: false,
      showFinishModal: false,
      view: null
    };
  },

  watch: {
    currentContent(content) {
      this.$emit('input', {
        content,
        filename: this.currentFilename
      });
    },

    errors(value, oldErrors) {
      if (!value.length && oldErrors.length) {
        this.$emit('fixed-errors');
      }
    },

    showFinishModal(value) {
      if (value) {// setTimeout(() => this.isSuccessModalShowing = true, 1000)
      }
    }

  },

  created() {
    this.$on('finish', value => {
      if (this.demoMode) {
        this.showFinishModal = value;
      }
    });
  },

  mounted() {
    this.view = new view_dist["d" /* EditorView */]({
      state: dist["f" /* EditorState */].create({
        doc: this.currentContent || this.getSlotContents(),
        extensions: [theme_one_dark_dist["a" /* oneDark */], ...basic_setup_dist["a" /* basicSetup */], view_dist["k" /* keymap */].of([commands_dist["b" /* indentWithTab */]]), Object(lang_html_dist["a" /* html */])(), Toolbar(this), Lint(this)]
      }),
      parent: this.$refs.wrapper
    });
  },

  methods: {
    closeFinishPopup() {
      this.showFinishModal = false;
      this.hasDismissedFinishPopup = true;
    },

    getSlotContents() {
      return this.$slots.default ? this.$slots.default.filter(vnode => {
        return vnode.tag && vnode.tag.toLowerCase() === 'textarea' && !!vnode.children;
      }).reduce((carry, vnode) => {
        return carry + vnode.children.map(child => {
          return child.text;
        }).join('');
      }, '').trim() : null;
    },

    onModalClear() {
      this.demoModalCleared = true;
      this.$emit('demo-complete');
      this.view.focus();
    },

    onGoto({
      from,
      to
    }) {
      const tr = this.view.state.update({
        selection: {
          anchor: from,
          head: to
        },
        scrollIntoView: true
      });
      this.view.dispatch(tr);
      this.view.focus();
    },

    onSave() {
      this.save(this);
    }

  }
});
// CONCATENATED MODULE: ../capsule-editor/src/Editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Editorvue_type_script_lang_js_ = (Editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../capsule-editor/src/Editor.vue?vue&type=style&index=0&lang=scss&
var Editorvue_type_style_index_0_lang_scss_ = __webpack_require__("7a70");

// CONCATENATED MODULE: ../capsule-editor/src/Editor.vue






/* normalize component */

var Editor_component = Object(componentNormalizer["a" /* default */])(
  src_Editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Editor = __webpack_exports__["default"] = (Editor_component.exports);

/***/ }),

/***/ "04c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("306a");
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0844":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorToolbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34b7");
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorToolbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorToolbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0fbb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ccc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorDemoModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("65f2");
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorDemoModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorDemoModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "306a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "332b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "34b7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f6a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/fixing-errors.b7c79210.gif";

/***/ }),

/***/ "65f2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7335":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0fbb");
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorError_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7a70":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("daf5");
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7b46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("332b");
/* harmony import */ var _capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capsule_error_report_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_capsule_error_report_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_capsule_error_report_node_modules_vue_loader_lib_loaders_stylePostLoader_js_capsule_error_report_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_capsule_error_report_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_capsule_error_report_node_modules_cache_loader_dist_cjs_js_ref_0_0_capsule_error_report_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7fcf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/error-detection.c166f3ea.gif";

/***/ }),

/***/ "8d01":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/navigation.35c96d0e.gif";

/***/ }),

/***/ "daf5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e403":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/show-help-modal.4465dc4e.gif";

/***/ })

}]);
//# sourceMappingURL=CapsuleErrorReport.common.capsule-editor.js.map