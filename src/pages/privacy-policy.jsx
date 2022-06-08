import Head from 'next/head';
import PrivacyPolicytContainer from '../containers/privacy-policy/Privacy-policy';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - My Appventure</title>
      </Head>
      <PrivacyPolicytContainer />
    </>
  );
};
export default PrivacyPolicyPage;
