import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { useTooltip } from './useTooltip';
import { ToolTipVariant, TooltipPlacement } from './ToolTip.types';
type TooltipContextType = ReturnType<typeof useTooltip> | null;
/**
 * This hook holds the TooltipContext.
 *
 * @returns TooltipContext
 */
export declare const useTooltipState: () => NonNullable<TooltipContextType>;
export interface TooltipProps extends HTMLAttributes<HTMLElement> {
    /** The semantic variant of the tooltip, or `plain` */
    variant?: ToolTipVariant;
    /** Uncontrolled Tooltip: Choose which event should trigger the opening of the tooltip (click or hover) */
    triggerEvent?: "click" | "hover";
    /** Tooltip placement in relation to trigger, default is top */
    placement?: TooltipPlacement;
    /** Disable the tooltip. If this is true, the uncontrolled tooltip can't be opened anymore and the cursor hovered over the trigger will be the default cursor instead of the pointer cursor */
    disabled?: boolean;
    /** Set whether tooltip should be initially rendered opened or closed. This is only evaluated if Tooltip is in uncontrolled mode */
    initialOpen?: boolean;
    /** Whether the Tooltip is open. By passing this prop you turn the Tooltip into a controlled component, which means
     * you also have to take care of opening and closing it. In this case the triggerEvent prop is ignored since you're handling the trigger yourself */
    open?: boolean;
    /** Pass the TooltipTrigger and TooltipContent elements as children */
    children?: ReactNode;
}
/**
 * A Tooltip component that optionally comes in the various semantic flavors (e.g. info, warning, ...). It can be used as an uncontrolled component where
 * you configure the event type that should open the tooltip (click or hover) or alternatively you can use it as a controlled component where you set the
 * open state and handle the events that open/close the tooltip yourself.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-tooltip-tooltip--docs
 * @see {@link TooltipProps}
 */
export declare const Tooltip: ({ initialOpen, placement, variant, open, triggerEvent, disabled, children, ...props }: TooltipProps) => ReactNode;
export {};
//# sourceMappingURL=Tooltip.component.d.ts.map