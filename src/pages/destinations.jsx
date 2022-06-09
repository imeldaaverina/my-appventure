import Head from 'next/head';
import ListDestinationNotLoginContainer from '../containers/list-destination/ListDestinationNotLogin';

const DestinationPage = () => {

  return (
    <>
      <Head>
        <title>Destination - My Appventure</title>
      </Head>
      <ListDestinationNotLoginContainer/>
    </>
  );
};
export default DestinationPage;