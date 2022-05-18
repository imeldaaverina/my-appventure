import { useState, useEffect } from "react"; 
 
const useProfile = () => { 
 
  const [email, setEmail] = useState(); 
 
  const loadEmail = () => {
    const _email = localStorage.getItem('email');
    setEmail(_email);
  };
 
  useEffect(() => { 
    loadEmail(); 
  }, []) 
 
  return { 
    email 
  } 
 
} 
 
export default useProfile;