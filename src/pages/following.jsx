import Head from 'next/head';
import FollowingContainer from '../containers/following/Following';

const FollowingPage = () => {
  return (
    <>
      <Head>
        <title>Following - My Appventure</title>
      </Head>
      <FollowingContainer />
    </>
  );
};
export default FollowingPage;
