(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./components/global/molecules/PlanSelector/PlanCard.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var PlanSelector_PlanCardvue_type_script_lang_js_={name:"PlanSelector",props:{option:{type:Object,required:!0},selected:{type:Boolean,default:!1}}},componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(PlanSelector_PlanCardvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"cursor-pointer bg-white border-4 border-white rounded-xl shadow-lg h-full w-full",class:{"border-4 border-primary shadow-primary":_vm.selected},on:{click:function($event){return _vm.$emit("click")}}},[_c("div",{staticClass:"h-full px-6 py-4"},[_c("div",{staticClass:"flex justify-between"},[_c("h2",{staticClass:"uppercase text-lg font-semibold tracking-wider",class:_vm.selected?"text-primary":"text-muted",staticStyle:{margin:"0 !important"}},[_vm._v("\n        "+_vm._s(_vm.option.label)+"\n      ")]),_vm._v(" "),_c("div",{staticClass:"grid items-center justify-items-center border-2 border-white rounded-full h-8 w-8",class:{"border-primary bg-primary shadow-lg shadow-primary":_vm.selected},attrs:{checked:_vm.selected,role:"radio"},on:{click:function($event){$event.preventDefault()}}},[_vm.selected?_c("img",{staticClass:"h-4 w-4",staticStyle:{margin:"0 !important"},attrs:{src:"icons/check.svg"}}):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"mt-2 flex justify-between items-center"},[_c("p",[_c("span",{staticClass:"font-bold text-3xl"},[_vm._v(_vm._s(_vm.option.data/1e3))]),_c("span",{staticClass:"font-bold text-xl ml-2"},[_vm._v("TB")]),_vm._v(" "),_c("span",{staticClass:"text-xl text-muted ml-1"},[_vm._v("of storage")])]),_vm._v(" "),_c("p",{staticClass:"tracking-wide font-semibold"},[_vm._v("$"+_vm._s(_vm.option.price)+" / mo")])])])])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"PlanSelector",exportName:"default",description:"",tags:{},props:[{name:"option",type:{name:"object"},required:!0},{name:"selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}]}}}]);