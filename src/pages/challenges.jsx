import Head from 'next/head';
import NoAuthProvider from '../providers/auth/NoAuthProvider';
import ChallengeLayout from '../components/layout/ChallengeLayout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
import ChallengeNotLoginLayout from '../components/layout/ChallengeNotLoginLayout';

const ChallengeContainer = () => {
  return (
    <>
      <Head>
        <title>Challenges - My Appventure</title>
      </Head>
      <NoAuthProvider>
          <ChallengeNotLoginLayout/>
      </NoAuthProvider>
    </>
  );
};
export default ChallengeContainer;
