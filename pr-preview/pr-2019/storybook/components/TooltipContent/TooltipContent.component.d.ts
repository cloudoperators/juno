import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
    /** Pass child nodes to display in the tooltip */
    children?: ReactNode;
    /** Pass a className to render to the icon button*/
    className?: string;
}
/**
 * Put content for a tooltip here. See Tooltip for more in-depth explanation and examples.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-tooltip-tooltipcontent--docs
 * @see {@link TooltipContentProps}
 */
export declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=TooltipContent.component.d.ts.map