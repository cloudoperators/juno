import { default as React, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { TextContainType } from '../../shared/textContain';
export interface DescriptionTermProps {
    /**
     * Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.
     */
    children: ReactNode;
    /**
     * Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.
     */
    className?: string;
    /**
     * Controls how the term handles text that exceeds its available space:
     * truncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced
     * breaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).
     *
     * The `truncate-*` values only take visible effect when the term has a bounded
     * width, which the parent `DescriptionList` column supplies.
     */
    textContain?: TextContainType;
}
/**
 * Represents a term in a description list, rendering an HTML <dt> element.
 * Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.
 */
export declare const DescriptionTerm: React.FC<DescriptionTermProps>;
export declare const DT: React.FC<DescriptionTermProps>;
//# sourceMappingURL=DescriptionTerm.component.d.ts.map