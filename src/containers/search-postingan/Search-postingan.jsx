import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchPostinganLayout } from "../../components/layout";
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { SearchPenggunaLayout } from "../../components/layout";
import axios from "axios";
import { Searchbar } from "../../components/searchbar";
import { Icon } from '@iconify/react';
import { SearchIcon } from "@heroicons/react/outline";
import { ButtonFollow } from "../../components/button";
import { HeartIcon, ChatIcon, LinkIcon } from "@heroicons/react/outline";
import { array } from "yup/lib/locale";

const SearchPostinganContainer = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const [text, setText] = useState('')
    const [query] = useDebounce(text, 1000);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        async function searchUser() {
            try {
                setLoading(true);
                const baseUrl = await axios({
                    url: `https://myappventure-api.herokuapp.com/api/user/detail/caripost?q=${query}`,
                    method: 'get',
                    params: {
                        page: 0,
                        size: 300,
                        nama: `${query}`
                    }
                });
                console.log("response > ", baseUrl.data.data.content);
                setData(baseUrl.data.data.content);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log("error > ", error);
            }
        };

        searchUser()
    }, [query]);

    return (
        <AuthProvider>
            <SearchPostinganLayout>
                <section>
                    <div className="navbar">
                        <nav className="font-Poppins bg-[#457275] h-24 absolute top-0 left-0 w-full z-50">
                            <div className="max-w-md mx-auto px-3 h-full flex justify-between items-center">
                                <div className="text-white px-5">
                                    <a href="./home">
                                        <Icon icon="eva:arrow-circle-left-outline" width="30" />
                                    </a>
                                </div>
                                <form className="w-full mr-3">
                                    <div className="relative">
                                        <div className="absolute top-0 left-0 h-full text-gray-500 font-bold inline-flex justify-center items-center cursor-pointer px-3">
                                            <SearchIcon className="w-5 h-5" />
                                        </div>
                                        <input
                                            placeholder='Cari komunitas dan pengguna lainnya'
                                            type="text"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            className="border w-full rounded-3xl bg-gray-100 focus:outline-none focus:ring-0 pl-10 py-2 text-xs text-gray-500"
                                        />
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                    {loading && <div className="flex justify-center font-Poppins font-semibold text-xl mt-5">Silahkan Tunggu...</div>}
                    {data && data.length < 1 && <div className="flex justify-center mt-12"><img src="/searchnotfound.svg" /></div>}
                    {data && data.map(search => (
                        <main className="m-auto flex justify-center font-Poppins">

                            <div className=" rounded-2xl flex justify-center items-center w-96 shadow-xl flex-col my-3 border border-[#16737B] mt-5">
                                <div>
                                    <img src={search.user.urlFileName1} className="rounded-t-2xl" alt="gambar-postingan" />
                                </div>
                                <div className=" p-4 flex flex-col w-full rounded-2xl">
                                    <div className="flex justify-between">
                                        <div className="flex w-full">
                                            <img
                                                src={search.user.urlFileName}
                                                className="rounded-full w-10 h-10"
                                                width={40}
                                                height={40}
                                                alt=""
                                            />
                                            <div className="pr-3 w-96 flex justify-between">
                                                <div className="flex flex-col ml-2">
                                                    <div className="font-medium text-sm mt-1">{search.user.nama}</div>
                                                    <div className="font-normal text-xs">{search.created_date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm mt-4">
                                        <div className="w-72 font-light text-sm">
                                            {isReadMore ? search?.text.slice(0, 278) : search?.text}
                                            {search.text.length > 278 && (
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
                                            <HeartIcon className="text-red-500 w-6 h-6" />{search.jumlahLike}
                                            {/* <span className="text-2xl block w-full">
        {home.counter}
      </span>
      </div> */}
                                            <ChatIcon className="w-6 h-6 ml-3" />{search.jumlahKomentar}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </main>
                    ))}

                    <div>

                    </div>
                </section>
            </SearchPostinganLayout>
        </AuthProvider>
    );
};
export default SearchPostinganContainer;
