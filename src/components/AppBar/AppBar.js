import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { ContainerAppBar, HeaderAppBar } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HeaderAppBar>
      <ContainerAppBar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ContainerAppBar>
    </HeaderAppBar>
  );
}
