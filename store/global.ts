import { cloneDeep } from "lodash-es";

import { Entries } from "@/util.types";

type StateKeyType = "app";

const isClient = typeof window !== "undefined";

export const getState = <T extends object>(
  key: StateKeyType,
  InitialState: T
): T => {
  if (!isClient) return InitialState;

  const cachedState =
    JSON.parse(localStorage.getItem("appState") || "{}")[key] || {};

  const state: T = cloneDeep(InitialState);

  for (const [k, value] of Object.entries(state) as Entries<T>) {
    state[k] = cachedState[k] || value;
  }

  console.log(key, state);

  return state;
};

export const saveState = <T>(key: StateKeyType, state: T): void => {

  if (!isClient) return;
  
  const cachedState = JSON.parse(localStorage.getItem("appState") || "{}");
  cachedState[key] = state;
  localStorage.setItem("appState", JSON.stringify(cachedState));
};
