"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <div>
      <nav>
        <ul className="flex gap-10">
          <li className="relative block">
            <Link
              className={`link ${pathname === "/" ? "before:absolute before:content-[''] before:bg-cyan-500 before:z-[-1] before:scale-[1.2] before:-rotate-2 before:block before:rounded-md before:h-full before:w-full text-white active" : ""} inset-0 p-4 `}
              href="/"
            >
              Dashboard
            </Link>
          </li>
          <li className="relative block">
            <Link
              className={`link ${pathname === "/details" ? "before:absolute before:content-[''] before:bg-cyan-500 before:z-[-1] before:scale-[1.2] before:-rotate-2 before:block before:rounded-md before:h-full before:w-full text-white active" : ""} inset-0 p-4`}
              href="/details"
            >
              Visits
            </Link>
          </li>
          <li className="relative block">
            <Link
              className={`link ${pathname === "/users" ? "before:absolute before:content-[''] before:bg-cyan-500 before:z-[-1] before:scale-[1.2] before:-rotate-2 before:block before:rounded-md before:h-full before:w-full text-white active" : ""} inset-0 p-4`}
              href="/users"
            >
              Visitors
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
