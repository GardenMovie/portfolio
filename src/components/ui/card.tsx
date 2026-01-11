import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  hoverEffect = false,
  shadowColor = "bg-primary",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm"; hoverEffect?: boolean; color?: string; shadowColor?: string }) {
  return (
    <div className={cn("relative", hoverEffect && "group/card-hover")}> 
      {/* Offset shadow card */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 translate-x-1 translate-y-1 z-0 rounded-xl shadow-lg transition-transform duration-300",
          shadowColor,
          // call Card hoverEffect = true to enable this effect
          hoverEffect && "group-hover/card-hover:translate-x-2 group-hover/card-hover:translate-y-2",
        )}
        style={{ pointerEvents: 'none' }}
      />
      <div
        data-slot="card"
        data-size={size}
        className={cn(
          "relative w-full bg-gradient-to-br from-neutral-100 from-30% via-90% via-neutral-200 to-neutral-100 text-card-foreground gap-6 overflow-hidden rounded-xl text-sm shadow-xs ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col transition-transform duration-300",
          hoverEffect && "group-hover/card-hover:-translate-x-1 group-hover/card-hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {/* Card content */}
        {props.children}
      </div>
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "gap-1 rounded-t-xl group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 group-data-[size=sm]/card:px-4", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
