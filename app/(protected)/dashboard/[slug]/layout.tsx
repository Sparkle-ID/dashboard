"use client";

import Sidebar from "@/components/global/sidebar";
import React from "react";
import { ConnectKitButton } from "connectkit";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center p-3">
      <div>
        <Sidebar slug={params.slug} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectKitButton />
      </div>
    </div>
  );
};

export default Layout;
