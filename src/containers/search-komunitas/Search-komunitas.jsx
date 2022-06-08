import AuthProvider from "../../providers/auth/AuthProvider";
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { SearchKomunitasLayout } from "../../components/layout";
import axios from "axios";
import { Icon } from '@iconify/react';
import { SearchIcon } from "@heroicons/react/outline";

const SearchKomunitasContainer = () => {
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 1000);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    async function searchUser() {
        try {
            setLoading(true);
            const baseUrl = await axios({
                url: `https://myappventure-api.herokuapp.com/api/user/detail/carikomunitas?q=${query}`,
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

    useEffect(() => {
        searchUser()
    }, [query]);

    return (
        <AuthProvider>
            <SearchKomunitasLayout>
                <section className="left-0 right-0 min-w-fit">
                    <div className="navbar">
                        <nav className="font-Poppins flex justify-center items-center bg-[#457275] h-24 absolute top-0 left-0 right-0 min-w-fit z-50">
                            <div className="max-w-2xl w-[400px]  px-3 h-full flex justify-between items-center">
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
                                            className="border w-full  rounded-3xl bg-gray-100 focus:outline-none focus:ring-0 pl-10 py-2 text-xs text-gray-500"
                                        />
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                    {loading && <div className="flex justify-center font-Poppins font-semibold text-xl mt-5">Silahkan Tunggu...</div>}
                    {data && data.length < 1 && <div className="flex justify-center mt-12"><img src="/searchnotfound.svg" /></div>}
                    {data && data.map(search => (
                        <a href={`./detail-community?id=${search.id}`}>

                            <div className="font-Poppins border-2 w-full border-[#329D9C] rounded-lg p-5 my-5">
                                <div className="flex justify-start items-center mb-3">
                                    <div>
                                        <img src={search.urlFileName} className='rounded-full w-16 h-16' width={50} height={50} alt='' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-medium text-[#3D3D3D] text-lg pl-3 mb-2">
                                            <p>{search.namaKomunitas}</p>
                                        </div>
                                        <div className="text-[#329D9C] text-base pl-3 flex">
                                            <div className="mr-2">
                                                <Icon icon="octicon:people-24" width="20" />
                                            </div>
                                            <p>{search.jumlahAnggota} Anggota</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>{search.deskripsi}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                    <div>

                    </div>

                </section>
            </SearchKomunitasLayout>
        </AuthProvider>
    );
};
export default SearchKomunitasContainer;
