"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2951],{"../../node_modules/@headlessui/react/dist/components/listbox/listbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>It});var i,n,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-computed.js"),_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-controllable.js"),_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-disposables.js"),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-event.js"),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-id.js"),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),_hooks_use_text_value_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-text-value.js"),_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js"),_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@headlessui/react/dist/internal/hidden.js"),_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@headlessui/react/dist/internal/open-closed.js"),_utils_bugs_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/bugs.js"),_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/calculate-active-index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/disposables.js"),_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/focus-management.js"),_utils_form_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/form.js"),_utils_match_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/match.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/owner.js"),_utils_render_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/render.js"),_keyboard_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/keyboard.js"),Be=((n=Be||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),He=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne=((i=Ne||{})[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i);function z(e,a=n=>n){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.wl)(a(e.options.slice()),(t=>t.dataRef.current.domRef.current)),l=n?r.indexOf(n):null;return-1===l&&(l=null),{options:r,activeOptionIndex:l}}let je={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((l=>n(l.dataRef.current.value)));return-1!==r&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},2(e,a){var l;if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=z(e),r=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.X)(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:null!=(l=a.trigger)?l:1}},3:(e,a)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((i=>{var b;return!i.dataRef.current.disabled&&(null==(b=i.dataRef.current.textValue)?void 0:b.startsWith(l))})),u=p?e.options.indexOf(p):-1;return-1===u||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,(l=>[...l,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,a)=>{let n=z(e,(r=>{let l=r.findIndex((t=>t.id===a.id));return-1!==l&&r.splice(l,1),r}));return{...e,...n,activationTrigger:1}},7:(e,a)=>({...e,labelId:a.id})},J=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function k(e){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(J);if(null===a){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return a}J.displayName="ListboxActionsContext";let q=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function w(e){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(q);if(null===a){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return a}function Ve(e,a){return(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.Y)(a.type,je,e,a)}q.displayName="ListboxDataContext";let Ke=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;let qe=_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.O5.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.O5.Static;let tt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.FX)((function Qe(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=!1,horizontal:b=!1,multiple:R=!1,...m}=e;const P=b?"horizontal":"vertical";let S=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.P)(a),[g=(R?[]:void 0),x]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_5__.P)(n,p,r),[T,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ve,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)("string"==typeof u?(s,c)=>{let O=u;return(null==s?void 0:s[O])===(null==c?void 0:c[O])}:u),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((s=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.Y)(d.mode,{1:()=>g.some((c=>I(c,s))),0:()=>I(g,s)})),[g]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...T,value:g,disabled:i,mode:R?1:0,orientation:P,compare:I,isSelected:A,optionsPropsRef:L,labelRef:U,buttonRef:B,optionsRef:W})),[g,i,R,T]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.s)((()=>{T.dataRef.current=d}),[d]),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__.j)([d.buttonRef,d.optionsRef],((s,c)=>{var O;o({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Bm)(c,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.MZ.Loose)||(s.preventDefault(),null==(O=d.buttonRef.current)||O.focus())}),0===d.listboxState);let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({open:0===d.listboxState,disabled:i,value:g})),[d,i,g]),ie=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((s=>{let c=d.options.find((O=>O.id===s));c&&X(c.dataRef.current.value)})),re=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((()=>{if(null!==d.activeOptionIndex){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];X(s.current.value),o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Specific,id:c})}})),ae=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((()=>o({type:0}))),le=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((()=>o({type:1}))),se=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)(((s,c,O)=>s===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Specific?o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O}))),pe=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)(((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s})))),ue=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((s=>(o({type:7,id:s}),()=>o({type:7,id:null})))),X=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((s=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.Y)(d.mode,{0:()=>null==x?void 0:x(s),1(){let c=d.value.slice(),O=c.findIndex((C=>I(C,s)));return-1===O?c.push(s):c.splice(O,1),null==x?void 0:x(c)}}))),de=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((s=>o({type:3,value:s}))),ce=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((()=>o({type:4}))),fe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce})),[]),Te={ref:S},G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),be=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.L)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{G.current&&void 0!==r&&be.addEventListener(G.current,"reset",(()=>{null==x||x(r)}))}),[G,x]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(J.Provider,{value:fe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(q.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.El,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.Y)(d.listboxState,{0:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.Uw.Open,1:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.Uw.Closed})},null!=t&&null!=g&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_11__.h)({[t]:g}).map((([s,c],O)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__.j,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__.O.Hidden,ref:0===O?C=>{var Y;G.current=null!=(Y=null==C?void 0:C.closest("form"))?Y:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.oE)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,disabled:i,name:s,value:c})}))),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.XX)({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))})),ot=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.FX)((function Xe(e,a){var x;let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.B)(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=w("Listbox.Button"),p=k("Listbox.Button"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.P)(t.buttonRef,a),i=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.L)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((T=>{switch(T.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame((()=>{t.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.First)}));break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame((()=>{t.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Last)}))}})),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((T=>{if(T.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Space)T.preventDefault()})),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((T=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_16__.l)(T.currentTarget))return T.preventDefault();0===t.listboxState?(p.closeListbox(),i.nextFrame((()=>{var o;return null==(o=t.buttonRef.current)?void 0:o.focus({preventScroll:!0})}))):(T.preventDefault(),p.openListbox())})),P=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.H)((()=>{if(t.labelId)return[t.labelId,r].join(" ")}),[t.labelId,r]),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({open:0===t.listboxState,disabled:t.disabled,value:t.value})),[t]),g={ref:u,id:r,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_18__.c)(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(x=t.optionsRef.current)?void 0:x.id,"aria-expanded":0===t.listboxState,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.XX)({ourProps:g,theirProps:l,slot:S,defaultTag:"button",name:"Listbox.Button"})})),nt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.FX)((function ze(e,a){let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.B)(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=w("Listbox.Label"),p=k("Listbox.Label"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.P)(t.labelRef,a);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.s)((()=>p.registerLabel(r)),[r]);let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((()=>{var m;return null==(m=t.buttonRef.current)?void 0:m.focus({preventScroll:!0})})),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({open:0===t.listboxState,disabled:t.disabled})),[t]);return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.XX)({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:"label",name:"Listbox.Label"})})),it=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.FX)((function Ye(e,a){var T;let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.B)(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=w("Listbox.Options"),p=k("Listbox.Options"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.P)(t.optionsRef,a),i=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.L)(),b=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.L)(),R=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.O_)(),m=null!==R?(R&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.Uw.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.Uw.Open:0===t.listboxState;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{var L;let o=t.optionsRef.current;o&&0===t.listboxState&&o!==(null==(L=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_19__.T)(o))?void 0:L.activeElement)&&o.focus({preventScroll:!0})}),[t.listboxState,t.optionsRef]);let P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((o=>{switch(b.dispose(),o.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Space:if(""!==t.searchQuery)return o.preventDefault(),o.stopPropagation(),p.search(o.key);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Enter:if(o.preventDefault(),o.stopPropagation(),null!==t.activeOptionIndex){let{dataRef:L}=t.options[t.activeOptionIndex];p.onChange(L.current.value)}0===t.mode&&(p.closeListbox(),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__.e)().nextFrame((()=>{var L;return null==(L=t.buttonRef.current)?void 0:L.focus({preventScroll:!0})})));break;case(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.Y)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.ArrowDown,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Next);case(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.Y)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.ArrowUp,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Previous);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame((()=>{var L;return null==(L=t.buttonRef.current)?void 0:L.focus({preventScroll:!0})}));case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.D.Tab:o.preventDefault(),o.stopPropagation();break;default:1===o.key.length&&(p.search(o.key),b.setTimeout((()=>p.clearSearch()),350))}})),S=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.H)((()=>{var o;return null==(o=t.buttonRef.current)?void 0:o.id}),[t.buttonRef.current]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({open:0===t.listboxState})),[t]),x={"aria-activedescendant":null===t.activeOptionIndex||null==(T=t.options[t.activeOptionIndex])?void 0:T.id,"aria-multiselectable":1===t.mode||void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.XX)({ourProps:x,theirProps:l,slot:g,defaultTag:"ul",features:qe,visible:m,name:"Listbox.Options"})})),rt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.FX)((function et(e,a){let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.B)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=w("Listbox.Option"),i=k("Listbox.Option"),b=null!==u.activeOptionIndex&&u.options[u.activeOptionIndex].id===r,R=u.isSelected(t),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),P=(0,_hooks_use_text_value_js__WEBPACK_IMPORTED_MODULE_21__.q)(m),S=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_22__.Y)({disabled:l,value:t,domRef:m,get textValue(){return P()}}),g=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.P)(a,m);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.s)((()=>{if(0!==u.listboxState||!b||0===u.activationTrigger)return;let A=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__.e)();return A.requestAnimationFrame((()=>{var d,H;null==(H=null==(d=m.current)?void 0:d.scrollIntoView)||H.call(d,{block:"nearest"})})),A.dispose}),[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.s)((()=>i.registerOption(r,S)),[S,r]);let x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((A=>{if(l)return A.preventDefault();i.onChange(t),0===u.mode&&(i.closeListbox(),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__.e)().nextFrame((()=>{var d;return null==(d=u.buttonRef.current)?void 0:d.focus({preventScroll:!0})})))})),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((()=>{if(l)return i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Nothing);i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Specific,r)})),o=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__.J)(),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((A=>o.update(A))),U=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((A=>{o.wasMoved(A)&&(l||b||i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Specific,r,0))})),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__._)((A=>{o.wasMoved(A)&&(l||b&&i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.B.Nothing))})),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({active:b,selected:R,disabled:l})),[b,R,l]);return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.XX)({ourProps:{id:r,ref:g,role:"option",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,"aria-selected":R,disabled:void 0,onClick:x,onFocus:T,onPointerEnter:L,onMouseEnter:L,onPointerMove:U,onMouseMove:U,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:"li",name:"Listbox.Option"})})),It=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt})},"../../node_modules/@headlessui/react/dist/hooks/use-computed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>i});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function i(e,o){let[u,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.Y)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.s)((()=>t(r.current)),[r,t,...o]),u}},"../../node_modules/@headlessui/react/dist/hooks/use-controllable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-event.js");function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=void 0!==l,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__._)((n=>(e||s(n),null==r?void 0:r(n))))]}},"../../node_modules/@headlessui/react/dist/hooks/use-text-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>s});var react=__webpack_require__("../../node_modules/react/index.js");let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=null!=(r=e.innerText)?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?null!=(i=t.innerText)?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}var use_event=__webpack_require__("../../node_modules/@headlessui/react/dist/hooks/use-event.js");function s(c){let t=(0,react.useRef)(""),r=(0,react.useRef)("");return(0,use_event._)((()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=function g(e){let n=e.getAttribute("aria-label");if("string"==typeof n)return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map((l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return"string"==typeof i?i.trim():o(r).trim()}return null})).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}(e).trim().toLowerCase();return t.current=u,r.current=n,n}))}},"../../node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s,j:()=>u});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let u=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.FX)((function l(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":!(2&~t)||(null!=(n=e["aria-hidden"])?n:void 0),hidden:!(4&~t)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~t)&&!!(2&~t)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.XX)({ourProps:r,theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}))},"../../node_modules/@headlessui/react/dist/utils/form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):e(t,s,i)}__webpack_require__.d(__webpack_exports__,{h:()=>e})},"./src/components/SelectOption/SelectOption.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChildrenOnly:()=>ChildrenOnly,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,withLabel:()=>withLabel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Select_Select_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Select/Select.component.tsx")),_SelectOption_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/SelectOption/SelectOption.component.tsx"),_PortalProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/PortalProvider/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Select/SelectOption",component:_SelectOption_component__WEBPACK_IMPORTED_MODULE_3__.O,argTypes:{children:{control:!1}},decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PortalProvider__WEBPACK_IMPORTED_MODULE_4__.GD,{children:story()})}]};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Select_Select_component__WEBPACK_IMPORTED_MODULE_2__.l,{open:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectOption_component__WEBPACK_IMPORTED_MODULE_3__.O,__assign({},args))})},Default={render:Template,args:{value:"Option 1"}},Disabled={render:Template,args:{disabled:!0,value:"Disabled Option"}},ChildrenOnly={render:Template,args:{children:["Option 1"]}},withLabel={render:Template,args:{value:"option-1",label:"Option 1"}};const __namedExportsOrder=["Default","Disabled","ChildrenOnly","withLabel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "Option 1"\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    disabled: true,\n    value: "Disabled Option"\n  }\n}',...Disabled.parameters?.docs?.source}}},ChildrenOnly.parameters={...ChildrenOnly.parameters,docs:{...ChildrenOnly.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: ["Option 1"]\n  }\n}',...ChildrenOnly.parameters?.docs?.source}}},withLabel.parameters={...withLabel.parameters,docs:{...withLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "option-1",\n    label: "Option 1"\n  }\n}',...withLabel.parameters?.docs?.source}}}}}]);