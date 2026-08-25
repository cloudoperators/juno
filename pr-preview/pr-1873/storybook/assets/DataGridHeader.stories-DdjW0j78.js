import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-CSnjoAvk.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./PortalProvider.component-QtHhXQzy.js";import{t as a}from"./PortalProvider-DsUwbYgj.js";import{t as o}from"./Stack.component-DIY_htG6.js";import{t as s}from"./Stack-BPm3Qpxd.js";import{t as c}from"./SearchInput.component-BP5zgM9J.js";import{t as l}from"./SearchInput-B5ftXx30.js";import{t as u}from"./Button.component-C-Z2LAhw.js";import{t as d}from"./Button-lrhdI6sL.js";import{t as f}from"./Checkbox.component-DhvBbJjJ.js";import{t as p}from"./Checkbox-BLn0S_1D.js";import{r as m,t as h}from"./ComboBoxOption.component-CtYFKkrS.js";import{n as g,t as _}from"./ComboBoxOption-BPGo3Fqe.js";import{c as v,i as y,l as b,o as x,r as S,t as C}from"./DataGridHeadCell.component-DHvP2wTN.js";import{n as w,t as T}from"./DataGridHeadCell-CGTXIW2v.js";import{t as E}from"./DataGridToolbar.component-C1v0bQSj.js";import{t as D}from"./DataGridToolbar-D9pQC6zx.js";import{r as O,t as k}from"./SelectOption.component-DcPG-7ou.js";import{n as A,t as j}from"./SelectOption-DxdnYKEG.js";import{n as M,t as N}from"./SortButton.component-CL-ZJu45.js";import{c as P,i as F,n as I,r as L,t as R}from"./PopupMenu-CMtUaFZs.js";import{n as z,t as B}from"./InputGroup.component-KxFSYnym.js";import{n as V,t as H}from"./Pill-LOS53XVG.js";var U=t((()=>{M()})),W=t((()=>{z()})),G,K,q,J,Y,X,Z,Q,$;t((()=>{G=e(n()),b(),w(),S(),T(),D(),s(),d(),p(),A(),j(),U(),R(),W(),g(),_(),l(),H(),a(),K=r(),q={title:`Components/DataGrid/DataGrid Header`,decorators:[e=>(0,K.jsx)(i,{children:(0,K.jsx)(e,{})})],parameters:{docs:{description:{component:`
The DataGrid header is a composition pattern, not a single component. It sits above the column headers and holds everything users need to interact with and configure the dataset.

The header is structured in up to three zones:

- **Zone 1 — Actions:** Sorting controls, an optional overflow menu for global actions, and the primary action (e.g. "Create"). This zone has no background — it is a plain \`Stack\` with no wrapper component.
- **Zone 2 — Filters and Search:** One or more filter inputs (typically a \`Select\` + \`ComboBox\` in an \`InputGroup\`), a \`SearchInput\`, and active filter pills with a "Clear filters" button.
- **Zone 3 — DataGrid State:** Bulk actions (select-all checkbox + action menu) on the left, item count in the middle (total, or "X of Y" when filters are active), and last update timestamp with a refresh button on the right.

Zones 2 and 3 each use their own \`DataGridToolbar\`, which provides the background, padding, and separation from the grid.

Every zone and every element within a zone is optional. Only include what the specific DataGrid needs. If none of the above is needed, reconsider whether a DataGrid is the right pattern at all.
        `}}}},J=[{id:`1`,name:`node-prod-01`,region:`eu-west-1`,status:`Running`,az:`AZ-1`},{id:`2`,name:`node-prod-02`,region:`eu-west-1`,status:`Stopped`,az:`AZ-2`},{id:`3`,name:`node-staging-01`,region:`us-east-1`,status:`Running`,az:`AZ-1`},{id:`4`,name:`node-dev-01`,region:`ap-south-1`,status:`Error`,az:`AZ-3`}],Y={render:()=>(0,K.jsx)(o,{distribution:`end`,className:`jn:pb-2`,children:(0,K.jsx)(u,{label:`Create Server`,variant:`primary`})}),parameters:{docs:{description:{story:"The simplest DataGrid header: a single primary action. No `DataGridToolbar` needed — Zone 1 content sits directly in a `Stack`."},source:{type:`dynamic`}}}},X={render:()=>(0,K.jsxs)(o,{direction:`vertical`,children:[(0,K.jsx)(E,{children:(0,K.jsxs)(o,{direction:`vertical`,gap:`2`,children:[(0,K.jsxs)(o,{distribution:`between`,alignment:`center`,children:[(0,K.jsxs)(B,{children:[(0,K.jsxs)(O,{width:`auto`,className:`jn:min-w-44`,children:[(0,K.jsx)(k,{value:`region`,label:`Region`}),(0,K.jsx)(k,{value:`status`,label:`Status`}),(0,K.jsx)(k,{value:`az`,label:`Availability Zone`})]}),(0,K.jsxs)(m,{children:[(0,K.jsx)(h,{value:`eu-west-1`,label:`eu-west-1`}),(0,K.jsx)(h,{value:`us-east-1`,label:`us-east-1`}),(0,K.jsx)(h,{value:`ap-south-1`,label:`ap-south-1`})]})]}),(0,K.jsx)(c,{placeholder:`Search servers…`})]}),(0,K.jsxs)(o,{gap:`2`,wrap:!0,children:[(0,K.jsx)(V,{pillKey:`Region`,pillValue:`eu-west-1`,closeable:!0}),(0,K.jsx)(V,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,K.jsx)(u,{label:`Clear filters`,size:`xs`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(o,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,K.jsx)(`span`,{children:`Showing 2 of 4 servers`}),(0,K.jsxs)(o,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,K.jsx)(u,{label:`Update`,size:`xs`})]})]})})]}),parameters:{docs:{description:{story:"Zones 2 and 3: filter controls, active filter pills, search, item count, and a refresh button. `DataGridToolbar` provides the background and spacing. Zone 1 is not needed here — no bulk actions or primary action required for this view."},source:{type:`dynamic`}}}},Z={render:()=>(0,K.jsxs)(o,{direction:`vertical`,children:[(0,K.jsx)(E,{children:(0,K.jsx)(o,{distribution:`end`,alignment:`center`,children:(0,K.jsx)(c,{placeholder:`Search servers…`})})}),(0,K.jsx)(E,{children:(0,K.jsx)(o,{distribution:`center`,alignment:`center`,className:`jn:text-sm`,children:(0,K.jsx)(`span`,{children:`Showing 4 servers`})})})]}),parameters:{docs:{description:{story:`Zone 2 with search only — no filter controls needed. Zone 3 shows item count only, centered.`},source:{type:`dynamic`}}}},Q={render:()=>{let[e,t]=(0,G.useState)(`asc`),[n,r]=(0,G.useState)({});return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(o,{direction:`vertical`,children:[(0,K.jsx)(o,{distribution:`end`,alignment:`center`,gap:`2`,className:`jn:pb-2`,children:(0,K.jsxs)(o,{gap:`2`,children:[(0,K.jsxs)(o,{gap:`0.5`,children:[(0,K.jsxs)(O,{width:`auto`,label:`Sort by`,className:`jn:min-w-40`,children:[(0,K.jsx)(k,{value:`name`,label:`Name`}),(0,K.jsx)(k,{value:`status`,label:`Status`}),(0,K.jsx)(k,{value:`region`,label:`Region`})]}),(0,K.jsx)(N,{order:e,onChange:t})]}),(0,K.jsxs)(o,{gap:`0.5`,children:[(0,K.jsxs)(I,{children:[(0,K.jsx)(P,{as:G.Fragment,children:(0,K.jsx)(u,{icon:`moreVert`,title:`More actions`})}),(0,K.jsxs)(F,{children:[(0,K.jsx)(L,{label:`Export CSV`}),(0,K.jsx)(L,{label:`Refresh all`})]})]}),(0,K.jsx)(u,{label:`Create Server`,variant:`primary`,className:`jn:whitespace-nowrap`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(o,{direction:`vertical`,gap:`2`,children:[(0,K.jsxs)(o,{distribution:`between`,alignment:`center`,children:[(0,K.jsxs)(B,{children:[(0,K.jsxs)(O,{width:`auto`,label:`Filter by`,className:`jn:min-w-44`,children:[(0,K.jsx)(k,{value:`region`,label:`Region`}),(0,K.jsx)(k,{value:`status`,label:`Status`}),(0,K.jsx)(k,{value:`az`,label:`Availability Zone`})]}),(0,K.jsxs)(m,{children:[(0,K.jsx)(h,{value:`eu-west-1`,label:`eu-west-1`}),(0,K.jsx)(h,{value:`us-east-1`,label:`us-east-1`}),(0,K.jsx)(h,{value:`ap-south-1`,label:`ap-south-1`})]})]}),(0,K.jsx)(c,{placeholder:`Search servers…`})]}),(0,K.jsxs)(o,{gap:`2`,wrap:!0,children:[(0,K.jsx)(V,{pillKey:`Region`,pillValue:`eu-west-1`,closeable:!0}),(0,K.jsx)(V,{pillKey:`Status`,pillValue:`Running`,closeable:!0}),(0,K.jsx)(u,{label:`Clear filters`,size:`xs`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(o,{distribution:`between`,alignment:`center`,className:`jn:text-sm`,children:[(0,K.jsxs)(o,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(f,{"aria-label":`Select all items`}),(0,K.jsxs)(I,{className:`jn:flex jn:items-center`,children:[(0,K.jsx)(P,{as:G.Fragment,children:(0,K.jsx)(u,{size:`xs`,icon:`moreVert`,label:`Actions`})}),(0,K.jsxs)(F,{children:[(0,K.jsx)(L,{label:`Download`}),(0,K.jsx)(L,{label:`Delete`})]})]})]}),(0,K.jsx)(`span`,{className:`jn:theme-color-text-light`,children:`Showing 2 of 4 servers`}),(0,K.jsxs)(o,{gap:`2`,alignment:`center`,children:[(0,K.jsx)(`span`,{children:`Last update: 20.05.2026 @09:41`}),(0,K.jsx)(u,{label:`Update`,size:`xs`})]})]})})]}),(0,K.jsxs)(v,{columns:6,minContentColumns:[0,5],children:[(0,K.jsxs)(x,{children:[(0,K.jsx)(C,{}),(0,K.jsx)(C,{children:`Name`}),(0,K.jsx)(C,{children:`Region`}),(0,K.jsx)(C,{children:`Status`}),(0,K.jsx)(C,{children:`Availability Zone`}),(0,K.jsx)(C,{})]}),J.map(e=>(0,K.jsxs)(x,{children:[(0,K.jsx)(y,{verticalAlignment:`center`,children:(0,K.jsx)(f,{"aria-label":`Select ${e.name}`,checked:!!n[e.id],onChange:t=>r(n=>({...n,[e.id]:t.target.checked}))})}),(0,K.jsx)(y,{children:e.name}),(0,K.jsx)(y,{children:e.region}),(0,K.jsx)(y,{children:e.status}),(0,K.jsx)(y,{children:e.az}),(0,K.jsx)(y,{children:(0,K.jsx)(I,{children:(0,K.jsxs)(F,{children:[(0,K.jsx)(L,{label:`Edit`}),(0,K.jsx)(L,{label:`Download`}),(0,K.jsx)(L,{label:`Delete`})]})})})]},e.id))]})]})},parameters:{docs:{description:{story:"Fully featured DataGrid header. Zone 1 (sort, overflow menu, primary action) is a bare `Stack` — no background, no `DataGridToolbar`. Zones 2 and 3 each get their own `DataGridToolbar`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional."},source:{code:`<Stack direction="vertical">
  {/* Zone 1 — bare Stack, no background */}
  <Stack distribution="end" alignment="center" gap="2" className="pb-2">
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
      <Stack gap="2" wrap>
        <Pill pillKey="Region" pillValue="eu-west-1" closeable />
        <Pill pillKey="Status" pillValue="Running" closeable />
        <Button label="Clear filters" size="xs" />
      </Stack>
    </Stack>
  </DataGridToolbar>

  {/* Zone 3 — separate DataGridToolbar */}
  <DataGridToolbar>
    <Stack distribution="between" alignment="center" className="text-sm">
      <Stack gap="2" alignment="center">
        <Checkbox />
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

<DataGrid columns={6} minContentColumns={[0, 5]}>
  <DataGridRow>
    <DataGridHeadCell />
    <DataGridHeadCell>Name</DataGridHeadCell>
    <DataGridHeadCell>Region</DataGridHeadCell>
    <DataGridHeadCell>Status</DataGridHeadCell>
    <DataGridHeadCell>Availability Zone</DataGridHeadCell>
    <DataGridHeadCell />
  </DataGridRow>
  {servers.map((s) => (
    <DataGridRow key={s.id}>
      <DataGridCell verticalAlignment="center">
        <Checkbox
          aria-label={\`Select \${s.name}\`}
          checked={!!selected[s.id]}
          onChange={(e) => setSelected((prev) => ({ ...prev, [s.id]: e.target.checked }))}
        />
      </DataGridCell>
      <DataGridCell>{s.name}</DataGridCell>
      <DataGridCell>{s.region}</DataGridCell>
      <DataGridCell>{s.status}</DataGridCell>
      <DataGridCell>{s.az}</DataGridCell>
      <DataGridCell>
        <PopupMenu>
          <PopupMenuOptions>
            <PopupMenuItem label="Edit" />
            <PopupMenuItem label="Download" />
            <PopupMenuItem label="Delete" />
          </PopupMenuOptions>
        </PopupMenu>
      </DataGridCell>
    </DataGridRow>
  ))}
</DataGrid>`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    return <>
        <Stack direction="vertical">
          {/* Zone 1: Sorting + primary action — bare Stack, no background */}
          <Stack distribution="end" alignment="center" gap="2" className="jn:pb-2">
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
        </Stack>

        <DataGrid columns={6} minContentColumns={[0, 5]}>
          <DataGridRow>
            <DataGridHeadCell />
            <DataGridHeadCell>Name</DataGridHeadCell>
            <DataGridHeadCell>Region</DataGridHeadCell>
            <DataGridHeadCell>Status</DataGridHeadCell>
            <DataGridHeadCell>Availability Zone</DataGridHeadCell>
            <DataGridHeadCell />
          </DataGridRow>
          {servers.map(s => <DataGridRow key={s.id}>
              <DataGridCell verticalAlignment="center">
                <Checkbox aria-label={\`Select \${s.name}\`} checked={!!selected[s.id]} onChange={e => setSelected(prev => ({
              ...prev,
              [s.id]: e.target.checked
            }))} />
              </DataGridCell>
              <DataGridCell>{s.name}</DataGridCell>
              <DataGridCell>{s.region}</DataGridCell>
              <DataGridCell>{s.status}</DataGridCell>
              <DataGridCell>{s.az}</DataGridCell>
              <DataGridCell>
                <PopupMenu>
                  <PopupMenuOptions>
                    <PopupMenuItem label="Edit" />
                    <PopupMenuItem label="Download" />
                    <PopupMenuItem label="Delete" />
                  </PopupMenuOptions>
                </PopupMenu>
              </DataGridCell>
            </DataGridRow>)}
        </DataGrid>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: "Fully featured DataGrid header. Zone 1 (sort, overflow menu, primary action) is a bare \`Stack\` — no background, no \`DataGridToolbar\`. Zones 2 and 3 each get their own \`DataGridToolbar\`. Zone 3 carries bulk actions (checkbox + action menu) on the left, item count in the middle, and last update + refresh on the right. Every zone and every element within it is optional."
      },
      // Keep this source.code in sync with the render function above
      source: {
        code: \`
<Stack direction="vertical">
  {/* Zone 1 — bare Stack, no background */}
  <Stack distribution="end" alignment="center" gap="2" className="pb-2">
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
      <Stack gap="2" wrap>
        <Pill pillKey="Region" pillValue="eu-west-1" closeable />
        <Pill pillKey="Status" pillValue="Running" closeable />
        <Button label="Clear filters" size="xs" />
      </Stack>
    </Stack>
  </DataGridToolbar>

  {/* Zone 3 — separate DataGridToolbar */}
  <DataGridToolbar>
    <Stack distribution="between" alignment="center" className="text-sm">
      <Stack gap="2" alignment="center">
        <Checkbox />
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

<DataGrid columns={6} minContentColumns={[0, 5]}>
  <DataGridRow>
    <DataGridHeadCell />
    <DataGridHeadCell>Name</DataGridHeadCell>
    <DataGridHeadCell>Region</DataGridHeadCell>
    <DataGridHeadCell>Status</DataGridHeadCell>
    <DataGridHeadCell>Availability Zone</DataGridHeadCell>
    <DataGridHeadCell />
  </DataGridRow>
  {servers.map((s) => (
    <DataGridRow key={s.id}>
      <DataGridCell verticalAlignment="center">
        <Checkbox
          aria-label={\\\`Select \\\${s.name}\\\`}
          checked={!!selected[s.id]}
          onChange={(e) => setSelected((prev) => ({ ...prev, [s.id]: e.target.checked }))}
        />
      </DataGridCell>
      <DataGridCell>{s.name}</DataGridCell>
      <DataGridCell>{s.region}</DataGridCell>
      <DataGridCell>{s.status}</DataGridCell>
      <DataGridCell>{s.az}</DataGridCell>
      <DataGridCell>
        <PopupMenu>
          <PopupMenuOptions>
            <PopupMenuItem label="Edit" />
            <PopupMenuItem label="Download" />
            <PopupMenuItem label="Delete" />
          </PopupMenuOptions>
        </PopupMenu>
      </DataGridCell>
    </DataGridRow>
  ))}
</DataGrid>
        \`.trim()
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`WithPrimaryAction`,`WithFiltersSearchAndState`,`WithSearchOnly`,`FullyFeatured`]}))();export{Q as FullyFeatured,X as WithFiltersSearchAndState,Y as WithPrimaryAction,Z as WithSearchOnly,$ as __namedExportsOrder,q as default};