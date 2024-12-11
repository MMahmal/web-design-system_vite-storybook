import type { Meta, StoryObj } from '@storybook/react';
import { ScrollContainer } from './ScrollContainer';

const meta = {
  title: 'Design System/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollContainer>;

export default meta;
type Story = StoryObj<typeof ScrollContainer>;

const LargeContent = () => (
  <div className="space-y-4 p-4">
    {Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="p-4 bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <h3 className="text-lg font-semibold">Item {i + 1}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    ))}
  </div>
);

const HorizontalContent = () => (
  <div className="flex space-x-4 p-4">
    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-64 p-4 bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <h3 className="text-lg font-semibold">Card {i + 1}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Horizontal scrolling content
        </p>
      </div>
    ))}
  </div>
);

export const Vertical: Story = {
  args: {
    height: 400,
    width: 400,
    direction: 'vertical',
    children: <LargeContent />,
  },
};

export const Horizontal: Story = {
  args: {
    height: 200,
    width: 600,
    direction: 'horizontal',
    children: <HorizontalContent />,
  },
};

export const VirtualizedList: Story = {
  args: {
    height: 400,
    width: 400,
    virtualize: true,
    itemHeight: 100,
    children: Array.from({ length: 1000 }, (_, i) => (
      <div
        key={i}
        className="p-4 bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <h3 className="text-lg font-semibold">Virtual Item {i + 1}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Efficiently rendered using virtualization
        </p>
      </div>
    )),
  },
};

export const HiddenScrollbar: Story = {
  args: {
    height: 400,
    width: 400,
    hideScrollbar: true,
    children: <LargeContent />,
  },
};

export const SmoothScrollDisabled: Story = {
  args: {
    height: 400,
    width: 400,
    smoothScroll: false,
    children: <LargeContent />,
  },
};