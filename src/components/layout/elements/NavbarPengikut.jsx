import { Icon } from '@iconify/react';
import Link from "next/link";
import Image from 'next/image'

const NavbarPengikut = () => {
    return (
        <nav className="font-Poppins bg-white h-16 sticky top-0 left-0 w-full z-50">
            <div className="max-w-md h-full flex justify-between mx-3">

                <Link href="/follower-list" passHref>
                    <button type="button" className="flex h-full justify-center items-center flex-col border-b-4 border-[#186F79] text-[#186F79]">
                        <span className="text-lg font-medium pl-1">
                            Pengikut
                        </span>
                    </button>
                </Link>

        <Link href="/challenge" passHref>
          <button type="button" className="flex h-full justify-center items-center flex-col border-b-4 border-black text-black">
            <span className="text-lg font-medium">
              Mengikuti
            </span>
          </button>
        </Link>
      </div>
      </nav>
    )
  }
  
  export default NavbarPengikut;