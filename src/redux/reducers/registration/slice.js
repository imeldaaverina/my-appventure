import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'registration',
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
export const useRegistrationDispatcher = () => {
  const { registration } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doRegistration = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/user/register',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    localStorage.setItem('access_token', data.access_token);
    dispatch(toggleLoading(false));
  };
  return {
    registration,
    doRegistration,
  };
};
export default slices.reducer;