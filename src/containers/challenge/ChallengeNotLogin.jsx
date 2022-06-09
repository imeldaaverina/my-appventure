import NoAuthProvider from '../../providers/auth/NoAuthProvider';
import ChallengeLayout from '../../components/layout/ChallengeLayout';

const ChallengeContainer = () => {
  return (
    <NoAuthProvider>
      <ChallengeLayout>
      </ChallengeLayout>
    </NoAuthProvider>
  );
};
export default ChallengeContainer;
