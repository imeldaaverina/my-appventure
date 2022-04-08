import {Input, Input2} from "../../components/input"; 
import { Button, Button2, ButtonExit} from "../../components/button";
import { Title, SubTitle,TitleForm, TitleFormBold } from "../../components/typography"; 
import { NoAuthProvider } from "../../providers/auth"; 
import { useFormik, getIn } from "formik"; 
import * as Yup from 'yup'; 
import { useLandingDispatcher } from '../../redux/reducers/landing'; 
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline";
// import Link from "next/link"
 
const validationSchema = Yup.object({ 
    email: Yup.string().required().email(), 
}); 
 
const initialValues = { 
    email: ""
}; 
 
const LandingContainer = () => { 
    const { landing: { loading }, doLanding } = useLandingDispatcher(); 
 
    const onSubmit = async (values) => { 
 
        try { 
            const payload = { 
                identifier: values.email, 
                // password: values.password, 
            }; 
            await doLanding(payload); 
            window.location.href = "/success_landing"; 
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
        <main className="font-Poppins min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('../../public/blur_bg.png')]">
            <div className="text-white rounded-xl w-max mx-4 max-w-md pb-2 bg-[#457275]"> 
                
                <div className="w-full">
                    <div className="flex justify-between"> 
                        <div className="px-5 pt-5">
                            <TitleFormBold text="Bergabung bersama Komunitas Pecinta Alam dengan mudah hanya di My Appventure" /> 
                        </div>
                        <a href="../home">
                            <ButtonExit/>
                        </a>
                    </div> 
                       
                </div> 
                    <div className="flex justify-center items-center">
                      <img src="/Summer camp.svg" className="w-52 h-52"></img>
                    </div>
                    <form 
                      className="w-full px-5 p-2 pt-7 pb-4 bg-[#457275]" 
                      onSubmit={handleSubmit}>
                        <div className="pb-6">
                        <p className='font-medium text-base'>Ayo bergabung dengan My Appventure untuk mengetahui berita dan update terbaru</p> 
                        </div>

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
                        
                        <Button type="submit" disabled={!handleChange} label={loading ? 'Please wait...' : 'Berlangganan'} />
                </form> 
            </div> 
             
        </main>
        </NoAuthProvider> 
    ) 
} 
 
export default LandingContainer;
