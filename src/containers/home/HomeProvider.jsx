import { createContext, useContext } from 'react';
import useHome from './hooks/useHome';
const initialContext = {
  posts: [],
  loadPosts: () => {},
  loading: []
};
const HomeContext = createContext(initialContext);
export const useHomeProvider = () => useContext(HomeContext);
const HomeProvider = ({ children }) => {
  const { posts, loadPosts, loading } = useHome();
  return (
    <HomeContext.Provider
      value={{
        posts,
        loadPosts,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export default HomeProvider;
