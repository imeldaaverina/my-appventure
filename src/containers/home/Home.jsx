import AuthProvider from '../../providers/auth/AuthProvider';
import MainLayout from '../../components/layout/MainLayout';
import Posts from './elements/Posts';
import HomeProvider from './HomeProvider';
import PostItem from './elements/PostItem';
const HomeContainer = () => {
  return (
    <AuthProvider>
      <MainLayout>
        <HomeProvider>
          {/* <Posts /> */}
          <PostItem/>
        </HomeProvider>
      </MainLayout>
    </AuthProvider>
  );
};
export default HomeContainer;
