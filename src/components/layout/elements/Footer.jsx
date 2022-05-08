import { HomeIcon, UploadIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from 'next/link'

const Footer = () => {
  return (
    <footer className="font-Poppins bg-[#457275] min-h-min px-3 rounded-t-xl bottom-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto h-full">
        <div className="flex justify-start font-bold text-2xl text-white pb-5 pt-7"> 
        <div className="flex self-center pt-1">
          About 
        </div>
          <Image src="/LOGO TERANG My Appventure.svg" className="w-48 mx-4" alt=""/>
        </div>
        <div className="text-white font-light text-sm tracking-wider ">
          <p>My Appventure merupakan forum komunitas online yang diprioritaskan bagi para pecinta alam untuk menambah pengetahuan dan memberikan kebebasan berekspresi bagi penggunanya.</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start text-white font-light text-sm">
            <Image src="/instagram icon.svg" className="pt-5 pb-3 w-8 flex self-center" alt=""/>
            <div className="flex self-center pt-2 pl-2">@myappventure</div>
          </div>
          <div className="flex justify-start text-white font-light text-sm">
            <Image src="/WA icon.svg" className="pt-5 pb-3 w-8 flex self-center" alt=""/>
            <div className="flex self-center pt-2 pl-2">0888888888</div>
          </div>
          <div className="w-28 flex items-center">
            <Image src="/playstore.svg" alt=""/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

