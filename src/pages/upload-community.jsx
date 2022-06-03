import Head from 'next/head';
import UploadKomunitasContainer from '../containers/upload/UploadKomunitas';
const UploadKomunitasPage = () => {
  return (
    <>
      <Head>
        <title>Upload - My Appventure</title>
      </Head>
      <UploadKomunitasContainer />
    </>
  );
};
export default UploadKomunitasPage;
