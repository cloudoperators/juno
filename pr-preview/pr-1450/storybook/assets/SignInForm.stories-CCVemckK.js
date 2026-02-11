import{j as e}from"./iframe-Cv31q2a8.js";import{S as i}from"./Stack.component-oc9K_sMN.js";import{M as y}from"./Message.component-C9fb3Bnu.js";import{T as n}from"./TextInput.component-CPoCUlEA.js";import{N as b}from"./NativeSelect.component-Cts5__D_.js";import{N as t}from"./NativeSelectOption.component-DI9Khiw9.js";import{L as x}from"./Label.component-thbeypBP.js";import{B as c}from"./Button.component-B1UqVB23.js";import{C as u}from"./Checkbox.component-Bh0x-Eeb.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-gsVtSZD2.js";import"./FormHint.component-7f09STY3.js";import"./Spinner.component-BeOwv15J.js";const S=`
  jn:text-2xl
  jn:font-bold
  jn:text-theme-highest
`,j=`
  jn:font-medium
  jn:text-sm
  jn:block
  jn:text-right
  jn:my-2 
`,w=`
  jn:font-medium
  jn:text-sm
  jn:text-theme-default
`,m=({title:o="Sign In",error:l=!1,resetPwUrl:d="",className:h="",children:g,...f})=>{const p=l===!0?"Authentication failed":typeof l=="string"?l:null;return e.jsxs("form",{className:`juno-sign-in-form ${h}`,...f,children:[o!==!1&&e.jsx("h4",{className:`juno-sign-in-form-heading ${S}`,children:o}),p&&e.jsx(y,{variant:"error",text:p,className:"jn:my-4"}),e.jsx(i,{direction:"vertical",className:"mx-2",children:g}),d&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:d,className:`juno-sign-in-form-reset-link ${j}`,children:"Reset password"}),e.jsxs("span",{className:`juno-sign-in-form-request-access-link ${w}`,children:["Don’t have an account? ",e.jsx("a",{href:"#",children:"Request Access"})]})]})]})};try{m.displayName="SignInForm",m.__docgenInfo={description:`A SignInForm component that renders consistent, configurable sign-in forms.
Use this component to create authentication forms with a standard layout and styling.`,displayName:"SignInForm",props:{title:{defaultValue:{value:"Sign In"},description:'Title for the sign-in form.\nPass a string to display a custom title, omit or pass nothing to display default "Sign In".\nPass `false` to hide the title completely.',name:"title",required:!1,type:{name:"string | false"}},error:{defaultValue:{value:"false"},description:'Error message to display when authentication fails.\nPass a string for a custom error message.\nPass `true` to display the default error message "Authentication failed".\nPass `false` or omit to hide the error message.',name:"error",required:!1,type:{name:"string | boolean"}},resetPwUrl:{defaultValue:{value:""},description:`URL for the password reset link.
Pass a valid URL string to display the "Reset password" link.
Pass an empty string or omit to hide the link.`,name:"resetPwUrl",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the form for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Form inputs and controls to render.
These are typically TextInput components for username and password,
optional Checkbox for "Remember me", or any additional inputs.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const _={title:"Forms/SignInForm",component:m,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={parameters:{docs:{description:{story:"Not the default behaviour of the SignIn form, but a typical component configuration with username/email field, password input, remember me checkbox, and password reset link."}}},args:{title:"Sign In",resetPwUrl:"#",children:[e.jsxs(i,{direction:"vertical",gap:"2",className:"jn:my-2",children:[e.jsx(n,{label:"Email address",id:"email",required:!0},"email"),e.jsx(n,{label:"Password",id:"password",type:"password",required:!0},"password")]},"inputs"),e.jsx(u,{label:"Remember me",id:"remember"},"remember"),e.jsx(c,{variant:"primary",type:"submit",className:"jn:mt-4",children:"Sign In"},"submit")]}},s={parameters:{docs:{description:{story:"Sign-in form with custom title and additional inputs like region selection. Demonstrates customizable configurations for platform-specific requirements."}}},args:{title:"Sign In to Your Account",error:!0,resetPwUrl:"#",children:[e.jsxs(i,{direction:"vertical",gap:"2",className:"jn:mb-2",children:[e.jsx(n,{label:"Username",id:"username",required:!0},"username"),e.jsx(n,{label:"Password",id:"password",type:"password",required:!0},"password"),e.jsxs(i,{direction:"vertical",gap:"2",children:[e.jsx(x,{text:"Select Region",htmlFor:"region"}),e.jsxs(b,{id:"region",children:[e.jsx(t,{value:"",label:"-- Choose a region --"}),e.jsx(t,{value:"us",label:"United States"}),e.jsx(t,{value:"eu",label:"Europe"}),e.jsx(t,{value:"asia",label:"Asia Pacific"})]})]},"region")]},"inputs"),e.jsx(u,{label:"Remember me",id:"remember"},"remember"),e.jsx(c,{variant:"primary",type:"submit",className:"jn:mt-4",children:"Sign In"},"submit")]}},a={parameters:{docs:{description:{story:"Minimal sign-in form for external authentication flows. No title, no password reset link, proceed button only. Ideal for SSO or third-party auth scenarios where the form is a simple trigger for an external process."}}},args:{title:!1,children:[e.jsx(c,{variant:"primary",type:"submit",children:"Proceed"},"proceed")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          {/* Replace NativeSelect with Select? Or this is an example so it doesn't matter */}
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Minimal sign-in form for external authentication flows. No title, no password reset link, proceed button only. Ideal for SSO or third-party auth scenarios where the form is a simple trigger for an external process."
      }
    }
  },
  args: {
    title: false,
    // Did you mean it like this? Or no children entirely? As it's much easier to handle like passing button as child props. I think if there's no props to pass to the SignInForm component, it's better to consumers to simply just use ternary like (X && Y && Z ? <Sign x={X} y={Y} z={Z} /> : <Button>Proceed</Button>) I am asking as I am not quite sure I understood you correctly with this no children line) or Did you mean when someone using <SignInForm /> => it's rendering as <Button>Proceed</Button>?
    children: [<Button key="proceed" variant="primary" type="submit">
        Proceed
      </Button>]
  }
}`,...a.parameters?.docs?.source}}};const E=["Default","AdditionalInputs","ExternalAuthentication"];export{s as AdditionalInputs,r as Default,a as ExternalAuthentication,E as __namedExportsOrder,_ as default};
