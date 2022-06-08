import Footer from "./elements/Footer";

const DetailPostLayout = ({ children }) => {

  return (
    <>
      <main className="min-h-screen max-w-md mx-auto py-5">
        {children}
      </main>
      <Footer />
    </>
  );

};

export default DetailPostLayout;