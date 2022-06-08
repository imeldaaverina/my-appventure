import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";
import NavbarSearchPostingan from "./elements/NavbarSearchPostingan";

const SearchPostinganLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
            <NavbarSearch />
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    <NavbarSearchPostingan />
                </div>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default SearchPostinganLayout;
