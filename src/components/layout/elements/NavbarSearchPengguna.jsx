import Link from "next/link";

const NavbarSearchPengguna = () => {
    return (
        <nav className="font-Poppins bg-white h-16 sticky top-0 left-0 right-0 min-w-fit z-50">
        <div className="max-w-md h-full flex justify-between">
                <Link href="/search-community" passHref>
                    <a>
                        <button type="button" className="flex h-full justify-center items-center px-7 flex-col border-b-4 border-[#C6C6C6] text-[#C6C6C6]">
                            <div className="flex justify-center">
                                <span className="text-lg font-medium pl-1">
                                    Komunitas
                                </span>
                            </div>
                        </button>
                    </a>
                </Link>

                <Link href="/search-user" passHref>
                    <a>
                        <button type="button" className="flex h-full justify-center items-center px-7 flex-col border-b-4 border-[#186F79] text-[#186F79]">
                            <div className="flex justify-center">
                                <span className="text-lg font-medium pl-1">
                                    Pengguna
                                </span>
                            </div>
                        </button>
                    </a>
                </Link>

                <Link href="/search-post" passHref>
                    <a>
                        <button type="button" className="flex h-full justify-center items-center px-7 flex-col border-b-4 border-[#C6C6C6] text-[#C6C6C6]">
                            <div className="flex justify-center">
                                <span className="text-lg font-medium pl-1">
                                    Unggahan
                                </span>
                            </div>
                        </button>
                    </a>
                </Link>

            </div>
        </nav>
    )
}

export default NavbarSearchPengguna;