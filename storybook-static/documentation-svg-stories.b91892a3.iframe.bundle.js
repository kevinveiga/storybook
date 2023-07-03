"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[490],{"./src/storybook/documentation/svg.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SVG:()=>SVG,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SVG$parameters,_SVG$parameters2,_SVG$parameters2$docs,_home_kevinmveiga_Documents_repositories_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),_styles_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/storybook.ts"),_styles_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/text.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_kevinmveiga_Documents_repositories_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function SVGWithHooks(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Vt,null,"SVG"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Organização"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Os componentes de svgs estão na pasta "src/components/svg".')),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Exemplos"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Para criar um componente de svg, basta colocar os valores da viewBox e o(s) elemento(s) path. Ex:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Z,{language:"javascript"},'export function SvgPin({ ...props }: ISvgStyled): ReactElement {\n  return (\n    <SvgStyled {...props} viewBox="0 0 12 16" xmlns="http://www.w3. org/2000/svg">\n      <path d="M6 16s6-5.69 6-10A6 6 0 0 0 0 6c0 4.31 6 10 6  10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />\n    </SvgStyled>\n  );\n}')),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Dicas"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Erro com height ou width responsivo do Styled System:")),__jsx(_styles_text__WEBPACK_IMPORTED_MODULE_3__.P,null,"Um erro no console dos navegadores aparece quando se usa o objeto de responsividade do Styled System na propriedade height ou width no componente de svg. Ex:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"height={{ d: '18px', md: '28px' }}"),__jsx(_styles_text__WEBPACK_IMPORTED_MODULE_3__.P,null,"Para evitar este tipo de erro deve-se colocar a propriedade height ou width no elemento pai ao invés do próprio componente de svg."),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Otimização"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Limpar código desnecessário, converter stroke para path, combinar paths quando possível, deixar com o fill em default, tirar sobras da viewbox do svg, entre outras otimizações, tudo isso pode ser feito com o programa Inkscape"," ",__jsx("a",{href:"https://inkscape.org/release/inkscape-1.2.2/",rel:"noopener noreferrer",target:"_blank"},"(link)"),", abaixo os passos para otimização:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"1. Na aba Edit, abrir a janela XML editor, para poder visualizar a estrutura do svg, e na aba Object abrir a janela Fill and Stroke, para poder visualizar os preenchimentos de Fill e Stroke.",__jsx("br",null),"2. Selecionar todo o svg e desagrupar o máximo possível usando as teclas ctrl + shift + g.",__jsx("br",null),"3. Converter os Strokes ou Fonts para Paths.",__jsx("br",null),"4. Com o svg todo selecionado vá na aba Path e use a opção Union. (Usar nos Paths que são da mesma cor se deseja manter Paths com cores diferentes. Caso ocorra algum problema com o svg, verifique se os Strokes foram convertidos para Paths).",__jsx("br",null),"5. Selecionar todo o svg novamente e na aba Edit use o Resize Page to Selection.",__jsx("br",null),"6. Para salvar use a opção Save As e use Plain svg."),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.bM,null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Depois das otimizações no Inkscape, colocar o arquivo no site SvgOmg"," ",__jsx("a",{href:"https://jakearchibald.github.io/svgomg/"},"(link)"),", e use as seguintes configurações:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"1. Em Precision use o valor 2.",__jsx("br",null),"2. Marque a opção Style to attributes.",__jsx("br",null),"3. Marque a opção Prefer viewBox to width/height."),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Referências"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Inkscape."," ",__jsx("a",{href:"https://inkscape.org/release/inkscape-1.2.2/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"SvgOmg."," ",__jsx("a",{href:"https://jakearchibald.github.io/svgomg/",rel:"noopener noreferrer",target:"_blank"},"(link)"))))}const __WEBPACK_DEFAULT_EXPORT__={title:"Documentation/SVG"};var SVG={render:function render(){return __jsx(SVGWithHooks,null)}};SVG.parameters=_objectSpread(_objectSpread({},SVG.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SVG$parameters=SVG.parameters)||void 0===_SVG$parameters?void 0:_SVG$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <SVGWithHooks />\n}"},null===(_SVG$parameters2=SVG.parameters)||void 0===_SVG$parameters2||null===(_SVG$parameters2$docs=_SVG$parameters2.docs)||void 0===_SVG$parameters2$docs?void 0:_SVG$parameters2$docs.source)})})},"./src/styles/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bf:()=>BoxDocs,NE:()=>Subtitle2Docs,Sh:()=>ListDocs,Vt:()=>Title1Docs,bM:()=>SpacerDocs,kO:()=>Subtitle1Docs,pR:()=>StrongDocs,uM:()=>Title2Docs,uT:()=>BoxColor});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/variable.ts"),BoxColor=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-0"})(["",";",";"," background-color:",";border-color:",";border-radius:",";border-style:solid;border-width:1px;display:flex;",";",";padding:",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref){var backgroundColor=_ref.backgroundColor,theme=_ref.theme;return backgroundColor||theme.bgColor.tertiary}),(function(_ref2){return _ref2.borderColor||"unset"}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref3){return void 0===_ref3.height?"height: 50px":void 0}),(function(_ref4){return void 0===_ref4.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref5){var rowGap=_ref5.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0}),(function(_ref6){return void 0===_ref6.width?"width: 100%":void 0})),BoxDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-1"})(["",";",";"," background-color:",";border-radius:",";",";display:flex;",";padding:",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref7){var backgroundColor=_ref7.backgroundColor,theme=_ref7.theme;return backgroundColor||theme.bgColor.tertiary}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref8){var columnGap=_ref8.columnGap;return columnGap?"column-gap: ".concat(columnGap):void 0}),(function(_ref9){return void 0===_ref9.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref10){var rowGap=_ref10.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0})),ListDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul.withConfig({componentId:"sc-60e7xr-2"})(["list-style-type:disc;margin-bottom:",";padding:0 ",";"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM),SpacerDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-3"})(["",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,(function(_ref11){return void 0===_ref11.height?"height: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),(function(_ref12){return void 0===_ref12.width?"width: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM):void 0})),StrongDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.strong.withConfig({componentId:"sc-60e7xr-4"})(["color:",";font-weight:700;"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandTertiary),Title1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1.withConfig({componentId:"sc-60e7xr-5"})(["color:",";",";",";",";@media (min-width:","){",";",";}"],(function(_ref13){return _ref13.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.orange}),(function(_ref14){return void 0===_ref14.fontSize?"font-size: 22px":void 0}),(function(_ref15){return void 0===_ref15.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref16){return void 0===_ref16.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref17){return void 0===_ref17.fontSize?"font-size: 28px":void 0}),(function(_ref18){return void 0===_ref18.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD," 0"):void 0})),Title2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2.withConfig({componentId:"sc-60e7xr-6"})(["color:",";",";",";",";@media (min-width:","){",";}"],(function(_ref19){return _ref19.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.blue}),(function(_ref20){return void 0===_ref20.fontSize?"font-size: 16px":void 0}),(function(_ref21){return void 0===_ref21.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref22){return void 0===_ref22.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0 ").concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref23){return void 0===_ref23.fontSize?"font-size: 18px":void 0})),Subtitle1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-7"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref24){return _ref24.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandSecondary}),(function(_ref25){return void 0===_ref25.fontSize?"font-size: 14px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref26){return void 0===_ref26.fontSize?"font-size: 16px":void 0})),Subtitle2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-8"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref27){var color=_ref27.color,theme=_ref27.theme;return color||theme.textColor.secondary}),(function(_ref28){return void 0===_ref28.fontSize?"font-size: 12px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref29){return void 0===_ref29.fontSize?"font-size: 14px":void 0}))},"./src/styles/text.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dr:()=>Span,Gn:()=>Title4,IV:()=>Title5,P:()=>P,Rn:()=>Title2,d1:()=>Subtitle1,wo:()=>Title1,y$:()=>Title3});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/variable.ts"),title=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["",";",";",";color:",";",";",";",";z-index:1;",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,(function(_ref){return _ref.color||"unset"}),(function(_ref2){return void 0===_ref2.lineHeight?"line-height: 1.3":void 0}),(function(_ref3){var align=_ref3.align;return"center"===align?"margin-left: auto; margin-right: auto; text-align: center;":"right"===align?"margin-left: auto; margin-right: 0; text-align: right;":void 0}),(function(_ref4){var whiteSpace=_ref4.whiteSpace;return whiteSpace?"white-space: ".concat(whiteSpace):void 0}),(function(_ref5){var textTransform=_ref5.textTransform,textTransformFirstLetter=_ref5.textTransformFirstLetter;return textTransform?"text-transform: ".concat(textTransform):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::first-letter{text-transform:",";}"],null!=textTransformFirstLetter?textTransformFirstLetter:"capitalize")}),(function(_ref6){var lineColor=_ref6.lineColor;return lineColor?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::after{background-color:",";content:' ';display:block;height:1px;margin:"," auto;width:100%;}"],lineColor,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0})),P=(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.br.withConfig({componentId:"sc-1utvm0x-0"})(["",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK),styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-1utvm0x-1"})(["",";",";",";color:",";",";",";",";@media (min-width:","){",";}",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,(function(_ref7){return _ref7.color||"unset"}),(function(_ref8){return void 0===_ref8.fontSize?"font-size: 14px":void 0}),(function(_ref9){var textDecoration=_ref9.textDecoration;return textDecoration?"text-decoration: ".concat(textDecoration):void 0}),(function(_ref10){var whiteSpace=_ref10.whiteSpace;return whiteSpace?"white-space: ".concat(whiteSpace):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref11){return void 0===_ref11.fontSize?"font-size: 16px":void 0}),(function(_ref12){var textTransform=_ref12.textTransform,textTransformFirstLetter=_ref12.textTransformFirstLetter;return textTransform?"text-transform: ".concat(textTransform):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::first-letter{text-transform:",";}"],null!=textTransformFirstLetter?textTransformFirstLetter:"capitalize")}))),Span=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.withConfig({componentId:"sc-1utvm0x-2"})(["",";",";",";color:",";",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,(function(_ref13){return _ref13.color||"unset"}),(function(_ref14){var textDecoration=_ref14.textDecoration;return textDecoration?"text-decoration: ".concat(textDecoration):void 0}),(function(_ref15){var whiteSpace=_ref15.whiteSpace;return whiteSpace?"white-space: ".concat(whiteSpace):void 0}),(function(_ref16){var textTransform=_ref16.textTransform,textTransformFirstLetter=_ref16.textTransformFirstLetter;return textTransform?"text-transform: ".concat(textTransform):textTransformFirstLetter?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::first-letter{text-transform:",";}"],textTransformFirstLetter):void 0})),Subtitle1=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-1utvm0x-3"})(["",";",";",";@media (min-width:","){",";}"],title,(function(_ref17){return void 0===_ref17.fontSize?"font-size: 10px":void 0}),(function(_ref18){return void 0===_ref18.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref19){return void 0===_ref19.fontSize?"font-size: 12px":void 0})),Title1=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1.withConfig({componentId:"sc-1utvm0x-4"})(["",";font-family:",";",";",";letter-spacing:1.5px;",";@media (min-width:","){",";",";}"],title,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontSecondary,(function(_ref20){return void 0===_ref20.fontSize?"font-size: 48px":void 0}),(function(_ref21){return void 0===_ref21.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),(function(_ref22){return void 0===_ref22.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref23){return void 0===_ref23.fontSize?"font-size: 76px":void 0}),(function(_ref24){return void 0===_ref24.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0})),Title2=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2.withConfig({componentId:"sc-1utvm0x-5"})(["",";",";",";",";@media (min-width:","){",";}"],title,(function(_ref25){return void 0===_ref25.fontSize?"font-size: 22px":void 0}),(function(_ref26){return void 0===_ref26.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref27){return void 0===_ref27.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref28){return void 0===_ref28.fontSize?"font-size: 26px":void 0})),Title3=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3.withConfig({componentId:"sc-1utvm0x-6"})(["",";",";",";",";@media (min-width:","){",";}"],title,(function(_ref29){return void 0===_ref29.fontSize?"font-size: 20px":void 0}),(function(_ref30){return void 0===_ref30.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref31){return void 0===_ref31.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref32){return void 0===_ref32.fontSize?"font-size: 24px":void 0})),Title4=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h4.withConfig({componentId:"sc-1utvm0x-7"})(["",";",";",";",";@media (min-width:","){",";}"],title,(function(_ref33){return void 0===_ref33.fontSize?"font-size: 18px":void 0}),(function(_ref34){return void 0===_ref34.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),(function(_ref35){return void 0===_ref35.mb?"margin-bottom: 2px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref36){return void 0===_ref36.fontSize?"font-size: 20px":void 0})),Title5=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h5.withConfig({componentId:"sc-1utvm0x-8"})(["",";",";",";@media (min-width:","){",";}"],title,(function(_ref37){return void 0===_ref37.fontSize?"font-size: 12px":void 0}),(function(_ref38){return void 0===_ref38.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref39){return void 0===_ref39.fontSize?"font-size: 14px":void 0}))}}]);