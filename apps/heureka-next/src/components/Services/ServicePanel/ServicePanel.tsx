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
} from "@cloudoperators/juno-ui-components"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"
import { NotFoundHint } from "../../common/NotFoundHint"
import { LoadingHint } from "../../common/LoadingHint"
import { capitalizeFirstLetter } from "../../common/Helpers"
import { useFetchServiceImageVersions } from "../useFetchServiceImageVersions"

export type ServiceOverViewPanelType = {
  imageName: string
  imageVersion: string
  issues: {
    critical: number
    high: number
    medium: number
    low: number
  }
  keppelLink: string
  serviceName?: string
}

export type ServicePanelProps = {
  services: ServiceOverViewPanelType[]
  isLoading?: boolean
}

// Mock data for development and testing
/* export const mockServices: ServiceOverViewPanelType[] = [
  {
    imageName: "Authentication Service",
    imageVersion: "1.2.0",
    issues: {
      critical: 2,
      high: 3,
      medium: 5,
      low: 8,
    },
    keppelLink: "https://auth-service.example.com",
    serviceName: "1234567890",
  },
  {
    imageName: "Payment Gateway",
    imageVersion: "2.0.1",
    issues: {
      critical: 0,
      high: 2,
      medium: 4,
      low: 3,
    },
    keppelLink: "https://payment.example.com",
    serviceName: "1234567890",
  },
  {
    imageName: "User Management",
    imageVersion: "1.5.3",
    issues: {
      critical: 1,
      high: 1,
      medium: 3,
      low: 6,
    },
    keppelLink: "https://users.example.com",
    serviceName: "1234567890",
  },
  {
    imageName: "Notification Service",
    imageVersion: "1.0.0",
    issues: {
      critical: 0,
      high: 0,
      medium: 2,
      low: 4,
    },
    keppelLink: "https://notifications.example.com",
    serviceName: "1234567890",
  },
] */

export const ServicePanel = ({ services = [], isLoading = false }: ServicePanelProps) => {
  const { loading, imageVersions, error } = useFetchServiceImageVersions({ 
    serviceCcrn: services[0]?.serviceName || '',
    pageSize: 10 
  })

  function onPanelClose(): void {
    console.log("Panel closed")
  }
  console.log(imageVersions)

  const safeServices = imageVersions.map(version => ({
    imageName: version.ccrn,
    imageVersion: version.version,
    issues: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    },
    keppelLink: "",
    serviceName: services[0]?.serviceName
  }))

  return (
    <MessagesProvider>
      <Panel
        heading={
          <Stack gap="2">
            <span>{capitalizeFirstLetter(services[0]?.serviceName || '')} service overview</span>
          </Stack>
        }
        opened={true}
        onClose={() => onPanelClose()}
        size="large"
      >
        <PanelBody>
          <Container py>
            <Messages />
          </Container>
          <ContentHeading heading={`${capitalizeFirstLetter(services[0]?.serviceName || '')} Image Versions`} className="mb-2" />
          <DataGrid columns={6}>
            <DataGridRow>
              <DataGridHeadCell>Component Name</DataGridHeadCell>
              <DataGridHeadCell>Version</DataGridHeadCell>
              <DataGridHeadCell>Critical Issues</DataGridHeadCell>
              <DataGridHeadCell>High Issues</DataGridHeadCell>
              <DataGridHeadCell>Medium Issues</DataGridHeadCell>
              <DataGridHeadCell>Low Issues</DataGridHeadCell>
            </DataGridRow>
            {loading ? (
              <DataGridRow>
                <DataGridCell colSpan={6}>
                  <LoadingHint />
                </DataGridCell>
              </DataGridRow>
            ) : safeServices.length === 0 ? (
              <DataGridRow>
                <DataGridCell colSpan={6}>
                  <NotFoundHint text="No services available." />
                </DataGridCell>
              </DataGridRow>
            ) : (
              safeServices.map((service, index) => (
                <DataGridRow key={index}>
                  <DataGridCell>{service.imageName}</DataGridCell>
                  <DataGridCell>{service.imageVersion}</DataGridCell>
                  <DataGridCell>{service.issues.critical}</DataGridCell>
                  <DataGridCell>{service.issues.high}</DataGridCell>
                  <DataGridCell>{service.issues.medium}</DataGridCell>
                  <DataGridCell>{service.issues.low}</DataGridCell>
                </DataGridRow>
              ))
            )}
          </DataGrid>
        </PanelBody>
      </Panel>
    </MessagesProvider>
  )
}
