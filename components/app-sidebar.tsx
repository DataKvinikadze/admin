"use client";

import * as React from "react";
import {
  Book,
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  Newspaper,
  PieChart,
  Scale,
  Send,
  Settings2,
  SquareTerminal,
  Star,
} from "lucide-react";

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

const data = {
  user: {
    name: "Admin",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Legislation",
      url: "/legislation/view/International",
      icon: Scale,
      items: [
        {
          title: "International",
          url: "/legislation/view/international",
        },
        {
          title: "National",
          url: "/legislation/view/national",
        },
        {
          title: "Guideline",
          url: "/legislation/view/guideline",
        },
        {
          title: "Update",
          url: "/legislation/view/update",
        },
      ],
    },
    {
      title: "Ratings",
      url: "/ratings/credit",
      icon: Star,
      items: [
        {
          title: "Structured Finance",
          url: "/ratings/structured",
        },
        {
          title: "Credit",
          url: "/ratings/credit",
        },
        {
          title: "Governance",
          url: "/ratings/governance",
        },
      ],
    },
    {
      title: "Research",
      url: "/research",
      icon: BookOpen,
      items: [
        {
          title: "Credit",
          url: "/research/view/credit",
        },
        {
          title: "Market",
          url: "/research/view/market",
        },
        {
          title: "Governance",
          url: "/research/view/governance",
        },
        {
          title: "Policy",
          url: "/research/view/policy",
        },
        {
          title: "Other",
          url: "/research/view/other",
        },
      ],
    },
    {
      title: "Methodology",
      url: "/methodology",
      icon: Book,
    },
    {
      title:"News",
      url: "/news",
      icon: Newspaper 
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Capto Group</span>
                  <span className="truncate text-xs">Credit Rating Agency</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
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
