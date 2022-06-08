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
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { callAPI } from "../../helpers/network";
import { useHomeProvider } from "../home/HomeProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

dayjs.extend(relativeTime);

const SearchPostinganContainer = ({ hideFollowButton, isFollowed }) => {

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const [text, setText] = useState('')
    const [query] = useDebounce(text, 1000);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [userId, setUserId] = useState();
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
        try {
            setLoading(true);
            const baseUrl = await axios({
                url: `https://myappventure-api.herokuapp.com/api/user/detail/caripost?q=${query}`,
                method: 'get',
                params: {
                    page: 0,
                    size: 1000,
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
        searchUser();
        fetchListFollowing();
        setUser(JSON.parse(localStorage.getItem('data')))
        setUserId(JSON.parse(localStorage.getItem('data')).id)
    }, [query]);

    const { likeAction, follow } = useHomeDispatcher();


    const { posts, loadPosts } = useHomeProvider();
    const handleLikeButton = async (detailPost) => {
        console.log(detailPost)
        try {
            await likeAction(detailPost.id);
            await searchUser();
        } catch (e) {

        }
    }
    const handleUnlikeButton = async (detailPost) => {
        console.log(detailPost)
        try {
            await likeAction(detailPost.id);
            await searchUser();
        } catch (e) {

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
            // loadPosts();
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
        // loadPosts();
        // fetchListFollowing();


    };
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
                                <div className="w-96">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    >

                                        {search && search.filePosts.map((fileItem) => {
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
                                                src={search.user.urlFileName}
                                                className="rounded-full w-10 h-10"
                                                width={40}
                                                height={40}
                                                alt=""
                                            />
                                            <div className="pr-3 w-96 flex justify-between">
                                                <div className="flex flex-col ml-2">
<<<<<<< HEAD
                                                    <div className="font-medium text-sm mt-1">{search.user.nama}</div>
=======
                                                    <a href={`./user-page?nama=${search.user.nama}`}>
                                                        <div className="font-medium text-sm mt-1">{search.user.nama}</div>
                                                    </a>
>>>>>>> 04f5ecc08d4beae05e89461af350783c770e8c2a
                                                    <div className="font-normal text-xs">{dayjs(search.created_date).fromNow()}{" "}</div>
                                                </div>

                                                <div className="flex justify-center items-center">
<<<<<<< HEAD
                                                {hideFollowButton = search.user.id === user.id ? <div /> : isFollowed = listFollowing.includes(search.user.id) ?
=======
                                                    {hideFollowButton = search.user.id === user.id ? <div /> : isFollowed = listFollowing.includes(search.user.id) ?
>>>>>>> 04f5ecc08d4beae05e89461af350783c770e8c2a
                                                        <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-white border-2 border-[#457275] text-[#457275]"> <button label='diikuti' onClick={() => handlefollow(search.user.id)}>Mengikuti</button> </div>
                                                        : <div className="font-Poppins flex justify-center text-sm font-medium rounded p-1 w-24 h-18 bg-[#457275] border-2 border-[#457275] text-white"><button label='Ikuti' onClick={() => handlefollow(search.user.id)}>Ikuti</button></div>}
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
                                            <div className="cursor-pointer flex flex-row">
                                                {
                                                    search.likedBy.find((like) => like.user.id === user.id) ? (
                                                        <LikeSolidIcon
                                                            className="text-red-500 w-6 h-6"
                                                            onClick={() => handleLikeButton(search)}
                                                        />
                                                    ) : (
                                                        <LikeOutlineIcon
                                                            className="text-red-500 w-6 h-6"
                                                            onClick={() => handleUnlikeButton(search)}
                                                        />
                                                    )
                                                }

                                                {search.jumlahLike}
                                            </div>
                                            <a href={`./detail-post?id=${search.id}`}>
                                                <div className="flex flex-row">
                                                    <ChatIcon className="w-6 h-6 ml-3" />{search.jumlahKomentar}
                                                </div>
                                            </a>
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
