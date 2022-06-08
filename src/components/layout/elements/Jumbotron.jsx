import { ButtonJmbtrn } from "../../button";
import { Searchbar } from "../../searchbar";


const Jumbotron = () => {
  return (
    <main className="font-Poppins min-h bg-cover bg-[url('/homepage-bg.jpg')] w-full mx-auto">
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

        <div className="max-w-md mx-auto px-3 h-full pt-7 items-center pb-8">
          <a href="./search-community">
            <Searchbar />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Jumbotron;