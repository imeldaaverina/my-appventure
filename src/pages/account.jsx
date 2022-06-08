import Head from 'next/head';
import AccountContainer from '../containers/account';
const AccountPage = () => {
  return (
    <>
      <Head>
        <title>Account - My Appventure</title>
      </Head>
      <AccountContainer />
    </>
  );
};
export default AccountPage;
