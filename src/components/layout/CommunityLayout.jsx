import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import Navbarlogin from "./elements/Navbarlogin";

const CommunityLayout = ({ children }) => {

  return (
    <>
      <Navbarlogin />
      <Jumbotron />
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );

};

export default CommunityLayout;