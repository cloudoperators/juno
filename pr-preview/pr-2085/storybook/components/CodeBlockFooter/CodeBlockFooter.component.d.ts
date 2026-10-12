import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface CodeBlockFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, "onCopy"> {
    /**
     * Callback function to handle the copy action. Required when `copy` is true (the default).
     */
    onCopy: () => void;
    /**
     * Indicates whether the content has been copied. Drives the "Copied!" tooltip on the Copy button.
     */
    isCopied: boolean;
    /**
     * Whether to show the Copy button. Defaults to true.
     */
    copy: boolean;
    /**
     * Optional children rendered to the left of the Copy button.
     */
    children?: ReactNode;
    /**
     * Optional. Additional CSS classes for customizing the footer container.
     */
    className?: string;
}
export declare const CodeBlockFooter: ({ onCopy, isCopied, copy, children, className, ...props }: CodeBlockFooterProps) => React.JSX.Element;
//# sourceMappingURL=CodeBlockFooter.component.d.ts.map