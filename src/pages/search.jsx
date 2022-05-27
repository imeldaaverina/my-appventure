import Head from 'next/head';
import { SearchLayout } from '../components/layout';

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>Search - My Appventure</title>
      </Head>
      <SearchLayout/>
    </>
  );
};
export default SearchPage;
