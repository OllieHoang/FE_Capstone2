import * as Yup from 'yup';
export const validateSchema = Yup.object().shape({
    pass: Yup.string().min(6, 'Your password has at least 6 characters'),
    cfmpass: Yup.string().oneOf([Yup.ref('pass'), null], 'Passwords must match'),
});
