import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';

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

  const likeAction = async (idPost) => {
   const user = JSON.parse(localStorage.getItem('data'))
    try {
      const formData = new FormData();
      formData.append("idUser", user.id);
      formData.append("idPost", idPost);
      const response = await callAPI({
        url : "/like/",
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${user.access_token}`      
        },
      });

      if (response.data.status === "404") {
        alert(`Failed to like post`);
        return;
      }
      
    } catch (error) {
      console.log(error)
      alert(`Failed to unlike post`);
    }
  };


  const follow = async (idFollowing) => {
    const user = JSON.parse(localStorage.getItem('data'))
     try {
       const formData = new FormData();
       formData.append("idUser", user.id);
       formData.append("idFollowing", idFollowing);
       const response = await callAPI({
         url : "/follow/",
         method: "POST",
         data: formData,
         headers: {
           Authorization: `Bearer ${user.access_token}`      
         },
       });
 
       if (response.data.status === "404") {
         alert(`Failed to follow post`);
         return;
       }
       
     } catch (error) {
       console.log(error)
       alert(`Failed to unfollow post`);
     }
   };

  const deletePost = async ({ idPost }) => {
    try {
      const response = await callAPI({
        url: `/post/delete/${postId}`,
        method: "DELETE",
      });

      if (response.data.status === "404") {
        // toast("Failed to delete post");
        return;
      }
      refreshPosts();
    } catch (error) {
      // toast("Failed to delete post");
    }
  };

  return {
   
    // home,
    // makePosts,
    // makeLoading,
    // makeIncrement,
    likeAction,
    deletePost,
    home,
    // doHome,
    fetchPosts,
    fetchProfile,
    follow,
    // unfollow,
  };
};
export default slices.reducer;
