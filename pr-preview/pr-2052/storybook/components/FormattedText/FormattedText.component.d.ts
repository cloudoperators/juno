import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface FormattedTextProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Custom CSS class name for styling the formatted text container.
     * @default ""
     */
    className?: string;
    /** Rendering content within the formatted text container. */
    children?: ReactNode;
}
/**
 * The `FormattedText` component provides a container for stylized text.
 * It supports custom content and additional styling through class names.
 * @see https://cloudoperators.github.io/juno/?path=/story/components-formattedtext--basic
 * @see {@link FormattedTextProps}
 */
export declare const FormattedText: ({ className, children, ...props }: FormattedTextProps) => ReactNode;
//# sourceMappingURL=FormattedText.component.d.ts.map