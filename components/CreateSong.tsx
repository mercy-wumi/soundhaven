import { connection, createSong, fetchAllSongs } from "@/anchor/setup";
import { updateAllSongs } from "@/store/reducers/appReducer";
import { useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

export default function CreateSong() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const { publicKey, sendTransaction } = useWallet();

  const handleCreateSong = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(title, url);

    setLoading(true);

    try {
      const Ix = await createSong(publicKey!, title, url);

      const transaction = new Transaction().add(Ix);
      const tx = await sendTransaction(transaction, connection);

      const confirmation = await connection.confirmTransaction(tx, "confirmed");

      if (!confirmation.value.err) {
        console.log("song created successfully");

        const allSongs = await fetchAllSongs();

        console.log(allSongs);

        // const formattedSongs = allSongs.map((song) => ({
        //   songTitle: song.account.songTitle,
        //   songUrl: song.account.songUrl,
        //   songOwner: song.account.songOwner,
        // }));

        // dispatch(updateAllSongs(formattedSongs));

        return;
      }

      throw new Error("Transaction not confirmed");
    } catch (err) {
      console.log((err as Error).message);
    } finally {
      setLoading(false);
      setTitle("");
      setUrl("");
    }
  };
  return (
    <div className="w-full flex justify-center items-center flex-col gap-2 z-20">
      <form
        onSubmit={handleCreateSong}
        className="flex flex-col justify-center gap-6 items-center mx-auto w-full"
      >
        <div className="mb-6">
          <h4 className="text-4xl font-extrabold">Create Song</h4>
          <p className="mt-2">Unlock potential to unlimited listeners..</p>
        </div>
        <div className="flex flex-col gap-1 w-7/12 ">
          <label htmlFor="name">Song Name</label>
          <input
            type="text"
            id="name"
            placeholder="My song"
            className="w-full rounded-xl p-3 px-4 outline-none text-black"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-7/12 ">
          <label htmlFor="img">Song Url</label>
          <input
            type="text"
            id="img"
            placeholder="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            className="w-full rounded-xl p-3 px-4 outline-none text-black"
            autoComplete="off"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
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
