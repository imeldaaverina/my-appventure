import NoAuthProvider from "../../providers/auth/NoAuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { CommunityNotLoginLayout } from "../../components/layout";

const CommunityNotLoginContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
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
        <NoAuthProvider>
            <CommunityNotLoginLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="pt-10">
                            <div className="grid grid-cols-3">
                                {console.log(data)}
                                {data && data.map((item) => {
                                    return (
                                        <>
                                            <div className="flex flex-col justify-center items-center mb-10 border-[#008C96] rounded-md border-2 mx-5">
                                                <img src={item.urlFileName} className='rounded-t-md w-28 h-28' width={90} height={90} alt='' />
                                                <h1 className="text-[#329D9C] text-center">{item.namaKomunitas}</h1>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </CommunityNotLoginLayout>
        </NoAuthProvider>
    );
};
export default CommunityNotLoginContainer;
