import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";
import NavbarSearchPostingan from "./elements/NavbarSearchPostingan";

const SearchPostinganLayout = ({ children }) => {
    return (
        <>
            <NavbarSearch />
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    <NavbarSearchPostingan />
                </div>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default SearchPostinganLayout;
