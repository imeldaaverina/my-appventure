import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ListDestinationLayout } from "../../components/layout";
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ListDestinationContainer = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios({
                url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
                method: 'get',
                params: {
                    page: 1,
                    size: 30,
                }
            });
            console.log("response > ", response.data);
            setData(response.data.data.content.reverse());
        } catch (error) {
            console.log("error > ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <AuthProvider>
            <ListDestinationLayout>
                <section>
                <div className='font-medium text-xl mt-10 mb-4'>Popular Destination Untuk Kamu</div>
                    <Swiper
                       modules={[Navigation, Pagination, Scrollbar, A11y]}
                       spaceBetween={50}
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
                                        <a href={`./detail-community?id=${item.id}`}>
                                            <div className="flex w-40 h-48 flex-col items-center mb-10 border shadow-xl">

                                                <img src={item.urlFileName} className='m-2 w-36 rounded-sm h-32' width={90} height={90} alt='' />
                                                <div className="flex justify-center items-center mx-2 mb-2  h-16">
                                                 <h1 className="text-[#3D3D3D] font-medium text-md">{item.namaKomunitas}</h1>
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
        </AuthProvider>
    );
};
export default ListDestinationContainer;
