import { useEffect, useState } from "react";
import { useHomeProvider } from "../HomeProvider";
import PostItem from "./PostItem";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import axios from 'axios';

const Posts = () => {
  const { posts, loadPosts, loading } = useHomeProvider();
  let [color, setColor] = useState("#186F79");
  const [listFollowing, setListFollowing] = useState([]);
  const [userId, setUserId] = useState();

  const fetchListFollowing = async () => {

    const user = JSON.parse(localStorage.getItem('data'))
    try {
      const response = await axios({
        url: `https://myappventure-api.herokuapp.com/api/follow/following/${user.id}`,
        method: 'get',
        params: {
          idUser: user.id,
          page: 0,
          size: 30,
        }
      });
      console.log("response > ", response.data);
      setListFollowing(response.data.Data.content.map((value) => value.userFollowing.id));

    } catch (error) {
      console.log("error > ", error);
    }
  }

  useEffect(() => {
    loadPosts();
    fetchListFollowing();
    setUserId(JSON.parse(localStorage.getItem('data')).id)
  }, []);

  console.log(posts);

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return (
    <section>
      <div className="flex justify-center ">
        {loading && <div className="mt-16">
          <FadeLoader color={color} loading={loading} css={override} size={200} />
          <p className="mt-2 font-Poppins font-semibold text-xl">Silahkan Tunggu...</p>
        </div>}
      </div>
      {posts &&
        posts.content.length > 0 &&
        posts.content.map((post) => {

          return (
            <PostItem key={post.id} data={post} id={post.id} isFollowed={listFollowing.includes(post.user.id)} hideFollowButton={post.user.id === userId} />
          )
        })}
    </section>
  );
};
export default Posts;
