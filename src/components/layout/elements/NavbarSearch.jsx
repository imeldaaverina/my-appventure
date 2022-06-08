import { Searchbar } from "../../searchbar";
import { Icon } from '@iconify/react';

const NavbarSearch = () => {
    return (
        <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">

        <nav className="font-Poppins backdrop-blur-sm bg-white/40 h-24 absolute top-0 left-0 min-w-fit right-0 z-50">
        <div className="max-w-md mx-auto px-3 h-full flex justify-between md:justify-around  items-center">
                <div className="text-white px-5">
                    <a href="./home">
                        <Icon icon="eva:arrow-circle-left-outline" width="30" />
                    </a>
                </div>
                <Searchbar
                    type="text"
                    placeholder="search here..."
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </nav>
        </div>
    )
}

export default NavbarSearch;