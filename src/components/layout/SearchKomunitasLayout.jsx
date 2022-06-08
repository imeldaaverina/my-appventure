import Footer from "./elements/Footer";
import NavbarSearchKomunitas from "./elements/NavbarSearchKomunitas";

const SearchKomunitasLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    <NavbarSearchKomunitas />
                </div>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default SearchKomunitasLayout;
