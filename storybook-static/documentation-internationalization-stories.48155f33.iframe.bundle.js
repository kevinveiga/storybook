"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4938],{"./src/storybook/documentation/internationalization.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Internationalization:()=>Internationalization,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Internationalization,_Internationalization2,_Internationalization3,_home_kevinmveiga_Documents_repositories_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),_styles_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/storybook.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_kevinmveiga_Documents_repositories_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function InternationalizationWithHooks(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Vt,null,"Internationalization"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Organização"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Os textos de cada idioma estão na pasta "public/locales/[idioma]", onde "[idioma]" é a pasta com a sigla do idioma, ',__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"NÃO UTILIZAR")," o caractere ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,'"-"')," e sim utilizar"," ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,'"_"',".")),__jsx("li",null,'As configurações do i18next, estão no arquivo "src/helpers/i18next.ts".'),__jsx("li",null,"O arquivo ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"app.json")," é onde estão os textos específicos do app, como por exemplo botões, menu, mensagens de erro. O arquivo ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"glossary.json")," é onde estão os textos em comum, como por exemplo qualquer palavra que pode estar, ou não, no meio de qualquer texto.")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Padrôes"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"O idioma padrão é o inglês [en]."),__jsx("li",null,'As "keys" dos objetos json devem ser em inglês. Ex:',__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,'"no data found": "nenhum dado encontrado"')),__jsx("li",null,"As palavras devem começar com letra ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"minúscula (exceto nome prórpio)")," e não devem terminar com caracteres como ",'".", "?", etc…',", esses caracteres devem ser incluídos separados no código. Se for necessário começar com a letra maiúscula, basta usar a função"," ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"capitalizeFirstLetter")," ou o componente ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"P"),", ou os componentes de ",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"título"),". Ex:",__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"<Title3 fontWeight={700} mb={0}>{t('still have a question', { ns: 'glossary' })}?</Title3>")),__jsx("li",null,'Para palavras com gênero e plural, usar "g" para gênero feminino e "p" para plural. Ex:')),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},'{\n  "all": "todo",\n  "all g": "toda",\n  "all p": "todos",\n  "all g p": "todas",\n  ...\n}')),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Exemplos"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Usando React-i18next:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"import { useTranslation } from 'react-i18next';\n\n...\n\n// CONTEXT\nconst { t } = useTranslation();\n\n...\n\n<Title3 fontWeight={700} mb={0}>\n  {t('still have a question', { ns: 'glossary' })}?\n</Title3>")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Passando o idioma para a query do graphql:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"import { useTranslation } from 'react-i18next';\n\n...\n\n// CONTEXT\nconst { t, i18n } = useTranslation();\n\n...\n\n// CUSTOM HOOK\nconst { data, isLoading } = useSWRGetGraphql({\n  graphqlQuery: productSlug ? queryProduct : '',\n    graphqlVariables: { locale: [i18n.language], where: { slug: productSlug } } 14 });")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Referências"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"i18next."," ",__jsx("a",{href:"https://www.i18next.com/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"React-i18next."," ",__jsx("a",{href:"https://react.i18next.com/latest/using-with-hooks",rel:"noopener noreferrer",target:"_blank"},"(link1)")," ",__jsx("a",{href:"https://medium.com/@lucas_pinheiro/como-adicionar-internacionaliza%C3%A7%C3%A3o-i18n-na-sua-aplica%C3%A7%C3%A3o-react-a1ac4aea109d",rel:"noopener noreferrer",target:"_blank"},"(link2)")),__jsx("li",null,"i18next - NextJS."," ",__jsx("a",{href:"https://nextjs.org/docs/advanced-features/i18n-routing",rel:"noopener noreferrer",target:"_blank"},"(link1)"),__jsx("a",{href:"https://blog.logrocket.com/complete-guide-internationalization-nextjs/",rel:"noopener noreferrer",target:"_blank"},"(link2)"))))}const __WEBPACK_DEFAULT_EXPORT__={title:"Documentation/Internationalization"};var Internationalization={render:function render(){return __jsx(InternationalizationWithHooks,null)}};Internationalization.parameters=_objectSpread(_objectSpread({},Internationalization.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Internationalization=Internationalization.parameters)||void 0===_Internationalization?void 0:_Internationalization.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <InternationalizationWithHooks />\n}"},null===(_Internationalization2=Internationalization.parameters)||void 0===_Internationalization2||null===(_Internationalization3=_Internationalization2.docs)||void 0===_Internationalization3?void 0:_Internationalization3.source)})})},"./src/styles/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bf:()=>BoxDocs,NE:()=>Subtitle2Docs,Sh:()=>ListDocs,Vt:()=>Title1Docs,bM:()=>SpacerDocs,kO:()=>Subtitle1Docs,pR:()=>StrongDocs,uM:()=>Title2Docs,uT:()=>BoxColor});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/variable.ts"),BoxColor=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-0"})(["",";",";"," background-color:",";border-color:",";border-radius:",";border-style:solid;border-width:1px;display:flex;",";",";padding:",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref){var backgroundColor=_ref.backgroundColor,theme=_ref.theme;return backgroundColor||theme.bgColor.tertiary}),(function(_ref2){return _ref2.borderColor||"unset"}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref3){return void 0===_ref3.height?"height: 50px":void 0}),(function(_ref4){return void 0===_ref4.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref5){var rowGap=_ref5.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0}),(function(_ref6){return void 0===_ref6.width?"width: 100%":void 0})),BoxDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-1"})(["",";",";"," background-color:",";border-radius:",";",";display:flex;",";padding:",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref7){var backgroundColor=_ref7.backgroundColor,theme=_ref7.theme;return backgroundColor||theme.bgColor.tertiary}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref8){var columnGap=_ref8.columnGap;return columnGap?"column-gap: ".concat(columnGap):void 0}),(function(_ref9){return void 0===_ref9.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref10){var rowGap=_ref10.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0})),ListDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul.withConfig({componentId:"sc-60e7xr-2"})(["list-style-type:disc;margin-bottom:",";padding:0 ",";"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM),SpacerDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-3"})(["",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,(function(_ref11){return void 0===_ref11.height?"height: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),(function(_ref12){return void 0===_ref12.width?"width: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM):void 0})),StrongDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.strong.withConfig({componentId:"sc-60e7xr-4"})(["color:",";font-weight:700;"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandTertiary),Title1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1.withConfig({componentId:"sc-60e7xr-5"})(["color:",";",";",";",";@media (min-width:","){",";",";}"],(function(_ref13){return _ref13.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.orange}),(function(_ref14){return void 0===_ref14.fontSize?"font-size: 22px":void 0}),(function(_ref15){return void 0===_ref15.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref16){return void 0===_ref16.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref17){return void 0===_ref17.fontSize?"font-size: 28px":void 0}),(function(_ref18){return void 0===_ref18.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD," 0"):void 0})),Title2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2.withConfig({componentId:"sc-60e7xr-6"})(["color:",";",";",";",";@media (min-width:","){",";}"],(function(_ref19){return _ref19.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.blue}),(function(_ref20){return void 0===_ref20.fontSize?"font-size: 16px":void 0}),(function(_ref21){return void 0===_ref21.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref22){return void 0===_ref22.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0 ").concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref23){return void 0===_ref23.fontSize?"font-size: 18px":void 0})),Subtitle1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-7"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref24){return _ref24.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandSecondary}),(function(_ref25){return void 0===_ref25.fontSize?"font-size: 14px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref26){return void 0===_ref26.fontSize?"font-size: 16px":void 0})),Subtitle2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-8"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref27){var color=_ref27.color,theme=_ref27.theme;return color||theme.textColor.secondary}),(function(_ref28){return void 0===_ref28.fontSize?"font-size: 12px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref29){return void 0===_ref29.fontSize?"font-size: 14px":void 0}))}}]);