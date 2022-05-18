import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  loading: false,
  posts: [],
};

const slices = createSlice({
  initialState,
  name: "ListPost",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: action.payload,
      });
    },
  },
});

const { toggleLoading, setPosts } = slices.actions;

export const useListPostDispatcher = () => {
  const { listPost } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadPosts = async () => {
    try {
      const response = await axios({
        url: "/post/list",
        method: "get",
        // headers: {
        //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjUyNTAwMzAxLCJleHAiOjE2NTUwOTIzMDF9.KcrVjr9TqxHQTeh0thJYLO0tdi_Bc_S1Z6lG1qtndoo`,
        // },
      });
      const { data } = response;
      console.log("response > ", response.data.data);
      dispatch(setPosts(data.data));
    } catch (error) {}
  };
  return {
    listPost,
    loadPosts,
  };
};

export default slices.reducer;