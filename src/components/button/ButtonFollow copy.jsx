import { useState } from "react"; 

const ButtonFollow = ({ 
    type, 
    label, 
}) => { 
    const [follow, setFollow] = useState(false);
    return ( 
    <button 
       type={type}
       className="flex justify-center text-xs font-light rounded py-1 w-24 h-18"
       label={label}
       onClick={() => setFollow(!follow)}>
       {follow ? 
       <button
       label= "Ikuti"
       className="flex justify-center bg-[#457275] border-2 border-[#457275] text-white text-xs font-light rounded p-2 w-24 h-18"> 
       </button> : 
       <button
       label= "Mengikuti"
       className="flex justify-center bg-transparent border-2 border-[#457275] text-[#457275] p-2 text-xs font-light rounded w-24 h-18"> 
       
       </button>}
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