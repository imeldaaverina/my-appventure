import Link from "next/link";

const NavbarMengikuti = () => {
  return (
    <nav className="font-Poppins backdrop-blur-sm bg-white/40 h-16 stikcy top-0 left-0 min-w-fit right-0 z-50">
      <div className="max-w-md  h-full flex justify-between mx-3">

        <Link href="/follower-list" passHref>
          <a>
            <button type="button" className="flex h-full justify-center items-center flex-col border-b-4 px-16 border-[#3D3D3D] text-[#3D3D3D]">
              <span className="text-lg font-medium pl-1">
                Pengikut
              </span>
            </button>
          </a>
        </Link>

        <Link href="/following-list" passHref>
          <a>
            <button type="button" className="flex h-full justify-center items-center flex-col border-b-4 px-16 border-[#008C96] text-[#008C96]">
              <span className="text-lg font-medium">
                Mengikuti
              </span>
            </button>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default NavbarMengikuti;
