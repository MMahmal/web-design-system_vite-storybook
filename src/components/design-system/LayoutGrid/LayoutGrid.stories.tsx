import type { Meta, StoryObj } from '@storybook/react';
import { LayoutGrid, GridArea } from './LayoutGrid';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from '../Table/Table';
import { Collapsible } from '../Layout/Collapsible';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const meta = {
  title: 'Design System/LayoutGrid',
  component: LayoutGrid,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LayoutGrid>;

export default meta;
type Story = StoryObj<typeof LayoutGrid>;

const mockData = [
  { id: 1, name: 'Item 1', value: 100 },
  { id: 2, name: 'Item 2', value: 200 },
  { id: 3, name: 'Item 3', value: 300 },
];

const columns = [
  { id: 'id', header: 'ID', accessorKey: 'id', size: 'XS' },
  { id: 'name', header: 'Name', accessorKey: 'name', size: 'M' },
  { id: 'value', header: 'Value', accessorKey: 'value', size: 'L' },
];

export const SimpleGrid: Story = {
  args: {
    columns: 2,
    gap: 4,
    children: (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
          </CardHeader>
          <CardContent>Content 1</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
          </CardHeader>
          <CardContent>Content 2</CardContent>
        </Card>
      </>
    ),
  },
};

export const CollapsibleList = () => (
  <LayoutGrid columns={1} gap={4}>
    {[1, 2, 3].map((i) => (
      <Collapsible key={i} title={`Section ${i}`}>
        <div className="p-4">Content for section {i}</div>
      </Collapsible>
    ))}
  </LayoutGrid>
);

export const TableGrid = () => (
  <LayoutGrid
    areas={[
      '"header header"',
      '"sidebar main"',
      '"footer footer"',
    ]}
    columns={2}
    gap={4}
  >
    <GridArea name="header">
      <Card>
        <CardHeader>
          <CardTitle>Header</CardTitle>
        </CardHeader>
      </Card>
    </GridArea>
    <GridArea name="sidebar">
      <Card>
        <CardHeader>
          <CardTitle>Sidebar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="p-2 bg-muted rounded">Menu Item 1</div>
            <div className="p-2 bg-muted rounded">Menu Item 2</div>
            <div className="p-2 bg-muted rounded">Menu Item 3</div>
          </div>
        </CardContent>
      </Card>
    </GridArea>
    <GridArea name="main">
      <Card>
        <CardHeader>
          <CardTitle>Data Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table data={mockData} columns={columns} />
        </CardContent>
      </Card>
    </GridArea>
    <GridArea name="footer">
      <Card>
        <CardContent className="text-center text-sm text-muted-foreground">
          Footer Content
        </CardContent>
      </Card>
    </GridArea>
  </LayoutGrid>
);

export const CarouselGrid = () => (
  <LayoutGrid columns={2} gap={4}>
    <Card>
      <CardHeader>
        <CardTitle>Featured Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i}>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-xl font-semibold">Slide {i}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Total Users</span>
            <span>1,234</span>
          </div>
          <div className="flex justify-between">
            <span>Active Sessions</span>
            <span>567</span>
          </div>
          <div className="flex justify-between">
            <span>Revenue</span>
            <span>$89,012</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </LayoutGrid>
);