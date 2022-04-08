import { SearchIcon } from "@heroicons/react/outline";

const Searchbar = () => {
    return (
        <form className="w-full mr-3">
            <div className="relative">
                <span className="absolute top-0 left-0 h-full text-gray-500 font-bold inline-flex justify-center items-center px-3">
                    <SearchIcon className="w-5 h-5" />
                </span>
                <input 
                placeholder="Cari komunitas dan pengguna lainnya" 
                type="text" 
                className="border w-full rounded-3xl bg-gray-100 focus:outline-none focus:ring-0 pl-10 py-2 text-xs text-gray-500" 
                />
            </div>
        </form>
    )
}
  
export default Searchbar;
  