import { getUser } from '../helpers/auth';
import usePostItem from '../containers/home/hooks/usePostItem';
import { HeartIcon, ChatIcon, LinkIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import { useHomeDispatcher } from '../redux/reducers/home/slice';


const PostItem = ({ id, data }) => {
  const { handleRemove, handleEdit } = usePostItem();
  const { home, makeIncrement } = useHomeDispatcher();
  return (
    <main className='m-auto flex justify-center'>
    <div className="bg-indigo-400 rounded-xl flex justify-center items-center flex-col w-96">
      <Image src="blur_bg.png" className='w-full h-full' alt=''/>
      <div className='bg-blue-300 p-4 flex flex-col w-full'>
        <div className='bg-green-300 flex justify-between'>
          <div className='bg-pink-300 flex'>
            
            <Image src="blur_bg.png" className='rounded-full w-10 h-10' alt='' />
            <div className='bg-blue-500'></div>
          </div>

        </div>
        <div className='bg-yellow-300 text-sm'>
        My happy place!!! Here’s to more solo adventure around labuan bajo in 2022 .....   Baca lebih lanjut
        </div>

        <div className='bg-white flex justify-start mt-4'>
        <div className="flex justify-center items-center -mx-1 my-3">
            <HeartIcon className='text-red-500 w-12 h-12' onClick={() => makeIncrement()}/>
            <span className="text-2xl block w-full">
            {home.counter}
          </span>
          </div>
          <ChatIcon className='w-5 h-5'/>
          <LinkIcon className='w-5 h-5'/>
        </div>
        <div>

        </div>
      </div>

    </div>
    </main>
    // <div className="flex justify-start items-start flex-col">
    //   <div className="p-3 flex justify-start items-center space-x-2">
    //     <div className="rounded-full bg-gray-50 border border-gray-500 h-8 w-8"></div>
    //     <div className="text-sm">
    //       {/* {data.postedBy} */}
    //       </div>
    //   </div>
    //   <div className="h-60 bg-gray-100 w-full ">
    //     <img 
    //     // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.photo}`} 
    //     src=''
    //     alt="photo" className="w-full h-full object-cover" />
    //   </div>
    //   <div className="p-3 text-sm w-full">
    //     {/* {data.postedBy === getUser().username && ( */}
    //       <div className="mb-2 text-right flex justify-end items-center space-x-2">
    //         <button onClick={() => handleEdit(id)} type="button" className="text-gray-500 border rounded-lg border-gray-500 px-3 py-1 hover:text-gray-300 hover:border-gray-300">Edit</button>
    //         <button onClick={() => handleRemove(id)} type="button" className="text-red-500 border rounded-lg border-red-500 px-3 py-1 hover:text-red-300 hover:border-red-300">Remove </button>
    //       </div>
    //     {/* )} */}
    //     <p>
    //       {' '}
    //       <span className="font-bold">
    //         {/* {data.postedBy} */}
    //         </span> 
    //         {/* {data.caption} */}
    //     </p>
    //   </div>
    // </div>
  );
};
export default PostItem;
