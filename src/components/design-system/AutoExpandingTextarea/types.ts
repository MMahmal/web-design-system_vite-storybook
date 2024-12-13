export interface AutoExpandingTextareaProps {
  maxHeight?: number;
  minHeight?: number;
  placeholder: string;
  onChange: (newValue: string) => void;
  value: string;
};
