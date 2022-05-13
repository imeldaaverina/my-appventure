import { Icon } from '@iconify/react';
import Link from "next/link";

const NavbarFollowing = () => {
    return (
      <nav className="font-Poppins bg-white h-16 sticky top-0 left-0 w-full z-50">
    <div className="max-w-md h-full flex justify-between">
        <Link href="/home" passHref>
          <a>
          <button type="button" className="flex h-full justify-center items-center px-12 flex-col border-b-4 border-[#C6C6C6] text-[#C6C6C6]">
            <div className="flex justify-center">
            <Icon icon="subway:compass" className="w-6 h-6" />
            <span className="text-lg font-medium pl-1">
              Untuk Kamu
            </span>
            </div>
          </button>
          </a>
        </Link>

        <Link href="/following" passHref>
          <a>
          <button type="button" className="flex h-full justify-center items-center px-16 flex-col border-b-4 border-[#186F79] text-[#186F79]">
            <div className="flex justify-center">
            <Icon icon="fluent:people-community-20-regular" className="w-6 h-6"/>
            <span className="text-lg font-medium pl-1">
              Diikuti
            </span>
            </div>
          </button>
          </a>
        </Link>
      </div>
      </nav>
    )
  }
  
  export default NavbarFollowing;