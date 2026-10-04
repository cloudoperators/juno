import { ReactNode, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface PanelFooterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Additional CSS classes to apply to the panel footer for custom styling.
     */
    className?: string;
    /**
     * The content to render inside the panel footer.
     * Typically, this will include buttons or other control elements.
     */
    children?: ReactNode;
}
/**
 * The PanelFooter component renders the footer section of a panel.
 * Typically used to contain footer elements like buttons, which can be added to the PanelBody component via its `footer` property.
 * Buttons placed inside will be automatically aligned to the right.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-panel-panelfooter--docs
 * @see {@link PanelFooterProps}
 */
export declare const PanelFooter: ({ className, children, ...props }: PanelFooterProps) => ReactNode;
//# sourceMappingURL=PanelFooter.component.d.ts.map