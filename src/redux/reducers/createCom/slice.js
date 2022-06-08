import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
// import { useRouter }  from "next/router";

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
   values.idUser=3
   console.log(values)

   const formData = new FormData()
   formData.append("file", values.file)
   formData.append("namaKomunitas", values.namaKomunitas)
   formData.append("linkKomunitas", values.linkKomunitas)
   formData.append("deskripsi", values.deskripsi)
   formData.append("idUser", values.idUser)
   
   const user = JSON.parse(localStorage.getItem('data'))

  //  const {push} = useRouter();

    const response = await callAPI({
      url: '/komunitas/create',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.access_token}`      
      },
      data: formData,
    });
    const { data } = response;
    console.log(response)
    localStorage.setItem('access_token', data);
    // push('/success-create-community');
    dispatch(toggleLoading(false));
  };

  return {
    createCommunity,
    doCommunity,
  };
};
export default slices.reducer;