import { ComponentPropsWithoutRef, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `Code` component is a lightweight inline `<code>` element used for displaying code snippets or text.
 * It can accept content directly through the `content` prop or render children encapsulated within it.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-code--docs
 * @see {@link CodeProps}
 */
export declare const Code: ({ content, children, className, ...props }: CodeProps) => ReactNode;
export interface CodeProps extends ComponentPropsWithoutRef<"code"> {
    /**
     * Text content to render within the code element. Overrides `children`.
     * @default ""
     */
    content?: string;
    /** Additional CSS class names for styling the code element.
     * @default ""
     */
    className?: string;
    /** Elements or text to render inside the code element. */
    children?: ReactNode;
}
//# sourceMappingURL=Code.component.d.ts.map