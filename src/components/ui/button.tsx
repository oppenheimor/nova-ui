import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-text-inverse hover:opacity-85 active:opacity-60",
        default: "bg-brand-primary-black text-text-inverse hover:opacity-85 active:opacity-60 dark:text-black",
        secondary: "bg-brand-primary-black/5 text-text-primary hover:opacity-85 active:opacity-60",
        text: "text-base text-text-primary",
        link: "text-base text-brand-primary hover:opacity-85 active:opacity-60",
      },
      size: {
        xs: "h-6 min-w-[50px] rounded-full px-2 text-[11px]",
        sm: "h-7 min-w-[62px] rounded-full px-3 text-xs",
        base: "h-9 min-w-[76px] px-4 text-sm",
        lg: "h-11 min-w-[90px] px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
