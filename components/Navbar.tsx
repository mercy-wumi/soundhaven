"use client";

import { tRootState } from "@/store";
import { useSelector } from "react-redux";

const style = {
  list: "mb-3 hover:text-lg hover:cursor-pointer",
};

export default function Navbar() {
  const userInfo = useSelector((state: tRootState) => state.app.user);

  return (
    <nav className="flex flex-col gap-20 h-screen relative py-10 px-6 rounded-r-3xl bg-black">
      <div className="flex gap-2 items-center font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M80 160h352M80 256h352M80 352h352"
            className="w-6"
          />
        </svg>
        <p>SoundHaven</p>
      </div>
      <ul>
        <li className={style.list}>Main</li>
        <li className={style.list}>Podcasts</li>
        <li className={style.list}>Books</li>
      </ul>
      <div>
        <p className="text-xl font-bold mb-3">My music</p>
        <ul>
          <li className={style.list}>Tracks</li>
          <li className={style.list}>Albums</li>
          <li className={style.list}>Artists</li>
          <li className={style.list}>Playlists</li>
          {userInfo?.isArtist && (
            <button className="px-4 py-2 bg-white rounded-xl text-black w-fit mt-6">
              Create song
            </button>
          )}
        </ul>
      </div>
      <ul className="absolute bottom-8">
        <li className={style.list}>setting</li>
        <li className={style.list}>Log out</li>
      </ul>
    </nav>
  );
}
