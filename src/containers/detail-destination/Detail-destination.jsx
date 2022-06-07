import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailPostLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { ButtonFollow, ButtonBack } from "../../components/button";
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const DetailDestinationContainer = () => {
    const { query } = useRouter();
    const [data, setData] = useState();


    const id = query.id;

    const fetchData = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('data'))
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/detaildestinasi',
                method: 'get',
                params: {
                    idDestinasi: id,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data.data);
            setData(response.data.data);
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
            <DetailPostLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="">
                            <a href="./destination">
                                <Icon icon="eva:arrow-circle-left-outline" width="30" />
                            </a>
                        </div>

                        <div className="font-bold text-2xl mt-10 mb-8">
                            {/* <p>Pantai Kuta</p> */}
                            <p>{data.nama}</p>
                        </div>
                        <div className="flex flex-col">
                            {/* <img className="rounded-t-md" src="./blur_bg.png" /> */}
                            <img className="rounded-t-md" src={data.urlFileName}/>
                        </div>
                        <div className="bg-[#457275] text-white p-3 rounded-b-md">
                            <p className="font-semibold text-lg">Lokasi</p>
                            {/* <p>Jl. Pantai Kuta, Kuta, Kabupaten Badung, Bali, Indonesia</p> */}
                            <p>{data.lokasi}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg mt-8">Tentang {data.nama}:</p>
                        </div>
                        <div>
                            {/* <p>Pantai Kuta adalah sebuah tempat pariwisata yang terletak di kecamatan Kuta,
                                sebelah selatan Kota Denpasar, Bali, Indonesia. Daerah ini merupakan sebuah tujuan
                                wisata turis mancanegara dan telah menjadi objek wisata andalan Pulau Bali sejak awal tahun 1970-an</p> */}
                            <p>{data.tentang}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg mt-8">Harga Tiket</p>
                        </div>
                        <div>
                            {/* <p>GRATIS</p> */}
                            <p>{data.harga}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg mt-8">Jam Operasional</p>
                        </div>
                        <div>
                            {/* <p>Senin-Jumat</p> */}
                            <p>{data.waktu}</p>
                        </div>

                    </div>
                </section>
            </DetailPostLayout>
        </AuthProvider>
    );
};
export default DetailDestinationContainer;
