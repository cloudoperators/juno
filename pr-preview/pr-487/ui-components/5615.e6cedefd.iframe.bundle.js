"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5615],{"../../node_modules/react-tabs/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{oz:()=>components_Tab,wb:()=>components_TabList,Kp:()=>components_TabPanel,tU:()=>components_Tabs});var react=__webpack_require__("../../node_modules/react/index.js");function makeTypeChecker(tabsRole){return function(element){return!!element.type&&element.type.tabsRole===tabsRole}}var elementTypes_isTab=makeTypeChecker("Tab"),elementTypes_isTabList=makeTypeChecker("TabList"),elementTypes_isTabPanel=makeTypeChecker("TabPanel");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function deepMap(children,callback){return react.Children.map(children,(function(child){return null===child?null:function isTabChild(child){return elementTypes_isTab(child)||elementTypes_isTabList(child)||elementTypes_isTabPanel(child)}(child)?callback(child):child.props&&child.props.children&&"object"==typeof child.props.children?(0,react.cloneElement)(child,_extends({},child.props,{children:deepMap(child.props.children,callback)})):child}))}function childrenDeepMap_deepForEach(children,callback){return react.Children.forEach(children,(function(child){null!==child&&(elementTypes_isTab(child)||elementTypes_isTabPanel(child)?callback(child):child.props&&child.props.children&&"object"==typeof child.props.children&&(elementTypes_isTabList(child)&&callback(child),childrenDeepMap_deepForEach(child.props.children,callback)))}))}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const clsx_m=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};var count=0;function uuid(){return"react-tabs-"+count++}function count_getTabsCount(children){var tabCount=0;return childrenDeepMap_deepForEach(children,(function(child){elementTypes_isTab(child)&&tabCount++})),tabCount}var canUseActiveElement,_excluded=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function UncontrolledTabs_extends(){return UncontrolledTabs_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},UncontrolledTabs_extends.apply(this,arguments)}function isNode(node){return node&&"getAttribute"in node}function isTabNode(node){return isNode(node)&&node.getAttribute("data-rttab")}function isTabDisabled(node){return isNode(node)&&"true"===node.getAttribute("aria-disabled")}var UncontrolledTabs=function UncontrolledTabs(props){var tabNodes=(0,react.useRef)([]),tabIds=(0,react.useRef)([]),panelIds=(0,react.useRef)([]),_ref=(0,react.useRef)();function setSelected(index,event){index<0||index>=getTabsCount()||(0,props.onSelect)(index,props.selectedIndex,event)}function getNextTab(index){for(var count=getTabsCount(),i=index+1;i<count;i++)if(!isTabDisabled(getTab(i)))return i;for(var _i=0;_i<index;_i++)if(!isTabDisabled(getTab(_i)))return _i;return index}function getPrevTab(index){for(var i=index;i--;)if(!isTabDisabled(getTab(i)))return i;for(i=getTabsCount();i-- >index;)if(!isTabDisabled(getTab(i)))return i;return index}function getTabsCount(){return count_getTabsCount(props.children)}function getTab(index){return tabNodes.current["tabs-"+index]}function handleClick(e){var node=e.target;do{if(isTabFromContainer(node)){if(isTabDisabled(node))return;return void setSelected([].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node),e)}}while(null!=(node=node.parentNode))}function isTabFromContainer(node){if(!isTabNode(node))return!1;var nodeAncestor=node.parentElement;do{if(nodeAncestor===_ref.current)return!0;if(nodeAncestor.getAttribute("data-rttabs"))break;nodeAncestor=nodeAncestor.parentElement}while(nodeAncestor);return!1}props.children;var className=props.className,domRef=(props.disabledTabClassName,props.domRef),attributes=(props.focus,props.forceRenderTabPanel,props.onSelect,props.selectedIndex,props.selectedTabClassName,props.selectedTabPanelClassName,props.environment,props.disableUpDownKeys,function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(props,_excluded));return react.createElement("div",UncontrolledTabs_extends({},attributes,{className:clsx_m(className),onClick:handleClick,onKeyDown:function handleKeyDown(e){var direction=props.direction,disableUpDownKeys=props.disableUpDownKeys;if(isTabFromContainer(e.target)){var index=props.selectedIndex,preventDefault=!1,useSelectedIndex=!1;"Space"!==e.code&&32!==e.keyCode&&"Enter"!==e.code&&13!==e.keyCode||(preventDefault=!0,useSelectedIndex=!1,handleClick(e)),"ArrowLeft"!==e.code&&37!==e.keyCode&&(disableUpDownKeys||38!==e.keyCode&&"ArrowUp"!==e.code)?"ArrowRight"!==e.code&&39!==e.keyCode&&(disableUpDownKeys||40!==e.keyCode&&"ArrowDown"!==e.code)?35===e.keyCode||"End"===e.code?(index=function getLastTab(){for(var i=getTabsCount();i--;)if(!isTabDisabled(getTab(i)))return i;return null}(),preventDefault=!0,useSelectedIndex=!0):36!==e.keyCode&&"Home"!==e.code||(index=function getFirstTab(){for(var count=getTabsCount(),i=0;i<count;i++)if(!isTabDisabled(getTab(i)))return i;return null}(),preventDefault=!0,useSelectedIndex=!0):(index="rtl"===direction?getPrevTab(index):getNextTab(index),preventDefault=!0,useSelectedIndex=!0):(index="rtl"===direction?getNextTab(index):getPrevTab(index),preventDefault=!0,useSelectedIndex=!0),preventDefault&&e.preventDefault(),useSelectedIndex&&setSelected(index,e)}},ref:function ref(node){_ref.current=node,domRef&&domRef(node)},"data-rttabs":!0}),function getChildren(){var index=0,children=props.children,disabledTabClassName=props.disabledTabClassName,focus=props.focus,forceRenderTabPanel=props.forceRenderTabPanel,selectedIndex=props.selectedIndex,selectedTabClassName=props.selectedTabClassName,selectedTabPanelClassName=props.selectedTabPanelClassName,environment=props.environment;tabIds.current=tabIds.current||[],panelIds.current=panelIds.current||[];for(var diff=tabIds.current.length-getTabsCount();diff++<0;)tabIds.current.push(uuid()),panelIds.current.push(uuid());return deepMap(children,(function(child){var result=child;if(elementTypes_isTabList(child)){var listIndex=0,wasTabFocused=!1;null==canUseActiveElement&&function determineCanUseActiveElement(environment){var env=environment||("undefined"!=typeof window?window:void 0);try{canUseActiveElement=!(void 0===env||!env.document||!env.document.activeElement)}catch(e){canUseActiveElement=!1}}(environment);var env=environment||("undefined"!=typeof window?window:void 0);canUseActiveElement&&env&&(wasTabFocused=react.Children.toArray(child.props.children).filter(elementTypes_isTab).some((function(tab,i){return env.document.activeElement===getTab(i)}))),result=(0,react.cloneElement)(child,{children:deepMap(child.props.children,(function(tab){var key="tabs-"+listIndex,selected=selectedIndex===listIndex,props={tabRef:function tabRef(node){tabNodes.current[key]=node},id:tabIds.current[listIndex],panelId:panelIds.current[listIndex],selected,focus:selected&&(focus||wasTabFocused)};return selectedTabClassName&&(props.selectedClassName=selectedTabClassName),disabledTabClassName&&(props.disabledClassName=disabledTabClassName),listIndex++,(0,react.cloneElement)(tab,props)}))})}else if(elementTypes_isTabPanel(child)){var _props={id:panelIds.current[index],tabId:tabIds.current[index],selected:selectedIndex===index};forceRenderTabPanel&&(_props.forceRender=forceRenderTabPanel),selectedTabPanelClassName&&(_props.selectedClassName=selectedTabPanelClassName),index++,result=(0,react.cloneElement)(child,_props)}return result}))}())};UncontrolledTabs.defaultProps={className:"react-tabs",focus:!1},UncontrolledTabs.propTypes={};const components_UncontrolledTabs=UncontrolledTabs;function Tabs_extends(){return Tabs_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Tabs_extends.apply(this,arguments)}var Tabs=function Tabs(props){var children=props.children,defaultFocus=props.defaultFocus,defaultIndex=props.defaultIndex,focusTabOnClick=props.focusTabOnClick,onSelect=props.onSelect,_useState=(0,react.useState)(defaultFocus),focus=_useState[0],setFocus=_useState[1],_useState2=(0,react.useState)(function getModeFromProps(props){return null===props.selectedIndex?1:0}(props)),mode=_useState2[0],_useState3=(0,react.useState)(1===mode?defaultIndex||0:null),selectedIndex=_useState3[0],setSelectedIndex=_useState3[1];if((0,react.useEffect)((function(){setFocus(!1)}),[]),1===mode){var tabsCount=count_getTabsCount(children);(0,react.useEffect)((function(){if(null!=selectedIndex){var maxTabIndex=Math.max(0,tabsCount-1);setSelectedIndex(Math.min(selectedIndex,maxTabIndex))}}),[tabsCount])}var subProps=Tabs_extends({},props);return subProps.focus=focus,subProps.onSelect=function handleSelected(index,last,event){"function"==typeof onSelect&&!1===onSelect(index,last,event)||(focusTabOnClick&&setFocus(!0),1===mode&&setSelectedIndex(index))},null!=selectedIndex&&(subProps.selectedIndex=selectedIndex),delete subProps.defaultFocus,delete subProps.defaultIndex,delete subProps.focusTabOnClick,react.createElement(components_UncontrolledTabs,subProps,children)};Tabs.propTypes={},Tabs.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},Tabs.tabsRole="Tabs";const components_Tabs=Tabs;var TabList_excluded=["children","className"];function TabList_extends(){return TabList_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},TabList_extends.apply(this,arguments)}var TabList=function TabList(props){var children=props.children,className=props.className,attributes=function TabList_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(props,TabList_excluded);return react.createElement("ul",TabList_extends({},attributes,{className:clsx_m(className),role:"tablist"}),children)};TabList.tabsRole="TabList",TabList.propTypes={},TabList.defaultProps={className:"react-tabs__tab-list"};const components_TabList=TabList;var Tab_excluded=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function Tab_extends(){return Tab_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Tab_extends.apply(this,arguments)}var DEFAULT_PROPS={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},Tab=function Tab(props){var _cx,nodeRef=(0,react.useRef)(),children=props.children,className=props.className,disabled=props.disabled,disabledClassName=props.disabledClassName,focus=props.focus,id=props.id,panelId=props.panelId,selected=props.selected,selectedClassName=props.selectedClassName,tabIndex=props.tabIndex,tabRef=props.tabRef,attributes=function Tab_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(props,Tab_excluded);return(0,react.useEffect)((function(){selected&&focus&&nodeRef.current.focus()}),[selected,focus]),react.createElement("li",Tab_extends({},attributes,{className:clsx_m(className,(_cx={},_cx[selectedClassName]=selected,_cx[disabledClassName]=disabled,_cx)),ref:function ref(node){nodeRef.current=node,tabRef&&tabRef(node)},role:"tab",id,"aria-selected":selected?"true":"false","aria-disabled":disabled?"true":"false","aria-controls":panelId,tabIndex:tabIndex||(selected?"0":null),"data-rttab":!0}),children)};Tab.propTypes={},Tab.tabsRole="Tab",Tab.defaultProps=DEFAULT_PROPS;const components_Tab=Tab;var TabPanel_excluded=["children","className","forceRender","id","selected","selectedClassName","tabId"];function TabPanel_extends(){return TabPanel_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},TabPanel_extends.apply(this,arguments)}var TabPanel_defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},TabPanel=function TabPanel(props){var _cx,children=props.children,className=props.className,forceRender=props.forceRender,id=props.id,selected=props.selected,selectedClassName=props.selectedClassName,tabId=props.tabId,attributes=function TabPanel_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(props,TabPanel_excluded);return react.createElement("div",TabPanel_extends({},attributes,{className:clsx_m(className,(_cx={},_cx[selectedClassName]=selected,_cx)),role:"tabpanel",id,"aria-labelledby":tabId}),forceRender||selected?children:null)};TabPanel.tabsRole="TabPanel",TabPanel.propTypes={},TabPanel.defaultProps=TabPanel_defaultProps;const components_TabPanel=TabPanel}}]);