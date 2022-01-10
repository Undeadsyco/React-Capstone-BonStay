import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import useUtils from '../../Utils/useUtils';
import {
  LoginContainer, Form, StyledLink,
  InputContainer, Input, BtnBox, Btn,
} from './styles';

const validation = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(8).max(12),
})

const Login = (props) => {
  const { isLoggedIn } = props;
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate])

  const { login } = useUtils(props);

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <LoginContainer className="multiGrid" cols={12} rows={12}>
      <Form onSubmit={formik.handleSubmit}>
        <h2>BonStay with Us</h2>
        <InputContainer>
          <label htmlFor="email">Email:</label>
          <Input
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password:</label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <BtnBox>
          <Btn type="submit">Login</Btn>
        </BtnBox>
        <div>
          <StyledLink to="/register">Sign Up</StyledLink> to create a new account
        </div>
      </Form>
    </LoginContainer>
  );
}

export default Login;