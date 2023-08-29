import { configureStore } from "@reduxjs/toolkit";
import { initialData } from "./initialState";
import { tokenReducer } from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
  preloadedState: initialData,
});

store.subscribe(() => {
  localStorage.setItem("reduxStore", JSON.stringify(store.getState()));
});
// сохранение данных редакса в ls
