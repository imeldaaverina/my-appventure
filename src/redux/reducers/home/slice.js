import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
const initialState = {
  posts: [],
  loading: false,
  counter: 0,
};
const slices = createSlice({
  initialState,
  name: 'home',
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: action.payload,
      });
    },
    increase(state) {
      Object.assign(state, {
        counter: state.counter + 1,
      });
    },
  },
});
const { setPosts, toggleLoading, increase } = slices.actions;
export const useHomeDispatcher = () => {
  const { home } = useSelector((state) => state);
  const dispatch = useDispatch();
  const makeLoading = (loading) => dispatch(toggleLoading(loading));
  const makePosts = (posts) => dispatch(setPosts(posts));
  const makeIncrement = () => {
    dispatch(increase());
  };
  return {
    useHomeDispatcher,
    home,
    makePosts,
    makeLoading,
    makeIncrement,
  };
};
export default slices.reducer;
