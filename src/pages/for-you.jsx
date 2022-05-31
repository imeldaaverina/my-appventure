import Head from 'next/head';
import NoAuthProvider from '../providers/auth/NoAuthProvider';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
import PostItem from '../containers/home/elements/PostItem'
import { HomeNotLoginLayout } from '../components/layout';

const HomeNotLoginContainer = () => {
  return (
    <>
      <Head>
        <title>Home - My Appventure</title>
      </Head>

    <NoAuthProvider>
      <HomeNotLoginLayout>
        {/* <HomeProvider>
          <Posts />
          <PostItem/>
        </HomeProvider> */}
      </HomeNotLoginLayout>
    </NoAuthProvider>
    </>
  );
};
export default HomeNotLoginContainer;
