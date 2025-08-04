// components/ui/button.tsx
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-2 font-semibold rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
