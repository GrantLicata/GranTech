import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function Layout({ children }) {
  return (
    <>
      <div className="relative flex w-full flex-col">
        <Navbar />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
