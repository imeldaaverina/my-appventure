import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchLayout } from "../../components/layout";
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import axios from "axios";

const SearchContainer = () => {
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 1000);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    
    useEffect(() => {
        async function searchUser() {
            try {
                setLoading(true);
                const baseUrl = await axios({
                    url: `https://myappventure-api.herokuapp.com/api/user/detail/cariuser?q=${query}`,
                    method: 'get',
                    params: {
                        page: 0,
                        size: 300,
                        nama: `${query}`
                    }
                });
                console.log("response > ", baseUrl.data.data.content);
                setData(baseUrl.data.data.content);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log("error > ", error);
            }
        };

        searchUser()
    }, [query]);

    return (
        <AuthProvider>
            <SearchLayout>
                <section>
                    <div className="form-wrapper">
                        <input
                            type="text"
                            placeholder="search here..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    {loading && <div>loading...</div>}

                    {data && data.map(search => (
                        <div>
                            <h1>{search.nama}</h1>
                        </div>
                    ))}
                    <div>

                    </div>
                </section>
            </SearchLayout>
        </AuthProvider>
    );
};
export default SearchContainer;
