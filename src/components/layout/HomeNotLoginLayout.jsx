import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotronn from "./elements/Jumbotronn";
import HomeProvider from '../../containers/home/HomeProvider';
import NavbarPostNotLogin from "./elements/NavbarPostNotLogin";
import PostsNotLogin from "../../containers/home/elements/PostsNotLogin";

const HomeNotLoginLayout = () => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <Navbar />
      <Jumbotronn />
      <main className="min-h-screen max-w-md mx-auto">
        <NavbarPostNotLogin />
        <HomeProvider>
          <PostsNotLogin />
        </HomeProvider>
      </main>
      <Footer />
    </div>
  );

};

export default HomeNotLoginLayout;