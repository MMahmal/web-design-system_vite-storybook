import type { Meta, StoryObj } from '@storybook/react';
import { Home, Settings, User, Mail, LayoutDashboard } from 'lucide-react';
import { Navigation } from './Navigation';
import { Breadcrumbs } from './Breadcrumbs';
import { SubNav } from './SubNav';

const meta = {
  title: 'Design System/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className="h-4 w-4" />,
    children: [
      {
        id: 'analytics',
        label: 'Analytics',
        href: '/analytics',
      },
      {
        id: 'reports',
        label: 'Reports',
        href: '/reports',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: <Settings className="h-4 w-4" />,
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings' },
];

const subNavItems = [
  {
    id: 'profile',
    label: 'Profile',
    icon: <User className="h-4 w-4" />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <Mail className="h-4 w-4" />,
  },
];

export const TopNavigation: Story = {
  args: {
    items: navigationItems,
    position: 'top',
  },
};

export const LeftNavigation: Story = {
  args: {
    items: navigationItems,
    position: 'left',
  },
};

export const WithBreadcrumbs = () => (
  <div className="space-y-4">
    <Breadcrumbs items={breadcrumbItems} />
    <Navigation items={navigationItems} position="top" />
  </div>
);

export const WithSubNav = () => (
  <div className="space-y-4">
    <Navigation items={navigationItems} position="top" />
    <SubNav items={subNavItems} />
  </div>
);