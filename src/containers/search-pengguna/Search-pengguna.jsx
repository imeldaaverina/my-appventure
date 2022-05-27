import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchPenggunaLayout } from "../../components/layout";

const SearchPenggunaContainer = () => {

    return (
        <AuthProvider>
            <SearchPenggunaLayout>
                <section>
                </section>
            </SearchPenggunaLayout>
        </AuthProvider>
    );
};
export default SearchPenggunaContainer;
