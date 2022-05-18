import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
import { useRouter }  from "next/router";

const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'ListCommunity',
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
export const useListCommunityDispatcher = () => {
  const { listCommunity } = useSelector((state) => state);
  const dispatch = useDispatch();

  const doListCommunity = async (payload) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
      method: 'GET',
      data: payload,
    });
    // const { data } = response;
    // localStorage.setItem('access_token', data.access_token);
    // localStorage.setItem('user', JSON.stringify(data.user));
    // localStorage.setItem('subscribe', data.data);
    
    dispatch(toggleLoading(false));
  };
  return {
    listCommunity,
    doListCommunity,
  };
};
export default slices.reducer;
