import { ReactNode, ReactElement, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface PanelBodyProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Additional CSS classes to apply to the panel body for custom styling.
     */
    className?: string;
    /**
     * The content to be rendered inside the panel body.
     * Typically, this will include form elements and other interactive content.
     */
    children?: ReactNode;
    /**
     * Optional footer component to be rendered below the main content.
     * The footer can include buttons or other control elements.
     */
    footer?: ReactElement;
}
/**
 * A PanelBody component is used to encapsulate the main content of a panel.
 * The primary content for the panel, such as forms or information, is rendered here.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-panel-panelbody--docs
 * @see {@link PanelBodyProps}
 */
export declare const PanelBody: ({ className, footer, children, ...props }: PanelBodyProps) => ReactNode;
//# sourceMappingURL=PanelBody.component.d.ts.map