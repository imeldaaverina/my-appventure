import AuthProvider from '../../providers/auth/AuthProvider';
import ChallengeLayout from '../../components/layout/ChallengeLayout';

const ChallengeContainer = () => {
  return (
    <AuthProvider>
      <ChallengeLayout>
      </ChallengeLayout>
    </AuthProvider>
  );
};
export default ChallengeContainer;
