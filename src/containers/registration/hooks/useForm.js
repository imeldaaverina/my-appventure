import { useState, useEffect } from 'react';
const useForm = ({ initialValues }) => {
  const initValues = { ...initialValues };
  const initTouched = { ...initialValues, username: false, email: false, password: false };
  const [values, setValues] = useState(initValues);
  const [touched, setTouched] = useState(initTouched);
  const [errors, setErrors] = useState();
  const [isValid, setIsValid] = useState(false);
  const handleChange = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };
  const handleBlur = (fieldName, e) => {
    setTouched({
      ...touched,
      [fieldName]: e ? true : false,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(JSON.stringify(values));
    }
  };
  const hasErrors = (fieldName) => {
    if (touched && errors) {
      return touched[fieldName] && errors[fieldName];
    }
  };
  const validateField = () => {
    const _isValid = true;
    const _errors = {};
    if (!values.username) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, username: 'diperlukan username' });
    }
    if (!values.password) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, password: 'diperlukan password' });
    }
    if (!values.email) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, email: 'diperlukan email' });
    }
    if (touched.username && !values.username) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, username: 'diperlukan username' });
    }
    if (touched.email && !values.email) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, email: 'diperlukan email' });
    }
    if (touched.password && !values.password) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, password: 'diperlukan password' });
    }
    if (values.username && values.username !== '' && values.username.length > 3 && values.username.length < 15) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, username: 'username gunakan 3-15 karakter' });
    }
    if (values.password && values.password !== '' && values.password.length > 6 && values.password.length < 10 && values.password.match(/^\S*$/)) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, password: 'Kata sandi gunakan 6-10 karakter, tanpa spasi' });
    }
    if (values.email && values.email !== '' && !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, email: 'email tidak valid' });
    }
    setErrors(_errors);
    setIsValid(_isValid);
  };
  useEffect(() => {
    validateField();
  }, [values, touched]);
  return {
    handleChange,
    handleSubmit,
    handleBlur,
    hasErrors,
    errors,
    values,
    touched,
    isValid,
  };
};
export default useForm;