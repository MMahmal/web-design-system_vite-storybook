import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Collapsible } from './Collapsible';
import { PageNavigation } from './PageNavigation';
import { Heading, Text } from './Typography';

const meta = {
  title: 'Design System/Layout',
  parameters: {
    layout: 'centered',
  },
  component: Flex
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const FlexExample: Story = {
  render: () => (
    <Flex justify="between" align="center" className="w-full bg-muted p-4">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  ),
};

export const FlexLayout: Story = {
  render: () => (
    <Flex direction="column" gap={4}>
      <Flex justify="between" align="center" className="w-full bg-muted p-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="column" gap={2} className="bg-muted p-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    </Flex>
  ),
};

export const CollapsibleExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Collapsible title="Section 1">
        <p>Content for section 1</p>
      </Collapsible>
      <Collapsible title="Section 2" defaultOpen>
        <p>Content for section 2</p>
      </Collapsible>
    </div>
  ),
};

export const PageNavigationExample: Story = {
  render: () => (
    <PageNavigation
      currentPage={5}
      totalPages={10}
      onPageChange={console.log}
    />
  ),
};

export const TypographyExample: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>
      <div className="space-y-4">
        <Text>Default text</Text>
        <Text variant="muted">Muted text</Text>
        <Text variant="lead">Lead text</Text>
        <Text size="sm">Small text</Text>
        <Text size="lg">Large text</Text>
      </div>
    </div>
  ),
};
