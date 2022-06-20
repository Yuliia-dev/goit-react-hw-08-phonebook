import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operation';
import {
  ContainerRegister,
  TextRegister,
  FormRegister,
  InputForm,
  LabelForm,
  TextForm,
  ButtonRegister,
} from '../RegisterView/RegisterView.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <ContainerRegister>
      <TextRegister>You can log in here</TextRegister>
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <LabelForm>
          <TextForm>Email</TextForm>

          <InputForm
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email.."
          />
        </LabelForm>
        <LabelForm>
          <TextForm>Password</TextForm>

          <InputForm
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Your password.."
          />
        </LabelForm>
        <ButtonRegister type="submit">
          <strong>Log in</strong>
        </ButtonRegister>
      </FormRegister>
    </ContainerRegister>
  );
}
