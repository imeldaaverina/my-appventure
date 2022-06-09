import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailPostLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import { callAPI } from "../../helpers/network";
import { Input } from "../../components/input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

dayjs.extend(relativeTime);

const validationSchema = Yup.object({
    textKomentar: Yup.string()
});

const initialValues = {
    textKomentar: "",
};

const DetailPostContainer = () => {
    const { query } = useRouter();
    const [data, setData] = useState();
    const [PostKomentar, setPostKomentar] = useState();
    const [listKomentar, setlistKomentar] = useState();
    const [text, setText] = useState('')

    const id = query.id;

    const fetchData = async () => {
        try {

            const response = await axios({
                url: 'https://api-myappventure.herokuapp.com/api/post/detailpost',
                method: 'get',
                params: {
                    idPost: id,
                }
            });
            console.log("response > ", response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchListKomentar = async () => {
        try {
            const response = await axios({
                url: 'https://api-myappventure.herokuapp.com/api/komentar/list',
                method: 'get',
                params: {
                    idPost: id,
                    page: 0,
                    size: 100,
                }
            });
            console.log("response > ", response.data.Data.content);
            setlistKomentar(response.data.Data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const doKomentar = async (payload) => {
        const user = JSON.parse(localStorage.getItem('data'))
        await callAPI({
            url: `https://api-myappventure.herokuapp.com/api/komentar/addkomentar/${id}/${user.id}`,
            method: 'post',
            data: payload,
            headers: {
                Authorization: `Bearer ${user.access_token}`,
            },
        });
        setPostKomentar();
    };

    const onSubmit = async (values) => {
        try {
            const payload = {
                textKomentar: values.textKomentar,
            };
            await doKomentar(payload);
            await fetchListKomentar();
        } catch (error) {
            alert(error);

        }
    }

    useEffect(() => {
        if (id) {
            fetchData();
            fetchListKomentar();
        }
    }, [id]);

    const {
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });


    return (
        <AuthProvider>
            <DetailPostLayout>
                <section>
                    <div className="font-Poppins">
                        <div className="mb-3">
                            <a href="./home">
                                <Icon icon="eva:arrow-circle-left-outline" width="40" />
                            </a>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

                            {data && data.filePosts.map((fileItem) => {
                                return (
                                    <SwiperSlide className="mb-10 flex justify-center">
                                        <img src={fileItem.url} className="rounded-xl w-96 h-72" alt="gambar-postingan" />
                                    </SwiperSlide>
                                )
                            }
                            )}
                        </Swiper>

                        {data && data.user && (
                            <div>
                                <div className=" p-4 flex flex-col w-full rounded-2xl">
                                    <div className="flex justify-between">
                                        <div className="flex w-full">
                                            <img
                                                src={data.user.urlFileName}
                                                className="rounded-full w-14 h-14"
                                                width={50}
                                                height={50}
                                                alt=""
                                            />
                                            <div className="pr-3 w-96 flex justify-between">
                                                <div className="flex flex-col ml-4">
                                                    <div className="font-medium text-base mt-1">{data.user.nama}</div>
                                                    <div className="font-normal text-sm">{dayjs(data.created_date).fromNow()}{" "}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center mt-6 border-y-2 w-full py-2">
                                        <div className="flex flex-col justify-center items-center pl-12 mr-8">
                                            <div>
                                                <HeartIcon className="text-red-500 w-6 h-6" />
                                            </div>
                                            <p>{data.jumlahLike} Disukai</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center mx-12 border-l pl-16">
                                            <div>
                                                <ChatIcon className="w-6 h-6 ml-3" />
                                            </div>
                                            <p>{data.jumlahKomentar} Komentar</p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="bg-[#457275] p-3">
                            {listKomentar && listKomentar.length > 0 && listKomentar.map(item => (
                                <div>
                                    <div className="flex justify-between">
                                        <div className="flex w-full mb-4">
                                            <img
                                                src={item.user.urlFileName}
                                                className="rounded-full w-10 h-10"
                                                width={50}
                                                height={50}
                                                alt=""
                                            />
                                            <div className="pr-3 w-96 flex justify-between text-white ">
                                                <div className="flex flex-col ml-4">
                                                    <div className="font-semibold text-sm mt-1">{item.user.nama}</div>
                                                    <div className="font-normal text-sm">{item.textKomentar}</div>
                                                    <div className="font-normal text-xs">{dayjs(item.created_date).fromNow()}{" "}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <form onSubmit={handleSubmit}>
                                <div className="flex justify-center items-center">
                                    <Input
                                        name="textKomentar"
                                        placeholder="Ketik komentar anda disini"
                                        onBlur={handleBlur}
                                        type="text"
                                        value={text}
                                        onChange={handleChange}
                                    />
                                    <div className="text-white ml-4 mr-1">
                                        <button type="submit"><Icon icon="akar-icons:send" width={20} height={20} /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </DetailPostLayout>
        </AuthProvider>
    );
};
export default DetailPostContainer;
