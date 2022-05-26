import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchKomunitasLayout } from "../../components/layout";

const SearchKomunitasContainer = () => {

    return (
        <AuthProvider>
            <SearchKomunitasLayout>
                <section>
                </section>
            </SearchKomunitasLayout>
        </AuthProvider>
    );
};
export default SearchKomunitasContainer;
