import { HTMLAttributes, ReactNode, MouseEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type PanelSize = "default" | "large";
export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Title of the panel.
     */
    heading?: ReactNode;
    /**
     * Size of the opened panel.
     */
    size?: PanelSize;
    /**
     * Controls whether the panel is open and visible.
     */
    opened?: boolean;
    /**
     * Determines whether the panel can be closed using a close button.
     */
    closeable?: boolean;
    /**
     * Handler called when the close button is clicked.
     */
    onClose?: MouseEventHandler<HTMLElement>;
    /**
     * Additional CSS classes to apply to the panel for custom styling.
     */
    className?: string;
    /**
     * Content to be rendered inside the main body of the panel.
     */
    children?: ReactNode;
}
/**
 * A Panel component that slides in from the right side of the screen.
 * It can be used to display additional content/controls for the content area.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-panel-panel--docs
 * @see {@link PanelProps}
 */
export declare const Panel: ({ heading, size, opened, closeable, onClose, className, children, ...props }: PanelProps) => ReactNode;
export {};
//# sourceMappingURL=Panel.component.d.ts.map