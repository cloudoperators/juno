import { default as React, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export type DividerSpacing = "0" | "px" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96";
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Additional CSS class(es) to apply.
     * @default ""
     */
    className?: string;
    /**
     * Override the separator color. Pass a Tailwind `border-color` class, e.g. `jn:border-juno-blue-3`.
     */
    color?: string;
    /**
     * Adjust vertical spacing around the separator. Accepts any Tailwind spacing token.
     * @default "1"
     */
    spacing?: DividerSpacing;
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Divider.component.d.ts.map