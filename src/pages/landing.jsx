import Head from 'next/head';
import LandingContainer from '../containers/landing';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Halo, Selamat Datang di My Appventure</title>
      </Head>
      <LandingContainer />
    </>
  );
};
export default LandingPage;
