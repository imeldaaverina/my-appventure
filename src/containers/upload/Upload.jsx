
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useFormik, getIn } from "formik";
import * as Yup from 'yup';
import { useState, useRef, useEffect } from "react";
import { Icon } from '@iconify/react';
import { HeartIcon, ChatIcon, LinkIcon, ArrowCircleLeftIcon, UsersIcon, ClipboardCheckIcon, CameraIcon} from '@heroicons/react/outline';
import { Button3, ButtonFollow, Button, ButtonPost} from '../components/button';
import { useCreatePostDispatcher } from "../redux/reducers/post";

const validationSchema = Yup.object({
    post: Yup.string().required(),
    files: Yup.array().max(10, "File maksimal 10")
});

const initialValues = {
    post: '',
    files: null
}

const CreatePost = () => {
    const [previews, setPreviews] = useState();
    const {
        createPost: { loading },
        doSubmit,
      } = useCreatePostDispatcher();
      const onSubmit = async (values) => {
        await doSubmit(values);
      };

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        // values,
        touched,
        setFieldValue,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const handleChangeFiles = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
        const filePreviews = [];
        for (let i = 0; i < files.length; i++) {
        filePreviews.push(files[i]);
        }

        setPreviews(filePreviews);
        setFieldValue("files", filePreviews);

        e.target.value = "";
        }
    };

    const textareaRef = useRef(null);
    const [currentValue, setCurrentValue ] = useState("");// you can manage data with it

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);

    const renderPreviews = () => {
        if (previews && previews.length > 0) {
          return previews.map((item) => (
            <div className="inline-flex justify-center items-center text-center h-28 w-28  text-sm cursor-pointer hover:bg-gray-300 rounded-lg">
              <img
                src={URL.createObjectURL(item)}
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
          ));
        }
        return <></>;
      };
    
return (
<div className="min-h-screen font-Poppins flex justify-center ">
<div className="max-w-lg">
<div className='flex flex-col mt-5 w-96 justify-center items-center'>
      <div className='flex'> 
        <ArrowCircleLeftIcon className='w-10 h-10 '/>
        <div className='font-medium text-2xl flex justify-center items-center ml-5 w-72'>Buat Postingan Baru</div>
      </div>
    <div className='mt-14 border rounded-lg border-[#35BBBA] w-96 px-4 py-3 flex flex-col'>
    <div className='flex'>
    <img src="blur_bg.png" className='rounded-full w-10 h-10 ' alt='' />
        <div className='pr-3 flex '>
          <div className='flex flex-col ml-2 items-center justify-center'>
            <div className='font-semibold flex flex-col'>
              nama
            </div>
          </div>
        </div>
      </div>
  <form onSubmit={handleSubmit} className='mt-1'>
    <div className="rounded-lg flex flex-col justify-start items-start">
      <label className="block w-full mb-3">
      <textarea
        name="caption"
        type="text"
        className="py-2 focus:ring-0 focus:outline-none font-light w-full resize-none overflow-hidden text-sm"
        placeholder="Tulis Postingan..."
        onBlur={handleBlur}
        data-testid={"input-caption"}
        ref={textareaRef}
        value={currentValue}
        onChange={e=>{setCurrentValue(e.target.value);}}
      />
      </label>
      <div>
      <div className=" -ml-4 pl-2 pr-1 my-3 w-96 grid grid-cols-3 lg:grid-cols-3 gap-1">
        {renderPreviews()}
      </div>
      <div className='flex justify-between w-96 -ml-4 pl-2 pr-3'>
          <div>
      <label
          htmlFor="uploads"
          className="inline-flex justify-center items-center text-center text-sm cursor-pointer rounded-lg"
        >
          <Icon icon='clarity:image-line' className='w-8 h-7'/>
          <input
            type="file"
            name="files"
            id="uploads"
            className="hidden"
            accept="image/*"
            onChange={handleChangeFiles}
            multiple
          />
        </label>
        </div>
        <div><ButtonPost type="submit" label={loading ? 'Mohon tunggu...' : 'Posting'} /></div>
        </div>
        </div>
     
    </div>
  </form>
</div>
</div>
</div>
</div>
  );
};
export default CreatePost;
