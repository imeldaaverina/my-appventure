import { useEffect } from "react";
import { useHomeProvider } from "../HomeProvider";
import PostItem from "./PostItem";
import PostItem2 from "./PostItem2";
const Posts = () => {
  const { posts, loadPosts } = useHomeProvider();
  useEffect(() => {
    loadPosts();
  }, []);

  console.log(posts);

  return (
    <section>
      {posts &&
        posts.content.length > 0 &&
        posts.content.map((post) => (
          <PostItem key={post.id} data={post} id={post.id} />
        ))}
    </section>
  );
};
export default Posts;
