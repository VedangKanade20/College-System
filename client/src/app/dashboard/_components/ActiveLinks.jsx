"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, icon, name }) {
  const pathname = usePathname();
  const isActive =
    pathname === `/dashboard${href}` || pathname === `${href}dashboard`;
  console.log("This is pathname", pathname);
  console.log("This is href", href);
  return (
    <Link
      href={`/dashboard/${href}`}
      className={`flex items-center space-x-2 px-5 py-3 transition-all ease-in-out duration-75 rounded cursor-pointer font-semibold
      ${isActive ? "bg-button-background text-white" : "text-black hover:text-button-background"}
      `}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
}
