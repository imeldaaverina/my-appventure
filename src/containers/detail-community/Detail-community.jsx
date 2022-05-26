import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailCommunityLayout } from "../../components/layout";

const DetailCommunityContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            
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
        fetchData();
    }, []);

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
                            <div className="font-normal flex items-center justify-center w-96 text-2xl ">
                                <p>Detail Komunitas</p>
                            </div>
                        </div>

                        <div className="pt-10">
                            <div className="grid grid-cols-3">
                                {console.log(data)}
                                <>
                                    <div className="flex flex-col justify-center items-center mb-10">
                                        <img src={data.data.urlFileName} className='rounded-full' width={90} height={90} alt='' />
                                        <h1 className="text-[#329D9C]">{data.data.namaKomunitas}</h1>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </section>
            </DetailCommunityLayout>
        </AuthProvider>
    );
};
export default DetailCommunityContainer;
