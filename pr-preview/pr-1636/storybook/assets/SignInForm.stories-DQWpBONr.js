import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Message.component-Ckd1ZT7w.js";import"./Message-BQLtvugB.js";import{t as n}from"./PortalProvider.component-C2fswz4A.js";import"./PortalProvider-CbIFc8Et.js";import{t as r}from"./Stack.component-VgKXhu8w.js";import"./Stack-e9Jsz70q.js";import{t as i}from"./Button.component-DvVUjNUj.js";import"./Button-B0IkcDoi.js";import{t as a}from"./Checkbox.component-gc06fd9Q.js";import"./Checkbox-B2jt-2mY.js";import{n as o,t as s}from"./SelectOption.component-Bx7_1Iqc.js";import{t as c}from"./TextInput.component-llqnSM0l.js";import"./SelectOption-BmQSXbJk.js";import"./TextInput-7wPI8JQd.js";import"react";var l=e(),u=`
  jn:text-xl
  jn:font-bold
  jn:text-theme-highest
  jn:mb-4
`,d=`
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:mt-2
`,f=({title:e=`Sign In`,error:n=!1,resetPwUrl:i=null,className:a=``,children:o,...s})=>{let c=n===!0?`Authentication failed`:typeof n==`string`?n:null;return(0,l.jsxs)(`form`,{className:`juno-sign-in-form ${a}`,...s,children:[e!==!1&&(0,l.jsx)(`h1`,{className:`juno-sign-in-form-heading ${u}`,children:e}),c&&(0,l.jsx)(t,{variant:`error`,text:c,className:`jn:mb-4`}),(0,l.jsx)(r,{direction:`vertical`,gap:`2`,children:o}),i&&(0,l.jsx)(`a`,{href:i,className:`juno-sign-in-form-reset-link ${d}`,children:`Reset password`})]})};try{f.displayName=`SignInForm`,f.__docgenInfo={description:`A SignInForm component that renders consistent, configurable sign-in forms.
Use this component to create authentication forms with a standard layout and styling.`,displayName:`SignInForm`,props:{title:{defaultValue:{value:`Sign In`},description:`Title for the sign-in form.
Pass a string to display a custom title, omit or pass nothing to display default "Sign In".
Pass \`false\` to hide the title completely.`,name:`title`,required:!1,type:{name:`string | false`}},error:{defaultValue:{value:`false`},description:'Error message to display when authentication fails.\nPass a string for a custom error message.\nPass `true` to display the default error message "Authentication failed".\nPass `false` or omit to hide the error message.',name:`error`,required:!1,type:{name:`string | boolean`}},resetPwUrl:{defaultValue:{value:`null`},description:`URL for the password reset link.
Pass a valid URL string to display the "Reset password" link.
Pass \`null\` (default) or an empty string to hide the link.`,name:`resetPwUrl`,required:!1,type:{name:`string | null`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the form for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Form inputs and controls to render.
These are typically TextInput components for username and password,
optional Checkbox for "Remember me", or any additional inputs.
Automatic layout and spacing is applied to children via a Stack component.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var p={title:`Forms/SignInForm`,component:f,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,l.jsx)(n,{children:(0,l.jsx)(e,{})})]},m=e=>[(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{label:`Email address`,id:`email`,required:!0},`email`),(0,l.jsx)(c,{label:`Password`,id:`password`,type:`password`,required:!0},`password`),e,(0,l.jsx)(a,{label:`Remember me`,id:`remember`},`remember`)]}),(0,l.jsx)(i,{variant:`primary`,type:`submit`,className:`jn:mt-4 jn:w-full`,children:`Sign In`},`submit`)],h={parameters:{docs:{description:{story:`Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link.`}}},args:{title:`Sign In`,resetPwUrl:`#`,children:m()}},g={parameters:{docs:{description:{story:`Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements.`}}},args:{title:`Sign In to Your Account`,resetPwUrl:`#`,children:m((0,l.jsxs)(o,{placeholder:`Select Region`,id:`region`,children:[(0,l.jsx)(s,{value:`us`,children:`United States`},`r-1`),(0,l.jsx)(s,{value:`eu`,children:`Europe`},`r-2`),(0,l.jsx)(s,{value:`asia`,children:`Asia Pacific`},`r-3`)]},`region`))}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link."
      }
    }
  },
  args: {
    title: "Sign In",
    resetPwUrl: "#",
    children: commonFormChildren()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements."
      }
    }
  },
  args: {
    title: "Sign In to Your Account",
    resetPwUrl: "#",
    children: commonFormChildren(<Select key="region" placeholder="Select Region" id="region">
        <SelectOption value="us" key="r-1">
          United States
        </SelectOption>
        <SelectOption value="eu" key="r-2">
          Europe
        </SelectOption>
        <SelectOption value="asia" key="r-3">
          Asia Pacific
        </SelectOption>
      </Select>)
  }
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`AdditionalInputs`];export{g as AdditionalInputs,h as Default,_ as __namedExportsOrder,p as default};