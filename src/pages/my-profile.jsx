import Head from 'next/head';
import MyProfileContainer from '../containers/my-profile/My-profile';
const MyProfilePage = () => {
  return (
    <>
      <Head>
        <title>My Profile - My Appventure</title>
      </Head>
      <MyProfileContainer />
    </>
  );
};
export default MyProfilePage;
