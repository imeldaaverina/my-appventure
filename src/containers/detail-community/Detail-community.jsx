import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailCommunityLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { useHomeProvider } from "../home/HomeProvider";
import { useHomeDispatcher } from "../../redux/reducers/home";
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { callAPI } from "../../helpers/network";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

dayjs.extend(relativeTime);

const DetailCommunityContainer = ({ hideFollowButton, isFollowed, isFollowedCommunity }) => {
    const { query } = useRouter();
    const [data, setData] = useState();
    const [datas, setDatas] = useState();
    const [followCommunity, setFollowCommunity] = useState();
    const [listFollowing, setListFollowing] = useState([]);
    const [listFollowingCommunity, setListFollowingCommunity] = useState([]);

    const id = query.id;

    const fetchListFollowingCommunity = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/komunitasuser/',
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                }
            });
            console.log("responseeee > ", response.data);
            setListFollowingCommunity(response.data.Data.content.map((value) => value.komunitas.id));

        } catch (error) {
            console.log("error > ", error);
        }
    }

    const fetchListFollowing = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/follow/following/${user.id}`,
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                }
            });
            console.log("responsee > ", response.data);
            setListFollowing(response.data.Data.content.map((value) => value.userFollowing.id));

        } catch (error) {
            console.log("error > ", error);
        }
    }

    const handlefollow = async (idFollowing) => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const formData = new FormData();
            console.log(data)

            formData.append("idFollowing", idFollowing);
            formData.append("idFollower", user.id);
            const response = await callAPI({
                url: `/follow/`,
                method: "POST",
                data: formData,
                headers: {
                    Authorization: `Bearer ${user.access_token}`
                },
            });
            if (response.data.status === "404") {
                alert(`Failed to follow post`);
                return;
            }
            await fetchListFollowing();
            await loadPosts();
        } catch (error) {
            console.log(error)
            alert(`Failed to unfollow post`);
        }
    };

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

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const fetchDatas = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/post/postingankomunitas/list`,
                method: 'get',
                params: {
                    page: 0,
                    size: 30,
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

    const handleOnFollow = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        await callAPI({
            url: '/komunitas/join/',
            method: "POST",
            params: {
                idUser: user.id,
                idKomunitas: data.data.id,
            },
            headers: {
                Authorization: `Bearer ${user.access_token}`,
            },
        });
        setFollowCommunity();
        fetchListFollowingCommunity();
        fetchData();
    };

    const { likeAction, follow } = useHomeDispatcher();
    const { posts, loadPosts } = useHomeProvider();
    const [user, setUser] = useState();

    const handleLikeButton = async (detailPost) => {
        console.log(detailPost)
        try {
            await likeAction(detailPost.id);
            await fetchDatas();
        } catch (e) {

        }
        // alert("test")
    }
    const handleUnlikeButton = async (detailPost) => {
        console.log(detailPost)
        try {
            await likeAction(detailPost.id);
            await fetchDatas();
        } catch (e) {

        }
        // alert("test")
    }


    useEffect(() => {
        if (id) {
            fetchData();
            fetchDatas();
            fetchListFollowing();
            fetchListFollowingCommunity();
            setUser(JSON.parse(localStorage.getItem('data')))
        }
    }, [id]);

    useEffect(() => {
        if (data) {

        }
    }, [data]);


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

                                        {isFollowedCommunity = listFollowingCommunity.includes(data.data.id) ?
                                            <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275]"> <button label='diikuti' onClick={() => handleOnFollow(data.data.id)}>Mengikuti</button> </div>
                                            : <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-[#457275] border-2 border-[#457275] text-white"><button label='Ikuti' onClick={() => handleOnFollow(data.data.id)}>Ikuti</button></div>}


                                    </div>
                                    <div className="flex-col justify-start border-y-2">
                                        <h1 className="pt-5 text-lg">Deskripsi:</h1>
                                        <h1 className="text-base">{data.data.deskripsi}</h1>
                                        <h1 className="pt-5 text-lg">Link:</h1>
                                        <h1 className="text-base pb-5">{data.data.linkKomunitas}</h1>
                                    </div>

                                </>
                            </div>
                        )}

                        {datas && datas.length < 1 && <div className="flex flex-col justify-center text-center">
                            <div className="flex justify-center">
                                <Image src="/User research-pana 1.svg" width={250} height={250} alt="" />
                            </div>
                            <div className="pt-5 text-lg">
                                <p>Belum ada Unggahan Terbaru</p>
                            </div>
                        </div>
                        }

                        {datas && datas.map((items) => {
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

                                                    {items && items.filePosts.map((fileItem) => {
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
                                                            src={items.user.urlFileName}
                                                            className="rounded-full w-10 h-10"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                        <div className="pr-3 w-96 flex justify-between">
                                                            <div className="flex flex-col ml-2">
                                                                <a href={`./user-page?nama=${items.user.nama}`}>
                                                                    <div className="font-medium text-sm mt-1">{items.user.nama}</div>
                                                                </a>
                                                                <div className="font-normal text-xs text-[#457275]">{dayjs(items.created_date).fromNow()}{" "}</div>
                                                            </div>
                                                            <div className="flex justify-center items-center">
                                                                {hideFollowButton = items.user.id === user.id ? <div /> : isFollowed = listFollowing.includes(items.user.id) ?
                                                                    <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275]"> <button label='diikuti' onClick={() => handlefollow(items.user.id)}>Mengikuti</button> </div>
                                                                    : <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-[#457275] border-2 border-[#457275] text-white"><button label='Ikuti' onClick={() => handlefollow(items.user.id)}>Ikuti</button></div>}
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
                                                    <div className="flex justify-center items-center my-3 cursor-pointer">
                                                        {
                                                            items.likedBy.find((like) => like.user.id === user.id) ? (
                                                                <LikeSolidIcon
                                                                    className="text-red-500 w-6 h-6"
                                                                    onClick={() => handleLikeButton(items)}
                                                                />
                                                            ) : (
                                                                <LikeOutlineIcon
                                                                    className="text-red-500 w-6 h-6"
                                                                    onClick={() => handleUnlikeButton(items)}
                                                                />
                                                            )
                                                        }

                                                        {items.jumlahLike}
                                                        <a href={`./detail-post?id=${items.id}`}>
                                                            <div className="flex flex-row">
                                                                <ChatIcon className="w-6 h-6 ml-3" />{items.jumlahKomentar}
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
export default DetailCommunityContainer;
