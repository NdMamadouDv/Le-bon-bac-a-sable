import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h1> Netoryeti</h1>
      <Link href="/editor"> Vers l'editor</Link>
    </div>
  );
};

export default Navbar;
