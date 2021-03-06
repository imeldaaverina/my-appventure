import useAccount from "../account/hooks/useAccount";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import AuthProvider from "../../providers/auth/AuthProvider";
import UploadLayout from "../../components/layout/UploadLayout";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import React, { useState, useRef, useEffect } from "react";
import { callAPI } from "../../helpers/network";
import { useRouter } from "next/router";

import { Icon } from "@iconify/react";
import { ArrowCircleLeftIcon, ExclamationCircleIcon, } from "@heroicons/react/outline";
import { ButtonPost, } from "../../components/button";

const validationSchema = Yup.object({
  text: Yup.string().required("diperlukan text").max(2500, "text tidak lebih dari 2500 kata"),
  file: Yup.array().max(10, "File maksimal 10").nullable(),
});

const initialValues = {
  text: "",
  file: null,
};

const TextAreaInput = styled.textarea`
  height: ${(props) => props.idealHeight || "160px"};
`;

const UploadKomunitas = () => {
  const [loading, setLoading] = useState(false);
  const { profile, picture } = useAccount();
  const { query } = useRouter();
  const [user, setUser] = useState();

  const id = query.id;

  const [previews, setPreviews] = useState();
  const { push } = useRouter();

  const onSubmit = async (formValues) => {
    console.log(formValues)
    setLoading(true);
    try {
      //upload profil picture
      const formData = new FormData();
      if (formValues.file && formValues.file.length > 0) {
        for (let i = 0; i < formValues.file.length; i++) {
          formData.append(`file`, formValues.file[i]);
        }
        formData.append("idUser", user.id);
        formData.append("idKomunitas", id);
        formData.append("text", formValues.text);
      } else {
        formData.append("idKomunitas", id);
        formData.append("idUser", user.id);
        formData.append("text", formValues.text);
      }


      const response = await callAPI({
        url: "/post/postingankomunitas/save",
        method: "post",
        data: formData,
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      console.log(response)
      if (response.data.status == 200) {
        push(`./detail-community?id=${id}`);
      }


    } catch (error) {
      console.log("error > ", error);
      alert(error);
      setLoading(false);

    }

  };

  const handleChangeFiles = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filePreviews = [];
      for (let i = 0; i < files.length; i++) {
        filePreviews.push(files[i]);
      }

      setPreviews(filePreviews);
      setFieldValue("file", filePreviews);

      e.target.value = "";
    }
  };

  const textareaRef = useRef("");
  const [currentValue, setCurrentValue] = useState(""); // you can manage data with it

  const idealHeight = useRef(32);
  const lastScrollHeight = useRef(50);
  const textAreaRef = useRef(null);

  if (textAreaRef.current != null && textAreaRef.current != undefined) {
    textAreaRef.current.style.height = "0px"; // This creates an inline style
    let scrollHeight = textAreaRef.current.scrollHeight;
    const style = window.getComputedStyle(textAreaRef.current);
    textAreaRef.current.removeAttribute("style"); // The inline style must be removed
    let delta = scrollHeight - lastScrollHeight.current;
    lastScrollHeight.current = scrollHeight;
    idealHeight.current = idealHeight.current + delta;
  }

  const renderPreviews = () => {
    if (previews && previews.length > 0) {
      return previews.map((item) => (
        <div className="inline-flex justify-center items-center text-center h-28 w-28  text-sm cursor-pointer hover:bg-gray-300 rounded-lg">
          {item.type.includes("image") ? (
            <Image
              src={URL.createObjectURL(item)}
              className="object-cover h-full w-full rounded-lg"
              width={110}
              height={110}
            />
          ) : (
            <video
              className="object-cover h-full w-full rounded-lg"
              controls
              src={URL.createObjectURL(item)}
            />
          )}
        </div>
      ));
    }
    return <></>;
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  useEffect(() => {
    if (id) {
      setUser(JSON.parse(localStorage.getItem('data')))
    }
  }, [id]);

  return (
    <AuthProvider>
      <UploadLayout>
        <div className="min-h-screen font-Poppins flex justify-center ">
          <div className="max-w-lg">
            <div className="flex flex-col mt-5 w-96 justify-center items-center">
              <div className="flex justify-center">
                <Link href={`./detail-community?id=${id}`}>
                  <a>
                    <ArrowCircleLeftIcon className="w-10 h-10 " />
                  </a>
                </Link>
                <div className="font-medium text-2xl flex justify-center items-center ml-1 mr-4 w-72">
                  Buat Postingan Baru
                </div>
              </div>
              <div className="mt-14 border rounded-lg border-[#35BBBA] w-96 px-4 py-3 flex flex-col">
                <div className="flex">
                  <img
                    src={picture}
                    className="rounded-full w-10 h-10"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <div className="pr-3 flex ">
                    <div className="flex flex-col ml-2 items-center justify-center">
                      <div className="font-semibold flex flex-col">
                        {profile}
                      </div>
                    </div>
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="mt-1"
                >
                  <div className="rounded-lg flex flex-col justify-start items-start">
                    <label className="block w-full mb-3">
                      <TextAreaInput
                        name="text"
                        type="text"
                        className="pt-3 pb-4 focus:ring-0 focus:outline-none font-light w-full resize-none overflow-hidden text-sm"
                        placeholder="Tulis Postingan..."
                        onBlur={handleBlur}
                        data-testid={"input-caption"}
                        onChange={handleChange}
                        ref={textAreaRef}
                        idealHeight={idealHeight.current + "px"}
                      />
                    </label>
                    <div>
                      <div className=" -ml-4 pl-2 pr-1 my-3 w-96 grid grid-cols-3 lg:grid-cols-3 gap-1">
                        {renderPreviews()}
                      </div>
                      <div>
                        {getIn(touched, "files") &&
                          getIn(errors, "files") && (
                            <div
                              className="flex items-center text-sm justify-start"
                              data-testid="error-files"
                            >
                              <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                              {getIn(errors, "files")}
                            </div>
                          )}{" "}
                      </div>
                      <div>
                        {getIn(touched, "text") &&
                          getIn(errors, "text") && (
                            <div
                              className="flex items-center justify-start text-sm mb-8"
                              data-testid="error-text"
                            >
                              <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                              {getIn(errors, "text")}
                            </div>
                          )}{" "}
                      </div>

                      <div className="flex justify-between w-96 -ml-4 pl-2 pr-3">
                        <div>
                          <label
                            htmlFor="uploads"
                            className="inline-flex justify-center items-center text-center text-sm cursor-pointer rounded-lg"
                          >
                            <Icon
                              icon="clarity:image-line"
                              className="w-8 h-7"
                            />
                            <input
                              type="file"
                              name="files"
                              id="uploads"
                              className="hidden"
                              accept="image/*, video/*"
                              onChange={handleChangeFiles}
                              multiple
                            />
                          </label>
                        </div>
                        <div>
                          <ButtonPost
                            disabled={loading}
                            type="submit"
                            label={loading ? "Memposting..." : "Posting"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </UploadLayout>
    </AuthProvider>
  );
};
export default UploadKomunitas;
