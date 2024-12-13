import type { Meta, StoryObj } from '@storybook/react';
import { FormControls } from './FormControls';

const meta = {
  title: 'Design System/FormControls',
  parameters: {
    layout: 'centered',
  },
  component: FormControls
} satisfies Meta<typeof FormControls>;

export default meta;

type Story = StoryObj<typeof FormControls>;

export const FormControlsExample: Story = {
  render: () => <FormControls />,
};

