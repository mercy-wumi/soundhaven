"use client";

import React, { useEffect, useState } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import CreateUser from "@/components/CreateUser";
import { useSelector, useDispatch } from "react-redux";
import { tRootState } from "@/store";
import { fetchUser } from "@/anchor/setup";
import { updateUserInfo } from "@/store/reducers/appReducer";
import { useRouter } from "next/navigation";

export default function Page() {
  const { publicKey } = useWallet();
  const router = useRouter();
  const dispatch = useDispatch();

  const userInfo = useSelector((state: tRootState) => state.app.user);

  const [createUser, setCreateUser] = useState(false);

  if (userInfo) {
    router.push("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      if (publicKey) {
        const user = await fetchUser(publicKey);

        dispatch(updateUserInfo(user));
      }
    };

    fetchData();
  }, [publicKey, dispatch]);

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
          !userInfo && (
            <div className="flex flex-col justify-center gap-3 items-center mx-auto w-1/2 text-white">
              <WalletMultiButton />
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
