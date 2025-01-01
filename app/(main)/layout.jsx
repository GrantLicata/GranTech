import React from "react";
import Sidebar from "./_components/sidebar";

export default function layout({ children }) {
  return (
    <div>
      <main className="h-full flex">
        <Sidebar />
        <div>{children}</div>
      </main>
    </div>
  );
}
