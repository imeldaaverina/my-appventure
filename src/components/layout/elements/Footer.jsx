import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="font-Poppins bg-[#457275] min-h-min px-3 rounded-t-xl bottom-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto h-full">
        <div className="flex justify-start font-bold text-2xl text-white pb-5"> 
        <div className="flex self-center mr-4">
          About 
        </div>
          <Image src="/LOGO TERANG My Appventure.svg" width={160} height={120} className="w-40 mx-4" alt=""/>
        </div>
        <div className="text-white font-light text-sm tracking-wider -mt-10">
          <p>My Appventure merupakan forum komunitas online yang diprioritaskan bagi para pecinta alam untuk menambah pengetahuan dan memberikan kebebasan berekspresi bagi penggunanya.</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex justify-start text-white font-light text-sm">
            <Image src="/instagram icon.svg" width={26} height={26} className="pb-3 w-8 flex self-center" alt=""/>
            <div className="flex self-center pt-2 pl-2">@myappventure</div>
          </div>
          <div className="flex justify-start text-white font-light text-sm">
            <Image src="/WA icon.svg" width={25} height={25} className="pt-5 pb-3 w-8 flex self-center" alt=""/>
            <div className="flex self-center pt-2 pl-2">0888888888</div>
          </div>
          <div className="w-28 flex items-center">
            <Image src="/playstore.svg" width={110} height={60} alt=""/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

