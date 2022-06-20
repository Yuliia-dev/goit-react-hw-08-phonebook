import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Container, NavLinks } from 'components/AuthNav/AuthNav.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <NavLinks to="/">home </NavLinks>
      {isLoggedIn && <NavLinks to="contacts">contacts </NavLinks>}
    </Container>
  );
}
