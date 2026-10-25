import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[var(--accent)] bg-[var(--accent)] px-5 text-[var(--accent-contrast)] hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)] hover:text-[var(--accent-hover-contrast)]",
        outline:
          "border-[var(--foreground)] bg-transparent px-5 text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
        quiet:
          "border-transparent bg-transparent px-2 text-[var(--foreground)] hover:text-[var(--accent-strong)]",
      },
      size: {
        default: "h-12",
        compact: "h-10 min-h-10",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  asChild = false,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
