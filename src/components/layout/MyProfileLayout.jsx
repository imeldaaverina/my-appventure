import Footer from "./elements/Footer";
import Navbarmyprofile from "./elements/Navbarmyprofile";

const MyProfileLayout = ({children}) => {

  return (
    <>
      <Navbarmyprofile />
        {children}
      <Footer />
    </>
  );

};

export default MyProfileLayout;