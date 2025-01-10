import{j as t}from"./jsx-runtime-D6fbYt3N.js";import"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{T as ie}from"./TextInput.component-Dwyrf7KM.js";import{F as ue}from"./FormRow.component-DSZj0ARw.js";import{w as pe}from"./withDeprecationWarning.component-Cd49MbBc.js";import"./FormHint.component-BiIM_CZV.js";import"./Icon.component-BXxTB2S-.js";import"./widgets-BR6-ubtP.js";const c=({type:Y=null,value:$="",name:z="",label:G="",id:J="",placeholder:K="",helptext:M="",required:Q=!1,invalid:U=!1,errortext:X="",valid:Z=!1,successtext:ee="",autoFocus:te=!1,className:ae="",disabled:re=!1,onChange:se=void 0,onFocus:oe=void 0,onBlur:ne=void 0,...le})=>t.jsx(ue,{children:t.jsx(ie,{type:Y,value:$,name:z,id:J,label:G,required:Q,placeholder:K,disabled:re,invalid:U,valid:Z,autoFocus:te,onChange:se,errortext:X,helptext:M,successtext:ee,className:ae,onFocus:oe,onBlur:ne,...le})});c.propTypes={type:e.oneOf(["text","password","email","tel","url","number"]),value:e.string,name:e.string,label:e.string,id:e.string,placeholder:e.string,helptext:e.node,required:e.bool,invalid:e.bool,errortext:e.string,valid:e.bool,successtext:e.string,autoFocus:e.bool,className:e.string,disabled:e.bool,onChange:e.func,onFocus:e.func,onBlur:e.func};const de=pe(c,"TextInputRow is deprecated and will be removed in future versions. To be future-proof, use TextInput instead.");c.__docgenInfo={description:"DEPRECATED: A text input row containing an input of type text, password, email, tel, or url, an associated label, and necessary structural markup. This component is DEPRECATED, use TextInput instead.",methods:[],displayName:"TextInputRow",props:{type:{defaultValue:{value:"null",computed:!1},description:"The type of the input element to render",type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"password"',computed:!1},{value:'"email"',computed:!1},{value:'"tel"',computed:!1},{value:'"url"',computed:!1},{value:'"number"',computed:!1}]},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"Optional initial value",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"Name attribute of the input",type:{name:"string"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Placeholder for the text input. Will not be visible on floating label inputs.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Specify whether the input is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the input is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Error text to display below the input element. When passed, the component will be set to invalid automatically.",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the input is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Text to display when validation is successful. Will automatically set the field to valid if passed.",type:{name:"string"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"Whether the input element should automatically receive focus",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable the input",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the input element",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the input element",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the input element",type:{name:"func"},required:!1}}};const be={title:"Deprecated/TextInputRow",component:de,parameters:{docs:{description:{component:"DEPRECATED: A text input row containing an input of type text, password, email, tel, or url, an associated label, and necessary structural markup. This component is DEPRECATED, use TextInput instead."}}},argTypes:{type:{options:["text","password","email","tel","url","number"],control:{type:"select"}},errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},children:{control:!1}}},a={args:{label:"Default Text Input Row"}},r={args:{label:"Disabled Text Input Row",disabled:!0},parameters:{docs:{description:{story:"Set `disabled` to true to disable the input."}}}},s={args:{name:"my-input",label:"Text Input Row with Help Text",helptext:"Oh so helpful helptext"}},o={args:{name:"my-input",label:"Text Input Row with Help Text containing a link",helptext:t.jsxs(t.Fragment,{children:["Helptext with a ",t.jsx("a",{href:"#",children:"Link"})]})}},n={args:{label:"Required Input Row",required:!0,helptext:"this field is required"},parameters:{docs:{description:{story:"Setting `required` to true to render the required marker to the label. Note that this will not set the html-`required` attribute in the rendered. You will have to manage checking for completeness and showing error messages yourself."}}}},l={args:{label:"Invalid Input Row",invalid:!0},parameters:{docs:{description:{story:"Set `invalid` to true to invalidate the field and render the associated styles and the icon."}}}},i={args:{label:"Input Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the InputRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the TextInputRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},u={args:{label:"Valid Input Row",valid:!0},parameters:{docs:{description:{story:"Set `valid` to true to set the field to valid and render the associated styles and the icon."}}}},p={args:{label:"Input Row with Success Text",helptext:"Oh so helpful helptext",successtext:"When passed an errortext prop, the InputRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing a `successtext` prop to the TextInputRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."}}}},d={args:{autoFocus:!0,label:"Text Input Row"},parameters:{docs:{description:{story:"Set `autoFocus` to true to automatically focus the input."}}}};var m,h,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Default Text Input Row"
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Disabled Text Input Row",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Set \`disabled\` to true to disable the input."
      }
    }
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,g,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Text Input Row with Help Text",
    helptext: "Oh so helpful helptext"
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,I,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Text Input Row with Help Text containing a link",
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>
  }
}`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var q,S,V;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Required Input Row",
    required: true,
    helptext: "this field is required"
  },
  parameters: {
    docs: {
      description: {
        story: "Setting \`required\` to true to render the required marker to the label. Note that this will not set the html-\`required\` attribute in the rendered. You will have to manage checking for completeness and showing error messages yourself."
      }
    }
  }
}`,...(V=(S=n.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var W,D,E;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Invalid Input Row",
    invalid: true
  },
  parameters: {
    docs: {
      description: {
        story: "Set \`invalid\` to true to invalidate the field and render the associated styles and the icon."
      }
    }
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var P,k,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Input Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the InputRow will be set to invalid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing an \`errortext\` prop to the TextInputRow component will automatically invalidate it, so there is no need to explicitly set \`invalid\` as well."
      }
    }
  }
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,O,A;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Valid Input Row",
    valid: true
  },
  parameters: {
    docs: {
      description: {
        story: "Set \`valid\` to true to set the field to valid and render the associated styles and the icon."
      }
    }
  }
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var N,j,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Input Row with Success Text",
    helptext: "Oh so helpful helptext",
    successtext: "When passed an errortext prop, the InputRow will be set to invalid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing a \`successtext\` prop to the TextInputRow component will automatically set it to valid, so there is no need to explicitly set \`valid\` as well."
      }
    }
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,_,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    autoFocus: true,
    label: "Text Input Row"
  },
  parameters: {
    docs: {
      description: {
        story: "Set \`autoFocus\` to true to automatically focus the input."
      }
    }
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const Te=["Default","Disabled","WithHelpText","WithHelpTextWithLink","Required","Invalid","WithErrorText","Valid","WithSuccessText","Autofocus"];export{d as Autofocus,a as Default,r as Disabled,l as Invalid,n as Required,u as Valid,i as WithErrorText,s as WithHelpText,o as WithHelpTextWithLink,p as WithSuccessText,Te as __namedExportsOrder,be as default};
