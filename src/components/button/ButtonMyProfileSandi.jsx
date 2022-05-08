import { Icon } from '@iconify/react';

const ButtonMyProfileSandi = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type} 
       className="text-white bg-[#329D9C] text-xl font-semibold w-full h-full rounded-xl py-3 px-3 flex justify-start items-center">  
       <div className='pr-3'>
       <Icon icon="uis:padlock" width="28" height="28"/> 
       </div>
       {label}
    </button> 
    ) 
} 
 
export default ButtonMyProfileSandi;