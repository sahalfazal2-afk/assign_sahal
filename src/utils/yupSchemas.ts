import * as Yup from 'yup';

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .required('Email or username is required')
    .test('email-or-username', 'Enter a valid email or username', value => {
      if (!value) return false;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;

      return emailRegex.test(value) || usernameRegex.test(value);
    }),

  password: Yup.string().required('Password is required'),
});

export type LoginFormValues = Yup.InferType<typeof validationSchemaLogin>;
