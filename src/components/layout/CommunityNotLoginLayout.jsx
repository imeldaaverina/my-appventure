import Footer from "./elements/Footer";
import Jumbotronn from "./elements/Jumbotronn";
import Navbar from "./elements/Navbar";

const CommunityNotLoginLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <Navbar />
      <Jumbotronn />
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );

};

export default CommunityNotLoginLayout;