import { ReactNode, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `CodeBlock` component renders a block of preformatted code or content. It offers features such
 * as optional wrapping, copying to clipboard, and syntax highlighting for JSON content via a custom viewer.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-codeblock--docs
 * @see {@link CodeBlockProps}
 */
export declare const CodeBlock: ({ content, children, wrap, size, copy, codeBlockFooter, lang, className, ...props }: CodeBlockProps) => ReactNode;
type CodeBlockSize = "auto" | "small" | "medium" | "large";
export interface CodeBlockProps extends Omit<HTMLAttributes<HTMLDivElement>, "content" | "children"> {
    /**
     * The content to render. Used when `lang` is "json". Overrides children if not specified.
     * Defaults to an empty string or object.
     */
    content?: string | object;
    /**
     * Elements or text to render inside the code block. Used when `lang` is not "json", overriding `content`.
     */
    children?: ReactNode;
    /**
     * Optional caption or title to render, styled like a tab.
     */
    heading?: string;
    /**
     * Determines whether the code should wrap.
     * @default true
     */
    wrap?: boolean;
    /**
     * Specifies the size of the CodeBlock.
     * @default "auto"
     */
    size?: CodeBlockSize;
    /**
     * Enables or disables the copy-to-clipboard option.
     * @default true
     */
    copy?: boolean;
    /**
     * Optional. Pass content to render inside the footer bar, to the left of the Copy button.
     * Can be combined with `copy={true}` (the default) to show custom actions alongside the Copy button.
     * **Breaking change:** Previously accepted a full replacement element that replaced the entire footer.
     * Now injects content *into* the footer — the `CodeBlockFooter` wrapper is always rendered.
     * Use `copy={false}` to hide the Copy button.
     */
    codeBlockFooter?: ReactNode;
    /**
     * Language for the content. "json" will render a structured JsonView. Adds a data-lang attribute.
     */
    lang?: string;
    /**
     * Additional CSS classes for customizing the CodeBlock styling.
     * @default ""
     */
    className?: string;
}
export {};
//# sourceMappingURL=CodeBlock.component.d.ts.map