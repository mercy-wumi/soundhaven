export type tUser = {
    owner: string,
    name: string,
    profile_img: string,
    description: string,
    is_artist: boolean,
    has_paid: boolean,
    song_count: number,
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

export type tGlobalState = {
    user: tUser | null,
    songs: tSong[],
    payment: tPayment | null
}

export type tRootState = {
    globalState: tGlobalState
}