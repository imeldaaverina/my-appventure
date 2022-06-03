import { data } from "autoprefixer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Comment = () => {
  return (
    <div className='flex'>
        <div className='h-24 w-24'>
      <Image src="/blur_bg.png" className='rounded-full' width={40} height={40} alt='' />
      </div>
      <div className='-ml-12 flex '>
          <div className='flex flex-col items-center justify-center'>
            <div className='font-semibold text-white flex flex-col'>
              {data.user.nama}
              <div className='w-64 font-light text-sm'>
                {isReadMore ? postData.slice(0, 90): postData }
                {postData.length > 90 &&
                  <span onClick={toggleReadMore} className='font-semibold'>
                  {isReadMore ? '...Baca lebih lanjut' : ' ...Tampilkan lebih sedikit'}
                  </span>
                }
              {/* <ReadMoreReact 
                className='font-bold'
                text={postData}
                min={0}
                ideal={100}
                max={120}
                readMoreText="... Baca lebih lanjut"/> */}
              {/* Saya Pernah! Seruu sekali loh!, Saya merekomendasikan patai lainnya yang mirip seperti gambar di atas, ada pa.... */}
              </div>
              <div className='flex text-xs font-light mt-1 underline'>Balas</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Comment;

