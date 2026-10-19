import { default as React, ReactElement } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { DescriptionTermProps } from '../DescriptionTerm';
import { DescriptionDefinitionProps } from '../DescriptionDefinition';
interface DescriptionListContextValue {
    termWidth?: string;
    gridColumnTemplate?: string;
}
export declare const DescriptionListContext: React.Context<DescriptionListContextValue>;
export declare const useDescriptionListContext: () => DescriptionListContextValue;
export interface DescriptionListProps {
    /**
     * Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
     * Supports multiple instances to create a detailed list of terms and definitions.
     * When multiColumn is true, children should be DescriptionListColumn elements.
     */
    children: ReactElement<DescriptionTermProps | DescriptionDefinitionProps> | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>> | ReactElement<"div">;
    /**
     * Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.
     */
    alignTerms?: "left" | "right";
    /**
     * When true, switches the layout to flex so that DescriptionListColumn children render side by side.
     */
    multiColumn?: boolean;
    /**
     * Controls the width of the term column. Accepts "auto" (default — terms size to their content),
     * a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
     * The definition column takes the remaining space. Has no effect when multiColumn is true.
     * When used with multiColumn, this value is inherited by DescriptionListColumn children unless they set their own termWidth.
     */
    termWidth?: string;
    /** Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherited by DescriptionListColumn children via context unless they set their own gridColumnTemplate. */
    gridColumnTemplate?: string;
    /**
     * Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.
     */
    className?: string;
}
/**
 * A component that semantically represents a list of terms and their corresponding descriptions.
 * This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
 * aligning them according to the specified terms alignment.
 */
export declare const DescriptionList: React.FC<DescriptionListProps>;
export declare const DL: React.FC<DescriptionListProps>;
export {};
//# sourceMappingURL=DescriptionList.component.d.ts.map