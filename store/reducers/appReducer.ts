import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import { getState, saveState } from "../global";

import { tSongs, tUser } from "@/app.types";

type AppType = {
  user: tUser | null;
  songs: tSongs | null
};

const AppInitialState: AppType = {
  user: null,
  songs: null
};

const appSlice = createSlice({
  name: "app",
  initialState: getState<AppType>("app", AppInitialState),
  reducers: {
    updateUserInfo(state, { payload }: PayloadAction<tUser>) {
      state.user = payload;

      saveState("app", current(state));
    },

    resetUserInfo(state) {
      state.user = null;

      saveState("app", current(state));
    },

    updateAllSongs(state, { payload }: PayloadAction<tSongs>) {
      state.songs = payload;

      saveState("app", current(state));
    },
  },
});

export const { updateUserInfo, resetUserInfo, updateAllSongs } = appSlice.actions;

export default appSlice.reducer;
