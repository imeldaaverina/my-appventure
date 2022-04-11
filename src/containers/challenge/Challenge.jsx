import AuthProvider from '../../providers/auth/AuthProvider';
import ChallengeLayout from '../../components/layout/ChallengeLayout';
// import Posts from './elements/Posts';
// import HomeProvider from './HomeProvider';
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
