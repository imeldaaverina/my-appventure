import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'account',
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
export const useAccountDispatcher = () => {
  const { account } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doAccount = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/user/daftar',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    // console.log(data)
    localStorage.setItem('access_token', data.access_token);
    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    account,
    doAccount,
  };
};
export default slices.reducer;