import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutGrid, GridArea } from '@/components/design-system/LayoutGrid/LayoutGrid';
import { Grid } from '@/components/design-system/Grid/Grid';
import { Table } from '@/components/design-system/Table/Table';
import { TopologyMap } from '@/components/design-system/TopologyMap/TopologyMap';
import { ChartCard } from '@/components/design-system/Chart/ChartCard';
import { Navigation } from '@/components/design-system/Navigation/Navigation';
import { Breadcrumbs } from '@/components/design-system/Navigation/Breadcrumbs';
import { SubNav } from '@/components/design-system/Navigation/SubNav';
import { Image } from '@/components/design-system/Image/Image';
import { Collapsible } from '@/components/design-system/Layout/Collapsible';
import { Flex } from '@/components/design-system/Layout/Flex';
import { PageNavigation } from '@/components/design-system/Layout/PageNavigation';
import { Heading, Text } from '@/components/design-system/Layout/Typography';
import { DatePicker } from '@/components/design-system/DatePicker/DatePicker';
import { DateRangePicker } from '@/components/design-system/DatePicker/DateRangePicker';
import { Home, Settings, User, Mail, LayoutDashboard } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { DateRange } from 'react-day-picker';
import { FormControls } from './components/design-system/FormControls/FormControls';
import { ComplexTable } from './components/design-system/ComplexTable/ComplexTable';
import { Column } from './components/design-system/Table/types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';

type MockDataTable = {
  id: number;
  name: string;
  value: number;
}

type MockDataComplexTable = {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  lastLogin: string;
  actions: string;
}

function App() {
  const [date, setDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<DateRange>();
  const [currentPage, setCurrentPage] = useState(1);

  const mockData: MockDataTable[] = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 },
  ];

  const columns: Column<MockDataTable>[] = [
    { id: 'id', header: 'ID', accessorKey: 'id', size: 'XS' },
    { id: 'name', header: 'Name', accessorKey: 'name', size: 'M' },
    { id: 'value', header: 'Value', accessorKey: 'value', size: 'L' },
  ];

  // Mock data for complex table
  const mockDataComplexTable: MockDataComplexTable[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 2 === 0 ? 'active' : 'inactive',
    role: i % 3 === 0 ? 'Admin' : 'User',
    lastLogin: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    actions: 'View Details',
  }));

  const columnsComplexTable: Column<MockDataComplexTable>[] = [
    { id: 'id', header: 'ID', accessorKey: 'id', size: 'XS', sortable: true },
    { id: 'name', header: 'Name', accessorKey: 'name', size: 'M', sortable: true, filterable: true },
    { id: 'email', header: 'Email', accessorKey: 'email', size: 'L', filterable: true },
    { id: 'role', header: 'Role', accessorKey: 'role', size: 'M', sortable: true },
    { 
      id: 'status', 
      header: 'Status', 
      accessorKey: 'status', 
      size: 'M',
      formatter: (value: string) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
      sortable: true
    },
    { 
      id: 'lastLogin', 
      header: 'Last Login', 
      accessorKey: 'lastLogin', 
      size: 'L',
      formatter: (value: string) => new Date(value).toLocaleString(),
      sortable: true
    },
  ];


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
        { id: 'analytics', label: 'Analytics', href: '/analytics' },
        { id: 'reports', label: 'Reports', href: '/reports' },
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
    { id: 'profile', label: 'Profile', icon: <User className="h-4 w-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
    { id: 'messages', label: 'Messages', icon: <Mail className="h-4 w-4" /> },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const mockTerrainData = {
    elevation: Array(100).fill(Array(100).fill(0)).map((row, i) =>
      // @ts-ignore
      row.map((_, j) => Math.sin(i / 10) * Math.cos(j / 10) * 5)
    ),
    resolution: 1,
    bounds: {
      north: 50,
      south: -50,
      east: 50,
      west: -50,
    },
  };

  const mapOverlays = [
    {
      id: '1',
      type: 'marker' as const,
      coordinates: [{ latitude: 0, longitude: 0, altitude: 5 }],
      content: <div>Point of Interest</div>,
      style: { color: '#ff0000' },
    },
  ];

  return (
    <div className="container mx-auto p-4 min-h-screen bg-background text-foreground">
      <Tabs defaultValue="layoutGrid" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-11">
          <TabsTrigger value="layoutGrid">Layout Grid</TabsTrigger>
          <TabsTrigger value="grid">Grid</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="datePicker">Date Picker</TabsTrigger>
          <TabsTrigger value="formControls">Form Controls</TabsTrigger>
          <TabsTrigger value="complexTable">Complex Table</TabsTrigger>
        </TabsList>

        <TabsContent value="layoutGrid" className="mt-6">
          <LayoutGridShowcase />
        </TabsContent>

        <TabsContent value="grid" className="mt-6">
          <Card className="p-6">
            <Grid
              items={mockData}
              renderItem={(item) => (
                <Card>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>Value: {item.value}</CardContent>
                </Card>
              )}
              columns={3}
              gap={4}
            />
          </Card>
        </TabsContent>

        <TabsContent value="table" className="mt-6">
          <Card className="p-6">
            <Table
              data={mockData}
              columns={columns}
              stickyHeader
              resizableColumns
            />
          </Card>
        </TabsContent>

        <TabsContent value="charts" className="mt-6">
          <Card className="p-6">
            <ChartCard
              title="Sales Overview"
              subtitle="Monthly sales data"
              data={chartData}
              type="line"
              showLegend
              showFilters
            />
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="mt-6">
          <Card className="p-6 space-y-6">
            <div>
              <Heading level={3} className="mb-4">Top Navigation</Heading>
              <Navigation items={navigationItems} position="top" />
            </div>
            <div>
              <Heading level={3} className="mb-4">Breadcrumbs</Heading>
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div>
              <Heading level={3} className="mb-4">Sub Navigation</Heading>
              <SubNav items={subNavItems} />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="mt-6">
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Heading level={3} className="mb-4">Responsive Image</Heading>
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
                  alt="Mountain landscape"
                  aspectRatio={16/9}
                  className="rounded-lg"
                />
              </div>
              <div>
                <Heading level={3} className="mb-4">Image Carousel</Heading>
                <Carousel>
                  <CarouselContent>
                    {[1, 2, 3].map((i) => (
                      <CarouselItem key={i}>
                        <Image
                          src={`https://images.unsplash.com/photo-${1506905925346 + i}-21bda4d32df4`}
                          alt={`Slide ${i}`}
                          aspectRatio={16/9}
                          className="rounded-lg"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <Card className="p-6 space-y-6">
            <div>
              <Heading level={3} className="mb-4">Flex Layout</Heading>
              <Flex justify="between" align="center" className="bg-muted p-4 rounded-lg">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
              </Flex>
            </div>
            <div>
              <Heading level={3} className="mb-4">Collapsible Sections</Heading>
              <div className="space-y-2">
                <Collapsible title="Section 1">
                  <p>Content for section 1</p>
                </Collapsible>
                <Collapsible title="Section 2">
                  <p>Content for section 2</p>
                </Collapsible>
              </div>
            </div>
            <div>
              <Heading level={3} className="mb-4">Pagination</Heading>
              <PageNavigation
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <Card className="p-6">
            <TopologyMap
              center={{ latitude: 0, longitude: 0 }}
              zoom={12}
              terrain={mockTerrainData}
              overlays={mapOverlays}
              height={400}
            />
          </Card>
        </TabsContent>

        <TabsContent value="datePicker" className="mt-6">
          <Card className="p-6">
            <Heading level={2} className="mb-6">Date Picker Components</Heading>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Heading level={3} className="mb-4">Single Date Picker</Heading>
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  className="w-[300px]"
                />
                {date && (
                  <Text className="mt-2">
                    Selected date: {date.toLocaleDateString()}
                  </Text>
                )}
              </div>
              <div>
                <Heading level={3} className="mb-4">Date Range Picker</Heading>
                <DateRangePicker
                  dateRange={dateRange}
                  onDateRangeChange={setDateRange}
                  className="w-[300px]"
                />
                {dateRange?.from && (
                  <Text className="mt-2">
                    Selected range: {dateRange.from.toLocaleDateString()}
                    {dateRange.to ? ` - ${dateRange.to.toLocaleDateString()}` : ''}
                  </Text>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="formControls" className="mt-6">
          <FormControls />
          <br />
          <div className="space-y-2 flex flex-col gap-8 w-96">
            <Label>Alert Dialog</Label>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </TabsContent>

        <TabsContent value="complexTable" className="mt-6">
          <ComplexTable
            data={mockDataComplexTable}
            columns={columnsComplexTable}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function LayoutGridShowcase() {
  const mockData: MockDataTable[] = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 },
  ];

  const columns: Column<MockDataTable>[] = [
    { id: 'id', header: 'ID', accessorKey: 'id', size: 'XS' },
    { id: 'name', header: 'Name', accessorKey: 'name', size: 'M' },
    { id: 'value', header: 'Value', accessorKey: 'value', size: 'L' },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Simple Grid Layout</CardTitle>
        </CardHeader>
        <CardContent>
          <LayoutGrid columns={2} gap={4}>
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
          </LayoutGrid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Complex Dashboard Layout</CardTitle>
        </CardHeader>
        <CardContent>
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
                <CardContent className="text-sm text-muted-foreground p-8 h-full flex items-center justify-center">
                  Footer Content
                </CardContent>
              </Card>
            </GridArea>
          </LayoutGrid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Collapsible List Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <LayoutGrid columns={1} gap={4}>
            {[1, 2, 3].map((i) => (
              <Collapsible key={i} title={`Section ${i}`}>
                <div className="p-4">Content for section {i}</div>
              </Collapsible>
            ))}
          </LayoutGrid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Carousel Grid</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}

export default App;