import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{t as r}from"./Spinner.component-BLgbJicd.js";import{t as i}from"./Spinner-B1wDQ7Ft.js";import{n as a,t as o}from"./Button.component-D0r4M0Rl.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./DataGridCell.component-BmJLE3Ur.js";import{n as m,t as h}from"./DataGridHeadCell.component-LP27RLmU.js";var g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{t(),i(),u(),g=n(),_={400:{title:`Bad Request`,body:`The request could not be processed due to invalid syntax. Try again.`},401:{title:`Authentication Required`,body:`Authentication failed. Verify your credentials and try again.`},403:{title:`Access Denied`,body:`You do not have the required permissions to access this resource.`},404:{title:`Page Not Found`,body:`The requested URL does not exist or may have moved.`},408:{title:`Request Timeout`,body:`The request did not return a complete result in time. Check your connection and try again.`},409:{title:`Conflict`,body:``},429:{title:`Too Many Requests`,body:``},500:{title:`Internal Server Error`,body:`An internal error occurred. Try again.`},502:{title:`Bad Gateway`,body:`The server returned an invalid response. Try again.`},503:{title:`Service Unavailable`,body:`The service is temporarily unavailable. Try again later.`},504:{title:`Gateway Timeout`,body:`A server did not respond in time. Check your connection and try again.`}},v={progress:{title:`Loading…`,body:``},error:{title:`Something went wrong`,body:`An error occurred. Try again.`},empty:{title:`No items`,body:`There are no items to display.`},"no-matches":{title:``,body:`No items match the current filters. Adjust or clear filters.`}},y=`
  jn:flex
  jn:flex-col
  jn:items-center
  jn:text-center
`,b=`
  jn:min-h-[12.5rem]
  jn:max-h-[18.1875rem]
  jn:justify-center
  jn:my-2
`,x=`
  jn:min-h-0
  jn:overflow-y-auto
`,S=`
  jn:text-[12.5rem]
  jn:font-bold
  jn:leading-none
  jn:text-theme-status-code
`,C=`
  jn:text-lg
  jn:leading-[1.5]
  jn:max-w-[50rem]
`,w=`
  jn:leading-[1.5]
  jn:max-w-[50rem]
`,T=`
  jn:text-left
  jn:text-xs
  jn:bg-theme-status-details
  jn:text-theme-status-details
  jn:border
  jn:border-theme-status-details
  jn:py-0.5
  jn:px-1
  jn:mt-4
  jn:w-full
  jn:max-w-[50rem]
  jn:overflow-x-auto
`,E=({status:e=`error`,title:t,body:n,spinner:i,code:a,details:o,action:s,className:c=``,...l})=>{let{isDataGrid:u}=f(),d=typeof a==`string`?parseInt(a,10):a,p=d?_[d]:void 0,m=e?v[e]:void 0,h=t??p?.title??m?.title,E=n??p?.body??m?.body,D=i??e===`progress`;return(0,g.jsxs)(`div`,{role:e===`error`?`alert`:`status`,className:`juno-status ${u?`juno-status-datagrid ${b}`:``} ${y} ${c}`,...l,children:[a&&!u&&(0,g.jsx)(`div`,{className:`juno-status-code ${S}`,children:a}),D&&(0,g.jsx)(r,{variant:`primary`,"aria-label":h??`Loading`}),h&&(0,g.jsx)(`strong`,{className:`juno-status-title ${C}`,children:h}),E&&(0,g.jsx)(`div`,{className:`juno-status-body ${w}`,children:E}),o&&(0,g.jsx)(`pre`,{"aria-label":`Error details`,className:`juno-status-details ${T} ${u?x:``}`,children:o}),s&&(0,g.jsx)(`div`,{className:`juno-status-action jn:mt-4`,children:s})]})};try{E.displayName=`Status`,E.__docgenInfo={description:``,displayName:`Status`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Status/Status.component.tsx`,methods:[],props:{status:{defaultValue:{value:`error`},declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:'The status to display. Determines the default copy. Defaults to `"error"`.',name:`status`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`enum`,raw:`"error" | "progress" | "empty" | "no-matches"`,value:[{value:`"error"`},{value:`"progress"`},{value:`"empty"`},{value:`"no-matches"`}]}},title:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Optional title. Overrides the per-status default title when set.`,name:`title`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},body:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Optional body text. Overrides the per-status default body text when set.`,name:`body`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},spinner:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:'Renders a `Spinner`. Defaults to `true` when `status="progress"`, `false` otherwise.',name:`spinner`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`boolean`}},code:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Displayed large and prominently above the title. Intended for HTTP error codes such as 404 or 500.`,name:`code`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string | number`}},details:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:"Rendered in a `<pre>` block using monospaced font. Intended for stack traces and server responses. Scrolls vertically if content exceeds the maximum height.",name:`details`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:"Optional action area rendered below the content. Typically a `Button` or a button-styled anchor element.",name:`action`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Add custom CSS classes to the root element.`,name:`className`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),O=e((()=>{D()})),k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{t(),O(),a(),u(),c(),l(),m(),k=n(),A={title:`Components/Status`,component:E,argTypes:{status:{control:`select`,options:[`progress`,`error`,`empty`,`no-matches`]},action:{control:!1}},parameters:{docs:{description:{component:"`Status` is a general-purpose component for communicating non-data states: in progress, error, empty, and no matches. Use it as the default drop-in whenever a component, view, or data container has no local or specific way to handle these states — it covers application-, page-, and section-level states as well as error boundary fallbacks.\n\nWhen used inside a `DataGrid`, wrap `Status` in a `DataGridRow` and `DataGridCell` with the appropriate `colSpan` — `Status` renders a `<div>` only and has no table markup of its own."}}}},j=`Error: Failed to fetch resource
  at fetchData (api.ts:42)
  at async loadServices (services.ts:17)
  at async ServiceList.componentDidMount (ServiceList.tsx:88)
  at async Promise.all (index 0)
  at async fetchAll (dataLoader.ts:130)
  at async DataLoader.load (dataLoader.ts:98)
  at async DataLoader.reload (dataLoader.ts:112)
  at async AppBootstrap.init (AppBootstrap.ts:54)
  at async AppBootstrap.run (AppBootstrap.ts:67)
  at async main (index.ts:12)
Caused by: NetworkError: net::ERR_CONNECTION_REFUSED
  at XMLHttpRequest.onload (http.ts:23)
  at XMLHttpRequest.dispatchEvent (xhr-polyfill.js:14)
  at EventTarget.dispatchEvent (event-target.js:88)
  at XMLHttpRequest.send (xhr.ts:201)
  at HttpClient.request (http-client.ts:77)
  at HttpClient.get (http-client.ts:92)
  at fetchData (api.ts:38)
  at retryWithBackoff (retry.ts:14)
  at retryWithBackoff (retry.ts:22)
  at retryWithBackoff (retry.ts:22)
  at async fetchWithRetry (fetchWithRetry.ts:9)
  at async ResourceStore.fetch (ResourceStore.ts:61)
  at async ResourceStore.refresh (ResourceStore.ts:74)
  at async ResourceStore.initialize (ResourceStore.ts:88)
  at async App.bootstrap (App.tsx:33)
  at async App.componentDidMount (App.tsx:44)
  at async renderWithHooks (react-dom.development.js:14985)
  at async commitLifeCycles (react-dom.development.js:20663)`,M={args:{}},N={args:{status:`error`,code:404},parameters:{docs:{description:{story:`Page-level 404 error. Title and body are derived from the HTTP error code reference.`}}}},P={args:{status:`error`,details:j},parameters:{docs:{description:{story:"Pass a stack trace or server response via `details` to render it in a scrollable `<pre>` block below the message. Useful for technical users who need the full error context."}}}},F={args:{status:`error`},render:e=>(0,k.jsx)(E,{...e,action:(0,k.jsx)(o,{variant:`primary`,children:`Retry`})}),parameters:{docs:{description:{story:"Pass any element via the `action` slot — typically a `Button` or a button-styled anchor."}}}},I={args:{status:`progress`},render:e=>(0,k.jsxs)(s,{columns:4,children:[(0,k.jsxs)(d,{children:[(0,k.jsx)(h,{children:`Name`}),(0,k.jsx)(h,{children:`Region`}),(0,k.jsx)(h,{children:`Status`}),(0,k.jsx)(h,{children:`Last Updated`})]}),(0,k.jsx)(d,{children:(0,k.jsx)(p,{colSpan:4,children:(0,k.jsx)(E,{...e})})})]}),parameters:{docs:{description:{story:'Use `status="progress"` inside a `DataGridRow` spanning all columns while data is being fetched.'}}}},L={args:{status:`error`},render:e=>(0,k.jsxs)(s,{columns:4,children:[(0,k.jsxs)(d,{children:[(0,k.jsx)(h,{children:`Name`}),(0,k.jsx)(h,{children:`Region`}),(0,k.jsx)(h,{children:`Status`}),(0,k.jsx)(h,{children:`Last Updated`})]}),(0,k.jsx)(d,{children:(0,k.jsx)(p,{colSpan:4,children:(0,k.jsx)(E,{...e})})})]}),parameters:{docs:{description:{story:'Use `status="error"` inside a `DataGridRow` spanning all columns when a data fetch or operation has failed.'}}}},R={args:{status:`empty`},render:e=>(0,k.jsxs)(s,{columns:4,children:[(0,k.jsxs)(d,{children:[(0,k.jsx)(h,{children:`Name`}),(0,k.jsx)(h,{children:`Region`}),(0,k.jsx)(h,{children:`Status`}),(0,k.jsx)(h,{children:`Last Updated`})]}),(0,k.jsx)(d,{children:(0,k.jsx)(p,{colSpan:4,children:(0,k.jsx)(E,{...e})})})]}),parameters:{docs:{description:{story:'Use `status="empty"` inside a `DataGridRow` spanning all columns when the data source contains no items.'}}}},z={args:{status:`no-matches`},render:e=>(0,k.jsxs)(s,{columns:4,children:[(0,k.jsxs)(d,{children:[(0,k.jsx)(h,{children:`Name`}),(0,k.jsx)(h,{children:`Region`}),(0,k.jsx)(h,{children:`Status`}),(0,k.jsx)(h,{children:`Last Updated`})]}),(0,k.jsx)(d,{children:(0,k.jsx)(p,{colSpan:4,children:(0,k.jsx)(E,{...e})})})]}),parameters:{docs:{description:{story:'Use `status="no-matches"` inside a `DataGridRow` spanning all columns when items exist but none match the currently applied filters.'}}}},B={args:{status:`error`,details:j},render:e=>(0,k.jsxs)(s,{columns:4,children:[(0,k.jsxs)(d,{children:[(0,k.jsx)(h,{children:`Name`}),(0,k.jsx)(h,{children:`Region`}),(0,k.jsx)(h,{children:`Status`}),(0,k.jsx)(h,{children:`Last Updated`})]}),(0,k.jsx)(d,{children:(0,k.jsx)(p,{colSpan:4,children:(0,k.jsx)(E,{...e})})})]}),parameters:{docs:{description:{story:"DataGrid error state with a stack trace passed via `details`."}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    code: 404
  },
  parameters: {
    docs: {
      description: {
        story: "Page-level 404 error. Title and body are derived from the HTTP error code reference."
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    details: longStackTrace
  },
  parameters: {
    docs: {
      description: {
        story: "Pass a stack trace or server response via \`details\` to render it in a scrollable \`<pre>\` block below the message. Useful for technical users who need the full error context."
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  },
  render: args => <Status {...args} action={<Button variant="primary">Retry</Button>} />,
  parameters: {
    docs: {
      description: {
        story: "Pass any element via the \`action\` slot — typically a \`Button\` or a button-styled anchor."
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: "progress"
  },
  render: args => <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Last Updated</DataGridHeadCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell colSpan={4}>
          <Status {...args} />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="progress"\` inside a \`DataGridRow\` spanning all columns while data is being fetched.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  },
  render: args => <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Last Updated</DataGridHeadCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell colSpan={4}>
          <Status {...args} />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="error"\` inside a \`DataGridRow\` spanning all columns when a data fetch or operation has failed.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    status: "empty"
  },
  render: args => <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Last Updated</DataGridHeadCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell colSpan={4}>
          <Status {...args} />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="empty"\` inside a \`DataGridRow\` spanning all columns when the data source contains no items.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    status: "no-matches"
  },
  render: args => <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Last Updated</DataGridHeadCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell colSpan={4}>
          <Status {...args} />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="no-matches"\` inside a \`DataGridRow\` spanning all columns when items exist but none match the currently applied filters.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    details: longStackTrace
  },
  render: args => <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Last Updated</DataGridHeadCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridCell colSpan={4}>
          <Status {...args} />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>,
  parameters: {
    docs: {
      description: {
        story: "DataGrid error state with a stack trace passed via \`details\`."
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V=[`Default`,`HttpError`,`WithDetails`,`WithAction`,`DataGridLoading`,`DataGridError`,`DataGridEmpty`,`DataGridNoMatches`,`DataGridErrorWithDetails`]}))();export{R as DataGridEmpty,L as DataGridError,B as DataGridErrorWithDetails,I as DataGridLoading,z as DataGridNoMatches,M as Default,N as HttpError,F as WithAction,P as WithDetails,V as __namedExportsOrder,A as default};