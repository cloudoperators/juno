import{j as c}from"./jsx-runtime-BP6H2k8O.js";import{r as i,e as ae}from"./index-DysCNOs_.js";import{L as Te}from"./Label.component-DhLm9IiA.js";import{I as H}from"./Icon.component-A9eTkufy.js";import{S as $e}from"./Spinner.component-DWsJM9DM.js";import{F as fe}from"./FormHint.component-DjeKdvkd.js";import{U as Q,I as re,s as qe,y as z,l as ne,b as ve,a as y,u as ke,C as B,p as le,c as Ce,d as oe,o as Ne,T as Ee,e as w,f as I,r as De,O as Se,g as F,h as Ae,i as We,j as Me,k as Fe,x as _e,m as He,n as Ue,S as me}from"./headlessui-float-2Zmw-mrc.js";import{o as Qe,a as ze,s as Be,b as Ge}from"./floating-ui.react-dom-C789hh8f.js";import{u as Ke}from"./PortalProvider.component-Dpl-KYct.js";import{r as Ye}from"./index-DxJeRO9x.js";import{i as Re,T as Je,e as Xe,u as Ze,s as et}from"./form-DXLnOOIt.js";import{s as tt}from"./use-text-value-v5ibLhf1.js";var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{}),nt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(nt||{}),lt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(lt||{}),ot=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(ot||{});function be(e,s=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Ue(s(e.options.slice()),u=>u.dataRef.current.domRef.current),o=r?n.indexOf(r):null;return o===-1&&(o=null),{options:n,activeOptionIndex:o}}let rt={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let s=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,n=e.options.findIndex(o=>r(o.dataRef.current.value));return n!==-1&&(s=n),{...e,listboxState:0,activeOptionIndex:s}},2(e,s){var r;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=be(e),o=He(s,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:o,activationTrigger:(r=s.trigger)!=null?r:1}},3:(e,s)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,n=e.searchQuery+s.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(t=>{var l;return!t.dataRef.current.disabled&&((l=t.dataRef.current.textValue)==null?void 0:l.startsWith(n))}),u=o?e.options.indexOf(o):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:u,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,s)=>{let r={id:s.id,dataRef:s.dataRef},n=be(e,o=>[...o,r]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(s.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(r)),{...e,...n}},6:(e,s)=>{let r=be(e,n=>{let o=n.findIndex(u=>u.id===s.id);return o!==-1&&n.splice(o,1),n});return{...e,...r,activationTrigger:1}},7:(e,s)=>({...e,labelId:s.id})},he=i.createContext(null);he.displayName="ListboxActionsContext";function G(e){let s=i.useContext(he);if(s===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,G),r}return s}let ge=i.createContext(null);ge.displayName="ListboxDataContext";function K(e){let s=i.useContext(ge);if(s===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K),r}return s}function st(e,s){return F(s.type,rt,e,s)}let it=i.Fragment;function ut(e,s){let{value:r,defaultValue:n,form:o,name:u,onChange:t,by:l=(d,p)=>d===p,disabled:b=!1,horizontal:v=!1,multiple:h=!1,...L}=e;const T=v?"horizontal":"vertical";let $=z(s),[S=h?[]:void 0,R]=Je(r,t,n),[g,a]=i.useReducer(st,{dataRef:i.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),f=i.useRef({static:!1,hold:!1}),A=i.useRef(null),E=i.useRef(null),_=i.useRef(null),j=y(typeof l=="string"?(d,p)=>{let O=l;return(d==null?void 0:d[O])===(p==null?void 0:p[O])}:l),V=i.useCallback(d=>F(m.mode,{1:()=>S.some(p=>j(p,d)),0:()=>j(S,d)}),[S]),m=i.useMemo(()=>({...g,value:S,disabled:b,mode:h?1:0,orientation:T,compare:j,isSelected:V,optionsPropsRef:f,labelRef:A,buttonRef:E,optionsRef:_}),[S,b,h,g]);ne(()=>{g.dataRef.current=m},[m]),Ae([m.buttonRef,m.optionsRef],(d,p)=>{var O;a({type:1}),We(p,Me.Loose)||(d.preventDefault(),(O=m.buttonRef.current)==null||O.focus())},m.listboxState===0);let se=i.useMemo(()=>({open:m.listboxState===0,disabled:b,value:S}),[m,b,S]),ie=y(d=>{let p=m.options.find(O=>O.id===d);p&&q(p.dataRef.current.value)}),k=y(()=>{if(m.activeOptionIndex!==null){let{dataRef:d,id:p}=m.options[m.activeOptionIndex];q(d.current.value),a({type:2,focus:I.Specific,id:p})}}),xe=y(()=>a({type:0})),Y=y(()=>a({type:1})),J=y((d,p,O)=>d===I.Specific?a({type:2,focus:I.Specific,id:p,trigger:O}):a({type:2,focus:d,trigger:O})),X=y((d,p)=>(a({type:5,id:d,dataRef:p}),()=>a({type:6,id:d}))),ue=y(d=>(a({type:7,id:d}),()=>a({type:7,id:null}))),q=y(d=>F(m.mode,{0(){return R==null?void 0:R(d)},1(){let p=m.value.slice(),O=p.findIndex(D=>j(D,d));return O===-1?p.push(d):p.splice(O,1),R==null?void 0:R(p)}})),de=y(d=>a({type:3,value:d})),Z=y(()=>a({type:4})),ce=i.useMemo(()=>({onChange:q,registerOption:X,registerLabel:ue,goToOption:J,closeListbox:Y,openListbox:xe,selectActiveOption:k,selectOption:ie,search:de,clearSearch:Z}),[]),ee={ref:$},W=i.useRef(null),C=le();return i.useEffect(()=>{W.current&&n!==void 0&&C.addEventListener(W.current,"reset",()=>{R==null||R(n)})},[W,R]),ae.createElement(he.Provider,{value:ce},ae.createElement(ge.Provider,{value:m},ae.createElement(Fe,{value:F(m.listboxState,{0:oe.Open,1:oe.Closed})},u!=null&&S!=null&&Xe({[u]:S}).map(([d,p],O)=>ae.createElement(Ze,{features:et.Hidden,ref:O===0?D=>{var te;W.current=(te=D==null?void 0:D.closest("form"))!=null?te:null}:void 0,..._e({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,disabled:b,name:d,value:p})})),B({ourProps:ee,theirProps:L,slot:se,defaultTag:it,name:"Listbox"}))))}let dt="button";function ct(e,s){var r;let n=re(),{id:o=`headlessui-listbox-button-${n}`,...u}=e,t=K("Listbox.Button"),l=G("Listbox.Button"),b=z(t.buttonRef,s),v=le(),h=y(g=>{switch(g.key){case w.Space:case w.Enter:case w.ArrowDown:g.preventDefault(),l.openListbox(),v.nextFrame(()=>{t.value||l.goToOption(I.First)});break;case w.ArrowUp:g.preventDefault(),l.openListbox(),v.nextFrame(()=>{t.value||l.goToOption(I.Last)});break}}),L=y(g=>{switch(g.key){case w.Space:g.preventDefault();break}}),T=y(g=>{if(De(g.currentTarget))return g.preventDefault();t.listboxState===0?(l.closeListbox(),v.nextFrame(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(g.preventDefault(),l.openListbox())}),$=Re(()=>{if(t.labelId)return[t.labelId,o].join(" ")},[t.labelId,o]),S=i.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),R={ref:b,id:o,type:Ee(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=t.optionsRef.current)==null?void 0:r.id,"aria-expanded":t.listboxState===0,"aria-labelledby":$,disabled:t.disabled,onKeyDown:h,onKeyUp:L,onClick:T};return B({ourProps:R,theirProps:u,slot:S,defaultTag:dt,name:"Listbox.Button"})}let pt="label";function ft(e,s){let r=re(),{id:n=`headlessui-listbox-label-${r}`,...o}=e,u=K("Listbox.Label"),t=G("Listbox.Label"),l=z(u.labelRef,s);ne(()=>t.registerLabel(n),[n]);let b=y(()=>{var h;return(h=u.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),v=i.useMemo(()=>({open:u.listboxState===0,disabled:u.disabled}),[u]);return B({ourProps:{ref:l,id:n,onClick:b},theirProps:o,slot:v,defaultTag:pt,name:"Listbox.Label"})}let mt="ul",bt=Se.RenderStrategy|Se.Static;function vt(e,s){var r;let n=re(),{id:o=`headlessui-listbox-options-${n}`,...u}=e,t=K("Listbox.Options"),l=G("Listbox.Options"),b=z(t.optionsRef,s),v=le(),h=le(),L=Ce(),T=L!==null?(L&oe.Open)===oe.Open:t.listboxState===0;i.useEffect(()=>{var a;let f=t.optionsRef.current;f&&t.listboxState===0&&f!==((a=Ne(f))==null?void 0:a.activeElement)&&f.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let $=y(a=>{switch(h.dispose(),a.key){case w.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),l.search(a.key);case w.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:f}=t.options[t.activeOptionIndex];l.onChange(f.current.value)}t.mode===0&&(l.closeListbox(),ve().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}));break;case F(t.orientation,{vertical:w.ArrowDown,horizontal:w.ArrowRight}):return a.preventDefault(),a.stopPropagation(),l.goToOption(I.Next);case F(t.orientation,{vertical:w.ArrowUp,horizontal:w.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),l.goToOption(I.Previous);case w.Home:case w.PageUp:return a.preventDefault(),a.stopPropagation(),l.goToOption(I.First);case w.End:case w.PageDown:return a.preventDefault(),a.stopPropagation(),l.goToOption(I.Last);case w.Escape:return a.preventDefault(),a.stopPropagation(),l.closeListbox(),v.nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});case w.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(l.search(a.key),h.setTimeout(()=>l.clearSearch(),350));break}}),S=Re(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.id},[t.buttonRef.current]),R=i.useMemo(()=>({open:t.listboxState===0}),[t]),g={"aria-activedescendant":t.activeOptionIndex===null||(r=t.options[t.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:o,onKeyDown:$,role:"listbox",tabIndex:0,ref:b};return B({ourProps:g,theirProps:u,slot:R,defaultTag:mt,features:bt,visible:T,name:"Listbox.Options"})}let ht="li";function gt(e,s){let r=re(),{id:n=`headlessui-listbox-option-${r}`,disabled:o=!1,value:u,...t}=e,l=K("Listbox.Option"),b=G("Listbox.Option"),v=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===n:!1,h=l.isSelected(u),L=i.useRef(null),T=tt(L),$=qe({disabled:o,value:u,domRef:L,get textValue(){return T()}}),S=z(s,L);ne(()=>{if(l.listboxState!==0||!v||l.activationTrigger===0)return;let j=ve();return j.requestAnimationFrame(()=>{var V,m;(m=(V=L.current)==null?void 0:V.scrollIntoView)==null||m.call(V,{block:"nearest"})}),j.dispose},[L,v,l.listboxState,l.activationTrigger,l.activeOptionIndex]),ne(()=>b.registerOption(n,$),[$,n]);let R=y(j=>{if(o)return j.preventDefault();b.onChange(u),l.mode===0&&(b.closeListbox(),ve().nextFrame(()=>{var V;return(V=l.buttonRef.current)==null?void 0:V.focus({preventScroll:!0})}))}),g=y(()=>{if(o)return b.goToOption(I.Nothing);b.goToOption(I.Specific,n)}),a=ke(),f=y(j=>a.update(j)),A=y(j=>{a.wasMoved(j)&&(o||v||b.goToOption(I.Specific,n,0))}),E=y(j=>{a.wasMoved(j)&&(o||v&&b.goToOption(I.Nothing))}),_=i.useMemo(()=>({active:v,selected:h,disabled:o}),[v,h,o]);return B({ourProps:{id:n,ref:S,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:R,onFocus:g,onPointerEnter:f,onMouseEnter:f,onPointerMove:A,onMouseMove:A,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:_,defaultTag:ht,name:"Listbox.Option"})}let xt=Q(ut),yt=Q(ct),jt=Q(ft),St=Q(vt),Ot=Q(gt),U=Object.assign(xt,{Button:yt,Label:jt,Options:St,Option:Ot});const wt=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,Rt=`
  jn-appearance-none
  jn-h-[2.375rem]
  jn-inline-flex
  jn-items-center
  jn-px-4
  jn-rounded-3px
  jn-select-none
  jn-text-base
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
`,Lt=`
  jn-border
  jn-border-theme-success
`,It=`
  jn-border
  jn-border-theme-error
`,Vt=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,Pt=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,Tt=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,Le=i.createContext(void 0),Oe=({ariaLabel:e="",children:s,className:r="",defaultValue:n,disabled:o=!1,error:u=!1,errortext:t="",helptext:l="",id:b="",invalid:v=!1,label:h,loading:L=!1,multiple:T=!1,name:$,onChange:S,onValueChange:R,placeholder:g="Select…",required:a=!1,successtext:f="",truncateOptions:A=!1,valid:E=!1,value:_,valueLabel:j,variant:V="default",width:m="full",wrapperClassName:se="",...ie})=>{const k=x=>!(typeof x=="string"&&x.trim().length===0),Y=b||"juno-select-"+i.useId(),J="juno-select-helptext-"+i.useId(),[X,ue]=i.useState(new Map),[q,de]=i.useState(!1),[Z,ce]=i.useState(!1),[ee,W]=i.useState(!1),[C,d]=i.useState(!1),p=(x,P,M)=>{ue(N=>new Map(N).set(x||M,{val:x,label:P,children:M,displayName:M||P||x}))},O=i.useMemo(()=>v||!!(t&&k(t)),[v,t]),D=i.useMemo(()=>E||!!(f&&k(f)),[E,f]);i.useEffect(()=>{de(u)},[u]),i.useEffect(()=>{ce(O)},[O]),i.useEffect(()=>{W(D)},[D]),i.useEffect(()=>{d(L)},[L]);const te=x=>{S&&S(x),R&&R(x)},ye=Ke(),Ie=[Qe(4),ze({crossAxis:!0,allowedPlacements:["bottom","top"]}),Be({boundary:"viewport",apply({availableWidth:x,availableHeight:P,elements:M}){Object.assign(M.floating.style,{maxWidth:`${x}px`,maxHeight:`${P}px`,overflowY:"auto"})}}),Ge()],Ve=x=>{const P=N=>{var je;const pe=X.get(N);if(pe)return(je=pe.displayName)!=null&&je.length?pe.displayName:null};return x.map(N=>P(N)).filter(N=>N&&N.toString().trim().length>0).join(", ")};return c.jsx(Le.Provider,{value:{truncateOptions:A,addOptionValueAndLabel:p},children:c.jsxs("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${m=="auto"?"jn-inline-block":"jn-block"}
          ${m=="auto"?"jn-w-auto":"jn-w-full"}
          ${se}
        `,children:[c.jsxs(U,{disabled:o||C||q,multiple:T,name:$,onChange:te,value:_,defaultValue:n,children:[h&&k(h)?c.jsx(U.Label,{as:Te,htmlFor:Y,text:h,className:`${wt}`,disabled:o||C||q,required:a,floating:!0,minimized:!0}):"",c.jsxs(me,{composable:!0,adaptiveWidth:!0,middleware:Ie,children:[c.jsx(me.Reference,{children:c.jsx(U.Button,{"aria-describedby":l?J:"","aria-label":e||h,as:"button",id:Y,className:`
                    juno-select-toggle
                    ${V&&V.length?"juno-select-toggle-"+V:"juno-select-toggle-default"}
                    ${m=="auto"?"jn-w-auto":"jn-w-full"}
                    ${Rt}
                    ${h&&k(h)?"jn-pt-[0.4rem]":""}
                    ${o?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${C||q?"jn-justify-center":"jn-justify-between"}
                    ${Z?"juno-select-invalid "+It:""} 
                    ${ee?"juno-select-valid "+Lt:""}  
                    
                    ${C?"juno-select-loading jn-cursor-not-allowed":""}
                    ${q?"juno-select-error jn-cursor-not-allowed":""}
                    ${r}
                  `,...ie,children:({open:x,value:P})=>!q&&!C?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:`${Tt}`,children:Pe(P)}),c.jsxs("span",{className:"jn-flex",children:[ee?c.jsx(H,{icon:"checkCircle",color:"jn-text-theme-success"}):"",Z?c.jsx(H,{icon:"dangerous",color:"jn-text-theme-error"}):"",c.jsx("span",{children:c.jsx(H,{icon:x?"expandLess":"expandMore"})})]})]}):c.jsx("span",{className:`${Vt}`,children:q?c.jsx(H,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):C?c.jsx($e,{className:"jn-cursor-not-allowed"}):""})})}),Ye.createPortal(c.jsx(me.Content,{children:c.jsx(U.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${Pt}
                      `,children:s})}),ye||document.body)]})]}),t&&k(t)?c.jsx(fe,{text:t,variant:"error"}):"",f&&k(f)?c.jsx(fe,{text:f,variant:"success"}):"",l&&k(l)?c.jsx(fe,{text:l,id:J}):""]})});function Pe(x){if(T)return Ve(x)||j||x.join(", ")||g;{const P=X.get(x);return P?P.displayName||j||x||g:j||x||g}}};try{Oe.displayName="Select",Oe.__docgenInfo={description:"A Select component that can be configured to allow selecting a single item or multiple items.\nPass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.",displayName:"Select",props:{ariaLabel:{defaultValue:{value:""},description:"Pass an aria-label to the Select toggle button",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render as options. Use the SelectOption component, and SelectDivider if needed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className to the internal Select toggle button",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.",name:"defaultValue",required:!1,type:{name:"string | string[]"}},disabled:{defaultValue:{value:"false"},description:"Whether the Select is disabled",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"A small message rendered in red text below the Select toggle.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"Pass an id to the Select toggle",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Whether the Select has been validated unsuccessfully / negatively",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Pass a label to render in the Select toggle button",name:"label",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Whether the Select is busy loading options. Will show a Spinner in the Select toggle.",name:"loading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Pass a name attribute to the Select to be transmitted when used in a form.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to be executed when the selected value changes",name:"onChange",required:!1,type:{name:"((value?: string | number | string[]) => void)"}},open:{defaultValue:null,description:"Handle for openning of select",name:"open",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead.",name:"onValueChange",required:!1,type:{name:"((value?: string | number | string[]) => void)"}},placeholder:{defaultValue:{value:"Select…"},description:'A placeholder to render when no value has been selected. Default is "Select…".',name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible.",name:"required",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`.",name:"successtext",required:!1,type:{name:"ReactNode"}},truncateOptions:{defaultValue:{value:"false"},description:'Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated.',name:"truncateOptions",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle.",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string.",name:"value",required:!1,type:{name:"string | number | string[]"}},valueLabel:{defaultValue:null,description:`The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for
human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly.`,name:"valueLabel",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"The semantic variant of the Select toggle button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},width:{defaultValue:{value:"full"},description:'Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state.',name:"width",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"auto"'}]}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const $t=`
  jn-flex
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-pr-[0.875rem]
  jn-select-none
  data-[headlessui-state=active]:jn-outline-none
  data-[headlessui-state=active]:jn-ring-2
  data-[headlessui-state=active]:jn-ring-inset
  data-[headlessui-state=active]:jn-ring-theme-focus
  data-[headlessui-state=active]:jn-bg-theme-background-lvl-3
`,qt=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,kt=`
  jn-text-theme-accent
  jn-pl-3.5
`,Ct=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,Nt=`
  jn-opacity-50
  jn-cursor-not-allowed
`,Et=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,we=({children:e,className:s="",disabled:r=!1,value:n="",label:o,...u})=>{const t=i.useContext(Le),{truncateOptions:l,addOptionValueAndLabel:b}=t||{truncateOptions:!1,addOptionValueAndLabel:()=>{}};return i.useEffect(()=>{b(n,o,e)},[n,o,e]),c.jsx(U.Option,{as:i.Fragment,disabled:r,value:n||e,children:({selected:v})=>c.jsxs("li",{className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${$t}
          ${v?"juno-select-option-selected "+kt:qt}
          ${r?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${l?"juno-select-option-truncate":""}
          ${s}
        `,...u,children:[v?c.jsx(H,{icon:"check",size:"18",className:Ct}):"",c.jsx("span",{className:`
            ${r?Nt:""}
            ${l?Et:""}
          `,children:e||o||n})]})})};try{we.displayName="SelectOption",we.__docgenInfo={description:"",displayName:"SelectOption",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{Oe as S,we as a};
