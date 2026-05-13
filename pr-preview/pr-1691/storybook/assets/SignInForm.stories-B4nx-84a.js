import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe-BtomNbgA.js";import{t as r}from"./Message.component-PuAnAbuZ.js";import{t as i}from"./Message-DM94zE1v.js";import{t as a}from"./PortalProvider.component-Dnb2v0Oi.js";import{t as o}from"./PortalProvider-CclgbU8f.js";import{t as s}from"./Stack.component-CKQ1DgWO.js";import{t as c}from"./Stack-CXBpiZRK.js";import{t as l}from"./Button.component-DtFgMftJ.js";import{t as u}from"./Button-BBJkEbWd.js";import{t as d}from"./Checkbox.component-BUEaqRjS.js";import{t as f}from"./Checkbox-JvOdUqUf.js";import{r as p,t as m}from"./SelectOption.component-FGBiQSPi.js";import{t as h}from"./TextInput.component-CbZwzu2k.js";import{n as g,t as _}from"./SelectOption-CHlIUsc7.js";import{t as v}from"./TextInput-Dxzdrq2v.js";var y,b,x,S,C=e((()=>{n(),i(),c(),y=t(),b=`
  jn:text-xl
  jn:font-bold
  jn:text-theme-highest
  jn:mb-4
`,x=`
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:mt-2
`,S=({title:e=`Sign In`,error:t=!1,resetPwUrl:n=null,className:i=``,children:a,...o})=>{let c=t===!0?`Authentication failed`:typeof t==`string`?t:null;return(0,y.jsxs)(`form`,{className:`juno-sign-in-form ${i}`,...o,children:[e!==!1&&(0,y.jsx)(`h1`,{className:`juno-sign-in-form-heading ${b}`,children:e}),c&&(0,y.jsx)(r,{variant:`error`,text:c,className:`jn:mb-4`}),(0,y.jsx)(s,{direction:`vertical`,gap:`2`,children:a}),n&&(0,y.jsx)(`a`,{href:n,className:`juno-sign-in-form-reset-link ${x}`,children:`Reset password`})]})};try{S.displayName=`SignInForm`,S.__docgenInfo={description:`A SignInForm component that renders consistent, configurable sign-in forms.
Use this component to create authentication forms with a standard layout and styling.`,displayName:`SignInForm`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SignInForm/SignInForm.component.tsx`,methods:[],props:{title:{defaultValue:{value:`Sign In`},declarations:[{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`}],description:`Title for the sign-in form.
Pass a string to display a custom title, omit or pass nothing to display default "Sign In".
Pass \`false\` to hide the title completely.`,name:`title`,parent:{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`},required:!1,tags:{},type:{name:`string | false`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`}],description:'Error message to display when authentication fails.\nPass a string for a custom error message.\nPass `true` to display the default error message "Authentication failed".\nPass `false` or omit to hide the error message.',name:`error`,parent:{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`},required:!1,tags:{},type:{name:`string | boolean`}},resetPwUrl:{defaultValue:{value:`null`},declarations:[{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`}],description:`URL for the password reset link.
Pass a valid URL string to display the "Reset password" link.
Pass \`null\` (default) or an empty string to hide the link.`,name:`resetPwUrl`,parent:{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`},required:!1,tags:{},type:{name:`string | null`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`}],description:`Additional CSS classes to apply to the form for custom styling.`,name:`className`,parent:{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`}],description:`Form inputs and controls to render.
These are typically TextInput components for username and password,
optional Checkbox for "Remember me", or any additional inputs.
Automatic layout and spacing is applied to children via a Stack component.`,name:`children`,parent:{fileName:`ui-components/src/components/SignInForm/SignInForm.component.tsx`,name:`SignInFormProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),w,T,E,D,O,k;e((()=>{n(),C(),v(),u(),f(),_(),g(),o(),w=t(),T={title:`Forms/SignInForm`,component:S,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,w.jsx)(a,{children:(0,w.jsx)(e,{})})]},E=e=>[(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{label:`Email address`,id:`email`,required:!0},`email`),(0,w.jsx)(h,{label:`Password`,id:`password`,type:`password`,required:!0},`password`),e,(0,w.jsx)(d,{label:`Remember me`,id:`remember`},`remember`)]}),(0,w.jsx)(l,{variant:`primary`,type:`submit`,className:`jn:mt-4 jn:w-full`,children:`Sign In`},`submit`)],D={parameters:{docs:{description:{story:`Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link.`}}},args:{title:`Sign In`,resetPwUrl:`#`,children:E()}},O={parameters:{docs:{description:{story:`Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements.`}}},args:{title:`Sign In to Your Account`,resetPwUrl:`#`,children:E((0,w.jsxs)(p,{placeholder:`Select Region`,id:`region`,children:[(0,w.jsx)(m,{value:`us`,children:`United States`},`r-1`),(0,w.jsx)(m,{value:`eu`,children:`Europe`},`r-2`),(0,w.jsx)(m,{value:`asia`,children:`Asia Pacific`},`r-3`)]},`region`))}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`AdditionalInputs`]}))();export{O as AdditionalInputs,D as Default,k as __namedExportsOrder,T as default};