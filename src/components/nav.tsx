"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToogle from "./ui/theme-toogle";
import Logo from "../assets/logo.svg";
import Image from "next/image";
// import Image from "next/image";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/visits", label: "Analytics" },
    { href: "/visitors", label: "Visitors" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <li className="relative block my-4 lg:my-0">
      <Link
        className={`link text-white ${
          pathname === href
            ? "before:absolute before:content-[''] before:bg-cyan-500 before:z-[-1] before:scale-[1.2] before:-rotate-1 md:before:-rotate-2 before:block before:rounded-md before:h-full before:w-full dark:text-white active"
            : ""
        } inset-0 p-4 `}
        href={href}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="border-gray-200 border-b fixed top-0 w-full z-10 bg-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 md:gap-10 justify-between h-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                alt="dashboard logo"
                src={"/logo.svg"}
                width={155}
                height={60}
                className="w-[155px] md:w-[195px]"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </ul>
          </div>
          <div className="flex flex-1 md:flex-initial justify-end">
            <ThemeToogle />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white dark:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 py-3 sm:px-3">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
