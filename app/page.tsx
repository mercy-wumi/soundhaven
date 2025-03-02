"use client";

import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import { redirect } from "next/navigation";

import { useWallet } from "@solana/wallet-adapter-react";

import Navbar from "../components/Navbar";
import NowPlaying from "../components/NowPlaying";
import PlaylistCard from "../components/PlaylistCard";
import { listOfSongs } from "../components/NowPlaying";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { tRootState } from "@/store";
import { useEffect } from "react";
import { resetUserInfo } from "@/store/reducers/appReducer";

export default function Home() {
  const { publicKey } = useWallet();
  const dispatch = useDispatch();

  const userInfo = useSelector((state: tRootState) => state.app.user);

  useEffect(() => {
    if (!publicKey) {
      dispatch(resetUserInfo());
    }
  }, [publicKey, dispatch]);

  if (!userInfo) return redirect("/login");

  return (
    <>
      <div className="h-screen flex w-[1440px] mx-auto">
        <div className="w-[200px]">
          <Navbar />
        </div>
        <div className="w-[100%] py-10 px-6 h-screen overflow-y-scroll relative ">
          <div className="flex justify-between items-center fixed w-[1240px] z-30 mx-auto top-4">
            <div className="flex border-b-[1px] p-2 gap-2 min-w-[600px] items-center">
              <Image src="/search.svg" width={24} height={24} alt="search" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent"
              />
            </div>
            <div className="flex gap-4 items-center">
              <WalletMultiButton>{`${userInfo.owner
                .toString()
                .substring(0, 7)}...`}</WalletMultiButton>
              <Image
                src={userInfo?.profileImg}
                width={50}
                height={50}
                alt="profile"
                className="rounded-full bg-white p-1"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-16">
            <div className="w-2/3 px-6">
              <div className="relative mb-8 h-[250px]">
                <Image
                  src="/music4.avif"
                  alt="album"
                  width={600}
                  height={300}
                  className="rounded-2xl w-full h-full object-cover absolute top-0 left-0 opacity-70"
                />
                <div className="relative flex flex-col justify-between p-8 h-full">
                  <span className="text-sm mb-2">Calum Scott</span>
                  <p className="text-2xl font-semibold">Cross my mind</p>
                  <button className="px-4 py-2 bg-white rounded-3xl text-black w-fit mt-auto font-semibold flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillOpacity="0"
                        stroke="currentColor"
                        strokeDasharray="40"
                        strokeDashoffset="40"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 6l10 6l-10 6Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="0.5s"
                          dur="0.5s"
                          values="0;1"
                        />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.5s"
                          values="40;0"
                        />
                      </path>
                    </svg>
                    Listen now
                  </button>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between mb-4">
                  <p className="text-lg font-semibold">Playlists for you</p>
                  <span>View all</span>
                </div>
                <PlaylistCard />
                <div className="flex justify-between mb-4 mt-6">
                  <p className="text-lg font-semibold">You may like also</p>
                  <span>View all</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {listOfSongs.map((song, i) => (
                    <div
                      className="flex hover:bg-neutral-700 cursor-pointer p-2 w-full justify-between mb-2"
                      key={i}
                    >
                      <div className="flex gap-4 items-center">
                        <Image
                          src={song.songImg}
                          alt="playing"
                          className="rounded-lg w-[50px] h-[50px] object-cover"
                          width={50}
                          height={50}
                        />
                        <div>
                          <p className="text-base font-semibold">
                            {song.songName}
                          </p>
                          <span className="text-sm">{song.songArtist}</span>
                        </div>
                      </div>
                      <p className="text-sm">{song.songDuration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <NowPlaying />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
