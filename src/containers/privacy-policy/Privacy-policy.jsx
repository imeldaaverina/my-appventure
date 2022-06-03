import AuthProvider from "../../providers/auth/AuthProvider";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { MyCommunityLayout } from "../../components/layout";
import Image from "next/image"
import { useListCommunityDispatcher } from "../../redux/reducers/listCommunity/slice";

const MyCommunityContainer = () => {

    return (
        <AuthProvider>
            <MyCommunityLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./account">
                                    <Icon icon="eva:arrow-circle-left-outline" width="40" />
                                </a>
                            </div>
                            <div className="font-semibold flex items-center justify-center w-96 text-2xl ">
                                <p>Kebijakan Privasi </p>
                            </div>
                        </div>
                        <div className="flex justify-center mb-5">
                            <Image src="/LOGO GELAP My Appventure.svg" width={300} height={100} alt="" />
                        </div>

                        <div>
                            <p>
                                <b className="text-[#457275]">Kebijakan Privasi</b><br></br>

                                My Appventure merupakan platform online bagi seluruh komunitas pecinta alam di Indonesia. 
                                Dengan menjadi pengguna, Anda memercayakan informasi personal Anda kepada kami. 
                                Kebijakan Privasi ini bertujuan untuk membantu Anda memahami data apa saja yang kami kumpulkan, 
                                alasan kami mengumpulkannya, dan apa yang kami lakukan terhadap data tersebut. 
                                Ini penting, kami harap Anda dapat meluangkan waktu untuk membaca dan memahaminya dengan saksama.
<br></br><br></br>
                                <b className="text-[#457275]">Pengenalan</b><br></br>

                                My Appventure sebagai media komunikasi untuk pecinta alam di Indonesia selalu memberikan yang terbaik untuk 
                                pengguna. 
                                My Appventure sangat menghormati dan melindungi privasi pengguna dengan menerapkan prinsip-prinsip:<br></br><br></br>
                                1. My Appventure akan mengonfirmasikan kepada pengguna mengenai informasi pribadi yang akan dikumpulkan dan apabila 
                                diperlukan meminta persetujuan pengguna untuk mengumpulkan, mengolah, menggunakan, atau mengungkapkan informasi 
                                pribadi pengguna.<br></br><br></br>
                                2. My Appventure hanya mengumpulkan informasi yang diperlukan untuk mencapai tujuan penggunaan yang telah 
                                diiidentifikasi.<br></br><br></br>
                                3. My Appventure akan menggunakan atau mengungkapkan informasi pribadi pengguna hanya sesuai dengan tujuan 
                                pengumpulannya.<br></br><br></br>
                            </p>
                        </div>
                    </div>
                </section>
            </MyCommunityLayout>
        </AuthProvider>
    );
};
export default MyCommunityContainer;
