import { CheckCircleIcon } from '@heroicons/react/outline';
import { NoAuthProvider } from "../providers/auth";
import { ButtonExit } from "../components/button";

const SuccessLandingPage = () => {
  return (
    <>
      <NoAuthProvider>
        <main className="w-full h-screen flex text-[#008C96] space-y-3 justify-center items-center bg-cover bg-center bg-[url('/blur_bg.png')]">
          <div className="shadow-md rounded-xl max-w-md bg-white flex flex-col font-Poppins text-3xl">
            <div className="flex justify-end">
              <a href="./for-you">
                <ButtonExit />
              </a>
            </div>
            <div className='p-7 h-72 flex flex-col justify-center items-center'>
              <div>
                <CheckCircleIcon className="w-20 h-20 bg-white mt-2" />
              </div>
              <p className='mt-8 max-w-md font-semibold text-center'>Terimakasih telah berlangganan!</p>
              <p className='pb-8 mt-8 max-w-md font-normal text-center text-[#292929] text-base'>Terimakasih telah berlangganan! Kami akan mengirimkan berbagai penawaran menarik dari My Appventure ke alamat email anda</p>
            </div>
          </div>
        </main>
      </NoAuthProvider>
    </>
  );
};
export default SuccessLandingPage;