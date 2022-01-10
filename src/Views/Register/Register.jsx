import { useFormik } from "formik";
import * as yup from 'yup';

import {
  RegisterContainer, Form, StyledLink, RegBtn, 
  InputContainer, Input, BtnBox, ErrContainer,
} from "./styles";

import useUtils from "../../Utils/useUtils";

const validation = yup.object({
  name: yup.string().required().min(3),
  address: yup.string().required(),
  phoneNo: yup.number().required()
    .test('len', 'phone number must be 10 digits long', val => val.toString().length === 10),
  email: yup.string().required(),
  password: yup.string().required().min(8).max(12)
})

const Register = (props) => {
  const { register } = useUtils(props);
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      address: '',
      phoneNo: 0,
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      register(values);
    }
  });

  return (
    <RegisterContainer className="multiGrid" cols={12} rows={12}>
      <Form onSubmit={formik.handleSubmit}>
        <InputContainer>
          <label htmlFor="name">
            <span>Name:</span>
            {formik.errors.name && <ErrContainer>{formik.errors.name}</ErrContainer>}
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            values={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="address">
            <span>Address:</span>
            {formik.errors.address && <ErrContainer>{formik.errors.address}</ErrContainer>}
          </label>
          <Input
            id="address"
            name="address"
            type="text"
            values={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="phoneNo">
            <span>Phone Number:</span>
            {formik.errors.phoneNo && <ErrContainer>{formik.errors.phoneNo}</ErrContainer>}
          </label>
          <Input
            id="phoneNo"
            name="phoneNo"
            type="number"
            values={formik.values.phoneNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">
            <span>Email:</span>
            {formik.errors.email && <ErrContainer>{formik.errors.email}</ErrContainer>}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            values={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">
            <span>Password:</span>
            {formik.errors.password && <ErrContainer>{formik.errors.password}</ErrContainer>}
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            values={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        <BtnBox>
          <RegBtn type="submit">Register</RegBtn>
        </BtnBox>
        <div>
          <StyledLink to='/login'>Login</StyledLink> with existing account.
        </div>
      </Form>
    </RegisterContainer>
  );
}

export default Register;