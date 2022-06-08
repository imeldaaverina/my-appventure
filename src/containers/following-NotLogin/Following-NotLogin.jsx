import NoAuthProvider from '../../providers/auth/NoAuthProvider';
import FollowingNotLoginLayout from '../../components/layout/FollowingNotLoginLayout';

const FollowingNotLoginContainer = () => {
  return (
    <NoAuthProvider>
      <FollowingNotLoginLayout>
      </FollowingNotLoginLayout>
    </NoAuthProvider>
  );
};
export default FollowingNotLoginContainer;
