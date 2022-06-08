import { useState, useEffect } from "react";
import useLogin from "./useLogin";
const useForm = ({
    initialValues,
}) => {
    const { submit } = useLogin();
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
    }
    const handleBlur = (fieldName, e) => {
        setTouched({
            ...touched,
            [fieldName]: e ? true : false,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid) {
            const payload = {
                identifier: values.email,
                password: values.password,
            };
            try {
                await submit(payload);
            } catch (error) {
                console.log('error > ', error);
            }
        }
    }
    const hasErrors = (fieldName) => {
        if (touched && errors) {
            return touched[fieldName] && errors[fieldName];
        }
    }
    const validateField = () => {
        const _isValid = true;
        const _errors = {};
        if (!values.password) {
            _isValid = false;
            Object.assign(_errors, { ..._errors, password: 'password and email is required' });
        }
        if (!values.email) {
            _isValid = false;
            Object.assign(_errors, { ..._errors, email: 'diperlukan email' });
        }
        if (touched.email && !values.email) {
            _isValid = false;
            Object.assign(_errors, { ..._errors, email: 'diperlukan email' });
        }
        if (touched.password && !values.password) {
            _isValid = false;
            Object.assign(_errors, { ..._errors, password: 'password and email is required' });
        }
        if (values.password && values.password !== "" && values.password.length < 6 && values.password.length > 10) {
            _isValid = false;
            Object.assign(_errors, { ..._errors, password: 'password harus 6-10 karakter' });
        }
        if (values.email && values.email !== "" && !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            _isValid = false;
            Object.assign(_errors, { ..._errors, email: 'email tidak valid' });
        }

        setErrors(_errors);
        setIsValid(_isValid);
    }
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
        isValid
    }
};
export default useForm;