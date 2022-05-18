// import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import { MyCommunityLayout } from "../components/layout";
// import { data } from "autoprefixer";

// const cobacommunity = () => {

//     const [data, setData] = useState();

//     const fetchData = async () => {
//         try {
//           const response = await axios({
//             url: 'https://myappventure-api.herokuapp.com/api/komunitas/list',
//             method: 'get',
//           });
//         //   console.log("response > ", response.data);
//           setData(response.data.data.content);
//         } catch (error) {
//           console.log("error > ", error);
//         }
//       };
    
//       useEffect(() => {
//         fetchData();
//       }, []);
    
//       return (
//           <>
//           {console.log(data)}
//           <div>
//               {data && data.map ((item, i) => {
//                   return (
//                     <>
//                     <div className="">
//                         <img src={item.urlFileName} width={80} height={80}/>
//                         <div className="">{item.namaKomunitas}</div>
//                     </div>
//                     </>
//                   )
//               })}
//           </div>
//           </>
//       )
//     };
  

// export default cobacommunity;

    