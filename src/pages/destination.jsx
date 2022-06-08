import Head from 'next/head';
import ListDestinationContainer from '../containers/list-destination/ListDestination';

const DestinationPage = () => {

  return (
    <>
      <Head>
        <title>Destination - My Appventure</title>
      </Head>
      <ListDestinationContainer/>
    </>
  );
};
export default DestinationPage;