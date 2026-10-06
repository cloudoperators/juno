import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/** A PortalProvider.Portal component to directly use from within other components:
 *  ```
 *   <PortalProvider.Portal>
 *     <MyComponent />
 *   </PortalProvider.Portal>
 *  ```
 */
export declare const Portal: {
    ({ children }: PortalProviderPortalProps): ReactNode;
    displayName: string;
};
export interface PortalProviderPortalProps {
    /** The children to mount in a portal. Typically, these will be menus, modal dialogs, etc. */
    children?: ReactNode;
}
//# sourceMappingURL=PortalProvider.Portal.component.d.ts.map