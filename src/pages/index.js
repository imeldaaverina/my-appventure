import Head from 'next/head';
// import {Input, Input2} from "../components/input"; 
// import { Button, Button2} from "../components/button"; 
// import { Title, SubTitle,TitleForm, TitleFormBold } from "../components/typography"; 
import LandingContainer from '../containers/landing';
const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <LandingContainer />
      {/* <main className="font-Poppins bg-cover bg-center h-screen bg-[url('../../public/blur_bg.png')] flex justify-center items-center"> 
                <div className="w-96 h-max p-3 text-white rounded-xl shadow-md max-w-md mx-auto fixed bg-[#457275] justify-center items-center"> 
                    <div className="w-full p-2 py-1"> 
                        <TitleFormBold text="Bergabung bersama Komunitas Pecinta Alam dengan mudah hanya di My Appventure" /> 
                    </div> 
                    {/* <div>
                      <img src=''
                    </div> */}
                    {/* <form className="w-full p-2 pt-10 pb-4 bg-[#457275]" 
                    onSubmit={handleSubmit}
                    > */}
                        {/* <div className="py-6">
                        <p className='font-medium text-base'>Ayo bergabung dengan My Appventure untuk mengetahui berita dan update terbaru</p> 
                        </div> */}

                        {/* {getIn(touched, "password") && getIn(errors, "password") && getIn(touched, "email") && getIn(errors, "email")&& ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-2" data-testid="error-password"> 
                           <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-2 leading-5">Alamat email atau kata sandi yang anda masukan <br></br> tidak valid</p>
                        </div> 
                        )}  */}

                        {/* <Input
                        name="email" 
                        label="Email" 
                        type="text" 
                        placeholder="Ketik email anda disini" 
                        // onChange={handleChange} 
                        // onBlur={handleBlur} 
                        dataTestId="input-email" 
                        />  */}
                         
                        {/* {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="text-xs text-red-500 pb-3" data-testid="error-email"> 
                            {getIn(errors, "email")} 
                        </div> 
                        )}  */}
                        {/* {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-1" data-testid="error-email"> 
                            <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-2 leading-5">{getIn(errors, "email")} </p>
                        </div> 
                        )}  */}
{/*                         
                         
                    <div className="flex items-center justify-between pb-5">
                        <div className="flex items-center">
                            <a className="font-semibold text-xs text-white underline" href="#">
                            Lupa kata sandi?
                            </a>
                        </div>
                    </div>

                        <Button type="submit" 
                        label={loading ? 'Please wait...' : 'Berlangganan'} 
                        > 
                    {/* </form> 
                </div> 
            </main>  */}
       
    </>
  );
};
export default LandingPage;
