import { useState } from "react"; 
import { callAPI } from '../../../helpers/network'; 
 
const useRegistration = () => { 
    const [loading, setLoading] = useState(); 
    const submit = async (values) => { 
        const response = await callAPI({ 
            url: '/user/daftar', 
            method: 'POST', 
            data: values, 
        }); 
         
        const { data } = response; 
         
        // localStorage.setItem('jwt', data.jwt); 
        // localStorage.setItem('user', JSON.stringify(data.user)); 
        localStorage.setItem('access_token', data.access_token);
    
        window.location.href = '/'; 
    }; 
     
    return { 
        loading, 
        submit, 
    } 
}; 
 
export default useRegistration;