import Head from 'next/head';
import { useEffect } from 'react';
import DetailCommunityContainer from '../containers/detail-community/Detail-community'
const DetailCommunityPage = () => {

useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id)

})

  return (
    <>
      <Head>
        <title>Detail Community - My Appventure</title>
      </Head>
      <DetailCommunityContainer />
    </>
  );
};
export default DetailCommunityPage;
