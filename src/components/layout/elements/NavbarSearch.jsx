import { Searchbar } from "../../searchbar";
import { Icon } from '@iconify/react';

const NavbarSearch = () => {
    return (
        <nav className="font-Poppins bg-[#457275] h-24 absolute top-0 left-0 w-full z-50">
            <div className="max-w-md mx-auto px-3 h-full flex justify-between items-center">
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
    )
}

export default NavbarSearch;