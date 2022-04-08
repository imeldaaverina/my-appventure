const Button2 = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type} 
       className="flex justify-center my-1 bg-[#329D9C] w-full h-full text-white font-bold shadow-[0_4px_20px_rgba(0,0,0,0.25)] py-2 rounded-lg">  
       {label} 
    </button> 
    ) 
} 
 
export default Button2;