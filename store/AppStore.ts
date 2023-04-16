import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { AuthStore } from "./AuthStore";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [AuthStore.name]: AuthStore.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const AppStateWrapper = createWrapper<AppStore>(makeStore);
