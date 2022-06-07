import { useState, useEffect } from "react";
import { callAPI } from "../../../helpers/network";
import { getJwt } from "../../../helpers/auth";
import axios from "axios";

const useHome = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("data"));
  const loadPosts = async () => {
    const accessToken = localStorage.getItem("access_token");
    const headers = {};

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
      headers.Accept = "application/json";
      headers["Content-Type"]= "application/json"
    }
    setLoading(true);
    const response = await callAPI({
      url: "/post/list",
      method: "get",
      params: {
        page: 0,
        size: 1000,
      },
      headers: {
        // Authorization: `Bearer ${user.access_token}`,
      }
      
    });

    const { data } = response;
    localStorage.getItem("access_token", data.data.access_token);
    console.log('jadi',response.data.data.content)
    setPosts(response.data.data);
    setLoading(false);

  };

  return {
    posts,
    loadPosts,
    loading,
  };
};
export default useHome;
