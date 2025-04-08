"use client";
import { useRouter } from "next/navigation";
import { BsShopWindow } from "react-icons/bs";
import React from "react";
//========================================================================

export default function MarketplaceBadge() {
  //========================================================================
  const router = useRouter();
  //========================================================================
  return (
    <button
      onClick={() => router.push("/marketplace")}
      className="cursor-pointer flex items-center gap-1 px-3 py-1 rounded-full bg-white text-sm text-gray-800 border border-accent hover:bg-gray-100 transition"
    >
      <BsShopWindow size={18} className="text-accent mr-1" />
      <span >Window Shop ?</span>
    </button>
  );
}
//========================================================================