import { getUser } from '../helpers/auth';
import usePostItem from '../containers/home/hooks/usePostItem';
import { HeartIcon, ChatIcon, LinkIcon, ArrowCircleLeftIcon, UsersIcon, ClipboardCheckIcon, CameraIcon} from '@heroicons/react/outline';
import { Button3, ButtonFollow, Button, ButtonPost} from '../components/button';
import { InputKomen } from '../components/input';
import Image from 'next/image';
import ReadMoreReact from 'read-more-react';
import { Danau, Reboisasi, Hiking } from '../components/card';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';

import { useFormik, getIn } from "formik";
import { useState, useRef, useEffect } from "react";
import { number } from 'yup';
import Comment from "../components/comment";


const PostItem = ({ id, data }) => {
  const { handleRemove, handleEdit } = usePostItem();
  // const { home, makeIncrement } = useHomeDispatch();


  const initialValues = {
    post: '',
    // caption: '',
    files: null
}

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
} = useFormik({
    initialValues,
    // validationSchema,
    // onSubmit,
});

const [loading, setLoading] = useState();

const [preview, setPreview] = useState();

const handleChangeFile = (e) => {
  const files = e.target.files;
  if (files) {
      setPreview(URL.createObjectURL(files[0]));
      setFieldValue("files", files[0]);
  }
}

// const ReadMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};
// }


const textareaRef = useRef(null);
    const [currentValue, setCurrentValue ] = useState("");// you can manage data with it

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);


  const postData = 'Saya Pernah! Seruu sekali loh!, Saya merekomendasikan patai lainnya yang mirip seperti gambar di atas, ada pantai sajdbjb djbsjd hdab d dhbd !';
  
  return (
    <main className='m-auto flex flex-col justify-center font-Poppins items-center'>

      <div className='mb-20'>
        <div className='bg-blue-300 flex flex-col mt-20 w-96'>
      
      <div className='flex'> 
        <ArrowCircleLeftIcon className='w-10 h-10 '/>
        <div className='font-medium text-2xl flex justify-center items-center ml-5 w-72'>Buat Komunitas Baru</div>
      </div>
      </div>
      </div>

    <div className='bg-[#457275] rounded-t-3xl'>
    <div className=" rounded flex bg-white justify-center items-center flex-col w-96 shadow-xl">
      <div className=' p-4 flex flex-col w-full rounded'>
        <div className='flex justify-between'>
          <div className='flex w-full'>
            
            <Image src="/blur_bg.png" className='rounded-full' width={50} height={10} alt='' />
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
        <Comment/>
        <div className='text-sm mt-4'>
        <div className='w-72 font-light text-sm'>
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
              </div>        </div>

        <div className='bg-white flex justify-start mt-1'>
        <div className="flex justify-center items-center -mx-1 my-3">
            <HeartIcon className='text-red-500 w-6 h-6'/>
            <ChatIcon className='w-6 h-6'/>
            <LinkIcon className='w-6 h-6'/>
        </div>
      </div>
      </div>
      
    </div>
    <div className=' pt-3  px-3 flex'>
      <div className='flex flex-col '>
      <div className='flex'>
        <div className='h-24 w-24'>
      <Image src="/blur_bg.png" className='rounded-full' width={40} height={40} alt='' />
      </div>
      <div className='-ml-12 flex '>
          <div className='flex flex-col items-center justify-center'>
            <div className='font-semibold text-white flex flex-col'>
              nama
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
      
      <div className='flex mt-9 w-full'>
              <InputKomen
              name="komentar" 
              label="" 
              type="text" 
              placeholder="Tulis Komentar" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              />
              <Icon icon="akar-icons:send" className='text-white w-6 h-6 ml-2 mt-1'/>
      </div>
    </div>
    </div>
    </div>


    <div className='mt-10 w-96 flex flex-col'>
    <div className='text-[#186F79] text-base font-bold justify-start flex items-start mb-4'>#Paling Populer</div>
    <div className="w-full h-40 rounded-2xl">
       <div className="bg-[url('/hiking_illust.png')] w-full h-full rounded-2xl p-3">
           <p className='ml-2 font-bold text-base text-[#3D3D3D]'>Camping 5 Hari di Alam Liar</p>
           <div className='bg-white bg-opacity-50 p-2 rounded-xl mt-16 flex justify-between items-center'>
               <p>Telah ikut berpatisipasi .....</p>
               <div className='w-28 h-5'>
               <Button3 type="submit" label={'Lihat tantangan'}/>
               </div>
           </div>
       </div>
    </div>
    </div>
    <div className='mt-8 w-96 flex flex-col'>
    <div className='text-[#186F79] text-base font-bold justify-start flex items-start mb-4'>#Penakluk Daratan</div>
    <div className='flex flex-col'>
      <Carousel>
        <div className='flex justify-around'>
        <div className=''>
        <Image src="/blur_bg.png" className='w-full h-full rounded-t-2xl' width={500} height={320} alt=''/>
        </div>
       </div>
       <div className='flex justify-around'>
        <div className=''>
        <Image src="/blur_bg.png" className='w-full h-full rounded-t-2xl' width={500} height={320} alt=''/>
        </div>
       </div>
       <div className='flex justify-around'>
        <div className=''>
        <Image src="/blur_bg.png" className='w-full h-full rounded-t-2xl' width={500} height={320} alt=''/>
        </div>
       </div>
       </Carousel>
    </div>
    </div>
    <div className='mt-8 w-96 flex flex-col'>
    <div className='text-[#186F79] text-base font-bold justify-start flex items-start mb-4'>#Penguasa Air</div>
    <div className='flex flex-col'>
    <Carousel>
        <div className='flex justify-around'>
       <Danau/>
       <Danau/>
       </div>
       <div className='flex justify-around'>
       <Danau/>
       <Danau/>
       </div>
       </Carousel>
    </div>
    </div>


    <div className=' mt-10 w-96 flex flex-col rounded-2xl'>
      <div className='w-full h-96 bg-blue-400 rounded-2xl flex flex-col justify-between items-stretch'>
        <div className='flex justify-start w-full p-5'>
          <ArrowCircleLeftIcon className='w-10 h-10 text-white'/>
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold text-2xl w-56 pl-3 pb-6 '>Menaklukan 5 gunung</p>
          <div className='mb-9 mr-8'>
          <ButtonFollow type="submit" label={'Lihat tantangan'}/>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 h-44'>
        <div className='font-semibold text-center flex flex-col justify-center items-center text-lg hover:text-[#008C96] hover:cursor-pointer'>
        <div className='h-24 flex justify-center items-center'><p>Tentang Challenge</p></div>
        <Icon icon='fluent:target-24-regular' className='w-12 h-12'/>
        </div>
        <div className='font-semibold text-center flex flex-col justify-center items-center text-lg hover:text-[#008C96] hover:cursor-pointer'>
          <div className='h-24 flex justify-center items-center'><p>Partisipan</p></div>
          <UsersIcon className='w-10 h-10'/>
        </div>
        <div className='font-semibold text-center flex flex-col justify-center items-center text-lg hover:text-[#008C96] hover:cursor-pointer'>
          <div className='h-24 flex justify-center items-center'><p>Ketentuan Challenge</p></div>
          <ClipboardCheckIcon className='w-10 h-10'/>
        </div>
      </div>
      <div className='pl-7 text-justify mt-1'>
        <ol>
          <li type='1'> Foto kegiatan pendakian mu baik dipuncak gunung atau saat pendakian yang ada gambar dirimu</li>
          <li type='1'> Foto kegiatan pendakian mu baik dipuncak gunung atau saat pendakian yang ada gambar dirimu</li>
          <li type='1'> Foto kegiatan pendakian mu baik dipuncak gunung atau saat pendakian yang ada gambar dirimu</li>
        </ol>
      </div>
    </div>

    <div className='flex flex-col mt-20 w-96'>
      <div className='flex'> 
        <ArrowCircleLeftIcon className='w-10 h-10 '/>
        <div className='font-medium text-2xl flex justify-center items-center ml-5 w-72'>Buat Postingan Baru</div>
      </div>
    <div className='mt-14 border rounded-lg border-[#35BBBA] w-96 px-4 py-3 flex flex-col'>
    <div className='flex'>
    <Image src="/blur_bg.png" className='rounded-full w-10 h-10 ' width={40} height={40} alt='' />
        <div className='pr-3 flex '>
          <div className='flex flex-col ml-2 items-center justify-center'>
            <div className='font-semibold flex flex-col'>
              nama
            </div>
          </div>
        </div>
      </div>
    <form onSubmit={handleSubmit} className='mt-1'>
    <div className="">
                        <label htmlFor="caption" className="block w-full mb-3">
                            <textarea
                                name="caption"
                                type="text"
                                className="py-2 focus:ring-0 focus:outline-none font-light w-full resize-none overflow-hidden text-sm"
                                placeholder="Tulis Postingan..."
                                // rows="num"
                                // onChange={handleChange}
                                onBlur={handleBlur}
                                data-testid={"input-caption"}
                                ref={textareaRef}
                                value={currentValue}
                                onChange={e=>{setCurrentValue(e.target.value);}}
                            />
                            {
                                touched && errors && touched.caption && errors.caption && (
                                    <div className="text-xs text-red-500 pb-3" data-testid={"error-caption"}>{errors.caption}</div>
                                )
                            }
                        </label>    
                    </div>
                    {/* <div className="h-60 bg-red-400 ">
                        <label htmlFor="files" className=" w-full h-full cursor-pointer flex justify-center items-center ">
                            {
                                preview ? (
                                    <Image className="h-full w-full object-cover" src={preview} />
                                ) : <CameraIcon className="h-8 w-8" />
                            }
                            <input
                                id="files"
                                type="file"
                                name="files"
                                className="hidden"
                                accept=".jpg, .png, .jpeg"
                                onChange={handleChangeFile}
                            />
                        </label>
                        <div className="text-center">
                            {
                                errors && errors.files && (
                                    <div className="text-xs text-red-500 pb-3">{errors.files}</div>
                                )
                            }
                        </div>
                    </div> */}
                    {/* <div className="p-3">
                        <label htmlFor="title" className="block w-full mb-3">
                            <div className="font-bold mb-1">Title</div>
                            <input
                                name="title"
                                type="text"
                                className="py-2 focus:ring-0 focus:outline-none border-b w-full"
                                placeholder="Type your post title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                data-testid={"input-title"}
                            />
                            {
                                touched && errors && touched.title && errors.title && (
                                    <div className="text-xs text-red-500 pb-3" data-testid={"error-title"}>{errors.title}</div>
                                )
                            }
                        </label>
                    </div> */}
                    
                    <div className="flex justify-between items-center">
                      <Icon icon='clarity:image-line' className='w-8 h-7'/>
                        <ButtonPost type="submit" label={loading ? 'Mohon tunggu...' : 'Posting'} />
                    </div>
                </form>
                </div>
          </div>
   </main>



  );
};
export default PostItem;
