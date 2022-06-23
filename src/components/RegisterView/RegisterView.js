import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from 'redux/auth/auth-operation';
import {
  ContainerRegister,
  TextRegister,
  FormRegister,
  InputForm,
  LabelForm,
  TextForm,
  ButtonRegister,
} from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <ContainerRegister>
      <ToastContainer position="top-center" />
      <TextRegister>You can register here</TextRegister>
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <LabelForm>
          <TextForm>Name</TextForm>

          <InputForm
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your name.."
            required
          />
        </LabelForm>
        <LabelForm>
          <TextForm>Email</TextForm>

          <InputForm
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email.."
            required
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
            required
          />
        </LabelForm>
        <ButtonRegister type="submit">Sign Up </ButtonRegister>
      </FormRegister>
    </ContainerRegister>
  );
}
