import Image from "next/image"

export const listOfSongs = [
  {
    songImg: "/music.jpg",
    songName: "No way no",
    songArtist: "Magic",
    songDuration: "03:45"
  }, 
  {
    songImg: "/music13.jpg",
    songName: "Rude",
    songArtist: "Magic",
    songDuration: "03:55"
  },
  {
    songImg: "/music5.webp",
    songName: "Red dress",
    songArtist: "Magic",
    songDuration: "02:45"
  },
  {
    songImg: "/music4.avif",
    songName: "No way no",
    songArtist: "Magic",
    songDuration: "03:45"
  }, 
  {
    songImg: "/music7.jpg",
    songName: "Rude",
    songArtist: "Magic",
    songDuration: "03:55"
  },
  {
    songImg: "/music8.avif",
    songName: "Red dress",
    songArtist: "Magic",
    songDuration: "02:45"
  },
  {
    songImg: "/music9.avif",
    songName: "No way no",
    songArtist: "Magic",
    songDuration: "03:45"
  }, 
  {
    songImg: "/music.jpg",
    songName: "Rude",
    songArtist: "Magic",
    songDuration: "03:55"
  },
  {
    songImg: "/music2.webp",
    songName: "Red dress",
    songArtist: "Magic",
    songDuration: "02:45"
  }, 
  {
    songImg: "/music11.jpg",
    songName: "Rude",
    songArtist: "Magic",
    songDuration: "03:55"
  },
  {
    songImg: "/music12.jpg",
    songName: "Red dress",
    songArtist: "Magic",
    songDuration: "02:45"
  }, 
]

export default function NowPlaying() {
  return (
    <div className="w-1/3">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-semibold">Now playing</p>
        <span>View all</span>
      </div>
    {listOfSongs.map((song, i) => (
      <div className="flex hover:bg-neutral-700 cursor-pointer p-2 w-full justify-between mb-2" key={i}>
        <div className="flex gap-4 items-center">
            <Image src={song.songImg} alt="playing" className="rounded-lg w-[50px] h-[50px] object-cover" width={50} height={50} />
            <div>
                <p className="text-base font-semibold">{song.songName}</p>
                <span className="text-sm">{song.songArtist}</span>
            </div>
        </div>
        <p className="text-sm">{song.songDuration}</p>
    </div>
    ))}
    </div>
  )
}
