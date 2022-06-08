const Button3 = ({ 
    type, 
    label, 
}) => { 
    return ( 

    <button 
       type={type} 
       className="flex justify-center text-xs opacity-100 bg-[#329D9C] w-28 h-5 text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-0.5 rounded-lg">  
       {label} 
    </button> 
    
    ) 
} 
 
export default Button3;