import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `MainContainerInner` offers a structured inner wrapper for page content, enabling width constraints
 * or full-width rendering as needed.
 */
export declare const MainContainerInner: ({ children, fullWidth, className, ...props }: MainContainerInnerProps) => ReactNode;
export interface MainContainerInnerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The children to render within the container.
     */
    children?: ReactNode;
    /**
     * Determines if content stretches to full viewport width.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Custom CSS class names for stylized rendering.
     * @default ""
     */
    className?: string;
}
//# sourceMappingURL=MainContainerInner.component.d.ts.map