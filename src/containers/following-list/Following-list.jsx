import AuthProvider from "../../providers/auth/AuthProvider";
import FollowingListLayout from "../../components/layout/FollowingListLayout";
import NavbarMengikuti from "../../components/layout/elements/NavbarMengikuti";
import { Icon } from '@iconify/react';
import axios from "axios";
import useAccount from "../account/hooks/useAccount"
import Image from "next/image"
import { useEffect, useState } from "react";
import { ButtonFollow } from "../../components/button";

const FollowingListContainer = () => {
    const { profile } = useAccount();

    const [data, setData] = useState();

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/follow/following/${user.id}`,
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                }
            });
            console.log("response > ", response.data);
            setData(response.data.Data.content);
            console.log(data)
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <AuthProvider>
            <FollowingListLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./account">
                                    <Icon icon="eva:arrow-circle-left-outline" width="40" />
                                </a>
                            </div>
                            <div className="font-semibold flex items-center justify-center w-96 text-2xl ">
                                <p>{profile}</p>
                            </div>
                        </div>
                        <NavbarMengikuti />
                       { console.log(data)}

                        {data && data.map(item => (
                            <div className="flex justify-between items-center pt-5 px-5 font-Poppins">
                                <div className="flex justify-start items-center">
                                    <div>
                                        <img src={item.userFollowing.urlFileName} className='rounded-full w-10 h-10' width={50} height={50} alt='' />
                                    </div>
                                    <div className="font-medium text-[#3D3D3D] text-lg pl-3">
                                        <p>{item.userFollowing.nama}</p>
                                    </div>
                                </div>
                                <div>
                                    <ButtonFollow />
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </FollowingListLayout>
        </AuthProvider>
    );
};
export default FollowingListContainer;
