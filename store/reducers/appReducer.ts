import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import { getState, saveState } from "../global";

import { tUser } from "@/app.types";

type AppType = {
  user: tUser | null;
};

const AppInitialState: AppType = {
  user: null,
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
  },
});

export const { updateUserInfo, resetUserInfo } = appSlice.actions;

export default appSlice.reducer;
