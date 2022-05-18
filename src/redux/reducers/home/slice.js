import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
const initialState = {
  data: [],
  loading: false,
  counter: 0,
};
// const slices = createSlice({
//   initialState,
//   name: 'home',
//   reducers: {
//     toggleLoading(state, action) {
//       Object.assign(state, {
//         ...state,
//         loading: action.payload,
//       });
//     },
//     setPosts(state, action) {
//       Object.assign(state, {
//         ...state,
//         posts: action.payload,
//       });
//     },
//     increase(state) {
//       Object.assign(state, {
//         counter: state.counter + 1,
//       });
//     },
//   },
// });

const slices = createSlice({
  initialState,
  name: "home",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    toggleLoadingPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: {
          ...state.posts,
          loading: action.payload,
        },
      });
    },
    setPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: {
          ...state.posts,
          data: action.payload,
        },
      });
    },
    toggleLoadingProfile(state, action) {
      Object.assign(state, {
        ...state,
        profile: {
          ...state.profile,
          loading: action.payload,
        },
      });
    },
    setProfile(state, action) {
      Object.assign(state, {
        ...state,
        profile: {
          ...state.profile,
          data: action.payload,
        },
      });
    },
  },
});

// const { setPosts, toggleLoading, increase } = slices.actions;
const {
  toggleLoading,
  setPosts,
  toggleLoadingPosts,
  setProfile,
  toggleLoadingProfile,
} = slices.actions;

export const useHomeDispatcher = () => {
  const { home } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const makeLoading = (loading) => dispatch(toggleLoading(loading));
  // const makePosts = (posts) => dispatch(setPosts(posts));
  // const makeIncrement = () => {
  //   dispatch(increase());
  //   const response = await callAPI({
  //     url: '/like',
  //     method: 'POST',
  //     data: values,
  //   });
  //   const { data } = response;
  //   localStorage.setItem('access_token', data.access_token);
  //   dispatch(toggleLoading(false));
  // };

  const fetchPosts = async (values) => {
    try {
      toggleLoadingPosts(true);
      const response = await callAPI({
        url: "/post/list",
        method: "GET",
      });

      const { data } = response;
      if (data.data) {
        dispatch(setPosts(data.data.reverse()));
      }
      dispatch(toggleLoadingPosts(false));
    } catch (error) {
      dispatch(toggleLoadingPosts(false));
    }
  };

  const fetchProfile = async (values) => {
    try {
      toggleLoadingProfile(true);
      const response = await callAPI({
        url: "/user/detail-profile",
        method: "GET",
      });

      const { data } = response;
      if (data.data) {
        dispatch(setProfile(data.data));
      }
      dispatch(toggleLoadingProfile(false));
    } catch (error) {
      dispatch(toggleLoadingProfile(false));
    }
  };
  return {
    useHomeDispatcher,
    // home,
    // makePosts,
    // makeLoading,
    // makeIncrement,
    home,
    // doHome,
    fetchPosts,
    fetchProfile,
  };
};
export default slices.reducer;
