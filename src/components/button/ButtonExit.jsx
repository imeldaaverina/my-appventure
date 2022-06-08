import {XIcon} from "@heroicons/react/outline";

const ButtonExit = ({ 
    type, 
    label, 
}) => { 
    return ( 
        
    <button 
       type={type} 
       className="flex justify-center bg-[#FF8181] w-10 h-10 rounded-tr-xl rounded-bl-xl font-bold py-2">  
       {label} 
       <XIcon className=" h-6 w-6 text-white flex self-center"/>
    </button>
    
    ) 
} 
 
export default ButtonExit;