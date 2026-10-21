import { ReactNode, FormHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface SignInFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "title"> {
    /**
     * Title for the sign-in form.
     * Pass a string to display a custom title, omit or pass nothing to display default "Sign In".
     * Pass `false` to hide the title completely.
     */
    title?: string | false;
    /**
     * Error message to display when authentication fails.
     * Pass a string for a custom error message.
     * Pass `true` to display the default error message.
     * Pass `false` or omit to hide the error message.
     */
    error?: string | boolean;
    /**
     * URL for the password reset link.
     * Pass a valid URL string to display the "Reset password" link.
     * Pass `null` (default) or an empty string to hide the link.
     */
    resetPwUrl?: string | null;
    /**
     * Additional CSS classes to apply to the form for custom styling.
     */
    className?: string;
    /**
     * Form inputs and controls to render.
     * These are typically TextInput components for username and password,
     * optional Checkbox for "Remember me", or any additional inputs.
     * Automatic layout and spacing is applied to children via a Stack component.
     */
    children?: ReactNode;
}
/**
 * A SignInForm component that renders consistent, configurable sign-in forms.
 * Use this component to create authentication forms with a standard layout and styling.
 */
export declare const SignInForm: ({ title, error, resetPwUrl, className, children, ...props }: SignInFormProps) => ReactNode;
//# sourceMappingURL=SignInForm.component.d.ts.map