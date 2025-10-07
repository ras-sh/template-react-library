import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

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
  /**
   * Custom styles
   */
  style?: CSSProperties;
}

/**
 * Example Button component
 */
export function Button({
  children,
  variant = "primary",
  size = "medium",
  style,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    borderRadius: "4px",
    fontWeight: 500,
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    border: "none",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#2563eb",
      color: "white",
    },
    secondary: {
      backgroundColor: "#4b5563",
      color: "white",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#2563eb",
      border: "2px solid #2563eb",
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: "0.25rem 0.75rem",
      fontSize: "0.875rem",
    },
    medium: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
    },
    large: {
      padding: "0.75rem 1.5rem",
      fontSize: "1.125rem",
    },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
