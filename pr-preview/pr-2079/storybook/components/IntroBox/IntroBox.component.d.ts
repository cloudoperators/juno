import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface IntroBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Pass an optional title.
     * @default ""
     */
    title?: string;
    /**
     * Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below).
     * @default ""
     */
    text?: string;
    /**
     * Pass a variant style to affect the layout of the intro box.
     * @default "default"
     */
    variant?: "default" | "hero";
    /**
     * Optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image.
     */
    heroImage?: string;
    /**
     * Pass a custom class or classes for styling the intro box.
     * @default ""
     */
    className?: string;
    /**
     * Pass child nodes to be rendered as content, taking precedence over `text`.
     */
    children?: ReactNode;
}
/**
 * The `IntroBox` component presents important information about the contents,
 * purpose, or state of a page or view, using distinct styles for emphasis.
 * Supports "hero" variant with optional background images.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-introbox--docs
 * @see {@link IntroBoxProps}
 */
export declare const IntroBox: ({ title, text, variant, heroImage, className, children, ...props }: IntroBoxProps) => ReactNode;
//# sourceMappingURL=IntroBox.component.d.ts.map