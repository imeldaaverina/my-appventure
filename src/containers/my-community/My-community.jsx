import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { MyCommunityLayout } from "../../components/layout";
import { useListCommunityDispatcher } from "../../redux/reducers/listCommunity/slice";

const MyCommunityContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
                method: 'get',
            });
            //   console.log("response > ", response.data);
            setData(response.data.data.content);
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

                        <div className="pt-5">
                            {console.log(data)}
                            {data && data.map((item) => {
                                return (
                                    <>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="flex flex-col justify-center items-center my-2 mx-2 bg-blue-400">
                                                <img src={item.urlFileName} />
                                                <h1 className="">{item.namaKomunitas}</h1>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </MyCommunityLayout>
        </AuthProvider>
    );
};
export default MyCommunityContainer;
