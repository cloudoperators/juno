import { default as React, ReactElement } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { DescriptionTermProps } from '../DescriptionTerm';
import { DescriptionDefinitionProps } from '../DescriptionDefinition';
export interface DescriptionListProps {
    /**
     * Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
     * Supports multiple instances to create a detailed list of terms and definitions.
     */
    children: ReactElement<DescriptionTermProps | DescriptionDefinitionProps> | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>> | ReactElement<"div">;
    /**
     * Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.
     */
    alignTerms?: "left" | "right";
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
//# sourceMappingURL=DescriptionList.component.d.ts.map