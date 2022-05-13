const Button = ({ 
    type, 
    label, 
}) => { 
    return ( 

    <button 
       type={type} 
       className="my-1 bg-white w-full h-full text-[#305960] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.25)] py-2 rounded-lg hover:text-white hover:bg-[#008C96]">  
       {label} 
    </button> 
    
    ) 
} 
 
export default Button;