import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <div style={styles.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <hr />
    </header>
  );
}
