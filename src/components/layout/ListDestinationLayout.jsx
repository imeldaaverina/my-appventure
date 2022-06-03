import Footer from "./elements/Footer";
import JumbotronDestination from "./elements/JumbotronDestination";
import NavbarFollowing from "./elements/NavbarFollowing";
import Navbarlogin from "./elements/Navbarlogin";

const ListDestinationLayout = ({children}) => {

  return (
    <>
      <Navbarlogin />
      <JumbotronDestination/>
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
  
};

export default ListDestinationLayout;