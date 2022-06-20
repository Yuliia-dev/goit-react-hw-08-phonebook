import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operation';
import avatar from './avatar.png';
import { Button, Container, Text } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <Container>
      <img src={avatar} width="60" alt="avatar" />
      <Text>Welcome, {name}</Text>
      <Button type="submit" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
}
