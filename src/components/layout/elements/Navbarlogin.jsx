import { MenuIcon } from "@heroicons/react/outline";
import useAccount from "../../../containers/account/hooks/useAccount";
import Dropdown from 'react-dropdown';
import { slide as Menu } from 'react-burger-menu'

import { slide as Burger, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import { useState } from "react";

const Navbarlogin = () => {
    const { profile } = useAccount();
    const options = [
      'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-Poppins backdrop-blur-sm bg-white/40 h-24 absolute top-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto px-3 h-full flex justify-between items-center">
        <div className="bg-[rgba(0, 0, 0, 0)]">
          {/* <a href="./account"> */}
          
          {/* <Menu className="bg-white" customBurgerIcon={ <MenuIcon className="text-white bg-transparent" width={35} height={35}/> } >
          
        <a className="bg-white" href="/">Home</a>
        <a className="bg-white" href="/about">About</a>
        <a className="bg-white" href="/contact">Contact</a> */}
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
       
      {/* </Menu> */}
     
      <div onClick={() => setIsOpen(!isOpen)}><MenuIcon className="text-white bg-transparent" width={35} height={35}/></div>
      
      <Burger className="fixed left-0" isOpen={isOpen} onClose={() => setIsOpen(false)}>
       
        <SubMenu  className="flex fixed left-0"  title={ <MenuIcon className="text-white bg-transparent" width={35} height={35}/> }>
          <Item itemKey={'notice'} text={'Announcement'}></Item>
          <Item itemKey={'union'} text={'Union Inquiries'}></Item>
          <Item itemKey={'entry'} text={'Entry information'}></Item>
        </SubMenu>
      </Burger>
     
    
          {/* </a> */}
        </div>
        <div className="flex justify-start">
          <div className="text-white font-light text-lg">
            Hai! {profile}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbarlogin;