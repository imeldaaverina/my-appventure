import AuthProvider from '../../providers/auth/AuthProvider';
import FollowingLayout from '../../components/layout/FollowingLayout';
// import Posts from './elements/Posts';
// import HomeProvider from './HomeProvider';
const FollowingContainer = () => {
  return (
    <AuthProvider>
      <FollowingLayout>
        <HomeProvider>
          <Posts />
        </HomeProvider>
      </FollowingLayout>
    </AuthProvider>
  );
};
export default FollowingContainer;
