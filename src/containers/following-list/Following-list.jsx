import AuthProvider from "../../providers/auth/AuthProvider";
import FollowingListLayout from "../../components/layout/FollowingListLayout";
import NavbarMengikuti from "../../components/layout/elements/NavbarMengikuti";
import { Icon } from '@iconify/react';
import axios from "axios";
import useAccount from "../account/hooks/useAccount"
import Image from "next/image"
import { useEffect, useState } from "react";
import { ButtonFollow } from "../../components/button";
import { callAPI } from "../../helpers/network";

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
        } catch (error) {
            console.log("error > ", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    const [loading, setLoading] = useState(false);
    const [follow, setFollow] = useState();

    const handleOnFollow = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        await callAPI({
            url: '/follow/',
            method: "POST",
            params: {
                idFollower: user.id,
                idFollowing: data[0].userFollowing.id,
            },
            headers: {
                Authorization: `Bearer ${user.access_token}`,
            },

        });

        setFollow();
        setLoading(false);
    };


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
                        {console.log(data)}

                        {data && data.length < 1 && <div className="flex flex-col justify-center text-center mt-12">
                            <div className="flex justify-center">
                                <Image src="/Feeling sorry-pana 1.svg" width={250} height={250} alt="" />
                            </div>
                            <div className="pt-5 text-lg">
                                <p>Anda belum mengikuti siapapun</p>
                            </div>
                        </div>}

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
                                    {/* <button
                                        className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275] focus:bg-[#457275] focus:text-white"
                                        onClick={handleOnFollow}
                                    >
                                        {follow ? "Ikuti" : "Mengikuti"} {loading && "..."}
                                    </button> */}
                                    <ButtonFollow/>
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
