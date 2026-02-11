import{j as e}from"./iframe-CmWawiEA.js";import{S as a}from"./Stack.component-B9rIfVY7.js";import{M as y}from"./Message.component-DT5xMwZe.js";import{T as i}from"./TextInput.component-DGfoDfHO.js";import{N as b}from"./NativeSelect.component-LKyMRNwo.js";import{N as t}from"./NativeSelectOption.component-jkRpdskE.js";import{L as x}from"./Label.component-CHBi4afU.js";import{B as c}from"./Button.component-Cuh6WU_2.js";import{C as u}from"./Checkbox.component-DVtLYUAK.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-qN065CEA.js";import"./FormHint.component-CUfnqvoF.js";import"./Spinner.component-8WBJxe8f.js";const j=`
  jn:text-2xl
  jn:font-bold
  jn:text-theme-highest
`,S=`
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:my-2 
`,w=`
  jn:font-medium
  jn:text-sm
  jn:text-theme-default
`,m=({title:o="Sign In",error:l=!1,resetPwUrl:d="",className:f="",children:g,...h})=>{const p=l===!0?"Authentication failed":typeof l=="string"?l:null;return e.jsxs("form",{className:`juno-sign-in-form ${f}`,...h,children:[o!==!1&&e.jsx("h4",{className:`juno-sign-in-form-heading ${j}`,children:o}),p&&e.jsx(y,{variant:"error",text:p,className:"jn:my-4"}),e.jsx(a,{direction:"vertical",className:"mx-2",children:g}),d&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:d,className:`juno-sign-in-form-reset-link ${S}`,children:"Reset password"}),e.jsxs("span",{className:`juno-sign-in-form-request-access-link ${w}`,children:["Don’t have an account? ",e.jsx("a",{href:"#",children:"Request Access"})]})]})]})};try{m.displayName="SignInForm",m.__docgenInfo={description:`A SignInForm component that renders consistent, configurable sign-in forms.
Use this component to create authentication forms with a standard layout and styling.`,displayName:"SignInForm",props:{title:{defaultValue:{value:"Sign In"},description:'Title for the sign-in form.\nPass a string to display a custom title, omit or pass nothing to display default "Sign In".\nPass `false` to hide the title completely.',name:"title",required:!1,type:{name:"string | false"}},error:{defaultValue:{value:"false"},description:'Error message to display when authentication fails.\nPass a string for a custom error message.\nPass `true` to display the default error message "Authentication failed".\nPass `false` or omit to hide the error message.',name:"error",required:!1,type:{name:"string | boolean"}},resetPwUrl:{defaultValue:{value:""},description:`URL for the password reset link.
Pass a valid URL string to display the "Reset password" link.
Pass an empty string or omit to hide the link.`,name:"resetPwUrl",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the form for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Form inputs and controls to render.
These are typically TextInput components for username and password,
optional Checkbox for "Remember me", or any additional inputs.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const B={title:"Forms/SignInForm",component:m,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={parameters:{docs:{description:{story:"Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link."}}},args:{title:"Sign In",resetPwUrl:"#",children:[e.jsxs(a,{direction:"vertical",gap:"2",className:"jn:my-2",children:[e.jsx(i,{label:"Email address",id:"email",required:!0},"email"),e.jsx(i,{label:"Password",id:"password",type:"password",required:!0},"password")]},"inputs"),e.jsx(u,{label:"Remember me",id:"remember"},"remember"),e.jsx(c,{variant:"primary",type:"submit",className:"jn:mt-4",children:"Sign In"},"submit")]}},n={parameters:{docs:{description:{story:"Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements."}}},args:{title:"Sign In to Your Account",error:!0,resetPwUrl:"#",children:[e.jsxs(a,{direction:"vertical",gap:"2",className:"jn:mb-2",children:[e.jsx(i,{label:"Username",id:"username",required:!0},"username"),e.jsx(i,{label:"Password",id:"password",type:"password",required:!0},"password"),e.jsxs(a,{direction:"vertical",gap:"2",children:[e.jsx(x,{text:"Select Region",htmlFor:"region"}),e.jsxs(b,{id:"region",children:[e.jsx(t,{value:"",label:"-- Choose a region --"}),e.jsx(t,{value:"us",label:"United States"}),e.jsx(t,{value:"eu",label:"Europe"}),e.jsx(t,{value:"asia",label:"Asia Pacific"})]})]},"region")]},"inputs"),e.jsx(u,{label:"Remember me",id:"remember"},"remember"),e.jsx(c,{variant:"primary",type:"submit",className:"jn:mt-4",children:"Sign In"},"submit")]}},s={parameters:{docs:{description:{story:"Minimal sign-in form for external authentication flows. No title, no password reset link, proceed button only. Ideal for SSO or third-party auth scenarios where the form is a simple trigger for an external process."}}},args:{title:!1,children:[e.jsx(c,{variant:"primary",type:"submit",children:"Proceed"},"proceed")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    children: [<Stack key="inputs" direction="vertical" gap="2" className="jn:my-2">
        <TextInput key="email" label="Email address" id="email" required />
        <TextInput key="password" label="Password" id="password" type="password" required />
      </Stack>, <Checkbox key="remember" label="Remember me" id="remember" />, <Button key="submit" variant="primary" type="submit" className="jn:mt-4">
        Sign In
      </Button>]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements."
      }
    }
  },
  args: {
    title: "Sign In to Your Account",
    error: true,
    resetPwUrl: "#",
    children: [<Stack key="inputs" direction="vertical" gap="2" className="jn:mb-2">
        <TextInput key="username" label="Username" id="username" required />
        <TextInput key="password" label="Password" id="password" type="password" required />
        <Stack key="region" direction="vertical" gap="2">
          <Label text="Select Region" htmlFor="region" />
          <NativeSelect id="region">
            <NativeSelectOption value="" label="-- Choose a region --" />
            <NativeSelectOption value="us" label="United States" />
            <NativeSelectOption value="eu" label="Europe" />
            <NativeSelectOption value="asia" label="Asia Pacific" />
          </NativeSelect>
        </Stack>
      </Stack>, <Checkbox key="remember" label="Remember me" id="remember" />, <Button key="submit" variant="primary" type="submit" className="jn:mt-4">
        Sign In
      </Button>]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Minimal sign-in form for external authentication flows. No title, no password reset link, proceed button only. Ideal for SSO or third-party auth scenarios where the form is a simple trigger for an external process."
      }
    }
  },
  args: {
    title: false,
    children: [<Button key="proceed" variant="primary" type="submit">
        Proceed
      </Button>]
  }
}`,...s.parameters?.docs?.source}}};const C=["Default","AdditionalInputs","ExternalAuthentication"];export{n as AdditionalInputs,r as Default,s as ExternalAuthentication,C as __namedExportsOrder,B as default};
