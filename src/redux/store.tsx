import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categoriesSlice";
import topicsReducer from "./slice/topicsSlice";
import postsReducer from "./slice/postsSlice";

export const store = configureStore({
  reducer: {
    categoriesReducer,
    topicsReducer,
    postsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
