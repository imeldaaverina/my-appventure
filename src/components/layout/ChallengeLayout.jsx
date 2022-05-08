import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarChallenge from "./elements/NavbarChallenge";
import Posts from '../../containers/home/elements/Posts';
import HomeProvider from '../../containers/home/HomeProvider';

const ChallengeLayout = () => {

  return (
    <>
      <Navbar />
        <Jumbotron />
        <main className="min-h-screen max-w-md mx-auto">
          <NavbarChallenge/>
          {/* <HomeProvider>
            <Posts />
          </HomeProvider> */}
        </main>
      <Footer />
    </>
  );

};

export default ChallengeLayout;