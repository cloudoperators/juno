import{j as p}from"./jsx-runtime-BP6H2k8O.js";import{r as k,e as u}from"./index-DysCNOs_.js";import{u as I,b as P,h as V,i as q,c as R,j as S,a as $,o as E,g as F,e as O,f as M,k as g}from"./floating-ui.react-p8NZUn7b.js";import{I as U}from"./Icon.component-A9eTkufy.js";const B=({initialOpen:t=!1,variant:n,placement:r="top",triggerEvent:l="click",open:a,onOpenChange:o,disabled:e=!1}={})=>{const[s,i]=k.useState(t),d=a??s,h=o??i,f=I({placement:r,open:d,onOpenChange:h,whileElementsMounted:M,middleware:[E(5),F(),O()]}),c=f.context,b=P(c,{enabled:a==null&&e===!1&&l==="click"}),j=V(c,{move:!1,enabled:a==null&&e===!1&&l==="hover"}),N=q(c,{enabled:a==null}),w=R(c),C=S(c,{role:"tooltip"}),v=$([b,j,N,w,C]);return u.useMemo(()=>({open:d,setOpen:h,variant:n,disabled:e,...v,...f}),[d,h,n,e,v,f])},x=u.createContext(null),m=()=>{const t=u.useContext(x);if(t==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return t},y=({initialOpen:t=!1,placement:n="top",variant:r,open:l,triggerEvent:a="click",disabled:o=!1,children:e,...s})=>{const i=B({initialOpen:t,placement:n,variant:r,open:l,triggerEvent:a,disabled:o});return p.jsx(x.Provider,{value:i,children:e})};try{m.displayName="useTooltipState",m.__docgenInfo={description:"This hook holds the TooltipContext.",displayName:"useTooltipState",props:{}}}catch{}try{y.displayName="Tooltip",y.__docgenInfo={description:`A tooltip component that optionally comes in the various semantic flavors (e.g. info, warning, ...). It can be used as an uncontrolled component where
you configure the event type that should open the tooltip (click or hover) or alternatively you can use it as a controlled component where you set the
open state and handle the events that open/close the tooltip yourself.`,displayName:"Tooltip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},triggerEvent:{defaultValue:{value:"click"},description:"Uncontrolled Tooltip: Choose which event should trigger the opening of the tooltip (click or hover)",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},placement:{defaultValue:{value:"top"},description:"Tooltip placement in relation to trigger, default is top",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}},disabled:{defaultValue:{value:"false"},description:"Disable the tooltip. If this is true, the uncontrolled tooltip can't be opened anymore and the cursor hovered over the trigger will be the default cursor instead of the pointer cursor",name:"disabled",required:!1,type:{name:"boolean"}},initialOpen:{defaultValue:{value:"false"},description:"Set whether tooltip should be initially rendered opened or closed. This is only evaluated if Tooltip is in uncontrolled mode",name:"initialOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:`Whether the Tooltip is open. By passing this prop you turn the Tooltip into a controlled component, which means
you also have to take care of opening and closing it. In this case the triggerEvent prop is ignored since you're handling the trigger yourself`,name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Pass the TooltipTrigger and TooltipContent elements as children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const D=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,A=`
    jn-mx-4
    jn-max-w-full
`,H=`
    jn-shrink-0
`,W=t=>{switch(t){case"error":return"dangerous";default:return t}},T=u.forwardRef(function({className:n="",children:r,...l},a){const o=m(),e=g([o.refs.setFloating,a]),s=o.variant;return p.jsx(p.Fragment,{children:o.open&&p.jsxs("div",{className:`juno-tooltip juno-tooltip-${s} ${D} ${n}`,ref:e,style:{...o.floatingStyles},...o.getFloatingProps(l),children:[s&&p.jsx(U,{icon:W(s),color:`jn-text-theme-${s}`,className:`juno-tooltip-popover-icon ${H}`}),p.jsx("p",{className:`${A}`,children:r})]})})});try{T.displayName="TooltipContent",T.__docgenInfo={description:"Put content for a tooltip here. See Tooltip for more in-depth explanation and examples.",displayName:"TooltipContent",props:{children:{defaultValue:null,description:"Pass child nodes to display in the tooltip",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a className to render to the icon button",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=u.forwardRef(function({children:n,asChild:r=!1,className:l="",...a},o){const e=m(),s=g([e.refs.setReference,o]);if(r&&u.isValidElement(n)){const i=n.props,d=i.ref,f={ref:g([e.refs.setReference,o,d]),...a,...i,"data-state":e.open?"open":"closed",className:i.className+`${e.disabled&&" jn-cursor-default"}`},c=e.getReferenceProps(f);return u.cloneElement(n,c)}return p.jsx("button",{ref:s,"data-state":e.open?"open":"closed",...e.getReferenceProps(a),className:`${l} ${e.disabled&&" jn-cursor-default"}`,children:n})});try{_.displayName="TooltipTrigger",_.__docgenInfo={description:"This is the trigger element for a tooltip. See Tooltip for more in-depth explanation and examples.",displayName:"TooltipTrigger",props:{asChild:{defaultValue:{value:"false"},description:"If true, the child you passed to the TooltipTrigger is rendered as the trigger element, instead of the default trigger component. This is useful if you e.g. want to use a Button or Icon as the trigger.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Pass child nodes to display in the tooltip",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a className to render to the trigger element",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{y as T,_ as a,T as b};
