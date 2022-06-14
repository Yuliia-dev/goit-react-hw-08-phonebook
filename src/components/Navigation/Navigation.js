import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
  },
  // link: {
  //   color: 'red',
  // },
};

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav style={styles.container}>
      <NavLink to="/">home </NavLink>
      {isLoggedIn && <NavLink to="contacts">contacts </NavLink>}
    </nav>
  );
}
