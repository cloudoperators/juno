import { default as React } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { BreadcrumbItemProps } from './BreadcrumbItem.component';
declare const _default: {
    title: string;
    component: ({ href, label, ariaLabel, active, children, disabled, onClick, className, icon, ...props }: BreadcrumbItemProps) => React.ReactNode;
    argTypes: {
        icon: {
            options: string[];
            control: {
                type: string;
            };
        };
        children: {
            control: boolean;
        };
    };
};
export default _default;
export declare const Default: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        label: string;
        onClick: undefined;
    };
};
export declare const WithIcon: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        icon: string;
        label: string;
        onClick: undefined;
    };
};
export declare const Active: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        label: string;
        active: boolean;
        onClick: undefined;
    };
};
export declare const Disabled: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        label: string;
        disabled: boolean;
        onClick: undefined;
    };
};
export declare const Link: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        label: string;
        href: string;
        onClick: undefined;
    };
};
export declare const Button: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        label: string;
        onClick: () => undefined;
    };
};
export declare const Home: {
    render: React.FC<BreadcrumbItemProps>;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        label: string;
        icon: string;
        onClick: undefined;
    };
};
//# sourceMappingURL=BreadcrumbItem.stories.d.ts.map