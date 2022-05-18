import {Input, Inputcommunity} from "../../components/input";
import { useRouter }  from "next/router";
import { useState } from 'react';
import { Button, Button2, ButtonExit, ButtonMyProfileSandi } from "../../components/button";  
import { Title, SubTitle, TitleForm } from "../../components/typography";  
import { NoAuthProvider } from "../../providers/auth";  
import { useFormik, getIn } from "formik";  
import * as Yup from 'yup';  
// import { useCommunityDispatcher } from '../redux/reducers/Community';  
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline";
import { HeartIcon, ChatIcon, LinkIcon, ArrowCircleLeftIcon, UsersIcon, ClipboardCheckIcon, CameraIcon} from '@heroicons/react/outline';
import { useCommunityDispatcher } from '../../redux/reducers/createCom';  
import Image from "next/dist/client/image";
 
const validationSchema = Yup.object({  
    nama: Yup.string().required("nama dan deskripsi wajib diisi"),
    link: Yup.string(),
    deskripsi: Yup.string().required("isi nama deskripsi"),
    // files: Yup.mixed().required("diperlukan foto profil"),
});  
  
const initialValues = { 
    nama:"", 
    link: "",  
    deskripsi: "",
    files: null,  
};  
  
const CommunityContainer = () => {  
    const { createCommunity: { loading }, doCommunity } = useCommunityDispatcher(); 
    
    const {push} = useRouter();
   
    const onSubmit = async (values) => {  
  
        try {  
            const payload = {  
                nama_komunitas: values.nama_komunitas,
                link_grup_komunitas: values.link,  
                deskripsi: values.deskripsi,  
            };  
            await doCommunity(payload);  
            
        } catch (error) {  
            alert(error);  
        }  
        setLoading(true);

      //upload profil picture
      const formData = new FormData();
      formData.append('files', formValues.files);
      const upload = await callAPI({
        url: '/komunitas/create',
        method: 'post',
        data: formData,
        headers: {
          Authorization: `Bearer ${getJwt()}`,
        },
      });

      const fileUrl = upload.data[0].url;
      const payload = {
        data: {
          photo: `${fileUrl}`,
          isPublish: true,
          postedBy: `${getUser().NamaKomunitas}`,
        },
      };

      const submitCommunity = await callAPI({
        url: '/komunitas/create',
        method: 'post',
        data: payload,
        headers: {
          Authorization: `Bearer ${getJwt()}`,
        },
      });
      
      if (submitCommunity.status === 200) {
        setLoading(false);
        alert('Create community success!');
        push('/success_login');
      }
    };
      
    const {  
        handleChange,  
        handleBlur,  
        handleSubmit,  
        errors,  
        touched,  
        setFieldValue,
    } = useFormik({  
        initialValues,  
        validationSchema,  
        onSubmit  
    });  
    
    const [preview, setPreview] = useState();
    const handleChangeFile = (e) => {
      const files = e.target.files;
      if (files) {
        setPreview(URL.createObjectURL(files[0]));
        setFieldValue('files', files[0]);
      }
    };
 
  return ( 
    <NoAuthProvider>  
      <main className="font-Poppins min-h-screen bg-cover flex flex-col justify-center items-center bg-center">
      <div className='flex flex-col w-96'>
      
      <div className='flex'> 
        <ArrowCircleLeftIcon className='w-10 h-10 '/>
        <div className='font-medium text-2xl flex justify-center items-center ml-5 lg:max-w-7-xl max-w-sm'>Buat Komunitas Baru</div>
      </div>
      </div>
      {/* <div className="text-white rounded-xl pl-5 lg:max-w-7-xl max-w-sm bg-[#457275]">  */}
      <div className="lg:max-w-7-xl max-w-sm">
      <div className="w-full">
        
        </div> 
          <form className="w-full rounded-xl pr-5 pl-1 p-2 pt-7 pb-4" onSubmit={handleSubmit}>
              <div className="text-center flex-col justify-center items-center">
                  <div className="pt-2">
                  <label
                    htmlFor="files"
                    className="w-20 h-20 m-auto flex justify-center items-center border rounded-full cursor-pointer bg-white">
                      {preview ? <Image className="h-full w-full object-cover rounded-full bg-white" src={preview} /> : <CameraIcon className="h-8 w-8 text-gray-600" />}
                    {/* <input id="files" type="file" name="files" className="hidden" accept=".jpg, .png, .jpeg" onChange={handleChangeFile} dataTestId="input-files"   /> */}
                  </label>
                  </div>
              </div>
              <div className="font-normal text-sm mb-1 flex justify-between">
                    Nama Komunitas
                    
                    </div>
                <Inputcommunity
                  name="nama" 
                  label="" 
                  type="text" 
                  placeholder="Isi nama komunitas kamu" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                //   dataTestId="input-nama" 
                /> 
                {/* <div className="flex justify-center"> */}
                <div className="font-normal text-sm mb-1 flex justify-between">
                        Link Grup Komunitas
                        {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-email"> 
                            <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                            {getIn(errors, "email")} 
                        </div> 
                        )} 
                    </div>
                <Inputcommunity
                  name="link" 
                  label=""
                  type="text" 
                  placeholder="Grup whatsApp, telegram, dll" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                //   dataTestId="input-link" 
                /> 
                
                <div className="font-normal text-sm flex justify-between">
                        Deskripsi
                        {getIn(touched, "password") && getIn(errors, "password") && ( 
                        <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-password"> 
                            <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                           {getIn(errors, "password")}
                        </div> 
                        )} 
                    </div>
                         
                <Inputcommunity 
                  name="deskripsi" 
                  label="" 
                  type="text"
                  placeholder="Isi deskripsi komunitas kamu" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                 
                />
               <div>{getIn(touched, "nama") && getIn(errors, "nama") && ( 
                        <div className="flex items-center justify-start text-xs text-black font-light" data-testid="error-nama"> 
                            <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                            {getIn(errors, "nama")} 
                        </div> 
                        )} 
                        </div>
              <div className="mt-8">
                  <ButtonMyProfileSandi type="submit" label={loading ? 'Please wait...' : 'Bikin Komunitas'}/>  
                  
                {/* <Button type="submit" label={loading ? 'Please wait...' : 'Daftar sekarang'}/>   */}
               
              </div>  
        </form> 
        
      </div>
    {/* </div>  */}
    </main>
    </NoAuthProvider>  
  ); 
}; 
 
export default CommunityContainer;