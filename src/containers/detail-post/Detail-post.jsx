import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailPostLayout } from "../../components/layout";
import { useRouter } from 'next/router';
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import useAccount from "../account/hooks/useAccount";
import { callAPI } from "../../helpers/network";
import { Input } from "../../components/input";
import { useFormik } from "formik";

const initialValues = {
    textKomentar: ''
};

const DetailPostContainer = () => {
    const { query } = useRouter();
    const { picture } = useAccount();
    const [data, setData] = useState();
    const [PostKomentar, setPostKomentar] = useState();
    const [listKomentar, setlistKomentar] = useState();
    const [text, setText] = useState('')

    const id = query.id;

    const fetchData = async () => {
        try {

            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/post/detailpost',
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
                url: 'https://myappventure-api.herokuapp.com/api/komentar/list',
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
            url: `https://myappventure-api.herokuapp.com/api/komentar/addkomentar/${id}/${user.id}`,
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
            onSubmit();
            fetchListKomentar();
        }
    }, [id]);

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
    } = useFormik({
        initialValues,
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

                        <div>
                            {/* <img className="rounded-xl" src="./background.jpg"></img> */}
                            <img className="rounded-xl" src={picture}></img>

                        </div>
                        <div>
                            <div className=" p-4 flex flex-col w-full rounded-2xl">
                                <div className="flex justify-between">
                                    <div className="flex w-full">
                                        <img
                                            // src={data.user.urlFileName}
                                            src='./rahmah.svg'
                                            className="rounded-full w-14 h-14"
                                            width={50}
                                            height={50}
                                            alt=""
                                        />
                                        <div className="pr-3 w-96 flex justify-between">
                                            <div className="flex flex-col ml-4">
                                                {/* <div className="font-medium text-sm mt-1">{data.user.nama}</div>
                                                <div className="font-normal text-xs">{data.created_date}</div> */}
                                                <div className="font-medium text-base mt-1">rahmahnr15</div>
                                                <div className="font-normal text-sm">Baru Saja</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center mt-6">
                                    <div className="flex flex-col justify-center items-center mx-12">
                                        <div>
                                            <HeartIcon className="text-red-500 w-6 h-6" />
                                        </div>
                                        <p>15 Disukai</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center mx-12">
                                        <div>
                                            <ChatIcon className="w-6 h-6 ml-3" />
                                        </div>
                                        <p>15 Komentar</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <p>Potret kenangan keindahan alam Indonesia yang diabadikan lewat foto ini. Bukti bahwa Indonesiaku adalah bagian dari surga dunia yang harus kita jaga dan lestarikan, membuat saya bangga menjadi bagian dari bumi nusantara, Salam Lestari !!

                                        #Nature #Healing #Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#457275] p-3">
                            {listKomentar && listKomentar.map(item => (
                                <div>
                                    <div className="flex justify-between">
                                        <div className="flex w-full mb-4">
                                            <img
                                                src={item.user.urlFileName}
                                                // src='./rahmah.svg'
                                                className="rounded-full w-10 h-10"
                                                width={50}
                                                height={50}
                                                alt=""
                                            />
                                            <div className="pr-3 w-96 flex justify-between text-white ">
                                                <div className="flex flex-col ml-4">
                                                    {/* <div className="font-medium text-sm mt-1">{data.user.nama}</div>
                                                <div className="font-normal text-xs">{data.created_date}</div> */}
                                                    <div className="font-semibold text-sm mt-1">{item.user.nama}</div>
                                                    <div className="font-normal text-sm">{item.textKomentar}</div>
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
                                        <button type="submit" ><Icon icon="akar-icons:send" width={20} height={20} /></button>
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
