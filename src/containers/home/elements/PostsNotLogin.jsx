import { useEffect } from "react";
import { useHomeProvider } from "../HomeProvider";
import PostItemNotLogin from "./PostItemNotLogin";

const PostsNotLogin = () => {
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
          <PostItemNotLogin key={post.id} data={post} id={post.id} />
        ))}
    </section>
  );
};
export default PostsNotLogin;
