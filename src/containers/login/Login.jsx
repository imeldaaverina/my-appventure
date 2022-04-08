import {Input, Input2} from "../../components/input"; 
import { Button, Button2, ButtonExit} from "../../components/button"; 
import { Title, SubTitle,TitleForm } from "../../components/typography"; 
import { NoAuthProvider } from "../../providers/auth"; 
import { useFormik, getIn } from "formik"; 
import * as Yup from 'yup'; 
import { useRouter }  from "next/router";
import { useLoginDispatcher } from '../../redux/reducers/login'; 
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline";
 
const validationSchema = Yup.object({ 
    email: Yup.string().required("diperlukan email").email("email tidak valid"), 
    password: Yup.string().required("diperlukan kata sandi"),
}); 

 
const initialValues = { 
    email: "", 
    password: "" 
}; 
 
const LoginContainer = () => { 
    const { login: { loading }, doLogin } = useLoginDispatcher(); 

    const {push} = useRouter();

    const onSubmit = async (values) => { 
 
        try { 
            const payload = { 
                username: values.email, 
                password: values.password, 
            }; 
            await doLogin(payload); 
            // window.location.href = "/"; 
            push('/success_login');
        } catch (error) { 
            alert(error); 
        } 
    } 
 
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors, 
        touched, 
    } = useFormik({ 
        initialValues, 
        validationSchema, 
        onSubmit 
    }); 
 
    return ( 
        <NoAuthProvider> 
          <main className="font-Poppins flex justify-center items-center bg-cover bg-center min-h-screen bg-[url('../../public/blur_bg.png')]">
            <div className="text-white rounded-xl w-1/3 min-w-max max-w-lg bg-[#457275]"> 
                <div className="w-full">
                    <div className="w-full"> 
                      <div className="flex justify-between">
                        <div className="px-5 pt-5">
                        <Title text="Hai," />
                        <Title /> 
                        </div>
                        <a href="./home">
                        <ButtonExit />
                        </a>
                      </div>
                      <div className="px-5">
                        <SubTitle content="Selamat Datang!" /> 
                        </div>
                    </div> 
                    <form className="w-full rounded-xl px-5 p-2 pt-10 pb-4 bg-[#457275]" onSubmit={handleSubmit}>
                        <div className="pb-7 pt-4 text-center">
                        <TitleForm text="Masuk ke akun Anda" />   
                        </div>

                        {getIn(touched, "password") && getIn(errors, "password") && getIn(touched, "email") && getIn(errors, "email")&& ( 
                        <div className="flex items-center justify-center text-xs font-semibold text-[#FF8181] pb-4" data-testid="error-password"> 
                           <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-1 leading-5">Alamat email atau kata sandi yang <br></br> anda masukan tidak valid</p>
                        </div> 
                        )} 

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
                         
                    <div className="flex items-center justify-between pb-5">
                        <div className="flex items-center">
                            <a className="font-light py-2 text-xs text-white underline" href="#">
                            Lupa kata sandi?
                            </a>
                        </div>
                    </div>
                        <Button type="submit" label={loading ? 'Please wait...' : 'Masuk'} href="../success_registration"/> 
                        <div className="text-sm flex justify-center mt-2">
                            <p className="text-white font-light text-xs">
                            Belum punya akun? <a className="underline font-semibold text-[#FEC868]" href="../registration">Daftar Disini</a>
                            </p>
                        </div>
                    </form> 
                </div> 
            </div> 
          </main>
        </NoAuthProvider> 
    ) 
} 
 
export default LoginContainer;
