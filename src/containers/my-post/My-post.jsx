import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { MyPostLayout } from "../../components/layout";
import { HeartIcon, ChatIcon, LinkIcon } from "@heroicons/react/outline";
import Image from "next/image"
import { useListCommunityDispatcher } from "../../redux/reducers/listCommunity/slice";
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { callAPI } from "../../helpers/network";
import { useHomeProvider } from "../home/HomeProvider";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

dayjs.extend(relativeTime);


const MyPostContainer = () => {
    // const user = JSON.parse(localStorage.getItem('data'))
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    const [data, setData] = useState();

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        // const user = JSON.parse(datalocal)
        try {
            const response = await axios({
                url: `https://myappventure-api.herokuapp.com/api/post/list`,
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 300,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data);
            setData(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }


    };

    useEffect(() => {
        fetchData();
    }, []);

    const { likeAction, follow } = useHomeDispatcher();
    const { posts, loadPosts } = useHomeProvider();

    // const user = JSON.parse(datalocal)

    const handleLikeButton = async (detailPost) => {
        console.log(detailPost)
        try {
            await likeAction(detailPost.id);
            await loadPosts();
        } catch (e) {

        }
        // alert("test")
    }

    const handleUnlikeButton = async (detailPost) => {
        console.log(detailPost)
        try {
            await likeAction(detailPost.id);
            await loadPosts();
        } catch (e) {

        }
        // alert("test")
    }


    return (
        <AuthProvider>
            <MyPostLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./account">
                                    <Icon icon="eva:arrow-circle-left-outline" width="40" />
                                </a>
                            </div>
                            <div className="font-semibold flex items-center justify-center w-96 text-2xl pb-8 ">
                                <p>Unggahan Saya</p>
                            </div>
                        </div>

                        {console.log(data)}
                        {data && data.length < 1 && <div className="flex flex-col justify-center text-center mt-12">
                            <div className="flex justify-center">
                                <Image src="/User research-pana 1.svg" width={250} height={250} alt="" />
                            </div>
                            <div className="pt-5 text-lg">
                                <p>Anda belum mengupload apapun</p>
                            </div>
                        </div>}

                        {data && data.map((item) => {
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
                                                                <div className="font-normal text-xs text-[#457275]">{dayjs(item.created_date).fromNow()}{" "}</div>
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

                                                        {/* {
                                                            item.likedBy.find((like) => like.user.id === user.id) ? (
                                                                <LikeSolidIcon
                                                                    className="text-red-500 w-6 h-6"
                                                                    onClick={() => handleLikeButton(item)}
                                                                />
                                                            ) : (
                                                                <LikeOutlineIcon
                                                                    className="text-red-500 w-6 h-6"
                                                                    onClick={() => handleUnlikeButton(item)}
                                                                />
                                                            )
                                                        }

                                                        {item.jumlahLike}
                                                        <ChatIcon className="w-6 h-6 ml-3" />{item.jumlahKomentar} */}
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
            </MyPostLayout>
        </AuthProvider>
    );
};
export default MyPostContainer;
