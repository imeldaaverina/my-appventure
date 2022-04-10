import { getUser } from '../../../helpers/auth';
import usePostItem from '../hooks/usePostItem';
import { HeartIcon, ChatIcon, LinkIcon} from '@heroicons/react/outline';
import { ButtonFollow} from "../../../components/button";
import Image from 'next/image'

const PostItem = ({ id, data }) => {
  const { handleRemove, handleEdit } = usePostItem();

  const postData = 'besok saya akan pergi berkemah dengan teman - teman saya. Saya berkemah di gunung bromo! Saya sangat tidak sabar!';

  return (
    <main className='m-auto font-Poppins flex justify-center mt-7 rounded-xl'>
    <div className="bg-indigo-400 rounded-xl flex justify-center items-center  flex-col">
      <Image 
      // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.photo}`} 
      src="blur_bg.png" 
      alt="photo"
      className='w-full h-full rounded-t-xl'/>
      <div className='bg-blue-300 p-4 flex flex-col rounded-b-xl w-full'>
        <div className='bg-green-300 flex justify-between items-center'>
          <div className='bg-pink-300 flex'>
            <img src="blur_bg.png" className='rounded-full w-10 h-10' />
            <div className='bg-blue-500 ml-2'>
              {data.postedBy}
            </div>
          </div>
          <div>
          <ButtonFollow type="submit" label="Ikuti" className='w-24 h-18'/> 
          </div>
        
        </div>
        <div className='bg-yellow-300 text-sm mt-4'>
          {postData.length > 75 ? (<div>{postData.substring(0, 75)} ...<a className='text-blue-600'> Baca lebih lanjut</a></div>) : (<></>)}  
        </div>

        <div className='bg-white flex justify-start mt-4'>
          <HeartIcon className='text-red-500 w-5 h-5'/>
          <ChatIcon className='w-5 h-5'/>
          <LinkIcon className='w-5 h-5'/>
        </div>
        <div>

        </div>
      </div>

    </div>
    </main>
  );
};
export default PostItem;
