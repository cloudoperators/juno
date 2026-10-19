import { HTMLProps, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data.
 * To indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-spinner--docs
 * @see {@link SpinnerProps}
 */
export declare const Spinner: ({ variant, size, className, color, ...props }: SpinnerProps) => ReactNode;
type SpinnerVariant = "primary" | "danger" | "default" | "success" | "warning";
export interface SpinnerProps extends Omit<HTMLProps<SVGSVGElement>, "size"> {
    /** The semantic color variant of the Spinner */
    variant?: SpinnerVariant;
    /** The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`*/
    size?: string;
    /** Add custom classNames */
    className?: string;
    /** Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`. */
    color?: string;
}
export {};
//# sourceMappingURL=Spinner.component.d.ts.map