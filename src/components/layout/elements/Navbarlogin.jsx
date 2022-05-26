import { MenuIcon } from "@heroicons/react/outline";
import useAccount from "../../../containers/account/hooks/useAccount";

const Navbarlogin = () => {
  const { profile } = useAccount();

  return (
    <nav className="font-Poppins backdrop-blur-sm bg-white/40 h-24 absolute top-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto px-3 h-full flex justify-between items-center">
        <div>
          <a href="./account">
            <MenuIcon className="w-8 h-8 text-white" />
          </a>
        </div>        

        <div className="flex justify-start">
          <div className="text-white font-light text-lg">
            Hai! {profile}
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbarlogin;