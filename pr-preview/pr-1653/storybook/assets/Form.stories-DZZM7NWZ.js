import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe-8VCy6AFD.js";import{n as r,t as i}from"./PortalProvider.component-BPmGOhM1.js";import{n as a,t as o}from"./Button.component-CkL_Zbh3.js";import{n as s,t as c}from"./ButtonRow.component-Ce3evVHj.js";import{n as l,t as u}from"./FormHint.component-DEUnYDSq.js";import{i as d,n as f,r as p,t as m}from"./Checkbox.component-RWs1zf2h.js";import{n as h,t as g}from"./Form.component-C9pr8LCZ.js";import{n as _,t as v}from"./FormRow.component-DDk0EaQa.js";import{n as y,t as b}from"./FormSection.component-DOeduEzh.js";import{i as x,n as S,r as C,t as w}from"./SelectOption.component-SzLAk_iF.js";import{n as T,t as E}from"./Textarea.component-B_F65wyg.js";import{n as D,t as O}from"./TextInput.component-CB-f9kNs.js";import{i as k,n as A,r as j,t as M}from"./Radio.component-D4uUmo4m.js";import{n as N,t as P}from"./IntroBox.component-B34mlHbv.js";import{n as F,t as I}from"./Switch.component-DFqxWD6_.js";var L,R,z,B,V;e((()=>{n(),h(),_(),l(),y(),x(),S(),T(),D(),a(),s(),A(),k(),f(),d(),r(),N(),F(),L=t(),R={title:`Forms/Form`,component:g,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,L.jsx)(`div`,{className:`jn:pb-12`,style:{minHeight:`250px`},children:(0,L.jsx)(i,{children:(0,L.jsx)(e,{})})})]},z={args:{title:`A Simple Form`,children:[(0,L.jsx)(v,{children:(0,L.jsx)(O,{label:`First Name`,id:`first-name`})},`f-1`),(0,L.jsx)(v,{children:(0,L.jsx)(O,{label:`Last Name`,id:`last-name`})},`f-2`),(0,L.jsx)(v,{children:(0,L.jsx)(O,{label:`Email`,id:`email`,type:`email`,required:!0})},`f-3`),(0,L.jsxs)(c,{children:[(0,L.jsx)(o,{children:`Cancel`}),(0,L.jsx)(o,{variant:`primary`,children:`Submit`})]},`f-4`)]}},B={args:{title:`A Complex Form`,children:[(0,L.jsx)(P,{text:`In order to get to know you, we need to talk about colors.`},`ib-1`),(0,L.jsxs)(b,{title:`First Section of the Form`,children:[(0,L.jsxs)(v,{children:[(0,L.jsxs)(C,{label:`Your Favorite Color`,placeholder:`Select your favorite color…`,id:`color`,children:[(0,L.jsx)(w,{value:`red`,children:`Red`},`so-1`),(0,L.jsx)(w,{value:`blue`,children:`Blue`},`so-2`),(0,L.jsx)(w,{value:`other`,children:`Other`},`so-3`)]}),(0,L.jsx)(u,{text:`Your favorite color to the best of your knowledge`})]},`fr-1`),(0,L.jsx)(v,{children:(0,L.jsx)(O,{label:`First Name`,id:`first-name`})},`fr-2`),(0,L.jsx)(v,{children:(0,L.jsx)(O,{label:`Last Name`,id:`last-name`})},`fr-3`)]},`fs-1`),(0,L.jsxs)(b,{title:`Second Section of the Form`,children:[(0,L.jsxs)(j,{name:`color-radios`,label:`In case you are not sure, select your true favorite color:`,children:[(0,L.jsx)(M,{id:`color-red`,label:`Red`,value:`red`},`r-1`),(0,L.jsx)(M,{id:`color-blue`,label:`Blue`,value:`blue`},`r-2`),(0,L.jsx)(M,{id:`color-green`,label:`Green`,value:`green`},`r-3`),(0,L.jsx)(M,{id:`color-yellow`,label:`Yellow`,value:`yellow`},`r-4`)]}),(0,L.jsxs)(p,{name:`all-about-red`,label:`What is your opinion towards the color Red?`,children:[(0,L.jsx)(m,{id:`overrated`,label:`Red is vastly overrated`,value:`overrated`},`c-1`),(0,L.jsx)(m,{id:`blackisred`,label:`Black is better`,value:`blackisbetter`},`c-2`)]}),(0,L.jsx)(v,{children:(0,L.jsx)(E,{label:`Your Message`,id:`message`,placeholder:`If there is something else we should know about you – now is the time!`})},`fr-4`),(0,L.jsxs)(v,{children:[(0,L.jsx)(O,{invalid:!0,value:`Error!`}),(0,L.jsx)(u,{variant:`error`,text:`A textInput with an error for no reason whatsoever.`})]}),(0,L.jsx)(v,{children:(0,L.jsx)(I,{label:`Wake me up at 4.30am`,id:`wakey`})},`fr-5`),(0,L.jsx)(v,{children:(0,L.jsx)(I,{label:`Send me an email, too`,id:`email-too`})},`fr-6`)]},`fs-2`),(0,L.jsxs)(c,{children:[(0,L.jsx)(o,{children:`Cancel`}),(0,L.jsx)(o,{variant:`primary-danger`,children:`Clear`}),(0,L.jsx)(o,{variant:`primary`,children:`Submit`})]},`br-1`)]}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Default`,`ComplexForm`]}))();export{B as ComplexForm,z as Default,V as __namedExportsOrder,R as default};