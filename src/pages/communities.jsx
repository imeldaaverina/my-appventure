import Head from 'next/head';
import CommunityNotLoginContainer from '../containers/community/CommunityNotLogin';
const CommunityPage = () => {

  return (
    <>
      <Head>
        <title>Community - My Appventure</title>
      </Head>
      <CommunityNotLoginContainer />
    </>
  );
};
export default CommunityPage;