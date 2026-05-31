import * as React from "react";
import { Check } from "lucide-react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({
  className = "",
  checked = false,
  onCheckedChange,
  id,
  ...props
}: CheckboxProps) {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="sr-only"
        {...props}
      />
      <div
        onClick={() => onCheckedChange?.(!checked)}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border border-primary ring-offset-background transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ${
          checked ? "bg-primary text-primary-foreground" : "bg-transparent"
        } ${className}`}
      >
        {checked && <Check className="h-4.5 w-4.5 stroke-[3px]" />}
      </div>
    </div>
  );
}
