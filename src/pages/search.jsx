import Head from 'next/head';
import SearchContainer from '../containers/search/Search';

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>Search - My Appventure</title>
      </Head>
      <SearchContainer/>
    </>
  );
};
export default SearchPage;
