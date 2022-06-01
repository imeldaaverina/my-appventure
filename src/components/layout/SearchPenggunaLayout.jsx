import Footer from "./elements/Footer";
import NavbarSearchPengguna from "./elements/NavbarSearchPengguna";

const SearchPenggunaLayout = ({ children }) => {
    return (
        <>
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
