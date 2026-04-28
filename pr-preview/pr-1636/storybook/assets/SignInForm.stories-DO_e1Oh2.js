import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./Message.component-DG97QzGz.js";import"./Message-Di_i94FU.js";import{t as r}from"./PortalProvider.component-C0iptKAD.js";import"./PortalProvider-BUJ015cu.js";import{t as i}from"./Stack.component-O2Jjm6dw.js";import"./Stack-LLgz_L3W.js";import{t as a}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";import{t as o}from"./Checkbox.component-CmRiFrIM.js";import"./Checkbox-DZdsX2af.js";import{n as s,t as c}from"./SelectOption.component-BwnvgQm2.js";import{t as l}from"./TextInput.component-ccvShNSP.js";import"./SelectOption-DpZKkzoj.js";import"./TextInput-CHZBDZLs.js";e();var u=t(),d=`
  jn:text-xl
  jn:font-bold
  jn:text-theme-highest
  jn:mb-4
`,f=`
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:mt-2
`,p=({title:e=`Sign In`,error:t=!1,resetPwUrl:r=null,className:a=``,children:o,...s})=>{let c=t===!0?`Authentication failed`:typeof t==`string`?t:null;return(0,u.jsxs)(`form`,{className:`juno-sign-in-form ${a}`,...s,children:[e!==!1&&(0,u.jsx)(`h1`,{className:`juno-sign-in-form-heading ${d}`,children:e}),c&&(0,u.jsx)(n,{variant:`error`,text:c,className:`jn:mb-4`}),(0,u.jsx)(i,{direction:`vertical`,gap:`2`,children:o}),r&&(0,u.jsx)(`a`,{href:r,className:`juno-sign-in-form-reset-link ${f}`,children:`Reset password`})]})};try{p.displayName=`SignInForm`,p.__docgenInfo={description:`A SignInForm component that renders consistent, configurable sign-in forms.
Use this component to create authentication forms with a standard layout and styling.`,displayName:`SignInForm`,props:{title:{defaultValue:{value:`Sign In`},description:`Title for the sign-in form.
Pass a string to display a custom title, omit or pass nothing to display default "Sign In".
Pass \`false\` to hide the title completely.`,name:`title`,required:!1,type:{name:`string | false`}},error:{defaultValue:{value:`false`},description:'Error message to display when authentication fails.\nPass a string for a custom error message.\nPass `true` to display the default error message "Authentication failed".\nPass `false` or omit to hide the error message.',name:`error`,required:!1,type:{name:`string | boolean`}},resetPwUrl:{defaultValue:{value:`null`},description:`URL for the password reset link.
Pass a valid URL string to display the "Reset password" link.
Pass \`null\` (default) or an empty string to hide the link.`,name:`resetPwUrl`,required:!1,type:{name:`string | null`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the form for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Form inputs and controls to render.
These are typically TextInput components for username and password,
optional Checkbox for "Remember me", or any additional inputs.
Automatic layout and spacing is applied to children via a Stack component.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var m={title:`Forms/SignInForm`,component:p,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,u.jsx)(r,{children:(0,u.jsx)(e,{})})]},h=e=>[(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{label:`Email address`,id:`email`,required:!0},`email`),(0,u.jsx)(l,{label:`Password`,id:`password`,type:`password`,required:!0},`password`),e,(0,u.jsx)(o,{label:`Remember me`,id:`remember`},`remember`)]}),(0,u.jsx)(a,{variant:`primary`,type:`submit`,className:`jn:mt-4 jn:w-full`,children:`Sign In`},`submit`)],g={parameters:{docs:{description:{story:`Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link.`}}},args:{title:`Sign In`,resetPwUrl:`#`,children:h()}},_={parameters:{docs:{description:{story:`Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements.`}}},args:{title:`Sign In to Your Account`,resetPwUrl:`#`,children:h((0,u.jsxs)(s,{placeholder:`Select Region`,id:`region`,children:[(0,u.jsx)(c,{value:`us`,children:`United States`},`r-1`),(0,u.jsx)(c,{value:`eu`,children:`Europe`},`r-2`),(0,u.jsx)(c,{value:`asia`,children:`Asia Pacific`},`r-3`)]},`region`))}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`AdditionalInputs`];export{_ as AdditionalInputs,g as Default,v as __namedExportsOrder,m as default};