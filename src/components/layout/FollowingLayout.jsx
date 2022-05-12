import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarFollowing from "./elements/NavbarFollowing";
import Posts from '../../containers/home/elements/Posts';
import HomeProvider from '../../containers/home/HomeProvider';
import Link from 'next/link'
import Image from 'next/link'

const FollowingLayout = () => {

  return (
    <>
      <Navbar />
        <Jumbotron />
        <main className="min-h-screen max-w-md mx-auto">
          <NavbarFollowing/>
          {/* <Link href="./upload" className="flex justify-end sticky top-24 right-10 mr-10 mt-10">
          <a>
            <Image src="./postIcon.svg" className="w-16" alt=""/>
            </a>
          </Link> */}
          {/* <HomeProvider>
            <Posts />
          </HomeProvider> */}
        </main>
      <Footer />
    </>
  );

};

export default FollowingLayout;