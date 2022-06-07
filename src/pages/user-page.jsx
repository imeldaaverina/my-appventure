import Head from 'next/head';
import UserPageContainer from '../containers/user-page/UserPage';

const UserPage = () => {

  return (
    <>
      <Head>
        <title>User Page - My Appventure</title>
      </Head>
      <UserPageContainer />
    </>
  );
};
export default UserPage;
