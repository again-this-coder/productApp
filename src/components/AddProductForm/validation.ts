import * as Yup from 'yup';

export const productValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters long'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters long'),
  price: Yup.number()
    .required('Price is required')
    .min(0.01, 'Price must be greater than 0'),
});

export default productValidationSchema;
