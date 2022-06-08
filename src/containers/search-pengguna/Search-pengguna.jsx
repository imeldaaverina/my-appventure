import AuthProvider from "../../providers/auth/AuthProvider";
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { SearchPenggunaLayout } from "../../components/layout";
import axios from "axios";
import { Icon } from '@iconify/react';
import { SearchIcon } from "@heroicons/react/outline";
import { callAPI } from "../../helpers/network";

const SearchPenggunaContainer = ({ hideFollowButton, isFollowed }) => {
    const [userId, setUserId] = useState();
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 1000);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [user, setUser] = useState()
    const [listFollowing, setListFollowing] = useState([]);

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
            console.log("response > ", response.data);
            setListFollowing(response.data.Data.content.map((value) => value.userFollowing.id));
        } catch (error) {
            console.log("error > ", error);
        }
    }

    async function searchUser() {
        const user = JSON.parse(localStorage.getItem('data'))

        try {
            setLoading(true);
            const baseUrl = await axios({
                url: `https://myappventure-api.herokuapp.com/api/user/detail/cariuser?q=${query}`,
                method: 'get',
                params: {
                    page: 0,
                    size: 400,
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
            await searchUser();
        } catch (error) {
            console.log(error)
            alert(`Failed to unfollow post`);
        }
    };

    useEffect(() => {
        searchUser();
        fetchListFollowing();
        setUser(JSON.parse(localStorage.getItem('data')))
        setUserId(JSON.parse(localStorage.getItem('data')).id)
        // return()=>{
        //     setListFollowing ({});
        //     setData ({});
        // };
    }, [query]);

    return (
        <AuthProvider>
            <SearchPenggunaLayout>
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
                        <div className="flex justify-between items-center pt-5 px-5 font-Poppins">
                            <a href={`./user-page?nama=${search.nama}`}>

                                <div className="flex justify-start items-center">
                                    <div>
                                        <img src={search.urlFileName} className='rounded-full w-14 h-14' width={50} height={50} alt='' />
                                    </div>
                                    <div className="font-medium text-[#3D3D3D] text-lg pl-3">
                                        <p>{search.nama}</p>
                                    </div>
                                </div>
                            </a>
                            
                            <div className="flex justify-center items-center">
                                {console.log(search)}
                                {hideFollowButton = search.id === user.id ? <div /> : isFollowed = listFollowing.includes(search.id) ?
                                    <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275]"> <button label='diikuti' onClick={() => handlefollow(search.id)}>Mengikuti</button> </div>
                                    : <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-[#457275] border-2 border-[#457275] text-white"><button label='Ikuti' onClick={() => handlefollow(search.id)}>Ikuti</button></div>}
                            </div>
                        </div>
                    ))}
                </section>
            </SearchPenggunaLayout>
        </AuthProvider>
    );
};
export default SearchPenggunaContainer;
