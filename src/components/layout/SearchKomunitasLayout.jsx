import Footer from "./elements/Footer";
import NavbarSearchKomunitas from "./elements/NavbarSearchKomunitas";

const SearchKomunitasLayout = ({ children }) => {
    return (
        <>
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    <NavbarSearchKomunitas />
                </div>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default SearchKomunitasLayout;
