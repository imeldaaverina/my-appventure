
import { useRouter } from "next/router";
import { getJwt } from "../../../helpers/auth";
import { callAPI } from "../../../helpers/network";
import { useHomeProvider } from "../HomeProvider";

const usePostItem = () => {

  const [post, setPost] = useState(); 
  
 
  const loadPost = () => {
    const _post = localStorage.getItem('post');
    setPost(_post);
  };

  
  useEffect(() => { 
    loadPost();
  }, []) 


  const { push } = useRouter();
  const { loadPosts } = useHomeProvider();

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

  return {
    handleRemove,
    handleEdit,
    post
  }
};

export default usePostItem;