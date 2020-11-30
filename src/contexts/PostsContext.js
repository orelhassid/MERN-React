import React, { createContext, useReducer, useEffect } from "react";
import { getPosts } from "../actions/posts";
import useThunkReducer from "react-hook-thunk-reducer";
import postsReducer from "../reducers/posts";

export const PostsContext = createContext([]);

export default function PostsContextProvider({ children }) {
  //   const [state, dispatch] = useReducer(postsReducer, []);
  const [posts, dispatch] = useThunkReducer(postsReducer, []);

  useEffect(() => {
    dispatch(getPosts());
    // getPosts().then((action) => {
    //   dispatch(action);
    // });
  }, [dispatch]);
  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
}
