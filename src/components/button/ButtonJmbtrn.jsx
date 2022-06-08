const ButtonJmbtrn = ({ 
    type, 
    label, 
}) => { 
    return ( 

    <button 
       type={type} 
       className="flex justify-center bg-transparent border text-white text-xs font-light rounded px-4 py-1 ">  
       {label} 
    </button> 
    
    ) 
} 
 
export default ButtonJmbtrn;