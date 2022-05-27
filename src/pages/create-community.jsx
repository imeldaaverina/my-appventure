import Head from 'next/head';
import CommunityContainer from '../containers/createcom';
const CommunityPage = () => {
  return (
    <>
      <Head>
        <title>Create Community</title>
      </Head>
      
      <CommunityContainer />
    </>
  );
};
export default CommunityPage;
