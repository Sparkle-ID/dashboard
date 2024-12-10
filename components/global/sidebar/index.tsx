"use client";
import { usePath } from "@/hooks/user-nav";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const {} = usePath();
  return (
    <div
      className='className="w-[250px] 
    border-2
    radial 
    fixed 
    left-0 
    lg:inline-block
    border-[#545454] 
    bg-gradient-to-b from-[#768BDD] 
    via-[#171717]
     to-[#768BDD] 
     hidden 
     bottom-0 
     top-0 
     m-3 
     rounded-3xl 
     overflow-hidden"'
    >
      <div
        className="
      flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       bg-[#0e0e0e] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
      >
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <Link href="/">
            <Image src={Logo} width={150} height={100} alt="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
