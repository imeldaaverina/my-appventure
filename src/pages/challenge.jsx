import Head from 'next/head';
import AuthProvider from '../providers/auth/AuthProvider';
import ChallengeLayout from '../components/layout/ChallengeLayout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
const ChallengeContainer = () => {
  return (
    <>
    <Head>
        <title>Challenge - My Appventure</title>
      </Head>
    <AuthProvider>
      <ChallengeLayout>
        {/* <HomeProvider>
          <Posts />
        </HomeProvider> */}
      </ChallengeLayout>
    </AuthProvider>
    </>
  );
};
export default ChallengeContainer;
