import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ListDestinationLayout } from "../../components/layout";
import Image from "next/image"
import React, { Component } from "react";

const ListDestinationContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list',
                method: 'get',
                params: {
                    page: 0,
                    size: 30,
                    nama: '',
                }
            });
            console.log("response > ", response.data.data.content);
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
            <ListDestinationLayout>
                <section>
                    <div className="font-Poppins">
                        <div>
                            <div className="mt-8 mb-4 font-semibold">
                                <p>Popular Destination Untuk Kamu</p>
                            </div>

                            <div className="flex flex-row">
                                {data && data.map(item => (
                                    <a href={`./detail-destination?id=${item.id}`}>

                                        <div className="flex flex-col">
                                            <div className="w-36 h-36 px-2 pt-2 border-2 rounded-sm mx-2">
                                                <img className="rounded-sm" src={"./blur_bg.png"} />
                                                <div className="mt-3 font-semibold text-sm flex justify-center">
                                                    <p>{item.nama}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ListDestinationLayout>
        </AuthProvider >
    );
};
export default ListDestinationContainer;
