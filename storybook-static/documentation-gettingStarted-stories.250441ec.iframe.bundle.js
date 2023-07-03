"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4096],{"./src/storybook/documentation/gettingStarted.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GettingStarted:()=>GettingStarted,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _GettingStarted$param,_GettingStarted$param2,_GettingStarted$param3,_home_kevinmveiga_Documents_repositories_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),_styles_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/storybook.ts"),_styles_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/text.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_kevinmveiga_Documents_repositories_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function GettingStartedWithHooks(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Vt,null,"Getting Started"),__jsx(_styles_text__WEBPACK_IMPORTED_MODULE_3__.P,null,"Documentação Front-end para os projetos em React, com a finalidade de manter a padronização, organização, metodologias e boas práticas no desenvolvimento."),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Requisitos de instalação (No Linux - Debian)"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"GIT"),__jsx("i",null,"$ sudo apt install git-all"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.bM,null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"NodeJS"),__jsx("i",null,"$ sudo apt install nodejs"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.bM,null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"NVM"),__jsx("i",null,"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.bM,null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"Yarn"),__jsx("i",null,"$ npm install -g yarn"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.bM,null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"VS Code"),__jsx("i",null,__jsx("a",{href:"https://code.visualstudio.com/docs/setup/linux"},"Link")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Configurações do VS Code"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"Incluir no arquivo settings.json:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Z,{language:"javascript"},'"[javascript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n},\n"editor.formatOnSave": true,\n"files.eol": "\\n",\n"files.watcherExclude": {\n    "**/.git/objects/**": true,\n    "**/.git/subtree-cache/**": true,\n    "**/node_modules/*/**": true\n},\n"git.autofetch": true,\n"javascript.updateImportsOnFileMove.enabled": "always",\n"typescript.updateImportsOnFileMove.enabled": "always"')),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"Instalar as extensões:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"EditorConfig (nome no VS Code: EditorConfig for VS Code)"),__jsx("li",null,"ESLint (nome no VS Code: ESLint)"),__jsx("li",null,"Prettier (nome no VS Code: Prettier - Code formatter)"),__jsx("li",null,"Styled Components (nome no VS Code: styled-components.vscode-styled-components)")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Padrões de nomenclatura"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"Idioma:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Inglês em todo o projeto")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"Nomes no singular:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Todas as pastas, exceto as pastas na raiz de "src".',__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,'Ex: "src/pages";')),__jsx("li",null,'Nomes de arquivos em geral, exceto arquivos específicos dentro das pastas em "src/pages" e "src/styles/pages".',__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,'Ex: "src/pages/noticia.tsx", "src/pages/noticias.tsx", "src/styles/pages/homeStyled.ts".'))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"Nomes no plural:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Todas as pastas na raiz de "src";'),__jsx("li",null,"Nomes de arquivos específicos, como por exemplo, que trazem uma lista de dados.",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,'Ex: "src/pages/noticias.tsx", "src/styles/pages/noticiasStyled.ts".'))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"lowerCamelCase:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Pastas, nomes de arquivos, rotas dinâmicas do NextJS, custom hooks, variáveis, funções, propriedades, métodos.",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Ex: useAuth(), functionName."))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"UpperCamelCase:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Nomes dos componentes, nomes de styled components, imports, interfaces.",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Ex: Home(), AuthProvider()."))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"spinal-case:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Nomes de arquivos dentro da pasta "src/pages", nomes de arquivos de imagens ou svgs, nomes de classes CSS.',__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,'Ex: "src/pages/fale-conosco.tsx", "public/images/banner-principal.jpg", "public/svgs/svg-user.svg", ".has-value";')),__jsx("li",null,"Com a exceção de rotas dinâmicas.",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Ex: [productSlug], [subProductSlug].tsx."))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Organização de pastas"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"PUBLIC:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"images:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Imagens do projeto.")),__jsx("li",null,"json:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Arquivos json normalmente usados para mock.")),__jsx("li",null,"locales:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Pastas e arquivos de idiomas."))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.kO,null,"SRC:"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"components:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Componentes de uso em geral no projeto e componentes de estilo específicos desses componentes.")),__jsx("li",null,"helpers:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Funções úteis de uso em geral no projeto.")),__jsx("li",null,"pages:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Arquitetura do NextJS.")),__jsx("li",null,"services:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Funções de requisição que utilizam o Axios e configuração de middleware.")),__jsx("li",null,"stores:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Actions, contexts, reducers e custom hooks.")),__jsx("li",null,"styles:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Componentes de estilo de uso geral do projeto."))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Ambiente de desenvolvimento"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Na primeira vez ou quando for incluída uma nova biblioteca:",__jsx("br",null),__jsx("i",null,"$ yarn install")),__jsx("li",null,"Iniciar ambiente de desenvolvimento:",__jsx("br",null),__jsx("i",null,"$ yarn dev")),__jsx("li",null,"Testar ambiente de produção:",__jsx("br",null),__jsx("i",null,"$ yarn build",__jsx("br",null),"e depois:",__jsx("br",null),"$ yarn start")),__jsx("li",null,"Testar verificação do Prettier:",__jsx("br",null),__jsx("i",null,"$ yarn prettier")),__jsx("li",null,"Testar verificação do Lint:",__jsx("br",null),__jsx("i",null,"$ yarn lint")),__jsx("li",null,"Atualizar dependências:",__jsx("br",null),__jsx("i",null,"$ yarn upgrade-interactive --latest"))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Git"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.pR,null,"SEMPRE")," manter a branch da tarefa atualizada."),__jsx("li",null,"Maneira correta de fazer merge remotamente:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Primeiro esteja na branch que vai receber o merge:"),__jsx("i",null,"$ git checkout ","<nome_branch>"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Depois faça o merge usando origin:"),__jsx("i",null,"$ git merge origin dev"))),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Boas práticas"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Funções de JavaScript compartilhadas estão na pasta "src/helpers", verifique se já não existe uma função para o que precisa ser feito, evite código duplicado.'),__jsx("li",null,"Coloque nomes de maneira que façam sentido nas variáveis, funções, componentes, etc, não utilize nomes como: shortDate2, shortDate3. De preferência para seguir a mesma regra de outras coisas que já existem no projeto.")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Processos no desenvolvimento do código"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Responsividade básica:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"O código deve ser pensado para atender pelo menos a responsividade básica, a principal forma de fazer isso é utilizando o Flex, para ajustes finos pode ser usado a responsividade na propriedade do componente de estilo ou dentro do estilo.")),__jsx("li",null,"Uso de temas:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Os estilos de CSS devem seguir as regras de utilização de temas, ou seja, se uma cor pode ter sua variação de tema, como por exemplo um fundo que no tema escuro tem a cor rgba(42, 45, 49, 1) e no tema claro tem a cor rgba(255, 255, 255, 1), então este estilo não pode ter uma cor fixa.")),__jsx("li",null,"Idiomas:",__jsx("br",null),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.NE,null,"Deve ser utilizado o i18Next em todos os textos que podem ter alteração de idioma."))))}const __WEBPACK_DEFAULT_EXPORT__={title:"Documentation/Getting Started"};var GettingStarted={render:function render(){return __jsx(GettingStartedWithHooks,null)}};GettingStarted.parameters=_objectSpread(_objectSpread({},GettingStarted.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_GettingStarted$param=GettingStarted.parameters)||void 0===_GettingStarted$param?void 0:_GettingStarted$param.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <GettingStartedWithHooks />\n}"},null===(_GettingStarted$param2=GettingStarted.parameters)||void 0===_GettingStarted$param2||null===(_GettingStarted$param3=_GettingStarted$param2.docs)||void 0===_GettingStarted$param3?void 0:_GettingStarted$param3.source)})})},"./src/styles/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bf:()=>BoxDocs,NE:()=>Subtitle2Docs,Sh:()=>ListDocs,Vt:()=>Title1Docs,bM:()=>SpacerDocs,kO:()=>Subtitle1Docs,pR:()=>StrongDocs,uM:()=>Title2Docs,uT:()=>BoxColor});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/variable.ts"),BoxColor=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-0"})(["",";",";"," background-color:",";border-color:",";border-radius:",";border-style:solid;border-width:1px;display:flex;",";",";padding:",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref){var backgroundColor=_ref.backgroundColor,theme=_ref.theme;return backgroundColor||theme.bgColor.tertiary}),(function(_ref2){return _ref2.borderColor||"unset"}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref3){return void 0===_ref3.height?"height: 50px":void 0}),(function(_ref4){return void 0===_ref4.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref5){var rowGap=_ref5.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0}),(function(_ref6){return void 0===_ref6.width?"width: 100%":void 0})),BoxDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-1"})(["",";",";"," background-color:",";border-radius:",";",";display:flex;",";padding:",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref7){var backgroundColor=_ref7.backgroundColor,theme=_ref7.theme;return backgroundColor||theme.bgColor.tertiary}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref8){var columnGap=_ref8.columnGap;return columnGap?"column-gap: ".concat(columnGap):void 0}),(function(_ref9){return void 0===_ref9.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref10){var rowGap=_ref10.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0})),ListDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul.withConfig({componentId:"sc-60e7xr-2"})(["list-style-type:disc;margin-bottom:",";padding:0 ",";"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM),SpacerDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-3"})(["",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,(function(_ref11){return void 0===_ref11.height?"height: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),(function(_ref12){return void 0===_ref12.width?"width: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM):void 0})),StrongDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.strong.withConfig({componentId:"sc-60e7xr-4"})(["color:",";font-weight:700;"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandTertiary),Title1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1.withConfig({componentId:"sc-60e7xr-5"})(["color:",";",";",";",";@media (min-width:","){",";",";}"],(function(_ref13){return _ref13.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.orange}),(function(_ref14){return void 0===_ref14.fontSize?"font-size: 22px":void 0}),(function(_ref15){return void 0===_ref15.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref16){return void 0===_ref16.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref17){return void 0===_ref17.fontSize?"font-size: 28px":void 0}),(function(_ref18){return void 0===_ref18.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD," 0"):void 0})),Title2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2.withConfig({componentId:"sc-60e7xr-6"})(["color:",";",";",";",";@media (min-width:","){",";}"],(function(_ref19){return _ref19.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.blue}),(function(_ref20){return void 0===_ref20.fontSize?"font-size: 16px":void 0}),(function(_ref21){return void 0===_ref21.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref22){return void 0===_ref22.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0 ").concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref23){return void 0===_ref23.fontSize?"font-size: 18px":void 0})),Subtitle1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-7"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref24){return _ref24.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandSecondary}),(function(_ref25){return void 0===_ref25.fontSize?"font-size: 14px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref26){return void 0===_ref26.fontSize?"font-size: 16px":void 0})),Subtitle2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-8"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref27){var color=_ref27.color,theme=_ref27.theme;return color||theme.textColor.secondary}),(function(_ref28){return void 0===_ref28.fontSize?"font-size: 12px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref29){return void 0===_ref29.fontSize?"font-size: 14px":void 0}))},"./src/styles/text.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dr:()=>Span,Gn:()=>Title4,IV:()=>Title5,P:()=>P,Rn:()=>Title2,d1:()=>Subtitle1,wo:()=>Title1,y$:()=>Title3});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/variable.ts"),title=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["",";",";",";color:",";",";",";",";z-index:1;",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,(function(_ref){return _ref.color||"unset"}),(function(_ref2){return void 0===_ref2.lineHeight?"line-height: 1.3":void 0}),(function(_ref3){var align=_ref3.align;return"center"===align?"margin-left: auto; margin-right: auto; text-align: center;":"right"===align?"margin-left: auto; margin-right: 0; text-align: right;":void 0}),(function(_ref4){var whiteSpace=_ref4.whiteSpace;return whiteSpace?"white-space: ".concat(whiteSpace):void 0}),(function(_ref5){var textTransform=_ref5.textTransform,textTransformFirstLetter=_ref5.textTransformFirstLetter;return textTransform?"text-transform: ".concat(textTransform):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::first-letter{text-transform:",";}"],null!=textTransformFirstLetter?textTransformFirstLetter:"capitalize")}),(function(_ref6){var lineColor=_ref6.lineColor;return lineColor?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::after{background-color:",";content:' ';display:block;height:1px;margin:"," auto;width:100%;}"],lineColor,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0})),P=(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.br.withConfig({componentId:"sc-1utvm0x-0"})(["",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK),styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-1utvm0x-1"})(["",";",";",";color:",";",";",";",";@media (min-width:","){",";}",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,(function(_ref7){return _ref7.color||"unset"}),(function(_ref8){return void 0===_ref8.fontSize?"font-size: 14px":void 0}),(function(_ref9){var textDecoration=_ref9.textDecoration;return textDecoration?"text-decoration: ".concat(textDecoration):void 0}),(function(_ref10){var whiteSpace=_ref10.whiteSpace;return whiteSpace?"white-space: ".concat(whiteSpace):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref11){return void 0===_ref11.fontSize?"font-size: 16px":void 0}),(function(_ref12){var textTransform=_ref12.textTransform,textTransformFirstLetter=_ref12.textTransformFirstLetter;return textTransform?"text-transform: ".concat(textTransform):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::first-letter{text-transform:",";}"],null!=textTransformFirstLetter?textTransformFirstLetter:"capitalize")}))),Span=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.withConfig({componentId:"sc-1utvm0x-2"})(["",";",";",";color:",";",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp,(function(_ref13){return _ref13.color||"unset"}),(function(_ref14){var textDecoration=_ref14.textDecoration;return textDecoration?"text-decoration: ".concat(textDecoration):void 0}),(function(_ref15){var whiteSpace=_ref15.whiteSpace;return whiteSpace?"white-space: ".concat(whiteSpace):void 0}),(function(_ref16){var textTransform=_ref16.textTransform,textTransformFirstLetter=_ref16.textTransformFirstLetter;return textTransform?"text-transform: ".concat(textTransform):textTransformFirstLetter?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&::first-letter{text-transform:",";}"],textTransformFirstLetter):void 0})),Subtitle1=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-1utvm0x-3"})(["",";",";",";@media (min-width:","){",";}"],title,(function(_ref17){return void 0===_ref17.fontSize?"font-size: 10px":void 0}),(function(_ref18){return void 0===_ref18.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref19){return void 0===_ref19.fontSize?"font-size: 12px":void 0})),Title1=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1.withConfig({componentId:"sc-1utvm0x-4"})(["",";font-family:",";",";",";letter-spacing:1.5px;",";@media (min-width:","){",";",";}"],title,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontSecondary,(function(_ref20){return void 0===_ref20.fontSize?"font-size: 48px":void 0}),(function(_ref21){return void 0===_ref21.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),(function(_ref22){return void 0===_ref22.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref23){return void 0===_ref23.fontSize?"font-size: 76px":void 0}),(function(_ref24){return void 0===_ref24.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0})),Title2=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2.withConfig({componentId:"sc-1utvm0x-5"})(["",";",";",";",";@media (min-width:","){",";}"],title,(function(_ref25){return void 0===_ref25.fontSize?"font-size: 22px":void 0}),(function(_ref26){return void 0===_ref26.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref27){return void 0===_ref27.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref28){return void 0===_ref28.fontSize?"font-size: 26px":void 0})),Title3=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3.withConfig({componentId:"sc-1utvm0x-6"})(["",";",";",";",";@media (min-width:","){",";}"],title,(function(_ref29){return void 0===_ref29.fontSize?"font-size: 20px":void 0}),(function(_ref30){return void 0===_ref30.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref31){return void 0===_ref31.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref32){return void 0===_ref32.fontSize?"font-size: 24px":void 0})),Title4=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h4.withConfig({componentId:"sc-1utvm0x-7"})(["",";",";",";",";@media (min-width:","){",";}"],title,(function(_ref33){return void 0===_ref33.fontSize?"font-size: 18px":void 0}),(function(_ref34){return void 0===_ref34.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),(function(_ref35){return void 0===_ref35.mb?"margin-bottom: 2px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref36){return void 0===_ref36.fontSize?"font-size: 20px":void 0})),Title5=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h5.withConfig({componentId:"sc-1utvm0x-8"})(["",";",";",";@media (min-width:","){",";}"],title,(function(_ref37){return void 0===_ref37.fontSize?"font-size: 12px":void 0}),(function(_ref38){return void 0===_ref38.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightNormal):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref39){return void 0===_ref39.fontSize?"font-size: 14px":void 0}))}}]);