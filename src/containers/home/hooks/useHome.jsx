import { useState, useEffect } from "react";
import { callAPI } from "../../../helpers/network";
import { getJwt } from "../../../helpers/auth";
import axios from "axios";

const useHome = () => {
  const [posts, setPosts] = useState();
  const loadPosts = async () => {
    const accessToken = localStorage.getItem("access_token");
    const headers = {};

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
      headers.Accept = "application/json";
      headers["Content-Type"]= "application/json"
    }
    const response = await callAPI({
      url: "/post/list",
      method: "get",
      params: {
        page: 0,
        size: 20,
      },
      headers,
    });
    // const response = await axios.get("https://myappventure-api.herokuapp.com/api/post/list")
    // console.log(response)
    const { data } = response;
    localStorage.getItem("access_token", data.data.access_token);
    setPosts(response.data.data);
  };

  return {
    posts,
    loadPosts,
  };
};
export default useHome;
