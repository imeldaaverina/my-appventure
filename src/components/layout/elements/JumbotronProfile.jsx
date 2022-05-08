import { SearchIcon } from "@heroicons/react/outline";
import { ButtonJmbtrn } from "../../button";
import { Searchbar } from "../../searchbar";


const initialValues = { 
  files: null,  
};  

const JumbotronProfile = () => {

  // const formData = new FormData();
  // formData.append('files', formValues.files);
  // const upload = await callAPI({
  //   url: '/v1/upload',
  //   method: 'post',
  //   data: formData,
  //   headers: {
  //     Authorization: `Bearer ${getJwt()}`,
  //   },
  // });

  // const fileUrl = upload.data[0].url;
  // const payload = {
  //   data: {
  //     photo: `${fileUrl}`,
  //     isPublish: true,
  //     postedBy: `${getUser().username}`,
  //   },
  // };

  // const [preview, setPreview] = useState();
  // const handleChangeFile = (e) => {
  //   const files = e.target.files;
  //   if (files) {
  //     setPreview(URL.createObjectURL(files[0]));
  //     setFieldValue('files', files[0]);
  //   }
  // };

    return (  
    <main className="font-Poppins min-h bg-cover bg-[url('../../public/homepage-bg.jpg')] w-full mx-auto">
      <div className="max-w-md mx-auto h-full pt-40 px-2">
      {/* <div className="pt-2">
                  <label
                    htmlFor="files"
                    className="w-20 h-20 m-auto flex justify-center items-center rounded-full cursor-pointer bg-white">
                      {preview ? <img className="h-full w-full object-cover rounded-full bg-white" src={preview} /> : <CameraIcon className="h-8 w-8 text-gray-600" />}
                    <input id="files" type="file" name="files" className="hidden" accept=".jpg, .png, .jpeg" onChange={handleChangeFile} dataTestId="input-files"   />
                  </label>
                  </div>
 */}



      </div>
    </main>
  )
}

export default JumbotronProfile;