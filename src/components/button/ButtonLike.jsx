import { useState } from "react"; 
import { HeartIcon, } from "@heroicons/react/outline";

// // const post = ({
// //     like{
// //         {likeby = 1},
// //     },
// // })

// const ButtonLike = ({ 
//     type, 
//     label, 
// }) => { 
//     const [follow, setFollow] = useState(false);
//     return ( 
//     <button 
//        type={type}
//        className="flex justify-center text-xs font-light rounded py-1 w-24 h-18"
//        label={label}
//        onClick={() => setFollow(!follow)}>
//        {follow ? 
//        <HeartIcon
//        label= "Ikuti"
//        className="flex justify-center bg-[#457275] border-2 border-[#457275] text-white text-xs font-light rounded p-2 w-24 h-18"/> : 
//        <HeartIcon
//        label= "Mengikuti"
//        className="flex justify-center bg-transparent border-2 border-[#457275] text-[#457275] p-2 text-xs font-light rounded w-24 h-18"/> 
//        }
//     </button> 
    
//     ) 
// } 
 
// export default ButtonFollow;

// const mongoose = require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
// const postSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     body:{
//         type:String,
//         required:true
//     },
//     photo:{
//         type:String,
//         required:true
//     },
//     likes:[{type:ObjectId,ref:"User"}],
//     comments:[{
//         text:String,
//         postedBy:{type:ObjectId,ref:"User"}
//     }],
//     postedBy:{
//        type:ObjectId,
//        ref:"User"
//     }
// },{timestamps:true})

// mongoose.model("Post",postSchema)

// const likePost = (id)=>{
//     fetch('/like',{
//         method:"put",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":"Bearer "+localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             postId:id
//         })
//     }).then(res=>res.json())
//     .then(result=>{
//              //   console.log(result)
//       const newData = data.map(item=>{
//           if(item._id==result._id){
//               return result
//           }else{
//               return item
//           }
//       })
//       setData(newData)
//     }).catch(err=>{
//         console.log(err)
//     })
// }
// const unlikePost = (id)=>{
//     fetch('/unlike',{
//         method:"put",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":"Bearer "+localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             postId:id
//         })
//     }).then(res=>res.json())
//     .then(result=>{
//       //   console.log(result)
//       const newData = data.map(item=>{
//           if(item._id==result._id){
//               return result
//           }else{
//               return item
//           }
//       })
//       setData(newData)
//     }).catch(err=>{
//       console.log(err)
//   })
// }

import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../helpers/network';
const initialState = {
  loading: false,
  error: ""
};
const slices = createSlice({
  initialState,
  name: 'like',
  reducers: {
    setError (state, action) {
      Object.assign(state, {
        ...state,
        error: action.payload,
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
const { toggleLoading, setError } = slices.actions;
export const useLikeDispatcher = () => {
  const { like } = useSelector((state) => state);
  const dispatch = useDispatch();
  const dolike = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/user-login/login',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    // localStorage.setItem('jwt', data.jwt);
    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    like,
    dolike,
  };
};
export default slices.reducer;
