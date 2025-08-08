"use client";

import { sideBarLinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import {} from

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-[20%] fixed top-0 left-0 h-screen bg-white border-r px-4 py-6">
      <h2 className="text-lg font-bold mb-6 text-primary cursor-pointer">
        <Link href="/">NMITD OBE</Link>
      </h2>
      <ul className="space-y-4">
        {sideBarLinks.map((element, index) => {
          const isActive =
            pathname === `/dashboard${element.link}` ||
            pathname === `${element.link}dashboard`;
          console.log(isActive);
          return (
            <li key={index}>
              <Link
                href={`/dashboard/${element.link}`}
                className={`flex items-center space-x-2 px-5 py-3 transition-all ease-in-out duration-75 rounded cursor-pointer font-semibold
                ${isActive ? "bg-button-background text-white" : "text-black hover:text-button-background"}
                `}
              >
                {element.icon}
                <span>{element.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
