"use client";
import { SidebarNavItem } from "@/types";
import Link from "next/link";
import { Icon as Icons } from "./icon";
import { usePathname } from "next/navigation";

interface DashboardNavProps {
  items: SidebarNavItem[]
}

export default function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname()

  if (!items.length) {
    return null
  }

  return (
    <nav className="flex space-x-4">
      {items.map((item) => {
        const Icon = Icons[item.icon || "arrowRight"]

        return (
          <Link
            href={item.href!}
            key={item.href}
            className={`sm:flex sm:items-center sm:space-x-2 grid place-items-center rounded-md px-3 py-2 sm:text-sm text-xs font-medium hover:bg-accent hover:text-accent-foreground 
            ${path === item.href ? "bg-accent" : "bg-transparent"}`}
          >
            {Icon && <Icon className="h-4 w-4" />}
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}