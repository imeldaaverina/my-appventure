import Footer from "./elements/Footer";

const MyPostLayout = ({children}) => {

  return (
    <>
      <main className="min-h-screen max-w-md mx-auto py-20">
        {children}
      </main>
      <Footer />
    </>
  );

};

export default MyPostLayout;