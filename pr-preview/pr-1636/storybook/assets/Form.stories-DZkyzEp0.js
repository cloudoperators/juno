import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./PortalProvider.component-C0iptKAD.js";import{t as r}from"./Button.component-J1fJR8AZ.js";import{t as i}from"./ButtonRow.component-D4LFaHbK.js";import{t as a}from"./FormHint.component-DOXQVwyU.js";import{n as o,t as s}from"./Checkbox.component-CmRiFrIM.js";import{n as c,t as l}from"./SelectOption.component-BwnvgQm2.js";import{t as u}from"./Form.component-DgMx-uy4.js";import{t as d}from"./FormRow.component-DT0AwoLi.js";import{t as f}from"./FormSection.component-w1qCQBdr.js";import{t as p}from"./Textarea.component-shFh0cif.js";import{t as m}from"./TextInput.component-ccvShNSP.js";import{n as h,t as g}from"./Radio.component-9K0zbRn_.js";import{t as _}from"./IntroBox.component-gzS46bUd.js";import{t as v}from"./Switch.component-DmMC-pub.js";e();var y=t(),b={title:`Forms/Form`,component:u,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,y.jsx)(`div`,{className:`jn:pb-12`,style:{minHeight:`250px`},children:(0,y.jsx)(n,{children:(0,y.jsx)(e,{})})})]},x={args:{title:`A Simple Form`,children:[(0,y.jsx)(d,{children:(0,y.jsx)(m,{label:`First Name`,id:`first-name`})},`f-1`),(0,y.jsx)(d,{children:(0,y.jsx)(m,{label:`Last Name`,id:`last-name`})},`f-2`),(0,y.jsx)(d,{children:(0,y.jsx)(m,{label:`Email`,id:`email`,type:`email`,required:!0})},`f-3`),(0,y.jsxs)(i,{children:[(0,y.jsx)(r,{children:`Cancel`}),(0,y.jsx)(r,{variant:`primary`,children:`Submit`})]},`f-4`)]}},S={args:{title:`A Complex Form`,children:[(0,y.jsx)(_,{text:`In order to get to know you, we need to talk about colors.`},`ib-1`),(0,y.jsxs)(f,{title:`First Section of the Form`,children:[(0,y.jsxs)(d,{children:[(0,y.jsxs)(c,{label:`Your Favorite Color`,placeholder:`Select your favorite color…`,id:`color`,children:[(0,y.jsx)(l,{value:`red`,children:`Red`},`so-1`),(0,y.jsx)(l,{value:`blue`,children:`Blue`},`so-2`),(0,y.jsx)(l,{value:`other`,children:`Other`},`so-3`)]}),(0,y.jsx)(a,{text:`Your favorite color to the best of your knowledge`})]},`fr-1`),(0,y.jsx)(d,{children:(0,y.jsx)(m,{label:`First Name`,id:`first-name`})},`fr-2`),(0,y.jsx)(d,{children:(0,y.jsx)(m,{label:`Last Name`,id:`last-name`})},`fr-3`)]},`fs-1`),(0,y.jsxs)(f,{title:`Second Section of the Form`,children:[(0,y.jsxs)(h,{name:`color-radios`,label:`In case you are not sure, select your true favorite color:`,children:[(0,y.jsx)(g,{id:`color-red`,label:`Red`,value:`red`},`r-1`),(0,y.jsx)(g,{id:`color-blue`,label:`Blue`,value:`blue`},`r-2`),(0,y.jsx)(g,{id:`color-green`,label:`Green`,value:`green`},`r-3`),(0,y.jsx)(g,{id:`color-yellow`,label:`Yellow`,value:`yellow`},`r-4`)]}),(0,y.jsxs)(o,{name:`all-about-red`,label:`What is your opinion towards the color Red?`,children:[(0,y.jsx)(s,{id:`overrated`,label:`Red is vastly overrated`,value:`overrated`},`c-1`),(0,y.jsx)(s,{id:`blackisred`,label:`Black is better`,value:`blackisbetter`},`c-2`)]}),(0,y.jsx)(d,{children:(0,y.jsx)(p,{label:`Your Message`,id:`message`,placeholder:`If there is something else we should know about you – now is the time!`})},`fr-4`),(0,y.jsxs)(d,{children:[(0,y.jsx)(m,{invalid:!0,value:`Error!`}),(0,y.jsx)(a,{variant:`error`,text:`A textInput with an error for no reason whatsoever.`})]}),(0,y.jsx)(d,{children:(0,y.jsx)(v,{label:`Wake me up at 4.30am`,id:`wakey`})},`fr-5`),(0,y.jsx)(d,{children:(0,y.jsx)(v,{label:`Send me an email, too`,id:`email-too`})},`fr-6`)]},`fs-2`),(0,y.jsxs)(i,{children:[(0,y.jsx)(r,{children:`Cancel`}),(0,y.jsx)(r,{variant:`primary-danger`,children:`Clear`}),(0,y.jsx)(r,{variant:`primary`,children:`Submit`})]},`br-1`)]}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};var C=[`Default`,`ComplexForm`];export{S as ComplexForm,x as Default,C as __namedExportsOrder,b as default};