import React from "react"
import { DataGrid, DataGridRow, DataGridCell, Button, Badge } from "@cloudoperators/juno-ui-components"
import { Peak } from "../../../mocks/db"
import { PeakFields, TooltipExplanation } from "../../constants"
import HelpTooltip from "../../common/HelpTooltip"

interface PeakDetailPanelContentProps {
  peakDetails?: Peak
  // eslint-disable-next-line no-unused-vars
  openDetailPageWithPeak: (peakId: string) => void
}

const PeakDetailPanelContent: React.FC<PeakDetailPanelContentProps> = ({ peakDetails, openDetailPageWithPeak }) => {
  if (!peakDetails) {
    return <div>Data unavailable</div>
  }

  return (
    <div className="flex flex-col h-full">
      <DataGrid columns={2} className="grid grid-cols-[30%_70%] m-5">
        <DataGridRows peakDetails={peakDetails} />
      </DataGrid>
      <div className="text-center mt-auto p-8">
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault()
            openDetailPageWithPeak(peakDetails.id?.toString())
          }}
          className="cursor-pointer"
        >
          Open Detail Page
        </Button>
      </div>
    </div>
  )
}

const DataGridRows: React.FC<{ peakDetails: Peak }> = ({ peakDetails }) => {
  const rows = [
    {
      key: "safety-status",
      field: PeakFields.SAFETY,
      content: (
        <Badge
          icon
          text={peakDetails.safety?.status || "N/A"}
          variant={peakDetails.safety?.variant || "warning"}
          className="w-[70px] text-center"
        />
      ),
      tooltip: TooltipExplanation.SAFETY_STATUS,
    },
    { key: "height", field: PeakFields.HEIGHT, value: peakDetails.height, tooltip: TooltipExplanation.HEIGHT },
    { key: "mainrange", field: PeakFields.RANGE, value: peakDetails.mainrange },
    { key: "region", field: PeakFields.REGION, value: peakDetails.region },
    { key: "countries", field: PeakFields.COUNTRY, value: peakDetails.countries },
    { key: "details", field: "Details", value: peakDetails.details },
    { key: "more-info", field: "More Info", link: peakDetails.url },
  ]

  return (
    <>
      {rows.map(({ key, field, content, value, tooltip, link }) => (
        <DataGridRow key={key} className="py-2.5">
          <DataGridCell>
            <div className="flex items-center">
              <strong className="mr-2">{field}</strong>
              {tooltip && <HelpTooltip tooltipText={tooltip} />}
            </div>
          </DataGridCell>
          <DataGridCell>
            {content ||
              (link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                </a>
              ) : (
                value
              ))}
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}

export { PeakDetailPanelContent, DataGridRows }
