import Head from 'next/head';
import LoginContainer from '../containers/login';
const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In - My Appventure</title>
      </Head>
      <LoginContainer />
    </>
  );
};
export default LoginPage;
