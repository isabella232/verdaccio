/*!
 * 
 *     Name: 4
 *     Generated on: 1535485020797
 *     Package: verdaccio
 *     Version: v3.6.0
 *     License: MIT
 *     
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{686:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regenerator=__webpack_require__(706),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(707),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_getPrototypeOf=__webpack_require__(82),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(3),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(4),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(5),_inherits3=_interopRequireDefault(_inherits2),_class,_temp,_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(6),_propTypes2=_interopRequireDefault(_propTypes),_elementReact=__webpack_require__(239),_isEmpty=__webpack_require__(710),_isEmpty2=_interopRequireDefault(_isEmpty),_debounce=__webpack_require__(922),_debounce2=_interopRequireDefault(_debounce),_api=__webpack_require__(696),_api2=_interopRequireDefault(_api),_PackageList=__webpack_require__(925),_PackageList2=_interopRequireDefault(_PackageList),_Search=__webpack_require__(947),_Search2=_interopRequireDefault(_Search);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__(21).enterModule;e&&e(module)}();var Home=(_temp=_class=function(_React$Component){function Home(e){(0,_classCallCheck3.default)(this,Home);var t=(0,_possibleConstructorReturn3.default)(this,(Home.__proto__||(0,_getPrototypeOf2.default)(Home)).call(this,e));return t.state={loading:!0,fistTime:!0,query:""},t.handleSearchInput=t.handleSearchInput.bind(t),t.searchPackage=(0,_debounce2.default)(t.searchPackage,800),t}return(0,_inherits3.default)(Home,_React$Component),(0,_createClass3.default)(Home,[{key:"componentDidMount",value:function(){this.loadPackages()}},{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&(this.req&&this.req.abort&&this.req.abort(),this.setState({loading:!0}),""!==t.query&&""===this.state.query?this.loadPackages():this.searchPackage(this.state.query))}},{key:"loadPackages",value:function(){var e=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(){return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_api2.default.request("packages","GET");case 3:this.req=e.sent,""===this.state.query&&this.setState({packages:this.req,loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),_elementReact.MessageBox.msgbox({type:"error",title:"Warning",message:"Unable to load package list: "+e.t0.message});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"searchPackage",value:function(){var e=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function e(t){return _regenerator2.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_api2.default.request("/search/"+t,"GET");case 3:this.req=e.sent,this.state.query===t&&this.setState({packages:this.req,fistTime:!1,loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),_elementReact.MessageBox.msgbox({type:"error",title:"Warning",message:"Unable to get search result, please try again later."});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSearchInput",value:function(e){this.setState({query:e.target.value.trim()})}},{key:"isTherePackages",value:function(){return(0,_isEmpty2.default)(this.state.packages)}},{key:"render",value:function(){return _react2.default.createElement("div",{style:{marginTop:"70px"}},this.renderSearchBar(),this.state.loading?this.renderLoading():this.renderPackageList())}},{key:"renderSearchBar",value:function(){if(!this.isTherePackages()||!this.state.fistTime)return _react2.default.createElement(_Search2.default,{handleSearchInput:this.handleSearchInput})}},{key:"renderLoading",value:function(){return _react2.default.createElement(_elementReact.Loading,{text:"Loading..."})}},{key:"renderPackageList",value:function(){return _react2.default.createElement(_PackageList2.default,{help:this.state.fistTime,packages:this.state.packages})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Home}(_react2.default.Component),_class.propTypes={children:_propTypes2.default.element},_temp);exports.default=Home,function(){var e=__webpack_require__(21).default,t=__webpack_require__(21).leaveModule;e&&(e.register(Home,"Home","/Users/jding/src/@lyft/verdaccio/src/webui/modules/home/index.js"),t(module))}()}).call(this,__webpack_require__(71)(module))},696:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray2=__webpack_require__(737),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_extends2=__webpack_require__(14),_extends3=_interopRequireDefault(_extends2),_promise=__webpack_require__(708),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(3),_createClass3=_interopRequireDefault(_createClass2),_storage=__webpack_require__(718),_storage2=_interopRequireDefault(_storage);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__(21).enterModule;e&&e(module)}();var API=function(){function API(){(0,_classCallCheck3.default)(this,API)}return(0,_createClass3.default)(API,[{key:"request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!window.VERDACCIO_API_URL)throw new Error("VERDACCIO_API_URL is not defined!");var r=_storage2.default.getItem("token");function s(e){if(e.headers){var t=e.headers.get("Content-Type");if(t.includes("application/pdf"))return _promise2.default.all([e.ok,e.blob()]);if(t.includes("application/json"))return _promise2.default.all([e.ok,e.json()]);if(t.includes("text/"))return _promise2.default.all([e.ok,e.text()])}}return r&&(a.headers||(a.headers={}),a.headers.authorization=r),["http://","https://","//"].some(function(t){return e.startsWith(t)})||(e=window.VERDACCIO_API_URL+e),new _promise2.default(function(r,n){fetch(e,(0,_extends3.default)({method:t,credentials:"same-origin"},a)).then(s).then(function(e){var t=(0,_slicedToArray3.default)(e,2),a=t[0],s=t[1];a?r(s):n(s)})})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),API}(),_default=new API;exports.default=_default,function(){var e=__webpack_require__(21).default,t=__webpack_require__(21).leaveModule;e&&(e.register(API,"API","/Users/jding/src/@lyft/verdaccio/src/webui/utils/api.js"),e.register(_default,"default","/Users/jding/src/@lyft/verdaccio/src/webui/utils/api.js"),t(module))}()}).call(this,__webpack_require__(71)(module))},705:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.TIMEFORMAT=void 0;var r=u(a(725));t.formatLicense=o,t.formatRepository=_,t.formatAuthor=d,t.getLastUpdatedPackageTime=p,t.getRecentReleases=f,t.formatDate=g,t.formatDateDistance=m;var s=u(a(724)),n=u(a(690)),i=u(a(754)),c=u(a(758));function u(e){return e&&e.__esModule?e:{default:e}}!function(){var t=a(21).enterModule;t&&t(e)}();var l=t.TIMEFORMAT="YYYY/MM/DD, HH:mm:ss";function o(e){return(0,s.default)(e)?e:(0,n.default)(e)&&e.type?e.type:null}function _(e){return(0,s.default)(e)?e:(0,n.default)(e)&&e.url?e.url:null}function d(e){return(0,s.default)(e)?e:(0,n.default)(e)&&e.name?e.name:null}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0;return(0,r.default)(e).forEach(function(a){var r=e[a];r.fetched>t&&(t=r.fetched)}),t?g(t):""}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.default)(e).map(function(t){return{version:t,time:g(e[t])}});return t.slice(t.length-3,t.length).reverse()}function g(e){return(0,i.default)(new Date(e),l)}function m(e){return(0,c.default)(new Date(e))}!function(){var t=a(21).default,r=a(21).leaveModule;t&&(t.register(l,"TIMEFORMAT","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(o,"formatLicense","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(_,"formatRepository","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(d,"formatAuthor","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(p,"getLastUpdatedPackageTime","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(f,"getRecentReleases","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(g,"formatDate","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),t.register(m,"formatDateDistance","/Users/jding/src/@lyft/verdaccio/src/webui/utils/package.js"),r(e))}()}).call(this,a(71)(e))},718:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(a(738));!function(){var t=a(21).enterModule;t&&t(e)}();var s=void 0;try{localStorage.setItem("__TEST__",""),localStorage.removeItem("__TEST__"),s=localStorage}catch(e){s=r.default}var n=s;t.default=n,function(){var t=a(21).default,r=a(21).leaveModule;t&&(t.register(s,"storage","/Users/jding/src/@lyft/verdaccio/src/webui/utils/storage.js"),t.register(n,"default","/Users/jding/src/@lyft/verdaccio/src/webui/utils/storage.js"),r(e))}()}).call(this,a(71)(e))},726:function(e,t,a){"use strict";(function(e){function r(){return""+location.origin+("/"===location.pathname?"":location.pathname)}function s(e){return r()+"/#/detail/"+e}Object.defineProperty(t,"__esModule",{value:!0}),t.getRegistryURL=r,t.getDetailPageURL=s,function(){var t=a(21).enterModule;t&&t(e)}(),function(){var t=a(21).default,n=a(21).leaveModule;t&&(t.register(r,"getRegistryURL","/Users/jding/src/@lyft/verdaccio/src/webui/utils/url.js"),t.register(s,"getDetailPageURL","/Users/jding/src/@lyft/verdaccio/src/webui/utils/url.js"),n(e))}()}).call(this,a(71)(e))},925:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _getPrototypeOf=__webpack_require__(82),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(3),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(4),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(5),_inherits3=_interopRequireDefault(_inherits2),_class,_temp,_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(6),_propTypes2=_interopRequireDefault(_propTypes),_isEmpty=__webpack_require__(710),_isEmpty2=_interopRequireDefault(_isEmpty),_Package=__webpack_require__(926),_Package2=_interopRequireDefault(_Package),_Help=__webpack_require__(929),_Help2=_interopRequireDefault(_Help),_NoItems=__webpack_require__(942),_NoItems2=_interopRequireDefault(_NoItems),_package=__webpack_require__(705),_packageList=__webpack_require__(945),_packageList2=_interopRequireDefault(_packageList);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__(21).enterModule;e&&e(module)}();var PackageList=(_temp=_class=function(_React$Component){function PackageList(){return(0,_classCallCheck3.default)(this,PackageList),(0,_possibleConstructorReturn3.default)(this,(PackageList.__proto__||(0,_getPrototypeOf2.default)(PackageList)).apply(this,arguments))}return(0,_inherits3.default)(PackageList,_React$Component),(0,_createClass3.default)(PackageList,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"package-list-items"},_react2.default.createElement("div",{className:_packageList2.default.pkgContainer},this.renderTitle(),this.isTherePackages()?this.renderList():this.renderOptions()))}},{key:"renderTitle",value:function(){if(!1!==this.isTherePackages())return _react2.default.createElement("h1",{className:_packageList2.default.listTitle},this.props.packages.length," Packages")}},{key:"renderList",value:function(){return this.props.packages.map(function(e,t){var a=e.name,r=e.version,s=e.description,n=e.time,i=(0,_package.formatAuthor)(e.author),c=(0,_package.formatLicense)(e.license);return _react2.default.createElement("li",{key:t},_react2.default.createElement(_Package2.default,{name:a,version:r,author:i,description:s,license:c,time:n}))})}},{key:"renderOptions",value:function(){return!1===this.isTherePackages()&&this.props.help?this.renderHelp():this.renderNoItems()}},{key:"renderNoItems",value:function(){return _react2.default.createElement(_NoItems2.default,{className:"package-no-items",text:"No items were found with that query"})}},{key:"renderHelp",value:function(){if(!1!==this.props.help)return _react2.default.createElement(_Help2.default,null)}},{key:"isTherePackages",value:function(){return!1===(0,_isEmpty2.default)(this.props.packages)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PackageList}(_react2.default.Component),_class.propTypes={packages:_propTypes2.default.array,help:_propTypes2.default.bool},_temp);exports.default=PackageList,function(){var e=__webpack_require__(21).default,t=__webpack_require__(21).leaveModule;e&&(e.register(PackageList,"PackageList","/Users/jding/src/@lyft/verdaccio/src/webui/components/PackageList/index.js"),t(module))}()}).call(this,__webpack_require__(71)(module))},926:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(0)),s=l(a(6)),n=a(239),i=a(174),c=a(705),u=l(a(927));function l(e){return e&&e.__esModule?e:{default:e}}!function(){var t=a(21).enterModule;t&&t(e)}();var o=function(e){var t=e.name,a=e.version,s=e.author,l=e.description,o=e.license,_=e.time;return r.default.createElement("section",{className:u.default.package},r.default.createElement(i.Link,{to:"detail/"+t},r.default.createElement("div",{className:u.default.header},r.default.createElement("div",{className:u.default.title},r.default.createElement("h1",null,t," ",r.default.createElement(n.Tag,{type:"gray"},"v",a))),r.default.createElement("div",{role:"author",className:u.default.author},s?"By: "+s:"")),r.default.createElement("div",{className:u.default.footer},r.default.createElement("p",{className:u.default.description},l)),r.default.createElement("div",{className:u.default.details},r.default.createElement("div",{className:u.default.homepage},_?"Published "+(0,c.formatDateDistance)(_)+" ago":""),r.default.createElement("div",{className:u.default.license},o))))};o.propTypes={name:s.default.string,version:s.default.string,author:s.default.string,description:s.default.string,license:s.default.string,time:s.default.oneOfType([s.default.string,s.default.instanceOf(Date)])};var _=o;t.default=_,function(){var t=a(21).default,r=a(21).leaveModule;t&&(t.register(o,"Package","/Users/jding/src/@lyft/verdaccio/src/webui/components/Package/index.js"),t.register(_,"default","/Users/jding/src/@lyft/verdaccio/src/webui/components/Package/index.js"),r(e))}()}).call(this,a(71)(e))},927:function(e,t,a){e.exports={package:"src-webui-components-Package-package__package--2Vsz8",header:"src-webui-components-Package-package__header--oWeft",footer:"src-webui-components-Package-package__footer--2hreN",description:"src-webui-components-Package-package__description--2ywBJ",details:"src-webui-components-Package-package__details--Gxq7R",license:"src-webui-components-Package-package__license--3QUc3",homepage:"src-webui-components-Package-package__homepage--11yjj",title:"src-webui-components-Package-package__title--C2I9s",author:"src-webui-components-Package-package__author--2nfKp"}},929:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(0)),s=a(930),n=o(s),i=o(a(937)),c=o(a(938)),u=o(a(940)),l=a(726);function o(e){return e&&e.__esModule?e:{default:e}}!function(){var t=a(21).enterModule;t&&t(e)}(),(0,s.registerLanguage)("javascript",c.default);var _=function(){var e=(0,l.getRegistryURL)();return r.default.createElement("div",{className:u.default.help},r.default.createElement("li",{className:u.default.noPkg},r.default.createElement("h1",{className:u.default.noPkgTitle},"No Package Published Yet"),r.default.createElement("div",{className:u.default.noPkgIntro},r.default.createElement("div",null,"To publish your first package just:"),r.default.createElement("br",null),r.default.createElement("strong",null,"1. Login"),r.default.createElement(n.default,{language:"javascript",style:i.default,id:"adduser"},"npm adduser --registry  "+e),r.default.createElement("strong",null,"2. Publish"),r.default.createElement(n.default,{language:"javascript",style:i.default,id:"publish"},"npm publish --registry "+e),r.default.createElement("strong",null,"3. Refresh this page!"))))},d=_;t.default=d,function(){var t=a(21).default,r=a(21).leaveModule;t&&(t.register(_,"Help","/Users/jding/src/@lyft/verdaccio/src/webui/components/Help/index.js"),t.register(d,"default","/Users/jding/src/@lyft/verdaccio/src/webui/components/Help/index.js"),r(e))}()}).call(this,a(71)(e))},940:function(e,t,a){e.exports={help:"src-webui-components-Help-help__help--1nMKy",noPkg:"src-webui-components-Help-help__noPkg--22rVi",noPkgTitle:"src-webui-components-Help-help__noPkgTitle--1UTMi",noPkgIntro:"src-webui-components-Help-help__noPkgIntro--1oc82"}},942:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(0)),s=i(a(6)),n=i(a(943));function i(e){return e&&e.__esModule?e:{default:e}}!function(){var t=a(21).enterModule;t&&t(e)}();var c=function(e){return r.default.createElement("div",{className:n.default.noItems},r.default.createElement("h2",null,e.text))};c.propTypes={text:s.default.string.isRequired};var u=c;t.default=u,function(){var t=a(21).default,r=a(21).leaveModule;t&&(t.register(c,"NoItems","/Users/jding/src/@lyft/verdaccio/src/webui/components/NoItems/index.js"),t.register(u,"default","/Users/jding/src/@lyft/verdaccio/src/webui/components/NoItems/index.js"),r(e))}()}).call(this,a(71)(e))},943:function(e,t,a){e.exports={noItems:"src-webui-components-NoItems-noItems__noItems--3HSmj"}},945:function(e,t,a){e.exports={pkgContainer:"src-webui-components-PackageList-packageList__pkgContainer--3B1Jm",listTitle:"src-webui-components-PackageList-packageList__listTitle--4evdY"}},947:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(0)),s=i(a(6)),n=i(a(948));function i(e){return e&&e.__esModule?e:{default:e}}!function(){var t=a(21).enterModule;t&&t(e)}();var c=function(e){e.preventDefault()},u=function(e){return r.default.createElement("form",{autoComplete:"off",onSubmit:c},r.default.createElement("input",{name:"search-box",type:"text",placeholder:e.placeHolder,className:n.default.searchBox,onChange:e.handleSearchInput,autoComplete:"off"}))};u.defaultProps={placeHolder:"search packages"},u.propTypes={handleSearchInput:s.default.func.isRequired,placeHolder:s.default.string};var l=u;t.default=l,function(){var t=a(21).default,r=a(21).leaveModule;t&&(t.register(c,"noSubmit","/Users/jding/src/@lyft/verdaccio/src/webui/components/Search/index.js"),t.register(u,"Search","/Users/jding/src/@lyft/verdaccio/src/webui/components/Search/index.js"),t.register(l,"default","/Users/jding/src/@lyft/verdaccio/src/webui/components/Search/index.js"),r(e))}()}).call(this,a(71)(e))},948:function(e,t,a){e.exports={searchBox:"src-webui-components-Search-search__searchBox--329WH"}}}]);