import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
import { useRouter } from "next/router";

const initialState = {
  loading: false,
  errMessage: {
    title: "",
    content: ""
  },
  errPass: {
    title: "",
    content: ""
  },
  succesMessage: {},
  succesPass: {}
};
const slices = createSlice({
  initialState,
  name: 'login',
  reducers: {
    setErrMessage(state, action) {
      Object.assign(state, {
        ...state,
        errMessage: action.payload,
      });
    },
    setErrPass(state, action) {
      Object.assign(state, {
        ...state,
        errPass: action.payload,
      });
    },
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
  },
});
const { toggleLoading, setErrMessage, setErrPass } = slices.actions;
export const useLoginDispatcher = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const makeLoading = (loading) => dispatch(toggleLoading(loading));

  const { push } = useRouter();

  const doLogin = async (payload) => {
    dispatch(toggleLoading(true));
    try {
      const response = await callAPI({
        url: '/user-login/login',
        method: 'POST',
        data: payload,
      });

      const { data } = response;

      if (data.status === "404") {
          console.log(`error > ${data.message}`);
          dispatch(toggleLoading(false));
          dispatch(
            setErrMessage({
              title: "Oops... terjadi kesalahan",
              content: data.message,
            })
          );
          return;
        }


      if (data.status === "400") {
        console.log(`error > ${data.message}`);
        dispatch(toggleLoading(false));
        dispatch(
          setErrPass({
            title: "Oops... terjadi kesalahan",
            content: data.message,
          })
        );
        return;
      }
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("data", JSON.stringify(data.data));
      localStorage.setItem("username", data.data.username);
      localStorage.setItem("picture", data.data.urlFilename);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("id", data.data.id);
      push('/success-login');
      dispatch(toggleLoading(false));

    } catch (error) {
      console.log("error > ", error);
    }
  };

  return {
    login,
    doLogin,
    makeLoading,
  };
};
export default slices.reducer;
