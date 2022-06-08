import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";

const SearchLayout = ({ children }) => {
    return (
        <>
            <NavbarSearch />
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
};

export default SearchLayout;
