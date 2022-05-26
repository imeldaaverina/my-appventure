import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchPostinganLayout } from "../../components/layout";

const SearchPostinganContainer = () => {

    return (
        <AuthProvider>
            <SearchPostinganLayout>
                <section>
                </section>
            </SearchPostinganLayout>
        </AuthProvider>
    );
};
export default SearchPostinganContainer;
