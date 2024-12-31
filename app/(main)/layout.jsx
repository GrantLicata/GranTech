import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

export default function layout({ children }) {
  return (
    <div>
      <main className="h-full flex">
        <Sidebar />
        <div>
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
}
