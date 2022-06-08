import Head from 'next/head';
import FollowingListContainer from '../containers/following-list/Following-list';
const FollowingListPage = () => {
  return (
    <>
      <Head>
        <title>Following List - My Appventure</title>
      </Head>
      <FollowingListContainer />
    </>
  );
};
export default FollowingListPage;
