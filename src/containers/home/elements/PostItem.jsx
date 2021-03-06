import useAccount from "../../account/hooks/useAccount";
import { ChatIcon } from "@heroicons/react/outline";
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import { useState, useEffect } from "react";
import { useHomeDispatcher } from "../../../redux/reducers/home";
import { callAPI } from "../../../helpers/network";
import { useHomeProvider } from "../HomeProvider";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

dayjs.extend(relativeTime);

const PostItem = ({ data, isFollowed, hideFollowButton }) => {
  const { profile, picture } = useAccount();
  const [userId, setUserId] = useState();
  const { likeAction, follow } = useHomeDispatcher();
  const { posts, loadPosts } = useHomeProvider();
  const { listFollowing, fetchListFollowing } = useHomeProvider();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleLikeButton = async (detailPost) => {
    console.log(detailPost)
    try {
      await likeAction(detailPost.id);
      await loadPosts();
    } catch (e) {

    }
  }

  const user = JSON.parse(localStorage.getItem('data'))
  const handleUnlikeButton = async (detailPost) => {
    console.log(detailPost)
    try {
      await likeAction(detailPost.id);
      await loadPosts();
    } catch (e) {

    }
  }

  const handlefollow = async (idFollowing) => {
    const user = JSON.parse(localStorage.getItem('data'))
    try {
      const formData = new FormData();
      console.log(data)

      formData.append("idFollowing", idFollowing);
      formData.append("idFollower", user.id);
      const response = await callAPI({
        url: `/follow/`,
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${user.access_token}`
        },
      });
      fetchListFollowing();
      loadPosts();
      if (response.data.status === "404") {
        alert(`Failed to follow post`);
        return;
      }
    } catch (error) {
      console.log(error)
      alert(`Failed to unfollow post`);
    }
  };

  useEffect(() => {
    fetchListFollowing();
    loadPosts();
  }, []);

  return (
    <main className="m-auto flex justify-center font-Poppins">
      <div className=" rounded-2xl flex justify-center items-center flex-col w-96 shadow-xl my-3 border border-[#16737B]">
        <div className="w-96">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >

            {data && data.filePosts.map((fileItem) => {
              return (
                <SwiperSlide className="mb-10">
                  <img src={fileItem.url} className="rounded-t-2xl w-96 h-72" alt="gambar-postingan" />
                </SwiperSlide>
              )
            }

            )}

          </Swiper>
        </div>
        <div className=" p-4 flex flex-col w-full rounded-2xl">
          <div className="flex justify-between">
            <div className="flex w-full">
              <img
                src={data.user.urlFileName}
                className="rounded-full w-10 h-10"
                width={50}
                height={50}
                alt=""
              />
              <div className="pr-3 w-96 flex justify-between">
                <div className="flex flex-col ml-2">
                  <a href={`./user-page?nama=${data.user.nama}`}>
                    <div className="font-medium text-sm mt-1">{data.user.nama}</div>
                  </a>
                  <div className="font-normal text-xs text-[#457275]">{dayjs(data.created_date).fromNow()}{" "}</div>
                </div>

                <div className="flex justify-center items-center">
                  {hideFollowButton ? <div /> : isFollowed ?
                    <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275]"> <button label='diikuti' onClick={() => handlefollow(data.user.id)}>Mengikuti</button> </div>
                    : <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-[#457275] border-2 border-[#457275] text-white"><button label='Ikuti' onClick={() => handlefollow(data.user.id)}>Ikuti</button></div>}
                </div>

              </div>
            </div>
          </div>

          <div className="text-sm mt-4">
            <div className="w-72 font-light text-sm">
              {isReadMore ? data?.text.slice(0, 278) : data?.text}
              {data.text.length > 278 && (
                <span onClick={toggleReadMore} className="font-semibold">
                  {isReadMore
                    ? "...Baca lebih lanjut"
                    : " ...Tampilkan lebih sedikit"}
                </span>
              )}
            </div>
          </div>

          <div className="bg-white flex justify-start mt-1">
            <div className="flex justify-center items-center my-3">
              <div className="cursor-pointer flex flex-row">
                {
                  data.likedBy.find((like) => like.user.id === user.id) ? (
                    <LikeSolidIcon
                      className="text-red-500 w-6 h-6"
                      onClick={() => handleLikeButton(data)}
                    />
                  ) : (
                    <LikeOutlineIcon
                      className="text-red-500 w-6 h-6"
                      onClick={() => handleUnlikeButton(data)}
                    />
                  )
                }

                {data.jumlahLike}
              </div>

              <a href={`./detail-post?id=${data.id}`}>
                <div className="flex flex-row">
                  <ChatIcon className="w-6 h-6 ml-3" />{data.jumlahKomentar}
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </main>

  );
};
export default PostItem;
