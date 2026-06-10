import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
});

export const createPost = createAsyncThunk("posts/createPost", async (postData) => {
  const response = await axios.post(`${API_URL}/posts`, postData);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  const response = await axios.delete(`${API_URL}/posts/${postId}`);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    filterText: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filterText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      });
  },
});

export const { setFilter } = postsSlice.actions;
export default postsSlice.reducer;