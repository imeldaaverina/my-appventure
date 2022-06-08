import Footer from "./elements/Footer";

const DetailPostLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <main className="min-h-screen max-w-md mx-auto py-5">
        {children}
      </main>
      <Footer />
    </div>
  );

};

export default DetailPostLayout;