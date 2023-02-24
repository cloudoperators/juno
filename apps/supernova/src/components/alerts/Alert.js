import React from "react"
import { DateTime } from "luxon"
import { Markup } from "interweave"
import {
  Badge,
  Button, 
  DataGridCell, 
  DataGridRow, 
  Icon, 
  Stack,
  Tooltip, 
  TooltipContent, 
  TooltipTrigger } from "juno-ui-components"

const Alert = ({alert}) => {

  const descriptionParsed = (text) => {
    if (!text) return ""
    // urls in descriptions follow the schema: <URL|URL-NAME>
    // Parse description and replace urls with a-tags
    const regexUrl = /<(http[^>|]+)\|([^>]+)>/g
    const urlParsed = text.replace(regexUrl, `<a href="$1">$2</a>`)
  
    // replace text wrapped in *..* by strong tags
    const regexBold = /\*(.*)\*/g
    const boldParsed = urlParsed.replace(regexBold, `<strong>$1</strong>`)
  
    const regexCode = /`(.*)`/g
    return boldParsed.replace(regexCode, `<code class="inline-code">$1</code>`)
  }

  const dateTimeFormat = {...DateTime.DATETIME_FULL, month: 'short' }
  const startTime = DateTime.fromISO(alert.startsAt)
  var daysFiring = DateTime.now().diff(startTime, 'days');

  return (
    <DataGridRow>
      <DataGridCell>
        { alert.labels?.severity === "critical" ? 
          <Icon icon="danger" color="text-theme-danger" />
          :
          <Icon icon={alert.labels?.severity} color={`text-theme-${alert.labels?.severity}`} />
        }
      </DataGridCell>
      <DataGridCell>
        {alert.labels?.region}
        {alert.labels?.region !== alert.labels?.cluster &&
          <>
            <br />
            <span className="text-theme-disabled">{alert.labels?.cluster}</span>
          </>
        }
      </DataGridCell>
      <DataGridCell>
      {alert.labels?.service}
      </DataGridCell>
      <DataGridCell>
        <span className="text-theme-high">{alert.annotations?.summary}</span><br />
        <Markup
          content={descriptionParsed(
            alert.annotations?.description?.replace(
              /`([^`]+)`/g,
              "<code class='inline-code'>$1</code>"
            )
          )}
          tagName="span"
          className="text-sm"
        />
      </DataGridCell>
      <DataGridCell>
        <Stack alignment="end" gap="2" >
          <div>{startTime.toLocaleString(dateTimeFormat)}</div>
          {daysFiring.days > 7 &&
            <Tooltip variant="warning" triggerEvent="hover">
              <TooltipTrigger asChild>
                <Icon icon="warning" color="text-theme-warning" />
              </TooltipTrigger>
              <TooltipContent>
                {`Alert has been firing for ${Math.round(daysFiring.days)} days`}
              </TooltipContent>
            </Tooltip>
          }
        </Stack>
      </DataGridCell>
      <DataGridCell>
        {alert.status?.state}
      </DataGridCell>
      <DataGridCell>
        <Button size="small">Silence</Button>
      </DataGridCell>
    </DataGridRow>
  )
}

export default Alert