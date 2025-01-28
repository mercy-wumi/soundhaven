import Image from "next/image";

const playlistt = [
  {
    playlistImg: "/music8.avif",
    playlistTitle: "Something new",
    playlistTracks: "37 tracks"
  },
  {
    playlistImg: "/music3.webp",
    playlistTitle: "Fun/Vibes",
    playlistTracks: "30 tracks"
  },
  {
    playlistImg: "/music2.webp",
    playlistTitle: "Playlists of the day",
    playlistTracks: "28 tracks"
  }, 
  {
    playlistImg: "/music9.avif",
    playlistTitle: "Summer songs",
    playlistTracks: "15 tracks"
  }, 
  {
    playlistImg: "/music7.jpg",
    playlistTitle: "Christmas songs",
    playlistTracks: "20 tracks"
  }, 
  {
    playlistImg: "/music4.avif",
    playlistTitle: "Heartbreak",
    playlistTracks: "40 tracks"
  }, 
]

export default function PlaylistCard() {
    return (
      <div className="playlistCard">
      {playlistt.map((list, i) => (
        <div className="relative h-[150px] w-[150px] flex-shrink-0" key={i}>
        <Image src={list.playlistImg} alt="artist" width={150} className="w-[150px] h-[150px] object-cover rounded-xl absolute top-0 left-0 opacity-50" height={150} />
        <div className="flex flex-col justify-between relative z-10 p-2 h-[100%]">
            <p className="font-semibold">{list.playlistTitle}</p>
            <p>{list.playlistTracks}</p>
        </div>
      </div>
      ))}
      </div>
    );
  }
  