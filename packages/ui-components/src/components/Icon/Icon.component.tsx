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
import Danger from "./icons/juno-danger.svg"
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
import Home from "./icons/home_sharp.svg"
import Info from "@material-design-icons/svg/filled/info.svg"
import Comment from "@material-design-icons/svg/filled/comment.svg"
import ManageAccounts from "@material-design-icons/svg/filled/manage_accounts.svg"
import MonitorHeart from "@material-design-icons/svg/outlined/monitor_heart.svg"
import MoreVert from "@material-design-icons/svg/outlined/more_vert.svg"
import NightsStay from "@material-design-icons/svg/outlined/nights_stay.svg"
import NotificationsOff from "@material-design-icons/svg/outlined/notifications_off.svg"
import OpenInBrowser from "@material-design-icons/svg/outlined/open_in_browser.svg"
import OpenInNew from "@material-design-icons/svg/outlined/open_in_new.svg"
import Place from "./icons/place.svg"
import Success from "@material-design-icons/svg/filled/check_box.svg"
import Search from "@material-design-icons/svg/outlined/search.svg"
import SeverityLow from "./icons/juno_severity_low.svg"
import SeverityMedium from "./icons/juno_severity_medium.svg"
import SeverityHigh from "./icons/juno_severity_high.svg"
import SeverityVeryHigh from "./icons/juno_severity_very_high.svg"
import SeverityCritical from "./icons/juno_severity_critical.svg"
import SeverityUnknown from "./icons/juno_severity_unknown.svg"
import SortShortWideArrowUp from "./icons/sort_short-wide_arrow-up.svg"
import SortShortWideArrowDown from "./icons/sort_short-wide_arrow-down.svg"
import SortWideShortArrowUp from "./icons/sort_wide-short_arrow-up.svg"
import SortWideShortArrowDown from "./icons/sort_wide-short_arrow-down.svg"
import Upload from "@material-design-icons/svg/filled/upload.svg"
import Warning from "@material-design-icons/svg/filled/warning.svg"
import WBSunny from "@material-design-icons/svg/outlined/wb_sunny.svg"
import Widgets from "@material-design-icons/svg/filled/widgets.svg"

/**
Generic Icon component.
*/
// hover style needs to be revisited. only works if no icon color was passed
const anchorIconStyles = `
	jn:text-current
  jn:hover:text-theme-high
  jn:focus:outline-hidden 
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
	jn:disabled:opacity-50
	jn:disabled:cursor-not-allowed
`

// hover style needs to be revisited. only works if no icon color was passed
const buttonIconStyles = `
  jn:hover:text-theme-high
  jn:focus:outline-hidden 
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
	jn:disabled:opacity-50
	jn:disabled:cursor-not-allowed
`

// const wrapperStyles = `
//   jn:leading-none
// `
// export all known icons as an array of their names to be used with PropTypes here and from other components:
export enum KnownIconsEnum {
  // eslint-disable-next-line no-unused-vars
  accessTime = "accessTime",
  // eslint-disable-next-line no-unused-vars
  accountCircle = "accountCircle",
  // eslint-disable-next-line no-unused-vars
  addCircle = "addCircle",
  // eslint-disable-next-line no-unused-vars
  autoAwesomeMosaic = "autoAwesomeMosaic",
  // eslint-disable-next-line no-unused-vars
  autoAwesomeMotion = "autoAwesomeMotion",
  // eslint-disable-next-line no-unused-vars
  bolt = "bolt",
  // eslint-disable-next-line no-unused-vars
  calendarToday = "calendarToday",
  // eslint-disable-next-line no-unused-vars
  cancel = "cancel",
  // eslint-disable-next-line no-unused-vars
  check = "check",
  // eslint-disable-next-line no-unused-vars
  checkCircle = "checkCircle",
  // eslint-disable-next-line no-unused-vars
  chevronLeft = "chevronLeft",
  // eslint-disable-next-line no-unused-vars
  chevronRight = "chevronRight",
  // eslint-disable-next-line no-unused-vars
  close = "close",
  // eslint-disable-next-line no-unused-vars
  comment = "comment",
  // eslint-disable-next-line no-unused-vars
  contentCopy = "contentCopy",
  // eslint-disable-next-line no-unused-vars
  danger = "danger",
  // eslint-disable-next-line no-unused-vars
  dangerous = "dangerous",
  // eslint-disable-next-line no-unused-vars
  default = "default",
  // eslint-disable-next-line no-unused-vars
  deleteForever = "deleteForever",
  // eslint-disable-next-line no-unused-vars
  description = "description",
  // eslint-disable-next-line no-unused-vars
  dns = "dns",
  // eslint-disable-next-line no-unused-vars
  download = "download",
  // eslint-disable-next-line no-unused-vars
  edit = "edit",
  // eslint-disable-next-line no-unused-vars
  error = "error",
  // eslint-disable-next-line no-unused-vars
  errorOutline = "errorOutline",
  // eslint-disable-next-line no-unused-vars
  exitToApp = "exitToApp",
  // eslint-disable-next-line no-unused-vars
  expandLess = "expandLess",
  // eslint-disable-next-line no-unused-vars
  expandMore = "expandMore",
  // eslint-disable-next-line no-unused-vars
  filterAlt = "filterAlt",
  // eslint-disable-next-line no-unused-vars
  forum = "forum",
  // eslint-disable-next-line no-unused-vars
  help = "help",
  // eslint-disable-next-line no-unused-vars
  home = "home",
  // eslint-disable-next-line no-unused-vars
  info = "info",
  // eslint-disable-next-line no-unused-vars
  manageAccounts = "manageAccounts",
  // eslint-disable-next-line no-unused-vars
  monitorHeart = "monitorHeart",
  // eslint-disable-next-line no-unused-vars
  moreVert = "moreVert",
  // eslint-disable-next-line no-unused-vars
  nightsStay = "nightsStay",
  // eslint-disable-next-line no-unused-vars
  notificationsOff = "notificationsOff",
  // eslint-disable-next-line no-unused-vars
  openInBrowser = "openInBrowser",
  // eslint-disable-next-line no-unused-vars
  openInNew = "openInNew",
  // eslint-disable-next-line no-unused-vars
  place = "place",
  // eslint-disable-next-line no-unused-vars
  search = "search",
  // eslint-disable-next-line no-unused-vars
  severityLow = "severityLow",
  // eslint-disable-next-line no-unused-vars
  severityMedium = "severityMedium",
  // eslint-disable-next-line no-unused-vars
  severityHigh = "severityHigh",
  // eslint-disable-next-line no-unused-vars
  severityVeryHigh = "severityVeryHigh",
  // eslint-disable-next-line no-unused-vars
  severityCritical = "severityCritical",
  // eslint-disable-next-line no-unused-vars
  severityUnknown = "severityUnknown",
  sortShortWideArrowUp = "sortShortWideArrowUp",
  // eslint-disable-next-line no-unused-vars
  sortShortWideArrowDown = "sortShortWideArrowDown",
  // eslint-disable-next-line no-unused-vars
  sortWideShortArrowUp = "sortWideShortArrowUp",
  // eslint-disable-next-line no-unused-vars
  sortWideShortArrowDown = "sortWideShortArrowDown",
  // eslint-disable-next-line no-unused-vars
  success = "success",
  // eslint-disable-next-line no-unused-vars
  upload = "upload",
  // eslint-disable-next-line no-unused-vars
  warning = "warning",
  // eslint-disable-next-line no-unused-vars
  wbSunny = "wbSunny",
  // eslint-disable-next-line no-unused-vars
  widgets = "widgets",
}

export type KnownIcons = keyof typeof KnownIconsEnum

interface IconColorProps {
  icon?: KnownIcons
  color: string
  title: string
  size: string | number
  iconClassName: string
}

const getColoredSizedIcon = ({ icon, color, size, title, iconClassName, ...iconProps }: IconColorProps) => {
  const iconClass = `juno-icon juno-icon-${icon} jn:fill-current ${color} ${iconClassName}`

  const iconEnum = KnownIconsEnum[icon || "default"]
  switch (iconEnum) {
    case KnownIconsEnum.accessTime:
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
    case KnownIconsEnum.accountCircle:
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
    case KnownIconsEnum.addCircle:
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
    case KnownIconsEnum.autoAwesomeMosaic:
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
    case KnownIconsEnum.autoAwesomeMotion:
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
    case KnownIconsEnum.bolt:
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
    case KnownIconsEnum.calendarToday:
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
    case KnownIconsEnum.cancel:
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
    case KnownIconsEnum.check:
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
    case KnownIconsEnum.checkCircle:
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
    case KnownIconsEnum.chevronLeft:
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
    case KnownIconsEnum.chevronRight:
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
    case KnownIconsEnum.close:
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
    case KnownIconsEnum.comment:
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
    case KnownIconsEnum.contentCopy:
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
    case KnownIconsEnum.danger:
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
    case KnownIconsEnum.dangerous:
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
    case KnownIconsEnum.deleteForever:
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
    case KnownIconsEnum.description:
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
    case KnownIconsEnum.dns:
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
    case KnownIconsEnum.download:
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
    case KnownIconsEnum.edit:
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
    case KnownIconsEnum.error:
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
    case KnownIconsEnum.errorOutline:
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
    case KnownIconsEnum.exitToApp:
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
    case KnownIconsEnum.expandLess:
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
    case KnownIconsEnum.expandMore:
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
    case KnownIconsEnum.filterAlt:
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
    case KnownIconsEnum.forum:
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
    case KnownIconsEnum.help:
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
    case KnownIconsEnum.home:
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
    case KnownIconsEnum.info:
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
    case KnownIconsEnum.manageAccounts:
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
    case KnownIconsEnum.monitorHeart:
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
    case KnownIconsEnum.moreVert:
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
    case KnownIconsEnum.nightsStay:
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
    case KnownIconsEnum.notificationsOff:
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
    case KnownIconsEnum.openInBrowser:
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
    case KnownIconsEnum.openInNew:
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
    case KnownIconsEnum.place:
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
    case KnownIconsEnum.search:
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
    case KnownIconsEnum.severityLow:
      return (
        <SeverityLow
          width={size}
          height={size}
          className={iconClass}
          alt="severity low"
          title={title ? title : "Severity Low"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.severityMedium:
      return (
        <SeverityMedium
          width={size}
          height={size}
          className={iconClass}
          alt="severity medium"
          title={title ? title : "Severity Medium"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.severityHigh:
      return (
        <SeverityHigh
          width={size}
          height={size}
          className={iconClass}
          alt="severity high"
          title={title ? title : "Severity High"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.severityVeryHigh:
      return (
        <SeverityVeryHigh
          width={size}
          height={size}
          className={iconClass}
          alt="severity very high"
          title={title ? title : "Severity Very High"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.severityCritical:
      return (
        <SeverityCritical
          width={size}
          height={size}
          className={iconClass}
          alt="severity critical"
          title={title ? title : "Severity Critical"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.severityUnknown:
      return (
        <SeverityUnknown
          width={size}
          height={size}
          className={iconClass}
          alt="severity unknown"
          title={title ? title : "Severity Unknown"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.success:
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
    case KnownIconsEnum.sortShortWideArrowUp:
      return (
        <SortShortWideArrowUp
          width={size}
          height={size}
          className={iconClass}
          alt="sort short wide arrow up"
          title={title ? title : "Sort Short Wide Arrow Up"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.sortShortWideArrowDown:
      return (
        <SortShortWideArrowDown
          width={size}
          height={size}
          className={iconClass}
          alt="sort short wide arrow down"
          title={title ? title : "Sort Short Wide Arrow Down"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.sortWideShortArrowUp:
      return (
        <SortWideShortArrowUp
          width={size}
          height={size}
          className={iconClass}
          alt="sort wide short arrow up"
          title={title ? title : "Sort Wide Short Arrow Up"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.sortWideShortArrowDown:
      return (
        <SortWideShortArrowDown
          width={size}
          height={size}
          className={iconClass}
          alt="sort wide short arrow down"
          title={title ? title : "Sort Wide Short Arrow Down"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.upload:
      return (
        <Upload
          width={size}
          height={size}
          className={iconClass}
          alt="upload"
          title={title ? title : "Upload"}
          role="img"
          {...iconProps}
        />
      )
    case KnownIconsEnum.widgets:
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
    case KnownIconsEnum.warning:
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
    case KnownIconsEnum.wbSunny:
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
    case KnownIconsEnum.default: // keep explicit default case to allow consuming components to use 'default'  w/o throwing warnings
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

export const Icon = forwardRef<HTMLAnchorElement | HTMLButtonElement, IconProps>(function Icon(
  { icon, color = "", size = 24, title = "", className = "", href = "", disabled = false, onClick, ...props },
  ref
) {
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
})

export interface IconProps
  extends Omit<React.HTMLProps<HTMLAnchorElement> | React.HTMLProps<HTMLButtonElement>, "size"> {
  icon?: KnownIcons
  color?: string
  size?: string | number
  title?: string
  className?: string
  href?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
