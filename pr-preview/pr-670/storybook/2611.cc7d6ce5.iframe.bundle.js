"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2611],{"./src/deprecated_js/Icon/Icon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon,g:()=>knownIcons});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_50___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_50__),_material_design_icons_svg_filled_access_time_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/access_time.svg"),_material_design_icons_svg_filled_account_circle_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/account_circle.svg"),_material_design_icons_svg_filled_add_circle_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/add_circle.svg"),_material_design_icons_svg_filled_auto_awesome_mosaic_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/auto_awesome_mosaic.svg"),_material_design_icons_svg_filled_auto_awesome_motion_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/auto_awesome_motion.svg"),_material_design_icons_svg_filled_bolt_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/bolt.svg"),_material_design_icons_svg_filled_calendar_today_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/calendar_today.svg"),_material_design_icons_svg_filled_cancel_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/cancel.svg"),_material_design_icons_svg_filled_check_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/check.svg"),_material_design_icons_svg_filled_check_circle_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/check_circle.svg"),_material_design_icons_svg_outlined_chevron_left_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/chevron_left.svg"),_material_design_icons_svg_outlined_chevron_right_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/chevron_right.svg"),_material_design_icons_svg_filled_close_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/close.svg"),_material_design_icons_svg_outlined_content_copy_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/content_copy.svg"),_components_Icon_icons_juno_danger_svg__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/components/Icon/icons/juno-danger.svg"),_material_design_icons_svg_filled_dangerous_svg__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/dangerous.svg"),_material_design_icons_svg_filled_download_svg__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/download.svg"),_material_design_icons_svg_filled_delete_forever_svg__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/delete_forever.svg"),_material_design_icons_svg_filled_description_svg__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/description.svg"),_material_design_icons_svg_filled_dns_svg__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/dns.svg"),_material_design_icons_svg_filled_edit_svg__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/edit.svg"),_material_design_icons_svg_outlined_error_outline_svg__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/error_outline.svg"),_material_design_icons_svg_outlined_exit_to_app_svg__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/exit_to_app.svg"),_material_design_icons_svg_outlined_expand_less_svg__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/expand_less.svg"),_material_design_icons_svg_outlined_expand_more_svg__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/expand_more.svg"),_material_design_icons_svg_filled_filter_alt_svg__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/filter_alt.svg"),_material_design_icons_svg_filled_forum_svg__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/forum.svg"),_material_design_icons_svg_filled_help_svg__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/help.svg"),_components_Icon_icons_home_sharp_svg__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./src/components/Icon/icons/home_sharp.svg"),_material_design_icons_svg_filled_info_svg__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/info.svg"),_material_design_icons_svg_filled_comment_svg__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/comment.svg"),_material_design_icons_svg_filled_manage_accounts_svg__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/manage_accounts.svg"),_material_design_icons_svg_outlined_monitor_heart_svg__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/monitor_heart.svg"),_material_design_icons_svg_outlined_more_vert_svg__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/more_vert.svg"),_material_design_icons_svg_outlined_nights_stay_svg__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/nights_stay.svg"),_material_design_icons_svg_outlined_notifications_off_svg__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/notifications_off.svg"),_material_design_icons_svg_outlined_open_in_browser_svg__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/open_in_browser.svg"),_material_design_icons_svg_outlined_open_in_new_svg__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/open_in_new.svg"),_components_Icon_icons_place_svg__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./src/components/Icon/icons/place.svg"),_material_design_icons_svg_filled_check_box_svg__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/check_box.svg"),_material_design_icons_svg_outlined_search_svg__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/search.svg"),_components_Icon_icons_juno_severity_low_svg__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./src/components/Icon/icons/juno_severity_low.svg"),_components_Icon_icons_juno_severity_medium_svg__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./src/components/Icon/icons/juno_severity_medium.svg"),_components_Icon_icons_juno_severity_high_svg__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./src/components/Icon/icons/juno_severity_high.svg"),_components_Icon_icons_juno_severity_critical_svg__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./src/components/Icon/icons/juno_severity_critical.svg"),_material_design_icons_svg_filled_upload_svg__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/upload.svg"),_material_design_icons_svg_filled_warning_svg__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/warning.svg"),_material_design_icons_svg_outlined_wb_sunny_svg__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("../../node_modules/@material-design-icons/svg/outlined/wb_sunny.svg"),_material_design_icons_svg_filled_widgets_svg__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("../../node_modules/@material-design-icons/svg/filled/widgets.svg");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const knownIcons=["accessTime","accountCircle","addCircle","autoAwesomeMosaic","autoAwesomeMotion","bolt","calendarToday","cancel","check","checkCircle","chevronLeft","chevronRight","close","comment","contentCopy","danger","dangerous","default","deleteForever","description","dns","download","edit","error","errorOutline","exitToApp","expandLess","expandMore","filterAlt","forum","help","home","info","manageAccounts","monitorHeart","moreVert","nightsStay","notificationsOff","openInBrowser","openInNew","place","search","severityLow","severityMedium","severityHigh","severityCritical","success","upload","warning","wbSunny","widgets"],Icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref2,ref)=>{let{icon=null,color="",size="24",title="",className="",href="",disabled=!1,onClick,...props}=_ref2;const icn=(_ref=>{let{icon,color,size,title,iconClassName,...iconProps}=_ref;const iconClass=`juno-icon juno-icon-${icon} jn-fill-current ${color} ${iconClassName}`;switch(icon){case"accessTime":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_access_time_svg__WEBPACK_IMPORTED_MODULE_1__.A,_extends({width:size,height:size,className:iconClass,alt:"time",title:title||"Time",role:"img"},iconProps));case"accountCircle":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_account_circle_svg__WEBPACK_IMPORTED_MODULE_2__.A,_extends({width:size,height:size,className:iconClass,alt:"account",title:title||"Account",role:"img"},iconProps));case"addCircle":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_add_circle_svg__WEBPACK_IMPORTED_MODULE_3__.A,_extends({width:size,height:size,className:iconClass,alt:"add",title:title||"Add",role:"img"},iconProps));case"autoAwesomeMosaic":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_auto_awesome_mosaic_svg__WEBPACK_IMPORTED_MODULE_4__.A,_extends({width:size,height:size,className:iconClass,alt:"mosaic",title:title||"Mosaic",role:"img"},iconProps));case"autoAwesomeMotion":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_auto_awesome_motion_svg__WEBPACK_IMPORTED_MODULE_5__.A,_extends({width:size,height:size,className:iconClass,alt:"items stacked behind each other",title:title||"Items stacked behind each other",role:"img"},iconProps));case"bolt":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_bolt_svg__WEBPACK_IMPORTED_MODULE_6__.A,_extends({width:size,height:size,className:iconClass,alt:"bolt",title:title||"Bolt",role:"img"},iconProps));case"calendarToday":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_calendar_today_svg__WEBPACK_IMPORTED_MODULE_7__.A,_extends({width:size,height:size,className:iconClass,alt:"calendar",title:title||"Calendar",role:"img"},iconProps));case"cancel":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_cancel_svg__WEBPACK_IMPORTED_MODULE_8__.A,_extends({width:size,height:size,className:iconClass,alt:"cancel",title:title||"Cancel",role:"img"},iconProps));case"check":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_check_svg__WEBPACK_IMPORTED_MODULE_9__.A,_extends({width:size,height:size,className:iconClass,alt:"check",title:title||"Check",role:"img"},iconProps));case"checkCircle":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_check_circle_svg__WEBPACK_IMPORTED_MODULE_10__.A,_extends({width:size,height:size,className:iconClass,alt:"checkCircle",title:title||"CheckCircle",role:"img"},iconProps));case"chevronLeft":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_chevron_left_svg__WEBPACK_IMPORTED_MODULE_11__.A,_extends({width:size,height:size,className:iconClass,alt:"chevronLeft",title:title||"ChevronLeft",role:"img"},iconProps));case"chevronRight":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_chevron_right_svg__WEBPACK_IMPORTED_MODULE_12__.A,_extends({width:size,height:size,className:iconClass,alt:"chevronRight",title:title||"ChevronRight",role:"img"},iconProps));case"close":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_close_svg__WEBPACK_IMPORTED_MODULE_13__.A,_extends({width:size,height:size,className:iconClass,alt:"close",title:title||"Close",role:"img"},iconProps));case"comment":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_comment_svg__WEBPACK_IMPORTED_MODULE_31__.A,_extends({width:size,height:size,className:iconClass,alt:"comment",title:title||"Comment",role:"img"},iconProps));case"contentCopy":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_content_copy_svg__WEBPACK_IMPORTED_MODULE_14__.A,_extends({width:size,height:size,className:iconClass,alt:"copy",title:title||"Copy",role:"img"},iconProps));case"danger":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_juno_danger_svg__WEBPACK_IMPORTED_MODULE_15__.A,_extends({width:size,height:size,className:iconClass,alt:"danger",title:title||"Danger",role:"img"},iconProps));case"dangerous":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_dangerous_svg__WEBPACK_IMPORTED_MODULE_16__.A,_extends({width:size,height:size,className:iconClass,alt:"dangerous",title:title||"Dangerous",role:"img"},iconProps));case"deleteForever":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_delete_forever_svg__WEBPACK_IMPORTED_MODULE_18__.A,_extends({width:size,height:size,className:iconClass,alt:"delete forever",title:title||"Delete Forever",role:"img"},iconProps));case"description":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_description_svg__WEBPACK_IMPORTED_MODULE_19__.A,_extends({width:size,height:size,className:iconClass,alt:"description",title:title||"Description",role:"img"},iconProps));case"dns":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_dns_svg__WEBPACK_IMPORTED_MODULE_20__.A,_extends({width:size,height:size,className:iconClass,alt:"service",title:title||"Service",role:"img"},iconProps));case"download":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_download_svg__WEBPACK_IMPORTED_MODULE_17__.A,_extends({width:size,height:size,className:iconClass,alt:"download",title:title||"download",role:"img"},iconProps));case"edit":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_edit_svg__WEBPACK_IMPORTED_MODULE_21__.A,_extends({width:size,height:size,className:iconClass,alt:"edit",title:title||"Edit",role:"img"},iconProps));case"error":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_dangerous_svg__WEBPACK_IMPORTED_MODULE_16__.A,_extends({width:size,height:size,className:iconClass,alt:"error",title:title||"Error",role:"img"},iconProps));case"errorOutline":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_error_outline_svg__WEBPACK_IMPORTED_MODULE_22__.A,_extends({width:size,height:size,className:iconClass,alt:"error outline",title:title||"Error",role:"img"},iconProps));case"exitToApp":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_exit_to_app_svg__WEBPACK_IMPORTED_MODULE_23__.A,_extends({width:size,height:size,className:iconClass,alt:"exit to other app",title:title||"Exit to app",role:"img"},iconProps));case"expandLess":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_expand_less_svg__WEBPACK_IMPORTED_MODULE_24__.A,_extends({width:size,height:size,className:iconClass,alt:"expand less",title:title||"Expand Less",role:"img"},iconProps));case"expandMore":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_expand_more_svg__WEBPACK_IMPORTED_MODULE_25__.A,_extends({width:size,height:size,className:iconClass,alt:"expand more",title:title||"Expand More",role:"img"},iconProps));case"filterAlt":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_filter_alt_svg__WEBPACK_IMPORTED_MODULE_26__.A,_extends({width:size,height:size,className:iconClass,alt:"filter",title:title||"Filter",role:"img"},iconProps));case"forum":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_forum_svg__WEBPACK_IMPORTED_MODULE_27__.A,_extends({width:size,height:size,className:iconClass,alt:"forum",title:title||"Forum",role:"img"},iconProps));case"help":case"default":default:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_help_svg__WEBPACK_IMPORTED_MODULE_28__.A,_extends({width:size,height:size,className:iconClass,alt:"help",title:title||"Help",role:"img"},iconProps));case"home":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_home_sharp_svg__WEBPACK_IMPORTED_MODULE_29__.A,_extends({width:size,height:size,className:iconClass,alt:"home",title:title||"Home",role:"img"},iconProps));case"info":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_info_svg__WEBPACK_IMPORTED_MODULE_30__.A,_extends({width:size,height:size,className:iconClass,alt:"info",title:title||"Info",role:"img"},iconProps));case"manageAccounts":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_manage_accounts_svg__WEBPACK_IMPORTED_MODULE_32__.A,_extends({width:size,height:size,className:iconClass,alt:"user account configuration",title:title||"User account configuration",role:"img"},iconProps));case"monitorHeart":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_monitor_heart_svg__WEBPACK_IMPORTED_MODULE_33__.A,_extends({width:size,height:size,className:iconClass,alt:"heart monitor",title:title||"Heart monitor",role:"img"},iconProps));case"moreVert":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_more_vert_svg__WEBPACK_IMPORTED_MODULE_34__.A,_extends({width:size,height:size,className:iconClass,alt:"more",title:title||"More",role:"img"},iconProps));case"nightsStay":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_nights_stay_svg__WEBPACK_IMPORTED_MODULE_35__.A,_extends({width:size,height:size,className:iconClass,alt:"nights stay",title:title||"Nights stay",role:"img"},iconProps));case"notificationsOff":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_notifications_off_svg__WEBPACK_IMPORTED_MODULE_36__.A,_extends({width:size,height:size,className:iconClass,alt:"notifications off",title:title||"Notifications off",role:"img"},iconProps));case"openInBrowser":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_open_in_browser_svg__WEBPACK_IMPORTED_MODULE_37__.A,_extends({width:size,height:size,className:iconClass,alt:"open in browser",title:title||"Open in browser",role:"img"},iconProps));case"openInNew":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_open_in_new_svg__WEBPACK_IMPORTED_MODULE_38__.A,_extends({width:size,height:size,className:iconClass,alt:"open in new tab",title:title||"Open in new tab",role:"img"},iconProps));case"place":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_place_svg__WEBPACK_IMPORTED_MODULE_39__.A,_extends({width:size,height:size,className:iconClass,alt:"location",title:title||"Location",role:"img"},iconProps));case"search":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_search_svg__WEBPACK_IMPORTED_MODULE_41__.A,_extends({width:size,height:size,className:iconClass,alt:"search",title:title||"Search",role:"img"},iconProps));case"severityLow":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_juno_severity_low_svg__WEBPACK_IMPORTED_MODULE_42__.A,_extends({width:size,height:size,className:iconClass,alt:"Severity low",title:title||"Severity Low",role:"img"},iconProps));case"severityMedium":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_juno_severity_medium_svg__WEBPACK_IMPORTED_MODULE_43__.A,_extends({width:size,height:size,className:iconClass,alt:"Severity medium",title:title||"Severity Medium",role:"img"},iconProps));case"severityHigh":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_juno_severity_high_svg__WEBPACK_IMPORTED_MODULE_44__.A,_extends({width:size,height:size,className:iconClass,alt:"Severity high",title:title||"Severity High",role:"img"},iconProps));case"severityCritical":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_icons_juno_severity_critical_svg__WEBPACK_IMPORTED_MODULE_45__.A,_extends({width:size,height:size,className:iconClass,alt:"Severity critical",title:title||"Severity Critical",role:"img"},iconProps));case"success":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_check_box_svg__WEBPACK_IMPORTED_MODULE_40__.A,_extends({width:size,height:size,className:iconClass,alt:"success",title:title||"Success",role:"img"},iconProps));case"upload":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_upload_svg__WEBPACK_IMPORTED_MODULE_46__.A,_extends({width:size,height:size,className:iconClass,alt:"upload",title:title||"Upload",role:"img"},iconProps));case"widgets":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_widgets_svg__WEBPACK_IMPORTED_MODULE_49__.A,_extends({width:size,height:size,className:iconClass,alt:"widgets",title:title||"Widgets",role:"img"},iconProps));case"warning":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_filled_warning_svg__WEBPACK_IMPORTED_MODULE_47__.A,_extends({width:size,height:size,className:iconClass,alt:"warning",title:title||"Warning",role:"img"},iconProps));case"wbSunny":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_design_icons_svg_outlined_wb_sunny_svg__WEBPACK_IMPORTED_MODULE_48__.A,_extends({width:size,height:size,className:iconClass,alt:"wb sunny",title:title||"WBSunny",role:"img"},iconProps))}})({icon,color,size,title,iconClassName:href||onClick?"":className,...href||onClick?{}:props}),button=react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({onClick:event=>{onClick&&onClick(event)},className:`juno-icon-button \n  hover:jn-text-theme-high\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n\tdisabled:jn-opacity-50\n\tdisabled:jn-cursor-not-allowed\n ${className}`,"aria-label":title||icon,disabled,ref},props),icn),anchor=react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({href,className:`juno-icon-link \n\tjn-text-current\n  hover:jn-text-theme-high\n  focus:jn-outline-none \n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n  focus-visible:jn-ring-offset-1\n  focus-visible:jn-ring-offset-theme-focus\n\tdisabled:jn-opacity-50\n\tdisabled:jn-cursor-not-allowed\n ${className}`,"aria-label":title||icon,ref},props),icn);return href?anchor:onClick?button:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{ref},icn)}));Icon.displayName="Icon",Icon.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_50___default().oneOf(knownIcons),color:prop_types__WEBPACK_IMPORTED_MODULE_50___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_50___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_50___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_50___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_50___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_50___default().bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_50___default().func},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{icon:{defaultValue:{value:"null",computed:!1},description:"The icon to display",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'By default, Icons will use the `color` of the current context. In order to use a different color just for the icon, a text color class can be passed. These begin with "jn-text-".',type:{name:"string"},required:!1},size:{defaultValue:{value:'"24"',computed:!1},description:'The size of the icon as a number of pixels (without "px": "16" will render an icon of 16px x 16px)',type:{name:"string"},required:!1},title:{defaultValue:{value:'""',computed:!1},description:"The title of the icon. Important for accessibility, will also show as a tooltip:",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"A custom className",type:{name:"string"},required:!1},href:{defaultValue:{value:'""',computed:!1},description:"Optionally specify an href. This will render the Icon inside an <code><a></code> element with the given url.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disable the Icon. Only applicable when rendering as a button by passing an onClick handler, too.",type:{name:"bool"},required:!1},onClick:{description:"Optionally specify a click handler. This will render the icon inside a <code><button></code> with the given handler.",type:{name:"func"},required:!1}}}}}]);