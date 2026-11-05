import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{r as n}from"./react-8KJKb_Eb.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{i,l as a,o,t as s}from"./TabBarItem-HNPqkA30.js";import{t as c}from"./PortalProvider.component-CNMssZkl.js";import{t as l}from"./PortalProvider-Df6qosYZ.js";import{t as u}from"./Stack.component-Dus-VNrD.js";import{t as d}from"./Stack-5lFhsAdz.js";import{t as f}from"./SearchInput.component-DuFoCEZ5.js";import{t as p}from"./SearchInput-bjVqyLcX.js";import{t as m}from"./Button.component-B36cEQ2H.js";import{t as h}from"./Button-51JHxkgm.js";import{t as g}from"./Checkbox.component-NSUdk7gc.js";import{t as _}from"./Checkbox-WaK6WjLA.js";import{r as v,t as y}from"./ComboBoxOption.component-BoOy1xLa.js";import{r as b,t as x}from"./SelectOption.component-l3f8jSvO.js";import{c as S,i as C,n as w,r as T,t as E}from"./PopupMenu-lEVMhzX1.js";import{n as D,t as O}from"./ComboBoxOption-Bjydollk.js";import{t as k}from"./DataGridToolbar.component-D5qwpKDL.js";import{t as A}from"./DataGridToolbar-qbJ9X6ou.js";import{n as j,t as M}from"./SelectOption-ryzqMZEh.js";import{t as N}from"./SortButton.component-D68k5lqb.js";import{n as P,t as F}from"./InputGroup-TTdxTTvt.js";import{t as I}from"./InputGroup.component-ypy3se9i.js";import{n as L,t as R}from"./Pill-DzQDXMc8.js";var z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{z=t(n()),A(),d(),h(),_(),j(),M(),P(),E(),F(),D(),O(),p(),R(),l(),o(),s(),B=r(),V={title:`Patterns/DataGrid/DataGrid Header`,decorators:[e=>(0,B.jsx)(c,{children:(0,B.jsx)(e,{})})],parameters:{docs:{description:{component:`
The DataGrid header is a composition pattern, not a single component. It sits above the column headers and holds everything users need to interact with and configure the dataset.

The header is structured in up to three zones:

- **Zone 1 — Actions:** Sorting controls, an optional overflow menu for global actions, and the primary action (e.g. "Create"). This zone has no background — it is a plain \`Stack\` with no wrapper component.
- **Zone 2 — Filters and Search:** One or more filter inputs (typically a \`Select\` + \`ComboBox\` in an \`InputGroup\`), a \`SearchInput\`, and active filter pills with a "Clear filters" button.
- **Zone 3 — DataGrid State:** Bulk actions (select-all checkbox + action menu) on the left, item count in the middle (total, or "X of Y" when filters are active), and last update timestamp with a refresh button on the right.

Zones 2 and 3 each use their own \`DataGridToolbar\`, which provides the background, padding, and separation from the grid.

Every zone and every element within a zone is optional. Only include what the specific DataGrid needs. If none of the above is needed, reconsider whether a DataGrid is the right pattern at all.

These stories document the header composition on its own. For the header composed together with an actual \`DataGrid\`, see the [DataGrid Pattern](?path=/docs/patterns-datagrid-datagrid-pattern--docs).
        `}}}},H={render:()=>(0,B.jsx)(u,{distribution:`end`,className:`jn:pb-2`,children:(0,B.jsx)(m,{label:`Create Server`,variant:`primary`})}),parameters:{docs:{description:{story:"The simplest DataGrid header: a single primary action. No `DataGridToolbar` needed — Zone 1 content sits directly in a `Stack`."},source:{type:`dynamic`}}}},U={render:()=>{let[e,t]=(0,z.useState)(`All`);return(0,B.jsxs)(u,{direction:`vertical`,children:[(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,className:`jn:pb-2`,children:[(0,B.jsxs)(a,{appearance:`buttons`,activeItem:e,onActiveItemChange:t,children:[(0,B.jsx)(i,{label:`All`}),(0,B.jsx)(i,{label:`Running`}),(0,B.jsx)(i,{label:`Stopped`}),(0,B.jsx)(i,{label:`Error`})]}),(0,B.jsx)(m,{label:`Create Server`,variant:`primary`})]}),(0,B.jsx)(k,{children:(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,children:[(0,B.jsxs)(I,{children:[(0,B.jsx)(b,{width:`auto`,label:`Filter by`,className:`jn:min-w-44`,children:(0,B.jsx)(x,{value:`status`,label:`Status`})}),(0,B.jsxs)(v,{children:[(0,B.jsx)(y,{value:`running`,label:`Running`}),(0,B.jsx)(y,{value:`stopped`,label:`Stopped`}),(0,B.jsx)(y,{value:`error`,label:`Error`})]})]}),(0,B.jsx)(f,{placeholder:`Search servers…`})]})})]})},parameters:{docs:{description:{story:'Predefined filter tabs in Zone 1. Use a `TabBar` with `appearance="buttons"` placed on the far left to offer a fixed set of pre-configured filters — each tab a meaningful subset of the same data set (here, servers by status). They save users from repeatedly configuring the same filters for frequently accessed subsets. Zone 1 is a bare `Stack` with no background; other Zone 1 content such as the primary action sits on the far right. Predefined filter tabs must always operate on the same entities, just filtered differently — never use them as navigation tabs for unrelated data sets. If the tabs would switch between entirely different entities, use page-level tabs with an independent DataGrid per tab instead. Each predefined filter must always be reproducible by hand through the Zone 2 filter controls — here, selecting "Status" and a status value recreates the corresponding tab. The tabs are a shortcut for frequent subsets, never a filter that cannot otherwise be configured manually. When a predefined filter is active, the DataGrid\'s item count should update to "Showing X of Y" to reflect the narrowed set, exactly as it does for manual filters.'},source:{type:`dynamic`}}}},W={render:()=>(0,B.jsxs)(u,{direction:`vertical`,children:[(0,B.jsx)(k,{children:(0,B.jsxs)(u,{direction:`vertical`,gap:`2`,children:[(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,children:[(0,B.jsxs)(I,{children:[(0,B.jsxs)(b,{width:`auto`,className:`jn:min-w-44`,children:[(0,B.jsx)(x,{value:`region`,label:`Region`}),(0,B.jsx)(x,{value:`status`,label:`Status`}),(0,B.jsx)(x,{value:`az`,label:`Availability Zone`})]}),(0,B.jsxs)(v,{children:[(0,B.jsx)(y,{value:`eu-west-1`,label:`eu-west-1`}),(0,B.jsx)(y,{value:`us-east-1`,label:`us-east-1`}),(0,B.jsx)(y,{value:`ap-south-1`,label:`ap-south-1`})]})]}),(0,B.jsx)(f,{placeholder:`Search servers…`})]}),(0,B.jsxs)(u,{gap:`2`,wrap:!0,children:[(0,B.jsx)(L,{pillKey:`Region`,pillValue:`eu-west-1`,closeable:!0}),(0,B.jsx)(L,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,B.jsx)(m,{label:`Clear filters`,size:`xs`})]})]})}),(0,B.jsx)(k,{children:(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,B.jsx)(`span`,{children:`Showing 2 of 4 servers`}),(0,B.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,B.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,B.jsx)(m,{label:`Update`,size:`xs`})]})]})})]}),parameters:{docs:{description:{story:"Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. `DataGridToolbar` provides the background and spacing. Zone 1 is not needed here — no bulk actions or primary action required for this view."},source:{type:`dynamic`}}}},G={render:()=>(0,B.jsxs)(u,{direction:`vertical`,children:[(0,B.jsx)(k,{children:(0,B.jsx)(u,{distribution:`end`,alignment:`center`,children:(0,B.jsx)(f,{placeholder:`Search servers…`})})}),(0,B.jsx)(k,{children:(0,B.jsx)(u,{distribution:`center`,alignment:`center`,className:`jn:text-sm`,children:(0,B.jsx)(`span`,{children:`Showing 4 servers`})})})]}),parameters:{docs:{description:{story:`Zone 2 with search only — no filter controls needed. Zone 3 shows item count only, centered.`},source:{type:`dynamic`}}}},K={render:()=>{let[e,t]=(0,z.useState)(`asc`),[n,r]=(0,z.useState)(`All`);return(0,B.jsxs)(u,{direction:`vertical`,className:`juno-pattern-datagrid-header`,children:[(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,gap:`2`,className:`jn:pb-2`,children:[(0,B.jsxs)(a,{appearance:`buttons`,activeItem:n,onActiveItemChange:r,children:[(0,B.jsx)(i,{label:`All`}),(0,B.jsx)(i,{label:`Running`}),(0,B.jsx)(i,{label:`Stopped`}),(0,B.jsx)(i,{label:`Error`})]}),(0,B.jsxs)(u,{gap:`2`,children:[(0,B.jsxs)(u,{gap:`0.5`,children:[(0,B.jsxs)(b,{width:`auto`,label:`Sort by`,className:`jn:min-w-40`,children:[(0,B.jsx)(x,{value:`name`,label:`Name`}),(0,B.jsx)(x,{value:`status`,label:`Status`}),(0,B.jsx)(x,{value:`region`,label:`Region`})]}),(0,B.jsx)(N,{order:e,onChange:t})]}),(0,B.jsxs)(u,{gap:`0.5`,children:[(0,B.jsxs)(w,{children:[(0,B.jsx)(S,{as:z.Fragment,children:(0,B.jsx)(m,{icon:`moreVert`,title:`More actions`})}),(0,B.jsxs)(C,{children:[(0,B.jsx)(T,{label:`Export CSV`}),(0,B.jsx)(T,{label:`Refresh all`})]})]}),(0,B.jsx)(m,{label:`Create Server`,variant:`primary`,className:`jn:whitespace-nowrap`})]})]})]}),(0,B.jsx)(k,{children:(0,B.jsxs)(u,{direction:`vertical`,gap:`2`,children:[(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,children:[(0,B.jsxs)(I,{children:[(0,B.jsxs)(b,{width:`auto`,label:`Filter by`,className:`jn:min-w-44`,children:[(0,B.jsx)(x,{value:`status`,label:`Status`}),(0,B.jsx)(x,{value:`region`,label:`Region`}),(0,B.jsx)(x,{value:`az`,label:`Availability Zone`})]}),(0,B.jsxs)(v,{children:[(0,B.jsx)(y,{value:`running`,label:`Running`}),(0,B.jsx)(y,{value:`stopped`,label:`Stopped`}),(0,B.jsx)(y,{value:`error`,label:`Error`})]})]}),(0,B.jsx)(f,{placeholder:`Search servers…`})]}),(0,B.jsxs)(u,{gap:`2`,wrap:!0,children:[(0,B.jsx)(L,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,B.jsx)(m,{label:`Clear filters`,size:`xs`})]})]})}),(0,B.jsx)(k,{children:(0,B.jsxs)(u,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,B.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,B.jsx)(g,{"aria-label":`Select all items`}),(0,B.jsxs)(w,{className:`jn:flex jn:items-center`,children:[(0,B.jsx)(S,{as:z.Fragment,children:(0,B.jsx)(m,{size:`xs`,icon:`moreVert`,label:`Actions`})}),(0,B.jsxs)(C,{children:[(0,B.jsx)(T,{label:`Download`}),(0,B.jsx)(T,{label:`Delete`})]})]})]}),(0,B.jsx)(`span`,{className:`jn:theme-color-text-light`,children:`Showing 2 of 4 servers`}),(0,B.jsxs)(u,{gap:`2`,alignment:`center`,children:[(0,B.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,B.jsx)(m,{label:`Update`,size:`xs`})]})]})})]})},parameters:{docs:{description:{story:"Fully featured DataGrid header, showing all three zones on their own (no grid). Zone 1 (predefined filter tabs, sort, overflow menu, primary action) is a bare `Stack` — no background, no `DataGridToolbar`. Zones 2 and 3 each get their own `DataGridToolbar`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional. All header zones are wrapped in a single vertical `Stack`. For the header composed together with an actual `DataGrid`, see the [DataGrid Pattern](?path=/docs/patterns-datagrid-datagrid-pattern--docs)."},source:{code:`<Stack direction="vertical" className="juno-pattern-datagrid-header">
  {/* Zone 1 — bare Stack, no background */}
  <Stack distribution="between" alignment="center" gap="2" className="pb-2">
    <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
      <TabBarItem label="All" />
      <TabBarItem label="Running" />
      <TabBarItem label="Stopped" />
      <TabBarItem label="Error" />
    </TabBar>
    <Stack gap="2">
      <Stack gap="0.5">
        <Select width="auto" label="Sort by" className="min-w-40">
          <SelectOption value="name" label="Name" />
          <SelectOption value="status" label="Status" />
          <SelectOption value="region" label="Region" />
        </Select>
        <SortButton order={sortOrder} onChange={setSortOrder} />
      </Stack>
      <Stack gap="0.5">
        <PopupMenu>
          <PopupMenuToggle as={React.Fragment}>
            <Button icon="moreVert" title="More actions" />
          </PopupMenuToggle>
          <PopupMenuOptions>
            <PopupMenuItem label="Export CSV" />
            <PopupMenuItem label="Refresh all" />
          </PopupMenuOptions>
        </PopupMenu>
        <Button label="Create Server" variant="primary" className="whitespace-nowrap" />
      </Stack>
    </Stack>
  </Stack>

  {/* Zone 2 — DataGridToolbar provides background and spacing */}
  <DataGridToolbar>
    <Stack direction="vertical" gap="2">
      <Stack distribution="between" alignment="center">
        <InputGroup>
          <Select width="auto" label="Filter by" className="min-w-44">
            <SelectOption value="status" label="Status" />
            <SelectOption value="region" label="Region" />
            <SelectOption value="az" label="Availability Zone" />
          </Select>
          <ComboBox>
            <ComboBoxOption value="running" label="Running" />
            <ComboBoxOption value="stopped" label="Stopped" />
            <ComboBoxOption value="error" label="Error" />
          </ComboBox>
        </InputGroup>
        <SearchInput placeholder="Search servers…" />
      </Stack>
      <Stack gap="2" wrap>
        <Pill pillKey="Status" pillValue="Running" closeable />
        <Button label="Clear filters" size="xs" />
      </Stack>
    </Stack>
  </DataGridToolbar>

  {/* Zone 3 — separate DataGridToolbar */}
  <DataGridToolbar>
    <Stack distribution="between" alignment="center" className="text-sm">
      <Stack gap="2" alignment="center">
        <Checkbox aria-label="Select all items" />
        <PopupMenu className="flex items-center">
          <PopupMenuToggle as={React.Fragment}>
            <Button size="xs" icon="moreVert" label="Actions" />
          </PopupMenuToggle>
          <PopupMenuOptions>
            <PopupMenuItem label="Download" />
            <PopupMenuItem label="Delete" />
          </PopupMenuOptions>
        </PopupMenu>
      </Stack>
      <span className="theme-color-text-light">Showing 2 of 4 servers</span>
      <Stack gap="2" alignment="center">
        <span>Last update: 20.05.2026 @09:41</span>
        <Button label="Update" size="xs" />
      </Stack>
    </Stack>
  </DataGridToolbar>
</Stack>`}}}},q=[`WithPrimaryAction`,`WithPredefinedFilters`,`WithFiltersSearchAndState`,`WithSearchOnly`,`FullyFeatured`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Stack distribution="end" className="jn:pb-2">
      <Button label="Create Server" variant="primary" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "The simplest DataGrid header: a single primary action. No \`DataGridToolbar\` needed — Zone 1 content sits directly in a \`Stack\`."
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeFilter, setActiveFilter] = useState<React.ReactNode>("All");
    return <Stack direction="vertical">
        {/* Zone 1: Predefined filter tabs on the far left, primary action on the far right */}
        <Stack distribution="between" alignment="center" className="jn:pb-2">
          <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
            <TabBarItem label="All" />
            <TabBarItem label="Running" />
            <TabBarItem label="Stopped" />
            <TabBarItem label="Error" />
          </TabBar>
          <Button label="Create Server" variant="primary" />
        </Stack>

        {/* Zone 2: The same filters, recreatable by hand via filter inputs + search */}
        <DataGridToolbar>
          <Stack distribution="between" alignment="center">
            <InputGroup>
              <Select width="auto" label="Filter by" className="jn:min-w-44">
                <SelectOption value="status" label="Status" />
              </Select>
              <ComboBox>
                <ComboBoxOption value="running" label="Running" />
                <ComboBoxOption value="stopped" label="Stopped" />
                <ComboBoxOption value="error" label="Error" />
              </ComboBox>
            </InputGroup>
            <SearchInput placeholder="Search servers…" />
          </Stack>
        </DataGridToolbar>
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Predefined filter tabs in Zone 1. Use a \`TabBar\` with \`appearance="buttons"\` placed on the far left to offer a fixed set of pre-configured filters — each tab a meaningful subset of the same data set (here, servers by status). They save users from repeatedly configuring the same filters for frequently accessed subsets. Zone 1 is a bare \`Stack\` with no background; other Zone 1 content such as the primary action sits on the far right. Predefined filter tabs must always operate on the same entities, just filtered differently — never use them as navigation tabs for unrelated data sets. If the tabs would switch between entirely different entities, use page-level tabs with an independent DataGrid per tab instead. Each predefined filter must always be reproducible by hand through the Zone 2 filter controls — here, selecting "Status" and a status value recreates the corresponding tab. The tabs are a shortcut for frequent subsets, never a filter that cannot otherwise be configured manually. When a predefined filter is active, the DataGrid\\'s item count should update to "Showing X of Y" to reflect the narrowed set, exactly as it does for manual filters.'
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack direction="vertical" gap="2">
          {/* Zone 2: Filters + Search */}
          <Stack distribution="between" alignment="center">
            <InputGroup>
              <Select width="auto" className="jn:min-w-44">
                <SelectOption value="region" label="Region" />
                <SelectOption value="status" label="Status" />
                <SelectOption value="az" label="Availability Zone" />
              </Select>
              <ComboBox>
                <ComboBoxOption value="eu-west-1" label="eu-west-1" />
                <ComboBoxOption value="us-east-1" label="us-east-1" />
                <ComboBoxOption value="ap-south-1" label="ap-south-1" />
              </ComboBox>
            </InputGroup>
            <SearchInput placeholder="Search servers…" />
          </Stack>

          {/* Zone 2 cont: Active filter pills */}
          <Stack gap="2" wrap>
            <Pill pillKey="Region" pillValue="eu-west-1" closeable />
            <Pill pillKey="Status" pillValue="Running" closeable />
            <Button label="Clear filters" size="xs" />
          </Stack>
        </Stack>
      </DataGridToolbar>
      <DataGridToolbar>
        {/* Zone 3: Item count + Refresh */}
        <Stack distribution="between" alignment="center" className="jn:text-sm">
          <span>Showing 2 of 4 servers</span>
          <Stack gap="2" alignment="center">
            <span>Last update: 20.05.2026 @09:41</span>
            <Button label="Update" size="xs" />
          </Stack>
        </Stack>
      </DataGridToolbar>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. \`DataGridToolbar\` provides the background and spacing. Zone 1 is not needed here — no bulk actions or primary action required for this view."
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical">
      <DataGridToolbar>
        <Stack distribution="end" alignment="center">
          <SearchInput placeholder="Search servers…" />
        </Stack>
      </DataGridToolbar>
      <DataGridToolbar>
        {/* Zone 3: Item count only */}
        <Stack distribution="center" alignment="center" className="jn:text-sm">
          <span>Showing 4 servers</span>
        </Stack>
      </DataGridToolbar>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "Zone 2 with search only — no filter controls needed. Zone 3 shows item count only, centered."
      },
      source: {
        type: "dynamic"
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [activeFilter, setActiveFilter] = useState<React.ReactNode>("All");
    return <Stack direction="vertical" className="juno-pattern-datagrid-header">
        {/* Zone 1: Predefined filter tabs (left) + sorting and primary action (right) — bare Stack, no background */}
        <Stack distribution="between" alignment="center" gap="2" className="jn:pb-2">
          <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
            <TabBarItem label="All" />
            <TabBarItem label="Running" />
            <TabBarItem label="Stopped" />
            <TabBarItem label="Error" />
          </TabBar>
          <Stack gap="2">
            <Stack gap="0.5">
              <Select width="auto" label="Sort by" className="jn:min-w-40">
                <SelectOption value="name" label="Name" />
                <SelectOption value="status" label="Status" />
                <SelectOption value="region" label="Region" />
              </Select>
              <SortButton order={sortOrder} onChange={setSortOrder} />
            </Stack>
            <Stack gap="0.5">
              <PopupMenu>
                <PopupMenuToggle as={React.Fragment}>
                  <Button icon="moreVert" title="More actions" />
                </PopupMenuToggle>
                <PopupMenuOptions>
                  <PopupMenuItem label="Export CSV" />
                  <PopupMenuItem label="Refresh all" />
                </PopupMenuOptions>
              </PopupMenu>
              <Button label="Create Server" variant="primary" className="jn:whitespace-nowrap" />
            </Stack>
          </Stack>
        </Stack>

        {/* Zone 2 — DataGridToolbar provides background and spacing */}
        <DataGridToolbar>
          <Stack direction="vertical" gap="2">
            {/* Zone 2: Filters + Search */}
            <Stack distribution="between" alignment="center">
              <InputGroup>
                <Select width="auto" label="Filter by" className="jn:min-w-44">
                  <SelectOption value="status" label="Status" />
                  <SelectOption value="region" label="Region" />
                  <SelectOption value="az" label="Availability Zone" />
                </Select>
                <ComboBox>
                  <ComboBoxOption value="running" label="Running" />
                  <ComboBoxOption value="stopped" label="Stopped" />
                  <ComboBoxOption value="error" label="Error" />
                </ComboBox>
              </InputGroup>
              <SearchInput placeholder="Search servers…" />
            </Stack>

            {/* Zone 2 cont: Active filter pills */}
            <Stack gap="2" wrap>
              <Pill pillKey="Status" pillValue="Running" closeable />
              <Button label="Clear filters" size="xs" />
            </Stack>
          </Stack>
        </DataGridToolbar>
        <DataGridToolbar>
          {/* Zone 3: Bulk actions + item count + refresh */}
          <Stack distribution="between" alignment="center" className="jn:text-sm">
            <Stack gap="2" alignment="center">
              <Checkbox aria-label="Select all items" />
              <PopupMenu className="jn:flex jn:items-center">
                <PopupMenuToggle as={React.Fragment}>
                  <Button size="xs" icon="moreVert" label="Actions" />
                </PopupMenuToggle>
                <PopupMenuOptions>
                  <PopupMenuItem label="Download" />
                  <PopupMenuItem label="Delete" />
                </PopupMenuOptions>
              </PopupMenu>
            </Stack>
            <span className="jn:theme-color-text-light">Showing 2 of 4 servers</span>
            <Stack gap="2" alignment="center">
              <span>Last update: 20.05.2026 @09:41</span>
              <Button label="Update" size="xs" />
            </Stack>
          </Stack>
        </DataGridToolbar>
      </Stack>;
  },
  parameters: {
    docs: {
      description: {
        story: "Fully featured DataGrid header, showing all three zones on their own (no grid). Zone 1 (predefined filter tabs, sort, overflow menu, primary action) is a bare \`Stack\` — no background, no \`DataGridToolbar\`. Zones 2 and 3 each get their own \`DataGridToolbar\`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional. All header zones are wrapped in a single vertical \`Stack\`. For the header composed together with an actual \`DataGrid\`, see the [DataGrid Pattern](?path=/docs/patterns-datagrid-datagrid-pattern--docs)."
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: \`
<Stack direction="vertical" className="juno-pattern-datagrid-header">
  {/* Zone 1 — bare Stack, no background */}
  <Stack distribution="between" alignment="center" gap="2" className="pb-2">
    <TabBar appearance="buttons" activeItem={activeFilter} onActiveItemChange={setActiveFilter}>
      <TabBarItem label="All" />
      <TabBarItem label="Running" />
      <TabBarItem label="Stopped" />
      <TabBarItem label="Error" />
    </TabBar>
    <Stack gap="2">
      <Stack gap="0.5">
        <Select width="auto" label="Sort by" className="min-w-40">
          <SelectOption value="name" label="Name" />
          <SelectOption value="status" label="Status" />
          <SelectOption value="region" label="Region" />
        </Select>
        <SortButton order={sortOrder} onChange={setSortOrder} />
      </Stack>
      <Stack gap="0.5">
        <PopupMenu>
          <PopupMenuToggle as={React.Fragment}>
            <Button icon="moreVert" title="More actions" />
          </PopupMenuToggle>
          <PopupMenuOptions>
            <PopupMenuItem label="Export CSV" />
            <PopupMenuItem label="Refresh all" />
          </PopupMenuOptions>
        </PopupMenu>
        <Button label="Create Server" variant="primary" className="whitespace-nowrap" />
      </Stack>
    </Stack>
  </Stack>

  {/* Zone 2 — DataGridToolbar provides background and spacing */}
  <DataGridToolbar>
    <Stack direction="vertical" gap="2">
      <Stack distribution="between" alignment="center">
        <InputGroup>
          <Select width="auto" label="Filter by" className="min-w-44">
            <SelectOption value="status" label="Status" />
            <SelectOption value="region" label="Region" />
            <SelectOption value="az" label="Availability Zone" />
          </Select>
          <ComboBox>
            <ComboBoxOption value="running" label="Running" />
            <ComboBoxOption value="stopped" label="Stopped" />
            <ComboBoxOption value="error" label="Error" />
          </ComboBox>
        </InputGroup>
        <SearchInput placeholder="Search servers…" />
      </Stack>
      <Stack gap="2" wrap>
        <Pill pillKey="Status" pillValue="Running" closeable />
        <Button label="Clear filters" size="xs" />
      </Stack>
    </Stack>
  </DataGridToolbar>

  {/* Zone 3 — separate DataGridToolbar */}
  <DataGridToolbar>
    <Stack distribution="between" alignment="center" className="text-sm">
      <Stack gap="2" alignment="center">
        <Checkbox aria-label="Select all items" />
        <PopupMenu className="flex items-center">
          <PopupMenuToggle as={React.Fragment}>
            <Button size="xs" icon="moreVert" label="Actions" />
          </PopupMenuToggle>
          <PopupMenuOptions>
            <PopupMenuItem label="Download" />
            <PopupMenuItem label="Delete" />
          </PopupMenuOptions>
        </PopupMenu>
      </Stack>
      <span className="theme-color-text-light">Showing 2 of 4 servers</span>
      <Stack gap="2" alignment="center">
        <span>Last update: 20.05.2026 @09:41</span>
        <Button label="Update" size="xs" />
      </Stack>
    </Stack>
  </DataGridToolbar>
</Stack>
        \`.trim()
      }
    }
  }
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as FullyFeatured,W as WithFiltersSearchAndState,U as WithPredefinedFilters,H as WithPrimaryAction,G as WithSearchOnly,q as __namedExportsOrder,V as default};