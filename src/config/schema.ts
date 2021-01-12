import * as yup from 'yup';

export default yup.object().shape({
  DB_HOST: yup.string().required(),
  DB_PORT: yup.number().required(),
  DB_NAME: yup.string().required(),
  DB_USER: yup.string().required(),
  DB_PASSWORD: yup.string().required(),
  NODE_ENV: yup
    .string()
    .oneOf(['development', 'production', 'test'])
    .default('development'),
  PORT: yup.number().required(),
});
