import AuthProvider from '../providers/auth/AuthProvider';
import MainLayout from '../components/layout/MainLayout';
import Posts from '../containers/home/elements/Posts';
import HomeProvider from '../containers/home';
import PostItem from '../containers/home/elements/PostItem'
const HomeContainer = () => {
  return (
    <AuthProvider>
      <MainLayout>
        <HomeProvider>
          <Posts />
          <PostItem/>
        </HomeProvider>
      </MainLayout>
    </AuthProvider>
  );
};
export default HomeContainer;
