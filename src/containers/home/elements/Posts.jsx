import { useEffect, useState } from "react";
import { useHomeProvider } from "../HomeProvider";
import PostItem from "./PostItem";
import PostItem2 from "./PostItem2";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const Posts = () => {
  const { posts, loadPosts, loading } = useHomeProvider();
  let [color, setColor] = useState("#186F79");
  useEffect(() => {
    loadPosts();
  }, []);

  console.log(posts);

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return (
    <section>
      <div className="flex justify-center">
        {loading && <div className="mt-16">
          <FadeLoader color={color} loading={loading} css={override} size={200} /> 
          <p className="mt-2 font-Poppins font-semibold text-xl">Silahkan Tunggu...</p>
          </div>}
      </div>
      {posts &&
        posts.content.length > 0 &&
        posts.content.map((post) => (
          <PostItem key={post.id} data={post} id={post.id} />
          // <PostItem2 key={post.id} data={post} id={post.id} />
        ))}
    </section>
  );
};
export default Posts;
