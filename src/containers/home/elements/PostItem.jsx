import { getUser } from '../../../helpers/auth';
import usePostItem from '../hooks/usePostItem';
import { HeartIcon, ChatIcon, LinkIcon} from '@heroicons/react/outline';
import { ButtonFollow} from "../../../components/button";
import Image from 'next/image'



// const PostItem = ({ id, data }) => {
//   const { handleRemove, handleEdit } = usePostItem();
//   const { home, makeIncrement } = useHomeDispatcher();
//   return (
//     <main className='m-auto flex justify-center'>
//     <div className="bg-indigo-400 rounded-xl flex justify-center items-center flex-col w-96">
//       <Image src="blur_bg.png" className='w-full h-full' alt=''/>
//       <div className='bg-blue-300 p-4 flex flex-col w-full'>
//         <div className='bg-green-300 flex justify-between'>
//           <div className='bg-pink-300 flex'>
            
//             <Image src="blur_bg.png" className='rounded-full w-10 h-10' alt='' />
//             <div className='bg-blue-500'></div>
//           </div>

//         </div>
//         <div className='bg-yellow-300 text-sm'>
//         My happy place!!! Here’s to more solo adventure around labuan bajo in 2022 .....   Baca lebih lanjut
//         </div>

//         <div className='bg-white flex justify-start mt-4'>
//         <div className="flex justify-center items-center -mx-1 my-3">
//             <HeartIcon className='text-red-500 w-12 h-12' onClick={() => makeIncrement()}/>
//             <span className="text-2xl block w-full">
//             {home.counter}
//           </span>
//           </div>
//           <ChatIcon className='w-5 h-5'/>
//           <LinkIcon className='w-5 h-5'/>
//         </div>
//         <div>

//         </div>
//       </div>

//     </div>
//     </main>
//     // <div className="flex justify-start items-start flex-col">
//     //   <div className="p-3 flex justify-start items-center space-x-2">
//     //     <div className="rounded-full bg-gray-50 border border-gray-500 h-8 w-8"></div>
//     //     <div className="text-sm">
//     //       {/* {data.postedBy} */}
//     //       </div>
//     //   </div>
//     //   <div className="h-60 bg-gray-100 w-full ">
//     //     <img 
//     //     // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.photo}`} 
//     //     src=''
//     //     alt="photo" className="w-full h-full object-cover" />
//     //   </div>
//     //   <div className="p-3 text-sm w-full">
//     //     {/* {data.postedBy === getUser().username && ( */}
//     //       <div className="mb-2 text-right flex justify-end items-center space-x-2">
//     //         <button onClick={() => handleEdit(id)} type="button" className="text-gray-500 border rounded-lg border-gray-500 px-3 py-1 hover:text-gray-300 hover:border-gray-300">Edit</button>
//     //         <button onClick={() => handleRemove(id)} type="button" className="text-red-500 border rounded-lg border-red-500 px-3 py-1 hover:text-red-300 hover:border-red-300">Remove </button>
//     //       </div>
//     //     {/* )} */}
//     //     <p>
//     //       {' '}
//     //       <span className="font-bold">
//     //         {/* {data.postedBy} */}
//     //         </span> 
//     //         {/* {data.caption} */}
//     //     </p>
//     //   </div>
//     // </div>
//   );
// };
// export default PostItem;

// import { getUser } from '../helpers/auth';
// import usePostItem from '../containers/home/hooks/usePostItem';
// import { HeartIcon, ChatIcon, LinkIcon} from '@heroicons/react/outline';
// import { ButtonFollow } from '../components/button';
// import Image from 'next/image';
import ReadMoreReact from 'read-more-react';

const PostItem = ({ id, data }) => {
  const { handleRemove, handleEdit } = usePostItem();
  // const { home, makeIncrement } = useHomeDispatch();

  const postData = 'besok minggu saya akan pergi berkemah dengan teman - teman saya. Saya berkemah di gunung bromo! Saya sangat tidak sabar!';
  
  return (
    <main className='m-auto flex justify-center font-Poppins'>
    <div className=" rounded-2xl flex justify-center items-center flex-col w-96 shadow-xl">
      <img src="blur_bg.png" className='w-full h-full rounded-t-2xl' alt=''/>
      <div className=' p-4 flex flex-col w-full rounded-2xl'>
        <div className='flex justify-between'>
          <div className='flex w-full'>
            
            <img src="blur_bg.png" className='rounded-full w-10 h-10' alt='' />
            <div className='pr-3 w-96 flex justify-between'>
            <div className='flex flex-col ml-2'>
              <div className='font-medium text-sm mt-1'>
                 {/* {data.postedBy} */}
                 nama
              </div>
              <div className='font-normal text-xs'>1 menit</div>
            </div>
            <div className='flex justify-center items-center'>
            <ButtonFollow />
            </div>
            </div>
          </div>

        </div>
        <div className='text-sm mt-4'>
        {/* My happy place!!! Here’s to more solo adventure around labuan bajo in 2022 ..... <span className='font-bold'>Baca lebih lanjut</span>*/}
        <ReadMoreReact 
                text={postData}
                min={0}
                ideal={50}
                max={60}
                className='font-bold'
                readMoreText="... Baca lebih lanjut"/>
        {/* {postData.length > 60 ? (<div>{postData.substring(0, 60)} ...<a className=' font-bold'> Baca lebih lanjut</a></div>) : (<></>)} */}
        </div>

        <div className='bg-white flex justify-start mt-1'>
        <div className="flex justify-center items-center -mx-1 my-3">
            <HeartIcon className='text-red-500 w-6 h-6'/>
            {/* <span className="text-2xl block w-full">
            {home.counter}
          </span>
          </div> */}
          <ChatIcon className='w-6 h-6'/>
          <LinkIcon className='w-6 h-6'/>
        </div>
        <div>

        </div>
      </div>
      </div>
    </div>
   </main>
  );
};
export default PostItem;

