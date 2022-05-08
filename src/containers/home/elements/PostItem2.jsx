// import { getUser } from '../helpers/auth';
// import usePostItem from '../containers/home/hooks/usePostItem';
import { HeartIcon, ChatIcon, LinkIcon} from '@heroicons/react/outline';
// import { ButtonFollow } from '../components/button';
import Image from 'next/image';
import Link from 'next/link'
import ReadMoreReact from 'read-more-react';

const PostItem = ({ id, data }) => {
  const { handleRemove, handleEdit } = usePostItem();
  // const { home, makeIncrement } = useHomeDispatch();

  const postData = 'besok minggu saya akan pergi berkemah dengan teman - teman saya. Saya berkemah di gunung bromo! Saya sangat tidak sabar!';
  
  return (
    <main className='m-auto flex justify-center font-Poppins'>
    <div className=" rounded-2xl flex justify-center items-center flex-col w-96 shadow-xl">
      <div className=' p-4 flex flex-col w-full rounded-2xl'>
        <div className='flex justify-between'>
          <div className='flex w-full'>
            
            <Image src="blur_bg.png" className='rounded-full w-10 h-10' alt='' />
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
        My happy place!!! Here’s to more solo adventure around labuan bajo in 2022
        {/* <ReadMoreReact 
                text={postData}
                min={0}
                ideal={50}
                max={60}
                className='font-bold'
                readMoreText="... Baca lebih lanjut"/> */}
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
