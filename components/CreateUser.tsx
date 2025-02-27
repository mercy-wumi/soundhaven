"use client";

import { useState } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { redirect } from "next/navigation";
import { connection, createUser } from "@/anchor/setup";
import { Transaction } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function CreateUser() {
  const { publicKey, sendTransaction } = useWallet();

  if (!publicKey) return redirect("/login");

  const [loading, setLoading] = useState(false);

  const [userdetails, setUserDetails] = useState({
    name: "",
    img: "",
    bio: "",
    isArtist: "",
  });

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const Ix = await createUser(
        publicKey,
        userdetails.name,
        userdetails.img,
        userdetails.bio,
        !!userdetails.isArtist
      );

      const transaction = new Transaction().add(Ix);
      const tx = await sendTransaction(transaction, connection);

      const confirmation = await connection.confirmTransaction(tx, "confirmed");

      if (!confirmation.value.err) {
        console.log("user created successfully");
        return;
      }

      throw new Error("Transaction not confirmed");
    } catch (err) {
      console.log((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
      <WalletMultiButton />
      <form
        onSubmit={handleCreateUser}
        className="flex flex-col justify-center gap-6 items-center mx-auto w-full"
      >
        <div className="mb-6">
          <h4 className="text-4xl font-extrabold">Create User</h4>
          <p className="mt-2">Enter your details to get started</p>
        </div>
        <div className="flex flex-col gap-1 w-7/12 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John"
            className="w-full rounded-xl p-3 px-4 outline-none text-black"
            autoComplete="off"
            value={userdetails.name}
            onChange={(e) =>
              setUserDetails({
                ...userdetails,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1 w-7/12 ">
          <label htmlFor="img">Profile Image</label>
          <input
            type="text"
            id="img"
            placeholder="https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah"
            className="w-full rounded-xl p-3 px-4 outline-none text-black"
            autoComplete="off"
            value={userdetails.img}
            onChange={(e) =>
              setUserDetails({
                ...userdetails,
                img: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1 w-7/12 ">
          <label htmlFor="bio">Short bio about yourself</label>
          <input
            type="text"
            id="bio"
            placeholder="A rock n roll musician"
            className="w-full rounded-xl p-3 px-4 outline-none text-black"
            autoComplete="off"
            value={userdetails.bio}
            onChange={(e) =>
              setUserDetails({
                ...userdetails,
                bio: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1 w-7/12 ">
          <label htmlFor="isArtist">Are you an Artist?</label>
          <select
            name=""
            id="isArtist"
            className="w-full rounded-xl p-3 px-4 outline-none text-black"
            value={userdetails.isArtist}
            onChange={(e) =>
              setUserDetails({
                ...userdetails,
                isArtist: e.target.value,
              })
            }
          >
            <option value="">Select Option</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-1/5 text-white font-bold p-2 bg-gradient-to-br from-[#fbda79] to-[#5416c8] rounded-xl mt-10"
        >
          {loading ? "Loading.." : "Create"}
        </button>
      </form>
    </div>
  );
}
