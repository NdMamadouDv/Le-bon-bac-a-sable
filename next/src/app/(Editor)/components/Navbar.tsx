import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-yellow-300">
      <h1> Netoryeti</h1>
      <Link href="/"> Vers la page d'accueil</Link>
    </div>
  );
};

export default Navbar;
