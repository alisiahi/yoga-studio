"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="">
          <Image
            src="/assets/img/logo.png"
            width={117}
            height={55}
            alt="logo"
            className="bg-primary p-2 rounded-sm"
          />
        </Link>
        {/* Mobile nav */}
        <MobileNav
          setOpenNav={setOpenNav}
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium text-white transition-all lg:hidden`}
        />
        {/* Desktop nav */}
        <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium transition-all hidden lg:flex" />

        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* login & register */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Login
            </button>
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Register
            </button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white lg:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
