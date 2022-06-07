import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailCommunityLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { ButtonFollow } from "../../components/button";
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const UserPageContainer = () => {
    const { query } = useRouter();
    const [data, setData] = useState();
    const [jumlahKomunitas, setJumlahKomunitas] = useState();
    const [komunitas, setKomunitas] = useState();
    const [post, setPost] = useState();

    const nama = query.nama;

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/user/detail/cariuser',
                method: 'get',
                params: {
                    page: 0,
                    size: 300,
                    nama: nama
                }
            });
            console.log("response data > ", response.data.data.content[0]);
            setData(response.data.data.content[0]);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJumlahKomunitas = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/komunitas/jumlahkomunitasuser/${data.id}`,
                method: 'get',
                params: {
                    page: 0,
                    size: 30,
                    idUser: data.id,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data);
            setJumlahKomunitas(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchKomunitas = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/komunitasuser/',
                method: 'get',
                params: {
                    idUser: data.id,
                    page: 0,
                    size: 30,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("responsesssssss > ", response.data.Data.content);
            setKomunitas(response.data.Data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };


    const fetchPost = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/post/list`,
                method: 'get',
                params: {
                    idUser: data.id,
                    page: 0,
                    size: 300,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data);
            setPost(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };


    useEffect(() => {
        if (nama) {
            fetchData();
        }
    }, [nama]);

    useEffect(() => {
        if (data) {
            fetchJumlahKomunitas();
            fetchPost();
        }
    }, [data]);


    return (
        <AuthProvider>
            <DetailCommunityLayout>
                <section>

                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex mb-10">
                            <div className="">
                                <a href="./home">
                                    <Icon icon="eva:arrow-circle-left-outline" width="30" />
                                </a>
                            </div>
                            {data && data.nama && (
                                <div className="font-normal flex items-center justify-center w-96 text-xl ">
                                    <p>{data.nama}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex w-full">
                                {data && data.nama && (
                                    <div>
                                        <img
                                            src={data.urlFileName}
                                            className="rounded-full w-24 h-24"
                                            width={50}
                                            height={50}
                                            alt=""
                                        />
                                    </div>
                                )}

                                <div className="pr-3 w-96 flex justify-between">
                                    <div className="flex flex-col ml-8 justify-center items-center">
                                        <div className="font-medium text-base mt-1">1</div>
                                        <div className="font-normal text-sm">Komunitas</div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="font-medium text-base mt-1">1</div>
                                        <div className="font-normal text-sm">Diikuti</div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="font-medium text-base mt-1">1</div>
                                        <div className="font-normal text-sm">Pengikut</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center my-5">
                            IKUTI
                        </div>

                        <div className="mb-4">
                            Komunitas
                        </div>

                        {/* {komunitas && komunitas.map((item) => {
                            return (
                                <>
                                    <a href={`./detail-community?id=${item.id}`}> */}
                        <div className="flex mb-10">
                            <img src="./background.jpg" className='rounded-full w-20 h-20' width={90} height={90} alt='' />
                        </div>
                        {/* </a>
                                </>
                            )
                        })} */}

                        {post && post.map((item) => {
                            return (
                                <>
                                    <main className="m-auto flex justify-center font-Poppins">

                                        <div className=" rounded-2xl flex justify-center items-center w-96 shadow-xl flex-col my-3 border border-[#16737B]">
                                            <div>
                                                <img src={item.user.urlFileName1} className="rounded-t-2xl" alt="gambar-postingan" />
                                            </div>
                                            <div className=" p-4 flex flex-col w-full rounded-2xl">
                                                <div className="flex justify-between">
                                                    <div className="flex w-full">
                                                        <img
                                                            src={item.user.urlFileName}
                                                            className="rounded-full w-10 h-10"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                        <div className="pr-3 w-96 flex justify-between">
                                                            <div className="flex flex-col ml-2">
                                                                <div className="font-medium text-sm mt-1">{item.user.nama}</div>
                                                                <div className="font-normal text-xs">{item.created_date}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-sm mt-4">
                                                    {/* <div className="w-72 font-light text-sm">
                                                        {isReadMore ? item?.text.slice(0, 278) : item?.text}
                                                        {item.text.length > 278 && (
                                                            <span onClick={toggleReadMore} className="font-semibold">
                                                                {isReadMore
                                                                    ? "...Baca lebih lanjut"
                                                                    : " ...Tampilkan lebih sedikit"}
                                                            </span>
                                                        )}
                                                    </div> */}
                                                </div>

                                                <div className="bg-white flex justify-start mt-1">
                                                    <div className="flex justify-center items-center -mx-1 my-3">
                                                        <HeartIcon className="text-red-500 w-6 h-6" />{item.jumlahLike}

                                                        <a href={`./detail-post?id=${item.id}`}>
                                                            <div className="flex flex-row">
                                                                <ChatIcon className="w-6 h-6 ml-3" />{item.jumlahKomentar}
                                                            </div>
                                                        </a>

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
export default UserPageContainer;
