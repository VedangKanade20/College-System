import { sideBarLinks } from "@/lib/utils";
import Link from "next/link";
import ActiveLink from "./ActiveLinks";

export default function Sidebar() {
  return (
    <div className="w-[20%] fixed top-0 left-0 h-screen bg-white border-r px-4 py-6 overflow-y-auto">
      <h2 className="text-lg font-bold mb-6 text-primary cursor-pointer">
        <Link href="/">NMITD OBE</Link>
      </h2>
      <ul className="space-y-4">
        {sideBarLinks.map((element, index) => {
          return (
            <li key={index}>
              <ActiveLink
                href={element.link}
                icon={element.icon}
                name={element.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
