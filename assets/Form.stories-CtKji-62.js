import{j as e}from"./iframe-DpzLhcSD.js";import{F as x}from"./Form.component-CO8Lpem2.js";import{F as o}from"./FormRow.component-xTkl3tNg.js";import{F as s}from"./FormHint.component-C6K3HUSg.js";import{F as m}from"./FormSection.component-vqHEa3MB.js";import{S as b,a as i}from"./SelectOption.component-UmTCp5o3.js";import{T as h}from"./Textarea.component-Bu_XdIcR.js";import{T as r}from"./TextInput.component-DtMj0kpC.js";import{B as t}from"./Button.component-DfxCLwJf.js";import{B as u}from"./ButtonRow.component-krDk6_ML.js";import{R as f,a}from"./Radio.component-g9Ly6Xlq.js";import{a as y,C as d}from"./Checkbox.component-lXqcMR7o.js";import{P as w}from"./PortalProvider.component-B_kbNzUn.js";import{I as F}from"./IntroBox.component-DA2LxYfe.js";import{S as c}from"./Switch.component-DCMZvsfE.js";import"./portal-CRg85tZT.js";import"./frozen-DhmdHEkA.js";import"./use-text-value-C3loMaum.js";import"./Label.component-CqJji7CE.js";import"./Icon.component-CZd049u1.js";import"./Spinner.component-Dkn5C-H4.js";import"./floating-ui.react-nRTajxH7.js";import"./Stack.component-BJ2Yo6FH.js";const _={title:"Forms/Form",component:x,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[p=>e.jsx("div",{className:"jn:pb-12",style:{minHeight:"250px"},children:e.jsx(w,{children:e.jsx(p,{})})})]},l={args:{title:"A Simple Form",children:[e.jsx(o,{children:e.jsx(r,{label:"First Name",id:"first-name"})},"f-1"),e.jsx(o,{children:e.jsx(r,{label:"Last Name",id:"last-name"})},"f-2"),e.jsx(o,{children:e.jsx(r,{label:"Email",id:"email",type:"email",required:!0})},"f-3"),e.jsxs(u,{children:[e.jsx(t,{children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Submit"})]},"f-4")]}},n={args:{title:"A Complex Form",children:[e.jsx(F,{text:"In order to get to know you, we need to talk about colors."},"ib-1"),e.jsxs(m,{title:"First Section of the Form",children:[e.jsxs(o,{children:[e.jsxs(b,{label:"Your Favorite Color",placeholder:"Select your favorite color…",id:"color",children:[e.jsx(i,{value:"red",children:"Red"},"so-1"),e.jsx(i,{value:"blue",children:"Blue"},"so-2"),e.jsx(i,{value:"other",children:"Other"},"so-3")]}),e.jsx(s,{text:"Your favorite color to the best of your knowledge"})]},"fr-1"),e.jsx(o,{children:e.jsx(r,{label:"First Name",id:"first-name"})},"fr-2"),e.jsx(o,{children:e.jsx(r,{label:"Last Name",id:"last-name"})},"fr-3")]},"fs-1"),e.jsxs(m,{title:"Second Section of the Form",children:[e.jsxs(f,{name:"color-radios",label:"In case you are not sure, select your true favorite color:",children:[e.jsx(a,{id:"color-red",label:"Red",value:"red"},"r-1"),e.jsx(a,{id:"color-blue",label:"Blue",value:"blue"},"r-2"),e.jsx(a,{id:"color-green",label:"Green",value:"green"},"r-3"),e.jsx(a,{id:"color-yellow",label:"Yellow",value:"yellow"},"r-4")]}),e.jsxs(y,{name:"all-about-red",label:"What is your opinion towards the color Red?",children:[e.jsx(d,{id:"overrated",label:"Red is vastly overrated",value:"overrated"},"c-1"),e.jsx(d,{id:"blackisred",label:"Black is better",value:"blackisbetter"},"c-2")]}),e.jsx(o,{children:e.jsx(h,{label:"Your Message",id:"message",placeholder:"If there is something else we should know about you – now is the time!"})},"fr-4"),e.jsxs(o,{children:[e.jsx(r,{invalid:!0,value:"Error!"}),e.jsx(s,{variant:"error",text:"A textInput with an error for no reason whatsoever."})]}),e.jsx(o,{children:e.jsx(c,{label:"Wake me up at 4.30am",id:"wakey"})},"fr-5"),e.jsx(o,{children:e.jsx(c,{label:"Send me an email, too",id:"email-too"})},"fr-6")]},"fs-2"),e.jsxs(u,{children:[e.jsx(t,{children:"Cancel"}),e.jsx(t,{variant:"primary-danger",children:"Clear"}),e.jsx(t,{variant:"primary",children:"Submit"})]},"br-1")]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const z=["Default","ComplexForm"];export{n as ComplexForm,l as Default,z as __namedExportsOrder,_ as default};
