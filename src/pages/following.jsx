import AuthProvider from '../providers/auth/AuthProvider';
import FollowingLayout from '../components/layout/FollowingLayout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
const FollowingContainer = () => {
  return (
    <AuthProvider>
      <FollowingLayout>
        {/* <HomeProvider>
          <Posts />
        </HomeProvider> */}
      </FollowingLayout>
    </AuthProvider>
  );
};
export default FollowingContainer;
