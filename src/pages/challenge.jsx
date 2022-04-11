import AuthProvider from '../providers/auth/AuthProvider';
import ChallengeLayout from '../components/layout/ChallengeLayout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
const ChallengeContainer = () => {
  return (
    <AuthProvider>
      <ChallengeLayout>
        {/* <HomeProvider>
          <Posts />
        </HomeProvider> */}
      </ChallengeLayout>
    </AuthProvider>
  );
};
export default ChallengeContainer;
