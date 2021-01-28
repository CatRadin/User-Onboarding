import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required('User Name is required'),
    email: yup
    .string()
    .email()
    .required('Email is required'),
    password: yup
    .string()
    .required([6],'Password is required'),
    service: yup
    .boolean()
    .oneOf([true], 'You must accept our terms of service')
})