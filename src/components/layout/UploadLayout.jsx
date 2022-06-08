import Footer from "./elements/Footer";

const UploadLayout = ({ children }) => {

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
      <main className="min-h-screen max-w-md mx-auto pt-20 pb-10">
        {children}
      </main>
      
      <Footer/>
     
    </div>
  );

};

export default UploadLayout;