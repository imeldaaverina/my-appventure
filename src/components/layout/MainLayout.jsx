import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarPost from "./elements/NavbarPost";
import Posts from "../../containers/home/elements/Posts";
import HomeProvider from "../../containers/home/HomeProvider";
import Navbarlogin from "./elements/Navbarlogin";

const MainLayout = () => {
  return (
    <>
      <Navbarlogin />
      <Jumbotron />
      <main className="min-h-screen max-w-md mx-auto">
        <NavbarPost />
        <HomeProvider>
          <Posts />
        </HomeProvider>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
