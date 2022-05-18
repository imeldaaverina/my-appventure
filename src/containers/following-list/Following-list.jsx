import AuthProvider from "../../providers/auth/AuthProvider";
import FollowingListLayout from "../../components/layout/FollowingListLayout";
import NavbarMengikuti from "../../components/layout/elements/NavbarMengikuti";
import { Icon } from '@iconify/react';
import useAccount from "../account/hooks/useAccount"
import Image from "next/image"
import { ButtonFollow } from "../../components/button";

const FollowingListContainer = () => {
  const { profile } = useAccount();

    return (
      <AuthProvider>
        <FollowingListLayout>
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
                <NavbarMengikuti/>
                <div className="flex justify-between items-center pt-5 px-5 font-Poppins">
                    <div className="flex justify-start items-center">
                    <div>
                    <Image src="/blur_bg.png" className='rounded-full w-10 h-10' width={50} height={50} alt='' />
                    </div>
                    <div className="font-medium text-[#3D3D3D] text-lg pl-3">
                        <p>imell</p>
                    </div>
                    </div>
                    <div>
                        <ButtonFollow/>
                    </div>
                </div>

            </section>
        </FollowingListLayout>
      </AuthProvider>
    );
  };
  export default FollowingListContainer;
  