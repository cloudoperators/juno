import { ReactNode, SVGAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface LoadingIndicatorProps extends SVGAttributes<SVGElement> {
    /**
     * The size of the LoadingIndicator in pixels. Must be a positive number value.
     * If a string, must be a valid number.
     * @default 96
     */
    size?: string | number;
    /**
     * A custom class that can be applied to change the color of the LoadingIndicator.
     * By default, the LoadingIndicator will use the color of the current context.
     * To use a different color, pass a text color class. These classes generally begin with "text-".
     * Additionally, you can pass any other class that contains a "color:" CSS declaration.
     */
    color?: string;
    /**
     * Additional CSS classes for custom styling.
     * @default ""
     */
    className?: string;
}
/**
 * The `LoadingIndicator` visually represents ongoing loading processes for pages,
 * large sections, or panels, offering custom size and color adjustments.
 * It's suitable for prominent loading displays rather than granular elements.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-loadingindicator--docs
 * @see {@link LoadingIndicatorProps}
 */
export declare const LoadingIndicator: ({ size, color, className, ...props }: LoadingIndicatorProps) => ReactNode;
//# sourceMappingURL=LoadingIndicator.component.d.ts.map