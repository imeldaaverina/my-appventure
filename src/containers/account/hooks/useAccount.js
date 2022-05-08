import { useState, useEffect } from "react"; 
 
const useAccount = () => { 
 
  const [profile, setProfile] = useState(); 
 
  const loadProfile = () => { 
    const _profile = localStorage.getItem('access_token'); 
    setProfile(JSON.parse(_profile)); 
  }; 
 
  useEffect(() => { 
    loadProfile(); 
  }, []) 
 
  return { 
    profile 
  } 
 
} 
 
export default useAccount;