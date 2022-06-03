import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ListDestinationLayout } from "../../components/layout";
import Image from "next/image"

const ListDestinationContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
                method: 'get',
                params: {
                    page: 1,
                    size: 30,
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
            <ListDestinationLayout>
                <section>

                        <div className="pt-10">
                            <div className="grid grid-cols-3">
                                {console.log(data)}
                                {data && data.map((item) => {
                                    return (
                                        <>
                                            <a href={`./detail-community?id=${item.id}`}>
                                                <div className="flex flex-col justify-center items-center mb-10 border-[#008C96] rounded-md border-2 mx-5">
                                                    {/* <img src={item.urlFileName} className='rounded-full' width={90} height={90} alt='' />
                                                    <h1 className="text-[#329D9C]">{item.namaKomunitas}</h1> */}
                                                    <img src={item.urlFileName} className='rounded-t-md w-28 h-28' width={90} height={90} alt='' />
                                                    <h1 className="text-[#329D9C]">{item.namaKomunitas}</h1>
                                                </div>
                                            </a>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </ListDestinationLayout>
        </AuthProvider>
    );
};
export default ListDestinationContainer;
