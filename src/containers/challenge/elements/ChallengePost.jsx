import { useEffect } from 'react';
import { useHomeProvider } from '../HomeProvider';
import ChallengePostItem from './ChallengePostItem';
// import PostItem2 from './PostItem2';
const ChallengePost = () => {
  const { posts, loadPosts } = useHomeProvider();
  useEffect(() => {
    loadPosts();
  }, []);
  return <section>{posts && posts.length > 0 && posts.map((post) => <PostItem key={post.id} data={post.attributes} id={post.id} />)}</section>;
};
export default ChallengePost;
