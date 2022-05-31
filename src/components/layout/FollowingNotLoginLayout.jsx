import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotronn from "./elements/Jumbotronn";
import NavbarFollowingNotLogin from "./elements/NavbarFollowingNotLogin";
import Image from "next/image";

const FollowingNotLoginLayout = () => {

  return (
    <>
      <Navbar />
      <Jumbotronn />
      <main className="min-h-screen max-w-md mx-auto font-Poppins">
        <NavbarFollowingNotLogin />
        <div className="pt-20 text-center">
          <div className="flex justify-center">
            <Image src="/Feeling sorry-pana 1.svg" width={250} height={250} alt=""  />
          </div>
          <div className="pt-5 text-lg">
            <p>Anda belum mengikuti siapapun</p>
          </div>
          <div className="pt-10 text-lg text-[#008C96] underline">
            <a href="./registration">
              Yuk bergabung!
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FollowingNotLoginLayout;