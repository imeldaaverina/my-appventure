import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import Posts from '../../containers/home/elements/Posts';
import HomeProvider from '../../containers/home/HomeProvider';
import Image from 'next/image'
import NavbarPostNotLogin from "./elements/NavbarPostNotLogin";

const HomeNotLoginLayout = () => {

  return (
    <>
      <Navbar />
        <Jumbotron />
        <main className="min-h-screen max-w-md mx-auto">
          <NavbarPostNotLogin/>
          {/* <a href="/upload" className="flex justify-end sticky top-24 right-10 mr-10 mt-10">
            <img src="./postIcon.svg" className="w-16" alt=""/>
          </a> */}
          {/* <HomeProvider>
            <Posts />
          </HomeProvider> */}
        </main>
      <Footer />
    </>
  );

};

export default HomeNotLoginLayout;