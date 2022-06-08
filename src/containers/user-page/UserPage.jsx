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
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

dayjs.extend(relativeTime);

const UserPageContainer = () => {
    const { query } = useRouter();
    const [data, setData] = useState();
    const [jumlahKomunitas, setJumlahKomunitas] = useState();
    const [komunitas, setKomunitas] = useState();
    const [following, setFollowing] = useState();
    const [follower, setFollower] = useState();
    const [post, setPost] = useState();

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

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
            console.log("response kom> ", response.data.Data);
            setJumlahKomunitas(response.data.Data);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJumlahFollowing = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/follow/jumlahfollowing/${data.id}`,
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
            console.log("response ing> ", response.data.Data);
            setFollowing(response.data.Data);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJumlahFollower = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/follow/jumlahfollower/${data.id}`,
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
            console.log("response er> ", response.data.Data);
            setFollower(response.data.Data);
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
            fetchKomunitas();
            fetchJumlahFollower();
            fetchJumlahFollowing();
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
                                        <div className="font-medium text-base mt-1">{jumlahKomunitas}</div>
                                        <div className="font-normal text-sm">Komunitas</div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="font-medium text-base mt-1">{following}</div>
                                        <div className="font-normal text-sm">Diikuti</div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="font-medium text-base mt-1">{follower}</div>
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

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={5}
                            slidesPerView={4}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

                            {komunitas && komunitas.map((item) => {
                                return (
                                    <>
                                        <SwiperSlide className="mb-10">
                                            <div className='flex justify-around'>
                                                <a href={`./detail-community?id=${item.komunitas.id}`}>
                                                    <div className="flex flex-col">
                                                        <img src={item.komunitas.urlFileName} className='rounded-full w-20 h-20' width={90} height={90} alt='' />
                                                        <p className="flex justify-center text-center text-sm mt-1">{item.komunitas.namaKomunitas}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })}
                        </Swiper>
                        
                        {post && post.length < 1 && <div className="flex flex-col justify-center text-center">
                            <div className="flex justify-center">
                                <Image src="/User research-pana 1.svg" width={250} height={250} alt="" />
                            </div>
                            <div className="pt-5 text-lg">
                                <p>Belum ada Unggahan Terbaru</p>
                            </div>
                        </div>
                        }

                        {post && post.map((item) => {
                            return (
                                <>
                                    <main className="m-auto flex justify-center font-Poppins">

                                        <div className=" rounded-2xl flex justify-center items-center w-96 shadow-xl flex-col my-3 border border-[#16737B]">
                                            <div className="w-96">
                                                <Swiper
                                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                    spaceBetween={50}
                                                    slidesPerView={1}
                                                    scrollbar={{ draggable: true }}
                                                    onSwiper={(swiper) => console.log(swiper)}
                                                    onSlideChange={() => console.log('slide change')}
                                                >

                                                    {item && item.filePosts.map((fileItem) => {
                                                        return (
                                                            <SwiperSlide className="mb-10">
                                                                <img src={fileItem.url} className="rounded-t-2xl w-96 h-72" alt="gambar-postingan" />
                                                            </SwiperSlide>
                                                        )
                                                    }
                                                    )}
                                                </Swiper>
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
                                                                <div className="font-normal text-xs text-[#457275]">{dayjs(data.created_date).fromNow()}{" "}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-sm mt-4">
                                                    <div className="w-72 font-light text-sm">
                                                        {isReadMore ? item?.text.slice(0, 278) : item?.text}
                                                        {item.text.length > 278 && (
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
