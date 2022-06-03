// import { getUser } from '../../../helpers/auth';
import useAccount from "../../account/hooks/useAccount";
import usePostItem from "../hooks/usePostItem";
import { HeartIcon, ChatIcon, LinkIcon } from "@heroicons/react/outline";
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import { ButtonFollow, Like, ButtonFollowed } from "../../../components/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useListPostDispatcher } from "../../../redux/reducers/listPost";
import { Carousel } from 'react-responsive-carousel';
import {useHomeDispatcher} from "../../../redux/reducers/home";
import { callAPI } from "../../../helpers/network";
import { useHomeProvider } from "../HomeProvider";
import { useFormik, getIn } from "formik";

const PostItem = ({ data }) => {
  console.log({ data });
  const { profile, picture } = useAccount();
  // const { post } = usePostItem();
  // const { handleRemove, handleEdit } = usePostItem();

  // const postData = "test";
  const  {likeAction, follow}  = useHomeDispatcher();

  const { posts, loadPosts } = useHomeProvider();
  const handleLikeButton = async (detailPost) =>{
    console.log(detailPost)
    try{
      await likeAction(detailPost.id);
      await loadPosts();
    }catch(e){
      
    }
    // alert("test")
  }
  const user = JSON.parse(localStorage.getItem('data'))
  const handleUnlikeButton = async (detailPost) =>{
    console.log(detailPost)
    try{
      await likeAction(detailPost.id);
      await loadPosts();
    }catch(e){
      
    }
    // alert("test")
  }
  // const onSubmit = async () =>{
  //   console.log("tescuy")

    const handlefollow = async (idFollower) => {
      
      const user = JSON.parse(localStorage.getItem('data'))
       try {
         const formData = new FormData();
         formData.append("idFollowing", 170);
         formData.append("idFollower",  user.id);
         const response = await callAPI({
           url : `/follow/`,
           method: "POST",
           data: formData,
           headers: {
             Authorization: `Bearer ${user.access_token}`      
           },
         });
   
         if (response.data.status === "404") {
           alert(`Failed to follow post`);
           return;
         }
         
       } catch (error) {
         console.log(error)
         alert(`Failed to unfollow post`);
       }
     };
    // try{
    //   await follow(followuser.id);
    //   await loadPosts();
    // }catch(e){
      
    // }
    // alert("test")
  // }

  
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
 
  // const filePosts = callAPI({
  //   url: `/post/list/${data.content.filePosts}`,
  //   method: "get"
  // });
 
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
  // const {
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   errors,
  //   touched,
  //   setFieldValue,
  // } = useFormik({
  //   // initialValues,
  //   // validationSchema,
  //   onSubmit}
  // );
  return (
    <main className="m-auto flex justify-center font-Poppins">
      <div className=" rounded-2xl flex justify-center items-center flex-col w-96 shadow-xl my-3 border border-[#16737B]">
      {/* <Carousel>
          <div className='flex justify-around'>
          {data && data.map((item) => {
              return (
            <img
              src={`${data.filePosts}`}
              className="w-full h-full rounded-t-2xl"
              width={500}
              height={320}
              alt=""
            />
             )
          })}  
            </div>
            </Carousel> */}
        <div>
        
          <img src={`${data.filePosts.url}`} className="rounded-t-2xl" alt="gambar-postingan" />
          
          {/* <img src={data.filePosts.url} className="rounded-t-2xl" alt="gambar" />  */}
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
{/*                   
                  <ButtonFollow type="submit" label='Ikuti' />
                  <ButtonFollowed type="submit" label='Mengikuti' /> */}
                
                  {/* {
                data.followedBy.find((follow) => follow.user.id === user.id) 
                data ? ( */}
                  
  
                    <button  label='Ikuti' onClick={()=> handlefollow() }>Follow</button>
                 
                    
              {/* //   ) : (
              //     <ButtonFollowed type="submit" label='Mengikuti' onClick={()=> handlefollow} />
              //   )
              // } */}
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
              {/* <HeartIcon className="text-red-500 w-6 h-6" /> */}
              
              {/* <Like/> */}

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
