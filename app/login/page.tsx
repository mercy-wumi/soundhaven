"use client";

import React, { useState } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { redirect } from "next/navigation";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { tRootState, tUser } from "@/utils/app.types";
import CreateUser from "@/components/CreateUser";

export default function Page() {
  const { publicKey } = useWallet();

  const [user, setUser] = useState<tUser | null>(null);

  const [createUser, setCreateUser] = useState(false);


  if (user) return redirect("/");

  return (
    <div className="flex">
      <Image
        src="/music9.avif"
        alt="vibes"
        width={500}
        height={1000}
        className="w-1/2 h-screen object-cover"
      />
      {!createUser ? (
        !publicKey ? (
          <div className="flex flex-col justify-center gap-3 items-center mx-auto w-1/2 text-white">
            <p className="mb-8 font-semibold">Get Started!</p>
            <p className="font-bold text-6xl">SoundHaven</p>
            <span className="text-xl">A safe space for music lovers. </span>
            <WalletMultiButton />
          </div>
        ) : (
          publicKey &&
          !user && (
            <div className="flex flex-col justify-center gap-3 items-center mx-auto w-1/2 text-white">
              <p className="mb-8 font-semibold">Get Started!</p>
              <p className="font-bold text-6xl">SoundHaven</p>
              <span className="text-xl">A safe space for music lovers. </span>
              <button
                className="px-6 py-2 bg-white rounded-xl text-black w-fit mt-6"
                onClick={() => setCreateUser(true)}
              >
                Create user
              </button>
            </div>
          )
        )
      ) : (
        <CreateUser />
      )}
    </div>
  );
}
