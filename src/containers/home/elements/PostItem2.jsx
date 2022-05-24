
/*
created_date: "2022-05-24T20:22:27.166+0700"
deleted_date: null
filePosts: []
id: 76
jumlahKomentar: 0
jumlahLike: 0
postIn: null
text: "coba gambar"
updated_date: "2022-05-24T20:22:27.166+0700"
urlFileName1: "http://localhost:9091/api/showFile/[]"

user:
authorities: (3) [{…}, {…}, {…}]
fileName: "1952022121610dampakmie.jpg"
id: 73
nama: "aqua@gmail.com"
otp: "1342"
otpExpiredDate: "2022-04-09T13:05:37.694+00:00"
roles: (3) [{…}, {…}, {…}]
urlFileName: "https://myappventure.s3.amazonaws.com/1952022121610dampakmie.jpg"
username: "aqua@gmail.com"
*/

const PostItem2 = ({data})=>{
  return(
   <div className="border mb-2 p-3 rounded-lg shadow-md">
    <div className="grid grid-cols-2 gap-3 ">
      <div className="font-normal text-sm">{data.created_date}</div>
      <div className="font-bold">{data.text}</div>
    </div>
    <div>
      <img src={data.user.urlFileName} alt="gambar-postingan" />
    </div>
   </div>
  )
}

export default PostItem2