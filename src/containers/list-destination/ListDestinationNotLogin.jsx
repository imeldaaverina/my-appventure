import NoAuthProvider from "../../providers/auth/NoAuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ListDestinationNotLoginLayout } from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ListDestinationNotLoginContainer = () => {
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
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list',
                method: 'get',
                params: {
                    page: 0,
                    size: 30,
                    nama: '',
                },
            });
            console.log("response > ", response.data.data.content);
            setData(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchBali = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/bali',
                method: 'get',
            });
            console.log("response bali> ", response.data.data.content);
            setBali(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJogja = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/yogyakarta',
                method: 'get',
            });
            console.log("response jogja> ", response.data.data.content);
            setJogja(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchSurabaya = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/surabaya',
                method: 'get',
            });
            console.log("response surabaya> ", response.data.data.content);
            setSurabaya(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchMalang = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/malang',
                method: 'get',
            });
            console.log("response malang> ", response.data.data.content);
            setMalang(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchMakassar = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/makassar',
                method: 'get',
            });
            console.log("response makassar> ", response.data.data.content);
            setMakassar(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchLombok = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/lombok',
                method: 'get',
            });
            console.log("response lombok> ", response.data.data.content);
            setLombok(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchLampung = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/lampung',
                method: 'get',
            });
            console.log("response lampung> ", response.data.data.content);
            setLampung(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchJakarta = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/jakarta',
                method: 'get',
            });
            console.log("response jakarta> ", response.data.data.content);
            setJakarta(response.data.data.content);
        } catch (error) {
            console.log("error > ", error);
        }
    };

    const fetchBandung = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/destinasi/list/bandung',
                method: 'get',
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
        <NoAuthProvider>
            <ListDestinationNotLoginLayout>
                <section className="font-Poppins">
                    <div className='mt-8 mb-4 font-semibold'>Popular Destination Untuk Kamu</div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={2}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {console.log(data)}
                        {data && data.map((item) => {
                            return (
                                <SwiperSlide className="w-full">
                                    <div className='flex w-full'>
                                        <div className="flex w-32 h-48 flex-col text-center items-center mb-10 border shadow-xl">

                                            <img src={item.urlFileName} className='mx-2 w-28 mt-2 rounded-sm h-32' width={90} height={90} alt='' />
                                            <div className="flex justify-center items-center mx-2 mb-2 h-16">
                                                <h1 className="font-semibold text-sm flex justify-center">{item.nama}</h1>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
            </ListDestinationNotLoginLayout>
        </NoAuthProvider >
    );
};
export default ListDestinationNotLoginContainer;
