import { useState } from "react"; 
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";

const Like = () => { 
    const [like, setLike] = useState(false);
    return ( 
    <div>
        {like ? (
            <LikeSolidIcon
              className="text-red-500 w-6 h-6"
              onClick={() => setLike(!like)}
            />
          ) : (
            <LikeOutlineIcon
            className="text-red-500 w-6 h-6"
            onClick={() => setLike(!like)}
            />
          )}
          </div>
  
    ) 
} 

// const followUser = () => {
//     fetch('/follow', {
//         method:"put",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization":"Bearer" +localStorage.getItem('jwt')
//         },
//         body:JSON.stringify({
//             followID:userID
//         })
//     }).then(res => res.json())
//     .then(data =>{
//         console.log(data)
//     })
// }


 
export default Like;