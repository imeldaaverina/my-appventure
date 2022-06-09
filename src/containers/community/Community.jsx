import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { CommunityLayout } from "../../components/layout";

const CommunityContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://api-myappventure.herokuapp.com/api/komunitas/list',
                method: 'get',
                params: {
                    page: 0,
                    size: 100,
                }
            });
            console.log("response > ", response.data);
            setData(response.data.data.content.reverse());
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthProvider>
            <CommunityLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="pt-10">
                            <a href="./create-community">
                                <button
                                    className="bg-white text-[#329D9C] border-[#329D9C] border-2 text-xl w-full h-full rounded-xl py-3 px-3 flex justify-center items-center">
                                    <div className='flex '>
                                        <div className='pr-3'>
                                            <Icon icon="akar-icons:plus" width={30} />
                                        </div>
                                        Buat Komunitas Baru</div>
                                </button>
                            </a>
                        </div>

                        <div className="pt-10">
                            <div className="grid lg:grid-cols-3 grid-cols-2">
                                {console.log(data)}
                                {data && data.map((item) => {
                                    return (
                                        <>
                                            <a href={`./detail-community?id=${item.id}`}>
                                                <div className="flex flex-col justify-center h-40 mb-10 border-[#008C96] rounded-md border-2 mx-5">
                                                    <div className='rounded-t-md w-full h-24'>
                                                    <img src={item.urlFileName} className='rounded-t-md w-full h-24' width={90} height={90} alt='' />
                                                    </div>
                                                    <div className="h-16 items-center flex justify-center text-center">
                                                    <h1 className="text-[#329D9C] text-center">{item.namaKomunitas}</h1>
                                                    </div>
                                                    
                                                </div>
                                            </a>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </CommunityLayout>
        </AuthProvider>
    );
};
export default CommunityContainer;
