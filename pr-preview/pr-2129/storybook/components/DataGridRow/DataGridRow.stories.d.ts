import { default as React } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { DataGridRow } from './index';
import { DataGridProps } from '../DataGrid/index';
type DataGridRowStoryProps = {
    items: DataGridProps[];
} & React.ComponentProps<typeof DataGridRow>;
declare const meta: Meta<DataGridRowStoryProps>;
export default meta;
export declare const Default: StoryObj<DataGridRowStoryProps>;
export declare const HoverableRow: StoryObj<DataGridRowStoryProps>;
export declare const HoverableRowWithInteractableElements: StoryObj<DataGridRowStoryProps>;
export declare const SelectedRow: StoryObj<DataGridRowStoryProps>;
//# sourceMappingURL=DataGridRow.stories.d.ts.map