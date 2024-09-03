/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, LegacyRef } from "react"

/* Import Icons here. The icon svgs in the icons folder correspond to the respective "xyz_24px.svg" from material-ui icons.
 */
import AccessTime from "@material-design-icons/svg/filled/access_time.svg"
import AccountCircle from "@material-design-icons/svg/filled/account_circle.svg"
import AddCircle from "@material-design-icons/svg/filled/add_circle.svg"
import AutoAwesomeMosaic from "@material-design-icons/svg/filled/auto_awesome_mosaic.svg"
import AutoAwesomeMotion from "@material-design-icons/svg/filled/auto_awesome_motion.svg"
import Bolt from "@material-design-icons/svg/filled/bolt.svg"
import CalendarToday from "@material-design-icons/svg/filled/calendar_today.svg"
import Cancel from "@material-design-icons/svg/filled/cancel.svg"
import Check from "@material-design-icons/svg/filled/check.svg"
import CheckCircle from "@material-design-icons/svg/filled/check_circle.svg"
import ChevronLeft from "@material-design-icons/svg/outlined/chevron_left.svg"
import ChevronRight from "@material-design-icons/svg/outlined/chevron_right.svg"
import Close from "@material-design-icons/svg/filled/close.svg"
import ContentCopy from "@material-design-icons/svg/outlined/content_copy.svg"
import Danger from "./../Icon/icons/juno-danger.svg"
import Dangerous from "@material-design-icons/svg/filled/dangerous.svg"
import Download from "@material-design-icons/svg/filled/download.svg"
import DeleteForever from "@material-design-icons/svg/filled/delete_forever.svg"
import Description from "@material-design-icons/svg/filled/description.svg"
import DNS from "@material-design-icons/svg/filled/dns.svg"
import Edit from "@material-design-icons/svg/filled/edit.svg"
import Error from "@material-design-icons/svg/filled/dangerous.svg"
import ErrorOutline from "@material-design-icons/svg/outlined/error_outline.svg"
import ExitToApp from "@material-design-icons/svg/outlined/exit_to_app.svg"
import ExpandLess from "@material-design-icons/svg/outlined/expand_less.svg"
import ExpandMore from "@material-design-icons/svg/outlined/expand_more.svg"
import FilterAlt from "@material-design-icons/svg/filled/filter_alt.svg"
import Forum from "@material-design-icons/svg/filled/forum.svg"
import Help from "@material-design-icons/svg/filled/help.svg"
import Home from "./../Icon/icons/home_sharp.svg"
import Info from "@material-design-icons/svg/filled/info.svg"
import Comment from "@material-design-icons/svg/filled/comment.svg"
import ManageAccounts from "@material-design-icons/svg/filled/manage_accounts.svg"
import MonitorHeart from "@material-design-icons/svg/outlined/monitor_heart.svg"
import MoreVert from "@material-design-icons/svg/outlined/more_vert.svg"
import NightsStay from "@material-design-icons/svg/outlined/nights_stay.svg"
import NotificationsOff from "@material-design-icons/svg/outlined/notifications_off.svg"
import OpenInBrowser from "@material-design-icons/svg/outlined/open_in_browser.svg"
import OpenInNew from "@material-design-icons/svg/outlined/open_in_new.svg"
import Place from "./../Icon/icons/place.svg"
import Success from "@material-design-icons/svg/filled/check_box.svg"
import Search from "@material-design-icons/svg/outlined/search.svg"
import SeverityLow from "./../Icon/icons/juno_severity_low.svg"
import SeverityMedium from "./../Icon/icons/juno_severity_medium.svg"
import SeverityHigh from "./../Icon/icons/juno_severity_high.svg"
import SeverityCritical from "./../Icon/icons/juno_severity_critical.svg"
import Warning from "@material-design-icons/svg/filled/warning.svg"
import WBSunny from "@material-design-icons/svg/outlined/wb_sunny.svg"
import Widgets from "@material-design-icons/svg/filled/widgets.svg"

/**
Generic Icon component.
*/
// hover style needs to be revisited. only works if no icon color was passed
const anchorIconStyles = `
	jn-text-current
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`

// hover style needs to be revisited. only works if no icon color was passed
const buttonIconStyles = `
  hover:jn-text-theme-high
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`

// const wrapperStyles = `
//   jn-leading-none
// `
// export all known icons as an array of their names to be used with PropTypes here and from other components:
export type KnownIcons =
  | "accessTime"
  | "accountCircle"
  | "addCircle"
  | "autoAwesomeMosaic"
  | "autoAwesomeMotion"
  | "bolt"
  | "calendarToday"
  | "cancel"
  | "check"
  | "checkCircle"
  | "chevronLeft"
  | "chevronRight"
  | "close"
  | "comment"
  | "contentCopy"
  | "danger"
  | "dangerous"
  | "default"
  | "deleteForever"
  | "description"
  | "dns"
  | "download"
  | "edit"
  | "error"
  | "errorOutline"
  | "exitToApp"
  | "expandLess"
  | "expandMore"
  | "filterAlt"
  | "forum"
  | "help"
  | "home"
  | "info"
  | "manageAccounts"
  | "monitorHeart"
  | "moreVert"
  | "nightsStay"
  | "notificationsOff"
  | "openInBrowser"
  | "openInNew"
  | "place"
  | "search"
  | "severityLow"
  | "severityMedium"
  | "severityHigh"
  | "severityCritical"
  | "success"
  | "warning"
  | "wbSunny"
  | "widgets"

interface IconColorProps {
  icon?: KnownIcons
  color: string
  title: string
  size: string | number
  iconClassName: string
}

const getColoredSizedIcon = ({ icon, color, size, title, iconClassName, ...iconProps }: IconColorProps) => {
  const iconClass = `juno-icon juno-icon-${icon} jn-fill-current ${color} ${iconClassName}`

  switch (icon) {
    case "accessTime":
      return (
        <AccessTime
          width={size}
          height={size}
          className={iconClass}
          alt="time"
          title={title ? title : "Time"}
          role="img"
          {...iconProps}
        />
      )
    case "accountCircle":
      return (
        <AccountCircle
          width={size}
          height={size}
          className={iconClass}
          alt="account"
          title={title ? title : "Account"}
          role="img"
          {...iconProps}
        />
      )
    case "addCircle":
      return (
        <AddCircle
          width={size}
          height={size}
          className={iconClass}
          alt="add"
          title={title ? title : "Add"}
          role="img"
          {...iconProps}
        />
      )
    case "autoAwesomeMosaic":
      return (
        <AutoAwesomeMosaic
          width={size}
          height={size}
          className={iconClass}
          alt="mosaic"
          title={title ? title : "Mosaic"}
          role="img"
          {...iconProps}
        />
      )
    case "autoAwesomeMotion":
      return (
        <AutoAwesomeMotion
          width={size}
          height={size}
          className={iconClass}
          alt="items stacked behind each other"
          title={title ? title : "Items stacked behind each other"}
          role="img"
          {...iconProps}
        />
      )
    case "bolt":
      return (
        <Bolt
          width={size}
          height={size}
          className={iconClass}
          alt="bolt"
          title={title ? title : "Bolt"}
          role="img"
          {...iconProps}
        />
      )
    case "calendarToday":
      return (
        <CalendarToday
          width={size}
          height={size}
          className={iconClass}
          alt="calendar"
          title={title ? title : "Calendar"}
          role="img"
          {...iconProps}
        />
      )
    case "cancel":
      return (
        <Cancel
          width={size}
          height={size}
          className={iconClass}
          alt="cancel"
          title={title ? title : "Cancel"}
          role="img"
          {...iconProps}
        />
      )
    case "check":
      return (
        <Check
          width={size}
          height={size}
          className={iconClass}
          alt="check"
          title={title ? title : "Check"}
          role="img"
          {...iconProps}
        />
      )
    case "checkCircle":
      return (
        <CheckCircle
          width={size}
          height={size}
          className={iconClass}
          alt="checkCircle"
          title={title ? title : "CheckCircle"}
          role="img"
          {...iconProps}
        />
      )
    case "chevronLeft":
      return (
        <ChevronLeft
          width={size}
          height={size}
          className={iconClass}
          alt="chevronLeft"
          title={title ? title : "ChevronLeft"}
          role="img"
          {...iconProps}
        />
      )
    case "chevronRight":
      return (
        <ChevronRight
          width={size}
          height={size}
          className={iconClass}
          alt="chevronRight"
          title={title ? title : "ChevronRight"}
          role="img"
          {...iconProps}
        />
      )
    case "close":
      return (
        <Close
          width={size}
          height={size}
          className={iconClass}
          alt="close"
          title={title ? title : "Close"}
          role="img"
          {...iconProps}
        />
      )
    case "comment":
      return (
        <Comment
          width={size}
          height={size}
          className={iconClass}
          alt="comment"
          title={title ? title : "Comment"}
          role="img"
          {...iconProps}
        />
      )
    case "contentCopy":
      return (
        <ContentCopy
          width={size}
          height={size}
          className={iconClass}
          alt="copy"
          title={title ? title : "Copy"}
          role="img"
          {...iconProps}
        />
      )
    case "danger":
      return (
        <Danger
          width={size}
          height={size}
          className={iconClass}
          alt="danger"
          title={title ? title : "Danger"}
          role="img"
          {...iconProps}
        />
      )
    case "dangerous":
      return (
        <Dangerous
          width={size}
          height={size}
          className={iconClass}
          alt="dangerous"
          title={title ? title : "Dangerous"}
          role="img"
          {...iconProps}
        />
      )
    case "deleteForever":
      return (
        <DeleteForever
          width={size}
          height={size}
          className={iconClass}
          alt="delete forever"
          title={title ? title : "Delete Forever"}
          role="img"
          {...iconProps}
        />
      )
    case "description":
      return (
        <Description
          width={size}
          height={size}
          className={iconClass}
          alt="description"
          title={title ? title : "Description"}
          role="img"
          {...iconProps}
        />
      )
    case "dns":
      return (
        <DNS
          width={size}
          height={size}
          className={iconClass}
          alt="service"
          title={title ? title : "Service"}
          role="img"
          {...iconProps}
        />
      )
    case "download":
      return (
        <Download
          width={size}
          height={size}
          className={iconClass}
          alt="download"
          title={title ? title : "download"}
          role="img"
          {...iconProps}
        />
      )
    case "edit":
      return (
        <Edit
          width={size}
          height={size}
          className={iconClass}
          alt="edit"
          title={title ? title : "Edit"}
          role="img"
          {...iconProps}
        />
      )
    case "error":
      return (
        <Error
          width={size}
          height={size}
          className={iconClass}
          alt="error"
          title={title ? title : "Error"}
          role="img"
          {...iconProps}
        />
      )
    case "errorOutline":
      return (
        <ErrorOutline
          width={size}
          height={size}
          className={iconClass}
          alt="error outline"
          title={title ? title : "Error"}
          role="img"
          {...iconProps}
        />
      )
    case "exitToApp":
      return (
        <ExitToApp
          width={size}
          height={size}
          className={iconClass}
          alt="exit to other app"
          title={title ? title : "Exit to app"}
          role="img"
          {...iconProps}
        />
      )
    case "expandLess":
      return (
        <ExpandLess
          width={size}
          height={size}
          className={iconClass}
          alt="expand less"
          title={title ? title : "Expand Less"}
          role="img"
          {...iconProps}
        />
      )
    case "expandMore":
      return (
        <ExpandMore
          width={size}
          height={size}
          className={iconClass}
          alt="expand more"
          title={title ? title : "Expand More"}
          role="img"
          {...iconProps}
        />
      )
    case "filterAlt":
      return (
        <FilterAlt
          width={size}
          height={size}
          className={iconClass}
          alt="filter"
          title={title ? title : "Filter"}
          role="img"
          {...iconProps}
        />
      )
    case "forum":
      return (
        <Forum
          width={size}
          height={size}
          className={iconClass}
          alt="forum"
          title={title ? title : "Forum"}
          role="img"
          {...iconProps}
        />
      )
    case "help":
      return (
        <Help
          width={size}
          height={size}
          className={iconClass}
          alt="help"
          title={title ? title : "Help"}
          role="img"
          {...iconProps}
        />
      )
    case "home":
      return (
        <Home
          width={size}
          height={size}
          className={iconClass}
          alt="home"
          title={title ? title : "Home"}
          role="img"
          {...iconProps}
        />
      )
    case "info":
      return (
        <Info
          width={size}
          height={size}
          className={iconClass}
          alt="info"
          title={title ? title : "Info"}
          role="img"
          {...iconProps}
        />
      )
    case "manageAccounts":
      return (
        <ManageAccounts
          width={size}
          height={size}
          className={iconClass}
          alt="user account configuration"
          title={title ? title : "User account configuration"}
          role="img"
          {...iconProps}
        />
      )
    case "monitorHeart":
      return (
        <MonitorHeart
          width={size}
          height={size}
          className={iconClass}
          alt="heart monitor"
          title={title ? title : "Heart monitor"}
          role="img"
          {...iconProps}
        />
      )
    case "moreVert":
      return (
        <MoreVert
          width={size}
          height={size}
          className={iconClass}
          alt="more"
          title={title ? title : "More"}
          role="img"
          {...iconProps}
        />
      )
    case "nightsStay":
      return (
        <NightsStay
          width={size}
          height={size}
          className={iconClass}
          alt="nights stay"
          title={title ? title : "Nights stay"}
          role="img"
          {...iconProps}
        />
      )
    case "notificationsOff":
      return (
        <NotificationsOff
          width={size}
          height={size}
          className={iconClass}
          alt="notifications off"
          title={title ? title : "Notifications off"}
          role="img"
          {...iconProps}
        />
      )
    case "openInBrowser":
      return (
        <OpenInBrowser
          width={size}
          height={size}
          className={iconClass}
          alt="open in browser"
          title={title ? title : "Open in browser"}
          role="img"
          {...iconProps}
        />
      )
    case "openInNew":
      return (
        <OpenInNew
          width={size}
          height={size}
          className={iconClass}
          alt="open in new tab"
          title={title ? title : "Open in new tab"}
          role="img"
          {...iconProps}
        />
      )
    case "place":
      return (
        <Place
          width={size}
          height={size}
          className={iconClass}
          alt="location"
          title={title ? title : "Location"}
          role="img"
          {...iconProps}
        />
      )
    case "search":
      return (
        <Search
          width={size}
          height={size}
          className={iconClass}
          alt="search"
          title={title ? title : "Search"}
          role="img"
          {...iconProps}
        />
      )
    case "severityLow":
      return (
        <SeverityLow
          width={size}
          height={size}
          className={iconClass}
          alt="Severity low"
          title={title ? title : "Severity Low"}
          role="img"
          {...iconProps}
        />
      )
    case "severityMedium":
      return (
        <SeverityMedium
          width={size}
          height={size}
          className={iconClass}
          alt="Severity medium"
          title={title ? title : "Severity Medium"}
          role="img"
          {...iconProps}
        />
      )
    case "severityHigh":
      return (
        <SeverityHigh
          width={size}
          height={size}
          className={iconClass}
          alt="Severity high"
          title={title ? title : "Severity High"}
          role="img"
          {...iconProps}
        />
      )
    case "severityCritical":
      return (
        <SeverityCritical
          width={size}
          height={size}
          className={iconClass}
          alt="Severity critical"
          title={title ? title : "Severity Critical"}
          role="img"
          {...iconProps}
        />
      )
    case "success":
      return (
        <Success
          width={size}
          height={size}
          className={iconClass}
          alt="success"
          title={title ? title : "Success"}
          role="img"
          {...iconProps}
        />
      )
    case "widgets":
      return (
        <Widgets
          width={size}
          height={size}
          className={iconClass}
          alt="widgets"
          title={title ? title : "Widgets"}
          role="img"
          {...iconProps}
        />
      )
    case "warning":
      return (
        <Warning
          width={size}
          height={size}
          className={iconClass}
          alt="warning"
          title={title ? title : "Warning"}
          role="img"
          {...iconProps}
        />
      )
    case "wbSunny":
      return (
        <WBSunny
          width={size}
          height={size}
          className={iconClass}
          alt="wb sunny"
          title={title ? title : "WBSunny"}
          role="img"
          {...iconProps}
        />
      )
    case "default": // keep explicit default case to allow consuming components to use 'default'  w/o throwing warnings
      return (
        <Help
          width={size}
          height={size}
          className={iconClass}
          alt="help"
          title={title ? title : "Help"}
          role="img"
          {...iconProps}
        />
      )
    default:
      return (
        <Help
          width={size}
          height={size}
          className={iconClass}
          alt="help"
          title={title ? title : "Help"}
          role="img"
          {...iconProps}
        />
      )
  }
}

export const Icon = forwardRef<HTMLAnchorElement | HTMLButtonElement, IconProps>(
  (
    { icon = null, color = "", size = 24, title = "", className = "", href = "", disabled = false, onClick, ...props },
    ref
  ) => {
    // if href or onClick was passed, then we want to add the passed classes and passed arbitrary props to the button or anchor
    // otherwise add the passed classes/props to the icon itself
    const iconClassName = href || onClick ? "" : className
    const iconProps = href || onClick ? {} : props

    const icn = getColoredSizedIcon({
      icon: icon || undefined,
      color,
      size,
      title,
      iconClassName,
      ...iconProps,
    })

    const handleClick = (event: React.MouseEvent<EventTarget>) => {
      onClick && onClick(event)
    }

    const button = (
      <button
        {...(props as React.HTMLProps<HTMLButtonElement>)}
        type="button"
        onClick={handleClick}
        className={`juno-icon-button ${buttonIconStyles} ${className}`}
        aria-label={title || icon || undefined}
        disabled={disabled}
        ref={ref as LegacyRef<HTMLButtonElement>}
      >
        {icn}
      </button>
    )

    const anchor = (
      <a
        {...(props as React.HTMLProps<HTMLAnchorElement>)}
        aria-label={title || icon || undefined}
        href={href}
        className={`juno-icon-link ${anchorIconStyles} ${className}`}
        ref={ref as LegacyRef<HTMLAnchorElement>}
      >
        {icn}
      </a>
    )

    /* render an <a> if href was passed, otherwise render button if onClick was passes, otherwise render plain icon: */
    /* if plain icon, add ref to the icon. In the other cases the ref goes on the anchor or button */
    return href ? anchor : onClick ? button : <span ref={ref}>{icn}</span>
  }
)

Icon.displayName = "IconTs"

type EventHandler = (_event: React.MouseEvent<EventTarget>) => void

export type IconProps = {
  icon?: KnownIcons
  color?: string
  size?: string | number
  title?: string
  className?: string
  href?: string
  disabled?: boolean
  onClick?: EventHandler
} & Omit<React.HTMLProps<HTMLAnchorElement> | React.HTMLProps<HTMLButtonElement>, "size">
