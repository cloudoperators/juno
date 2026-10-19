import { default as React } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface DescriptionListColumnProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    /**
     * Child components. Accepts DescriptionTerm and DescriptionDefinition elements, including
     * conditional expressions and ternaries that may resolve to null or false.
     */
    children?: React.ReactNode;
    /**
     * Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
     * a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
     * Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.
     */
    termWidth?: string;
    /** Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherits the parent DescriptionList's gridColumnTemplate when not set. Overrides the parent value when set. */
    gridColumnTemplate?: string;
}
/**
 * A column wrapper for use inside a multiColumn DescriptionList.
 * Re-establishes the grid context so that DT and DD elements render correctly within each column.
 * Note: passing a `style` prop will override the computed `gridTemplateColumns` — this is intentional,
 * giving consumers full escape-hatch access at their own responsibility.
 */
export declare const DescriptionListColumn: React.FC<DescriptionListColumnProps>;
export declare const DLC: React.FC<DescriptionListColumnProps>;
//# sourceMappingURL=DescriptionListColumn.component.d.ts.map