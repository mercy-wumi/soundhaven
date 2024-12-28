"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { redirect } from "next/navigation";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"

export default function Page() {

  const {connected, publicKey} = useWallet();

  if(connected) return redirect('/')
  return (
    <div className="flex">
      <Image src="/music9.avif" alt="vibes" width={500} height={1000} className="w-1/2 h-screen object-cover" />
      {publicKey ?
      <div className="flex flex-col justify-center gap-3 items-center mx-auto w-1/2 text-white">
        <p className="mb-8 font-semibold">Get Started!</p>
        <p className="font-bold text-6xl">SoundHaven</p>
        <span className="text-xl">A safe space for music lovers. </span>
      <WalletMultiButton />
      </div>
      :
      <div className="flex flex-col justify-center gap-3 items-center mx-auto w-1/2 text-white">
        <p className="mb-8 font-semibold">Get Started!</p>
        <p className="font-bold text-6xl">SoundHaven</p>
        <span className="text-xl">A safe space for music lovers. </span>
      </div>  
    }
      
    </div>
  )
}
