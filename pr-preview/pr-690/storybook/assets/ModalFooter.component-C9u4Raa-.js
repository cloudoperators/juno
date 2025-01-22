import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{B as t}from"./Button.component-BTneKM6z.js";import{B as d}from"./ButtonRow.component-C0tnjy3k.js";const b=`
	jn-flex
	jn-flex-row
	jn-border-t
	jn-border-theme-background-lvl-4
	jn-py-2
	jn-px-8
`,C=`
	jn-justify-end
	jn-gap-3.5
`,u=({children:n,confirmButtonLabel:l="",cancelButtonLabel:r="",confirmButtonIcon:m=null,cancelButtonIcon:c=null,onConfirm:a,onCancel:s,className:f="",...p})=>{const h=o=>{a&&a(o)},i=o=>{s&&s(o)};return e.jsx("div",{className:`juno-modal-footer ${b} ${n?null:C} ${f} `,...p,children:n||(l||a?e.jsxs(d,{children:[e.jsx(t,{variant:"primary",label:l||"Confirm",icon:m||void 0,onClick:h}),e.jsx(t,{variant:"subdued",label:r||"Cancel",icon:c||void 0,onClick:i})]}):e.jsx(d,{children:e.jsx(t,{variant:"subdued",onClick:i,label:r||"Close",icon:c||void 0})}))})};try{u.displayName="ModalFooter",u.__docgenInfo={description:`A Footer component for Modal.
Renders a simple "Close" Button (and accepts a corresponding onCancel-handler) by default.
Can be passed a confirmButtonLabel and cancelButton label with corresponding onConfirm- and onCancel-handlers.
Can alternatively render all custom children as passed.`,displayName:"ModalFooter",props:{children:{defaultValue:null,description:"Custom children to render. Anything goes.",name:"children",required:!1,type:{name:"ReactNode"}},confirmButtonLabel:{defaultValue:{value:""},description:"The label for the Confirm-button. When passed, the component will render a Confirm button and a cancel button, otherwise the component will ONLY render a Close-Button.",name:"confirmButtonLabel",required:!1,type:{name:"string"}},cancelButtonLabel:{defaultValue:{value:""},description:"Custom label for the cancel button. ONLY has an effect if a `confirmButtonLabel` is passed.",name:"cancelButtonLabel",required:!1,type:{name:"string"}},confirmButtonIcon:{defaultValue:{value:"null"},description:"Pass an Icon name to show on the confirming action button",name:"confirmButtonIcon",required:!1,type:{name:'"error" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | ... 40 more ...'}},cancelButtonIcon:{defaultValue:{value:"null"},description:"Pass an icon name to show on the cancelling button",name:"cancelButtonIcon",required:!1,type:{name:'"error" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | ... 40 more ...'}},className:{defaultValue:{value:""},description:"A custom className. Useful to configure flex items alignment when passing custom content as children.",name:"className",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Handler to execute once the confirming button is clicked",name:"onConfirm",required:!1,type:{name:"MouseEventHandler<EventTarget> | null"}},onCancel:{defaultValue:null,description:"Handler to execute once the cancelling button is clicked",name:"onCancel",required:!1,type:{name:"MouseEventHandler<EventTarget> | null"}}}}}catch{}export{u as M};
