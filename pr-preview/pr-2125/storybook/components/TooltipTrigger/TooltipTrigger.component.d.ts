import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface TooltipTriggerProps extends HTMLAttributes<HTMLElement> {
    /** If true, the child you passed to the TooltipTrigger is rendered as the trigger element, instead of the default trigger component. This is useful if you e.g. want to use a Button or Icon as the trigger. */
    asChild?: boolean;
    /** Pass child nodes to display in the tooltip */
    children?: ReactNode;
    /** Pass a className to render to the trigger element */
    className?: string;
}
/**
 * This is the trigger element for a tooltip. See Tooltip for more in-depth explanation and examples.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-tooltip-tooltiptrigger--docs
 * @see {@link TooltipTriggerProps}
 */
export declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=TooltipTrigger.component.d.ts.map