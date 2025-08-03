import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 items-center border-b-1 border-border px-14">
      {/* Logo */}
      <div>
        <Link href="/">
          <p className="uppercase font-bold text-xl text-primary">nmitd obe</p>
        </Link>
      </div>

      {/* nav links */}
      <ul className="flex justify-center items-center gap-12 text-gray">
        <li>About</li>
        <li>Features</li>
        <li>Contacts</li>
      </ul>

      {/* buttons */}
      <div className="flex items-center justify-center gap-3">
        <Link href="/login" className="text-button-background">
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-button-background px-4 py-2 rounded-[10px] text-white"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
