import Head from 'next/head';
import SearchPostinganContainer from '../containers/search-postingan/Search-postingan';

const SearchPostinganPage = () => {
  return (
    <>
      <Head>
        <title>Search Post - My Appventure</title>
      </Head>
      <SearchPostinganContainer />
    </>
  );
};
export default SearchPostinganPage;
