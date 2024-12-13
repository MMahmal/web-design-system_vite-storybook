import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AutoExpandingTextarea } from './AutoExpandingTextarea';

const meta: Meta<typeof AutoExpandingTextarea> = {
  title: 'Design System/AutoExpandingTextarea',
  component: AutoExpandingTextarea,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AutoExpandingTextarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    value: '',
    onChange: (newValue: string) => console.log(newValue),
  },
};

export const WithValue = () => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <AutoExpandingTextarea
      placeholder="Type something..."
      value={inputValue}
      onChange={(newValue: string) => setInputValue(newValue)}
    />
  );
};


export const WithMaxHeights = () => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <AutoExpandingTextarea
      placeholder="Type something..."
      value={inputValue}
      onChange={(newValue: string) => setInputValue(newValue)}
      minHeight={50}
      maxHeight={200}
    />
  );
};
