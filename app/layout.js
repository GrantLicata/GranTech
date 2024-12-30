import "./globals.css";
import Sidebar from "@/components/navigation";

export const metadata = {
  title: "GranTech Product Rankings",
  description:
    "Technical product ranking made simple for the average consumer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
