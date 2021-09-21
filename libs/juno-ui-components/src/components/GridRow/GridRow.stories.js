import React from "react"
import { GridRow } from "./index.js"
import { GridColumn } from "../GridColumn/index.js"

import { Default as DefaultGridCol} from "../GridColumn/GridColumn.stories"
import { Col1 as GridCol1} from "../GridColumn/GridColumn.stories"
import { Col2 as GridCol2} from "../GridColumn/GridColumn.stories"
import { Col3 as GridCol3} from "../GridColumn/GridColumn.stories"
import { Col4 as GridCol4} from "../GridColumn/GridColumn.stories"
import { Col5 as GridCol5} from "../GridColumn/GridColumn.stories"
import { Col6 as GridCol6} from "../GridColumn/GridColumn.stories"
import { Col7 as GridCol7} from "../GridColumn/GridColumn.stories"
import { Col8 as GridCol8} from "../GridColumn/GridColumn.stories"
import { Col9 as GridCol9} from "../GridColumn/GridColumn.stories"
import { Col10 as GridCol10} from "../GridColumn/GridColumn.stories"
import { Col11 as GridCol11} from "../GridColumn/GridColumn.stories"
import { Col12 as GridCol12} from "../GridColumn/GridColumn.stories"

export default {
  title: "Design System/Grid/GridRow",
  component: GridRow,
  argTypes: {},
}

const Template = ({columns, ...args}) => (
  <GridRow {...args} className="bg-juno-blue-2">
    {columns.map((column) => 
      <GridColumn {...column} className="bg-juno-blue-3" />
    )}
  </GridRow>
)

export const Default = Template.bind({})
Default.args = {
  columns: [
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
    DefaultGridCol.args,
  ]
}

export const GridRow_3_3_3 = Template.bind({})
GridRow_3_3_3.args = {
  columns: [
    GridCol3.args,
    GridCol3.args,
    GridCol3.args,
    GridCol3.args
  ]  
}

export const GridRow_5_4_3 = Template.bind({})
GridRow_5_4_3.args = {
  columns: [
    GridCol5.args,
    GridCol4.args,
    GridCol3.args
  ]
}

export const GridRow_8_2_2 = Template.bind({})
GridRow_8_2_2.args = {
  columns: [
    GridCol8.args,
    GridCol2.args,
    GridCol2.args
  ]
}

export const GridRow_8_auto_auto = Template.bind({})
GridRow_8_auto_auto.args = {
  columns: [
    GridCol8.args,
    DefaultGridCol.args,
    DefaultGridCol.args
  ]
}