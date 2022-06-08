import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ListDestinationLayout } from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ListDestinationContainer = () => {
    const [data, setData] = useState();
    const [bali, setBali] = useState();
    const [jogja, setJogja] = useState();
    const [surabaya, setSurabaya] = useState();
    const [malang, setMalang] = useState();
    const [makassar, setMakassar] = useState();
    const [lombok, setLombok] = useState();
    const [lampung, setLampung] = useState();
    const [jakarta, setJakarta] = useState();
    const [bandung, setBandung] = useState();

    const fetchData = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list',
                method: 'get',
                params: {
                    page: 0,
                    size: 30,
                    nama: '',
                },
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response > ", response.data.data.content);
            setData(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchBali = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/bali',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response bali> ", response.data.data.content);
            setBali(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJogja = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/yogyakarta',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response jogja> ", response.data.data.content);
            setJogja(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchSurabaya = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/surabaya',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response surabaya> ", response.data.data.content);
            setSurabaya(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchMalang = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/malang',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response malang> ", response.data.data.content);
            setMalang(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchMakassar = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/makassar',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response makassar> ", response.data.data.content);
            setMakassar(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchLombok = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/lombok',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response lombok> ", response.data.data.content);
            setLombok(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchLampung = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/lampung',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response lampung> ", response.data.data.content);
            setLampung(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJakarta = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/jakarta',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response jakarta> ", response.data.data.content);
            setJakarta(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchBandung = async () => {
        const user = JSON.parse(localStorage.getItem('data'))
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/bandung',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            console.log("response bandung> ", response.data.data.content);
            setBandung(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchBali();
        fetchJogja();
        fetchSurabaya();
        fetchMalang();
        fetchMakassar();
        fetchLombok();
        fetchLampung();
        fetchJakarta();
        fetchBandung();
    }, []);



    return (
        <AuthProvider>
            <ListDestinationLayout>
                <section className="font-Poppins">
                    <div className='mt-8 mb-4 font-semibold'>Popular Destination Untuk Kamu</div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {console.log(data)}
                        {data && data.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Bali
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {bali && bali.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Jakarta
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {jakarta && jakarta.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Lombok
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {lombok && lombok.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Yogyakarta
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {jogja && jogja.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Surabaya
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {surabaya && surabaya.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Malang
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {malang && malang.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Makassar
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {makassar && makassar.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Lampung
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {lampung && lampung.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className='mt-8 mb-4 font-semibold flex flex-row items-center'>
                        <Icon icon="el:map-marker" className="mr-1" />
                        Bandung
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {bandung && bandung.map((item) => {
                            return (
                                <SwiperSlide className="ml-8">
                                    <div className='flex justify-around'>
                                        <a href={`./detail-destination?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                    <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </section>
            </ListDestinationLayout>
        </AuthProvider >
    );
};
export default ListDestinationContainer;
