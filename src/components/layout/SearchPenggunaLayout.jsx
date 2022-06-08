import Footer from "./elements/Footer";
import NavbarSearchPengguna from "./elements/NavbarSearchPengguna";

const SearchPenggunaLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    <NavbarSearchPengguna />
                </div>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default SearchPenggunaLayout;
