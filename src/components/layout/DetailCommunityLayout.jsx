import Footer from "./elements/Footer";

const DetailCommunityLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <main className="min-h-screen max-w-md mx-auto py-20">
        {children}
      </main>
      <Footer />
    </div>
  );

};

export default DetailCommunityLayout;