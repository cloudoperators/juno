"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4198],{"./node_modules/@floating-ui/react/dist/floating-ui.react.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kp:()=>useClick,s9:()=>useDismiss,we:()=>useFloating,iQ:()=>useFocus,Mk:()=>useHover,bv:()=>useInteractions,SV:()=>useMergeRefs,It:()=>useRole});var react=__webpack_require__("../../node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function getNodeName(node){return isNode(node)?(node.nodeName||"").toLowerCase():"#document"}function floating_ui_utils_dom_getWindow(node){var _node$ownerDocument;return(null==node||null==(_node$ownerDocument=node.ownerDocument)?void 0:_node$ownerDocument.defaultView)||window}function isNode(value){return value instanceof Node||value instanceof floating_ui_utils_dom_getWindow(value).Node}function floating_ui_utils_dom_isElement(value){return value instanceof Element||value instanceof floating_ui_utils_dom_getWindow(value).Element}function floating_ui_utils_dom_isHTMLElement(value){return value instanceof HTMLElement||value instanceof floating_ui_utils_dom_getWindow(value).HTMLElement}function isShadowRoot(value){return"undefined"!=typeof ShadowRoot&&(value instanceof ShadowRoot||value instanceof floating_ui_utils_dom_getWindow(value).ShadowRoot)}function isLastTraversableNode(node){return["html","body","#document"].includes(getNodeName(node))}function getComputedStyle(element){return floating_ui_utils_dom_getWindow(element).getComputedStyle(element)}function getParentNode(node){if("html"===getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||function getDocumentElement(node){var _ref;return null==(_ref=(isNode(node)?node.ownerDocument:node.document)||window.document)?void 0:_ref.documentElement}(node);return isShadowRoot(result)?result.host:result}function floating_ui_utils_react_contains(parent,child){if(!parent||!child)return!1;const rootNode=child.getRootNode&&child.getRootNode();if(parent.contains(child))return!0;if(rootNode&&isShadowRoot(rootNode)){let next=child;for(;next;){if(parent===next)return!0;next=next.parentNode||next.host}}return!1}function floating_ui_utils_react_getPlatform(){const uaData=navigator.userAgentData;return null!=uaData&&uaData.platform?uaData.platform:navigator.platform}function floating_ui_utils_react_isVirtualClick(event){if(0===event.mozInputSource&&event.isTrusted)return!0;const androidRe=/Android/i;return(androidRe.test(floating_ui_utils_react_getPlatform())||androidRe.test(function floating_ui_utils_react_getUserAgent(){const uaData=navigator.userAgentData;return uaData&&Array.isArray(uaData.brands)?uaData.brands.map((_ref=>{let{brand,version}=_ref;return brand+"/"+version})).join(" "):navigator.userAgent}()))&&event.pointerType?"click"===event.type&&1===event.buttons:0===event.detail&&!event.pointerType}function floating_ui_utils_react_isVirtualPointerEvent(event){return 0===event.width&&0===event.height||1===event.width&&1===event.height&&0===event.pressure&&0===event.detail&&"mouse"!==event.pointerType||event.width<1&&event.height<1&&0===event.pressure&&0===event.detail}function floating_ui_utils_react_isMouseLikePointerType(pointerType,strict){const values=["mouse","pen"];return strict||values.push("",void 0),values.includes(pointerType)}function floating_ui_utils_react_getDocument(node){return(null==node?void 0:node.ownerDocument)||document}function isEventTargetWithin(event,node){if(null==node)return!1;if("composedPath"in event)return event.composedPath().includes(node);const e=event;return null!=e.target&&node.contains(e.target)}const TYPEABLE_SELECTOR="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";var floating_ui_utils_dom=__webpack_require__("../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"),floating_ui_react_dom=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");__webpack_require__("../../node_modules/react-dom/index.js");function useMergeRefs(refs){return react.useMemo((()=>refs.every((ref=>null==ref))?null:value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}),refs)}var index="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;const horizontalKeys=["ArrowLeft","ArrowRight"],verticalKeys=["ArrowUp","ArrowDown"];let serverHandoffComplete=!1,count=0;const genId=()=>"floating-ui-"+count++;const useId=react_namespaceObject["useId".toString()]||function useFloatingId(){const[id,setId]=react.useState((()=>serverHandoffComplete?genId():void 0));return index((()=>{null==id&&setId(genId())}),[]),react.useEffect((()=>{serverHandoffComplete||(serverHandoffComplete=!0)}),[]),id};function createPubSub(){const map=new Map;return{emit(event,data){var _map$get;null==(_map$get=map.get(event))||_map$get.forEach((handler=>handler(data)))},on(event,listener){map.set(event,[...map.get(event)||[],listener])},off(event,listener){var _map$get2;map.set(event,(null==(_map$get2=map.get(event))?void 0:_map$get2.filter((l=>l!==listener)))||[])}}}const FloatingNodeContext=react.createContext(null),FloatingTreeContext=react.createContext(null),useFloatingParentNodeId=()=>{var _React$useContext;return(null==(_React$useContext=react.useContext(FloatingNodeContext))?void 0:_React$useContext.id)||null},useFloatingTree=()=>react.useContext(FloatingTreeContext);function createAttribute(name){return"data-floating-ui-"+name}function useLatestRef(value){const ref=(0,react.useRef)(value);return index((()=>{ref.current=value})),ref}const safePolygonIdentifier=createAttribute("safe-polygon");function getDelay(value,prop,pointerType){return pointerType&&!floating_ui_utils_react_isMouseLikePointerType(pointerType)?0:"number"==typeof value?value:null==value?void 0:value[prop]}function useHover(context,props){void 0===props&&(props={});const{open,onOpenChange,dataRef,events,elements:{domReference,floating},refs}=context,{enabled=!0,delay=0,handleClose=null,mouseOnly=!1,restMs=0,move=!0}=props,tree=useFloatingTree(),parentId=useFloatingParentNodeId(),handleCloseRef=useLatestRef(handleClose),delayRef=useLatestRef(delay),pointerTypeRef=react.useRef(),timeoutRef=react.useRef(),handlerRef=react.useRef(),restTimeoutRef=react.useRef(),blockMouseMoveRef=react.useRef(!0),performedPointerEventsMutationRef=react.useRef(!1),unbindMouseMoveRef=react.useRef((()=>{})),isHoverOpen=react.useCallback((()=>{var _dataRef$current$open;const type=null==(_dataRef$current$open=dataRef.current.openEvent)?void 0:_dataRef$current$open.type;return(null==type?void 0:type.includes("mouse"))&&"mousedown"!==type}),[dataRef]);react.useEffect((()=>{if(enabled)return events.on("dismiss",onDismiss),()=>{events.off("dismiss",onDismiss)};function onDismiss(){clearTimeout(timeoutRef.current),clearTimeout(restTimeoutRef.current),blockMouseMoveRef.current=!0}}),[enabled,events]),react.useEffect((()=>{if(!enabled||!handleCloseRef.current||!open)return;function onLeave(event){isHoverOpen()&&onOpenChange(!1,event)}const html=floating_ui_utils_react_getDocument(floating).documentElement;return html.addEventListener("mouseleave",onLeave),()=>{html.removeEventListener("mouseleave",onLeave)}}),[floating,open,onOpenChange,enabled,handleCloseRef,dataRef,isHoverOpen]);const closeWithDelay=react.useCallback((function(event,runElseBranch){void 0===runElseBranch&&(runElseBranch=!0);const closeDelay=getDelay(delayRef.current,"close",pointerTypeRef.current);closeDelay&&!handlerRef.current?(clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>onOpenChange(!1,event)),closeDelay)):runElseBranch&&(clearTimeout(timeoutRef.current),onOpenChange(!1,event))}),[delayRef,onOpenChange]),cleanupMouseMoveHandler=react.useCallback((()=>{unbindMouseMoveRef.current(),handlerRef.current=void 0}),[]),clearPointerEvents=react.useCallback((()=>{if(performedPointerEventsMutationRef.current){const body=floating_ui_utils_react_getDocument(refs.floating.current).body;body.style.pointerEvents="",body.removeAttribute(safePolygonIdentifier),performedPointerEventsMutationRef.current=!1}}),[refs]);return react.useEffect((()=>{if(enabled&&floating_ui_utils_dom_isElement(domReference)){const ref=domReference;return open&&ref.addEventListener("mouseleave",onScrollMouseLeave),null==floating||floating.addEventListener("mouseleave",onScrollMouseLeave),move&&ref.addEventListener("mousemove",onMouseEnter,{once:!0}),ref.addEventListener("mouseenter",onMouseEnter),ref.addEventListener("mouseleave",onMouseLeave),()=>{open&&ref.removeEventListener("mouseleave",onScrollMouseLeave),null==floating||floating.removeEventListener("mouseleave",onScrollMouseLeave),move&&ref.removeEventListener("mousemove",onMouseEnter),ref.removeEventListener("mouseenter",onMouseEnter),ref.removeEventListener("mouseleave",onMouseLeave)}}function isClickLikeOpenEvent(){return!!dataRef.current.openEvent&&["click","mousedown"].includes(dataRef.current.openEvent.type)}function onMouseEnter(event){if(clearTimeout(timeoutRef.current),blockMouseMoveRef.current=!1,mouseOnly&&!floating_ui_utils_react_isMouseLikePointerType(pointerTypeRef.current)||restMs>0&&0===getDelay(delayRef.current,"open"))return;const openDelay=getDelay(delayRef.current,"open",pointerTypeRef.current);openDelay?timeoutRef.current=setTimeout((()=>{onOpenChange(!0,event)}),openDelay):onOpenChange(!0,event)}function onMouseLeave(event){if(isClickLikeOpenEvent())return;unbindMouseMoveRef.current();const doc=floating_ui_utils_react_getDocument(floating);if(clearTimeout(restTimeoutRef.current),handleCloseRef.current){open||clearTimeout(timeoutRef.current),handlerRef.current=handleCloseRef.current({...context,tree,x:event.clientX,y:event.clientY,onClose(){clearPointerEvents(),cleanupMouseMoveHandler(),closeWithDelay(event)}});const handler=handlerRef.current;return doc.addEventListener("mousemove",handler),void(unbindMouseMoveRef.current=()=>{doc.removeEventListener("mousemove",handler)})}("touch"!==pointerTypeRef.current||!floating_ui_utils_react_contains(floating,event.relatedTarget))&&closeWithDelay(event)}function onScrollMouseLeave(event){isClickLikeOpenEvent()||null==handleCloseRef.current||handleCloseRef.current({...context,tree,x:event.clientX,y:event.clientY,onClose(){clearPointerEvents(),cleanupMouseMoveHandler(),closeWithDelay(event)}})(event)}}),[domReference,floating,enabled,context,mouseOnly,restMs,move,closeWithDelay,cleanupMouseMoveHandler,clearPointerEvents,onOpenChange,open,tree,delayRef,handleCloseRef,dataRef]),index((()=>{var _handleCloseRef$curre;if(enabled&&open&&null!=(_handleCloseRef$curre=handleCloseRef.current)&&_handleCloseRef$curre.__options.blockPointerEvents&&isHoverOpen()){const body=floating_ui_utils_react_getDocument(floating).body;if(body.setAttribute(safePolygonIdentifier,""),body.style.pointerEvents="none",performedPointerEventsMutationRef.current=!0,floating_ui_utils_dom_isElement(domReference)&&floating){var _tree$nodesRef$curren,_tree$nodesRef$curren2;const ref=domReference,parentFloating=null==tree||null==(_tree$nodesRef$curren=tree.nodesRef.current.find((node=>node.id===parentId)))||null==(_tree$nodesRef$curren2=_tree$nodesRef$curren.context)?void 0:_tree$nodesRef$curren2.elements.floating;return parentFloating&&(parentFloating.style.pointerEvents=""),ref.style.pointerEvents="auto",floating.style.pointerEvents="auto",()=>{ref.style.pointerEvents="",floating.style.pointerEvents=""}}}}),[enabled,open,parentId,floating,domReference,tree,handleCloseRef,dataRef,isHoverOpen]),index((()=>{open||(pointerTypeRef.current=void 0,cleanupMouseMoveHandler(),clearPointerEvents())}),[open,cleanupMouseMoveHandler,clearPointerEvents]),react.useEffect((()=>()=>{cleanupMouseMoveHandler(),clearTimeout(timeoutRef.current),clearTimeout(restTimeoutRef.current),clearPointerEvents()}),[enabled,domReference,cleanupMouseMoveHandler,clearPointerEvents]),react.useMemo((()=>{if(!enabled)return{};function setPointerRef(event){pointerTypeRef.current=event.pointerType}return{reference:{onPointerDown:setPointerRef,onPointerEnter:setPointerRef,onMouseMove(event){open||0===restMs||(clearTimeout(restTimeoutRef.current),restTimeoutRef.current=setTimeout((()=>{blockMouseMoveRef.current||onOpenChange(!0,event.nativeEvent)}),restMs))}},floating:{onMouseEnter(){clearTimeout(timeoutRef.current)},onMouseLeave(event){events.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),closeWithDelay(event.nativeEvent,!1)}}}}),[events,enabled,restMs,open,onOpenChange,closeWithDelay])}function getChildren(nodes,id){let allChildren=nodes.filter((node=>{var _node$context;return node.parentId===id&&(null==(_node$context=node.context)?void 0:_node$context.open)})),currentChildren=allChildren;for(;currentChildren.length;)currentChildren=nodes.filter((node=>{var _currentChildren;return null==(_currentChildren=currentChildren)?void 0:_currentChildren.some((n=>{var _node$context2;return node.parentId===n.id&&(null==(_node$context2=node.context)?void 0:_node$context2.open)}))})),allChildren=allChildren.concat(currentChildren);return allChildren}function isButtonTarget(event){return floating_ui_utils_dom_isHTMLElement(event.target)&&"BUTTON"===event.target.tagName}function isSpaceIgnored(element){return function floating_ui_utils_react_isTypeableElement(element){return floating_ui_utils_dom_isHTMLElement(element)&&element.matches(TYPEABLE_SELECTOR)}(element)}function useClick(context,props){void 0===props&&(props={});const{open,onOpenChange,dataRef,elements:{domReference}}=context,{enabled=!0,event:eventOption="click",toggle=!0,ignoreMouse=!1,keyboardHandlers=!0}=props,pointerTypeRef=react.useRef(),didKeyDownRef=react.useRef(!1);return react.useMemo((()=>enabled?{reference:{onPointerDown(event){pointerTypeRef.current=event.pointerType},onMouseDown(event){0===event.button&&(floating_ui_utils_react_isMouseLikePointerType(pointerTypeRef.current,!0)&&ignoreMouse||"click"!==eventOption&&(!open||!toggle||dataRef.current.openEvent&&"mousedown"!==dataRef.current.openEvent.type?(event.preventDefault(),onOpenChange(!0,event.nativeEvent)):onOpenChange(!1,event.nativeEvent)))},onClick(event){"mousedown"===eventOption&&pointerTypeRef.current?pointerTypeRef.current=void 0:floating_ui_utils_react_isMouseLikePointerType(pointerTypeRef.current,!0)&&ignoreMouse||(!open||!toggle||dataRef.current.openEvent&&"click"!==dataRef.current.openEvent.type?onOpenChange(!0,event.nativeEvent):onOpenChange(!1,event.nativeEvent))},onKeyDown(event){pointerTypeRef.current=void 0,event.defaultPrevented||!keyboardHandlers||isButtonTarget(event)||(" "!==event.key||isSpaceIgnored(domReference)||(event.preventDefault(),didKeyDownRef.current=!0),"Enter"===event.key&&onOpenChange(!open||!toggle,event.nativeEvent))},onKeyUp(event){event.defaultPrevented||!keyboardHandlers||isButtonTarget(event)||isSpaceIgnored(domReference)||" "===event.key&&didKeyDownRef.current&&(didKeyDownRef.current=!1,onOpenChange(!open||!toggle,event.nativeEvent))}}}:{}),[enabled,dataRef,eventOption,ignoreMouse,keyboardHandlers,domReference,toggle,open,onOpenChange])}const useSafeInsertionEffect=react_namespaceObject["useInsertionEffect".toString()]||(fn=>fn());function useEffectEvent(callback){const ref=react.useRef((()=>{0}));return useSafeInsertionEffect((()=>{ref.current=callback})),react.useCallback((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null==ref.current?void 0:ref.current(...args)}),[])}const bubbleHandlerKeys={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},captureHandlerKeys={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},normalizeBubblesProp=bubbles=>{var _bubbles$escapeKey,_bubbles$outsidePress;return{escapeKeyBubbles:"boolean"==typeof bubbles?bubbles:null!=(_bubbles$escapeKey=null==bubbles?void 0:bubbles.escapeKey)&&_bubbles$escapeKey,outsidePressBubbles:"boolean"==typeof bubbles?bubbles:null==(_bubbles$outsidePress=null==bubbles?void 0:bubbles.outsidePress)||_bubbles$outsidePress}};function useDismiss(context,props){void 0===props&&(props={});const{open,onOpenChange,events,nodeId,elements:{reference,domReference,floating},dataRef}=context,{enabled=!0,escapeKey=!0,outsidePress:unstable_outsidePress=!0,outsidePressEvent="pointerdown",referencePress=!1,referencePressEvent="pointerdown",ancestorScroll=!1,bubbles}=props,tree=useFloatingTree(),nested=null!=useFloatingParentNodeId(),outsidePressFn=useEffectEvent("function"==typeof unstable_outsidePress?unstable_outsidePress:()=>!1),outsidePress="function"==typeof unstable_outsidePress?outsidePressFn:unstable_outsidePress,insideReactTreeRef=react.useRef(!1),{escapeKeyBubbles,outsidePressBubbles}=normalizeBubblesProp(bubbles),closeOnEscapeKeyDown=useEffectEvent((event=>{if(!open||!enabled||!escapeKey||"Escape"!==event.key)return;const children=tree?getChildren(tree.nodesRef.current,nodeId):[];if(!escapeKeyBubbles&&(event.stopPropagation(),children.length>0)){let shouldDismiss=!0;if(children.forEach((child=>{var _child$context;null==(_child$context=child.context)||!_child$context.open||child.context.dataRef.current.__escapeKeyBubbles||(shouldDismiss=!1)})),!shouldDismiss)return}events.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),onOpenChange(!1,function isReactEvent(event){return"nativeEvent"in event}(event)?event.nativeEvent:event)})),closeOnPressOutside=useEffectEvent((event=>{const insideReactTree=insideReactTreeRef.current;if(insideReactTreeRef.current=!1,insideReactTree)return;if("function"==typeof outsidePress&&!outsidePress(event))return;const target=function floating_ui_utils_react_getTarget(event){return"composedPath"in event?event.composedPath()[0]:event.target}(event),inertSelector="["+createAttribute("inert")+"]",markers=floating_ui_utils_react_getDocument(floating).querySelectorAll(inertSelector);let targetRootAncestor=floating_ui_utils_dom_isElement(target)?target:null;for(;targetRootAncestor&&!isLastTraversableNode(targetRootAncestor);){const nextParent=getParentNode(targetRootAncestor);if(nextParent===floating_ui_utils_react_getDocument(floating).body||!floating_ui_utils_dom_isElement(nextParent))break;targetRootAncestor=nextParent}if(markers.length&&floating_ui_utils_dom_isElement(target)&&!function isRootElement(element){return element.matches("html,body")}(target)&&!floating_ui_utils_react_contains(target,floating)&&Array.from(markers).every((marker=>!floating_ui_utils_react_contains(targetRootAncestor,marker))))return;if(floating_ui_utils_dom_isHTMLElement(target)&&floating){const canScrollX=target.clientWidth>0&&target.scrollWidth>target.clientWidth,canScrollY=target.clientHeight>0&&target.scrollHeight>target.clientHeight;let xCond=canScrollY&&event.offsetX>target.clientWidth;if(canScrollY){"rtl"===getComputedStyle(target).direction&&(xCond=event.offsetX<=target.offsetWidth-target.clientWidth)}if(xCond||canScrollX&&event.offsetY>target.clientHeight)return}const targetIsInsideChildren=tree&&getChildren(tree.nodesRef.current,nodeId).some((node=>{var _node$context;return isEventTargetWithin(event,null==(_node$context=node.context)?void 0:_node$context.elements.floating)}));if(isEventTargetWithin(event,floating)||isEventTargetWithin(event,domReference)||targetIsInsideChildren)return;const children=tree?getChildren(tree.nodesRef.current,nodeId):[];if(children.length>0){let shouldDismiss=!0;if(children.forEach((child=>{var _child$context2;null==(_child$context2=child.context)||!_child$context2.open||child.context.dataRef.current.__outsidePressBubbles||(shouldDismiss=!1)})),!shouldDismiss)return}events.emit("dismiss",{type:"outsidePress",data:{returnFocus:nested?{preventScroll:!0}:floating_ui_utils_react_isVirtualClick(event)||floating_ui_utils_react_isVirtualPointerEvent(event)}}),onOpenChange(!1,event)}));return react.useEffect((()=>{if(!open||!enabled)return;function onScroll(event){onOpenChange(!1,event)}dataRef.current.__escapeKeyBubbles=escapeKeyBubbles,dataRef.current.__outsidePressBubbles=outsidePressBubbles;const doc=floating_ui_utils_react_getDocument(floating);escapeKey&&doc.addEventListener("keydown",closeOnEscapeKeyDown),outsidePress&&doc.addEventListener(outsidePressEvent,closeOnPressOutside);let ancestors=[];return ancestorScroll&&(floating_ui_utils_dom_isElement(domReference)&&(ancestors=(0,floating_ui_utils_dom.v9)(domReference)),floating_ui_utils_dom_isElement(floating)&&(ancestors=ancestors.concat((0,floating_ui_utils_dom.v9)(floating))),!floating_ui_utils_dom_isElement(reference)&&reference&&reference.contextElement&&(ancestors=ancestors.concat((0,floating_ui_utils_dom.v9)(reference.contextElement)))),ancestors=ancestors.filter((ancestor=>{var _doc$defaultView;return ancestor!==(null==(_doc$defaultView=doc.defaultView)?void 0:_doc$defaultView.visualViewport)})),ancestors.forEach((ancestor=>{ancestor.addEventListener("scroll",onScroll,{passive:!0})})),()=>{escapeKey&&doc.removeEventListener("keydown",closeOnEscapeKeyDown),outsidePress&&doc.removeEventListener(outsidePressEvent,closeOnPressOutside),ancestors.forEach((ancestor=>{ancestor.removeEventListener("scroll",onScroll)}))}}),[dataRef,floating,domReference,reference,escapeKey,outsidePress,outsidePressEvent,open,onOpenChange,ancestorScroll,enabled,escapeKeyBubbles,outsidePressBubbles,closeOnEscapeKeyDown,closeOnPressOutside]),react.useEffect((()=>{insideReactTreeRef.current=!1}),[outsidePress,outsidePressEvent]),react.useMemo((()=>enabled?{reference:{onKeyDown:closeOnEscapeKeyDown,[bubbleHandlerKeys[referencePressEvent]]:event=>{referencePress&&(events.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),onOpenChange(!1,event.nativeEvent))}},floating:{onKeyDown:closeOnEscapeKeyDown,[captureHandlerKeys[outsidePressEvent]]:()=>{insideReactTreeRef.current=!0}}}:{}),[enabled,events,referencePress,outsidePressEvent,referencePressEvent,onOpenChange,closeOnEscapeKeyDown])}function useFloating(options){var _options$elements2;void 0===options&&(options={});const{open=!1,onOpenChange:unstable_onOpenChange,nodeId}=options;const[_domReference,setDomReference]=react.useState(null),domReference=(null==(_options$elements2=options.elements)?void 0:_options$elements2.reference)||_domReference,position=(0,floating_ui_react_dom.we)(options),tree=useFloatingTree(),onOpenChange=useEffectEvent(((open,event)=>{open&&(dataRef.current.openEvent=event),null==unstable_onOpenChange||unstable_onOpenChange(open,event)})),domReferenceRef=react.useRef(null),dataRef=react.useRef({}),events=react.useState((()=>createPubSub()))[0],floatingId=useId(),setPositionReference=react.useCallback((node=>{const positionReference=floating_ui_utils_dom_isElement(node)?{getBoundingClientRect:()=>node.getBoundingClientRect(),contextElement:node}:node;position.refs.setReference(positionReference)}),[position.refs]),setReference=react.useCallback((node=>{(floating_ui_utils_dom_isElement(node)||null===node)&&(domReferenceRef.current=node,setDomReference(node)),(floating_ui_utils_dom_isElement(position.refs.reference.current)||null===position.refs.reference.current||null!==node&&!floating_ui_utils_dom_isElement(node))&&position.refs.setReference(node)}),[position.refs]),refs=react.useMemo((()=>({...position.refs,setReference,setPositionReference,domReference:domReferenceRef})),[position.refs,setReference,setPositionReference]),elements=react.useMemo((()=>({...position.elements,domReference})),[position.elements,domReference]),context=react.useMemo((()=>({...position,refs,elements,dataRef,nodeId,floatingId,events,open,onOpenChange})),[position,nodeId,floatingId,events,open,onOpenChange,refs,elements]);return index((()=>{const node=null==tree?void 0:tree.nodesRef.current.find((node=>node.id===nodeId));node&&(node.context=context)})),react.useMemo((()=>({...position,context,refs,elements})),[position,refs,elements,context])}function useFocus(context,props){void 0===props&&(props={});const{open,onOpenChange,dataRef,events,refs,elements:{floating,domReference}}=context,{enabled=!0,keyboardOnly=!0}=props,pointerTypeRef=react.useRef(""),blockFocusRef=react.useRef(!1),timeoutRef=react.useRef();return react.useEffect((()=>{if(!enabled)return;const win=floating_ui_utils_react_getDocument(floating).defaultView||window;function onBlur(){!open&&floating_ui_utils_dom_isHTMLElement(domReference)&&domReference===function floating_ui_utils_react_activeElement(doc){let activeElement=doc.activeElement;for(;null!=(null==(_activeElement=activeElement)||null==(_activeElement$shadow=_activeElement.shadowRoot)?void 0:_activeElement$shadow.activeElement);){var _activeElement,_activeElement$shadow;activeElement=activeElement.shadowRoot.activeElement}return activeElement}(floating_ui_utils_react_getDocument(domReference))&&(blockFocusRef.current=!0)}return win.addEventListener("blur",onBlur),()=>{win.removeEventListener("blur",onBlur)}}),[floating,domReference,open,enabled]),react.useEffect((()=>{if(enabled)return events.on("dismiss",onDismiss),()=>{events.off("dismiss",onDismiss)};function onDismiss(payload){"referencePress"!==payload.type&&"escapeKey"!==payload.type||(blockFocusRef.current=!0)}}),[events,enabled]),react.useEffect((()=>()=>{clearTimeout(timeoutRef.current)}),[]),react.useMemo((()=>enabled?{reference:{onPointerDown(_ref){let{pointerType}=_ref;pointerTypeRef.current=pointerType,blockFocusRef.current=!(!pointerType||!keyboardOnly)},onMouseLeave(){blockFocusRef.current=!1},onFocus(event){var _dataRef$current$open;blockFocusRef.current||"focus"===event.type&&"mousedown"===(null==(_dataRef$current$open=dataRef.current.openEvent)?void 0:_dataRef$current$open.type)&&isEventTargetWithin(dataRef.current.openEvent,domReference)||onOpenChange(!0,event.nativeEvent)},onBlur(event){blockFocusRef.current=!1;const relatedTarget=event.relatedTarget,movedToFocusGuard=floating_ui_utils_dom_isElement(relatedTarget)&&relatedTarget.hasAttribute(createAttribute("focus-guard"))&&"outside"===relatedTarget.getAttribute("data-type");timeoutRef.current=setTimeout((()=>{floating_ui_utils_react_contains(refs.floating.current,relatedTarget)||floating_ui_utils_react_contains(domReference,relatedTarget)||movedToFocusGuard||onOpenChange(!1,event.nativeEvent)}))}}}:{}),[enabled,keyboardOnly,domReference,refs,dataRef,onOpenChange])}function mergeProps(userProps,propsList,elementKey){const map=new Map;return{..."floating"===elementKey&&{tabIndex:-1},...userProps,...propsList.map((value=>value?value[elementKey]:null)).concat(userProps).reduce(((acc,props)=>props?(Object.entries(props).forEach((_ref=>{let[key,value]=_ref;var _map$get;0===key.indexOf("on")?(map.has(key)||map.set(key,[]),"function"==typeof value&&(null==(_map$get=map.get(key))||_map$get.push(value),acc[key]=function(){for(var _map$get2,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null==(_map$get2=map.get(key))?void 0:_map$get2.map((fn=>fn(...args))).find((val=>void 0!==val))})):acc[key]=value})),acc):acc),{})}}function useInteractions(propsList){void 0===propsList&&(propsList=[]);const deps=propsList,getReferenceProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"reference")),deps),getFloatingProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"floating")),deps),getItemProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"item")),propsList.map((key=>null==key?void 0:key.item)));return react.useMemo((()=>({getReferenceProps,getFloatingProps,getItemProps})),[getReferenceProps,getFloatingProps,getItemProps])}function useRole(context,props){void 0===props&&(props={});const{open,floatingId}=context,{enabled=!0,role="dialog"}=props,referenceId=useId();return react.useMemo((()=>{const floatingProps={id:floatingId,role};return enabled?"tooltip"===role?{reference:{"aria-describedby":open?floatingId:void 0},floating:floatingProps}:{reference:{"aria-expanded":open?"true":"false","aria-haspopup":"alertdialog"===role?"dialog":role,"aria-controls":open?floatingId:void 0,..."listbox"===role&&{role:"combobox"},..."menu"===role&&{id:referenceId}},floating:{...floatingProps,..."menu"===role&&{"aria-labelledby":referenceId}}}:{}}),[enabled,role,open,floatingId,referenceId])}}}]);