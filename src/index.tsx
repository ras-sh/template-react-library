import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "outline";
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
}

/**
 * Example Button component
 */
export function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded font-medium transition-colors";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
