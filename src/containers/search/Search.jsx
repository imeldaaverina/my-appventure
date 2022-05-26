import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchLayout } from "../../components/layout";

const SearchContainer = () => {

    return (
        <AuthProvider>
            <SearchLayout>
                <section>
                </section>
            </SearchLayout>
        </AuthProvider>
    );
};
export default SearchContainer;
