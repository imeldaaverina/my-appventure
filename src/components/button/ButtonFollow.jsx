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
         
       onClick={() => setFollow(!follow)}>
       {follow ? 
       <button
       label= "Ikuti"
       className="flex justify-center bg-[#457275]  text-white text-xs font-light rounded py-1 w-24 h-18"> 
       </button> : 
       <button
       label= "Mengikuti"
       className="flex justify-center bg-transparent border-[#457275] text-[#457275] text-xs font-light rounded py-1 w-24 h-18"> 
       
       </button>}
    </button> 
    
    ) 
} 
 
export default ButtonFollow;