import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'createCommunity',
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
export const useCommunityDispatcher = () => {
  const { createCommunity } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doCommunity = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/komunitas/create',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    localStorage.setItem('access_token', data.data);
    dispatch(toggleLoading(false));
  };
  return {
    createCommunity,
    doCommunity,
  };
};
export default slices.reducer;