import NoAuthProvider from '../../providers/auth/NoAuthProvider';
import MainLayout from '../../components/layout/MainLayout';
import HomeNotLoginLayout from '../../components/layout';

const HomeNotLoginContainer = () => {
  return (
    <NoAuthProvider>
      <HomeNotLoginLayout>
      </HomeNotLoginLayout>
    </NoAuthProvider>
  );
};
export default HomeNotLoginContainer;
