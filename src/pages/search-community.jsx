import Head from 'next/head';
import { SearchKomunitasLayout } from '../components/layout';

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>Search Community - My Appventure</title>
      </Head>
      <SearchKomunitasLayout/>
    </>
  );
};
export default SearchPage;
