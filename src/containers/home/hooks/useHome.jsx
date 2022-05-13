import { useState, useEffect } from "react";
import { callAPI } from '../../../helpers/network';
import { getJwt } from '../../../helpers/auth';

const useHome = () => {
    const [posts, setPosts] = useState();
    const loadPosts = async () => {
        const response = await callAPI({
            url: "/post/addpost",
            method: "get",
            // params: {
            //     [`sort[createdAt]`]: 'desc'
            // },
            
        });
        const { data } = response;
        localStorage.getItem('access_token', data.access_token);
        setPosts(response.data.data);
    }
    
   
    return {
        posts,loadPosts
    }
}
export default useHome;

