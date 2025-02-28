import { PublicKey } from "@solana/web3.js"

export type tUser = {
    owner: PublicKey,
    name: string,
    profileImg: string,
    description: string,
    isArtist: boolean,
    hasPaid: boolean,
    songCount: number,
    likes: number
}

export type tSong = {
    song_title: string,
    song_url: string,
    song_owner: string,
}

export type tPayment = {
    wallet: string
}
