import { default as React, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The status to display. Determines the default copy. Defaults to `"error"`. */
    status?: "progress" | "error" | "empty" | "no-matches";
    /** Optional title. Overrides the per-status default title when set. Use title case (e.g. "Something Went Wrong", not "Something went wrong"). */
    title?: string;
    /** Optional body text. Overrides the per-status default body text when set. */
    body?: string;
    /** Renders a `Spinner`. Defaults to `true` when `status="progress"`, `false` otherwise. */
    spinner?: boolean;
    /** Displayed large and prominently above the title. Intended for HTTP error codes such as 404 or 500. */
    code?: number | string;
    /** Rendered in a `<pre>` block using monospaced font. Intended for stack traces and server responses. Scrolls vertically if content exceeds the maximum height. */
    details?: string;
    /** Optional action area rendered below the content. Typically a `Button` or a button-styled anchor element. */
    action?: ReactNode;
    /** Add custom CSS classes to the root element. */
    className?: string;
}
export declare const Status: ({ status, title, body, spinner, code, details, action, className, ...props }: StatusProps) => React.JSX.Element;
//# sourceMappingURL=Status.component.d.ts.map