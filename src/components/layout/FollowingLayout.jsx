import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarFollowing from "./elements/NavbarFollowing";
import Navbarlogin from "./elements/Navbarlogin";

const FollowingLayout = ({children}) => {

  return (
    <>
      <Navbarlogin />
      <Jumbotron />
      <main className="min-h-screen max-w-md mx-auto">
        <NavbarFollowing />
        {children}
      </main>
      <Footer />
    </>
  );
  
};

export default FollowingLayout;