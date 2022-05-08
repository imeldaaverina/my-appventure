import AuthProvider from "../../providers/auth/AuthProvider";
import FollowingListLayout from "../../components/layout/FollowingListLayout";
import { Icon } from '@iconify/react';


const FollowingListContainer = () => {
    return (
      <AuthProvider>
        <FollowingListLayout>
        </FollowingListLayout>
      </AuthProvider>
    );
  };
  export default FollowingListContainer;
  