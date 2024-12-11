import { DateRange } from 'react-day-picker';

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date?: Date) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range?: DateRange) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}