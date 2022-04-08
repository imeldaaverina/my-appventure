import {Input, Input2} from "../../components/input";
import { useRouter }  from "next/router";
import { useState } from 'react';
import { Button, Button2, ButtonExit } from "../../components/button";  
import { Title, SubTitle, TitleForm } from "../../components/typography";  
import { NoAuthProvider } from "../../providers/auth";  
import { useFormik, getIn } from "formik";  
import * as Yup from 'yup';  
import { useRegistrationDispatcher } from '../../redux/reducers/registration';  
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline";
import { CameraIcon } from '@heroicons/react/outline';
 
const validationSchema = Yup.object({  
    username: Yup.string().required("diperlukan username").min(3, "username gunakan 3-15 karakter").max(15, "username gunakan 3-15 karakter"),
    email: Yup.string().required("diperlukan email").email("email tidak valid"),  
    password: Yup.string().required("diperlukan kata sandi").min(6, "Kata sandi gunakan 6-10 karakter, tanpa spasi").max(10, "Kata sandi gunakan 6-10 karakter, tanpa spasi").matches(/^\S+$/, "Kata sandi gunakan 6-10 karakter, tanpa spasi"),  
    files: Yup.mixed().required("diperlukan foto profil"),
});  
  
const initialValues = { 
    username:"", 
    email: "",  
    password: "",
    files: null,  
};  
  
const RegistrationContainer = () => {  
    const { registration: { loading }, doRegistration } = useRegistrationDispatcher(); 
    
    const {push} = useRouter();
   
    const onSubmit = async (values) => {  
  
        try {  
            const payload = {  
                username: values.username,
                email: values.email,  
                password: values.password,  
            };  
            await doRegistration(payload);  
            push('/success_registration');
            // window.location.href = "/";  
        } catch (error) {  
            alert(error);  
        }  
        setLoading(true);

      //upload profil picture
      const formData = new FormData();
      formData.append('files', formValues.files);
      const upload = await callAPI({
        url: '/user/upload',
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
          postedBy: `${getUser().username}`,
        },
      };
      const submitRegistration = await callAPI({
        url: '/user/daftar',
        method: 'post',
        data: payload,
        headers: {
          Authorization: `Bearer ${getJwt()}`,
        },
      });
      if (submitRegistration.status === 200) {
        setLoading(false);
        alert('Create posts success!');
        push('/success_registration');
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
      <main className="font-Poppins min-h-screen bg-cover flex justify-center items-center bg-center bg-[url('/blur_bg.png')]">
      <div className="text-white rounded-xl pl-5 lg:max-w-7-xl max-w-sm bg-[#457275]"> 
      <div className="lg:max-w-7-xl max-w-sm">
      <div className="w-full">
        <div className="flex justify-between"> 
          <div className="pr-9 pt-5">
            <Title text="Hai," />
          </div>
          <a href="#">
            <ButtonExit />
          </a>
        </div>
          <div className="pr-9">
            <SubTitle content="Belum punya akun?" /> 
          </div>
        </div> 
          <form className="w-full rounded-xl pr-5 pl-1 p-2 pt-7 pb-4 bg-[#457275]" onSubmit={handleSubmit}>
              <div className="text-center flex-col justify-center items-center">
                  <TitleForm text="Yuk daftar!" /> 
                  <div className="pt-2">
                  <label
                    htmlFor="files"
                    className="w-20 h-20 m-auto flex justify-center items-center rounded-full cursor-pointer bg-white">
                      {preview ? <img className="h-full w-full object-cover rounded-full bg-white" src={preview} /> : <CameraIcon className="h-8 w-8 text-gray-600" />}
                    <input id="files" type="file" name="files" className="hidden" accept=".jpg, .png, .jpeg" onChange={handleChangeFile} dataTestId="input-files"   />
                  </label>
                  </div>
              </div>
              <div className="font-normal text-sm mb-1 flex justify-between">
                    Username
                    {getIn(touched, "username") && getIn(errors, "username") && ( 
                        <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-username"> 
                            <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                            {getIn(errors, "username")} 
                        </div> 
                        )} 
                    </div>
                <Input
                  name="username" 
                  label="" 
                  type="text" 
                  placeholder="Ketik username anda disini" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  dataTestId="input-username" 
                /> 
                {/* <div className="flex justify-center"> */}
                <div className="font-normal text-sm mb-1 flex justify-between">
                        Email
                        {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-email"> 
                            <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                            {getIn(errors, "email")} 
                        </div> 
                        )} 
                    </div>
                <Input
                  name="email" 
                  label=""
                  type="text" 
                  placeholder="Ketik email anda disini" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  dataTestId="input-email" 
                /> 
                
                <div className="font-normal text-sm flex justify-between">
                        Kata sandi
                        {getIn(touched, "password") && getIn(errors, "password") && ( 
                        <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-password"> 
                            <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                           {getIn(errors, "password")}
                        </div> 
                        )} 
                    </div>
                         
                <Input2 
                  name="password" 
                  label="" 
                  type="password"
                  placeholder="Masukan kata sandi anda" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  dataTestId="input-password" 
                />
               
              <div className="mt-8">
                <Button type="submit" label={loading ? 'Please wait...' : 'Daftar sekarang'}/>  
                <div className="text-sm flex justify-center mt-2 pb-3">
                  <p className="text-white font-light text-xs">
                    Sudah punya akun? <a className="font-semibold underline text-[#FEC868]" href="../login">Masuk</a>
                  </p>
                </div>
              </div>  
        </form> 
        
      </div>
    </div> 
    </main>
    </NoAuthProvider>  
  ); 
}; 
 
export default RegistrationContainer;