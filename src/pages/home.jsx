import AuthProvider from '../providers/auth/AuthProvider';
import MainLayout from '../components/layout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
const HomeContainer = () => {
  return (
    <AuthProvider>
      <MainLayout>
        <HomeProvider>
          <Posts />
        </HomeProvider>
      </MainLayout>
    </AuthProvider>
  );
};
export default HomeContainer;
