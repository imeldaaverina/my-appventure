import { createContext, useContext } from 'react';
import useHome from './hooks/useHome';
const initialContext = {
  posts: [],
  loadPosts: () => {},
  loading: [],
  listFollowing: [],
  fetchListFollowing: () => {},
};
const HomeContext = createContext(initialContext);
export const useHomeProvider = () => useContext(HomeContext);
const HomeProvider = ({ children }) => {
  const { posts, loadPosts, loading, listFollowing, fetchListFollowing, } = useHome();
  return (
    <HomeContext.Provider
      value={{
        posts,
        loadPosts,
        loading,
        listFollowing,
        fetchListFollowing,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export default HomeProvider;
