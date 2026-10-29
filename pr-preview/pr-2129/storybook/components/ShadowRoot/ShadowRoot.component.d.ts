import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * Functional component which creates and inserts a shadow dom element
 * in to the current parent element. ShadowRoot allows html to be isolated from the rest of the DOM. If styles are given, these and
 * the children are added to the shadow element. The themeClass is added to a wrapper div surrounding the children.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-shadowroot--docs
 * @see {@link ShadowRootProps}
 */
export declare const ShadowRoot: ({ mode, delegatesFocus, children }: ShadowRootProps) => ReactNode;
export type ShadowRootMode = "open" | "closed";
export interface ShadowRootProps {
    /** Choose "closed" to prevent styles from being inherited from the parent node. */
    mode?: ShadowRootMode;
    delegatesFocus?: boolean;
    /** The children to render */
    children?: ReactNode;
}
//# sourceMappingURL=ShadowRoot.component.d.ts.map