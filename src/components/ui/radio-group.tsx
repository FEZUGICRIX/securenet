'use client';

import * as React from "react";

interface RadioGroupContextType {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextType | undefined>(undefined);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
}

export function RadioGroup({
  className = "",
  value,
  onValueChange,
  defaultValue,
  name,
  children,
  ...props
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || "");

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleValueChange = (val: string) => {
    setSelectedValue(val);
    onValueChange?.(val);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value: selectedValue,
        onValueChange: handleValueChange,
        name,
      }}
    >
      <div className={`grid gap-2 ${className}`} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  className?: string;
  id?: string;
}

export function RadioGroupItem({ className = "", value, id, ...props }: RadioGroupItemProps) {
  const context = React.useContext(RadioGroupContext);

  const isChecked = context?.value === value;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid double action from container clicks
    if (context?.onValueChange) {
      context.onValueChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={handleClick}>
      <div
        className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
          isChecked ? "bg-transparent" : "bg-transparent"
        } ${className}`}
      >
        {isChecked && (
          <div className="h-2 w-2 rounded-full bg-primary" />
        )}
      </div>
      <input
        type="radio"
        className="sr-only"
        checked={isChecked}
        value={value}
        onChange={() => {}}
        id={id}
        name={context?.name}
        {...props}
      />
    </div>
  );
}
