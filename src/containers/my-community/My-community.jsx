import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { MyCommunityLayout } from "../../components/layout";
import Image from "next/image"

const MyCommunityContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://api-myappventure.herokuapp.com/api/komunitas/komunitasuser/',
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data.Data.content);
            setData(response.data.Data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthProvider>
            <MyCommunityLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./account">
                                    <Icon icon="eva:arrow-circle-left-outline" width="40" />
                                </a>
                            </div>
                            <div className="font-semibold flex items-center justify-center w-96 text-2xl ">
                                <p>Komunitas Saya</p>
                            </div>
                        </div>

                        {data && data.length < 1 && <div className="flex flex-col justify-center text-center mt-12">
                            <div className="flex justify-center">
                                <Image src="/Feeling sorry-pana 1.svg" width={250} height={250} alt="" />
                            </div>
                            <div className="pt-5 text-lg">
                                <p>Anda belum mengikuti komunitas apapun</p>
                            </div>
                        </div>}

                        <div className="pt-10">
                            <div className="grid grid-cols-3">
                                {console.log(data)}
                                {data && data.map((item) => {
                                    return (
                                        <>
                                            <a href={`./detail-community?id=${item.komunitas.id}`}>
                                                <div className="flex flex-col justify-center items-center mb-10">
                                                    <img src={item.komunitas.urlFileName} className='rounded-full w-20 h-20' width={90} height={90} alt='' />
                                                    <h1 className="text-[#3D3D3D] mt-2 flex justify-center text-center">{item.komunitas.namaKomunitas}</h1>
                                                </div>
                                            </a>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </MyCommunityLayout>
        </AuthProvider>
    );
};
export default MyCommunityContainer;
