import Footer from "./elements/Footer";
import NavbarSearch from "./elements/NavbarSearch";

const SearchLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit">
            <NavbarSearch />
            <main className="min-h-screen max-w-md mx-auto">
                <div className="pt-24">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default SearchLayout;
