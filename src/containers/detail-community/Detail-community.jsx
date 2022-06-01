import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailCommunityLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { ButtonFollow } from "../../components/button";

const DetailCommunityContainer = () => {
    const { query } = useRouter();
    const [data, setData] = useState();


    const id = query.id;

    const fetchData = async () => {
        try {

            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/detailkomunitas',
                method: 'get',
                params: {
                    idKomunitas: id,
                }
            });
            console.log("response > ", response.data);
            setData(response.data);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <AuthProvider>
            <DetailCommunityLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./community">
                                    <Icon icon="eva:arrow-circle-left-outline" width="30" />
                                </a>
                            </div>
                            <div className="font-normal flex items-center justify-center w-96 text-xl ">
                                <p>Detail Komunitas</p>
                            </div>
                        </div>

                        {data && (
                            <div className="pt-10">

                                <>
                                    <div className="flex flex-col justify-center items-center mb-10">
                                        <img src={data.data.urlFileName} className='rounded-full h-28 w-28' width={100} height={100} alt='' />
                                        <h1 className="text-2xl py-5">{data.data.namaKomunitas}</h1>
                                        <ButtonFollow />
                                    </div>
                                    <div className="flex-col justify-start">
                                        <h1 className="pt-5 text-lg">Deskripsi:</h1>
                                        <h1 className="text-base">{data.data.deskripsi}</h1>
                                        <h1 className="pt-5 text-lg">Link:</h1>
                                        <h1 className="text-base">{data.data.linkKomunitas}</h1>
                                    </div>

                                </>
                            </div>
                        )}
                    </div>
                </section>
            </DetailCommunityLayout>
        </AuthProvider>
    );
};
export default DetailCommunityContainer;
