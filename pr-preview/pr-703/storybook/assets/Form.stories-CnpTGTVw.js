import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{F as w}from"./Form.component-YsPgmymH.js";import{F as o}from"./FormRow.component-DeN_H-xw.js";import{F as m}from"./FormHint.component-Bac6eIcI.js";import{F as d}from"./FormSection.component-Dp9jZR6V.js";import{S as k,a as s}from"./SelectOption.component-BuvwoFR9.js";import{T as R}from"./Textarea.component-U3eGKx0N.js";import{T as r}from"./TextInput.component-CcLUjlWS.js";import{B as t}from"./Button.component-BIYLgaLD.js";import{B as F}from"./ButtonRow.component-bDhN_D-k.js";import{R as S,a}from"./Radio.component-CBvWSbBm.js";import{a as B,C as c}from"./Checkbox.component-rXdgT47Y.js";import{P as g}from"./PortalProvider.component-DuC_IbOk.js";import{I as C}from"./IntroBox.component-PvDwZz-1.js";import{S as u}from"./Switch.component-BIbIiIzx.js";import"./index-DysCNOs_.js";import"./Label.component-D1jWKEjF.js";import"./Icon.component-BzIpr4Ej.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-a74gjTKo.js";import"./headlessui-float-CRaAej_Z.js";import"./index-DxCGxluL.js";import"./keyboard-BayCKsX5.js";import"./floating-ui.react-dom-t1-XbZXo.js";import"./listbox-Dqb8rs3Q.js";import"./form-DbO9dA4O.js";import"./use-text-value-CqB0ebPQ.js";import"./Stack.component-B4IgElTG.js";const te={title:"Forms/Form",component:w,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[i=>e.jsx("div",{className:"jn-pb-12",style:{minHeight:"250px"},children:e.jsx(g,{children:e.jsx(i,{})})})]},j=({children:i,...v})=>e.jsx(w,{...v,children:i}),l={render:j,args:{title:"A Simple Form",children:[e.jsx(o,{children:e.jsx(r,{label:"First Name",id:"first-name"})},"f-1"),e.jsx(o,{children:e.jsx(r,{label:"Last Name",id:"last-name"})},"f-2"),e.jsx(o,{children:e.jsx(r,{label:"Email",id:"email",type:"email",required:!0})},"f-3"),e.jsxs(F,{children:[e.jsx(t,{children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Submit"})]},"f-4")]}},n={render:j,args:{title:"A Complex Form",children:[e.jsx(C,{text:"In order to get to know you, we need to talk about colors."},"ib-1"),e.jsxs(d,{title:"First Section of the Form",children:[e.jsxs(o,{children:[e.jsxs(k,{label:"Your Favorite Color",placeholder:"Select your favorite color…",id:"color",children:[e.jsx(s,{value:"red",children:"Red"},"so-1"),e.jsx(s,{value:"blue",children:"Blue"},"so-2"),e.jsx(s,{value:"other",children:"Other"},"so-3")]}),e.jsx(m,{text:"Your favorite color to the best of your knowledge"})]},"fr-1"),e.jsx(o,{children:e.jsx(r,{label:"First Name",id:"first-name"})},"fr-2"),e.jsx(o,{children:e.jsx(r,{label:"Last Name",id:"last-name"})},"fr-3")]},"fs-1"),e.jsxs(d,{title:"Second Section of the Form",children:[e.jsxs(S,{name:"color-radios",label:"In case you are not sure, select your true favorite color:",children:[e.jsx(a,{id:"color-red",label:"Red",value:"red"},"r-1"),e.jsx(a,{id:"color-blue",label:"Blue",value:"blue"},"r-2"),e.jsx(a,{id:"color-green",label:"Green",value:"green"},"r-3"),e.jsx(a,{id:"color-yellow",label:"Yellow",value:"yellow"},"r-4")]}),e.jsxs(B,{name:"all-about-red",label:"What is your opinion towards the color Red?",children:[e.jsx(c,{id:"overrated",label:"Red is vastly overrated",value:"overrated"},"c-1"),e.jsx(c,{id:"blackisred",label:"Black is better",value:"blackisbetter"},"c-2")]}),e.jsx(o,{children:e.jsx(R,{label:"Your Message",id:"message",placeholder:"If there is something else we should know about you – now is the time!"})},"fr-4"),e.jsxs(o,{children:[e.jsx(r,{invalid:!0,value:"Error!"}),e.jsx(m,{variant:"error",text:"A textInput with an error for no reason whatsoever."})]}),e.jsx(o,{children:e.jsx(u,{label:"Wake me up at 4.30am",id:"wakey"})},"fr-5"),e.jsx(o,{children:e.jsx(u,{label:"Send me an email, too",id:"email-too"})},"fr-6")]},"fs-2"),e.jsxs(F,{children:[e.jsx(t,{children:"Cancel"}),e.jsx(t,{variant:"primary-danger",children:"Clear"}),e.jsx(t,{variant:"primary",children:"Submit"})]},"br-1")]}};var p,x,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "A Simple Form",
    children: [<FormRow key="f-1">
        <TextInput label="First Name" id="first-name" />
      </FormRow>, <FormRow key="f-2">
        <TextInput label="Last Name" id="last-name" />
      </FormRow>, <FormRow key="f-3">
        <TextInput label="Email" id="email" type="email" required />
      </FormRow>, <ButtonRow key="f-4">
        <Button>Cancel</Button>
        <Button variant="primary">Submit</Button>
      </ButtonRow>]
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,f,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "A Complex Form",
    children: [<IntroBox text="In order to get to know you, we need to talk about colors." key="ib-1" />, <FormSection title="First Section of the Form" key="fs-1">
        <FormRow key="fr-1">
          <Select label="Your Favorite Color" placeholder="Select your favorite color…" id="color">
            <SelectOption value="red" key="so-1">
              Red
            </SelectOption>
            <SelectOption value="blue" key="so-2">
              Blue
            </SelectOption>
            <SelectOption value="other" key="so-3">
              Other
            </SelectOption>
          </Select>
          <FormHint text="Your favorite color to the best of your knowledge" />
        </FormRow>
        <FormRow key="fr-2">
          <TextInput label="First Name" id="first-name" />
        </FormRow>
        <FormRow key="fr-3">
          <TextInput label="Last Name" id="last-name" />
        </FormRow>
      </FormSection>, <FormSection title="Second Section of the Form" key="fs-2">
        <RadioGroup name="color-radios" label="In case you are not sure, select your true favorite color:">
          <Radio key="r-1" id="color-red" label="Red" value="red" />
          <Radio key="r-2" id="color-blue" label="Blue" value="blue" />
          <Radio key="r-3" id="color-green" label="Green" value="green" />
          <Radio key="r-4" id="color-yellow" label="Yellow" value="yellow" />
        </RadioGroup>
        <CheckboxGroup name="all-about-red" label="What is your opinion towards the color Red?">
          <Checkbox key="c-1" id="overrated" label="Red is vastly overrated" value="overrated" />
          <Checkbox key="c-2" id="blackisred" label="Black is better" value="blackisbetter" />
        </CheckboxGroup>
        <FormRow key="fr-4">
          <Textarea label="Your Message" id="message" placeholder="If there is something else we should know about you – now is the time!" />
        </FormRow>
        <FormRow>
          <TextInput invalid value="Error!" />
          <FormHint variant="error" text="A textInput with an error for no reason whatsoever." />
        </FormRow>
        <FormRow key="fr-5">
          <Switch label="Wake me up at 4.30am" id="wakey" />
        </FormRow>
        <FormRow key="fr-6">
          <Switch label="Send me an email, too" id="email-too" />
        </FormRow>
      </FormSection>, <ButtonRow key="br-1">
        <Button>Cancel</Button>
        <Button variant="primary-danger">Clear</Button>
        <Button variant="primary">Submit</Button>
      </ButtonRow>]
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ae=["Default","ComplexForm"];export{n as ComplexForm,l as Default,ae as __namedExportsOrder,te as default};
