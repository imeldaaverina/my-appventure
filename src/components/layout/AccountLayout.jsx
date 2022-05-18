import Footer from "./elements/Footer";
import Navbarmyprofile from "./elements/Navbarmyprofile";

const AccountLayout = ({children}) => {

  return (
    <>
      <Navbarmyprofile />
        {children}
      <Footer />
    </>
  );

};

export default AccountLayout;