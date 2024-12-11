import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta = {
  title: 'Design System/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    className: 'w-[400px] h-[300px] rounded-lg',
  },
};

export const WithAspectRatio: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    aspectRatio: 16 / 9,
    className: 'w-[400px] rounded-lg',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'invalid-url',
    alt: 'Invalid image',
    fallback: 'https://via.placeholder.com/400x300',
    className: 'w-[400px] h-[300px] rounded-lg',
  },
};