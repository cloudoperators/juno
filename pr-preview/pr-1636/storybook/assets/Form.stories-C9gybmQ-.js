import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./PortalProvider.component-BHnpU9n4.js";import{t as n}from"./Button.component-Di6O5YIz.js";import{t as r}from"./ButtonRow.component-CxfYMEkZ.js";import{t as i}from"./FormHint.component-BzW4IR94.js";import{n as a,t as o}from"./Checkbox.component-DaGghiYK.js";import{n as s,t as c}from"./SelectOption.component-DV9pisg7.js";import{t as l}from"./Form.component-05CvthWS.js";import{t as u}from"./FormRow.component-Dwhfyp0U.js";import{t as d}from"./FormSection.component-DVckEb7K.js";import{t as f}from"./Textarea.component-BrQqnN5S.js";import{t as p}from"./TextInput.component-B3WEc9JU.js";import{n as m,t as h}from"./Radio.component-Cq9Nfh82.js";import{t as g}from"./IntroBox.component-COdcj-li.js";import{t as _}from"./Switch.component-CkLHAaJO.js";import"react";var v=e(),y={title:`Forms/Form`,component:l,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,v.jsx)(`div`,{className:`jn:pb-12`,style:{minHeight:`250px`},children:(0,v.jsx)(t,{children:(0,v.jsx)(e,{})})})]},b={args:{title:`A Simple Form`,children:[(0,v.jsx)(u,{children:(0,v.jsx)(p,{label:`First Name`,id:`first-name`})},`f-1`),(0,v.jsx)(u,{children:(0,v.jsx)(p,{label:`Last Name`,id:`last-name`})},`f-2`),(0,v.jsx)(u,{children:(0,v.jsx)(p,{label:`Email`,id:`email`,type:`email`,required:!0})},`f-3`),(0,v.jsxs)(r,{children:[(0,v.jsx)(n,{children:`Cancel`}),(0,v.jsx)(n,{variant:`primary`,children:`Submit`})]},`f-4`)]}},x={args:{title:`A Complex Form`,children:[(0,v.jsx)(g,{text:`In order to get to know you, we need to talk about colors.`},`ib-1`),(0,v.jsxs)(d,{title:`First Section of the Form`,children:[(0,v.jsxs)(u,{children:[(0,v.jsxs)(s,{label:`Your Favorite Color`,placeholder:`Select your favorite color…`,id:`color`,children:[(0,v.jsx)(c,{value:`red`,children:`Red`},`so-1`),(0,v.jsx)(c,{value:`blue`,children:`Blue`},`so-2`),(0,v.jsx)(c,{value:`other`,children:`Other`},`so-3`)]}),(0,v.jsx)(i,{text:`Your favorite color to the best of your knowledge`})]},`fr-1`),(0,v.jsx)(u,{children:(0,v.jsx)(p,{label:`First Name`,id:`first-name`})},`fr-2`),(0,v.jsx)(u,{children:(0,v.jsx)(p,{label:`Last Name`,id:`last-name`})},`fr-3`)]},`fs-1`),(0,v.jsxs)(d,{title:`Second Section of the Form`,children:[(0,v.jsxs)(m,{name:`color-radios`,label:`In case you are not sure, select your true favorite color:`,children:[(0,v.jsx)(h,{id:`color-red`,label:`Red`,value:`red`},`r-1`),(0,v.jsx)(h,{id:`color-blue`,label:`Blue`,value:`blue`},`r-2`),(0,v.jsx)(h,{id:`color-green`,label:`Green`,value:`green`},`r-3`),(0,v.jsx)(h,{id:`color-yellow`,label:`Yellow`,value:`yellow`},`r-4`)]}),(0,v.jsxs)(a,{name:`all-about-red`,label:`What is your opinion towards the color Red?`,children:[(0,v.jsx)(o,{id:`overrated`,label:`Red is vastly overrated`,value:`overrated`},`c-1`),(0,v.jsx)(o,{id:`blackisred`,label:`Black is better`,value:`blackisbetter`},`c-2`)]}),(0,v.jsx)(u,{children:(0,v.jsx)(f,{label:`Your Message`,id:`message`,placeholder:`If there is something else we should know about you – now is the time!`})},`fr-4`),(0,v.jsxs)(u,{children:[(0,v.jsx)(p,{invalid:!0,value:`Error!`}),(0,v.jsx)(i,{variant:`error`,text:`A textInput with an error for no reason whatsoever.`})]}),(0,v.jsx)(u,{children:(0,v.jsx)(_,{label:`Wake me up at 4.30am`,id:`wakey`})},`fr-5`),(0,v.jsx)(u,{children:(0,v.jsx)(_,{label:`Send me an email, too`,id:`email-too`})},`fr-6`)]},`fs-2`),(0,v.jsxs)(r,{children:[(0,v.jsx)(n,{children:`Cancel`}),(0,v.jsx)(n,{variant:`primary-danger`,children:`Clear`}),(0,v.jsx)(n,{variant:`primary`,children:`Submit`})]},`br-1`)]}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`ComplexForm`];export{x as ComplexForm,b as Default,S as __namedExportsOrder,y as default};