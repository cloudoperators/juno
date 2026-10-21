import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    /**
     * Fill percentage of the track. Only applies in `determinate` mode.
     * @default 0
     */
    value?: number;
    /**
     * Visual mode of the progress bar.
     * `determinate` fills the track to `value`.
     * `busy` shows an animated indeterminate indicator.
     * @default "determinate"
     */
    mode?: "determinate" | "busy";
    /** Accessible label for screen readers.
     * @default "Progress"
     */
    "aria-label"?: string;
    /** Add custom class names. */
    className?: string;
}
/**
 * The `ProgressBar` component visually represents the completion status of a task or process.
 * It accepts a `value` between 0 and 100 and renders a filled track scaled to that percentage.
 * Values outside the valid range are clamped automatically.
 * Set `mode` to `busy` for an animated indeterminate indicator.
 * @see {@link ProgressBarProps}
 */
export declare const ProgressBar: ({ value, mode, "aria-label": ariaLabel, className, ...props }: ProgressBarProps) => ReactNode;
//# sourceMappingURL=ProgressBar.component.d.ts.map