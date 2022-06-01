import AuthProvider from "../../providers/auth/AuthProvider";
import FollowerListLayout from "../../components/layout/FollowerListLayout";
import { Icon } from '@iconify/react';
import Image from 'next/image'

const AboutUsContainer = () => {

    return (
        <AuthProvider>
            <FollowerListLayout>
                <section>
                    <div className="max-w-md mx-auto h-full px-2 font-Poppins">
                        <div className="flex">
                            <div className="">
                                <a href="./account">
                                    <Icon icon="eva:arrow-circle-left-outline" width="40" />
                                </a>
                            </div>
                            <div className="font-semibold flex items-center justify-center w-96 text-2xl mb-8">
                                <p>Tentang Kami</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image src="/LOGO GELAP My Appventure.svg" width={300} height={100} alt="" />
                        </div>
                        <div className="flex justify-center text-center">
                            <p>My Appventure merupakan Platform online bagi seluruh komunitas pecinta alam di Indonesia. Disini kamu dapat menambah pengetahuan dan wawasan yang luas dengan bergabung ke dalam berbagai komunitas-komunitas
                                yang ada di My Appventure. Bagikan pengalaman
                                unikmu sekarang!</p>
                        </div>
                        <div className="flex justify-center text-xl font-semibold mt-10 mb-8">
                            <h1>Tim My Appventure</h1>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/devlin.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Devlin Aldyandi</h1>
                                <h1 className="text-xs">PM</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/cicil.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Cicilia Viyaya W</h1>
                                <h1 className="text-xs">UI/UX Design</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/tiara.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Tiara Azzelia Putri</h1>
                                <h1 className="text-xs">UI/UX Design</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/rahmah.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Rahmah Nur A</h1>
                                <h1 className="text-xs">Front End Developer</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/imel.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Imelda Averina</h1>
                                <h1 className="text-xs ">Front End Developer</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/arras.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">M Arras Adazim</h1>
                                <h1 className="text-xs ">Back End Developer</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/rizky.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">M Rizky Wisesar</h1>
                                <h1 className="text-xs">Back End Developer</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/shinta.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Shinta Amyrul</h1>
                                <h1 className="text-xs">Android Team</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center mb-8">
                                <img src="/surli.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                <h1 className="font-medium text-sm">Surli</h1>
                                <h1 className="text-xs">Android Team</h1>
                            </div>
                        </div>
                        <div className="flex gap-12 justify-center ">
                                <div className="flex flex-col justify-center items-center mb-8">
                                    <img src="/krissy.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                    <h1 className="font-medium text-sm">Krissy Vieri</h1>
                                    <h1 className="text-xs">QA Team</h1>
                                </div>
                                <div className="flex flex-col justify-center items-center mb-8">
                                    <img src="/daniella.svg" className='rounded-full w-24 h-24 mb-3' width={100} height={100} alt='' />
                                    <h1 className="font-medium text-sm">Daniella Deilova</h1>
                                    <h1 className="text-xs">QA Team</h1>
                                </div>
                            </div>

                    </div>
                </section>
            </FollowerListLayout>
        </AuthProvider>
    );
};
export default AboutUsContainer;
