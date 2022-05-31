import AuthProvider from "../../providers/auth/AuthProvider";
import { SearchPenggunaLayout } from "../../components/layout";
import { useState, useEffect, Fragment } from "react";
import { useSearchDispatcher } from "../../redux/reducers/search user";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

// const SearchPenggunaContainer = () => {
export default function SearchPeople() {
    const [showResult, setShowResult] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const { search, searchUsers } = useSearchDispatcher();

    const handleOnSearch = async () => {
        setShowResult(true);
        console.log("submited");
        searchUsers({ query: searchInput });
        setSearchInput("");
    };

    return (
        <AuthProvider>
            <SearchPenggunaLayout>
                <section>
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => (e.key === "Enter" ? handleOnSearch() : null)}
                        type="search"
                        className="pr-3 pl-10 form-control relative min-w-0 items-center block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <SearchIcon
                        className="h-5 w-5 absolute mb-0 ml-3 text-gray-500"
                        height="1.25rem"
                        width="1.25rem"
                    />

                    <Transition
                        show={showResult}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setSearchInput("")}
                    >
                        <div className="absolute top-0 w-screen h-[20vh]">
                            <div className="relative top-20 p-5 bg-white w-80 rounded-lg border-gray-100  max-h-80 overflow-auto">
                                <div
                                    className="flex justify-end pb-4"
                                    onClick={() => setShowResult(false)}
                                >
                                    <XIcon height={32} width={32} />
                                </div>

                                {search.error && <p>Error...</p>}
                                {search.loading && <p>Loading...</p>}
                                {search.users.map((user) => (
                                    <UserItem key={`search-user-${user.id}`} user={user} />
                                ))}
                            </div>
                        </div>
                    </Transition>

                </section>
            </SearchPenggunaLayout>
        </AuthProvider>
    );
};
// export default SearchPenggunaContainer;
