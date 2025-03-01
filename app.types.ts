import { PublicKey } from "@solana/web3.js";

export type tUser = {
  owner: PublicKey;
  name: string;
  profileImg: string;
  description: string;
  isArtist: boolean;
  hasPaid: boolean;
  songCount: number;
  likes: number;
};

export type tSong = {
  songTitle: string;
  songUrl: string;
  songOwner: PublicKey;
};

export type tSongs = tSong[];

export type tPayment = {
  wallet: string;
};
