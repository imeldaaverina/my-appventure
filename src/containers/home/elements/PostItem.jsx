// import { getUser } from '../../../helpers/auth';
import useAccount from "../../account/hooks/useAccount"
import usePostItem from '../hooks/usePostItem';
import { HeartIcon, ChatIcon, LinkIcon} from '@heroicons/react/outline';
import { ButtonFollow} from "../../../components/button";
import Image from 'next/image'

const PostItem = () => {
  const { profile, picture } = useAccount();
  const { post } = usePostItem();
  // const { handleRemove, handleEdit } = usePostItem();

  // const postData = "test";

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};
  
  

  return (
    <main className='m-auto flex justify-center font-Poppins'>
    <div className=" rounded-2xl flex justify-center items-center flex-col w-96 shadow-xl">
      <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${picture}`} className='w-full h-full rounded-t-2xl' width={40} height={40} alt=''/>
      <div className=' p-4 flex flex-col w-full rounded-2xl'>
        <div className='flex justify-between'>
          <div className='flex w-full'>

            <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${picture}`} className='rounded-full w-10 h-10'  width={40} height={40} alt='' />
            <div className='pr-3 w-96 flex justify-between'>
            <div className='flex flex-col ml-2'>
              <div className='font-medium text-sm mt-1'>
                 {profile}
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
        <div className='w-72 font-light text-sm'>
                {isReadMore ? post.slice(0, 90): post }
                {post.length > 90 &&
                  <span onClick={toggleReadMore} className='font-semibold'>
                  {isReadMore ? '...Baca lebih lanjut' : ' ...Tampilkan lebih sedikit'}
                  </span>
                }
              </div></div>

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
