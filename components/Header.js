"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(pathname);
  const categories = ["home", "about", "contact", "NEWS"];

  const isActive = (path) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <>
      <div className="flex justify-between font-medium p-5 shadow-lg items-center">
        <div className="hidden md:flex">
          <p className="">
            <span className="text-red-500 font-bold text-2xl">U</span>
            <span className="text-[#660066]">NICORN-100</span>
          </p>
        </div>
        <div>
          <nav className="flex gap-4">
            {categories.map((category) => {
              return (
                <NavLink
                  key={category}
                  category={category}
                  isActive={isActive(category)}
                />
              );
            })}

            <Link href="/createPost" className="">
              <AddCircleIcon className="text-3xl text-red-500 bg-gray-200 rounded-full border-yellow-500 p-[1px] hover:scale-125" />
            </Link>
            {/* <NavLink /> */}
          </nav>
        </div>

        {/* Profile */}
        <div className=" " onClick={signOut}>
          {session && (
            <div className="flex cursor-pointer gap-3 items-center ">
              <p className="pl-4 text-sm hidden md:flex">{session.user.name}</p>
              <img
                src={session.user.image}
                alt=""
                className="h-8 rounded-full gap-3"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
