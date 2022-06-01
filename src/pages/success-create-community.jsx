import { CheckCircleIcon } from '@heroicons/react/outline';
import { ButtonExit } from '../components/button';

const SuccessCommunityPage = () => {
  return (
    <>
      <main className="w-full h-screen flex text-[#008C96] space-y-3 justify-center items-center bg-cover bg-center">
        <div className="shadow-md rounded-xl max-w-md bg-white flex flex-col font-Poppins text-3xl">
          <div className="flex justify-end">
            <a href="./community">
              <ButtonExit />
            </a>
          </div>
          <div className='p-7 h-72 flex flex-col justify-center items-center'>
            <CheckCircleIcon className="w-20 h-20 bg-white mt-2" />
            <p className='mt-12 pb-3 max-w-md font-semibold text-center'>Komunitas Anda berhasil dibuat!</p>
          </div>
        </div>
      </main>
    </>
  );
};
export default SuccessCommunityPage;