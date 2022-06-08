import { useRouter } from "next/router";
import { getJwt } from "../../../helpers/auth";
import { callAPI } from "../../../helpers/network";
import { useHomeProvider } from "../HomeProvider";
import { useState, useEffect } from "react";

const usePostItem = () => {
  const [post, setPost] = useState(); 
  const { push } = useRouter();
  const { loadPosts } = useHomeProvider();

  const loadPost = () => {
    const _post = localStorage.getItem('text');
    setPost(_post);
  };

  const handleRemove = async (postId) => {
    const confirmed = confirm('Are you sure want to delete?');
    if (confirmed) {
      await callAPI({
        url: `/post/addpost`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJwt()}`
        }
      });
      await loadPosts();
    }
  };

  const handleEdit = (postId) => push(`/edit/${postId}`);

  useEffect(() => { 
    loadPost();
  }, []) 

  return {
    handleRemove,
    handleEdit,
    post
  }
};

export default usePostItem;