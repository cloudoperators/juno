import React, { forwardRef, LegacyRef } from "react"
import { DynamicIcon, DynamicIconComponentProps } from "lucide-react/dynamic"
import { Icon as Iconify } from "@iconify/react"
import { Helmet } from "react-helmet"

// Is goal to maintain less or performance? Is loading all an option?
// Filled in necessary or outlined fine?
// Lisence considerations

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
  language = "language",
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
  // eslint-disable-next-line no-unused-vars
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

interface IconProps {
  name: DynamicIconComponentProps // Use 'name' instead of 'icon' for consistency with DynamicIcon
  color?: string
  size?: string | number
  title?: string
  className?: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export const Icon = forwardRef<HTMLAnchorElement | HTMLButtonElement, IconProps>(
  ({ name, color, size = 24, title = "", className = "", href = "", onClick, ...props }, ref) => {
    const iconElement = (
      <DynamicIcon
        name={name}
        color={color}
        absoluteStrokeWidth={false}
        size={size}
        className={`lucide-icon ${className}`}
        {...props}
      />

      // <Iconify icon="material-symbols:info-rounded" width={"25px"} height={"25px"} />
      // <>
      //   <Helmet>
      //     <link
      //       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=info"
      //       rel="stylesheet"
      //     />
      //   </Helmet>

      //   <span
      //     width={size}
      //     height={size}
      //     className={`juno-icon material-symbols-outlined juno-icon-info jn:fill-current${className}`}
      //     alt="account"
      //     title={title ? title : "Account"}
      //     role="img"
      //     {...props}
      //   >
      //     {"info"}
      //   </span>
      // </>
    )

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (onClick) onClick(event)
    }

    const button = (
      <button
        type="button"
        onClick={handleClick}
        className={`lucide-icon-button ${className}`}
        aria-label={title || name}
        disabled={!!href}
        ref={ref as LegacyRef<HTMLButtonElement>}
        {...props}
      >
        {iconElement}
      </button>
    )

    const anchor = (
      <a
        href={href}
        className={`lucide-icon-link ${className}`}
        aria-label={title || name}
        ref={ref as LegacyRef<HTMLAnchorElement>}
        {...props}
      >
        {iconElement}
      </a>
    )

    return href ? (
      anchor
    ) : onClick ? (
      button
    ) : (
      <span className={className} ref={ref}>
        {iconElement}
      </span>
    )
  }
)

Icon.displayName = "Icon"
