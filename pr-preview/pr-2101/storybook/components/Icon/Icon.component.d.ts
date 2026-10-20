import { default as React, HTMLProps, MouseEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export declare enum KnownIconsEnum {
    accessTime = "accessTime",
    accountCircle = "accountCircle",
    addCircle = "addCircle",
    autoAwesomeMosaic = "autoAwesomeMosaic",
    autoAwesomeMotion = "autoAwesomeMotion",
    bolt = "bolt",
    cached = "cached",
    calendarToday = "calendarToday",
    cancel = "cancel",
    check = "check",
    checkCircle = "checkCircle",
    chevronLeft = "chevronLeft",
    chevronRight = "chevronRight",
    close = "close",
    comment = "comment",
    contentCopy = "contentCopy",
    danger = "danger",
    dangerous = "dangerous",
    default = "default",
    deleteForever = "deleteForever",
    description = "description",
    dns = "dns",
    download = "download",
    edit = "edit",
    error = "error",
    errorOutline = "errorOutline",
    exitToApp = "exitToApp",
    expandLess = "expandLess",
    expandMore = "expandMore",
    filterAlt = "filterAlt",
    forum = "forum",
    help = "help",
    home = "home",
    info = "info",
    language = "language",
    manageAccounts = "manageAccounts",
    monitorHeart = "monitorHeart",
    moreVert = "moreVert",
    nightsStay = "nightsStay",
    notificationsOff = "notificationsOff",
    openInBrowser = "openInBrowser",
    openInNew = "openInNew",
    place = "place",
    schedule = "schedule",
    search = "search",
    severityLow = "severityLow",
    severityMedium = "severityMedium",
    severityHigh = "severityHigh",
    severityVeryHigh = "severityVeryHigh",
    severityCritical = "severityCritical",
    severityUnknown = "severityUnknown",
    sortShortWideArrowUp = "sortShortWideArrowUp",
    sortShortWideArrowDown = "sortShortWideArrowDown",
    sortWideShortArrowUp = "sortWideShortArrowUp",
    sortWideShortArrowDown = "sortWideShortArrowDown",
    success = "success",
    upload = "upload",
    warning = "warning",
    wbSunny = "wbSunny",
    widgets = "widgets"
}
export type KnownIcons = keyof typeof KnownIconsEnum;
/**
 * The `Icon` component provides a versatile way to render SVG icons with customizable size,
 * color, and accessibility features. Icons can be interactive through click events or embedded links.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-icon--docs
 * @see {@link IconProps}
 */
export declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export interface IconProps extends Omit<HTMLProps<HTMLAnchorElement> | HTMLProps<HTMLButtonElement>, "size"> {
    /** The name of the icon to render. */
    icon?: KnownIcons;
    /** Specifies the color of the icon. */
    color?: string;
    /** Determines the size of the icon, either a number or string representing pixels/rem. */
    size?: string | number;
    /** Accessibility title for the icon, useful for screen readers. */
    title?: string;
    /** Additional CSS class names for custom styling.
     * @default ""
     */
    className?: string;
    /** URL for navigation via anchor element when clicked. */
    href?: string;
    /**
     * Determines if the icon is interactive or not.
     * @default false
     */
    disabled?: boolean;
    /** Click event handler for icon interaction, applicable to button elements. */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
//# sourceMappingURL=Icon.component.d.ts.map