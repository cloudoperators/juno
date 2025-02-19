import React, { useState } from "react"
import PropTypes from "prop-types"
import { Radio, RadioGroup, TextInput } from "@cloudoperators/juno-ui-components"

/** A container component to test positioning and alignment behaviour of components */
const PositionArea = ({
  children = null,
  className = "",
  ...props
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const [height, setHeight] = useState<string>("20rem")
  const [direction, setDirection] = useState<string>("row")
  const [justifyContent, setJustifyContent] = useState<string>("start")
  const [alignItems, setAlignItems] = useState<string>("start")

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value)
  }

  const handleDirectionChange = (dir: string) => {
    setDirection(dir)
  }

  const handleMainAxisChange = (jc: string) => {
    setJustifyContent(jc)
  }

  const handleCrossAxisChange = (ai: string) => {
    setAlignItems(ai)
  }

  return (
    <div className={`positionarea-outer`} {...props}>
      <div className={`positionarea-controls flex justify-around`}>
        <div>
          <TextInput label="Area Height" value={height} onChange={handleHeightChange} />
        </div>
        <div>
          <RadioGroup label="Direction" name="direction" selected={direction} onChange={handleDirectionChange}>
            <Radio label="Row" value="row" />
            <Radio label="Column" value="column" />
          </RadioGroup>
        </div>
        <div>
          <RadioGroup label="Main Axis" name="main-axis" selected={justifyContent} onChange={handleMainAxisChange}>
            <Radio label="Flex-Start" value="start" />
            <Radio label="Flex-End" value="end" />
            <Radio label="Center" value="center" />
            <Radio label="Space-Between" value="between" />
            <Radio label="Space-Around" value="around" />
            <Radio label="Space-Evenly" value="evenly" />
          </RadioGroup>
        </div>
        <div>
          <RadioGroup label="Cross Axis" name="cross-axis" selected={alignItems} onChange={handleCrossAxisChange}>
            <Radio label="Flex-Start" value="start" />
            <Radio label="Flex-End" value="end" />
            <Radio label="Center" value="center" />
            <Radio label="Stretch" value="stretch" />
            <Radio label="Baseline" value="baseline" />
          </RadioGroup>
        </div>
      </div>
      <div
        className={`positionarea-inner flex jn-bg-theme-background-lvl-2 jn-border-theme-background-lvl-3 ${className}`}
        style={{
          height: height,
          flexDirection: direction,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        {children}
      </div>
    </div>
  )
}

PositionArea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default PositionArea
