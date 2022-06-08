import Footer from "./elements/Footer";

const CreateCommunityLayout = ({ children }) => {

  return (
    <>
      <main className="min-h-screen max-w-md mx-auto py-20">
        {children}
      </main>
      <Footer />
    </>
  );

};

export default CreateCommunityLayout;