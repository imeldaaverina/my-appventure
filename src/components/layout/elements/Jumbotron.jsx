import { SearchIcon } from "@heroicons/react/outline";
import { ButtonJmbtrn } from "../../button";
import { Searchbar } from "../../searchbar";

const Jumbotron = () => {
    return (  
    <main className="font-Poppins min-h bg-cover bg-[url('../../public/homepage-bg.jpg')] w-full mx-auto">
      <div className="max-w-md mx-auto h-full pt-40 px-2">
        <div className="font-bold text-4xl text-white pb-5 pt-11"> 
          <div className="flex justify-center text-center text-shadow-xl">
            Mulai Petualanganmu
          </div>
          <div className="flex justify-center text-shadow-2xl pt-2">
              Sekarang!
          </div>
        </div>
        <div className="text-white font-light text-sm flex text-center tracking-wider ">
          <p>Selamat Datang di My Appventure, Platform online bagi seluruh komunitas pecinta alam di Indonesia. Disini kamu dapat menambah pengetahuan dan wawasan yang luas dengan bergabung ke dalam berbagai komunitas-komunitas 
            yang ada di My Appventure. Bagikan pengalaman 
            unikmu sekarang!</p>
        </div>

        <div className="max-w-md mx-auto px-3 h-full flex justify-between pt-8 items-center">
            <Searchbar/>

            <div className="relative inline-flex">
                <svg className="w-3 h-3 absolute top-0 right-0 mr-4 mt-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
                <select className="border border-gray-300 text-xs rounded-full text-black h-full py-2 pl-5 pr-8 
                bg-white hover:border-gray-400 hover:text-red focus:outline-none appearance-none">
                    <option>Urutkan</option>
                    <option>Terbaru</option>
                    <option>Terlama</option>
                </select>
            </div>
        </div>

        <div className="flex justify-center gap-3 my-4">
            <ButtonJmbtrn label="Pendaki"/>
            <ButtonJmbtrn label="Pantai"/>
            <ButtonJmbtrn label="Air Terjun"/>
            <ButtonJmbtrn label="Tanaman"/>
        </div>

        <div className="flex justify-center gap-3 pb-5">
            <ButtonJmbtrn label="Arung Jeram"/>
            <ButtonJmbtrn label="Hutan"/>
            <ButtonJmbtrn label="Camping"/>
        </div>


      </div>
    </main>
  )
}

export default Jumbotron;