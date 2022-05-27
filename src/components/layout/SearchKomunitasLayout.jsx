import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";
import NavbarSearchKomunitas from "./elements/NavbarSearchKomunitas";

const SearchKomunitasLayout = ({ children }) => {
    return (
        <>
            <NavbarSearch />
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
