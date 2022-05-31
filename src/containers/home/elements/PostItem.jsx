// import { getUser } from '../../../helpers/auth';
import useAccount from "../../account/hooks/useAccount";
import usePostItem from "../hooks/usePostItem";
import { HeartIcon, ChatIcon, LinkIcon } from "@heroicons/react/outline";
import { ButtonFollow } from "../../../components/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useListPostDispatcher } from "../../../redux/reducers/listPost";
import { Carousel } from 'react-responsive-carousel';

const PostItem = ({ data, id }) => {
  console.log({ data });
  const { profile, picture } = useAccount();
  // const { post } = usePostItem();
  // const { handleRemove, handleEdit } = usePostItem();

  // const postData = "test";

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // const {
  //   listPost: { posts },
  //   loadPosts,
  // } = useListPostDispatcher();

  // useEffect(() => {
  //   loadPosts();
  // }, []);

  // const renderPostItems = () => {
  //   return (
  //     posts &&
  //     posts.length > 0 &&
  //     posts.map((postItem) => (
  //       <div className="border p-3">
  //         <div className="flex justify-between w-full">
  //           <div className="font-bold">{postItem.attributes.title}</div>
  //           <div className="">
  //             <button type="button">edit</button>
  //           </div>
  //         </div>
  //       </div>
  //     ))
  //   );
  // };

  return (
    <main className="m-auto flex justify-center font-Poppins">
      <div className=" rounded-2xl flex justify-center items-center flex-col w-96 shadow-xl my-3 border border-[#16737B]">
        {/* <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${picture}`}
          className="w-full h-full rounded-t-2xl"
          width={40}
          height={40}
          alt=""
        /> */}
        <div>
          <img src={data.filePosts.url} className="rounded-t-2xl" alt="gambar-postingan" />
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
                  <div className="font-medium text-sm mt-1">{data.user.nama}</div>
                  <div className="font-normal text-xs">{data.created_date}</div>
                </div>
                <div className="flex justify-center items-center">
                  <ButtonFollow />
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm mt-4">
            <div className="w-72 font-light text-sm">
              {/* {renderPostItems()} */}
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
            <div className="flex justify-center items-center -mx-1 my-3">
              <HeartIcon className="text-red-500 w-6 h-6" />{data.jumlahLike}
              {/* <span className="text-2xl block w-full">
            {home.counter}
          </span>
          </div> */}
              <ChatIcon className="w-6 h-6 ml-3" />{data.jumlahKomentar}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PostItem;
