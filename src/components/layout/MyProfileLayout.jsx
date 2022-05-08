import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import JumbotronProfile from "./elements/JumbotronProfile";

const MyProfileLayout = ({children}) => {

  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );

};

export default MyProfileLayout;