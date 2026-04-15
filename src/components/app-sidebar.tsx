"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.

  
  const ADMIN_navMain=[
    {
      title: "Admin Dash",
      url: "#",
      icon: "SquareTerminal",
      isActive: "true",
      
      items:[
     {
      title: "History",
      logo: AudioWaveform,
     
    },
    {
      title: "Starred",
        url: "#",
    },
    {
       title: "Settings",
        url: "#",
    },
  ],
},
];
  
  const TUTOR_navMain=[
    {
      title: "Tutor Dash",
      url: "#",
      icon: "SquareTerminal",
      isActive: "true",
      
      items:[
     {
      title: "History",
        url: "#",
    },
    {
    title: "Starred",
        url: "#",
    },
    {
      title: "Settings",
        url: "#",
    },
  ],
},
];
  
  const STUDENT_navMain=[
    {
      title: "Student Dash",
      url: "#",
      icon: "SquareTerminal",
      isActive: "true",
      
      items:[
    {    
     title: "History",
        url: "#",
    },
    {
      title: "Starred",
        url: "#",
    },
    {
     title: "Settings",
        url: "#",
    },
  ],
},
];
  

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    userRole:"ADMIN" | "TUTOR" | "STUDENT"  
}


export function AppSidebar({userRole, ...props }: AppSidebarProps) {
  
  let naVItem=null;
   if(userRole === "ADMIN"){
    naVItem=ADMIN_navMain
   }else if(userRole === "TUTOR"){
    naVItem=TUTOR_navMain
   }else{
    naVItem=STUDENT_navMain
   }
   
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={naVItem! } />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
