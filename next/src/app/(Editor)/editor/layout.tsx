import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@/app/globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr" className={` `}>
      {/* navbar */}
      {/* Layout */}

      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
      {/* Layout */}
      {/* Footer */}
    </html>
  );
};

export default layout;
