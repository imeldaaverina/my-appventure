import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import Navbarlogin from "./elements/Navbarlogin";

const CommunityLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <Navbarlogin />
      <Jumbotron />
      <main className="min-h-screen max-w-md mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );

};

export default CommunityLayout;