import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";
import NavbarSearchPengguna from "./elements/NavbarSearchPengguna";

const SearchPenggunaLayout = ({ children }) => {
    return (
        <>
            <NavbarSearch />
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    <NavbarSearchPengguna />
                </div>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default SearchPenggunaLayout;
