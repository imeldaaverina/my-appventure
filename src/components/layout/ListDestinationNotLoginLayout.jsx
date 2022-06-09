import Footer from "./elements/Footer";
import JumbotronDestinations from "./elements/JumbotronDestinations";
import Navbar from "./elements/Navbar";

const ListDestinationNotLoginLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <Navbar />
      <JumbotronDestinations />
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );

};

export default ListDestinationNotLoginLayout;