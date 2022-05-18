import Head from 'next/head';
import MyCommunityContainer from '../containers/my-community/My-community';
const MyCommunityPage = () => {
  return (
    <>
      <Head>
        <title>My Community - My Appventure</title>
      </Head>
      <MyCommunityContainer />
    </>
  );
};
export default MyCommunityPage;
