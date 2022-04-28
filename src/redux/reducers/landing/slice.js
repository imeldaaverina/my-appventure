import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
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
  const doLanding = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      // url: '/auth/local',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    localStorage.setItem('access_token', data.access_token);
    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    landing,
    doLanding,
  };
};
export default slices.reducer;
