import { ReactNode, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `AppBody` component serves as the main container for the body of your application.
 * It is specifically useful when you require manual setup of the app's layout, providing
 * flexibility and control over the structure of the application body. For most cases,
 * consider using the `AppShell` component which encompasses more features suitable for
 * typical application scaffolding.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-appbody--docs
 * @see {@link AppBodyProps}
 */
export declare const AppBody: ({ className, children, ...props }: AppBodyProps) => ReactNode;
export interface AppBodyProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Add custom class name to style the component.
     * @default ""
     */
    className?: string;
    /**
     * The content to be rendered inside the AppBody component.
     */
    children?: ReactNode;
}
//# sourceMappingURL=AppBody.component.d.ts.map