import { default as React, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface DescriptionDefinitionProps {
    /**
     * Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.
     */
    children: ReactNode;
    /**
     * Additional class names for applying custom styles or overriding default styles on the <dd> element.
     */
    className?: string;
}
/**
 * Represents the definition or description in a description list, rendering as an HTML <dd> element.
 * Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.
 */
export declare const DescriptionDefinition: React.FC<DescriptionDefinitionProps>;
export declare const DD: React.FC<DescriptionDefinitionProps>;
//# sourceMappingURL=DescriptionDefinition.component.d.ts.map