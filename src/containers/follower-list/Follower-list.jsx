import AuthProvider from "../../providers/auth/AuthProvider";
import FollowerListLayout from "../../components/layout/FollowerListLayout";
import { Icon } from '@iconify/react';
import NavbarPengikut from "../../components/layout/elements/NavbarPengikut";
import useAccount from "../account/hooks/useAccount"
import Image from "next/image"

const FollowingListContainer = () => {
    const { profile } = useAccount();

    return (
      <AuthProvider>
        <FollowerListLayout>
            <section>
                <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                    <div className="flex justify-between">
                        <a href="./account">
                            <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </a>         
                        <div className="font-bold text-2xl ">
                            {profile}
                        </div>
                        <div className="text-white">
                        <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </div>
                    </div>
                </div>
                <NavbarPengikut/>
                <div className="flex justify-between items-center pt-5 px-5 font-Poppins">
                    <div className="flex justify-start items-center">
                    <div>
                    <Image src="/blur_bg.png" className='rounded-full w-10 h-10' width={50} height={50} alt='' />
                    </div>
                    <div className="font-medium text-[#3D3D3D] text-lg pl-3">
                        <p>fachry</p>
                    </div>
                    </div>
                    <div>
                        mengikuti
                    </div>
                </div>
            </section>
        </FollowerListLayout>
      </AuthProvider>
    );
  };
export default FollowingListContainer;
  