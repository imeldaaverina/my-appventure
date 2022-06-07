import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
import { useRouter }  from "next/router";

const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'landing',
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
  },
});
const { toggleLoading } = slices.actions;
export const useLandingDispatcher = () => {
  const { landing } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {push} = useRouter();
  const doLanding = async (payload) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: `https://myappventure-api.herokuapp.com/api/subscribe/email/${payload.email}`,
      method: 'GET',
    });
    const { data } = response;
    localStorage.removeItem('access_token', data.access_token);
    localStorage.removeItem('user', JSON.stringify(data.user));
    localStorage.setItem('subscribe', data.data);
    
    push('/success-landing');
    dispatch(toggleLoading(false));
  };
  return {
    landing,
    doLanding,
  };
};
export default slices.reducer;
