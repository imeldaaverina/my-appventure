import FollowingLayout from "../../components/layout/FollowingLayout";
import AuthProvider from "../../providers/auth/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeartIcon, ChatIcon, LinkIcon } from "@heroicons/react/outline";
import { ButtonFollow } from "../../components/button";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

dayjs.extend(relativeTime);

const FollowingContainer = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#186F79");

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            setLoading(true);
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/post/postbyfollowing',
                method: 'get',
                params: {
                    idUser: user.id,
                    page: 0,
                    size: 30,
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data);
            setData(response.data.data.content);
            setLoading(false);
            console.log(data)
        } catch (error) {
            console.log("error > ", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthProvider>
            <FollowingLayout>
                <section>
                    <div className="flex justify-center">
                        {loading && <div>
                            <FadeLoader color={color} loading={loading} css={override} size={200} />
                            <p className="mt-2 font-Poppins font-semibold text-xl">Silahkan Tunggu...</p>
                        </div>}
                    </div>

                    {console.log(data)}
                    {data && data.map(item => (
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
                                                    <a href={`./user-page?nama=${item.user.nama}`}>
                                                        <div className="font-medium text-sm mt-1">{item.user.nama}</div>
                                                    </a>
                                                    <div className="font-normal text-xs text-[#457275]">{dayjs(item.created_date).fromNow()}{" "}</div>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    {/* <ButtonFollow /> */}
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
                    ))}

                </section>
            </FollowingLayout>
        </AuthProvider>
    )
}

export default FollowingContainer;
