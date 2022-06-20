import { Container, NavLinks } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Container>
      <NavLinks to="register">register </NavLinks>
      <NavLinks to="login">login </NavLinks>
    </Container>
  );
}
