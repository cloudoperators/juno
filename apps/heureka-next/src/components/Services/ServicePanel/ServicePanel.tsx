import React from "react";
// import { Card, CardContent, Typography, Link } from "@cloudoperators/juno-ui-components";

export type ServiceOverViewPanelType = {
  componentName: string
  issues: {
    critical: number
    high: number
    medium: number
    low: number
  };
  externalLink: string
}

type ServicePanelProps = {
  service: ServiceOverViewPanelType;
}

export const ServicePanel = ({ service }: ServicePanelProps) => {
  return (
    <div></div>
    // <Card>
    //   <CardContent>
    //     <Typography variant="h5">{service.componentName}</Typography>
    //     <Typography variant="body1">Critical Issues: {service.issues.critical}</Typography>
    //     <Typography variant="body1">High Issues: {service.issues.high}</Typography>
    //     <Typography variant="body1">Medium Issues: {service.issues.medium}</Typography>
    //     <Typography variant="body1">Low Issues: {service.issues.low}</Typography>
    //     <Link href={service.externalLink} target="_blank">
    //       External Source
    //     </Link>
    //   </CardContent>
    // </Card>
  )
}
