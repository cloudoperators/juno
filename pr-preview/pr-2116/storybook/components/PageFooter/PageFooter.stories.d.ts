import { default as React } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { PageFooterProps } from './index';
declare const _default: {
    title: string;
    component: ({ className, children, copyright, ...props }: PageFooterProps) => React.ReactNode;
    argTypes: {
        children: {
            control: boolean;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        copyright: {
            control: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        className: {
            control: boolean;
        };
    };
};
export default _default;
export declare const WithCustomCopyright: {
    render: (args: PageFooterProps) => React.JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        copyright: string;
    };
};
export declare const InlineLinks: {
    render: (args: PageFooterProps) => React.JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        children: React.JSX.Element;
    };
};
export declare const WithTwoColumns: {
    render: (args: PageFooterProps) => React.JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        children: React.JSX.Element;
    };
};
export declare const WithThreeColumns: {
    render: (args: PageFooterProps) => React.JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        copyright: string;
        children: React.JSX.Element;
    };
};
//# sourceMappingURL=PageFooter.stories.d.ts.map