import Head from 'next/head';
import MyPostContainer from '../containers/my-post/My-post';

const MyPostPage = () => {
  return (
    <>
      <Head>
        <title>My Post - My Appventure</title>
      </Head>
      <MyPostContainer />
    </>
  );
};
export default MyPostPage;
