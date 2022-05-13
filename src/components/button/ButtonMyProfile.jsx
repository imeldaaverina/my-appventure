import { Icon } from '@iconify/react';

const ButtonMyProfile = ({ 
    type, 
    label, 
    icon,
}) => { 
    return ( 

    <button 
       type={type} 
       className="bg-white text-[#329D9C] border-[#329D9C] border-2 text-xl font-semibold w-full h-full rounded-xl py-3 px-3 flex justify-between items-center">  
       <div className='flex '>
            <div className='pr-3'>{icon}</div>
       {label}</div>
       <Icon icon="ep:arrow-right-bold" className='flex justify-self-end'/>
    </button> 
    
    ) 
} 
 
export default ButtonMyProfile;