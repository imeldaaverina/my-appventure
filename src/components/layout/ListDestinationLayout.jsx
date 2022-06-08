import Footer from "./elements/Footer";
import JumbotronDestination from "./elements/JumbotronDestination";
import Navbarlogin from "./elements/Navbarlogin";

const ListDestinationLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <Navbarlogin />
      <JumbotronDestination />
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );

};

export default ListDestinationLayout;