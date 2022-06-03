import { useState } from "react"; 

const ButtonFollow = ({ 
    type, 
    label,
   
}) => { 
    // const [follow, setFollow] = useState(false);
    return ( 
    <button 
       type={type}
      
       className="flex justify-center  bg-transparent border-2 border-[#457275] text-[#457275] text-xs font-light rounded p-2 w-24 h-18 py-1">
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


 
export default ButtonFollow;