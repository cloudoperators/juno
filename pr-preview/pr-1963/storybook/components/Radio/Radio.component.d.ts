import { MouseEventHandler, ReactNode, InputHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * A controlled Radio component.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-radio--docs
 * @see {@link RadioProps}
 */
export declare const Radio: ({ checked, className, disabled, errortext, helptext, id, invalid, label, name, onChange, onClick, required, successtext, valid, value, wrapperClassName, ...props }: RadioProps) => ReactNode;
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    /** Whether the Radio is checked */
    checked?: boolean;
    /** Custom CSS class forwarded to the native radio input */
    className?: string;
    /** Whether the Radio is disabled */
    disabled?: boolean;
    /** A text to render when the Radio has an error or could not be validated */
    errortext?: ReactNode;
    /** A helptext to render to explain meaning and significance of the Radio */
    helptext?: ReactNode;
    /** The id of the Radio. An id will be automatically generated if not passed. */
    id?: string;
    /** Whether the Radio was validated unsuccessfully */
    invalid?: boolean;
    /** The label of the Radio */
    label?: string;
    /** The name attribute of the Radio. Only Radios sharing the same name attribute will work together as expected. */
    name?: string;
    /** Handler to execute when the Radio changes */
    onChange?: (value: string) => void;
    /** Handler to execute when the Radio is clicked */
    onClick?: MouseEventHandler<HTMLElement>;
    /** Whether the Radio is required */
    required?: boolean;
    /** A text to render when the Radio was successfully validated */
    successtext?: ReactNode;
    /** Whether the Radio was successfully validated */
    valid?: boolean;
    /** The value of the Radio */
    value?: string;
    /** Custom CSS class for styling the outer wrapper element */
    wrapperClassName?: string;
}
//# sourceMappingURL=Radio.component.d.ts.map