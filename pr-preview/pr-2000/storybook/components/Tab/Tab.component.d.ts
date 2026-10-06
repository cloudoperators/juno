import { HTMLProps, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
/**
 * A Tab Component representing an individual Tab inside a wrapping TabList inside a wrapping Tabs component. Not to be used standalone outside of the mentioned parent components.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-tab--docs
 * @see {@link TabProps}
 */
export declare const Tab: {
    ({ children, label, icon, disabled, className, ...props }: TabProps): ReactNode;
    tabsRole: string;
};
export interface TabProps extends Omit<HTMLProps<HTMLLIElement>, "tabIndex"> {
    /** The children to render inside the Tab (-button) */
    children?: ReactNode;
    /** The Tab label (only rendered when no children are supplied) */
    label?: string;
    /** Pass the name of an icon to render in the Tab. Can be any icon included with Juno. */
    icon?: KnownIcons;
    /** Whether the Tab is disabled */
    disabled?: boolean;
}
//# sourceMappingURL=Tab.component.d.ts.map