// import { useEffect } from "react";
// import dayjs from "dayjs";

// import relativeTime from "dayjs/plugin/relativeTime";
// import ReactPlayer from "react-player";
// import { useHomeDispatcher } from "../../redux/reducers/home";
// import { useRouter } from "next/router";
// dayjs.extend(relativeTime);

// export const PostsList = () => {
//   const { push } = useRouter();
//   const { fetchPosts, home } = useHomeDispatcher();
//   const { posts } = home;
//   const { loading, data } = posts;

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <p> Loading</p>;
//   }

//   return data.map((post) => (
//     <div className="border-transparent  rounded-lg ">
//       <div className="min-h-[15rem] text-white rounded-lg p-2">
//         <form className="py-2 rounded-lg bg-white pl-2">
//           <div className="flex flex-cols ml-2 items-center pt-2">
//             <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 ">
//               <img
//                 className="h-full w-full object-cover"
//                 src="Commit.jpg"
//                 alt="avatar"
//               ></img>
//             </div>
//             <h4 className="text-[15px] font-bold text-[#333333] ml-3 pt-1 flex justify-center">
//               {" "}
//               {post.user.fullname}{" "}
//             </h4>
//             <div className="pb-1 ml-[5px]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-5 w-5 text-blue-600"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </div>
//             <div className="pb-7 ml-96 pl-20 mt-2 ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-5 w-5 text-gray-900"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 stroke-width="2"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="flex justify-start">
//             <p className="text-gray-400 text-[12px] ml-[60px] ">
//               {post.post_tags.join(", ")}
//             </p>
//             <p className="text-gray-400 text-[12px] ml-[10px]">
//               {" "}
//               {dayjs(post.created_date).fromNow()}{" "}
//             </p>
//             <div className="ml-2 pb-[12px]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-6 w-6 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 stroke-width="2"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="flex flex-cols gap-2 bg-white items-start pt-5 rounded-lg text-gray-700 text-[12px] ml-2 ">
//             [Front-End Developer]
//             <br /> {post.post_desc}
//           </div>
//           <p
//             onClick={() => push(`/detail/${post.id_post}`)}
//             className="text-gray-400 text-[12px] ml-2 pt-5"
//           >
//             See more ...
//           </p>
//           <div className="block h-[50%] w-[90%] ml-7 pt-5">
//             {post.filePosts.map(({ url }) =>
//               url.split(".").pop() == "mp4" ? (
//                 <ReactPlayer url={url} controls={true} />
//               ) : (
//                 <img className="h-full w-full object-cover" src={url} />
//               )
//             )}
//           </div>
//           <div className="flex flex-cols gap-[5%] bg-white items-start pt-[5%] rounded-lg ">
//             <a
//               href="#"
//               className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[10px]"
//             >
//               <div className="flex items-start text-sm">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   stroke-width="2"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//                 <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
//                   {post.total_like}
//                 </p>
//               </div>
//             </a>
//             <a
//               href="#"
//               className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[2px]"
//             >
//               <div className="flex items-start text-sm">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   stroke-width="2"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                   />
//                 </svg>
//                 <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
//                   {post.total_komentar}
//                 </p>
//               </div>
//             </a>
//             <a
//               href="#"
//               className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[65%]"
//             >
//               <div className="flex items-start text-sm">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   stroke-width="2"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
//                   />
//                 </svg>
//               </div>
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   ));
// };
