import { default as React } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { DataGrid } from './DataGrid.component';
import { DataGridRow } from '../DataGridRow';
type TemplateProps = {
    hideHead?: boolean;
    includeColSpanRow?: boolean;
} & React.ComponentProps<typeof DataGrid>;
type DataGridRowStoryProps = {
    items: {
        content: string;
    }[];
} & React.ComponentProps<typeof DataGridRow>;
declare const meta: Meta<typeof DataGrid>;
export default meta;
export declare const Default: StoryObj<TemplateProps>;
export declare const EqualColumnSize: StoryObj<TemplateProps>;
export declare const ColumnMinSize: StoryObj<TemplateProps>;
export declare const MinimumSizedColumns: StoryObj<TemplateProps>;
export declare const CustomGridTemplate: StoryObj<TemplateProps>;
export declare const NoHead: StoryObj<TemplateProps>;
export declare const ColSpanCell: StoryObj<TemplateProps>;
export declare const HoverableRow: StoryObj<DataGridRowStoryProps>;
export declare const HoverableRowWithInteractableElements: StoryObj<DataGridRowStoryProps>;
//# sourceMappingURL=DataGrid.stories.d.ts.map