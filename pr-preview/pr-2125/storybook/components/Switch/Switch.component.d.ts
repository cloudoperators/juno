import { ReactNode, ButtonHTMLAttributes, ChangeEvent, MouseEvent } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type SwitchSize = "small" | "default" | "large";
export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
    /**
     * HTML name attribute for the switch button
     */
    name?: string;
    /**
     * HTML id attribute for the switch button
     */
    id?: string;
    /**
     * Label to display next to the Switch component
     */
    label?: string;
    /**
     * Indicates if the Switch is required
     */
    required?: boolean;
    /**
     * Specifies the size of the Switch component
     */
    size?: SwitchSize;
    /**
     * Sets the initial checked state of the Switch component for use in uncontrolled mode
     */
    on?: boolean;
    /**
     * Disabled state of the Switch component
     */
    disabled?: boolean;
    /**
     * Indicates if the Switch has an error state
     */
    invalid?: boolean;
    /**
     * Indicates if the Switch has been validated successfully
     */
    valid?: boolean;
    /**
     * Help text to provide additional information about the Switch
     */
    helptext?: ReactNode;
    /**
     * Text to display when the Switch has validation errors
     */
    errortext?: ReactNode;
    /**
     * Text to display when the Switch has been validated successfully
     */
    successtext?: ReactNode;
    /**
     * Custom class name to apply to the internal button element
     */
    className?: string;
    /**
     * Callback function to handle changes to the switch state
     */
    onChange?: (event: ChangeEvent<HTMLButtonElement>) => void;
    /**
     * Callback function to handle click events on the switch
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Custom class name to apply to the wrapper element
     * Useful for styling and positioning the outermost element of the component
     */
    wrapperClassName?: string;
}
/**
 * A basic switch component for toggling between two options.
 * Use this component for interactions that produce immediate results.
 * For form scenarios requiring submission, use checkboxes instead.
 *
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-switch--docs
 * @see {@link SwitchProps}
 */
export declare const Switch: ({ name, id, label, required, size, on, disabled, invalid, valid, helptext, errortext, successtext, className, onChange, onClick, wrapperClassName, ...props }: SwitchProps) => ReactNode;
export {};
//# sourceMappingURL=Switch.component.d.ts.map