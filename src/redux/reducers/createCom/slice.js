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
   values.idUser=3
   console.log(values)

   const formData = new FormData()
   formData.append("file", values.file)
   formData.append("namaKomunitas", values.namaKomunitas)
   formData.append("linkKomunitas", values.linkKomunitas)
   formData.append("deskripsi", values.deskripsi)
   formData.append("idUser", values.idUser)

    const response = await callAPI({
      url: '/komunitas/create',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2F1dGgyLXJlc291cmNlIl0sInVzZXJfbmFtZSI6ImFxdWFAZ21haWwuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY1MzU2NTU3MSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9SRUFEIiwiUk9MRV9XUklURSJdLCJqdGkiOiIzODE2NWFhMy1jMmQyLTQ3ZTUtYjU2ZS0yZmU5ZmRmOGVhZjciLCJjbGllbnRfaWQiOiJteS1jbGllbnQtd2ViIn0.xHJA3o9JRzVDAezKUBQg-xDuWAeYBn2Vooxmj_dazIo"}`,
      },

      data: formData,
    });
    const { data } = response;
    console.log(response)
    localStorage.setItem('access_token', data);
    dispatch(toggleLoading(false));
  };
  return {
    createCommunity,
    doCommunity,
  };
};
export default slices.reducer;