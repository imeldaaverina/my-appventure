import Head from 'next/head';
import AuthProvider from '../providers/auth/AuthProvider';
import FollowingLayout from '../components/layout/FollowingLayout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
const FollowingContainer = () => {
  return (
    <>
      <Head>
        <title>Following - My Appventure</title>
      </Head>

    <AuthProvider>
      <FollowingLayout>
        {/* <HomeProvider>
          <Posts />
        </HomeProvider> */}
      </FollowingLayout>
    </AuthProvider>
    </>
  );
};
export default FollowingContainer;
