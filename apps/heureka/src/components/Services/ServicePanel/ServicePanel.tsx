import React from "react"
import {
  Panel,
  Stack,
  PanelBody,
  Container,
  ContentHeading,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
  Pagination,
  Badge,
  Icon,
} from "@cloudoperators/juno-ui-components"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { NotFoundHint } from "../../common/Helpers/NotFoundHint"
import { LoadingHint } from "../../common/Helpers/LoadingHint"
import { useFetchServiceImageVersions } from "../useFetchServiceImageVersions"
import { capitalizeFirstLetter, truncateVersion } from "../../common/Helpers/helpers"

export type IssueCounts = {
  critical: number
  high: number
  medium: number
  low: number
  none: number
}

export type ServiceOverViewPanelType = {
  imageName: string
  imageVersion: string
  issueCounts: IssueCounts
  keppelLink: string
  serviceName?: string
}

type ServicePanelProps = {
  services: ServiceOverViewPanelType[]
  isLoading?: boolean
  onClose: () => void
}

export const ServicePanel = ({ services = [], isLoading = false, onClose }: ServicePanelProps) => {
  const selectedService = services[0]
  const { loading, imageVersions, error, totalNumberOfPages, currentPage, goToPage, totalCount } =
    useFetchServiceImageVersions({
      serviceCcrn: selectedService?.serviceName || "",
      pageSize: 8,
    })

  // Show total count except when loading and it's the first load for a service
  const showTotalCount = !loading || imageVersions.length > 0

  const safeServices = imageVersions.map((version) => ({
    imageName: version.ccrn,
    imageVersion: version.version,
    issueCounts: version.issueCounts,
    keppelLink: "",
    serviceName: selectedService?.serviceName,
  }))

  // Don't render anything if no service is selected
  if (!selectedService?.serviceName) {
    return null
  }

  return (
    <MessagesProvider>
      <Panel
        heading={
          <Stack gap="2">
            <span>{capitalizeFirstLetter(selectedService.serviceName)} Service Overview</span>
          </Stack>
        }
        opened={true}
        onClose={onClose}
        size="large"
      >
        <PanelBody>
          <Container py>
            <Messages />
          </Container>
          <Stack gap="2" distribution="between" alignment="center" className="mb-2">
            <ContentHeading
              heading={`${capitalizeFirstLetter(selectedService.serviceName)} Image Versions${showTotalCount ? ` (${totalCount})` : ""}`}
            />
            <Button
              variant="primary"
              size="small"
              onClick={() => {
                // TODO: Navigate to service details page
                onClose()
              }}
            >
              Full Details
            </Button>
          </Stack>
          <DataGrid columns={7}>
            <DataGridRow>
              <DataGridHeadCell>Image Name</DataGridHeadCell>
              <DataGridHeadCell>Version</DataGridHeadCell>
              <DataGridHeadCell>Critical</DataGridHeadCell>
              <DataGridHeadCell>High</DataGridHeadCell>
              <DataGridHeadCell>Medium</DataGridHeadCell>
              <DataGridHeadCell>Low</DataGridHeadCell>
              <DataGridHeadCell>Actions</DataGridHeadCell>
            </DataGridRow>
            {loading ? (
              <DataGridRow>
                <DataGridCell colSpan={7}>
                  <LoadingHint />
                </DataGridCell>
              </DataGridRow>
            ) : safeServices.length === 0 ? (
              <DataGridRow>
                <DataGridCell colSpan={6}>
                  <NotFoundHint text="No image versions available." />
                </DataGridCell>
              </DataGridRow>
            ) : (
              safeServices.map((service, index) => (
                <DataGridRow key={index}>
                  <DataGridCell className="break-all overflow-hidden">
                    <Stack gap="1" direction="vertical">
                      <span>{service.imageName}</span>
                      <Stack gap="1" alignment="center">
                        <a
                          href={`${service.imageName}/-/manifest/${service.imageVersion}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-sm"
                        >
                          <Stack gap="1.5" alignment="center">
                            <Icon icon="openInNew" size="16" color="jn-global-text" onClick={() => {}} />
                            <span>Image repository</span>
                          </Stack>
                        </a>
                      </Stack>
                    </Stack>
                  </DataGridCell>
                  <DataGridCell>
                    <Tooltip triggerEvent="hover" placement="bottom">
                      <TooltipTrigger>{truncateVersion(service.imageVersion)}</TooltipTrigger>
                      <TooltipContent>{service.imageVersion}</TooltipContent>
                    </Tooltip>
                  </DataGridCell>
                  <DataGridCell>
                    {service.issueCounts.critical ? (
                      <Badge icon text={service.issueCounts.critical.toString()} variant="danger" />
                    ) : (
                      "-"
                    )}
                  </DataGridCell>
                  <DataGridCell>
                    {service.issueCounts.high ? (
                      <Badge icon text={service.issueCounts.high.toString()} variant="warning" />
                    ) : (
                      "-"
                    )}
                  </DataGridCell>
                  <DataGridCell>{service.issueCounts.medium || "-"}</DataGridCell>
                  <DataGridCell>{service.issueCounts.low || "-"}</DataGridCell>
                  <DataGridCell>
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => {
                        // TODO: Navigate to service details page
                        onClose()
                      }}
                    >
                      Show Details
                    </Button>
                  </DataGridCell>
                </DataGridRow>
              ))
            )}
          </DataGrid>
        </PanelBody>
        {totalNumberOfPages > 1 && (
          <div className="flex justify-end px-4 py-2">
            <Pagination
              variant="number"
              currentPage={currentPage}
              onPressNext={goToPage}
              onPressPrevious={goToPage}
              pages={totalNumberOfPages}
            />
          </div>
        )}
      </Panel>
    </MessagesProvider>
  )
}
