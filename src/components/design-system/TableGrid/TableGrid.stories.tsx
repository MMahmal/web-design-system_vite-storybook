import type { Meta, StoryObj } from '@storybook/react';
import { TableGrid } from './TableGrid';
import { Column } from '../Table/types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const meta: Meta<typeof TableGrid> = {
  title: 'Design System/TableGrid',
  component: TableGrid,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TableGrid>;

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
  },
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    size: 'M',
  },
  {
    id: 'email',
    header: 'Email',
    accessorKey: 'email',
    size: 'L',
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