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
      url: "/legislation/International",
      icon: Scale,
      items: [
        {
          title: "International",
          url: "/legislation/international",
        },
        {
          title: "National",
          url: "/legislation/national",
        },
        {
          title: "Guideline",
          url: "/legislation/guideline",
        },
        {
          title: "Update",
          url: "/legislation/update",
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
          url: "/research/credit",
        },
        {
          title: "Market",
          url: "/research/market",
        },
        {
          title: "Governance",
          url: "/research/governance",
        },
        {
          title: "Policy",
          url: "/research/policy",
        },
        {
          title: "Other",
          url: "/research/other",
        },
      ],
    },
    {
      title: "Methodology",
      url: "/methodology",
      icon: Book,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
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
