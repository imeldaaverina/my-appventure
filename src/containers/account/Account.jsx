import AuthProvider from "../../providers/auth/AuthProvider";
import AccountLayout from "../../components/layout/AccountLayout";
import { Icon } from '@iconify/react';
import { ButtonMyProfile, ButtonMyProfileSandi, Button } from "../../components/button";
import { useAccountDispatcher } from '../../redux/reducers/account';
import { useFormik, getIn } from "formik";
import { CameraIcon } from '@heroicons/react/outline';
import { useRouter } from "next/router";
import useAccount from "./hooks/useAccount"
import { data } from "autoprefixer";
import Image from "next/dist/client/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoginDispatcher } from "../../redux/reducers/login/slice";
import { callAPI } from "../../helpers/network";

const initialValues = {
  files: null,
};

const AccountContainer = () => {
  const { profile } = useAccount();
  const { picture } = useAccount();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('data');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    window.location.reload();
  }

  const { push } = useRouter();
  const { account: { loading }, doAccount } = useAccountDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        filename: values.filename,
      };
      await doAccount(payload);
      push('/success_registration');
    } catch (error) {
      alert(error);
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('files', formValues.files);
    const upload = await callAPI({
      url: '/v1/upload',
      method: 'post',
      data: formData,
      headers: {
        Authorization: `Bearer ${getJwt()}`,

      },
    });

    const fileUrl = upload.data[0].url;

    const payload = {
      data: {
        photo: `${fileUrl}`,
        isPublish: true,
        postedBy: `${getUser().username}`,
      },
    };
    const submitAccount = await callAPI({
      url: '/user/daftar',
      method: 'post',
      data: payload,
      headers: {
        Authorization: `Bearer ${getJwt()}`,
      },
    });
    if (submitAccount.status === 200) {
      setLoading(false);
      alert('Create posts success!');
    }

  }

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    // validationSchema,  
    onSubmit
  });

  const [preview, setPreview] = useState();
  const handleChangeFile = (e) => {
    const files = e.target.files;
    if (files) {
      setPreview(URL.createObjectURL(files[0]));
      setFieldValue('files', files[0]);
    }
  };

  const [data, setData] = useState();
  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem('data'))
    try {
      const response = await axios({
        url: `https://myappventure-api.herokuapp.com/api/follow/jumlahfollowing/${user.id}`,
        method: 'get',
        params: {
          idUser: user.id,
          page: 0,
          size: 30,
        }
      });
      console.log("response > ", response.data);
      setData(response.data.Data);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [datas, setDatas] = useState();
  const fetchDatas = async () => {
    const user = JSON.parse(localStorage.getItem('data'))
    try {
      const response = await axios({
        url: `https://myappventure-api.herokuapp.com/api/follow/jumlahfollower/${user.id}`,
        method: 'get',
        params: {
          idUser: user.id,
          page: 0,
          size: 30,
        }
      });
      console.log("response > ", response.data);
      setDatas(response.data.Data);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  // const [users, setUsers] = useState();
  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios({
  //       url: 'https://myappventure-api.herokuapp.com/api/user/detail/cariuser',
  //       method: 'get',
  //       params: {
  //         page: 0,
  //         size: 300,
  //         nama: user.username
  //       }
  //     });
  //     console.log("response > ", response.data.data.content[0].urlFileName);
  //     setUsers(response.data.data.content[0].urlFileName);
  //   } catch (error) {
  //     console.log("error > ", error);
  //   }

  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <AuthProvider>
      <AccountLayout>
        <section>
          <div className="font-Poppins min-h bg-cover bg-[url('/homepage-bg.jpg')] w-full mx-auto">
            <div className="max-w-md mx-auto h-full pt-40 px-2">
              <div className="text-white">
                <a href="./home">
                  <Icon icon="eva:arrow-circle-left-outline" width="40" />
                </a>
              </div>

              <div className="">

                <div className="w-40 h-40 m-auto flex justify-center items-center border rounded-full bg-white">
                <img className="rounded-full w-40 h-40" src={picture} width={100} height={100}/>
                  {/* <p>{users}</p> */}
                </div>

                {/* <label
                  htmlFor="files"
                  className="w-40 h-40 m-auto flex justify-center items-center border rounded-full cursor-pointer bg-white">
                  {preview ? <img className="h-full w-full object-cover rounded-full bg-white" src={preview} width={300} height={300} /> : <CameraIcon className="h-12 w-12 text-gray-600" />}
                  <input id="files" type="file" name="files" className="hidden" accept=".jpg, .png, .jpeg" onChange={handleChangeFile} dataTestId="input-files" />
                </label> */}

              </div>

              <div className="text-white pt-8 font-medium text-2xl flex justify-center">
                {profile}
              </div>
              <div className="flex justify-center text-white py-4">
                <div className="px-2">
                  <a href="./follower-list">
                    {datas} Pengikut
                  </a>
                </div>

                <div className="px-2">
                  <a href="./following-list">
                    {data} Mengikuti
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 min-h-screen max-w-md mx-auto">
            <div className="pt-4">
              <a href="./my-profile">
                <ButtonMyProfile type="" label="Profil Saya" icon={<Icon icon="akar-icons:person" width="25" height="25" />} />
              </a>
            </div>
            <div className="pt-3">
              <a href="./my-post">
                <ButtonMyProfile type="" label="Unggahan Saya" icon={<Icon icon="clarity:copy-line" width="26" height="26" />} />
              </a>
            </div>
            <div className="pt-3">
              <a href="./my-community">
                <ButtonMyProfile type="" label="Komunitas Saya" icon={<Icon icon="ic:round-groups" width="28" height="28" />} />
              </a>
            </div>
            <a href="./about-us">
              <div className="pt-3">
                <ButtonMyProfile type="" label="Tentang Kami" icon={<Icon icon="icon-park-outline:oval-love-two" width="26" height="26" />} />
              </div>
            </a>
            <div className="pt-14">
              <ButtonMyProfileSandi type="" label="Undang Teman" />
            </div>
            <div className="pt-3">
              <button onClick={() => handleLogout()} type="button"
                className="text-white bg-[#329D9C] text-xl font-semibold w-full h-full rounded-xl py-3 px-3 flex justify-center items-center">Keluar</button>
            </div>

          </div>
        </section>
      </AccountLayout>
    </AuthProvider>)
}

export default AccountContainer;