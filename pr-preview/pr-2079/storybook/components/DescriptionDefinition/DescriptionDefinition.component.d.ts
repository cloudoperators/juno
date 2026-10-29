import { default as React, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.1/node_modules/react';
import { TextContainType } from '../../shared/textContain';
export interface DescriptionDefinitionProps {
    /**
     * Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.
     */
    children: ReactNode;
    /**
     * Additional class names for applying custom styles or overriding default styles on the <dd> element.
     */
    className?: string;
    /**
     * Controls how the definition handles text that exceeds its available space:
     * truncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced
     * breaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).
     *
     * The `truncate-*` values only take visible effect when the definition has a bounded
     * width, which the parent `DescriptionList` column supplies.
     */
    textContain?: TextContainType;
}
/**
 * Represents the definition or description in a description list, rendering as an HTML <dd> element.
 * Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.
 */
export declare const DescriptionDefinition: React.FC<DescriptionDefinitionProps>;
export declare const DD: React.FC<DescriptionDefinitionProps>;
//# sourceMappingURL=DescriptionDefinition.component.d.ts.map