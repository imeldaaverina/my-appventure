import Head from 'next/head';
import FollowerListContainer from '../containers/follower-list/Follower-list';
const FollowerListPage = () => {
  return (
    <>
      <Head>
        <title>Follower List - My Appventure</title>
      </Head>
      <FollowerListContainer />
    </>
  );
};
export default FollowerListPage;
