import { cn } from "@/lib/utils";

//interface DashBoardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashBoardShell({
  children,
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  )
}