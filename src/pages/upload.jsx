import Head from 'next/head';
import UploadContainer from '../containers/upload';
const UploadPage = () => {
  return (
    <>
      <Head>
        <title>Upload - My Appventure</title>
      </Head>
      <UploadContainer />
    </>
  );
};
export default UploadPage;
