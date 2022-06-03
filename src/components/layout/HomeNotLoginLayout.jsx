import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotronn from "./elements/Jumbotronn";
import Posts from '../../containers/home/elements/Posts';
import HomeProvider from '../../containers/home/HomeProvider';
import Image from 'next/image';
import NavbarPostNotLogin from "./elements/NavbarPostNotLogin";
import Link from 'next/link';
import PostsNotLogin from "../../containers/home/elements/PostsNotLogin";

const HomeNotLoginLayout = () => {

  return (
    <>
      <Navbar />
        <Jumbotronn />
        <main className="min-h-screen max-w-md mx-auto">
          <NavbarPostNotLogin/>
            <HomeProvider>
              <PostsNotLogin />
            </HomeProvider>
        </main>
      <Footer />
    </>
  );

};

export default HomeNotLoginLayout;