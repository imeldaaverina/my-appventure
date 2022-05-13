import NoAuthProvider from '../../providers/auth/NoAuthProvider';
import MainLayout from '../../components/layout/MainLayout';
import HomeNotLoginLayout from '../../components/layout';
// import Posts from './elements/Posts';
// import HomeProvider from './HomeProvider';
// import PostItem from './elements/PostItem';
const HomeNotLoginContainer = () => {
  return (
    <NoAuthProvider>
      <HomeNotLoginLayout>
        {/* <HomeProvider>
          <Posts />
          <PostItem/>
        </HomeProvider> */}
      </HomeNotLoginLayout>
    </NoAuthProvider>
  );
};
export default HomeNotLoginContainer;
