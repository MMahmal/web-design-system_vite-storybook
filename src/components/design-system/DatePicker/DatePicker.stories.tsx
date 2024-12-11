import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './DatePicker';
import { DateRangePicker } from './DateRangePicker';
import { DateRange } from 'react-day-picker';

const meta = {
  title: 'Design System/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SingleDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();
    return (
      <div className="w-[300px]">
        <DatePicker date={date} onDateChange={setDate} />
      </div>
    );
  },
};

export const DateRangeExample = () => {
  const [dateRange, setDateRange] = useState<DateRange>();
  return (
    <div className="w-[300px]">
      <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
    </div>
  );
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};