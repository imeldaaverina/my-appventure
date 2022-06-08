import Head from 'next/head';
import SearchPenggunaContainer from '../containers/search-pengguna/Search-pengguna';

const SearchPenggunaPage = () => {
  return (
    <>
      <Head>
        <title>Search User - My Appventure</title>
      </Head>
      <SearchPenggunaContainer/>
    </>
  );
};
export default SearchPenggunaPage;
