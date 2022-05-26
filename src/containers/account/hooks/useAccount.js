import { useState, useEffect } from "react"; 
 
const useAccount = () => { 
 
  const [profile, setProfile] = useState(); 
  const [picture, setPicture] = useState(); 
  
 
  const loadProfile = () => {
    const _profile = localStorage.getItem('username');
    setProfile(_profile);
  };

  const loadPicture = () => {
    const _picture = localStorage.getItem('picture');
    setPicture(_picture);
  };
 
  useEffect(() => { 
    loadProfile(),
    loadPicture();  
  }, []) 
 
  return { 
    profile,
    picture
  } 
 
} 
 
export default useAccount;