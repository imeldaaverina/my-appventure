import { Searchbar } from "../../searchbar";


const JumbotronDestinations = () => {
  return (
    <main className="font-Poppins min-h bg-cover bg-[url('/homepage-bg.jpg')] w-full mx-auto">
      <div className="max-w-md mx-auto h-full pt-52 px-2">
        <div className="font-bold text-3xl text-white pb-5 pt-11">
          <div className="flex justify-center text-center text-shadow-2xl">
            Temukan Destinasi yang
          </div>
          <div className="flex justify-center text-shadow-2xl pt-2">
            Ingin Dikunjungi
          </div>
        </div>
        <div className="text-white pt-3 font-light text-sm flex text-center tracking-wider ">
          <p>Cari dan temukan tempat wisata alam favoritmu dengan mudah hanya di My Appventure.</p>
        </div>

        <div className="max-w-md mx-auto px-3 h-full pt-16 items-center pb-28">
          <a href="./login">
            <Searchbar />
          </a>
        </div>
      </div>
    </main>
  )
}

export default JumbotronDestinations;