import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import Image from "next/image";
import Navbarlogin from "./elements/Navbarlogin";

const ChallengeLayout = () => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <Navbarlogin />
      <Jumbotron />
      <main className="min-h-screen max-w-md mx-auto">
        <div className="pt-20 text-center">
          <div className="flex justify-center">
            <Image src="/phone maintenance.svg" width={250} height={250} alt="" />
          </div>
          <div className="pt-5 text-lg">
            <p>Fitur Tantangan akan segera hadir</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );

};

export default ChallengeLayout;