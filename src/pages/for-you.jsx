import Head from 'next/head';
import NoAuthProvider from '../providers/auth/NoAuthProvider';
import { HomeNotLoginLayout } from '../components/layout';

const HomeNotLoginContainer = () => {
  return (
    <>
      <Head>
        <title>For You - My Appventure</title>
      </Head>

    <NoAuthProvider>
      <HomeNotLoginLayout>
      </HomeNotLoginLayout>
    </NoAuthProvider>
    </>
  );
};
export default HomeNotLoginContainer;
