import { MenuIcon } from "@heroicons/react/outline";
import { slide as Burger, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import { useState } from "react";

const Navbarmyprofile = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-Poppins backdrop-blur-sm bg-white/40 h-24 absolute top-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto px-3 h-full flex justify-between items-center">
      <div className="">
            <div onClick={() => setIsOpen(!isOpen)}><MenuIcon className="text-white bg-transparent" width={35} height={35} />
              <div className="flex justify-center">
                <Burger className="" isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <a href="./home">
                      <Item text={'Beranda'}></Item>
                    </a>
                    <a href="./challenge">
                      <Item text={'Tantangan'}></Item>
                    </a>
                    <a href="./community">
                      <Item text={'Komunitas'}></Item>
                    </a>
                    <a href="./destination">
                      <Item text={'Destinasi Wisata'}></Item>
                    </a>
                    <a href="./account">
                      <Item text={'Profil'}></Item>
                    </a>
                </Burger>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbarmyprofile;