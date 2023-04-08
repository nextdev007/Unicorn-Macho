"use client";
import { signIn } from "next-auth/react";
import React from "react";

const UserLogin = () => {
  return (
    <div>
      <img
        src="https://thumbs.gfycat.com/DifferentMintyCottontail.webp"
        alt=""
        className="w-full h-[70vh]"
      />
      <div className="pt-16 flex flex-col items-center justify-center gap-y-4">
        <button
          onClick={() => signIn("google")}
          className="bg-black px-10 md:px-20 lg:px-32 xl:px-40 py-4 text-white rounded-md font-medium"
        >
          Sign WIth Google
        </button>
        <button className="bg-black px-10 md:px-20 lg:px-32 xl:px-40 py-4 text-white rounded-md font-medium">
          Sign WIth Facebook
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
