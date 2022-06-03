import { useState } from "react"; 

const ButtonFollowed = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type}
       className="flex justify-center bg-[#457275]  py-1 h-18   border-2 border-[#457275] text-white p-2 text-xs font-light rounded w-24 h-18">
      {label}
    </button> 
    
    ) 
} 

// const followUser = () => {
//     fetch('/follow', {
//         method:"put",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization":"Bearer" +localStorage.getItem('jwt')
//         },
//         body:JSON.stringify({
//             followID:userID
//         })
//     }).then(res => res.json())
//     .then(data =>{
//         console.log(data)
//     })
// }


 
export default ButtonFollowed;