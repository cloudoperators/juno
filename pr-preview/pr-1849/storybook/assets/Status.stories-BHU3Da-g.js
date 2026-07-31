import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,t as i}from"./Stack.component-C6GmuT5T.js";import{n as a,t as o}from"./SearchInput.component-Bzi6fNN1.js";import{t as s}from"./Spinner.component-BLgbJicd.js";import{t as c}from"./Spinner-B1wDQ7Ft.js";import{n as l,t as u}from"./Button.component-BotgibvS.js";import{a as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./DataGridCell.component-D62mcyNA.js";import{n as v,t as y}from"./DataGridHeadCell.component-CUsb8spM.js";import{n as b,t as x}from"./DataGridToolbar.component-BW1z1bgu.js";var S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{t(),c(),m(),S=n(),C={400:{title:`Bad Request`,body:`The request could not be processed due to invalid syntax. Try again.`},401:{title:`Authentication Required`,body:`Authentication failed. Verify your credentials and try again.`},403:{title:`Access Denied`,body:`You do not have the required permissions to access this resource.`},404:{title:`Page Not Found`,body:`The requested URL does not exist or may have moved.`},408:{title:`Request Timeout`,body:`The request did not return a complete result in time. Check your connection and try again.`},409:{title:`Conflict`,body:``},429:{title:`Too Many Requests`,body:``},500:{title:`Internal Server Error`,body:`An internal error occurred. Try again.`},502:{title:`Bad Gateway`,body:`The server returned an invalid response. Try again.`},503:{title:`Service Unavailable`,body:`The service is temporarily unavailable. Try again later.`},504:{title:`Gateway Timeout`,body:`A server did not respond in time. Check your connection and try again.`}},w={progress:{title:`Loading…`,body:``},error:{title:`Something went wrong`,body:`An error occurred. Try again.`},empty:{title:`No items`,body:`There are no items to display.`},"no-matches":{title:``,body:`No items match the current filters. Adjust or clear filters.`}},T=`
  jn:flex
  jn:flex-col
  jn:items-center
  jn:text-center
`,E=`
  jn:min-h-[12.5rem]
  jn:max-h-[18.1875rem]
  jn:justify-center
  jn:my-2
`,D=`
  jn:min-h-0
  jn:overflow-y-auto
`,O=`
  jn:text-[12.5rem]
  jn:font-bold
  jn:leading-none
  jn:text-theme-status-code
`,k=`
  jn:text-lg
  jn:leading-[1.5]
  jn:max-w-[50rem]
`,A=`
  jn:leading-[1.5]
  jn:max-w-[50rem]
`,j=`
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
`,M=({status:e=`error`,title:t,body:n,spinner:r,code:i,details:a,action:o,className:c=``,...l})=>{let{isDataGrid:u}=g(),d=typeof i==`string`?parseInt(i,10):i,f=d?C[d]:void 0,p=e?w[e]:void 0,m=t??f?.title??p?.title,h=n??f?.body??p?.body,_=r??e===`progress`;return(0,S.jsxs)(`div`,{role:e===`error`?`alert`:`status`,className:`juno-status ${u?`juno-status-datagrid ${E}`:``} ${T} ${c}`,...l,children:[i&&!u&&(0,S.jsx)(`div`,{className:`juno-status-code ${O}`,children:i}),_&&(0,S.jsx)(s,{variant:`primary`,"aria-label":m??`Loading`}),m&&(0,S.jsx)(`strong`,{className:`juno-status-title ${k}`,children:m}),h&&(0,S.jsx)(`div`,{className:`juno-status-body ${A}`,children:h}),a&&(0,S.jsx)(`pre`,{"aria-label":`Error details`,className:`juno-status-details ${j} ${u?D:``}`,children:a}),o&&(0,S.jsx)(`div`,{className:`juno-status-action jn:mt-4`,children:o})]})};try{M.displayName=`Status`,M.__docgenInfo={description:``,displayName:`Status`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Status/Status.component.tsx`,methods:[],props:{status:{defaultValue:{value:`error`},declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:'The status to display. Determines the default copy. Defaults to `"error"`.',name:`status`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`enum`,raw:`"error" | "progress" | "empty" | "no-matches"`,value:[{value:`"error"`},{value:`"progress"`},{value:`"empty"`},{value:`"no-matches"`}]}},title:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Optional title. Overrides the per-status default title when set.`,name:`title`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},body:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Optional body text. Overrides the per-status default body text when set.`,name:`body`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},spinner:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:'Renders a `Spinner`. Defaults to `true` when `status="progress"`, `false` otherwise.',name:`spinner`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`boolean`}},code:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Displayed large and prominently above the title. Intended for HTTP error codes such as 404 or 500.`,name:`code`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string | number`}},details:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:"Rendered in a `<pre>` block using monospaced font. Intended for stack traces and server responses. Scrolls vertically if content exceeds the maximum height.",name:`details`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:"Optional action area rendered below the content. Typically a `Button` or a button-styled anchor element.",name:`action`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`}],description:`Add custom CSS classes to the root element.`,name:`className`,parent:{fileName:`ui-components/src/components/Status/Status.component.tsx`,name:`StatusProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),P=e((()=>{N()})),F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{t(),P(),l(),m(),f(),p(),v(),b(),a(),r(),F=n(),I={title:`Components/Status`,component:M,argTypes:{status:{control:`select`,options:[`progress`,`error`,`empty`,`no-matches`]},action:{control:!1}},parameters:{docs:{description:{component:"`Status` is a general-purpose component for communicating non-data states: in progress, error, empty, and no matches. Use it as the default drop-in whenever a component, view, or data container has no local or specific way to handle these states — it covers application-, page-, and section-level states as well as error boundary fallbacks.\n\nWhen used inside a `DataGrid`, wrap `Status` in a `DataGridRow` and `DataGridCell` with the appropriate `colSpan` — `Status` renders a `<div>` only and has no table markup of its own."}}}},L=`Error: Failed to fetch resource
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
  at async commitLifeCycles (react-dom.development.js:20663)`,R={args:{}},z={args:{status:`error`,code:404},parameters:{docs:{description:{story:`Page-level 404 error. Title and body are derived from the HTTP error code reference.`}}}},B={args:{status:`error`,details:L},parameters:{docs:{description:{story:"Pass a stack trace or server response via `details` to render it in a scrollable `<pre>` block below the message. Useful for technical users who need the full error context."}}}},V={args:{status:`error`},render:e=>(0,F.jsx)(M,{...e,action:(0,F.jsx)(u,{variant:`primary`,children:`Retry`})}),parameters:{docs:{description:{story:"Pass any element via the `action` slot — typically a `Button` or a button-styled anchor."}}}},H={args:{status:`progress`},parameters:{docs:{description:{story:'Use `status="progress"` at page or section level while data is being fetched.'}}}},U={args:{status:`progress`,title:`Loading Servers …`},render:e=>(0,F.jsxs)(i,{direction:`vertical`,children:[(0,F.jsx)(x,{children:(0,F.jsx)(i,{alignment:`center`,distribution:`end`,children:(0,F.jsx)(o,{placeholder:`Search Servers …`})})}),(0,F.jsxs)(d,{columns:4,children:[(0,F.jsxs)(h,{children:[(0,F.jsx)(y,{children:`Name`}),(0,F.jsx)(y,{children:`Region`}),(0,F.jsx)(y,{children:`Status`}),(0,F.jsx)(y,{children:`Last Updated`})]}),(0,F.jsx)(h,{children:(0,F.jsx)(_,{colSpan:4,children:(0,F.jsx)(M,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="progress"` inside a `DataGridRow` spanning all columns while data is being fetched. Use the title `title` prop to further qualify the kind of items currently being loaded if possible, otherwise the default title "Loading …" will be rendered.'}}}},W={args:{status:`error`},render:e=>(0,F.jsxs)(i,{direction:`vertical`,children:[(0,F.jsx)(x,{children:(0,F.jsx)(i,{alignment:`center`,distribution:`end`,children:(0,F.jsx)(o,{placeholder:`Search Servers …`})})}),(0,F.jsxs)(d,{columns:4,children:[(0,F.jsxs)(h,{children:[(0,F.jsx)(y,{children:`Name`}),(0,F.jsx)(y,{children:`Region`}),(0,F.jsx)(y,{children:`Status`}),(0,F.jsx)(y,{children:`Last Updated`})]}),(0,F.jsx)(h,{children:(0,F.jsx)(_,{colSpan:4,children:(0,F.jsx)(M,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="error"` inside a `DataGridRow` spanning all columns when a data fetch or operation has failed.'}}}},G={args:{status:`empty`},render:e=>(0,F.jsxs)(i,{direction:`vertical`,children:[(0,F.jsx)(x,{children:(0,F.jsx)(i,{alignment:`center`,distribution:`end`,children:(0,F.jsx)(o,{placeholder:`Search Servers …`})})}),(0,F.jsxs)(d,{columns:4,children:[(0,F.jsxs)(h,{children:[(0,F.jsx)(y,{children:`Name`}),(0,F.jsx)(y,{children:`Region`}),(0,F.jsx)(y,{children:`Status`}),(0,F.jsx)(y,{children:`Last Updated`})]}),(0,F.jsx)(h,{children:(0,F.jsx)(_,{colSpan:4,children:(0,F.jsx)(M,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="empty"` inside a `DataGridRow` spanning all columns when the data source contains no items.'}}}},K={args:{status:`no-matches`},render:e=>(0,F.jsxs)(i,{direction:`vertical`,children:[(0,F.jsx)(x,{children:(0,F.jsx)(i,{alignment:`center`,distribution:`end`,children:(0,F.jsx)(o,{placeholder:`Search Servers …`})})}),(0,F.jsxs)(d,{columns:4,children:[(0,F.jsxs)(h,{children:[(0,F.jsx)(y,{children:`Name`}),(0,F.jsx)(y,{children:`Region`}),(0,F.jsx)(y,{children:`Status`}),(0,F.jsx)(y,{children:`Last Updated`})]}),(0,F.jsx)(h,{children:(0,F.jsx)(_,{colSpan:4,children:(0,F.jsx)(M,{...e})})})]})]}),parameters:{docs:{description:{story:'Use `status="no-matches"` inside a `DataGridRow` spanning all columns when items exist but none match the currently applied filters.'}}}},q={args:{status:`error`,details:L},render:e=>(0,F.jsxs)(i,{direction:`vertical`,children:[(0,F.jsx)(x,{children:(0,F.jsx)(i,{alignment:`center`,distribution:`end`,children:(0,F.jsx)(o,{placeholder:`Search Servers …`})})}),(0,F.jsxs)(d,{columns:4,children:[(0,F.jsxs)(h,{children:[(0,F.jsx)(y,{children:`Name`}),(0,F.jsx)(y,{children:`Region`}),(0,F.jsx)(y,{children:`Status`}),(0,F.jsx)(y,{children:`Last Updated`})]}),(0,F.jsx)(h,{children:(0,F.jsx)(_,{colSpan:4,children:(0,F.jsx)(M,{...e})})})]})]}),parameters:{docs:{description:{story:"DataGrid error state with a stack trace passed via `details`."}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    status: "progress"
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="progress"\` at page or section level while data is being fetched.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    status: "progress",
    title: "Loading Servers …"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
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
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="progress"\` inside a \`DataGridRow\` spanning all columns while data is being fetched. Use the title \`title\` prop to further qualify the kind of items currently being loaded if possible, otherwise the default title "Loading …" will be rendered.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
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
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="error"\` inside a \`DataGridRow\` spanning all columns when a data fetch or operation has failed.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    status: "empty"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
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
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="empty"\` inside a \`DataGridRow\` spanning all columns when the data source contains no items.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    status: "no-matches"
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
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
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`status="no-matches"\` inside a \`DataGridRow\` spanning all columns when items exist but none match the currently applied filters.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    details: longStackTrace
  },
  render: args => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack alignment="center" distribution="end">
          <SearchInput placeholder="Search Servers …" />
        </Stack>
      </DataGridToolbar>
      <DataGrid columns={4}>
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
      </DataGrid>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "DataGrid error state with a stack trace passed via \`details\`."
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J=[`Default`,`HttpError`,`WithDetails`,`WithAction`,`Loading`,`DataGridLoading`,`DataGridError`,`DataGridEmpty`,`DataGridNoMatches`,`DataGridErrorWithDetails`]}))();export{G as DataGridEmpty,W as DataGridError,q as DataGridErrorWithDetails,U as DataGridLoading,K as DataGridNoMatches,R as Default,z as HttpError,H as Loading,V as WithAction,B as WithDetails,J as __namedExportsOrder,I as default};