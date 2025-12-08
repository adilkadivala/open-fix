"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChartBar,
  Folder,
  LayoutDashboard,
  TrendingUpDown,
  TvIcon,
  Users,
} from "lucide-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Trends",
      url: "#",
      icon: TrendingUpDown,
    },
    {
      title: "Insights",
      url: "#",
      icon: ChartBar,
    },
    {
      title: "Categories",
      url: "#",
      icon: Folder,
    },
    {
      title: "Feed",
      url: "#",
      icon: Users,
    },
    {
      title: "Reports",
      url: "#",
      icon: Users,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton
            asChild
            className="data-[slot=sidebar-menu-button]:p-1.5!"
          >
            <a href="#">
              <TvIcon className="size-5" />
              <span className="text-base font-semibold">Acme Inc.</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
