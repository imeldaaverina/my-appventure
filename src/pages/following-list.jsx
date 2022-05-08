import Head from 'next/head';
import FollowingListContainer from '../containers/Following-list';
const FollowingListPage = () => {
  return (
    <>
      <Head>
        <title>Halo, Selamat Datang di My Appventure</title>
      </Head>
      <FollowingListContainer />
    </>
  );
};
export default FollowingListPage;
