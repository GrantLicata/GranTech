"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-gray-600 fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    ></div>
  );
};