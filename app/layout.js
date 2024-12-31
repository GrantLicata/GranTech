import "./globals.css";
import Sidebar from "@/app/(main)/_components/sidebar";

export const metadata = {
  title: "GranTech Product Rankings",
  description:
    "Technical product ranking made simple for the average consumer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">{children}</body>
    </html>
  );
}
