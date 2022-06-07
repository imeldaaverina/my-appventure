import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailCommunityLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { ButtonFollow, ButtonBack } from "../../components/button";
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

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

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const [datas, setDatas] = useState();

    const fetchDatas = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/post/postingankomunitas/list`,
                method: 'get',
                params: {
                    page: 0,
                    size: 30,
                    idUser: user.id,
                    idKomunitas: id,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data);
            setDatas(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchDatas();
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
                                {/* <ButtonBack/> */}
                            </div>
                            <div className="font-normal flex items-center justify-center w-96 text-xl ">
                                <p>Detail Komunitas</p>
                            </div>
                        </div>

                        {data && (
                            <div className="pt-10 mb-14">

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

                        <div className="flex justify-end sticky top-24 right-10 mr-10 mt-10">
                            <Link href="/upload-community" className="" passHref>
                                <a>
                                    <Image
                                        src="/postIcon.svg"
                                        className="w-16"
                                        width={65}
                                        height={65}
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>

                        {datas && datas.map((items) => {
                            return (
                                <>
                                    <main className="m-auto flex justify-center font-Poppins">

                                        <div className=" rounded-2xl flex justify-center items-center w-96 shadow-xl flex-col my-3 border border-[#16737B]">
                                            <div>
                                                <img src={items.user.urlFileName1} className="rounded-t-2xl" alt="gambar-postingan" />
                                            </div>
                                            <div className=" p-4 flex flex-col w-full rounded-2xl">
                                                <div className="flex justify-between">
                                                    <div className="flex w-full">
                                                        <img
                                                            src={items.user.urlFileName}
                                                            className="rounded-full w-10 h-10"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                        <div className="pr-3 w-96 flex justify-between">
                                                            <div className="flex flex-col ml-2">
                                                                <div className="font-medium text-sm mt-1">{items.user.nama}</div>
                                                                <div className="font-normal text-xs">{items.created_date}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-sm mt-4">
                                                    <div className="w-72 font-light text-sm">
                                                        {isReadMore ? items?.text.slice(0, 278) : items?.text}
                                                        {items.text.length > 278 && (
                                                            <span onClick={toggleReadMore} className="font-semibold">
                                                                {isReadMore
                                                                    ? "...Baca lebih lanjut"
                                                                    : " ...Tampilkan lebih sedikit"}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="bg-white flex justify-start mt-1">
                                                    <div className="flex justify-center items-center -mx-1 my-3">
                                                        <HeartIcon className="text-red-500 w-6 h-6" />{items.jumlahLike}
                                                        {/* <span className="text-2xl block w-full">
            {home.counter}
          </span>
          </div> */}
                                                        <ChatIcon className="w-6 h-6 ml-3" />{items.jumlahKomentar}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </main>
                                </>
                            )
                        })}

                    </div>
                </section>
            </DetailCommunityLayout>
        </AuthProvider>
    );
};
export default DetailCommunityContainer;
