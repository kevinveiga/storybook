"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9134],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/storybook/components/modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalDefault:()=>ModalDefault,default:()=>modal_stories});var _ModalDefault$paramet,_ModalDefault$paramet2,_ModalDefault$paramet3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),modalStyled=__webpack_require__("./src/components/modal/modalStyled.ts"),_excluded=["children","content","onClose","setActive"],__jsx=react.createElement;function Modal(_ref){var children=_ref.children,content=_ref.content,onClose=_ref.onClose,setActive=_ref.setActive,props=(0,objectWithoutProperties.Z)(_ref,_excluded),modalContent=children||content;return react_dom.createPortal(__jsx(react.Fragment,null,__jsx(modalStyled.m4,{onClick:function onClick(){return function handleClose(){setActive&&setActive(null),onClose&&onClose()}()}}),__jsx(modalStyled.b4,props,modalContent)),document.getElementById("id-modal-root"))}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{cbFunction:{defaultValue:null,description:"",name:"cbFunction",required:!1,type:{name:"(() => void)"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},setActive:{defaultValue:null,description:"",name:"setActive",required:!1,type:{name:"((value: any) => void)"}},showTop:{defaultValue:null,description:"",name:"showTop",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const modal_stories={args:{content:(0,react.createElement)("div",{style:{padding:"10px 15px"}},"Modal content"),maxWidth:"300px"},component:Modal,title:"Components/Modals"};var ModalDefault={};ModalDefault.parameters=_objectSpread(_objectSpread({},ModalDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ModalDefault$paramet=ModalDefault.parameters)||void 0===_ModalDefault$paramet?void 0:_ModalDefault$paramet.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_ModalDefault$paramet2=ModalDefault.parameters)||void 0===_ModalDefault$paramet2||null===(_ModalDefault$paramet3=_ModalDefault$paramet2.docs)||void 0===_ModalDefault$paramet3?void 0:_ModalDefault$paramet3.source)})})},"./src/components/modal/modalStyled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A1:()=>ModalCookieStyled,Fe:()=>ModalConfirmStyled,Nm:()=>ModalConfirmContentStyled,Xg:()=>ModalInfoButtonsStyled,b4:()=>ModalStyled,cI:()=>ModalTopStyled,ec:()=>ModalInfoStyled,m4:()=>ModalBackgroundStyled});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/function.ts"),_styles_variable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/variable.ts"),ModalStyled=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-0"})(["background-color:",";border-radius:",";box-shadow:",";color:",";left:50%;max-width:",";min-width:350px;position:fixed;top:50%;transform:translate(-50%,-50%);z-index:",";@media (max-width:","){width:90%;}"],(function(_ref){var backgroundColor=_ref.backgroundColor,theme=_ref.theme;return backgroundColor||theme.bgColor.primary}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.borderRadiusPrimary,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.boxShadowPrimary,(function(_ref2){return _ref2.theme.textColor.primary}),(function(_ref3){return _ref3.maxWidth||_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.breakpoint.sm}),(function(_ref4){return _ref4.zIndex||12}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.breakpoint.sm),ModalBackgroundStyled=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-1"})(["background-color:",";backdrop-filter:blur(5px);height:100%;left:0;position:fixed;top:0;width:100%;z-index:11;@supports not ((backdrop-filter:blur(5px)) or (-webkit-backdrop-filter:blur(5px))){background-color:transparent;","}"],_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.blackTransparent3,(0,_styles_function__WEBPACK_IMPORTED_MODULE_1__.IZ)({colorEnd:_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.blackTransparent5,colorEndPercent:"100%",colorStart:_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.black,colorStartPercent:"0",deg:"0deg"})),ModalConfirmStyled=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-2"})(["background-color:",";border-radius:",";box-shadow:",";color:",";left:50%;max-width:",";min-width:350px;position:fixed;top:50%;transform:translate(-50%,-50%);z-index:",";@media (max-width:","){width:90%;}"],(function(_ref5){var backgroundColor=_ref5.backgroundColor,theme=_ref5.theme;return backgroundColor||theme.bgColor.tertiary}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.borderRadiusPrimary,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.boxShadowPrimary,(function(_ref6){return _ref6.color||"unset"}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.breakpoint.sm,(function(_ref7){return _ref7.zIndex||13}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.breakpoint.sm),ModalConfirmContentStyled=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-3"})(["display:flex;flex:1 0 0;flex-direction:column;flex-wrap:wrap;justify-content:center;word-break:break-all;"]),ModalCookieStyled=(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-4"})(["",";",";display:flex;flex:1 1 auto;flex-direction:column;height:80vh;overflow-y:auto;"],styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(0,_styles_function__WEBPACK_IMPORTED_MODULE_1__.Q6)()),styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-5"})(["background-color:",";border-radius:",";bottom:25px;box-shadow:",";left:50%;position:fixed;transform:translateX(-50%);width:90%;z-index:10;@media (min-width:","){width:720px;}"],(function(_ref8){return _ref8.theme.bgColor.tertiary}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.borderRadiusPrimary,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.boxShadowPrimary,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.breakpoint.sm)),ModalInfoStyled=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-6"})(["background-color:",";border:1px solid ",";border-radius:",";bottom:",";box-shadow:",";color:",";height:",";overflow:",";position:fixed;right:",";transition:min-height ",";width:480px;z-index:",";@media (max-width:","){width:90%;}"],(function(_ref9){var backgroundColor=_ref9.backgroundColor,theme=_ref9.theme;return backgroundColor||theme.bgColor.primary}),(function(_ref10){var borderColor=_ref10.borderColor,theme=_ref10.theme;return borderColor||theme.borderColor.primary}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.borderRadiusPrimary,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.space.spacingXS,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.layout.boxShadowPrimary,(function(_ref11){return _ref11.theme.textColor.primary}),(function(_ref12){return _ref12.open?"auto":"50px"}),(function(_ref13){return _ref13.open?"visible":"hidden"}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.space.spacingXS,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.animation.transitionFast,(function(_ref14){return _ref14.zIndex||11}),_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.breakpoint.sm),ModalInfoButtonsStyled=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-7"})(["display:flex;position:absolute;right:",";top:",";z-index:2;[data-svg-maximize-minimize='true']{transform:",";}"],_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.space.spacingSM,_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.space.spacingSM,(function(_ref15){return _ref15.open?"rotate(0deg)":"rotate(180deg)"})),ModalTopStyled=(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-8"})(["",";",";display:flex;flex:1 1 auto;flex-direction:column;max-height:200px;min-height:100px;overflow-y:auto;"],styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(0,_styles_function__WEBPACK_IMPORTED_MODULE_1__.Q6)()),styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({componentId:"sc-1m1k4d4-9"})(["",";background-color:",";color:",";display:flex;flex:1 1 auto;flex-wrap:wrap;justify-content:space-between;"],styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref16){var type=_ref16.type;return"error"===type?_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.secondary:"success"===type?_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.tertiary:type||_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.tertiary}),(function(_ref17){var type=_ref17.type,theme=_ref17.theme;return"error"===type||"success"===type?_styles_variable__WEBPACK_IMPORTED_MODULE_2__.V.color.black:type||theme.textColor.primary})))}}]);