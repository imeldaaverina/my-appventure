import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
import { useRouter } from "next/router";

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
  const { push } = useRouter();

  const doRegistration = async (values) => {
    dispatch(toggleLoading(true));
    const formData = new FormData();
    console.log(values)
    if (values.file) {
      // formData.append("file1", values.files[0]);

      formData.append('file', values.file);

      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
    } else {
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
    }
    const response = await callAPI({
      url: '/user/register',
      method: 'POST',
      data: formData,
    });
    const { data } = response;
    console.log(data.data.data)
    localStorage.removeItem("access_token", data.data.access_token);
    localStorage.removeItem("data", JSON.stringify(data.data));
    localStorage.removeItem("username", data.data.data.nama);
    localStorage.removeItem("picture", data.data.data.urlFileName);
    localStorage.removeItem("email", data.data.data.username);
    localStorage.removeItem("id", data.data.data.id);

    push('/success-registration');
    dispatch(toggleLoading(false));


  };
  return {
    registration,
    doRegistration,
  };
};
export default slices.reducer;