!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){__webpack_require__(4),module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){var api=__webpack_require__(2),content=__webpack_require__(3);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},function(module,exports,__webpack_require__){"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},function(module,exports,__webpack_require__){},function(module,__webpack_exports__,__webpack_require__){"use strict";function tmc_throttle(delay,fn){var lastCall=0;return function(){var now=(new Date).getTime();if(!(now-lastCall<delay))return lastCall=now,fn.apply(void 0,arguments)}}function tmc_debounce(delay,fn){var timerId;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timerId&&clearTimeout(timerId),timerId=setTimeout((function(){fn.apply(void 0,args),timerId=null}),delay)}}__webpack_require__.r(__webpack_exports__);var scripts_states={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},scripts_missing={A000148:"Jake Auchincloss",B000668:"Cliff Bentz",B000740:"Stephanie Bice",B000825:"Lauren Boebert",B001312:"Carolyn Bourdeaux",B001223:"Jamaal Bowman",B001224:"Cori Bush",C001039:"Kat Cammack",C001054:"Jerry Carl",C001104:"Madison Cawthorn",C001116:"Andrew Clyde",D000032:"Byron Donalds",F000246:"Pat Fallon",F000446:"Randy Feenstra",L000273:"Teresa Fernandez",F000470:"Michelle Fischbach",F000471:"Scott Fitzgerald",F000472:"Scott Franklin",G000597:"Andrew Garbarino",G000593:"Carlos Giménez",G000594:"Tony Gonzales",G000595:"Robert Good",G000596:"Marjorie Greene",H000601:"Bill Hagerty",H001086:"Diana Harshbarger",H001084:"Yvette Herrell",H000273:"John Hickenlooper",H001091:"Ashley Hinson",J000304:"Ronny Jackson",J000305:"Sara Jacobs",J000306:"Mondaire Jones",K000396:"Kaialiʻi Kahele",K000377:"Mark Kelly",K000397:"Young Kim",L000266:"Jake LaTurner",M000194:"Nancy Mace",M000317:"Nicole Malliotakis",M000871:"Tracey Mann",M001135:"Kathy Manning",M001136:"Lisa McClain",M001186:"Peter Meijer",M001211:"Mary Miller",M001215:"Mariannette Miller-Meeks",M001213:"Blake Moore",M001212:"Barry Moore",M001214:"Frank Mrvan",N000026:"Troy Nehls",N000192:"Marie Newman",O000019:"Jay Obernolte",O000086:"Burgess Owens",P000048:"August Pfluger",R000103:"Matt Rosendale",R000305:"Deborah Ross",S000168:"Maria Salazar",S000929:"Victoria Spartz",S001135:"Michelle Steel",S001159:"Marilyn Strickland",T000486:"Ritchie Torres",T000278:"Tommy Tuberville",V000134:"Beth Van Duyne",W000788:"Nikema Williams"};function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function modal_typeof(obj){return(modal_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function modal_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function modal_setPrototypeOf(o,p){return(modal_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function modal_createSuper(Derived){var hasNativeReflectConstruct=function modal_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=modal_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=modal_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return modal_possibleConstructorReturn(this,result)}}function modal_possibleConstructorReturn(self,call){return!call||"object"!==modal_typeof(call)&&"function"!=typeof call?modal_assertThisInitialized(self):call}function modal_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function modal_getPrototypeOf(o){return(modal_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var RC={memberList:function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(memberList,React.Component);var _super=_createSuper(memberList);function memberList(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,memberList),(_this=_super.call(this,props)).state={members:_this.props.members,RC:_this.props.parent,filters:{},reverse:!1,sortBy:"last_name",modalView:"filters"},_this._assembleFilters=_this._assembleFilters.bind(_assertThisInitialized(_this)),_this._updateSort=_this._updateSort.bind(_assertThisInitialized(_this)),_this._reverseSort=_this._reverseSort.bind(_assertThisInitialized(_this)),_this._updateFilter=_this._updateFilter.bind(_assertThisInitialized(_this)),_this._resetFilters=_this._resetFilters.bind(_assertThisInitialized(_this)),_this._passedFilters=_this._passedFilters.bind(_assertThisInitialized(_this)),_this._getIconClass=_this._getIconClass.bind(_assertThisInitialized(_this)),_this._getFilteredSorted=_this._getFilteredSorted.bind(_assertThisInitialized(_this)),_this._getMemberItems=_this._getMemberItems.bind(_assertThisInitialized(_this)),_this._getMemberName=_this._getMemberName.bind(_assertThisInitialized(_this)),_this._handleLaunchModal=_this._handleLaunchModal.bind(_assertThisInitialized(_this)),_this._handleImageError=_this._handleImageError.bind(_assertThisInitialized(_this)),_this._handleInputChange=_this._handleInputChange.bind(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(memberList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this.setState({filters:this._assembleFilters()}),window.getState=function(){return _this2.state}}},{key:"_assembleFilters",value:function _assembleFilters(){var objTags={next_election:{},party_name:{},chamber:{Senate:!1,House:!1},text:{name:""}};return this.state.members.forEach((function(member){member.next_election&&!objTags.hasOwnProperty(member.next_election)&&(objTags.next_election[member.next_election]=!1),member.party_name&&!objTags.hasOwnProperty(member.party_name)&&(objTags.party_name[member.party_name]=!1)})),objTags}},{key:"_updateSort",value:function _updateSort(){var sortBy=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;sortBy&&sortBy!==this.state.sortBy&&this.setState({sortBy:sortBy})}},{key:"_reverseSort",value:function _reverseSort(){var reverse=!this.state.reverse;this.setState({reverse:reverse})}},{key:"_updateFilter",value:function _updateFilter(){var category=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,filter=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,value=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;category&&filter&&this.setState((function(prevState){var filters=_objectSpread({},prevState.filters);return"boolean"==typeof filters[category][filter]?filters[category][filter]=!filters[category][filter]:filters[category][filter]=value,{filters:filters}}))}},{key:"_resetFilters",value:function _resetFilters(){this.setState((function(prevState){var filters=_objectSpread({},prevState.filters);return Object.keys(filters).forEach((function(category){Object.keys(filters[category]).forEach((function(filter){filters[category][filter]=!1}))})),{filters:filters}}))}},{key:"_getIconClass",value:function _getIconClass(party){var objClasses={R:"fas fa-republican",D:"fas fa-democrat",I:"fas fa-flag-usa"};return objClasses[party]||objClasses.I}},{key:"_passedFilters",value:function _passedFilters(member){var objFilters=this.state.filters,matchesFilters=!0;return Object.keys(objFilters).forEach((function(category){var trueFilters=Object.keys(objFilters[category]).filter((function(filter){return objFilters[category][filter]}));trueFilters.length&&("text"===category||trueFilters.includes(member[category])||(matchesFilters=!1),"next_election"===category&&"House"===member.chamber&&(matchesFilters=!1),!0===matchesFilters&&"text"===category&&objFilters.text.name&&((member.first_name+member.last_name).toLowerCase().replace(/\s/g,"").toLowerCase().replace(/\s/g,"").includes(objFilters.text.name.toLowerCase())||(matchesFilters=!1)))})),matchesFilters}},{key:"_getFilteredSorted",value:function _getFilteredSorted(){var _this3=this,members=this.state.members.filter((function(member){return _this3._passedFilters(member)}));return members.sort((function(a,b){var itemA=a[_this3.state.sortBy].toString().toUpperCase(),itemB=b[_this3.state.sortBy].toString().toUpperCase();return itemA<itemB&&_this3.state.reverse?1:itemA>itemB&&_this3.state.reverse||itemA<itemB?-1:itemA>itemB?1:0})),members}},{key:"_getMemberName",value:function _getMemberName(member){return member.short_title+" "+member.first_name+" "+member.last_name}},{key:"_getMemberItems",value:function _getMemberItems(){var _this4=this,members=this._getFilteredSorted();return members.map((function(member){var partyColor="success";switch(member.party){case"R":partyColor="danger";break;case"D":partyColor="primary"}return React.createElement("div",{"data-member-id":member.id,className:"member card mb-3 border border-"+partyColor,key:member.id},React.createElement("div",{className:"card-header bg-"+partyColor+" text-white d-sm-flex justify-content-between"},React.createElement("div",{className:"party"},React.createElement("i",{className:_this4._getIconClass(member.party)+" mr-2"})," ",member.party_name),React.createElement("div",{className:"next"},"Next: ",React.createElement("strong",null,member.next_election))),React.createElement("div",{className:"card-body"},React.createElement("div",{className:"d-sm-flex"},React.createElement("div",{className:"member-photo-wrapper mb-2 mb-sm-0"},React.createElement("img",{className:"member-photo img-fluid mx-auto ml-sm-0",onError:_this4._handleImageError,src:member.member_photo_link,loading:"lazy",alt:"Photo of "+_this4._getMemberName(member)}),React.createElement("div",{className:"missing-photo text-center"},React.createElement("i",{className:"fas fa-user mb-3 text-secondary"}),React.createElement("small",{className:"d-block"},"Photo not available"))),React.createElement("div",{className:"member-info-wrapper"},React.createElement("h5",{className:"card-title mb-1"},_this4._getMemberName(member)),React.createElement("div",{className:"mb-0"},member.state_name),React.createElement("div",{className:"mb-0"},"Age: "+member.age)))))}))}},{key:"_handleImageError",value:function _handleImageError(evt){evt.target.parentElement.classList.add("image-error")}},{key:"_handleLaunchModal",value:function _handleLaunchModal(evt){this.setState({modalView:evt.target.dataset.view}),$("#myModal").modal("show")}},{key:"_handleInputChange",value:function _handleInputChange(evt){var value=evt.target.value;value.length<3&&(value=null),this._updateFilter("text","name",value)}},{key:"render",value:function render(){var RC=this.state.RC;return React.createElement("div",{className:"container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col"},React.createElement("div",{className:"btn-group btn-group-lg w-100 mb-3",role:"group","aria-label":"Modal launch buttons"},React.createElement("button",{type:"button",className:"d-inline-block btn btn-light flex-fill border border-dark w-50","data-view":"filters",onClick:this._handleLaunchModal},"Filters"),React.createElement("button",{type:"button",className:"d-inline-block btn btn-light flex-fill border border-dark w-50","data-view":"sorting",onClick:this._handleLaunchModal},"Sorting")))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col"},React.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Filter by name",onChange:this._handleInputChange}),React.createElement("small",{className:"d-block mt-1 mb-3 px-3"},React.createElement("em",null,"Filtering by name requires at least three characters.")))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col"},this._getMemberItems("both"))),React.createElement(RC.modal,{updateSort:this._updateSort,reverseSort:this._reverseSort,updateFilter:this._updateFilter,resetFilters:this._resetFilters,modalView:this.state.modalView,reverse:this.state.reverse,sortBy:this.state.sortBy,filters:this.state.filters}))}}]),memberList}(),modal:function(_React$Component){!function modal_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&modal_setPrototypeOf(subClass,superClass)}(modal,React.Component);var _super=modal_createSuper(modal);function modal(props){var _this;return function modal_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,modal),(_this=_super.call(this,props)).state={sortrows:[[{key:"first_name",value:"First Name"},{key:"last_name",value:"Last Name"}],[{key:"age",value:"Age"},{key:"next_election",value:"Next Election"}]]},_this._getFilterContent=_this._getFilterContent.bind(modal_assertThisInitialized(_this)),_this._getSortingContent=_this._getSortingContent.bind(modal_assertThisInitialized(_this)),_this._handleSortClick=_this._handleSortClick.bind(modal_assertThisInitialized(_this)),_this._handleFilterClick=_this._handleFilterClick.bind(modal_assertThisInitialized(_this)),_this._handleResetClick=_this._handleResetClick.bind(modal_assertThisInitialized(_this)),_this}return function modal_createClass(Constructor,protoProps,staticProps){return protoProps&&modal_defineProperties(Constructor.prototype,protoProps),staticProps&&modal_defineProperties(Constructor,staticProps),Constructor}(modal,[{key:"_getFilterContent",value:function _getFilterContent(){var _this2=this,buttonMarkup=Object.keys(this.props.filters).map((function(filterCat){var objFilter=_this2.props.filters[filterCat];if("text"!==filterCat.toLowerCase())return React.createElement("div",{key:filterCat,className:"d-flex flex-wrap flex-sm-nowrap flex-lg-wrap justify-content-center"},Object.keys(objFilter).map((function(filterBool){var buttonType=_this2.props.filters[filterCat][filterBool]?"btn-secondary":"btn-light";return React.createElement("button",{key:filterBool,"data-category":filterCat,"data-filter":filterBool,type:"button",onClick:_this2._handleFilterClick,className:"d-inline-block btn "+buttonType+" flex-fill border border-dark m-1"},filterBool)})))}));return React.createElement("div",{className:"modal-body"},React.createElement("p",null,"Filter by political party, election year or chamber. Keep in mind that the House comes up every two years, so election years automatically filter down to the Senate."),React.createElement("div",{className:"d-flex flex-wrap flex-sm-nowrap flex-lg-wrap justify-content-center"},React.createElement("button",{type:"button",onClick:this._handleResetClick,className:"d-inline-block btn btn-light flex-fill border border-dark m-1"},"Reset Filters")),buttonMarkup)}},{key:"_getSortingContent",value:function _getSortingContent(){var _this3=this,reverseButtonType=this.props.reverse?"btn-secondary":"btn-light",sortingMarkup=this.state.sortrows.map((function(arrRow){return React.createElement("div",{key:arrRow[0].key,className:"d-flex flex-wrap flex-sm-nowrap flex-lg-wrap justify-content-center"},arrRow.map((function(objButton){var buttonType=_this3.props.sortBy===objButton.key?"btn-secondary":"btn-light";return React.createElement("button",{key:objButton.value,"data-sortkey":objButton.key,type:"button",onClick:_this3._handleSortClick,className:"d-inline-block btn "+buttonType+" flex-fill border border-dark m-1"},objButton.value)})))}));return React.createElement("div",{className:"modal-body"},React.createElement("p",null,"Sort the members list by a chosen property. Defaults to ascending order"),React.createElement("div",{className:"d-flex flex-wrap flex-sm-nowrap flex-lg-wrap justify-content-center"},React.createElement("button",{type:"button","data-reverse":"true",onClick:this._handleSortClick,className:"d-inline-block btn "+reverseButtonType+" flex-fill border border-dark m-1"},"Reverse Sort")),sortingMarkup)}},{key:"_handleFilterClick",value:function _handleFilterClick(evt){this.props.updateFilter(evt.target.dataset.category,evt.target.dataset.filter)}},{key:"_handleResetClick",value:function _handleResetClick(evt){this.props.resetFilters()}},{key:"_handleSortClick",value:function _handleSortClick(evt){evt.target.dataset.reverse?this.props.reverseSort():this.props.updateSort(evt.target.dataset.sortkey)}},{key:"render",value:function render(){var modalMarkup="filters"===this.props.modalView?this._getFilterContent():this._getSortingContent(),title="filters"===this.props.modalView?"Filters":"Sorting";return React.createElement("div",{className:"modal fade",id:"myModal",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},React.createElement("div",{className:"modal-dialog"},React.createElement("div",{className:"modal-content"},React.createElement("div",{className:"modal-header"},React.createElement("h5",{className:"modal-title",id:"myModalLabel"},title),React.createElement("button",{type:"button",className:"btn-close","data-dismiss":"modal","aria-label":"Close"})),modalMarkup)))}}]),modal}()},POL={congress:117,init:function init(){var _this=this;this.utils=function setupUtils(){!function tmc_RAF(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}}();var ut=function tmc_documentHidden(){var tmc={};return void 0!==document.hidden?(tmc.hidden="hidden",tmc.visibilityChange="visibilitychange",tmc.visibilityState="visibilityState"):void 0!==document.mozHidden?(tmc.hidden="mozHidden",tmc.visibilityChange="mozvisibilitychange",tmc.visibilityState="mozVisibilityState"):void 0!==document.msHidden?(tmc.hidden="msHidden",tmc.visibilityChange="msvisibilitychange",tmc.visibilityState="msVisibilityState"):void 0!==document.webkitHidden&&(tmc.hidden="webkitHidden",tmc.visibilityChange="webkitvisibilitychange",tmc.visibilityState="webkitVisibilityState"),tmc.document_hidden=document[tmc.hidden],tmc}();return ut.trans_end=function tmc_transEnd(){var end,st=document.body.style;return void 0!==st.transition?end="transitionend":void 0!==st.OTransition?end="oTransitionEnd":void 0!==st.MozTransition?end="transitionend":void 0!==st.WebkitTransition&&(end="webkitTransitionEnd"),end}(),ut.throttle=tmc_throttle,ut.debounce=tmc_debounce,ut}();var housePromise=new Promise((function(resolve,reject){_this.getData(_this.congress,"house").then((function(data){resolve(updateMembers(data.results[0]))}))})),senatePromise=new Promise((function(resolve,reject){_this.getData(_this.congress,"senate").then((function(data){resolve(updateMembers(data.results[0]))}))})),reducer=function reducer(accumulator,currentValue){currentValue>accumulator&&(accumulator=currentValue);var accDate=accumulator?new Date(accumulator.last_updated):null;return new Date(currentValue.last_updated).getTime()>accDate.getTime()&&(accumulator=currentValue),accumulator};function updateMembers(obj){var objParties={R:"Republican",D:"Democrat",I:"Independent"},updatedMembers=[],objDoubles={},everyone=obj.members.filter((function(item){return!0===item.in_office}));return everyone.forEach((function(member){member.party_name=objParties[member.party]||"Independent",member.state_name=scripts_states[member.state],member.chamber=obj.chamber;var birthDate=new Date(member.date_of_birth),today=new Date,age=today.getFullYear()-birthDate.getFullYear(),m=today.getMonth()-birthDate.getMonth();(m<0||0===m&&today.getDate()<birthDate.getDate())&&age--,member.age=age,member.missing_photo=!!scripts_missing[member.id],member.member_photo_link=scripts_missing[member.id]?"src/images/missing/225x275/"+member.id+".jpg":"https://theunitedstates.io/images/congress/225x275/"+member.id+".jpg",everyone.filter((function(m){return m.id===member.id})).length>1?(objDoubles[member.id]=objDoubles[member.id]||[],objDoubles[member.id].push(member)):updatedMembers.push(member)})),Object.keys(objDoubles).forEach((function(id){updatedMembers.push(objDoubles[id].reduce(reducer))})),updatedMembers}Promise.all([housePromise,senatePromise]).then((function(allResults){ReactDOM.render(React.createElement(RC.memberList,{parent:RC,members:allResults[0].concat(allResults[1])}),document.getElementById("app"))}))},getAllMembers:function getAllMembers(){return this.senate.members.concat(this.house.members)},getData:function getData(congress,chamber){return $.ajax({url:"https://api.propublica.org/congress/v1/".concat(congress,"/").concat(chamber,"/members.json"),beforeSend:function beforeSend(xhr){xhr.setRequestHeader("X-API-Key","mQSfoVKW5dWSJXfcHtxSAXFneRkyGqnBzmrp4jLx")}})},utils:{}};$(document).ready((function(){POL.init()}))}]);