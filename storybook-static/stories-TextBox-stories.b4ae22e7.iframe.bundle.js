"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[13],{"./src/stories/TextField.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,OnlyAlphaNumeric:()=>OnlyAlphaNumeric,OnlyAlphabetic:()=>OnlyAlphabetic,OnlyNumeric:()=>OnlyNumeric,OnlyNumericWithDecimal:()=>OnlyNumericWithDecimal,WithoutCharCount:()=>WithoutCharCount,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/TextField.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{placeholder:{control:"text"},maxLength:{control:"number"},showCharCount:{control:"boolean"},allowedCharsType:{control:"select",options:["alphanumeric","numeric","numericWithDecimal","alphabetic",""]},customText:{control:"text"}},tags:["autodocs"]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{...args}),Default=Template.bind({});Default.args={placeholder:"10글자 이내로 입력해주세요",maxLength:10,showCharCount:!0,allowedCharsType:""};const WithoutCharCount=Template.bind({});WithoutCharCount.args={placeholder:"10글자 이내로 입력해주세요",maxLength:10,showCharCount:!1,allowedCharsType:""};const OnlyAlphaNumeric=Template.bind({});OnlyAlphaNumeric.args={placeholder:"영문과 숫자만 입력해주세요",maxLength:10,showCharCount:!0,allowedCharsType:"alphanumeric"};const OnlyNumericWithDecimal=Template.bind({});OnlyNumericWithDecimal.args={placeholder:"숫자와 소수점만 입력해주세요",maxLength:10,showCharCount:!0,allowedCharsType:"numericWithDecimal"};const OnlyNumeric=Template.bind({});OnlyNumeric.args={placeholder:"숫자만 입력해주세요",maxLength:10,showCharCount:!0,allowedCharsType:"numeric"};const OnlyAlphabetic=Template.bind({});OnlyAlphabetic.args={placeholder:"영문자만 입력해주세요",maxLength:10,showCharCount:!0,allowedCharsType:"alphabetic"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TextField {...args} />",...Default.parameters?.docs?.source}}},WithoutCharCount.parameters={...WithoutCharCount.parameters,docs:{...WithoutCharCount.parameters?.docs,source:{originalSource:"args => <TextField {...args} />",...WithoutCharCount.parameters?.docs?.source}}},OnlyAlphaNumeric.parameters={...OnlyAlphaNumeric.parameters,docs:{...OnlyAlphaNumeric.parameters?.docs,source:{originalSource:"args => <TextField {...args} />",...OnlyAlphaNumeric.parameters?.docs?.source}}},OnlyNumericWithDecimal.parameters={...OnlyNumericWithDecimal.parameters,docs:{...OnlyNumericWithDecimal.parameters?.docs,source:{originalSource:"args => <TextField {...args} />",...OnlyNumericWithDecimal.parameters?.docs?.source}}},OnlyNumeric.parameters={...OnlyNumeric.parameters,docs:{...OnlyNumeric.parameters?.docs,source:{originalSource:"args => <TextField {...args} />",...OnlyNumeric.parameters?.docs?.source}}},OnlyAlphabetic.parameters={...OnlyAlphabetic.parameters,docs:{...OnlyAlphabetic.parameters?.docs,source:{originalSource:"args => <TextField {...args} />",...OnlyAlphabetic.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutCharCount","OnlyAlphaNumeric","OnlyNumericWithDecimal","OnlyNumeric","OnlyAlphabetic"]},"./src/stories/TextField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const allowedCharsMap={alphanumeric:"a-zA-Z0-9",numeric:"0-9",numericWithDecimal:"0-9.",alphabetic:"a-zA-Z"},Div=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject||(_templateObject=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n"]))),Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.label(_templateObject2||(_templateObject2=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(["\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: gray;\n"]))),StyledTextField=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.input(_templateObject3||(_templateObject3=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(["\n  outline: none;\n  border: none;\n  padding: 8px;\n  border-radius: 0px;\n  font-size: 20px;\n  background-color: transparent;\n  transition: 200ms;\n  border-bottom: 2px solid gray;\n  &:focus {\n    border-bottom: 2px solid blue;\n  }\n"]))),MaxLength=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(_templateObject4||(_templateObject4=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(["\n  position: absolute;\n  bottom: 14px;\n  right: 8px;\n  font-size: 16px;\n  color: gray;\n  letter-spacing: -5%;\n  span {\n    color: black;\n  }\n"]))),CustomText=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject5||(_templateObject5=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 500;\n  margin-right: 10px;\n  margin-bottom: 8px;\n"]))),TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function TextField(_ref,ref){let{label,maxLength,allowedCharsType,customText,showCharCount,...props}=_ref;const inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>inputRef.current));const[length,setLength]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const current=inputRef.current,handler=e=>{setTimeout((()=>{const target=e.target;let inputValue=target.value;const allowedChars=allowedCharsMap[allowedCharsType]||"";if(allowedChars){new RegExp("^[".concat(allowedChars,"]*$")).test(inputValue)||(inputValue=inputValue.slice(0,inputValue.length-1))}inputValue.length<=maxLength?(target.value=inputValue,setLength(inputValue.length)):(target.value=inputValue.slice(0,maxLength),setLength(maxLength))}),0)};return current&&current.addEventListener("input",handler),()=>{current&&current.removeEventListener("input",handler)}}),[maxLength,allowedCharsType]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Div,{children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label,{children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledTextField,{ref:inputRef,maxLength,...props}),showCharCount&&maxLength&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(MaxLength,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:length})," / ",maxLength]}),!showCharCount&&customText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomText,{children:customText})]})}));TextField.defaultProps={showCharCount:!1,allowedCharsType:"",customText:""};const __WEBPACK_DEFAULT_EXPORT__=TextField;TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{showCharCount:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},allowedCharsType:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"enum",value:[{value:"'alphanumeric'",computed:!1},{value:"'numeric'",computed:!1},{value:"'numericWithDecimal'",computed:!1},{value:"'alphabetic'",computed:!1},{value:"''",computed:!1}]},required:!1},customText:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},maxLength:{description:"",type:{name:"number"},required:!0}}}}}]);