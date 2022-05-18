import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import useAccount from "../account/hooks/useAccount"
import { MyProfileLayout } from "../../components/layout";
import useProfile from "./hooks/useProfile";

const MyProfileContainer = () => {
    const { profile } = useAccount();
    const { email } = useProfile ();

    return (
      <AuthProvider>
        <MyProfileLayout>
            <section>
                <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                    <div className="flex justify-between">
                        <a href="./account">
                            <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </a>         
                        <div className="font-semibold text-2xl ">
                            <p>Profil Saya</p>
                        </div>
                        <div className="text-white">
                        <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="text-[#329D9C] px-2 font-semibold text-lg pt-10">Username</div>
                            <div className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg">{profile}</div>
                        </div>
                        <div>
                            <div className="text-[#329D9C] px-2 font-semibold text-lg pt-3">Email</div>
                            <div className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg">{email}</div>
                        </div>
                        <div>
                            <div className="text-[#329D9C] px-2 font-semibold text-lg pt-3">Kata Sandi</div>
                            <div className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg">{profile}</div>
                        </div>
                    </div>
                </div>                
            </section>
        </MyProfileLayout>
      </AuthProvider>
    );
  };
export default MyProfileContainer;
