import{j as e}from"./iframe-Cqsz0kI4.js";import{M as f}from"./Message.component-DCipxp9s.js";import{S as g}from"./Stack.component-BJEVJNuN.js";import{T as m}from"./TextInput.component-Dmbk1Kpv.js";import{B as h}from"./Button.component-xSNvKgni.js";import{C as y}from"./Checkbox.component-jhpQGZPQ.js";import{S,a as i}from"./SelectOption.component-Dp34v0OW.js";import{P as j}from"./PortalProvider.component-OqzcqvC2.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BAsoZ44U.js";import"./Label.component-BJzuOT2C.js";import"./FormHint.component-BGvIcShV.js";import"./Spinner.component-DJeZH7nH.js";import"./element-movement-9ZjgJsos.js";import"./floating-ui.react-BDiu4F99.js";import"./frozen-c5MpRpYN.js";import"./use-text-value-DXyOvjZ5.js";const x=`
  jn:text-xl
  jn:font-bold
  jn:text-theme-highest
  jn:mb-4
`,b=`
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:mt-2
`,o=({title:t="Sign In",error:s=!1,resetPwUrl:a=null,className:d="",children:p,...u})=>{const l=s===!0?"Authentication failed":typeof s=="string"?s:null;return e.jsxs("form",{className:`juno-sign-in-form ${d}`,...u,children:[t!==!1&&e.jsx("h1",{className:`juno-sign-in-form-heading ${x}`,children:t}),l&&e.jsx(f,{variant:"error",text:l,className:"jn:mb-4"}),e.jsx(g,{direction:"vertical",gap:"2",children:p}),a&&e.jsx("a",{href:a,className:`juno-sign-in-form-reset-link ${b}`,children:"Reset password"})]})};try{o.displayName="SignInForm",o.__docgenInfo={description:`A SignInForm component that renders consistent, configurable sign-in forms.
Use this component to create authentication forms with a standard layout and styling.`,displayName:"SignInForm",props:{title:{defaultValue:{value:"Sign In"},description:'Title for the sign-in form.\nPass a string to display a custom title, omit or pass nothing to display default "Sign In".\nPass `false` to hide the title completely.',name:"title",required:!1,type:{name:"string | false"}},error:{defaultValue:{value:"false"},description:'Error message to display when authentication fails.\nPass a string for a custom error message.\nPass `true` to display the default error message "Authentication failed".\nPass `false` or omit to hide the error message.',name:"error",required:!1,type:{name:"string | boolean"}},resetPwUrl:{defaultValue:{value:"null"},description:'URL for the password reset link.\nPass a valid URL string to display the "Reset password" link.\nPass `null` (default) or an empty string to hide the link.',name:"resetPwUrl",required:!1,type:{name:"string | null"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the form for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Form inputs and controls to render.
These are typically TextInput components for username and password,
optional Checkbox for "Remember me", or any additional inputs.
Automatic layout and spacing is applied to children via a Stack component.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const D={title:"Forms/SignInForm",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[t=>e.jsx(j,{children:e.jsx(t,{})})]},c=t=>[e.jsxs(e.Fragment,{children:[e.jsx(m,{label:"Email address",id:"email",required:!0},"email"),e.jsx(m,{label:"Password",id:"password",type:"password",required:!0},"password"),t,e.jsx(y,{label:"Remember me",id:"remember"},"remember")]}),e.jsx(h,{variant:"primary",type:"submit",className:"jn:mt-4 jn:w-full",children:"Sign In"},"submit")],n={parameters:{docs:{description:{story:"Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link."}}},args:{title:"Sign In",resetPwUrl:"#",children:c()}},r={parameters:{docs:{description:{story:"Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements."}}},args:{title:"Sign In to Your Account",resetPwUrl:"#",children:c(e.jsxs(S,{placeholder:"Select Region",id:"region",children:[e.jsx(i,{value:"us",children:"United States"},"r-1"),e.jsx(i,{value:"eu",children:"Europe"},"r-2"),e.jsx(i,{value:"asia",children:"Asia Pacific"},"r-3")]},"region"))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const L=["Default","AdditionalInputs"];export{r as AdditionalInputs,n as Default,L as __namedExportsOrder,D as default};
