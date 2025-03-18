import { connection, createSong, fetchAllSongs } from "@/anchor/setup";
import { useDispatch } from "react-redux";
import { useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { updateAllSongs } from "@/store/reducers/appReducer";

export default function CreateSong({
  setShowCreateSong,
}: {
  setShowCreateSong: (value: boolean) => void;
}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const { publicKey, sendTransaction } = useWallet();

  const handleCreateSong = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !url) return;

    setLoading(true);

    try {
      const Ix = await createSong(publicKey!, title, url);

      const transaction = new Transaction().add(Ix);
      const tx = await sendTransaction(transaction, connection);

      const confirmation = await connection.confirmTransaction(tx, "confirmed");

      if (!confirmation.value.err) {
        console.log("song created successfully");

        await fetchAllSongs()
          .then((res) => {
            dispatch(updateAllSongs(res.map((songs) => songs.account)));
          })
          .catch((err) => console.log(err));

        return;
      }
      throw new Error("Transaction not confirmed");
    } catch (err) {
      console.log((err as Error).message);
    } finally {
      setLoading(false);
      setShowCreateSong(false);
      setTitle("");
      setUrl("");
    }
  };
  return (
    <div className="absolute top-1/2 left-1/2 shadow-black z-20 bg-white text-black w-1/3 rounded-xl p-6 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-full flex justify-center items-center flex-col gap-2 z-20">
        <form
          onSubmit={handleCreateSong}
          className="flex flex-col justify-center gap-6 items-center mx-auto w-full"
        >
          <AiOutlineClose
            className="w-6 h-6 ml-auto cursor-pointer"
            onClick={() => setShowCreateSong(false)}
          />
          <div className="mb-6 text-center">
            <h4 className="text-4xl font-extrabold">Create Song</h4>
            <p className="mt-2">Unlock potential to unlimited listeners..</p>
          </div>
          <div className="flex flex-col gap-1 w-10/12">
            <label htmlFor="name">Song Name</label>
            <input
              type="text"
              id="name"
              placeholder="My song"
              className="w-full rounded-lg p-2 border outline-none text-black"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 w-10/12">
            <label htmlFor="img">Song Url</label>
            <input
              type="text"
              id="img"
              placeholder="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              className="w-full rounded-lg p-2 border outline-none text-black"
              autoComplete="off"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !title || !url}
            className="w-1/5 text-white font-bold p-2 bg-gradient-to-br from-[#fbda79] to-[#5416c8] rounded-xl mt-10"
          >
            {loading ? "Loading.." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}
