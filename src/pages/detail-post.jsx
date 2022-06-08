import Head from 'next/head';
import { useEffect } from 'react';
import DetailPostContainer from '../containers/detail-post/Detail-post';

const DetailPostPage = () => {

  return (
    <>
      <Head>
        <title>Detail Post - My Appventure</title>
      </Head>
      <DetailPostContainer />
    </>
  );
};
export default DetailPostPage;
