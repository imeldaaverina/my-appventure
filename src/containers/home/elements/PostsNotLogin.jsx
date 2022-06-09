import { useEffect, useState } from "react";
import { useHomeProvider } from "../HomeProvider";
import PostItemNotLogin from "./PostItemNotLogin";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import Image from "next/image"

const PostsNotLogin = () => {
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

      {posts && posts.length < 1 && <div className="flex flex-col justify-center text-center mt-12">
        <div className="flex justify-center">
          <Image src="/User research-pana 1.svg" width={250} height={250} alt="" />
        </div>
        <div className="pt-5 text-lg">
          <p>Belum ada Unggahan Terbaru</p>
        </div>
      </div>}

      {posts &&
        posts.content.length > 0 &&
        posts.content.map((post) => (
          <PostItemNotLogin key={post.id} data={post} id={post.id} />
        ))}
    </section>
  );
};
export default PostsNotLogin;
