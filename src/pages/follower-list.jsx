import Head from 'next/head';
import FollowerListContainer from '../containers/Follower-list';
const FollowerListPage = () => {
  return (
    <>
      <Head>
        <title>Halo, Selamat Datang di My Appventure</title>
      </Head>
      <FollowerListContainer />
    </>
  );
};
export default FollowerListPage;
