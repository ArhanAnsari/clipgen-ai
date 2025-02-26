"use client"

import * as React from "react"
import { ChevronDown, PenSquareIcon, PercentCircle, Plus, PlusCircleIcon, PlusIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "../ui/button"

export function AppLogo() {

  return (
<SidebarMenu>
  <div className="flex items-center justify-between px-2 py-2">
    <SidebarMenuItem>
      <div className="flex items-center gap-2">
        <div className="flex size-6 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
          <Image src="/logo.png" alt="Logo" className="rounded-md" width={40} height={40} />
        </div>
        <span className="font-semibold font-spaceGrotesk text-lg text-black dark:text-gray-100">ClipGen AI</span>
      </div>
    </SidebarMenuItem>
  </div>
</SidebarMenu>


  )
}
