import { useState, useEffect } from "react";
import { callAPI } from "../../../helpers/network";
import { getJwt } from "../../../helpers/auth";

const useHome = () => {
  const [posts, setPosts] = useState();
  const loadPosts = async () => {
    const accessToken = localStorage.getItem("access_token");
    const headers = {};

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    const response = await callAPI({
      url: "/post/list",
      method: "get",
      params: {
        page: 1,
        size: 10,
      },
      headers,
    });
    const { data } = response;
    // localStorage.getItem("access_token", data.access_token);
    setPosts(response.data.data);
  };

  return {
    posts,
    loadPosts,
  };
};
export default useHome;
