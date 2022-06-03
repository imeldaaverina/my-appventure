import FollowingLayout from "../../components/layout/FollowingLayout";
import AuthProvider from "../../providers/auth/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeartIcon, ChatIcon, LinkIcon } from "@heroicons/react/outline";
import { ButtonFollow } from "../../components/button";

const FollowingContainer = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const [data, setData] = useState();

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
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
            console.log(data)
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthProvider>
            <FollowingLayout>
                <section>
                    {console.log(data)}
                    {data && data.map(item => (

                        <main className="m-auto flex justify-center font-Poppins">

                            <div className=" rounded-2xl flex justify-center items-center w-96 shadow-xl flex-col my-3 border border-[#16737B]">
                                <div>
                                    <img src={item.filePosts[0 - 10]} className="rounded-t-2xl" alt="gambar-postingan" />
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
                                                <div className="flex justify-center items-center">
                                                    <ButtonFollow />
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
                                            
                                            <a href={`./detail-post?id=${data.id}`}>
                                                <div className="flex flex-row">
                                                    <ChatIcon className="w-6 h-6 ml-3" />{data.jumlahKomentar}
                                                </div>
                                            </a>                                        </div>

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
