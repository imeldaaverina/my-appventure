import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarFollowingNotLogin from "./elements/NavbarFollowingNotLogin";

const FollowingNotLoginLayout = () => {

  return (
    <>
      <Navbar />
        <Jumbotron />
        <main className="min-h-screen max-w-md mx-auto font-Poppins">
          <NavbarFollowingNotLogin/>
          <div className="pt-20 text-center">
            <div className="flex justify-center">
            <img src="/Feeling sorry-pana 1.svg" alt=""/>
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