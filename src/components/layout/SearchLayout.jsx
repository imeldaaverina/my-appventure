import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";

const SearchLayout = ({ children }) => {
    return (
        <>
            <NavbarSearch />
            <main className="min-h-screen max-w-md mx-auto">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default SearchLayout;
