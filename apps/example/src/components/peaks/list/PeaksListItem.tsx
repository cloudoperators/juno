/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGridCell,
  DataGridRow,
  Badge,
  Stack,
  Button,
  BreadcrumbItem,
  Breadcrumb,
  CodeBlock,
  Checkbox,
  NativeSelect,
  NativeSelectOption,
  Radio,
  SearchInput,
  SecretText,
  JsonViewer,
  Switch,
  Textarea,
  TextInput,
  Panel,
  PanelBody,
  Modal,
  Pill,
  Icon,
  CheckboxGroup,
  ComboBoxOption,
  ComboBox,
  DateTimePicker,
  RadioGroup,
  Select,
  SelectOption,
  PopupMenu,
  PopupMenuOptions,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@cloudoperators/juno-ui-components"

import { Peak } from "../../../mocks/db"
import useUIStore from "../../../store/useUIStore"
import usePeaksStore from "../../../store/usePeaksStore"

import { DEFAULT_SMALL_APP_MARGIN } from "../../constants"

import PeaksListItemActions from "./PeaksListItemActions"

export interface PeaksListItemProps {
  peak: Peak
  onSelect: (_peak: Peak) => void
}

const PeaksListItem: React.FC<PeaksListItemProps> = ({ peak, onSelect }) => {
  const { setCurrentPanel } = useUIStore()
  const { setSelectedPeakId } = usePeaksStore()

  const openPanel = () => {
    setCurrentPanel("ShowPeak")
    setSelectedPeakId(peak.id)
  }

  return (
    <DataGridRow onClick={openPanel}>
      <DataGridCell className="p-6 text-highest">
        <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} alignment="center">
          {peak.safety && (
            <Badge
              icon
              text={peak.safety.status}
              variant={peak.safety.variant}
              className="cursor-pointer min-w-[70px] text-center"
            />
          )}
        </Stack>
      </DataGridCell>
      <DataGridCell>
        <strong className="cursor-pointer text-blue-600 hover:text-blue-800">{peak.name}</strong>
      </DataGridCell>
      <DataGridCell>{peak.height}</DataGridCell>
      <DataGridCell>{peak.mainrange}</DataGridCell>
      <DataGridCell>{peak.region}</DataGridCell>
      <DataGridCell>{peak.countries}</DataGridCell>
      <DataGridCell className={"pt-5 pb-5"}>
        {/* Pass in additional props (...props) */}
        <Button label="Double Click" onDoubleClick={() => alert("Button!")} />
        <Checkbox label="Double Click" onDoubleClick={() => alert("Double Clicked!")} />
        <CheckboxGroup onChange={() => alert("Checkbox Group!")}>
          <Checkbox label="Option 1" value="val-1" />
          <Checkbox label="Option 2" value="val-2" />
          <Checkbox label="Option 3" value="val-3" />
        </CheckboxGroup>
        <CodeBlock content="Some code goes here" />
        <ComboBox
          onBlur={function Ofe() {}}
          onChange={() => alert("ComboBox!")}
          onFocus={function Ofe() {}}
          onInputChange={function Ofe() {}}
        >
          <ComboBoxOption value="Rhubarb">Rhubarb</ComboBoxOption>
          <ComboBoxOption value="Carrots">Carrots</ComboBoxOption>
          <ComboBoxOption value="Spinach">Spinach</ComboBoxOption>
          <ComboBoxOption value="Tomatoes">Tomatoes</ComboBoxOption>
          <ComboBoxOption value="Cucumbers">Cucumbers</ComboBoxOption>
          <ComboBoxOption value="Cauliflower">Cauliflower</ComboBoxOption>
          <ComboBoxOption value="Eggplant">Eggplant</ComboBoxOption>
          <ComboBoxOption value="Zucchini">Zucchini</ComboBoxOption>
          <ComboBoxOption value="Brussels sprouts">Brussels Sprouts</ComboBoxOption>
          <ComboBoxOption value="Horseradish">Horseradish</ComboBoxOption>
          <ComboBoxOption value="Green beans">Green Beans</ComboBoxOption>
          <ComboBoxOption value="Mushrooms">Mushrooms</ComboBoxOption>
          <ComboBoxOption value="Leek">Leek</ComboBoxOption>
          <ComboBoxOption value="Artichokes">Artichokes</ComboBoxOption>
          <ComboBoxOption value="Peas">Peas</ComboBoxOption>
          <ComboBoxOption value="Potatoes">Potatoes</ComboBoxOption>
        </ComboBox>
        <DateTimePicker
          onBlur={function Ofe() {}}
          onChange={function Ofe() {}} // Reviewers: Issue? Why DateTimePicket event fires on load?
          onClear={function Ofe() {}}
          onClose={function Ofe() {}}
          onFocus={function Ofe() {}}
          onMonthChange={function Ofe() {}}
          onOpen={function Ofe() {}}
          onReady={function Ofe() {}}
          onYearChange={function Ofe() {}}
        />
        <JsonViewer
          data={{
            array: [],
            available: true,
            brand: "Infinix",
            category: "laptops",
            date: new Date("2025-09-05T07:00:06.159Z"),
            description: "Infinix Inbook X1 Ci3 10th 8GB...",
            discountPercentage: 11.83,
            getPrice: function Ofe() {},
            id: 9,
            images: [
              "https://i.dummyjson.com/data/products/9/1.jpg",
              "https://i.dummyjson.com/data/products/9/2.png",
              "https://i.dummyjson.com/data/products/9/3.png",
              "https://i.dummyjson.com/data/products/9/4.jpg",
              "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            ],
            nan: NaN,
            null: null,
            price: 1099,
            rating: 4.54,
            regex: /^(.+)$/,
            stock: 96,
            test: "https://i.dummyjson.com",
            test2: "Loremipsum",
            thumbnail: "https://i.dummyjson.com",
            title: "Infinix INBOOK",
          }}
        />
        <NativeSelect onChange={function Ofe() {}} onClick={() => alert("Native Select!")}>
          <NativeSelectOption label="Option 1" value="o-1" />
          <NativeSelectOption label="Option 2" value="o-2" />
          <NativeSelectOption label="Option 3" value="o-3" />
        </NativeSelect>
        <Radio onChange={function Ofe() {}} onClick={() => alert("Radio!")} value="1" />
        <RadioGroup onChange={() => alert("Radio Group!")}>
          <Radio label="Option 1" value="default-1" />
          <Radio label="Option 2" value="default-2" />
          <Radio label="Option 3" value="default-3" />
        </RadioGroup>
        <SearchInput
          onChange={function Ofe() {}}
          onClear={function Ofe() {}}
          onClick={() => alert("Search Input!")}
          onKeyPress={function Ofe() {}}
          onSearch={function Ofe() {}}
        />
        <SecretText
          onBlur={function Ofe() {}}
          onChange={function Ofe() {}}
          onClear={function Ofe() {}}
          onCopy={function Ofe() {}}
          onFocus={function Ofe() {}}
          onHide={function Ofe() {}}
          onPaste={function Ofe() {}}
          onReveal={function Ofe() {}}
          onToggle={function Ofe() {}}
        />
        {/* Reviewers: Event fires here on click of option */}
        <Select onChange={function Ofe() {}} onValueChange={function Ofe() {}}>
          <SelectOption value="Option 1" />
          <SelectOption value="Option 2" />
          <SelectOption value="Option 3" />
        </Select>
        <Switch id="switch-default" label="Switch" onChange={function Ofe() {}} onClick={() => alert("Switch!")} />
        <Textarea onBlur={function Ofe() {}} onChange={function Ofe() {}} onFocus={function Ofe() {}} />
        <TextInput onBlur={function Ofe() {}} onChange={function Ofe() {}} onFocus={function Ofe() {}} />
        <Tooltip initialOpen>
          <TooltipTrigger>
            <span>click me</span>
          </TooltipTrigger>
          <TooltipContent>A default tooltip</TooltipContent>
        </Tooltip>
        <PopupMenu onClose={function Ofe() {}} onOpen={function Ofe() {}}>
          <PopupMenuOptions>
            {/* Menu item doesn't block event */}
            <button>Menu goes here.</button>
          </PopupMenuOptions>
        </PopupMenu>
        <Icon color="text-theme-success" icon="success" onClick={() => alert("Icon!")} />
        <Pill
          closeable
          onClick={() => alert("Pill Clicked!")}
          onClose={() => alert("Pill Closed!")}
          pillKey="os"
          pillKeyLabel="OS"
          pillValue="mac_os"
          pillValueLabel="Mac OS"
        />
      </DataGridCell>
    </DataGridRow>
  )
}

export default PeaksListItem
