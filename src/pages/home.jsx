import Head from 'next/head';
import AuthProvider from '../providers/auth/AuthProvider';
import MainLayout from '../components/layout/MainLayout';

const HomeContainer = () => {
  return (
    <>
      <Head>
        <title>Home - My Appventure</title>
      </Head>

      <AuthProvider>
        <MainLayout>
        </MainLayout>
      </AuthProvider>
    </>
  );
};
export default HomeContainer;
