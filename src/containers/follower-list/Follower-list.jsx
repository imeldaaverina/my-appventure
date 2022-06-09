import AuthProvider from "../../providers/auth/AuthProvider";
import FollowerListLayout from "../../components/layout/FollowerListLayout";
import { Icon } from '@iconify/react';
import NavbarPengikut from "../../components/layout/elements/NavbarPengikut";
import useAccount from "../account/hooks/useAccount"
import Image from "next/image"
import axios from "axios";
import { useEffect, useState } from "react";
import { callAPI } from "../../helpers/network";

const FollowerListContainer = ({ hideFollowButton, isFollowed }) => {
    const { profile } = useAccount();
    const [data, setData] = useState();
    const [listFollowing, setListFollowing] = useState([]);
    const [user, setUser] = useState();

    const fetchListFollowing = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://api-myappventure.herokuapp.com/api/follow/following/${user.id}`,
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                }
            });
            console.log("responsee > ", response.data);
            setListFollowing(response.data.Data.content.map((value) => value.userFollowing.id));

        } catch (error) {
            console.log("error > ", error);
        }
    }

    const handlefollow = async (idFollowing) => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const formData = new FormData();
            console.log(data)

            formData.append("idFollowing", idFollowing);
            formData.append("idFollower", user.id);
            const response = await callAPI({
                url: `/follow/`,
                method: "POST",
                data: formData,
                headers: {
                    Authorization: `Bearer ${user.access_token}`
                },
            });
            if (response.data.status === "404") {
                alert(`Failed to follow post`);
                return;
            }
            await fetchListFollowing();
            await fetchData();
        } catch (error) {
            console.log(error)
            alert(`Failed to unfollow post`);
        }
    };

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://api-myappventure.herokuapp.com/api/follow/follower/${user.id}`,
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                }
            });
            console.log("response > ", response.data.Data.content);
            setData(response.data.Data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchListFollowing();
        setUser(JSON.parse(localStorage.getItem('data')))
    }, []);

    return (
        <AuthProvider>
            <FollowerListLayout>
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
                        <NavbarPengikut />

                        {data && data.length < 1 && <div className="flex flex-col justify-center text-center mt-12">
                            <div className="flex justify-center">
                                <Image src="/Feeling sorry-pana 1.svg" width={250} height={250} alt="" />
                            </div>
                            <div className="pt-5 text-lg">
                                <p>Anda belum diikuti siapapun</p>
                            </div>
                        </div>}

                        {data && data.map(item => (
                            <div className="flex justify-between items-center pt-5 px-5 font-Poppins">
                                <a href={`./user-page?nama=${item.userFollower.nama}`}>
                                    <div className="flex justify-start items-center">
                                        <div>
                                            <img src={item.userFollower.urlFileName} className='rounded-full w-14 h-14' width={50} height={50} alt='' />
                                        </div>
                                        <div className="font-medium text-[#3D3D3D] text-lg pl-3">
                                            <p>{item.userFollower.nama}</p>
                                        </div>
                                    </div>
                                </a>

                                <div className="flex justify-center items-center">
                                    {hideFollowButton = item.userFollower.id === user.id ? <div /> : isFollowed = listFollowing.includes(item.userFollower.id) ?
                                        <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275]"> <button label='diikuti' onClick={() => handlefollow(item.userFollower.id)}>Mengikuti</button> </div>
                                        : <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-[#457275] border-2 border-[#457275] text-white"><button label='Ikuti' onClick={() => handlefollow(item.userFollower.id)}>Ikuti</button></div>}
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </FollowerListLayout>
        </AuthProvider >
    );
};
export default FollowerListContainer;
