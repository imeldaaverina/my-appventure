import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import useAccount from "../account/hooks/useAccount"
import { MyProfileLayout } from "../../components/layout";
import useProfile from "./hooks/useProfile";
import { useEffect, useState } from 'react';

const MyProfileContainer = () => {
    const { profile } = useAccount();
    const { picture } = useAccount();
    const { email } = useProfile();
    const [text, setText] = useState('')

    return (
        <AuthProvider>
            <MyProfileLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./account">
                                    <Icon icon="eva:arrow-circle-left-outline" width="40" />
                                </a>
                            </div>
                            <div className="font-semibold flex items-center justify-center w-96 text-2xl mb-10">
                                <p>Profil Saya</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-40 h-40 m-auto flex justify-center items-center border rounded-full bg-white">
                                <img className="rounded-full w-40 h-40" src={picture} width={100} height={100} />
                            </div>

                            <div>
                                <div className="text-[#329D9C] px-2 font-semibold text-lg pt-10">Username</div>
                                <div className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg">{profile}</div>
                            </div>
                            <div>
                                <div className="text-[#329D9C] px-2 font-semibold text-lg pt-3">Email</div>
                                <div className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg">{email}</div>
                            </div>
                            {/* <div>
                                <div className="text-[#329D9C] px-2 font-semibold text-lg pt-3">Kata Sandi</div>
                                <div className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg">{profile}</div>
                            </div>
                            <input
                                            
                                            type="text"
                                            value={profile}
                                            onChange={(e) => {setText(e.target.value)}}
                                            className="py-3 px-3 border-[#329D9C] text-[#329D9C] text-lg bg-white border-y-2 border-x-2 w-full mb-2 rounded-lg"
                                        />
 */}
                        </div>
                    </div>
                </section>
            </MyProfileLayout>
        </AuthProvider>
    );
};
export default MyProfileContainer;
