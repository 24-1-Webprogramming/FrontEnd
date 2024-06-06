"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[403],{"./src/stories/HomePage.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HomePage_stories});__webpack_require__("./node_modules/react/index.js");var Header=__webpack_require__("./src/stories/Header.jsx"),NavBar=__webpack_require__("./src/stories/NavBar.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HomePage=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Header.A,{showIcon:!0,text:"홈",backButton:!1}),(0,jsx_runtime.jsxs)("div",{style:{paddingTop:"60px",paddingBottom:"50px",minHeight:"calc(100vh - 110px)",overflowY:"auto"},children:[" ",(0,jsx_runtime.jsx)("h1",{children:"Welcome to Home Page!"}),(0,jsx_runtime.jsx)("p",{children:"This is the content of the home page."})]}),(0,jsx_runtime.jsx)(NavBar.A,{})]}),stories_HomePage=HomePage;HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"};const HomePage_stories={title:"Pages/HomePage",component:stories_HomePage,tags:["autodocs"]},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/stories/Header.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_IconButton__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/stories/IconButton.jsx")),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=_ref=>{let{showIcon,text,backButton}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TopLayout,{bgColor:"white",children:[backButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconButtonWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/Icons/Icon_arrow.svg",width:"40px",height:"40px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterContent,{children:showIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"/Logo-color.svg",alt:"로고"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:text})})]})};Header.defaultProps={showIcon:!1,text:"그룹 만들기",backButton:!0};const __WEBPACK_DEFAULT_EXPORT__=Header,TopLayout=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject||(_templateObject=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 49px;\n  z-index: 1000;\n  padding: 10px 10px 20px 10px;\n"])),(props=>props.bgColor)),IconButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2||(_templateObject2=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n"]))),CenterContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject3||(_templateObject3=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 21px;\n  font-weight: 600;\n  color: black;\n"])));Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{showIcon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},text:{defaultValue:{value:"'그룹 만들기'",computed:!1},description:"",type:{name:"string"},required:!1},backButton:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./src/stories/IconButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>stories_IconButton});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton_IconButton=_ref=>{let{src,text,textSize,textColor,borderRadius,width,height,iconWidth,iconHeight,iconTextSpacing,disabled,currentBackgroundColor,hoverBackgroundColor,disabledIcon,disabledFontcolor}=_ref;const[isHovered,setIsHovered]=(0,react.useState)(!1),buttonStyle={borderRadius,width,height,backgroundColor:isHovered?hoverBackgroundColor:currentBackgroundColor,cursor:disabled?"":"pointer",transition:"background-color 0.3s ease",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},iconStyle={width:"".concat(iconWidth,"px"),height:"".concat(iconHeight,"px")},textStyle={fontSize:textSize,color:disabled?disabledFontcolor:textColor,marginTop:"".concat(iconTextSpacing,"px"),whiteSpace:"nowrap"},iconSrc=disabled&&disabledIcon?disabledIcon:src;return(0,jsx_runtime.jsxs)("button",{className:"icon-button",style:buttonStyle,disabled,onMouseEnter:()=>setIsHovered(!0),onMouseLeave:()=>setIsHovered(!1),children:[(0,jsx_runtime.jsx)("img",{src:iconSrc,alt:"",style:iconStyle}),text&&(0,jsx_runtime.jsx)("span",{style:textStyle,children:text})]})};IconButton_IconButton.defaultProps={borderRadius:"50%",width:"40px",height:"40px",iconWidth:24,iconHeight:24,iconTextSpacing:6,disabled:!1,currentBackgroundColor:"transparent",hoverBackgroundColor:"rgba(0, 0, 0, 0.1)",textSize:"11px",textColor:"#B2BAC2",disabledIcon:null,disabledFontcolor:"#495EF6"};const stories_IconButton=IconButton_IconButton;IconButton_IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{borderRadius:{defaultValue:{value:"'50%'",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"'40px'",computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:"'40px'",computed:!1},description:"",type:{name:"string"},required:!1},iconWidth:{defaultValue:{value:"24",computed:!1},description:"",type:{name:"number"},required:!1},iconHeight:{defaultValue:{value:"24",computed:!1},description:"",type:{name:"number"},required:!1},iconTextSpacing:{defaultValue:{value:"6",computed:!1},description:"",type:{name:"number"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},currentBackgroundColor:{defaultValue:{value:"'transparent'",computed:!1},description:"",type:{name:"string"},required:!1},hoverBackgroundColor:{defaultValue:{value:"'rgba(0, 0, 0, 0.1)'",computed:!1},description:"",type:{name:"string"},required:!1},textSize:{defaultValue:{value:"'11px'",computed:!1},description:"",type:{name:"string"},required:!1},textColor:{defaultValue:{value:"'#B2BAC2'",computed:!1},description:"",type:{name:"string"},required:!1},disabledIcon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},disabledFontcolor:{defaultValue:{value:"'#495EF6'",computed:!1},description:"",type:{name:"string"},required:!1},src:{description:"",type:{name:"string"},required:!0},text:{description:"",type:{name:"string"},required:!1}}}},"./src/stories/NavBar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_IconButton__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/stories/IconButton.jsx")),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavBar=_ref=>{let{height,paddingTop,paddingBottom,activeState,setActiveState}=_ref;const width="".concat(20,"%"),handleButtonClick=newState=>{setActiveState(newState)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BottomLayout,{bgColor:"white",paddingTop,paddingBottom,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(NavBarContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/Icons/Icon_Home.svg",text:"홈",borderRadius:"0%",width,height,disabled:"Home"===activeState,disabledIcon:"/Icons/Icon_Home_c.svg",currentBackgroundColor:"transparent",hoverBackgroundColor:"rgba(0, 0, 0, 0.1)",onClick:()=>handleButtonClick("Home")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/Icons/Icon_exercise.svg",text:"운동",borderRadius:"0%",width,height,disabled:"Exercise"===activeState,disabledIcon:"/Icons/Icon_exercise_c.svg",currentBackgroundColor:"transparent",hoverBackgroundColor:"rgba(0, 0, 0, 0.1)",onClick:()=>handleButtonClick("Exercise")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/Icons/Icon_statistic.svg",text:"통계",borderRadius:"0%",width,height,disabled:"Statistic"===activeState,disabledIcon:"/Icons/Icon_statistic_c.svg",currentBackgroundColor:"transparent",hoverBackgroundColor:"rgba(0, 0, 0, 0.1)",onClick:()=>handleButtonClick("Statistic")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/Icons/Icon_group.svg",text:"그룹",borderRadius:"0%",width,height,disabled:"Group"===activeState,disabledIcon:"/Icons/Icon_group_c.svg",currentBackgroundColor:"transparent",hoverBackgroundColor:"rgba(0, 0, 0, 0.1)",onClick:()=>handleButtonClick("Group")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/Icons/Icon_mypage.svg",text:"마이페이지",borderRadius:"0%",width,height,disabled:"MyPage"===activeState,disabledIcon:"/Icons/Icon_mypage_c.svg",currentBackgroundColor:"transparent",hoverBackgroundColor:"rgba(0, 0, 0, 0.1)",onClick:()=>handleButtonClick("MyPage")})]})})};NavBar.defaultProps={height:"80px",paddingTop:"0px",paddingBottom:"0px",activeState:"Home"};const __WEBPACK_DEFAULT_EXPORT__=NavBar,BottomLayout=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject||(_templateObject=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n"])),(props=>props.bgColor)),NavBarContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2||(_templateObject2=(0,C_Users_shoonya_Desktop_MATITDA_my_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n"])));NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{height:{defaultValue:{value:"'80px'",computed:!1},description:"",type:{name:"string"},required:!1},paddingTop:{defaultValue:{value:"'0px'",computed:!1},description:"",type:{name:"string"},required:!1},paddingBottom:{defaultValue:{value:"'0px'",computed:!1},description:"",type:{name:"string"},required:!1},activeState:{defaultValue:{value:"'Home'",computed:!1},description:"",type:{name:"enum",value:[{value:"'Home'",computed:!1},{value:"'Exercise'",computed:!1},{value:"'Statistic'",computed:!1},{value:"'Group'",computed:!1},{value:"'MyPage'",computed:!1}]},required:!1},setActiveState:{description:"",type:{name:"func"},required:!0}}}}}]);