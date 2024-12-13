import React, { useRef, useState } from 'react';

export interface AutoExpandingTextareaProps {
  maxHeight?: number;
  minHeight?: number;
  placeholder: string;
  onChange: (newValue: string) => void;
  value: string;
}

export const AutoExpandingTextarea = ({
  maxHeight = 200,
  minHeight = 50,
  placeholder,
  onChange,
  value = '',
}: AutoExpandingTextareaProps) => {
  const [height, setHeight] = useState<number>(minHeight);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleOnInput = () => {
    if (!textareaRef.current) return;

    // reset if empty
    if (textareaRef.current.value === '') {
      setHeight(minHeight);
      return;
    }

    // auto resize height when user deletes a line, meaning that:
    // - user is not on the same line => scrollHeight !== height
    // - and scroll is not enabled => scrollHeight < maxHeight
    if (
      textareaRef.current.scrollHeight !== height &&
      textareaRef.current.scrollHeight < maxHeight
    ) {
      textareaRef.current.style.height = 'fit-content';
    }

    // make sure textarea height does not exceed maxHeight
    const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
    if (newHeight !== height) {
      setHeight(newHeight);
    }
  };

  return (
    <textarea
      data-testid="auto-expanding-textarea"
      ref={textareaRef}
      onChange={handleOnChange}
      onInput={handleOnInput}
      placeholder={placeholder}
      value={value}
      style={{
        height: `${height}px`,
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
        overflowY: height >= maxHeight ? 'auto' : 'hidden',
      }}
      className="resize-none w-full min-w-112 p-4 border border-gray-300 rounded-sm focus:ring-1 focus:ring-gray-900 focus:ring-opacity-50 focus:outline-none bg-white inline-flex items-center"
    />
  );
};

export default AutoExpandingTextarea;