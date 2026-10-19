import { default as React, ReactElement } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { DescriptionTermProps } from '../DescriptionTerm';
import { DescriptionDefinitionProps } from '../DescriptionDefinition';
export interface DescriptionListColumnProps {
    /**
     * Child components must be DescriptionTerm or DescriptionDefinition elements.
     */
    children: ReactElement<DescriptionTermProps | DescriptionDefinitionProps> | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>>;
    /**
     * Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
     * a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
     * Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.
     */
    termWidth?: string;
    /**
     * Additional custom class names.
     */
    className?: string;
}
/**
 * A column wrapper for use inside a multiColumn DescriptionList.
 * Re-establishes the grid context so that DT and DD elements render correctly within each column.
 */
export declare const DescriptionListColumn: React.FC<DescriptionListColumnProps>;
export declare const DLC: React.FC<DescriptionListColumnProps>;
//# sourceMappingURL=DescriptionListColumn.component.d.ts.map