import Head from 'next/head';
import SearchKomunitasContainer from '../containers/search-komunitas/Search-komunitas';

const SearchKomunitasPage = () => {
  return (
    <>
      <Head>
        <title>Search Community - My Appventure</title>
      </Head>
      <SearchKomunitasContainer/>
    </>
  );
};
export default SearchKomunitasPage;
