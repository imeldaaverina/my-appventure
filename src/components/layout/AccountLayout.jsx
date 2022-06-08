import Footer from "./elements/Footer";
import Navbarmyprofile from "./elements/Navbarmyprofile";

const AccountLayout = ({ children }) => {

  return (
    <div>
      <Navbarmyprofile />
      
      {children}
      <Footer />
    </div>
  );

};

export default AccountLayout;