const ButtonNav = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type} 
       className="flex justify-center bg-[#457275] text-white text-sm font-light shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded px-5 py-1 ">  
       {label} 
    </button> 
    ) 
} 
 
export default ButtonNav;