"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const Navbar = () => {
  const scrolled = useScrollTop();

  useEffect(() => {
    console.log(scrolled);
  }, [scrolled]);

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <h1>grantech</h1>
    </div>
  );
};
