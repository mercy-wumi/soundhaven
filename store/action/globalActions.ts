import {
    tUser,
    tSong,
    tPayment,
    tGlobalState
} from "@/utils/app.types";

import { PayloadAction } from "@reduxjs/toolkit";

export const globalActions = {
    setUser: (state: tGlobalState, action: PayloadAction<tUser>) => {
        state.user = action.payload
    },

    setSongs: (state: tGlobalState, action: PayloadAction<tSong[]>) => {
        state.songs = action.payload
    },

    setPayment: (state: tGlobalState, action: PayloadAction<tPayment>) => {
        state.payment = action.payload
    }
}