"use client";

import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import { SidebarAndHeaderBar } from "../components/SidebarAndHeaderBar";
import useSidebar from "../hooks/useSidebar";
import { ModuleItemContainer } from "./ModuleItemContainer";
import MalwareLogo from '../../../public/MalwareImg.png';
import PhishingLogo from '../../../public/PhishingImg.jpg';
import DdosLogo from '../../../public/DdosImg.jpg';
import MitmLogo from '../../../public/MitmImg.png';
import { StaticImageData } from "next/image";
import Timeline from "@mui/lab/Timeline";
import { DrawerHeader } from "../components/DrawerHeader";
import { Main } from "../components/Main";

export interface ModuleContent {
  image: StaticImageData;
  description: string;
  title: string;
  order: number;
  link: string;
}

export const ModuleData: ModuleContent[] = [
  {
    order: 1,
    title: "Malware",
    description: "Malware refers to a diverse array of harmful programs crafted to infiltrate, disrupt, or compromise computer systems and networks. It encompasses viruses, worms, trojans, ransomware, and spyware, among others, designed by cybercriminals to steal data, gain unauthorized access, or extort victims for financial gain.",
    image: MalwareLogo,
    link: "/malware"
  },
  {
    order: 2,
    title: "Phishing Scams",
    description: "Phishing scams involve deceptive tactics, such as fraudulent emails or websites, to trick individuals into divulging sensitive information like passwords or financial details. These scams often impersonate legitimate entities to manipulate victims into providing personal data, which is then exploited by cybercriminals.",
    image: PhishingLogo,
    link: "/phishing",
  },
  {
    order: 3,
    title: "Man in the middle attacks",
    description: "Man-in-the-middle (MitM) attacks occur when a malicious actor intercepts and possibly alters communication between two parties without their knowledge. By positioning themselves between the victim and intended recipient, attackers can eavesdrop on or manipulate data exchanged, potentially compromising sensitive information or injecting malicious content into the communication flow.",
    image: MitmLogo,
    link: "/mitm"
  },
  {
    order: 4,
    title: "DDOS Attacks",
    description: "Distributed Denial of Service (DDoS) attacks overwhelm targeted systems, networks, or services with a flood of traffic, rendering them inaccessible to legitimate users. Perpetrated by networks of compromised devices, often called botnets, DDoS attacks disrupt online services, causing financial losses and reputational damage to organizations while aiming to exhaust resources and disrupt operations.",
    image: DdosLogo,
    link: "/ddos"
  }
]


export default function Modules() {
  const { handleDrawerClose, handleDrawerOpen, open } = useSidebar();
  return (
    <Box sx={{ display: 'flex' }} >
      <SidebarAndHeaderBar />
      <Main open={open}>
        <DrawerHeader />
        <Stack alignItems={'center'} justifyContent={'center'} spacing={4}>
            {ModuleData.map((x) => (
              <ModuleItemContainer module={x} key={x.title}/>
            ))}
        </Stack> 
      </Main>
    </Box>
  )
}