import NoAuthProvider from '../../providers/auth/NoAuthProvider';
import MainLayout from '../../components/layout/MainLayout';
import HomeNotLoginLayout from '../../components/layout';
import FollowingNotLoginLayout from '../../components/layout/FollowingNotLoginLayout';
// import Posts from './elements/Posts';
// import HomeProvider from './HomeProvider';
// import PostItem from './elements/PostItem';
const FollowingNotLoginContainer = () => {
  return (
    <NoAuthProvider>
      <FollowingNotLoginLayout>
        {/* <HomeProvider>
          <Posts />
          <PostItem/>
        </HomeProvider> */}
      </FollowingNotLoginLayout>
    </NoAuthProvider>
  );
};
export default FollowingNotLoginContainer;
