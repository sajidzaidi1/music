'use client'


import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "../components/ui/Navbar-menu";
import { cn } from "../utilitiess/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Home Tag */}
        <Link href="/">
      <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            </div>
        </MenuItem>
        </Link>

        {/* Service Tag */}
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/basic-music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/advance">Advance Composition</HoveredLink>
            <HoveredLink href="/song-writting">Song Writting</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
           
          </div>
        </MenuItem>
        
        {/* Pricing Tag */}
        <MenuItem setActive={setActive} active={active} item="gallary">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/guitar">Guitar</HoveredLink>
            <HoveredLink href="/drum">Drum</HoveredLink>
            <HoveredLink href="/piano">Piano</HoveredLink>
            <HoveredLink href="/voilen">Voilen</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"} >
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            </div>
        </MenuItem>

        </Link>
        
      </Menu>
    </div>
  );
}


export default Navbar