import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/postsSlice";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <PostFilter />
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;