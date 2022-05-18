import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarPost from "./elements/NavbarPost";
import Posts from "../../containers/home/elements/Posts";
import HomeProvider from "../../containers/home/HomeProvider";
import Image from "next/image";
import Navbarlogin from "./elements/Navbarlogin";
import Link from "next/link";
import PostItem from "../../containers/home/elements/PostItem";

const MainLayout = () => {
  return (
    <>
      <Navbarlogin />
      <Jumbotron />
      <main className="min-h-screen max-w-md mx-auto">
        <NavbarPost />
        <div className="flex justify-end sticky top-24 right-10 mr-10 mt-10">
          <Link href="/upload" className="" passHref>
            <a>
              <Image
                src="/postIcon.svg"
                className="w-16"
                width={65}
                height={65}
                alt=""
              />
            </a>
          </Link>
        </div>
        <HomeProvider>
          <Posts />
          {/* <PostItem/> */}
        </HomeProvider>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
