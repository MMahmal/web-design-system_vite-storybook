import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Column } from './types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const meta = {
  title: 'Design System/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table<User>>;

const mockData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'inactive',
  },
];

const columns: Column<User>[] = [
  {
    id: 'id',
    header: 'ID',
    accessorKey: 'id',
    size: 'XS',
    sortable: true,
  },
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    size: 'M',
    sortable: true,
    filterable: true,
  },
  {
    id: 'email',
    header: 'Email',
    accessorKey: 'email',
    size: 'L',
    filterable: true,
  },
  {
    id: 'role',
    header: 'Role',
    accessorKey: 'role',
    size: 'S',
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    size: 'S',
    formatter: (value: string) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {value}
      </span>
    ),
  },
];

export const Default: Story = {
  args: {
    data: mockData,
    columns: columns,
  },
};

export const StickyHeader: Story = {
  args: {
    data: mockData,
    columns: columns,
    stickyHeader: true,
  },
};

export const ResizableColumns: Story = {
  args: {
    data: mockData,
    columns: columns,
    resizableColumns: true,
  },
};

export const ExpandableRows: Story = {
  args: {
    data: mockData,
    columns: columns,
    expandableRows: true,
    renderExpandedRow: (row: User) => (
      <div className="p-4">
        <h3 className="text-lg font-semibold">Additional Details</h3>
        <p>User ID: {row.id}</p>
        <p>Full Name: {row.name}</p>
        <p>Contact: {row.email}</p>
      </div>
    ),
  },
};