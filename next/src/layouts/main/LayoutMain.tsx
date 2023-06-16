"use client";

import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  navFixed?: boolean;
};

const LayoutMain = ({ children, navFixed = false }: Props) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen">
      {pathname !== "/editor" && <Navigation fixed={navFixed} />}
      <main className="flex-grow">{children}</main>
      {pathname !== "/editor" && <Footer />}
    </div>
  );
};

export default LayoutMain;
