import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export type BoxVariantType = "info" | "warning" | "danger" | "error" | "success";
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The child elements to be rendered inside the Box.
     */
    children?: ReactNode;
    /**
     * Optional title rendered above the content in bold.
     */
    title?: string;
    /**
     * Determines whether the Box should render without padding.
     * When true, padding is removed.
     * @default false
     */
    unpad?: boolean;
    /**
     * Additional CSS classes to apply to the Box component.
     * @default ""
     */
    className?: string;
    /**
     * Specify an optional semantic variant that determines the appearance of a Box. If not passed, the Box will appear neutral (default).
     */
    variant?: BoxVariantType;
}
/**
 * The `Box` component is a versatile container with optional padding and a subtle border.
 * It is perfect for annotations, supplementary explanations, and remarks where more visually
 * pronounced components like a MessageBox or InfoBox would be excessive.
 * This component typically displays small text but can contain any child elements as required, which supports implementing the Inline Action Box pattern.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-box--docs
 * @see {@link BoxProps}
 */
export declare const Box: ({ children, title, unpad, className, variant, ...props }: BoxProps) => ReactNode;
//# sourceMappingURL=Box.component.d.ts.map